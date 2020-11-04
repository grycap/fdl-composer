import {
  DownCircleTwoTone,
  PlusCircleTwoTone,
  RightCircleTwoTone,
} from "@ant-design/icons";
import { IPortDefaultProps } from "@mrblenny/react-flow-chart";
import React from "react";

export const PortCustom = (props: IPortDefaultProps) => {
  switch (props.port.type) {
    case "right":
    case "left":
      return <RightCircleTwoTone style={{ fontSize: "1rem" }} />;
    case "top":
    case "bottom":
      return <DownCircleTwoTone style={{ fontSize: "1rem" }} />;
    default:
      return <PlusCircleTwoTone style={{ fontSize: "1rem" }} />;
  }
};
