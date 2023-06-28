import React from "react";
import "./App.css";
import { cloneDeep, mapValues } from "lodash";
import { PageContent, PortCustom, SideNav } from "./components";
import { actions, FlowChart } from "@mrblenny/react-flow-chart";
import { initialState } from "./misc/chartScheme";
import styled from "styled-components";
import { Button, Layout, Menu, notification } from "antd";


import {
  DownloadOutlined,
  ExportOutlined,
  SettingOutlined,
  UploadOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { saveAs } from "file-saver";
import { NodeInnerCustom } from "./components/NodeInnerCustom";
import { ModalS3Provider } from "./components/ModalS3Provider";
import { ModalOneDataProvider } from "./components/ModalOneDataProvider";
import { ModalMinioProvider } from "./components/ModalMinioProvider";
import { ModaldCacheProvider } from "./components/ModaldCacheProvider";
import { ModalTemplate } from "./components/ModalTemplate";
import { yamlExporter } from "./utils/yamlExporter";
import { showerror } from "./components/showError";

const { Header } = Layout;
const { SubMenu } = Menu;

const StyledButton = styled(Button)`
  margin-right: 1rem;
  margin-top: 1rem;
`;

export class App extends React.Component {
  public state = cloneDeep(initialState);

  /**
   *
   */
  constructor(props: any) {
    super(props);
    this.removeStorageProvider = this.removeStorageProvider.bind(this);
    this.editStorageProvider = this.editStorageProvider.bind(this);
    this.importFileState = this.importFileState.bind(this);
  }

  public exportToYaml() {
    const nodeValues = Object.values(this.state.nodes);
    const linkValues = Object.values(this.state.links);

    var outputyaml=yamlExporter(nodeValues, linkValues);
    if(outputyaml !== undefined){
      showerror(outputyaml)
    }
    
    
  }

  public exportState() {
    const stateStringified = JSON.stringify(this.state);
    const blob = new Blob([stateStringified], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "state.json");
  }

  public importFileState(file:any) {
    this.setState(file);
  }
  public importState() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: any) => {
      // var file = e!.target!.files[0];
      console.log(e.target.files[0].name);

      const fr = new FileReader();
      fr.onload = async (e) => {
        if (e?.target?.result) {
          const fileContentObj = JSON.parse(e!.target!.result as string);
          console.log();
          if (!fileContentObj.nodes && !fileContentObj.storageProviders) {
            notification.open({
              message: "Not valid",
              description:
                "The file selected does not match a proper file structure",
            });
          } else {
            console.log(fileContentObj)
            this.setState(fileContentObj);
          }
        }
      };

      fr.readAsText(input.files![0]);
    };
    input.click();
  }

  public editStorageProvider(type: string, name: string) {
    console.log(`editing ${type} ${name}`);

    const storageProvider = this.state.storageProviders.find(
      (x) => x.type === type && x.properties.name === name
    );

    switch (type) {
      case "s3":
        this.setState({
          ...this.state,
          s3DefaultValue: storageProvider?.properties,
          s3ModalVisible: true,
        });
        break;
      case "onedata":
        this.setState({
          ...this.state,
          oneDataDefaultValue: storageProvider?.properties,
          oneDataModalVisible: true,
        });
        break;
      case "minio":
        this.setState({
          ...this.state,
          minioDefaultValue: storageProvider?.properties,
          minioModalVisible: true,
        });
        break;
      case "dCache":
        this.setState({
          ...this.state,
          dCacheModalVisible: true,
          dCacheDefaultValue: storageProvider?.properties,
        });
        break;
    }
  }

  public removeStorageProvider(type: string, name: string) {
    console.log(`removing ${type} ${name}`);
    console.log(this.state.storageProviders);

    const index = this.state.storageProviders.findIndex(
      (x) => x.type === type && x.properties.name === name
    );
    const storageProviders = [...this.state.storageProviders];
    storageProviders.splice(index, 1);

    this.setState({ ...this.state, storageProviders: storageProviders });
  }

  public addOrUpdateStorageProvider(type: string, sidebarItemProps: any) {
    const index = this.state.storageProviders.findIndex(
      (x) => x.type === type && sidebarItemProps.name === x.properties?.name
    );

    const oldValues = [...this.state.storageProviders];
    index !== -1 && oldValues.splice(index, 1);
    const storageProviders = [
      ...oldValues,
      {
        type: type,
        ports: {
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
        },
        properties: sidebarItemProps,
      },
    ];
     const nodes = this.state.nodes;
      Object.keys(nodes).forEach(key => {
        if(nodes[key].type === type &&  nodes[key].properties.name === this.state.minioDefaultValue?.name){
          nodes[key].properties=sidebarItemProps
        }
      });
    this.setState({
      ...this.state,
      storageProviders: storageProviders,
      s3ModalVisible: false,
      oneDataModalVisible: false,
      minioModalVisible: false,
      dCacheModalVisible: false,
      minioDefaultValue: undefined,
      dCacheDefaultValue: undefined,
      s3DefaultValue: undefined,
      OneDataDefaultVisible: undefined,
    });
  }

  public render() {
    const chart = this.state;

    const stateActions = mapValues(
      {
        ...actions,
        onNodeDoubleClick: () => {
          console.log(this.state.selected);

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
          <ModalS3Provider
            defaultValue={this.state.s3DefaultValue}
            removeStorageProvider={this.removeStorageProvider}
            visible={this.state.s3ModalVisible}
            onCancel={() =>
              this.setState({
                ...this.state,
                s3DefaultValue: undefined,
                s3ModalVisible: false,
              })
            }
            onOk={(sidebarItemProps) => {
              this.addOrUpdateStorageProvider("s3", sidebarItemProps);
            }}
          />
          <ModalOneDataProvider
            defaultValue={this.state.oneDataDefaultValue}
            removeStorageProvider={this.removeStorageProvider}
            visible={this.state.oneDataModalVisible}
            onCancel={() =>
              this.setState({
                ...this.state,
                oneDataDefaultValue: undefined,
                oneDataModalVisible: false,
              })
            }
            onOk={(sidebarItemProps) => {
              this.addOrUpdateStorageProvider("onedata", sidebarItemProps);
            }}
          />
          <ModalMinioProvider
            defaultValue={this.state.minioDefaultValue}
            removeStorageProvider={this.removeStorageProvider}
            visible={this.state.minioModalVisible}
            onCancel={() =>
              this.setState({
                ...this.state,
                minioDefaultValue: undefined,
                minioModalVisible: false,
              })
            }
            onOk={(sidebarItemProps) => {
              this.addOrUpdateStorageProvider("minio", sidebarItemProps);
            }}
          />
          <ModaldCacheProvider
            defaultValue={this.state.dCacheDefaultValue}
            removeStorageProvider={this.removeStorageProvider}
            visible={this.state.dCacheModalVisible}
            onCancel={() =>
              this.setState({
                ...this.state,
                dCacheDefaultValue: undefined,
                dCacheModalVisible: false,
              })
            }
            onOk={(sidebarItemProps) => {
              this.addOrUpdateStorageProvider("dCache", sidebarItemProps);
            }}
          />
          <ModalTemplate
            //defaultValue={this.state.templateModalVisible}
            //removeStorageProvider={this.removeStorageProvider}
            visible={this.state.templateModalVisible}
            onCancel={() =>
              this.setState({
                ...this.state,
                //minioDefaultValue: undefined,
                templateModalVisible: false,
              })
            }
            onOk={() => {
              
            }}
            importFileState={this.importFileState}
          />
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
              <StyledButton
                ghost
                icon={<FileDoneOutlined />}
                onClick={() => {
                  this.setState({ ...this.state, templateModalVisible: true});
                }}
              >
                Templates
              </StyledButton>
              <SubMenu
                key="SubMenu"
                icon={<SettingOutlined />}
                title="Storage providers"
              >
                <Menu.Item
                  key="storage:s3"
                  onClick={() => {
                    this.setState({ ...this.state, s3ModalVisible: true });
                  }}
                >
                  New S3
                </Menu.Item>
                <Menu.Item
                  key="storage:minio"
                  onClick={() => {
                    this.setState({ ...this.state, minioModalVisible: true });
                  }}
                >
                  New MinIO
                </Menu.Item>
                <Menu.Item
                  key="storage:onedata"
                  onClick={() => {
                    this.setState({ ...this.state, oneDataModalVisible: true });
                  }}
                >
                  New Onedata
                </Menu.Item>
                <Menu.Item
                  key="storage:dcache"
                  onClick={() => {
                    this.setState({ ...this.state, dCacheModalVisible: true });
                  }}
                >
                  New dCache
                </Menu.Item>
              </SubMenu>
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
            <SideNav
              removeStorageProvider={this.removeStorageProvider}
              editStorageProvider={this.editStorageProvider}
              storageProviders={this.state.storageProviders}
            ></SideNav>
          </PageContent>
        </Layout>
      </div>
    );
  }
}
