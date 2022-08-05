import { Checkbox, Modal, Form, Input, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { IModalStorageProviderProps } from "./types";

export const ModalMinioProvider: React.FC<IModalStorageProviderProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
  removeStorageProvider,
}) => {
  const [form] = Form.useForm();
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      form.setFieldsValue(defaultValue);
    }else{
      form.resetFields();
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
      title={`MinIO Storage Provider ${defaultValue?.name || ""}`}
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
            const newState = { ...values, verify: verify } as any;
            defaultValue &&
              removeStorageProvider &&
              newState.name !== defaultValue.name &&
              removeStorageProvider("minio", defaultValue.name);

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
      </Form>
    </Modal>
  );
};
