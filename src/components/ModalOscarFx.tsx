import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { IModalFxProps } from "./types";

export const ModalOscarFx: React.FC<IModalFxProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
}) => {
  const [form] = Form.useForm();
  const [script, setScript] = useState("");
  const [scriptContent, setScriptContent] = useState("");
  useEffect(() => {
    if (defaultValue) {
      form.setFieldsValue(defaultValue);
    }
  }, [defaultValue, visible, form]);

  const importScript = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: any) => {
      // var file = e!.target!.files[0];
      console.log(e.target.files[0].name);
      const scriptName = e.target.files[0].name;
      const fr = new FileReader();
      fr.onload = async (e) => {
        form.setFieldsValue({ ...form.getFieldsValue(), script: scriptName });
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
            defaultValue &&
              onOk({
                ...newState,
                script: script,
                scriptContent: scriptContent,
              });
          })
          .catch((error) => console.log("Error", error));
      }}
    >
      <Form form={form} initialValues={defaultValue} name="Form_oscar_fx_modal">
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
          <Input />
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
          <div style={{ display: "flex", columnGap: "1rem" }}>
            <Input
              onClick={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              disabled={true}
              value={script}
              // placeholder="yolo.sh"
              // onChange={(e) => {
              //   setCurrentProperties({
              //     ...currentProperties,
              //     script: e.target.value,
              //   });
              // }}
            />
            <Button
              icon={<UploadOutlined />}
              onClick={() => importScript()}
            ></Button>
          </div>
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
