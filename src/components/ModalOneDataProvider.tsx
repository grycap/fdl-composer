import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { IModalStorageProviderProps } from "./types";

export const ModalOneDataProvider: React.FC<IModalStorageProviderProps> = ({
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
      title={`Onedata Storage Provider ${defaultValue?.name || ""}`}
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
              removeStorageProvider("onedata", defaultValue.name);

            onOk(newState);
            form.resetFields();
          })
          .catch((error) => console.log("Error", error));
      }}
    >
      <Form form={form} initialValues={defaultValue} name="Form Onedata modal">
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
          name="oneprovider_host"
          label="One Provider Host"
          rules={[
            {
              required: true,
              message:
                "Please input the One Provider Host of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="token"
          label="Token"
          rules={[
            {
              required: true,
              message: "Please input the token of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="space"
          label="Space"
          rules={[
            {
              required: true,
              message: "Please input the space of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
