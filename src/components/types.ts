import { IConfig, INode } from "@mrblenny/react-flow-chart";
import { StyledComponentProps } from "styled-components";

export type StyledElementProps<
    T extends keyof JSX.IntrinsicElements
    > = StyledComponentProps<T, {}, {}, keyof {}>;

export interface IModalStorageProviderProps {
    visible: boolean;
    onOk: (sidebarItemProps: any) => void;
    onCancel: () => void;
    defaultValue?: any;

}

export interface ISidebarItemProps extends StyledElementProps<'div'> {
    type: string;
    ports: INode["ports"];
    config?: IConfig;
    properties?: any;
}

export interface S3Storage {
    name: string;
    access_key: string;
    secret_key: string;
    region: string;

}

export interface OneDataStorage {
    name: string;
    oneprovider_host: string;
    token: string;
    space: string;
}

export interface MinioDataStorage {
    name: string;
    endpoint: string;
    verify: boolean;
    region: string;
    access_key: string;
    secret_key: string;
}