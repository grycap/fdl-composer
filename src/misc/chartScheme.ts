import { IChart } from "@mrblenny/react-flow-chart";
export interface IVisible {
  modalVisible: boolean;
}

export const chartScheme: IChart & IVisible = {
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
}
