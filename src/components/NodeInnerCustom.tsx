import { INodeInnerDefaultProps } from "@mrblenny/react-flow-chart";
import { Checkbox, Divider, Modal, Tabs } from "antd";
import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { getColor } from "./SidebarItem";
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

const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  margin-bottom: 0.5rem;
  width: 80%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled.div`
  width: 20%;
  align-content: center;
`;

interface ICustomPropertiesProps {
  updateProperties: (propertyName: string, customProperty: any) => void;
}

const ModalCustomProperty: React.FC<ICustomPropertiesProps> = ({
  updateProperties,
}): ReactElement => {
  const [visible, setVisible] = React.useState(false);

  return <Row></Row>;
};

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
  const color = getColor(node.type);
  switch (node.type) {
    case "s3-storage":
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
              <Label>Name:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="my-s3"
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
              <Label>Access Key:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="xxxxxxxxxxxxxxxx"
                value={currentProperties.access_key}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    access_key: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Secret Key:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="xxxxxxxxxxxxxxxx"
                value={currentProperties.secret_key}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    secret_key: e.target.value,
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
                value={currentProperties.region}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    region: e.target.value,
                  });
                }}
              />
            </Row>
          </Modal>
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
        </Circle>
      );
    case "minio-storage":
      return (
        <Circle
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
              <Label>Name:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="my_minio"
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
              <Label>Endpoint:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="minio-endpoint"
                value={currentProperties.endpoint}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    endpoint: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Verify:</Label>
              <Checkbox
                onClick={(e) => e.stopPropagation()}
                value={currentProperties.verify}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    verify: e.target.checked,
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
                value={currentProperties.region}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    region: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Access Key:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="xxxxxxxxxxxxxxxx"
                value={currentProperties.access_key}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    access_key: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Secret Key:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="xxxxxxxxxxxxxxxx"
                value={currentProperties.secret_key}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    secret_key: e.target.value,
                  });
                }}
              />
            </Row>
          </Modal>
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
        </Circle>
      );
    case "one-data-storage":
      return (
        <Circle
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
            <Row>
              <Label>Name:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="my-onedata"
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
              <Label>One Provider Host:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="plg-cyfronet-01.datahub.egi.eu"
                value={currentProperties.oneprovider_host}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    oneprovider_host: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Token:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="xxxxxxxxxxxxxxxx"
                value={currentProperties.token}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    token: e.target.value,
                  });
                }}
              />
            </Row>
            <Row>
              <Label>Space:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="my-space"
                value={currentProperties.space}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    space: e.target.value,
                  });
                }}
              />
            </Row>
          </Modal>
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
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
                placeholder="yolo.sh"
                value={currentProperties.script}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    script: e.target.value,
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
            <Row>
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
            </Row>
            <Row>
              <Label>Path:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="darknet-workflow/input"
                value={currentProperties.input?.path}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    input: {
                      ...currentProperties.input,
                      path: e.target.value,
                    },
                  });
                }}
              />
            </Row>
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
            <Row>
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
            </Row>
            <Row>
              <Label>Path:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="darknet-workflow/output"
                value={currentProperties.output?.path}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    output: {
                      ...currentProperties.output,
                      path: e.target.value,
                    },
                  });
                }}
              />
            </Row>
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
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
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
                <Row>
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
                </Row>
                <Row>
                  <Label>Path:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="darknet-workflow/input"
                    value={currentProperties.lambda?.input?.path}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          input: {
                            ...currentProperties.lambda?.input,
                            path: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
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
                <Row>
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
                </Row>
                <Row>
                  <Label>Path:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="darknet-workflow/output"
                    value={currentProperties.lambda?.output?.path}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        lambda: {
                          ...currentProperties.lambda,
                          output: {
                            ...currentProperties.lambda?.input,
                            path: e.target.value,
                          },
                        },
                      });
                    }}
                  />
                </Row>
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
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
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
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
        </Outer>
      );
  }
};
