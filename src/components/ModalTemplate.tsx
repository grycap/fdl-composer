import { Modal, Table } from "antd";
import React, { useState } from "react";
import { IModalTemplateProps } from "./types";
import type { ColumnsType } from 'antd/lib/table';
import { template_data } from "./templateData/template_data";

export const ModalTemplate: React.FC<IModalTemplateProps> = ({
  visible,
  onOk,
  onCancel,
  importFileState,
}) => {

interface DataType {
  key: React.Key;
  name: string;
  description: string;
  file:string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },

];

const data: DataType[] = template_data;
const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
//const [loading, setLoading] = useState(false);
const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  setSelectedRowKeys(newSelectedRowKeys);
};
const rowSelection = {
  selectedRowKeys,
  onChange: onSelectChange,
};

  return (
    <Modal
      title={`Templates `}
      visible={visible}
      onCancel={() => {
        onCancel();
        setSelectedRowKeys([])
      }}
      onOk={() => {
        const filename =data[(selectedRowKeys[0] as number)-1].file;
        const myJson = require(`${filename}`)
        importFileState(myJson);
      }}
    >
      <Table rowSelection={{type:'radio', ...rowSelection }} columns={columns} pagination={{ position: ['bottomCenter'] }} dataSource={data} />
    </Modal>
  );
};
