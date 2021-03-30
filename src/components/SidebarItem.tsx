import { REACT_FLOW_CHART } from "@mrblenny/react-flow-chart";
import * as React from "react";
import styled, { css } from "styled-components";
import { ISidebarItemProps } from "./types";

interface IOuterProps {
  background?: string;
  color?: string;
  backgroundSize?: string;
}
const Outer = styled.div<IOuterProps>`
  min-height: 100px;

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
      background: url(${props.background}) no-repeat;
      background-size: ${props.backgroundSize || "96px"};
      background-position: center;
    `};
`;

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
const Circle = styled.div<IOuterProps>`
  font-weight: 700;
  font-size: 2rem;
  min-height: 100px;
  margin-bottom: 1rem;
  border: 0.5px solid grey;
  padding: 30px;
  min-height: 100px;
  border-radius: 50%;
  cursor: move;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.background &&
    css`
      background: url(${props.background}) no-repeat;
      background-size: ${props.backgroundSize || "96px"};
      background-position: center;
    `};
`;

export const getIcon = (type: string) => {
  switch (type) {
    case "oscar-fx":
      return (
        <img
          alt="oscar logo"
          src="https://github.com/grycap/oscar/blob/master/docs/images/oscar3.png?raw=true"
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

export const getImgBackground = (type: string) => {
  switch (type) {
    case "oscar-fx":
      return "https://github.com/grycap/oscar/blob/master/docs/images/oscar3.png?raw=true";
    case "aws-fx":
      return "https://d1.awsstatic.com/Digital%20Marketing/House/PAC/2up/PAC-Q4_House-Ads_Lambda_2up.62dc7e19b7b2e0a2c06821594c31f1ce00a6bdda.png";
    case "s3":
      return "https://servmask.com/img/products/s3.png";
    case "onedata":
      return "https://www.ebi.ac.uk/about/technology/wp-content/uploads/2019/10/onedata-logo.png";
    case "minio":
      return "https://suarapapua.com/wp-content/plugins/ilab-media-tools-premium/public/img/wizard-icon-minio.png";
  }
};
export const SidebarItem = ({
  type,
  ports,
  properties,
  ...rest
}: ISidebarItemProps) => {
  const color = getColor(type);
  const storage = ["s3", "onedata", "minio"];
  return storage.includes(type) ? (
    <Circle
      style={{ paddingTop: "5rem" }}
      backgroundSize={type === "s3" ? "96px" : "150px"}
      background={getImgBackground(type)}
      color={color.color}
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        );
      }}
      {...rest}
    >
      {properties?.name}
    </Circle>
  ) : (
    <Outer
      background={getImgBackground(type)}
      color={color.color}
      draggable={true}
      onDragStart={(event) => {
        event.dataTransfer.setData(
          REACT_FLOW_CHART,
          JSON.stringify({ type, ports, properties })
        );
      }}
    ></Outer>
  );
};
