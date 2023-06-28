import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { IModalStorageProviderProps } from "./types";

export const ModaldCacheProvider: React.FC<IModalStorageProviderProps> = ({
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
      title={`dCache Storage Provider ${defaultValue?.name || ""}`}
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
              removeStorageProvider("dCache", defaultValue.name);

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
              message: "Please input the identifier of dCache",
            },
          ]}
          initialValue="dCache"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="hostname"
          label="Hostname"
          rules={[
            {
              required: true,
              message:
                "Please input the hostname of dCache",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="login"
          label="Login"
          rules={[
            {
              required: true,
              message: "Please input the login of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input the password of the storage provider",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
