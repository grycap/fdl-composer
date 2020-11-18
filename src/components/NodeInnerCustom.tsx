import { INodeInnerDefaultProps } from "@mrblenny/react-flow-chart";
import { Checkbox, Modal, Tabs } from "antd";
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
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane key="1" tab="Function">
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
              </Tabs.TabPane>
              <Tabs.TabPane key="2" tab="Input">
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
              </Tabs.TabPane>
              <Tabs.TabPane key="3" tab="Output">
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
              </Tabs.TabPane>
            </Tabs>
          </Modal>
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
        </Outer>
      );
    case "aws-lambda":
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
              <Tabs.TabPane key="1" tab="Function">
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
              </Tabs.TabPane>
              <Tabs.TabPane key="2" tab="Input">
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
              </Tabs.TabPane>
              <Tabs.TabPane key="3" tab="Output">
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
              </Tabs.TabPane>
            </Tabs>
          </Modal>
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
        </Outer>
      );
    case "aws-batch":
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
            <Tabs>
              <Tabs.TabPane key="1" tab="Function">
                <Row>
                  <Label>Name:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="scar-grayify-workflow"
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
                  <Label>Script:</Label>
                  <Input
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="grayify-image.sh"
                    value={currentProperties.init_script}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        init_script: e.target.value,
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
                    placeholder="grycap/imagemagick"
                    value={currentProperties.container?.image}
                    onChange={(e) => {
                      setCurrentProperties({
                        ...currentProperties,
                        container: { image: e.target.value },
                      });
                    }}
                  />
                </Row>
              </Tabs.TabPane>
              <Tabs.TabPane key="2" tab="Input">
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
              </Tabs.TabPane>
              <Tabs.TabPane key="3" tab="Output">
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
