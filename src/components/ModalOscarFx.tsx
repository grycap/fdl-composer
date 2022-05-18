import { UploadOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, Modal, Upload, Col, Row,Checkbox, Select } from "antd";
import React, { useEffect, useState } from "react";
import { IModalFxProps } from "./types";

const { Option } = Select;

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
  const [formSynchronous] = Form.useForm();
  const [formAnnotations] = Form.useForm();
  const [formLabels] = Form.useForm();


  
  const [script, setScript] = useState("");
  const [scriptContent, setScriptContent] = useState("");

  const [showOther, setShowOther] = useState(false);
  const [yunikorn_enable, setYunikorn_enable] = useState(false);
  const [alpine, setAlpine] = useState(false);
  const [log_level, setLog_Level] = useState("");
  const [memoryFormat, setMemoryFormat] = useState("Gi");
  const [memoryTotalFormat, setmemoryTotalFormat] = useState("Gi");

  function handlesetShowOther() {
    setShowOther(!showOther)
    //console.log(`selected ${value}`);
  }

  const onCheckboxChangeAlpine = (e: { target: { checked: boolean } }) => {
    setAlpine(e.target.checked);
  };
  const onCheckboxChangeYunikorn = (e: { target: { checked: boolean } }) => {
    setYunikorn_enable(e.target.checked);
  };

  function handleChangeSelect(value:any) {
    setLog_Level(value)
    //console.log(`selected ${value}`);
  }
  
  function handleMemorySelect(value:any) {
    setMemoryFormat(value)
    //console.log(`selected ${value}`);
  }
  function handleMemoryTotalSelect(value:any) {
    setmemoryTotalFormat(value)
    //console.log(`selected ${value}`);
  }
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
          .then((values) => {   
            const newState = { ...values, alpine: alpine,
              log_level:log_level ,
              yunikorn_enable:yunikorn_enable,
              memoryFormat:memoryFormat,
              memoryTotalFormat:memoryTotalFormat,
              synchronous: formSynchronous.getFieldsValue(),
              annotations:formAnnotations.getFieldsValue(),
              labels:formLabels.getFieldsValue(),
              environment: formEnv.getFieldsValue(),
              input: formInput.getFieldsValue(),
              output: formOutput.getFieldsValue() } as any;
            onOk(newState);
          })
          .catch((error) => console.log("Error", error));
      }}
    >
      <Form form={form} initialValues={defaultValue} name="Form_oscar_fx_modal">
        <Divider>Setup</Divider>

        <Form.Item
          name="cluster_name"
          label="Cluster Name"
        >
          <Input
            defaultValue="oscar-cluster"
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </Form.Item>

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

        <Form.Item name="memory" label="Memory" style={{ width: 402 , display:"inline-flex"  }}>
          <Input 
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>

          
        </Form.Item>
        <Select defaultValue="Gi" style={{ width: 70, display:"inline-flex"  }} onChange={handleMemorySelect}>
            <Option value="Mi">Mi</Option>                                                                                    
            <Option value="Gi">Gi</Option>
          </Select>
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


      {showOther
        ? 
        <div>
        <Divider></Divider>

        <Row style={{ marginBottom: "1rem" }}>
          <Col span={6}>Less options:</Col>
          <Col span={1}>
            <Button  onClick={handlesetShowOther}>-</Button>
          </Col>
        </Row>


          <Form
          form={form}
          initialValues={defaultValue}
          name="other variables for oscar"
          >
            <Row style={{ marginBottom: "1rem" }}>
              <Col span={3}>Yunikorn: </Col>
              <Col span={1}>
                <Checkbox value={yunikorn_enable} onChange={onCheckboxChangeYunikorn} />
              </Col>
            </Row>

          {yunikorn_enable
          ? 
            <div>
            <Form.Item  style={{ width: 402, display:"inline-flex"  }}
              name="total_memory"
              label="Total Memory"
            >
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            <Select defaultValue="Gi" style={{ width: 70, display:"inline-flex"  }} onChange={handleMemoryTotalSelect}>
            <Option value="Mi">Mi</Option>                                                                                    
            <Option value="Gi">Gi</Option>
          </Select>
            <Form.Item
              name="total_cpu"
              label="Total CPU"
            >
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            </div>
          :<div></div>}

        
            <Row style={{ marginBottom: "1rem" }}>
              <Col span={4}>Log Level:</Col>
              <Col span={2}>
              <Select defaultValue="INFO" style={{ width: 120 }} onChange={handleChangeSelect}>
                <Option value="CRITICAL">CRITICAL</Option>
                <Option value="ERROR">ERROR</Option>
                <Option value="WARNING" >WARNING</Option>
                <Option value="INFO">INFO</Option>
                <Option value="DEBUG">DEBUG</Option>
                <Option value="NOTSET">NOTSET</Option>
              </Select>
              </Col>
            </Row>

            <Row style={{ marginBottom: "1rem" }}>
              <Col span={3}>Alpine:</Col>
              <Col span={1}>
                <Checkbox value={alpine} onChange={onCheckboxChangeAlpine} />
              </Col>
            </Row>
          </Form> 

        <Form
          form={formAnnotations}
          initialValues={defaultValue}
          name="other variables fot oscar"
        >
          <Form.Item name="Annotations" label="Annotations">
              <Input
                placeholder= 'Separate by "," and assign value by "="'
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
            </Form.Item>
        </Form>

        <Form

          form={formLabels}
          initialValues={defaultValue}
          name="other variables fot oscar"
        >

          <Form.Item name="Labels" label="Labels">
            <Input
              placeholder= 'Separate by "," and assign value by "="'
              onClick={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            ></Input>
          </Form.Item>
        </Form>




      <Form
      form={formSynchronous}
      initialValues={defaultValue}
      name="Synchronous Form"
      >     
      <Divider>Synchronous</Divider>
        <Form.Item
          name="min_scale"
          label="Min Scale"
        >
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </Form.Item>
        <Form.Item
          name="max_scale"
          label="Max Scale"
        >
          <Input
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          />
        </Form.Item>

      </Form>       
      </div>  
        : 
        <div>
        <Divider></Divider>
        
        <Row style={{ marginBottom: "1rem" }}>
          <Col span={6}>More options:</Col>
          <Col span={1}>
          <Button  onClick={handlesetShowOther}>+</Button>
          </Col>
        </Row>
        </div>
      }

    </Modal>
  );
};
