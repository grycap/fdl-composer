import { UploadOutlined } from "@ant-design/icons";
import { INodeInnerDefaultProps } from "@mrblenny/react-flow-chart";
import { Button, Checkbox, Divider, Modal, Tabs } from "antd";
import React from "react";
import styled, { css } from "styled-components";
import { ModalAWSFx } from "./ModalAWSFx";
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
          <ModalOscarFx
            visible={visible}
            defaultValue={node.properties}
            onOk={(newState) => {
              console.log(newState);

              node.properties = newState;
              setVisible(false);
            }}
            onCancel={() => setVisible(false)}
          ></ModalOscarFx>

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
          <ModalAWSFx
            visible={visible}
            defaultValue={node.properties}
            onOk={(newState) => {
              console.log(newState);

              node.properties = newState;
              setVisible(false);
            }}
            onCancel={() => setVisible(false)}
          ></ModalAWSFx>

          <div>{getIcon(node.type)}</div>
          <div
            style={{ fontSize: "1.5rem", fontWeight: 700, color: "white" }}
          >{`${node.properties?.lambda.name || ""}`}</div>
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
