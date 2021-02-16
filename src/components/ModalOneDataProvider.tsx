import { Modal } from "antd";
import React, { useEffect } from "react";
import { Input, Label, Row } from "./NodeInnerCustom";
import { IModalStorageProviderProps } from "./types";

export const ModalOneDataProvider: React.FC<IModalStorageProviderProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
}) => {
  const initialState = {
    name: "",
    oneprovider_host: "",
    token: "",
    space: "",
  };
  const [currentProperties, setCurrentProperties] = React.useState<any>(
    initialState
  );

  useEffect(() => {
    defaultValue && setCurrentProperties(defaultValue);
  }, [defaultValue, visible]);
  return (
    <Modal
      title={`OneData Storage Provider ${currentProperties.name}`}
      visible={visible}
      onCancel={() => {
        onCancel();
        setCurrentProperties(initialState);
      }}
      onOk={() => {
        onOk(JSON.parse(JSON.stringify(currentProperties)));
        setCurrentProperties(initialState);
      }}
    >
      <Row>
        <Label>Name:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="my-onedata"
          value={currentProperties.name}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              name: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Label>One Provider Host:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="plg-cyfronet-01.datahub.egi.eu"
          value={currentProperties.oneprovider_host}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              oneprovider_host: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Label>Token:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="xxxxxxxxxxxxxxxx"
          value={currentProperties.token}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              token: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Label>Space:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="my-space"
          value={currentProperties.space}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              space: e.target.value,
            });
          }}
        />
      </Row>
    </Modal>
  );
};
