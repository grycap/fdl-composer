import { INode, REACT_FLOW_CHART } from "@mrblenny/react-flow-chart";
import * as React from "react";
import styled from "styled-components";

const Outer = styled.div`
  padding: 20px 30px;
  font-size: 14px;
  background: white;
  cursor: move;
`;

export interface ISidebarItemProps {
  type: string;
  ports: INode["ports"];
  properties?: any;
}

export const SidebarItem = ({ type, ports, properties }: ISidebarItemProps) => {
  return (
    <Outer
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
