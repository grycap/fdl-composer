import React from "react";
import "./App.css";
import { cloneDeep, mapValues } from "lodash";
import { PageContent, PortCustom, SideNav } from "./components";
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

  public extractIO(node: any) {
    const input = node.properties.lambda?.input
      ? node.properties.lambda.input
      : {};
    if (input.prefix) input.prefix = input.prefix.split(",");
    if (input.suffix) input.suffix = input.suffix.split(",");
    const output = node.properties.lambda?.output
      ? node.properties.lambda.output
      : {};
    if (output.prefix) output.prefix = output.prefix.split(",");
    if (output.suffix) output.suffix = output.suffix.split(",");
    const withIO = {
      ...node.properties,
      lambda: {
        ...node.properties.lambda,
        input: [input],
        output: [output],
      },
    };
    return withIO;
  }
  public exportToYaml() {
    const nodeValues = Object.values(this.state.nodes);
    const linkValues = Object.values(this.state.links);

    const oscarFxs = nodeValues
      .filter((x: any) => x.type === "oscar-fx")
      .map((node) => {
        const copy = JSON.parse(JSON.stringify(node.properties));
        const input = copy.input;
        if (input) {
          if (input?.prefix)
            input.prefix = input.prefix.replace(" ", "").split(",");
          if (input?.suffix)
            input.suffix = input.suffix.replace(" ", "").split(",");
          copy.input = [input];
        }
        const output = copy.output;
        if (output) {
          if (output.prefix)
            output.prefix = output.prefix.replace(" ", "").split(",");
          if (output.suffix)
            output.suffix = output.suffix.replace(" ", "").split(",");
          copy.output = [output];
        }

        const environment = copy.environment;
        if (environment) {
          copy.environment = {
            Variables: environment.Variables.replace(" ", "")
              .split(",")
              .map((x: string) => {
                const kvp = x.split("=");
                return { [kvp[0].trim()]: kvp[1].trim() };
              })
              .reduce((a: any, b: any) => {
                return { ...a, ...b };
              }),
          };
        }
        return copy;
      });
    const awsFxs = nodeValues
      .filter((x: any) => x.type === "aws-fx")
      .map((node) => {
        const copy = JSON.parse(JSON.stringify(node.properties));

        const input = copy.lambda?.input;
        if (input) {
          if (input?.prefix)
            input.prefix = input.prefix.replace(" ", "").split(",");
          if (input?.suffix)
            input.suffix = input.suffix.replace(" ", "").split(",");
          copy.lambda.input = input;
        }
        const output = copy.lambda?.output;
        if (output) {
          if (output?.prefix)
            output.prefix = output.prefix.replace(" ", "").split(",");
          if (output.suffix)
            output.suffix = output.suffix.replace(" ", "").split(",");
          copy.lambda.output = output;
        }
        const environment = copy.lambda?.environment;
        if (environment) {
          copy.lambda.environment = {
            Variables: environment.Variables.replace(" ", "")
              .split(",")
              .map((x: string) => {
                const kvp = x.split("=");
                return { [kvp[0].trim()]: kvp[1].trim() };
              })
              .reduce((a: any, b: any) => {
                return { ...a, ...b };
              }),
          };
        }

        const containerEnvironment = copy.lambda?.container?.environment;

        if (containerEnvironment) {
          copy.lambda.container.environment = {
            Variables: containerEnvironment.Variables.replace(" ", "")
              .split(",")
              .map((x: string) => {
                const kvp = x.split("=");
                return { [kvp[0].trim()]: kvp[1].trim() };
              })
              .reduce((a: any, b: any) => {
                return { ...a, ...b };
              }),
          };
        }

        return copy;
      });
    const oneDataStorage = nodeValues
      .filter((x: any) => x.type === "one-data-storage")
      .map((node) => node.properties)
      .reduce((a, b) => {
        const copy = cloneDeep(b);
        delete copy.name;
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
        aws: awsFxs,
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
            <SideNav></SideNav>
          </PageContent>
        </Layout>
      </div>
    );
  }
}
