import { IConfig, INode, REACT_FLOW_CHART } from "@mrblenny/react-flow-chart";
import * as React from "react";
import styled, { css } from "styled-components";

interface IOuterProps {
  background?: string;
  color?: string;
}
const Outer = styled.div<IOuterProps>`
  margin-bottom: 1rem;
  border: 0.5px solid grey;
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
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
  margin-bottom: 1rem;
  border: 0.5px solid grey;
  padding: 20px 30px;
  border-radius: 50%;
  font-size: 14px;
  cursor: move;
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
export interface ISidebarItemProps {
  type: string;
  ports: INode["ports"];
  config?: IConfig;
  properties?: any;
}

export const getColor = (type: string) => {
  switch (type) {
    case "oscar-fx":
      return {
        background: "#005e14",
        color: "white",
      };
    case "aws-fx":
      return {
        background: "#a32a06",
        color: "white",
      };
    case "s3":
      return {
        background: "#aa5237",
        color: "white",
      };
    case "onedata":
      return {
        background: "#02005e",
        color: "white",
      };
    case "minio":
      return {
        background: "#5e4d00",
        color: "white",
      };
    default:
      return {
        background: "#FFF",
        color: "black",
      };
  }
};

export const SidebarItem = ({ type, ports, properties }: ISidebarItemProps) => {
  const color = getColor(type);
  const storage = ["s3", "onedata", "minio"];
  return storage.includes(type) ? (
    <Circle
      background={color.background}
      color={color.color}
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        );
      }}
    >
      {type}
    </Circle>
  ) : (
    <Outer
      background={color.background}
      color={color.color}
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        );
      }}
    >
      {type}
    </Outer>
  );
};
