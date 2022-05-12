import { UploadOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Modal, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { IModalFxProps } from "./types";

export const ModalOscarFx: React.FC<IModalFxProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
}) => {
  const [form] = Form.useForm();
  const [formEnv] = Form.useForm();
  const [formInput] = Form.useForm();
  const [formOutput] = Form.useForm();
  const [script, setScript] = useState("");
  const [scriptContent, setScriptContent] = useState("");

  const importScript = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: any) => {
      const scriptName = e.target.files[0].name;
      const fr = new FileReader();
      fr.onload = async (e) => {
        form.setFieldsValue({
          ...form.getFieldsValue(),
          environment: formEnv.getFieldsValue(),
          input: formInput.getFieldsValue(),
          output: formOutput.getFieldsValue(),
          script: scriptName,
        });
        setScript(scriptName);
        setScriptContent(e!.target!.result as string);
      };

      fr.readAsText(input.files![0]);
    };
    input.click();
  };

  return (
    <Modal
      title={`Oscar function ${defaultValue?.name || ""}`}
      visible={visible}
      onCancel={() => {
        onCancel();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((newState) => {
            onOk({
              ...newState,
              environment: formEnv.getFieldsValue(),
              input: formInput.getFieldsValue(),
              output: formOutput.getFieldsValue(),
            });
          })
          .catch((error) => console.log("Error", error));
      }}
    >
      <Form form={form} initialValues={defaultValue} name="Form_oscar_fx_modal">
        <Divider>Setup</Divider>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of the oscar function",
            },
          ]}
        >
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </Form.Item>

        <Form.Item name="memory" label="Memory">
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>
        <Form.Item name="cpu" label="Cpu">
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>
        <Form.Item 
          name="image" 
          label="Image"
          rules={[
            {
              required: true,
              message: "Please input the image of the oscar function",
            },
          ]}
        >
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>

        <Form.Item
          name="script"
          label="Script"
          rules={[
            {
              required: true,
              message: "Please input the script of the oscar function",
            },
          ]}
        >
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </Form.Item>
      </Form>
      <Form
        form={formEnv}
        initialValues={defaultValue?.environment}
        name="Form oscar environment"
        
      >
        <Form.Item name="Variables" label="Environment variables">
          <Input
            placeholder= 'Separate by "," and assign value by "="'
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>
      </Form>
      <Divider>Input</Divider>
      <Form
        form={formInput}
        initialValues={defaultValue?.input}
        name="Form oscar input"
      >
        <Form.Item name="suffix" label="Suffix">
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>
        <Form.Item name="prefix" label="Prefix">
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>
      </Form>
      <Divider>Output</Divider>
      <Form
        form={formOutput}
        initialValues={defaultValue?.output}
        name="Form oscar output"
      >
        <Form.Item name="suffix" label="Suffix">
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>
        <Form.Item name="prefix" label="Prefix">
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};
