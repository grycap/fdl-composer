import React from "react";
import styled from "styled-components";
import { Message, SidebarItem } from ".";

export const Sidebar = styled.div`
  width: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

export const SideNav = () => (
  <Sidebar>
    <Message>Drag and drop these items onto the canvas.</Message>
    <SidebarItem
      type="s3-storage"
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
      type="minio-storage"
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
      type="one-data-storage"
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
      type="aws-lambda"
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
      type="aws-batch"
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
