import { Checkbox, Modal, Form, Input, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
// import { Input, Label, Row } from "./NodeInnerCustom";
import { IModalStorageProviderProps } from "./types";

export const ModalMinioProvider: React.FC<IModalStorageProviderProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
}) => {
  const [form] = Form.useForm();
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      form.setFieldsValue(defaultValue);
    }
  }, [defaultValue, visible, form]);

  useEffect(() => {
    defaultValue && setVerify(defaultValue.verify);
  }, [defaultValue]);

  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setVerify(e.target.checked);
  };
  return (
    <Modal
      title={`OneData Storage Provider ${defaultValue?.name || ""}`}
      visible={visible}
      onCancel={() => {
        onCancel();
        form.resetFields();
        setVerify(false);
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            const newState = { ...values, verify: verify };
            console.log(newState);

            onOk(newState);
            form.resetFields();
            setVerify(false);
          })
          .catch((error) => console.log("Error", error));
      }}
    >
      <Form form={form} initialValues={defaultValue} name="Form minio modal">
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="endpoint"
          label="Endpoint"
          rules={[
            {
              required: true,
              message: "Please input the endpoint of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item initialValue={verify} name="verify" label="Verify"> */}
        <Row style={{ marginBottom: "1rem" }}>
          <Col span={3}>Verify:</Col>
          <Col span={1}>
            <Checkbox value={verify} onChange={onCheckboxChange} />
          </Col>
        </Row>
        <Form.Item
          name="region"
          label="Region"
          rules={[
            {
              required: true,
              message: "Please input the region of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="access_key"
          label="Access Key"
          rules={[
            {
              required: true,
              message: "Please input the access key of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="secret_key"
          label="Secret Key"
          rules={[
            {
              required: true,
              message: "Please input the secret key of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* 
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
      </Row> */}
      </Form>
    </Modal>
  );
};
