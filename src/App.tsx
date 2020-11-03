import React from "react";
import "./App.css";
import { cloneDeep, mapValues } from "lodash";
import { Message, PageContent, Sidebar, SidebarItem } from "./components";
import {
  actions,
  FlowChart,
  INodeInnerDefaultProps,
} from "@mrblenny/react-flow-chart";
import { chartScheme } from "./misc/chartScheme";
import styled from "styled-components";
import { Button, Modal, Layout, Menu } from "antd";
const { Header, Content } = Layout;
const Outer = styled.div`
  padding: 30px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`;

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  console.log(node.properties);

  const [visible, setVisible] = React.useState(false);
  switch (node.type) {
    case "function-input":
    case "function-output":
    case "s3-storage":
    case "one-data-storage":
      return (
        <Outer>
          <p>{node.properties?.display || node.type}</p>
        </Outer>
      );
    default:
      return (
        <Outer onDoubleClick={() => setVisible(true)}>
          <Modal
            title={node.properties?.display || node.type}
            visible={visible}
            onOk={() => {
              node.properties = { ...node.properties, test: "test" };
              setVisible(false);
            }}
            onCancel={() => setVisible(false)}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
          ></Modal>
          <p>{node.properties?.display || node.type}</p>
        </Outer>
      );
  }
};

export class App extends React.Component {
  public state = cloneDeep(chartScheme);

  public render() {
    const chart = this.state;
    const stateActions = mapValues(actions, (func: any) => (...args: any) =>
      this.setState(func(...args))
    ) as typeof actions;
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Button ghost onClick={() => console.log(this.state)}>
                Log state
              </Button>
            </Menu>
          </Header>
          <PageContent>
            <FlowChart
              chart={chart}
              callbacks={stateActions}
              Components={{
                NodeInner: NodeInnerCustom,
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
                      custom: "property",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      custom: "property",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      custom: "property",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      custom: "property",
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
                      custom: "property",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      custom: "property",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      custom: "property",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      custom: "property",
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
                      custom: "property",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      custom: "property",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      custom: "property",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      custom: "property",
                    },
                  },
                }}
                properties={{
                  custom: "property",
                }}
              />
              <SidebarItem
                type="one-data-storage"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      custom: "property",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      custom: "property",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      custom: "property",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      custom: "property",
                    },
                  },
                }}
                properties={{
                  custom: "property",
                }}
              />
              <SidebarItem
                properties={{
                  display: "oscar fx",
                }}
                type="Function"
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      custom: "property",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      custom: "property",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      custom: "property",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      custom: "property",
                    },
                  },
                }}
              />
              <SidebarItem
                type="aws-function"
                properties={{ display: "aws fx" }}
                ports={{
                  port1: {
                    id: "port1",
                    type: "top",
                    properties: {
                      custom: "property",
                    },
                  },
                  port2: {
                    id: "port2",
                    type: "right",
                    properties: {
                      custom: "property",
                    },
                  },
                  port3: {
                    id: "port3",
                    type: "bottom",
                    properties: {
                      custom: "property",
                    },
                  },
                  port4: {
                    id: "port4",
                    type: "left",
                    properties: {
                      custom: "property",
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
