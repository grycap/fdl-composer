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

  public exportToYaml() {
    const nodeValues = Object.values(this.state.nodes);
    const linkValues = Object.values(this.state.links);

    const storages = nodeValues.filter(
      (x) => x.type === "s3" || x.type === "onedata" || x.type === "minio"
    );
    const oscarFxs = nodeValues
      .filter((x: any) => x.type === "oscar-fx")
      .map((node) => {
        const nodeInputLinks = linkValues.filter(
          (lv) =>
            (lv.to.nodeId === node.id &&
              (lv.to.portId === "port1" || lv.to.portId === "port4")) ||
            (lv.from.nodeId === node.id &&
              (lv.from.portId === "port1" || lv.from.portId === "port4"))
        );

        const nodeOutputLinks = linkValues.filter(
          (lv) =>
            (lv.to.nodeId === node.id &&
              (lv.to.portId === "port2" || lv.to.portId === "port3")) ||
            (lv.from.nodeId === node.id &&
              (lv.from.portId === "port2" || lv.from.portId === "port3"))
        );

        const inputNode = storages.find((x) =>
          nodeInputLinks.some(
            (y) => y.from.nodeId === x.id || y.to.nodeId === x.id
          )
        );

        const outputNode = storages.find((x) =>
          nodeOutputLinks.some(
            (y) => y.from.nodeId === x.id || y.to.nodeId === x.id
          )
        );

        const copy = JSON.parse(JSON.stringify(node.properties));
        const input = copy.input;
        if (input) {
          input.storage_provider = `${inputNode?.type}.${inputNode?.properties.name}`;
          if (input.prefix)
            input.prefix = input.prefix.replace(" ", "").split(",");
          if (input?.suffix)
            input.suffix = input.suffix.replace(" ", "").split(",");
          copy.input = [input];
        }
        const output = copy.output;
        if (output) {
          output.storage_provider = `${outputNode?.type}.${outputNode?.properties.name}`;
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

        const computeResources = copy.batch?.compute_resources;
        if (computeResources?.instance_types) {
          computeResources.instance_types = computeResources.instance_types
            .replace(" ", "")
            .split(",");
        }
        if (computeResources?.subnets) {
          computeResources.subnets = computeResources.subnets
            .replace(" ", "")
            .split(",");
        }
        if (computeResources?.security_group_ids) {
          computeResources.security_group_ids = computeResources.security_group_ids
            .replace(" ", "")
            .split(",");
        }

        const lambdaEnvironment = copy.lambda?.environment;
        if (lambdaEnvironment) {
          copy.lambda.environment = {
            Variables: lambdaEnvironment.Variables.replace(" ", "")
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
        const batchEnvironment = copy.batch?.environment;
        if (batchEnvironment) {
          copy.batch.environment = {
            Variables: lambdaEnvironment.Variables.replace(" ", "")
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
      .filter((x: any) => x.type === "onedata")
      .map((node) => node.properties)
      .reduce((a, b) => {
        const copy = JSON.parse(JSON.stringify(b));
        return { ...a, [b.name]: copy };
      }, {});

    const s3Storage = nodeValues
      .filter((x: any) => x.type === "s3")
      .map((node) => node.properties)
      .reduce((a, b) => {
        const copy = JSON.parse(JSON.stringify(b));
        delete copy.name;
        return { ...a, [b.name]: copy };
      }, {});

    const minio = nodeValues
      .filter((x: any) => x.type === "minio")
      .map((node) => node.properties)
      .reduce((a, b) => {
        const copy = JSON.parse(JSON.stringify(b));
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
        minio: minio,
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
