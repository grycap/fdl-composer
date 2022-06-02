import {
  Checkbox,
  Modal,
  Form,
  Input,
  Row,
  Col,
  Tabs,
  Divider,
  Select,
} from "antd";
import React, { useState } from "react";
import { IModalFxProps } from "./types";

export const ModalAWSFx: React.FC<IModalFxProps> = ({
  visible,
  onOk,
  onCancel,
  defaultValue,
}) => {
  const [formLambda] = Form.useForm();
  const [formLambdaEnvVariables] = Form.useForm();
  const [formLambdaInput] = Form.useForm();
  const [formLambdaOutput] = Form.useForm();
  const [formLambdaContainer] = Form.useForm();
  const [formLambdaContainerEnvVariables] = Form.useForm();
  const [formBatch] = Form.useForm();
  const [formBatchEnvVariables] = Form.useForm();
  const [formBatchComputeResources] = Form.useForm();

  const [enableGpu, setGpuEnabled] = useState(false);
  const [showBatchTab, setShowBatchTab] = useState(
    defaultValue?.lambda?.execution_mode !== "lambda"
  );
  const { Option } = Select;

  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setGpuEnabled(e.target.checked);
  };
  return (
    <Modal
      title={`AWS Fx ${defaultValue?.lambda?.name || ""}`}
      visible={visible}
      onCancel={() => {
        onCancel();
      }}
      onOk={() => {
        formLambda
          .validateFields()
          .then((values) => {
            console.log(values);
            const lambdaEnvironment = formLambdaEnvVariables.getFieldsValue();
            const lambdaInput = formLambdaInput.getFieldsValue();
            const lambdaOutput = formLambdaOutput.getFieldsValue();
            const lambdaContainer = formLambdaContainer.getFieldsValue();
            const lambdaContainerEnv = formLambdaContainerEnvVariables.getFieldsValue();
            const batch = formBatch.getFieldsValue();
            const batchEnv = formBatchEnvVariables.getFieldsValue();
            const batchComp = formBatchComputeResources.getFieldsValue();
            const newState = {
              lambda: {
                ...values,
                environment: lambdaEnvironment,
                input: lambdaInput,
                output: lambdaOutput,
                container: {
                  ...lambdaContainer,
                  environment: lambdaContainerEnv,
                },
              },
              batch: {
                ...batch,
                environment: batchEnv,
                compute_resources: batchComp,
                enable_gpu: enableGpu,
              },
            } as any;
            onOk(newState);
          })
          .catch((error) => console.log("Error", error));
      }}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane key="1" tab="Lambda">
          <Divider>Setup</Divider>
          <Form
            form={formLambda}
            initialValues={defaultValue?.lambda}
            name="Form aws lambda"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input the name of the lambda function",
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
              name="region"
              label="Region"
              rules={[
                {
                  required: true,
                  message: "Please input the region of the lambda function",
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
            <Form.Item name="boto_profile" label="Boto profile">
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
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
            <Form.Item name="init_script" label="Init script">
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
            </Form.Item>
            <Form.Item name="timeout" label="Timeout">
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
            </Form.Item>
            <Form.Item name="log_level" label="Log level">
              <Select>
                <Option value="INFO">INFO</Option>
                <Option value="DEBUG">DEBUG</Option>
                <Option value="ERROR">ERROR</Option>
                <Option value="WARNING">WARNING</Option>
              </Select>
            </Form.Item>
            <Form.Item name="execution_mode" label="Execution mode">
              <Select
                onChange={(option) => {
                  setShowBatchTab(option !== "lambda");
                }}
              >
                <Option value="lambda">Lambda</Option>
                <Option value="lambda-batch">Lambda-Batch</Option>
                <Option value="batch">Batch</Option>
              </Select>
            </Form.Item>
          </Form>
          <Form
            form={formLambdaEnvVariables}
            initialValues={defaultValue?.lambda?.environment}
            name="Form aws lambda environment"
          >
            <Form.Item name="Variables" label="Environment variables">
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
            </Form.Item>
          </Form>
          <Divider>Container</Divider>
          <Form
            form={formLambdaContainer}
            initialValues={defaultValue?.lambda?.container}
            name="Form aws lambda container"
          >
            <Form.Item name="image" label="Image">
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
            </Form.Item>
            <Form.Item name="timeout_threshold" label="Time threshold">
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
            </Form.Item>
          </Form>
          <Form
            form={formLambdaContainerEnvVariables}
            initialValues={defaultValue?.lambda?.container?.environment}
            name="Form aws lambda container environment"
          >
            <Form.Item name="Variables" label="Environment variables">
              <Input
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              ></Input>
            </Form.Item>
          </Form>
          <Divider>Input</Divider>
          <Form
            form={formLambdaInput}
            initialValues={defaultValue?.lambda?.input}
            name="Form aws lambda input"
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
            form={formLambdaOutput}
            initialValues={defaultValue?.lambda?.output}
            name="Form aws lambda output"
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
        {showBatchTab && (
          <Tabs.TabPane key="2" tab="Batch">
            <Form
              form={formBatch}
              initialValues={defaultValue?.batch}
              name="Form aws batch setup"
            >
              <Form.Item name="region" label="Region">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="boto_profile" label="Boto profile">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="memory" label="Memory">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="vcpus" label="vCpu">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Row style={{ marginBottom: "1rem" }}>
                <Col span={3}>Enable gpu</Col>
                <Col span={1}>
                  <Checkbox value={enableGpu} onChange={onCheckboxChange} />
                </Col>
              </Row>
              <Form.Item name="service_role" label="Service role">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
            </Form>
            <Form
              form={formBatchEnvVariables}
              initialValues={defaultValue?.batch?.environment}
              name="Form aws batch environment"
            >
              <Form.Item name="Variables" label="Environment variables">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
            </Form>
            <Form
              form={formBatchComputeResources}
              initialValues={defaultValue?.batch?.compute_resources}
              name="Form aws batch compute resources"
            >
              <Form.Item name="desired_v_cpus" label="Desired vCpus">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="min_v_cpus" label="Min vCpus">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="max_v_cpus" label="Max vCpus">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="instance_role" label="Instance role">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="security_group_ids" label="Security group ids">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
              <Form.Item name="subnets" label="Subnets">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>

              <Form.Item name="instance_types" label="Instance types">
                <Input
                  onClick={(e) => e.stopPropagation()}
                  onMouseUp={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                ></Input>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
        )}
      </Tabs>
    </Modal>
  );
};
