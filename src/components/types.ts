import { IConfig, INode } from "@mrblenny/react-flow-chart";
import { StyledComponentProps } from "styled-components";

export type StyledElementProps<
    T extends keyof JSX.IntrinsicElements
    > = StyledComponentProps<T, {}, {}, keyof {}>;

export interface IModalStorageProviderProps {
    visible: boolean;
    onOk: (sidebarItemProps: any) => void;
    onCancel: () => void;

}

export interface ISidebarItemProps extends StyledElementProps<'div'> {
    type: string;
    ports: INode["ports"];
    config?: IConfig;
    properties?: any;
}