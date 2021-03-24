import { UploadOutlined } from "@ant-design/icons";
import { INodeInnerDefaultProps } from "@mrblenny/react-flow-chart";
import { Button, Checkbox, Divider, Modal, Tabs } from "antd";
import React from "react";
import styled, { css } from "styled-components";
import { ModalOscarFx } from "./ModalOscarFx";
import { getColor, getIcon } from "./SidebarItem";
interface IOuterProps {
  background?: string;
  color?: string;
}
const Outer = styled.div<IOuterProps>`
  padding: 30px;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

const Circle = styled.div<IOuterProps>`
  padding: 30px;
  border-radius: 50%;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `};
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.div`
  width: 20%;
  align-content: center;
`;

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
export const NodeInnerCustom = ({
  node,
  config,
  ...otherProps
}: INodeInnerDefaultProps) => {
  const [visible, setVisible] = React.useState(false);
  const [currentProperties, setCurrentProperties] = React.useState<
    any | undefined
  >(node.properties || {});

  const importScript = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: any) => {
      // var file = e!.target!.files[0];
      console.log(e.target.files[0].name);
      const scriptName = e.target.files[0].name;
      const fr = new FileReader();
      fr.onload = async (e) => {
        setCurrentProperties({
          ...currentProperties,
          script_value: e!.target!.result,
          script: scriptName,
        });
      };

      fr.readAsText(input.files![0]);
    };
    input.click();
  };

  const color = getColor(node.type);
  switch (node.type) {
    case "s3":
    case "onedata":
    case "minio":
      return (
        <Circle
          {...otherProps}
          color={color.color}
          background={color.background}
          onDoubleClick={(e) => setVisible(true)}
        >
          <Modal
            title={node.properties?.name || node.type}
            visible={visible}
            onOk={() => {
              node.properties = currentProperties;
              setVisible(false);
            }}
            onCancel={() => setVisible(false)}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
          >
            <Row>
              <Label>Path:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="darknet-workflow/output"
                value={currentProperties.path}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    path: e.target.value,
                  });
                }}
              />
            </Row>
          </Modal>
          <div>{getIcon(node.type)}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{`${
            node.properties?.name || ""
          }`}</div>
        </Circle>
      );
    case "oscar-fx":
      return (
        <Outer
          color={color.color}
          background={color.background}
          onDoubleClick={() => setVisible(true)}
        >
          <Modal
            title={node.properties?.name || node.type}
            visible={visible}
            onOk={() => {
              node.properties = currentProperties;
              setVisible(false);
            }}
            onCancel={() => setVisible(false)}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
          >
            <Divider>Setup</Divider>
            <Row>
              <Label>Name:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="darknet"
                value={currentProperties.name}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    name: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Memory:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="1Gi"
                value={currentProperties.memory}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    memory: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Cpu:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="1.0"
                value={currentProperties.cpu}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    cpu: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Image:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="grycap/darknet"
                value={currentProperties.image}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    image: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Script:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                disabled={true}
                // placeholder="yolo.sh"
                value={currentProperties.script}
                // onChange={(e) => {
                //   setCurrentProperties({
                //     ...currentProperties,
                //     script: e.target.value,
                //   });
                // }}
              />
              <Button
                icon={<UploadOutlined />}
                onClick={() => importScript()}
              ></Button>
            </Row>
            <Row>
              <Label>Environment variables</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="KEY1=val1, KEY2=val2..."
                value={currentProperties.environment?.Variables}
                onChange={(e) => {
                  const { value } = e.target;
                  setCurrentProperties({
                    ...currentProperties,
                    environment: {
                      ...currentProperties.environment,
                      Variables: e.target.value,
                    },
                  });
                  !!!value && delete currentProperties.environment;
                }}
              />
            </Row>
            <Divider>Input</Divider>
            {/* <Row>
              <Label>Storage provider:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="storage provider name"
                value={currentProperties.input?.storage_provider}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    input: {
                      ...currentProperties.input,
                      storage_provider: e.target.value,
                    },
                  });
                }}
              />
            </Row> */}

            <Row>
              <Label>Suffix</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="png, jpg, xls"
                value={currentProperties.input?.suffix}
                onChange={(e) => {
                  const { value } = e.target;
                  !!value
                    ? setCurrentProperties({
                        ...currentProperties,
                        input: {
                          ...currentProperties.input,
                          suffix: e.target.value,
                        },
                      })
                    : delete currentProperties.suffix;
                }}
              />
            </Row>
            <Row>
              <Label>Prefix</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="result-, demo-"
                value={currentProperties.input?.prefix}
                onChange={(e) => {
                  const { value } = e.target;
                  !!value
                    ? setCurrentProperties({
                        ...currentProperties,
                        input: {
                          ...currentProperties.input,
                          prefix: e.target.value,
                        },
                      })
                    : delete currentProperties.prefix;
                }}
              />
            </Row>
            <Divider>Output</Divider>
            {/* <Row>
              <Label>Storage provider:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="storage provider name"
                value={currentProperties.output?.storage_provider}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    output: {
                      ...currentProperties.output,
                      storage_provider: e.target.value,
                    },
                  });
                }}
              />
            </Row> */}

            <Row>
              <Label>Suffix</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="png, jpg, xls"
                value={currentProperties.output?.suffix}
                onChange={(e) => {
                  const { value } = e.target;
                  !!value
                    ? setCurrentProperties({
                        ...currentProperties,
                        output: {
                          ...currentProperties.output,
                          suffix: e.target.value,
                        },
                      })
                    : delete currentProperties.suffix;
                }}
              />
            </Row>
            <Row>
              <Label>Prefix</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="result-, demo-"
                value={currentProperties.output?.prefix}
                onChange={(e) => {
                  const { value } = e.target;
                  !!value
                    ? setCurrentProperties({
                        ...currentProperties,
                        output: {
                          ...currentProperties.output,
                          prefix: e.target.value,
                        },
                      })
                    : delete currentProperties.prefix;
                }}
              />
            </Row>
          </Modal>
          {/* <ModalOscarFx
            visible={visible}
            defaultValue={node.properties}
            onOk={(properties) => console.log(properties)}
            onCancel={() => setVisible(false)}
          ></ModalOscarFx> */}
          <div>{getIcon(node.type)}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{`${
            node.properties?.name || ""
          }`}</div>
        </Outer>
      );
    case "aws-fx":
      return (
        <Outer
          color={color.color}
          background={color.background}
          onDoubleClick={() => setVisible(true)}
        >
          <Modal
            title={node.properties?.name || node.type}
            visible={visible}
            onOk={() => {
              node.properties = currentProperties;
              setVisible(false);
            }}
            onCancel={() => setVisible(false)}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
          >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane key="1" tab="Lambda">
                <Divider>Setup</Divider>

                <Row>
                  <Label>Name:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="darknet"
                    value={currentProperties.lambda?.name}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          name: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>

                <Row>
                  <Label>Region:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="us-east-1"
                    value={currentProperties.lambda?.region}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          region: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>

                <Row>
                  <Label>Boto profile:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="default"
                    value={currentProperties.lambda?.boto_profile}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          boto_profile: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Memory:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="1024"
                    value={currentProperties.lambda?.memory}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          memory: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Cpu:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="1.0"
                    value={currentProperties.lambda?.cpu}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          cpu: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Init script:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="yolo.sh"
                    value={currentProperties.lambda?.init_script}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          init_script: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>

                <Row>
                  <Label>Timeout:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="300"
                    value={currentProperties.lambda?.timeout}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          timeout: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>

                <Row>
                  <Label>Log level:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="INFO | DEBUG | ERROR | WARNING"
                    value={currentProperties.lambda?.log_level}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          log_level: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Execution mode:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="lambda | lambda-batch | batch"
                    value={currentProperties.lambda?.execution_mode}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          execution_mode: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>

                <Row>
                  <Label>Environment variables</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="KEY1=val1, KEY2=val2..."
                    value={currentProperties.lambda?.environment?.Variables}
                    onChange={(e) => {
                      const { value } = e.target;
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          environment: {
                            ...currentProperties.lambda?.environment,
                            Variables: e.target.value,
                          },
                        },
                      });
                      !!value && delete currentProperties.lambda.environment;
                    }}
                  />
                </Row>
                <Divider>Container</Divider>
                <Row>
                  <Label>Image:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="grycap/darknet"
                    value={currentProperties.lambda?.container?.image}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          container: {
                            ...currentProperties.lambda?.container,
                            image: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Timeout threshold</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="grycap/darknet"
                    value={
                      currentProperties.lambda?.container?.timeout_threshold
                    }
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          container: {
                            ...currentProperties.lambda?.container,
                            timeout_threshold: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Environment variables</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="KEY1=val1, KEY2=val2..."
                    value={
                      currentProperties.lambda?.container?.environment
                        ?.Variables
                    }
                    onChange={(e) => {
                      const { value } = e.target;
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          container: {
                            ...currentProperties.lambda?.container,
                            environment: {
                              ...currentProperties.lambda?.container
                                .environment,
                              Variables: e.target.value,
                            },
                          },
                        },
                      });
                      !!!value &&
                        delete currentProperties.lambda.container.environment;
                    }}
                  />
                </Row>
                <Divider>Input</Divider>
                {/* <Row>
                  <Label>Storage provider:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="storage provider name"
                    value={currentProperties.lambda?.input?.storage_provider}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          input: {
                            ...currentProperties.lambda?.input,
                            storage_provider: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row> */}

                <Row>
                  <Label>Suffix</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="png, jpg, xls"
                    value={currentProperties.lambda?.input?.suffix}
                    onChange={(e) => {
                      const { value } = e.target;
                      !!value
                        ? setCurrentProperties({
                            ...currentProperties,
                            lambda: {
                              ...currentProperties.lambda,
                              input: {
                                ...currentProperties.lambda?.input,
                                suffix: e.target.value,
                              },
                            },
                          })
                        : delete currentProperties.lambda.input.suffix;
                    }}
                  />
                </Row>
                <Row>
                  <Label>Prefix</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="result-, demo-"
                    value={currentProperties.lambda?.input?.prefix}
                    onChange={(e) => {
                      const { value } = e.target;
                      !!value
                        ? setCurrentProperties({
                            ...currentProperties,
                            lambda: {
                              ...currentProperties.lambda,
                              input: {
                                ...currentProperties.lambda?.input,
                                prefix: e.target.value,
                              },
                            },
                          })
                        : delete currentProperties.lambda.input.prefix;
                    }}
                  />
                </Row>
                <Divider>Output</Divider>
                {/* <Row>
                  <Label>Storage provider:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="storage provider name"
                    value={currentProperties.lambda?.output?.storage_provider}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          output: {
                            ...currentProperties.lambda?.input,
                            storage_provider: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row> */}

                <Row>
                  <Label>Suffix</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="png, jpg, xls"
                    value={currentProperties.lambda?.output?.suffix}
                    onChange={(e) => {
                      const { value } = e.target;
                      !!value
                        ? setCurrentProperties({
                            ...currentProperties,
                            lambda: {
                              ...currentProperties.lambda,
                              output: {
                                ...currentProperties.lambda?.input,
                                suffix: e.target.value,
                              },
                            },
                          })
                        : delete currentProperties.lambda.output.suffix;
                    }}
                  />
                </Row>
                <Row>
                  <Label>Prefix</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="result-, demo-"
                    value={currentProperties.lambda?.output?.prefix}
                    onChange={(e) => {
                      const { value } = e.target;
                      !!value
                        ? setCurrentProperties({
                            ...currentProperties,

                            lambda: {
                              ...currentProperties.lambda,
                              output: {
                                ...currentProperties.lambda?.input,
                                prefix: e.target.value,
                              },
                            },
                          })
                        : delete currentProperties.prefix;
                    }}
                  />
                </Row>
              </Tabs.TabPane>
              <Tabs.TabPane key="2" tab="Batch">
                <Divider>Setup</Divider>
                <Row>
                  <Label>Region:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="us-east-1"
                    value={currentProperties.batch?.region}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          region: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>

                <Row>
                  <Label>Boto profile:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="default"
                    value={currentProperties.batch?.boto_profile}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          boto_profile: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Memory:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="1024"
                    value={currentProperties.batch?.memory}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          memory: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>vCpu:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="1.0"
                    value={currentProperties.vcpus}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          cpu: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Enable gpu:</Label>
                  <Checkbox
                    onClick={(e) => e.stopPropagation()}
                    value={currentProperties.enable_gpu}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          enable_gpu: e.target.checked,
                        },
                      });
                    }}
                  />
                </Row>

                <Row>
                  <Label>Service role:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="aren:..."
                    value={currentProperties.service_role}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          service_role: e.target.value,
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Environment variables</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="KEY1=val1, KEY2=val2..."
                    value={currentProperties.batch?.environment?.Variables}
                    onChange={(e) => {
                      const { value } = e.target;
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          environment: {
                            ...currentProperties.batch?.environment,
                            Variables: e.target.value,
                          },
                        },
                      });
                      !!value && delete currentProperties.batch.environment;
                    }}
                  />
                </Row>
                <Divider>Compute resources</Divider>
                <Row>
                  <Label>Desired vCpus</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="0"
                    value={
                      currentProperties.batch?.compute_resources?.desired_v_cpus
                    }
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            desired_v_cpus: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Min vCpus</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="0"
                    value={
                      currentProperties.batch?.compute_resources?.min_v_cpus
                    }
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            min_v_cpus: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Max vCpus</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="2"
                    value={
                      currentProperties.batch?.compute_resources?.max_v_cpus
                    }
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            max_v_cpus: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Max vCpus</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="2"
                    value={
                      currentProperties.batch?.compute_resources?.max_v_cpus
                    }
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            max_v_cpus: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Instance role</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="arn:..."
                    value={
                      currentProperties.batch?.compute_resources?.instance_role
                    }
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            instance_role: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Security group ids</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="sg-12345678, sg-12345679..."
                    value={
                      currentProperties.batch?.security_group_ids
                        ?.security_group_ids
                    }
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            security_group_ids: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Subnets</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="subnet-12345, subnet-67891..."
                    value={currentProperties.batch?.subnets?.subnets}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            subnets: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
                <Row>
                  <Label>Instance types</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="m3.medium, m3.large..."
                    value={currentProperties.batch?.subnets?.instance_types}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        batch: {
                          ...currentProperties.batch,
                          compute_resources: {
                            ...currentProperties.batch?.compute_resources,
                            instance_types: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
              </Tabs.TabPane>
            </Tabs>
          </Modal>
          <div>{getIcon(node.type)}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{`${
            node.properties?.lambda.name || ""
          }`}</div>
        </Outer>
      );
    default:
      return (
        <Outer
          color={color.color}
          background={color.background}
          onDoubleClick={() => {
            setVisible(true);
          }}
        >
          <Modal
            title={node.properties?.name || node.type}
            visible={visible}
            onOk={() => {
              node.properties = currentProperties;
              setVisible(false);
            }}
            onCancel={() => setVisible(false)}
            okButtonProps={{ disabled: false }}
            cancelButtonProps={{ disabled: false }}
          ></Modal>
          <div>{getIcon(node.type)}</div>
          <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{`${
            node.properties?.name || ""
          }`}</div>
        </Outer>
      );
  }
};
