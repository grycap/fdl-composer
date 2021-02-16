import { Checkbox, Modal } from "antd";
import React, { useEffect } from "react";
import { Input, Label, Row } from "./NodeInnerCustom";
import { IModalStorageProviderProps } from "./types";

export const ModalMinioProvider: React.FC<IModalStorageProviderProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
}) => {
  const initialState = {
    name: "",
    endpoint: "",
    verify: false,
    region: "",
    access_key: "",
    secret_key: "",
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
          placeholder="my_minio"
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
        <Label>Endpoint:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="minio-endpoint"
          value={currentProperties.endpoint}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              endpoint: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Label>Verify:</Label>
        <Checkbox
          onClick={(e) => e.stopPropagation()}
          value={currentProperties.verify}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              verify: e.target.checked,
            });
          }}
        />
      </Row>
      <Row>
        <Label>Region:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="us-east-1"
          value={currentProperties.region}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              region: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Label>Access Key:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="xxxxxxxxxxxxxxxx"
          value={currentProperties.access_key}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              access_key: e.target.value,
            });
          }}
        />
      </Row>
      <Row>
        <Label>Secret Key:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="xxxxxxxxxxxxxxxx"
          value={currentProperties.secret_key}
          onChange={(e) => {
            setCurrentProperties({
              ...currentProperties,
              secret_key: e.target.value,
            });
          }}
        />
      </Row>
    </Modal>
  );
};
