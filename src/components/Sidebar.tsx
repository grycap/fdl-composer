import React from "react";
import styled from "styled-components";
import { Message, SidebarItem } from ".";
import { ISidebarItemProps } from "./SidebarItem";

export const Sidebar = styled.div`
  width: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export interface ISidebarProps {
  storageProviders?: ISidebarItemProps[];
}
export const SideNav: React.FC<ISidebarProps> = ({ storageProviders }) => (
  <Sidebar>
    <Message>Drag and drop these items onto the canvas.</Message>
    {storageProviders?.map((sidebarItem) => (
      <SidebarItem {...sidebarItem} />
    ))}
    <SidebarItem
      type="s3"
      ports={{
        port1: {
          id: "port1",
          type: "top",
          properties: {
            path: "",
          },
        },
        port2: {
          id: "port2",
          type: "right",
          properties: {
            path: "",
          },
        },
        port3: {
          id: "port3",
          type: "bottom",
          properties: {
            path: "",
          },
        },
        port4: {
          id: "port4",
          type: "left",
          properties: {
            path: "",
          },
        },
      }}
    />{" "}
    <SidebarItem
      type="minio"
      ports={{
        port1: {
          id: "port1",
          type: "top",
          properties: {
            path: "",
          },
        },
        port2: {
          id: "port2",
          type: "right",
          properties: {
            path: "",
          },
        },
        port3: {
          id: "port3",
          type: "bottom",
          properties: {
            path: "",
          },
        },
        port4: {
          id: "port4",
          type: "left",
          properties: {
            path: "",
          },
        },
      }}
    />
    <SidebarItem
      type="onedata"
      ports={{
        port1: {
          id: "port1",
          type: "top",
          properties: {
            path: "",
          },
        },
        port2: {
          id: "port2",
          type: "right",
          properties: {
            path: "",
          },
        },
        port3: {
          id: "port3",
          type: "bottom",
          properties: {
            path: "",
          },
        },
        port4: {
          id: "port4",
          type: "left",
          properties: {
            path: "",
          },
        },
      }}
    />
    <SidebarItem
      type="oscar-fx"
      ports={{
        port1: {
          id: "port1",
          type: "top",
          properties: {
            path: "",
          },
        },
        port2: {
          id: "port2",
          type: "right",
          properties: {
            path: "",
          },
        },
        port3: {
          id: "port3",
          type: "bottom",
          properties: {
            path: "",
          },
        },
        port4: {
          id: "port4",
          type: "left",
          properties: {
            path: "",
          },
        },
      }}
    />
    <SidebarItem
      type="aws-fx"
      ports={{
        port1: {
          id: "port1",
          type: "top",
          properties: {
            path: "",
          },
        },
        port2: {
          id: "port2",
          type: "right",
          properties: {
            path: "",
          },
        },
        port3: {
          id: "port3",
          type: "bottom",
          properties: {
            path: "",
          },
        },
        port4: {
          id: "port4",
          type: "left",
          properties: {
            path: "",
          },
        },
      }}
    />
  </Sidebar>
);
