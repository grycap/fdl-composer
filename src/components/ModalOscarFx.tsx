import { Divider, Form, Input,InputNumber, Modal, Col, Row,Checkbox, Select, Tabs } from "antd";
import React, { useState } from "react";
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
  const [formReplica] = Form.useForm();
  const [formExpose] = Form.useForm();


  
  //const [script, setScript] = useState("");
  //const [scriptContent, setScriptContent] = useState("");

  const [yunikorn_enable, setYunikorn_enable] = useState( defaultValue?.yunikorn_enable || false);
  const [alpine, setAlpine] = useState(defaultValue?.alpine ||  false);
  const [enable_gpu, setGPU] = useState(defaultValue?.enable_gpu ||  false);
  const [log_level, setLog_Level] = useState( defaultValue?.log_level || "INFO");
  const [replica_type, setReplica] = useState(defaultValue?.replica_type || "NO REPLICA");
  const [memoryFormat, setMemoryFormat] = useState(defaultValue?.memoryFormat || "Gi");
  const [memoryTotalFormat, setmemoryTotalFormat] = useState( defaultValue?.memoryTotalFormat || "Gi");



  const onCheckboxChangeAlpine = (e: { target: { checked: boolean } }) => {
    setAlpine(e.target.checked);
  };

  const onCheckboxChangeGPU = (e: { target: { checked: boolean } }) => {
    setGPU(e.target.checked);
  };
  const onCheckboxChangeYunikorn = (e: { target: { checked: boolean } }) => {
    setYunikorn_enable(e.target.checked);
  };

  function handleChangeSelect(value:any) {
    setLog_Level(value)
    //console.log(`selected ${value}`);
  }
  function handleChangeReplica(value:any) {
    setReplica(value)
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
  /*const importScript = () => {
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
  };*/

  return (
    <Modal
      title={`OSCAR service ${defaultValue?.name || ""}`}
      visible={visible}
      onCancel={() => {
        onCancel();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {  
            const newState = { ...values, 
              alpine: alpine,
              enable_gpu:enable_gpu,
              log_level:log_level ,
              yunikorn_enable:yunikorn_enable,
              memoryFormat:memoryFormat,
              memoryTotalFormat:memoryTotalFormat,
              synchronous: formSynchronous.getFieldsValue(),
              annotations:formAnnotations.getFieldsValue(),
              labels:formLabels.getFieldsValue(),
              environment: formEnv.getFieldsValue(),
              input: formInput.getFieldsValue(),
              output: formOutput.getFieldsValue(),
              replica_type:replica_type,
              replica: formReplica.getFieldsValue(),
              expose: formExpose.getFieldsValue()
               } as any;
            onOk(newState);
          })
          .catch((error) => console.log("Error", error));
      }}
      width="50%" > 
    <Tabs defaultActiveKey="main">
    <Tabs.TabPane tab="Setup" key="main">
    <Form form={form} initialValues={defaultValue} name="Form_oscar_fx_modal">
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

        <Form.Item name="memory" label="Memory" style={{ width: "80%" , display:"inline-block"  }}>
          <Input  
            onClick={(e) => e.stopPropagation()}
            onMouseUp={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          ></Input>

        </Form.Item>
        <Select defaultValue="Gi" style={{ width: "10%", display:"inline-flex", float:"right"  }} onChange={handleMemorySelect}>
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
      <Row style={{ marginBottom: "1rem" }}>
              <Col span={4}>Log Level:</Col>
              <Col span={2}>
              <Select defaultValue={defaultValue?.log_level || "INFO"} style={{ width: 120 }} onChange={handleChangeSelect}>
                <Option value="CRITICAL">CRITICAL</Option>
                <Option value="ERROR">ERROR</Option>
                <Option value="WARNING" >WARNING</Option>
                <Option value="INFO">INFO</Option>
                <Option value="DEBUG">DEBUG</Option>
                <Option value="NOTSET">NOTSET</Option>
              </Select>
              </Col>
            </Row>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Suffix/Prefix" key="2">
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

    </Tabs.TabPane>

    <Tabs.TabPane tab="Other options" key="3">
    <Form
          form={form}
          initialValues={defaultValue}
          name="other variables for oscar"
          >
            <Row style={{ marginBottom: "1rem" }}>
              <Col span={3}>Alpine:</Col>
              <Col span={1}>
                <Checkbox checked={alpine} value={alpine} onChange={onCheckboxChangeAlpine} />
              </Col>
            </Row>
            <Row style={{ marginBottom: "1rem" }}>
              <Col span={3}>GPU:</Col>
              <Col span={1}>
                <Checkbox checked={enable_gpu} value={enable_gpu} onChange={onCheckboxChangeGPU} />
              </Col>
            </Row>
          </Form> 

        <Form
          form={formAnnotations}
          initialValues={defaultValue}
          name="other variables for oscar"
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
          name="other variables for oscar"
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
    </Tabs.TabPane>

    <Tabs.TabPane tab="Replica" key="4">
    <Form
          form={formReplica}
          initialValues={defaultValue}
          name="other variables for oscar"
          >
            <Row style={{ marginBottom: "1rem" }}>
              <div className="ant-col ant-form-item-label">
                <label >Replica</label>
              </div>
              <Col style={{ width: "90%" }}>
              <Select defaultValue={defaultValue?.replica_type || "NO REPLICA"} style={{ width: "100%" }} onChange={handleChangeReplica}>
                <Option value="NO REPLICA">NO REPLICA</Option>
                <Option value="oscar">OSCAR</Option>
                <Option value="endpoint" >ENDPOINT</Option>
              </Select>
              </Col>
            </Row>

          {replica_type === "oscar" &&
            <div>
            <Form.Item 
              name="cluster_id"
              label="Cluster ID"
            >
              <Input defaultValue={defaultValue?.replica?.cluster_id}
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            <Form.Item
              name="service_name"
              label="Service Name"
            > 
              <Input defaultValue={defaultValue?.replica?.service_name}
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            </div>
          }
          {replica_type === "endpoint" &&
            <div>
            <Form.Item 
              name="url"
              label="URL"
            >
              <Input defaultValue={defaultValue?.replica?.url}
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            <Form.Item
              name="ssl_verify"
              label="SSL Verify"
            >
              <Input defaultValue={defaultValue?.replica?.ssl_verify}
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            </div>
          }

          {(replica_type === "endpoint" || replica_type === "oscar") &&
            <div>
            <Form.Item 
              name="priority"
              label="Priority"
            >
              <InputNumber defaultValue={defaultValue?.replica?.priority || 0}
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            <Form.Item
              name="headers"
              label="Headers"
            >
              <Input  defaultValue={defaultValue?.replica?.headers}
                placeholder= 'Separate by "," and assign value by "="'
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </Form.Item> 
            </div>
          }
        </Form> 
    </Tabs.TabPane>
    <Tabs.TabPane tab="Yunikorn" key="5">
    <Form
          form={form}
          initialValues={defaultValue}
          name="other variables for oscar"
          >
        <Row style={{ marginBottom: "1rem" }}>
          <div className="ant-col ant-form-item-label">
            <label >Yunikorn</label>
          </div>
            <Checkbox style={{marginTop:"5px"}} checked={yunikorn_enable} value={yunikorn_enable} onChange={onCheckboxChangeYunikorn} />
        </Row>

          {yunikorn_enable
          ? 
            <div>
            <Form.Item   style={{ width: "80%" , display:"inline-block"  }}
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
            <Select defaultValue="Gi"  style={{ width: "10%", display:"inline-flex", float:"right"  }} onChange={handleMemoryTotalSelect}>
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
      </Form>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Expose" key="6">
    <Form form={formExpose} initialValues={defaultValue} name="exposel">
      <Form.Item name="min_scale" label="Min Scale" style={{width: "45%" , display:"inline-block"}}>
              <InputNumber  style={{width: "100%" }}
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
      </Form.Item>
      <Form.Item name="max_scale" label="Max Scale" style={{width: "45%" , display:"inline-block", float:"right"}}>
              <InputNumber  style={{width: "100%" }} 
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
      </Form.Item>
      <Form.Item name="port" label="Port" >
              <InputNumber  style={{width: "100%" }} 
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
      </Form.Item>
      <Form.Item name="cpu_threshold" label="CPU ThresHold">
              <InputNumber  style={{width: "100%" }} 
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              />
      </Form.Item>
    </Form>
    </Tabs.TabPane>

  </Tabs>
    </Modal>
  );
};
