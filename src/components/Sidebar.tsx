import { Button, Popover } from "antd";
import React from "react";
import styled from "styled-components";
import { Message, SidebarItem } from ".";
import { ISidebarItemProps } from "./types";

export const Sidebar = styled.div`
  width: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: auto;
`;

export interface ISidebarProps {
  storageProviders?: ISidebarItemProps[];
  removeStorageProvider: (type: string, name: string) => void;
}
export const SideNav: React.FC<ISidebarProps> = ({
  storageProviders,
  removeStorageProvider,
}) => (
  <Sidebar>
    <Message>Drag and drop these items onto the canvas.</Message>
    {storageProviders
      ?.filter((x) => x.properties?.name)
      .map((sidebarItem, index) => (
        <Popover
          key={`Popover_${index}`}
          title={`Delete provider ${sidebarItem.properties.name}`}
          content={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                danger
                onClick={() =>
                  removeStorageProvider(
                    sidebarItem.type,
                    sidebarItem.properties.name
                  )
                }
              >
                Delete
              </Button>
            </div>
          }
        >
          <SidebarItem
            {...sidebarItem}
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Popover>
      ))}

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
