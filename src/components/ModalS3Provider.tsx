import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { IModalStorageProviderProps } from "./types";

export const ModalS3Provider: React.FC<IModalStorageProviderProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
  removeStorageProvider,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (defaultValue) {
      form.setFieldsValue(defaultValue);
    }else{
      form.resetFields();
    }
  }, [defaultValue, visible, form]);

  return (
    <Modal
      title={`S3 Storage Provider ${defaultValue?.name || ""}`}
      visible={visible}
      onCancel={() => {
        onCancel();

        form.resetFields();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((newState) => {
            defaultValue &&
              removeStorageProvider &&
              newState.name !== defaultValue.name &&
              removeStorageProvider("s3", defaultValue.name);

            onOk(newState);
            form.resetFields();
          })
          .catch((error) => console.log("Error", error));
      }}
    >
      <Form form={form} initialValues={defaultValue} name="Form s3 modal">
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
