import { Modal } from "antd";
import React from "react";
import { Input, Label, Row } from "./NodeInnerCustom";
import { IModalStorageProviderProps } from "./types";

export const ModalS3Provider: React.FC<IModalStorageProviderProps> = ({
  visible,
  onOk,
  onCancel,
}) => {
  const [currentProperties, setCurrentProperties] = React.useState<any>({});
  return (
    <Modal
      title="S3 Storage Provider"
      visible={visible}
      onCancel={onCancel}
      onOk={() => {
        onOk(JSON.parse(JSON.stringify(currentProperties)));
        setCurrentProperties({});
      }}
    >
      <Row>
        <Label>Name:</Label>
        <Input
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          placeholder="my-s3"
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
    </Modal>
  );
};
