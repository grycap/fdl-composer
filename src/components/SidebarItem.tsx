import { REACT_FLOW_CHART } from "@mrblenny/react-flow-chart";
import * as React from "react";
import styled, { css } from "styled-components";
import { ISidebarItemProps } from "./types";


/*
Image -- background
size image
backgroundColor -- background
font color --- color
*/

function getProps(type){

  switch (type) {
    case "oscar-fx":
      return {
        image:"https://github.com/grycap/oscar/blob/master/docs/images/oscar3.png?raw=true",
        size:"96px",
        backgroundColor:"#fff",
        fontColor:"black",
        altTxt:"OSCAR service"
        //background: "#fff",
        //color: "black",
      };
    case "aws-fx":
      return {
        image:"https://d1.awsstatic.com/Digital%20Marketing/House/PAC/2up/PAC-Q4_House-Ads_Lambda_2up.62dc7e19b7b2e0a2c06821594c31f1ce00a6bdda.png",
        size:"32px",
        backgroundColor:"#080301",
        fontColor:"white",
        altTxt:"AWS Lambda Logo"

      };
    case "s3":
      return {
        image:"https://servmask.com/img/products/s3.png",
        size:"48px",
        backgroundColor:"#ebe4c0",
        fontColor:"black",
        altTxt:"S3 logo"
      };
    case "onedata":
      return {
        image:"https://www.ebi.ac.uk/about/clusters/technical-services/wp-content/uploads/2019/11/onedata-logo.png",
        size:"24px",
        backgroundColor:"#c2d4ad",
        fontColor:"black",
        altTxt:"ONE DATA logo"
      };
    case "minio":
      return {
        image:"https://suarapapua.com/wp-content/plugins/ilab-media-tools-premium/public/img/wizard-icon-minio.png",
        size:"36px",
        backgroundColor:"#c47878",
        fontColor:"black",
        altTxt:"MinIO logo"
      };
    case "dCache":
      return {
        image:"https://www.dcache.org/img/dCache-logo.svg",
        size:"36px",
        backgroundColor:"#c47878",
        fontColor:"black",
        altTxt:"dCache logo"
      };
  }
}


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
  const nodeProps=getProps(type)

  return{
    background: nodeProps?.backgroundColor,
    color: nodeProps?.fontColor,
  }
  /*switch (type) {
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
    case "dCache":
      return {
        background: "#c47878",
        color: "black",
      };
    default:
      return {
        background: "#FFF",
        color: "black",
      };
  }*/
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
  const nodeProps=getProps(type)
  if(type === "oscar-fx"){
    return(<img alt={nodeProps?.altTxt} src={nodeProps?.image} width={nodeProps?.size}  />)
  }else{
    return(<img  alt={nodeProps?.altTxt} src={nodeProps?.image} height={nodeProps?.size} />)
  }
  /*switch (type) {
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
          alt="ONE DATA logo"
          src="https://www.ebi.ac.uk/about/clusters/technical-services/wp-content/uploads/2019/11/onedata-logo.png"
          height="24px"
        />
      );
    case "minio":
      return (
        <img
          alt="MinIO logo"
          src="https://suarapapua.com/wp-content/plugins/ilab-media-tools-premium/public/img/wizard-icon-minio.png"
          height="36px"
        />
      );
    case "dCache":
      return (
        <img
          alt="dCache logo"
          src="https://www.dcache.org/img/dCache-logo.svg"
          height="36px"
        />
      );
  }*/
};


export const SidebarItem = ({
  type,
  ports,
  properties,
  ...rest
}: ISidebarItemProps) => {
  //const color = getColor(type);
  const nodeProps= getProps(type)
  const storage = ["s3", "onedata", "minio","dCache"];
  return storage.includes(type) ? (
    <Circle
      style={{ paddingTop: "5rem" }}
      backgroundSize={type === "s3" ? "96px" : "150px"}
      background={nodeProps?.image}
      color="black"
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
      background={nodeProps?.image}
      color={nodeProps?.backgroundColor}
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
