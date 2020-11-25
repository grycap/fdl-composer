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
  background: black;
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
  padding: 30px;
  min-height: 100px;
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
        background: "#fff",
        color: "black",
      };
    case "aws-fx":
      return {
        background: "#080301",
        color: "white",
      };
    case "s3":
      return {
        background: "#ebe4c0",
        color: "black",
      };
    case "onedata":
      return {
        background: "#c2d4ad",
        color: "black",
      };
    case "minio":
      return {
        background: "#c47878",
        color: "black",
      };
    default:
      return {
        background: "#FFF",
        color: "black",
      };
  }
};

export const getIcon = (type: string) => {
  switch (type) {
    case "oscar-fx":
      return (
        <img
          alt="oscar logo"
          src="https://github.com/grycap/oscar/blob/master/docs/source/images/oscar3.png?raw=true"
          width="96px"
        />
      );
    case "aws-fx":
      return (
        <img
          alt="aws logo"
          src="https://d1.awsstatic.com/Digital%20Marketing/House/PAC/2up/PAC-Q4_House-Ads_Lambda_2up.62dc7e19b7b2e0a2c06821594c31f1ce00a6bdda.png"
          height="32px"
        />
      );
    case "s3":
      return (
        <img
          alt="s3 logo"
          src="https://servmask.com/img/products/s3.png"
          height="48px"
        />
      );
    case "onedata":
      return (
        <img
          alt="aws logo"
          src="https://www.ebi.ac.uk/about/technology/wp-content/uploads/2019/10/onedata-logo.png"
          height="24px"
        />
      );
    case "minio":
      return (
        <img
          alt="aws logo"
          src="https://suarapapua.com/wp-content/plugins/ilab-media-tools-premium/public/img/wizard-icon-minio.png"
          height="36px"
        />
      );
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
      {getIcon(type)}
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
      {getIcon(type)}
    </Outer>
  );
};
