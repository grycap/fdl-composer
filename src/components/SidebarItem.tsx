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

export interface ISidebarItemProps {
  type: string;
  ports: INode["ports"];
  config?: IConfig;
  properties?: any;
}

export const getColor = (type: string) => {
  switch (type) {
    case "function-input":
      return {
        background: "#4b005e",
        color: "white",
      };
    case "function-output":
      return {
        background: "#5e4d00",
        color: "white",
      };
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
    case "s3-storage":
      return {
        background: "#aa5237",
        color: "white",
      };
    case "one-data-storage":
      return {
        background: "#02005e",
        color: "white",
      };
    case "minio-storage":
      return {
        background: "#f7ed6d",
        color: "black",
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
  return (
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
