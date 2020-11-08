import React from "react";
import "./App.css";
import { cloneDeep, mapValues } from "lodash";
import {
  Message,
  PageContent,
  Sidebar,
  SidebarItem,
  PortCustom,
} from "./components";
import { actions, FlowChart } from "@mrblenny/react-flow-chart";
import { initialState } from "./misc/chartScheme";
import styled from "styled-components";
import { Button, Layout, Menu } from "antd";
import {
  DownloadOutlined,
  ExportOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { saveAs } from "file-saver";
import yaml from "js-yaml";
import { NodeInnerCustom } from "./components/NodeInnerCustom";

const { Header } = Layout;

const StyledButton = styled(Button)`
  margin-right: 1rem;
`;

export class App extends React.Component {
  public state = cloneDeep(initialState);

  public exportToYaml() {
    const nodeValues = Object.values(this.state.nodes);
    const linkValues = Object.values(this.state.links);
    const inputValues = nodeValues.filter((x) => x.type === "function-input");
    const outputValues = nodeValues.filter((x) => x.type === "function-output");

    const oscarFxs = nodeValues
      .filter((x: any) => x.type === "oscar-fx")
      .map((node) => {
        const nodeLinks = linkValues.filter(
          (lv) => lv.to.nodeId === node.id || lv.from.nodeId === node.id
        );

        const inputNode = inputValues.find((x) =>
          nodeLinks.some((y) => y.from.nodeId === x.id || y.to.nodeId === x.id)
        );

        const outputNode = outputValues.find((x) =>
          nodeLinks.some((y) => y.from.nodeId === x.id || y.to.nodeId === x.id)
        );

        return {
          ...node.properties,
          input: [
            inputNode?.properties.suffix
              ? {
                  ...inputNode?.properties,
                  suffix: inputNode.properties.suffix.split(","),
                }
              : {
                  ...inputNode?.properties,
                },
          ],
          output: [
            outputNode?.properties.suffix
              ? {
                  ...outputNode?.properties,
                  suffix: outputNode.properties.suffix.split(","),
                }
              : {
                  ...outputNode?.properties,
                },
          ],
        };
      });
    const awsFxs = nodeValues
      .filter((x: any) => x.type === "aws-fx")
      .map((node) => {
        const nodeLinks = linkValues.filter(
          (lv) => lv.to.nodeId === node.id || lv.from.nodeId === node.id
        );

        const inputNode = inputValues.find((x: any) =>
          nodeLinks.some((y) => y.from.nodeId === x.id || y.to.nodeId === x.id)
        );

        const outputNode = outputValues.find((x: any) =>
          nodeLinks.some((y) => y.from.nodeId === x.id || y.to.nodeId === x.id)
        );

        return {
          ...node.properties,
          input: [
            inputNode?.properties.suffix
              ? {
                  ...inputNode?.properties,
                  suffix: inputNode.properties.suffix.split(","),
                }
              : {
                  ...inputNode?.properties,
                },
          ],
          output: [
            outputNode?.properties.suffix
              ? {
                  ...outputNode?.properties,
                  suffix: outputNode.properties.suffix.split(","),
                }
              : {
                  ...outputNode?.properties,
                },
          ],
        };
      });
    const oneDataStorage = nodeValues
      .filter((x: any) => x.type === "one-data-storage")
      .map((node) => node.properties)
      .reduce((a, b) => {
        const copy = cloneDeep(b);
        delete b.name;
        return { ...a, [b.name]: copy };
      }, {});

    const s3Storage = nodeValues
      .filter((x: any) => x.type === "s3-storage")
      .map((node) => node.properties)
      .reduce((a, b) => {
        const copy = cloneDeep(b);
        delete copy.name;
        return { ...a, [b.name]: copy };
      }, {});
    const output = yaml.dump({
      functions: {
        oscar: oscarFxs.map((x) =>
          JSON.parse(`{ "${x.name}": ${JSON.stringify(x)} }`)
        ),
        aws: awsFxs.map((x) =>
          JSON.parse(`{ "${x.name}": ${JSON.stringify(x)} }`)
        ),
      },
      storage_providers: {
        s3: s3Storage,
        onedata: oneDataStorage,
      },
    });
    const blob = new Blob([output], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "workflow.yaml");
  }

  public exportState() {
    const stateStringified = JSON.stringify(this.state);
    const blob = new Blob([stateStringified], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "state.json");
  }

  public importState() {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e: any) => {
      // var file = e!.target!.files[0];
      const fr = new FileReader();
      fr.onload = async (e) => {
        e?.target?.result &&
          this.setState(JSON.parse(e!.target!.result as string));
      };

      fr.readAsText(input.files![0]);
    };
    input.click();
  }

  public render() {
    const chart = this.state;

    const stateActions = mapValues(
      {
        ...actions,
        onNodeDoubleClick: () => {
          return { ...this.state, selected: {} };
        },
      },
      (func: any) => (...args: any) => {
        this.setState(func(...args));
      }
    ) as typeof actions;

    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <Menu theme="dark" mode="horizontal">
              <StyledButton
                ghost
                icon={<DownloadOutlined />}
                onClick={() => this.exportState()}
              >
                Download state
              </StyledButton>
              <StyledButton
                ghost
                icon={<UploadOutlined />}
                onClick={() => this.importState()}
              >
                Load state
              </StyledButton>
              <StyledButton
                ghost
                icon={<ExportOutlined />}
                onClick={() => {
                  this.exportToYaml();
                }}
              >
                Export yaml
              </StyledButton>
            </Menu>
          </Header>
          <PageContent>
            <FlowChart
              chart={chart}
              callbacks={stateActions}
              Components={{
                NodeInner: NodeInnerCustom,
                Port: PortCustom,
              }}
            />
            <Sidebar>
              <Message>Drag and drop these items onto the canvas.</Message>
              <SidebarItem
                type="function-input"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      path: "",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      path: "",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      path: "",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      path: "",
                    },
                  },
                }}
              />
              <SidebarItem
                type="function-output"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      path: "",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      path: "",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      path: "",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      path: "",
                    },
                  },
                }}
              />
              <SidebarItem
                type="s3-storage"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      path: "",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      path: "",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      path: "",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      path: "",
                    },
                  },
                }}
              />
              <SidebarItem
                type="one-data-storage"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      path: "",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      path: "",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      path: "",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      path: "",
                    },
                  },
                }}
              />
              <SidebarItem
                type="oscar-fx"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      path: "",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      path: "",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      path: "",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      path: "",
                    },
                  },
                }}
              />
              <SidebarItem
                type="aws-fx"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      path: "",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      path: "",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      path: "",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      path: "",
                    },
                  },
                }}
              />
            </Sidebar>
          </PageContent>
        </Layout>
      </div>
    );
  }
}
