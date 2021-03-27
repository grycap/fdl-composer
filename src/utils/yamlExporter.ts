import { YamlExport } from "../components/types";
import yaml from "js-yaml";

import { saveAs } from "file-saver";

export const yamlExporter = (nodeValues: any[], linkValues: any[]) => {


    const storages = nodeValues.filter(
        (x) => x.type === "s3" || x.type === "onedata" || x.type === "minio"
    );
    const oscarFxs = nodeValues
        .filter((x: any) => x.type === "oscar-fx")
        .map((node) => {
            const nodeInputLinks = linkValues.filter(
                (lv) =>
                    (lv.to.nodeId === node.id &&
                        (lv.to.portId === "port1" || lv.to.portId === "port4")) ||
                    (lv.from.nodeId === node.id &&
                        (lv.from.portId === "port1" || lv.from.portId === "port4"))
            );

            const nodeOutputLinks = linkValues.filter(
                (lv) =>
                    (lv.to.nodeId === node.id &&
                        (lv.to.portId === "port2" || lv.to.portId === "port3")) ||
                    (lv.from.nodeId === node.id &&
                        (lv.from.portId === "port2" || lv.from.portId === "port3"))
            );

            const inputNode = storages.find((x) =>
                nodeInputLinks.some(
                    (y) => y.from.nodeId === x.id || y.to.nodeId === x.id
                )
            );
            console.log("Input node", inputNode);

            const outputNode = storages.find((x) =>
                nodeOutputLinks.some(
                    (y) => y.from.nodeId === x.id || y.to.nodeId === x.id
                )
            );

            console.log("Output node", outputNode);

            const copy = JSON.parse(JSON.stringify(node.properties));
            const input = copy.input;
            if (input) {
                input.storage_provider = `${inputNode?.type}.${inputNode?.properties.name}`;
                input.path = inputNode?.properties.path;
                if (input.prefix)
                    input.prefix = input.prefix.replace(" ", "").split(",");
                if (input?.suffix)
                    input.suffix = input.suffix.replace(" ", "").split(",");
                copy.input = [input];
            }
            const output = copy.output;
            if (output) {
                output.storage_provider = `${outputNode?.type}.${outputNode?.properties.name}`;
                output.path = outputNode?.properties.path;
                if (output.prefix)
                    output.prefix = output.prefix.replace(" ", "").split(",");
                if (output.suffix)
                    output.suffix = output.suffix.replace(" ", "").split(",");
                copy.output = [output];
            }

            const environment = copy.environment;
            if (environment) {
                copy.environment = {
                    Variables: environment.Variables.replace(" ", "")
                        .split(",")
                        .map((x: string) => {
                            const kvp = x.split("=");
                            return { [kvp[0].trim()]: kvp[1].trim() };
                        })
                        .reduce((a: any, b: any) => {
                            return { ...a, ...b };
                        }),
                };
            }
            return copy;
        });

    const awsFxs = nodeValues
        .filter((x: any) => x.type === "aws-fx")
        .map((node) => {
            const copy = JSON.parse(JSON.stringify(node.properties));
            const nodeInputLinks = linkValues.filter(
                (lv) =>
                    (lv.to.nodeId === node.id &&
                        (lv.to.portId === "port1" || lv.to.portId === "port4")) ||
                    (lv.from.nodeId === node.id &&
                        (lv.from.portId === "port1" || lv.from.portId === "port4"))
            );

            const nodeOutputLinks = linkValues.filter(
                (lv) =>
                    (lv.to.nodeId === node.id &&
                        (lv.to.portId === "port2" || lv.to.portId === "port3")) ||
                    (lv.from.nodeId === node.id &&
                        (lv.from.portId === "port2" || lv.from.portId === "port3"))
            );

            const inputNode = storages.find((x) =>
                nodeInputLinks.some(
                    (y) => y.from.nodeId === x.id || y.to.nodeId === x.id
                )
            );

            const outputNode = storages.find((x) =>
                nodeOutputLinks.some(
                    (y) => y.from.nodeId === x.id || y.to.nodeId === x.id
                )
            );
            const input = copy.lambda?.input;
            if (input) {
                input.storage_provider = `${inputNode?.type}.${inputNode?.properties.name}`;
                if (input?.prefix)
                    input.prefix = input.prefix.replace(" ", "").split(",");
                if (input?.suffix)
                    input.suffix = input.suffix.replace(" ", "").split(",");
                copy.lambda.input = input;
            }
            const output = copy.lambda?.output;
            if (output) {
                output.storage_provider = `${outputNode?.type}.${outputNode?.properties.name}`;
                if (output?.prefix)
                    output.prefix = output.prefix.replace(" ", "").split(",");
                if (output.suffix)
                    output.suffix = output.suffix.replace(" ", "").split(",");
                copy.lambda.output = output;
            }

            const computeResources = copy.batch?.compute_resources;
            if (computeResources?.instance_types) {
                computeResources.instance_types = computeResources.instance_types
                    .replace(" ", "")
                    .split(",");
            }
            if (computeResources?.subnets) {
                computeResources.subnets = computeResources.subnets
                    .replace(" ", "")
                    .split(",");
            }
            if (computeResources?.security_group_ids) {
                computeResources.security_group_ids = computeResources.security_group_ids
                    .replace(" ", "")
                    .split(",");
            }

            const lambdaEnvironment = copy.lambda?.environment;
            if (lambdaEnvironment) {
                copy.lambda.environment = {
                    Variables: lambdaEnvironment.Variables.replace(" ", "")
                        .split(",")
                        .map((x: string) => {
                            const kvp = x.split("=");
                            return { [kvp[0].trim()]: kvp[1].trim() };
                        })
                        .reduce((a: any, b: any) => {
                            return { ...a, ...b };
                        }),
                };
            }
            const batchEnvironment = copy.batch?.environment;
            if (batchEnvironment) {
                copy.batch.environment = {
                    Variables: lambdaEnvironment.Variables.replace(" ", "")
                        .split(",")
                        .map((x: string) => {
                            const kvp = x.split("=");
                            return { [kvp[0].trim()]: kvp[1].trim() };
                        })
                        .reduce((a: any, b: any) => {
                            return { ...a, ...b };
                        }),
                };
            }
            const containerEnvironment = copy.lambda?.container?.environment;

            if (containerEnvironment) {
                copy.lambda.container.environment = {
                    Variables: containerEnvironment.Variables.replace(" ", "")
                        .split(",")
                        .map((x: string) => {
                            const kvp = x.split("=");
                            return { [kvp[0].trim()]: kvp[1].trim() };
                        })
                        .reduce((a: any, b: any) => {
                            return { ...a, ...b };
                        }),
                };
            }

            return copy;
        });
    const oneDataStorage = nodeValues
        .filter((x: any) => x.type === "onedata")
        .map((node) => node.properties)
        .reduce((a, b) => {
            const copy = JSON.parse(JSON.stringify(b));
            delete copy.path;
            delete copy.output;

            return { ...a, [b.name]: copy };
        }, {});

    const s3Storage = nodeValues
        .filter((x: any) => x.type === "s3")
        .map((node) => node.properties)
        .reduce((a, b) => {
            const copy = JSON.parse(JSON.stringify(b));
            delete copy.name;
            delete copy.path;
            delete copy.output;
            return { ...a, [b.name]: copy };
        }, {});

    const minio = nodeValues
        .filter((x: any) => x.type === "minio")
        .map((node) => node.properties)
        .reduce((a, b) => {
            const copy = JSON.parse(JSON.stringify(b));
            delete copy.name;
            delete copy.path;
            delete copy.output;

            return { ...a, [b.name]: copy };
        }, {});
    const result: YamlExport = {
        functions: {
            oscar: oscarFxs.map((x) =>
                JSON.parse(`{ "${x.name}": ${JSON.stringify(x)} }`)
            ),
            aws: awsFxs,
        },
        storage_providers: {},
    };
    if (Object.keys(s3Storage).length !== 0) {
        result["storage_providers"].s3 = s3Storage;
    }
    if (Object.keys(oneDataStorage).length !== 0) {
        result["storage_providers"].onedata = oneDataStorage;
    }
    if (Object.keys(minio).length !== 0) {
        result["storage_providers"].minio = minio;
    }

    result.storage_providers.s3 === {} && delete result.storage_providers.s3;
    result.storage_providers.onedata === {} &&
        delete result.storage_providers.onedata;
    result.storage_providers.minio === {} &&
        delete result.storage_providers.minio;

    const output = yaml.dump(result);
    const blob = new Blob([output], {
        type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "workflow.yaml");
}
