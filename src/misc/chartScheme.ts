import { IChart } from "@mrblenny/react-flow-chart";
import { ISidebarItemProps } from "../components/types";
export interface IVisible {
  modalVisible: boolean;
}

export interface IStorageProvider {
  storageProviders: ISidebarItemProps[];
  s3ModalVisible: boolean;
  oneDataModalVisible: boolean;
  minioModalVisible: boolean;
  s3DefaultValue: any;
  oneDataDefaultValue: any;
  minioDefaultValue: any;
}

export const initialState: IChart & IVisible & IStorageProvider = {
  offset: {
    x: 0,
    y: 0,
  },
  scale: 1,
  nodes: {},
  links: {},
  selected: {},
  hovered: {},
  modalVisible: false,
  storageProviders: [],
  s3ModalVisible: false,
  oneDataModalVisible: false,
  minioModalVisible: false,
  s3DefaultValue: undefined,
  oneDataDefaultValue: undefined,
  minioDefaultValue: undefined
}
