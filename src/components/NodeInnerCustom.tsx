import { INodeInnerDefaultProps } from "@mrblenny/react-flow-chart";
import { Modal } from "antd";
import React from "react";
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

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
export const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  const [visible, setVisible] = React.useState(false);
  const [currentProperties, setCurrentProperties] = React.useState<
    any | undefined
  >(node.properties || {});
  const color = getColor(node.type);
  switch (node.type) {
    case "function-input":
      return (
        <Outer
          color={color.color}
          background={color.background}
          onDoubleClick={(e) => {
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
          >
            <Row>
              <Label>Path:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="darknet-workflow/input"
                value={currentProperties.path}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    path: e.target.value,
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
                placeholder="png"
                value={currentProperties.suffix}
                onChange={(e) => {
                  const { value } = e.target;
                  !!value
                    ? setCurrentProperties({
                        ...currentProperties,
                        suffix: e.target.value,
                      })
                    : setCurrentProperties({ path: currentProperties.path });
                }}
              />
            </Row>
          </Modal>
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
        </Outer>
      );
    case "function-output":
      return (
        <Outer
          color={color.color}
          background={color.background}
          onDoubleClick={(e) => {
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
          >
            <Row>
              <Label>Path:</Label>
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                placeholder="darknet-workflow/input"
                value={currentProperties.path}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    path: e.target.value,
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
                placeholder="png"
                value={currentProperties.suffix}
                onChange={(e) => {
                  setCurrentProperties({
                    ...currentProperties,
                    suffix: [e.target.value],
                  });
                }}
              />
            </Row>
          </Modal>
          <p>{`${node.type} ${node.properties?.name || ""}`}</p>
        </Outer>
      );
    case "s3-storage":
      return (
        <Outer
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
        </Outer>
      );
    case "one-data-storage":
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
        </Outer>
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
              node.properties = { ...node.properties, test: "test" };
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
