import { Button, Popover } from "antd";
import React from "react";
import styled from "styled-components";
import { Message, SidebarItem } from ".";
import { ISidebarItemProps } from "./types";

export const Sidebar = styled.div`
  min-width: 200px;
  max-width: 250px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: auto;
`;

export interface ISidebarProps {
  storageProviders?: ISidebarItemProps[];
  removeStorageProvider: (type: string, name: string) => void;
  editStorageProvider: (type: string, name: string) => void;
}
export const SideNav: React.FC<ISidebarProps> = ({
  storageProviders,
  removeStorageProvider,
  editStorageProvider,
}) => (
  <Sidebar>
    <Message>Drag and drop these items onto the canvas.</Message>
    {storageProviders
      ?.filter((x) => x.properties?.name)
      .map((sidebarItem, index) => (
        <Popover
          placement="top"
          trigger="hover"
          key={`Popover_${index}`}
          title={`${sidebarItem.properties.name} options`}
          content={
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "1rem",
                }}
              >
                <Button
                  onClick={() =>
                    editStorageProvider(
                      sidebarItem.type,
                      sidebarItem.properties.name
                    )
                  }
                >
                  Edit
                </Button>
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
