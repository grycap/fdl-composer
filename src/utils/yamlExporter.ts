import { YamlExport } from "../components/types";
import yaml from "js-yaml";

import { saveAs } from "file-saver";

function ErrorHandler(error:any) {
    return error
}

export const yamlExporter = (nodeValues: any[], linkValues: any[]) => {

    try{
        const storages = nodeValues.filter(
            (x) => x.type === "s3" || x.type === "onedata" || x.type === "minio" || x.type === "dCache"
        );
        /*storages.forEach((element, index) => {
            if(storages[index].type==="dCache"){
                storages[index].type = "webdav";
            }
        });*/
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
                let input = copy.input;
                if (input) {
                    input.path = inputNode?.properties.path;
                    console.log(inputNode)
                    
                    input.storage_provider = `${inputNode?.type==="dCache" ? "webdav" : inputNode?.type   }.${inputNode?.properties.name}`;

                    if (input.prefix) {
                        input.prefix = input.prefix.replace(" ", "").split(",");
                    }
                    else {
                        delete input.prefix;
                    }

                    if (input?.suffix) {

                        input.suffix = input.suffix.replace(" ", "").split(",");
                    }
                    else {
                        delete input.suffix;
                    }
                }
                else {
                    input = { path: inputNode?.properties.path, storage_provider: `${inputNode?.type}.${inputNode?.properties.name}` }

                }
                copy.input = [input];

                let output = copy.output;
                if (output) {
                    output.path = outputNode?.properties.path;

                    output.storage_provider = `${outputNode?.type}.${outputNode?.properties.name}`;
                    if (output.prefix) {

                        output.prefix = output.prefix.replace(" ", "").split(",");
                    }
                    else {
                        delete output.prefix;
                    }

                    if (output.suffix) {
                        output.suffix = output.suffix.replace(" ", "").split(",");
                    }
                    else {
                        delete output.suffix;
                    }
                }
                else {
                    output = { path: outputNode?.properties.path, storage_provider: `${outputNode?.type}.${outputNode?.properties.name}` }
                }
                //console.log(output);

                copy.output = [output];

                const environment = copy.environment;
                if (environment?.Variables) {
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

                const annotations =copy.annotations.Annotations ;
                if (annotations) {
                    copy.annotations = annotations.replace(" ", "")
                            .split(",")
                            .map((x: string) => {
                                const kvp = x.split("=");
                                return { [kvp[0].trim()]: kvp[1].trim() };
                            })
                            .reduce((a: any, b: any) => {
                                return { ...a, ...b };
                            })
                    ;
                }

                const labels =copy.labels.Labels ;
                if (labels) {
                    copy.labels = labels.replace(" ", "")
                            .split(",")
                            .map((x: string) => {
                                const kvp = x.split("=");
                                return { [kvp[0].trim()]: kvp[1].trim() };
                            })
                            .reduce((a: any, b: any) => {
                                return { ...a, ...b };
                            })
                    ;
                }
                
                if(copy.memory !== undefined && Object.keys(copy.memory).length !== 0){
                    copy.memory = copy.memory+copy.memoryFormat
                }

                if(copy.yunikorn_enable ===true ){
                    if( copy.total_memory !== undefined && Object.keys(copy.total_memory).length !== 0){
                        copy.total_memory = copy.total_memory+copy.memoryTotalFormat
                    }
                    copy.total_memory !== undefined && Object.keys(copy.total_memory).length === 0 && delete copy.total_memory
                    copy.total_cpu !== undefined && Object.keys(copy.total_cpu).length === 0 && delete copy.total_cpu
                }else{
                    copy.total_memory !== undefined && Object.keys(copy.total_memory).length === 0 && delete copy.total_memory
                    copy.total_cpu !== undefined && Object.keys(copy.total_cpu).length === 0 && delete copy.total_cpu
                    delete copy.yunikorn_enable
                } 
                if(copy?.replica && Object.keys(copy.replica).length !== 0){
                    copy.replica.type=copy.replica_type
                    delete copy.replica_type
                    if(copy.replica.type === "NO REPLICA" ){
                        delete copy.replica
                    }else if(copy.replica.type === "oscar" ){
                        //delete copy.replica
                    }else if(copy.replica.type === "endpoint" ){
                        //delete copy.replica
                    }
                    if(copy.replica?.type === "endpoint" || copy.replica?.type === "oscar"){
                        if(copy.replica?.headers){
                            const headers =copy.replica.headers ;
                            if (headers) {
                                copy.replica.headers = headers.replace(" ", "")
                                        .split(",")
                                        .map((x: string) => {
                                            const kvp = x.split("=");                                            
                                            return { [kvp[0].trim()]: kvp[1].trim() };
                                        })
                                        .reduce((a: any, b: any) => {
                                            return { ...a, ...b };
                                        })
                                ;
                            }
                        }
                    }
                }else{
                    delete copy.replica_type
                    delete copy.replica
                }
                //Expose options
                if (copy.expose.port === undefined || copy.expose.port === null){
                    delete copy.expose
                }else{
                    if(copy.expose.min_scale === undefined || copy.expose.min_scale === null ){
                        delete copy.expose.min_scale
                    }
                    if(copy.expose.max_scale === undefined || copy.expose.max_scale === null ){
                        delete copy.expose.max_scale
                    }
                    if(copy.expose.cpu_threshold === undefined || copy.expose.cpu_threshold === null){
                        delete copy.expose.cpu_threshold
                    }
                }

                
                //Delete of the empthy variables
                if(copy.cluster_name === undefined || Object.keys(copy.cluster_name).length === 0){
                    copy.cluster_name='oscar-cluster'
                }
                copy.memory !== undefined && Object.keys(copy.memory).length === 0 && delete copy.memory
                delete copy.memoryFormat
                copy.cpu !== undefined && Object.keys(copy.cpu).length === 0 && delete copy.cpu

                if(copy.environment !== undefined && Object.keys(copy.environment).length === 0){
                    delete copy.environment
                }else if(copy.environment.Variables !== undefined && Object.keys(copy.environment.Variables).length === 0){
                    delete copy.environment
                }               
                delete copy.memoryTotalFormat
                Object.keys(copy.log_level).length === 0 && delete copy.log_level;
                copy.alpine === false && delete copy.alpine;

                if(copy.annotations !== undefined && Object.keys(copy.annotations).length === 0){
                    delete copy.annotations
                }else if(copy.annotations.Annotations !== undefined && Object.keys(copy.annotations.Annotations).length === 0){
                    delete copy.annotations
                }

                if(copy.labels !== undefined && Object.keys(copy.labels).length === 0){
                    delete copy.labels
                }else if(copy.labels.Labels !== undefined && Object.keys(copy.labels.Labels).length === 0){
                    delete copy.labels
                }

                if(copy.synchronous !== undefined && Object.keys(copy.synchronous).length === 0 ){
                    delete copy.synchronous       
                }else{
                    if(copy.synchronous.min_scale !== undefined && Object.keys(copy.synchronous.min_scale).length === 0){   
                        delete copy.synchronous.min_scale           
                    }
                    if(copy.synchronous.max_scale !== undefined && Object.keys(copy.synchronous.max_scale).length === 0){
                        delete copy.synchronous.max_scale           
                    }
                    if(copy.synchronous.min_scale === undefined && copy.synchronous.max_scale === undefined){
                        delete copy.synchronous
                    }
                }

                if(copy.input.length === 1 && copy.input[0].storage_provider === "undefined.undefined"){
                    delete copy.input
                }
                if(copy.output.length === 1 && copy.output[0].storage_provider === "undefined.undefined"){
                    delete copy.output
                }

                if(copy.enable_gpu === false ){
                    delete copy.enable_gpu
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
                let input = copy.lambda?.input;
                if (input) {
                    input.path = inputNode?.properties.path;
                    input.storage_provider = `${inputNode?.type}.${inputNode?.properties.name}`;
                    if (input?.prefix)
                        input.prefix = input.prefix.replace(" ", "").split(",");
                    if (input?.suffix)
                        input.suffix = input.suffix.replace(" ", "").split(",");
                }
                else {
                    input = {
                        path: inputNode?.properties.path, storage_provider: `${inputNode?.type}.${inputNode?.properties.name}`
                    }
                }
                copy.lambda.input = [input];

                let output = copy.lambda?.output;
                if (output) {
                    output.path = outputNode?.properties.path;
                    output.storage_provider = `${outputNode?.type}.${outputNode?.properties.name}`;
                    if (output?.prefix)
                        output.prefix = output.prefix.replace(" ", "").split(",");
                    if (output.suffix)
                        output.suffix = output.suffix.replace(" ", "").split(",");
                }
                else {

                    output = {
                        path: outputNode?.properties.path,
                        storage_provider: `${outputNode?.type}.${outputNode?.properties.name}`
                    }
                }
                copy.lambda.output = [output];

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
                if (lambdaEnvironment?.Variables) {
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
                if (batchEnvironment?.Variables) {
                    copy.batch.environment = {
                        Variables: batchEnvironment.Variables.replace(" ", "")
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

                if (containerEnvironment?.Variables) {
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
                Object.keys(copy.lambda.environment).length === 0 && delete copy.lambda.environment;
                Object.keys(copy.lambda.container.environment).length === 0 && delete copy.lambda.container.environment;
                Object.keys(copy.lambda.container).length === 0 && delete copy.lambda.container;
                Object.keys(copy.batch.environment).length === 0 && delete copy.batch.environment;
                Object.keys(copy.batch.compute_resources).length === 0 && delete copy.batch.compute_resources;
                !copy.batch.compute_resources && !copy.batch.environment && delete copy.batch;



                return copy;
            });
        const oneDataStorage = nodeValues
            .filter((x: any) => x.type === "onedata")
            .map((node) => node.properties)
            .reduce((a, b) => {
                const copy = JSON.parse(JSON.stringify(b));
                delete copy.name;
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
        const dcache = nodeValues
            .filter((x: any) => x.type === "dCache")
            .map((node) => node.properties)
            .reduce((a, b) => {
                const copy = JSON.parse(JSON.stringify(b));
                delete copy.name;
                delete copy.path;
                return { ...a, [b.name]: copy };
            }, {});
        
        const result: YamlExport = {
            functions: {
                oscar: oscarFxs.map((x) =>{
                    const clusterName=x.cluster_name
                    delete x.cluster_name
                    return JSON.parse(`{ "${clusterName}": ${JSON.stringify(x)} } `)
                },{}
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
        if (Object.keys(dcache).length !== 0) {
            result["storage_providers"].webdav = dcache;
        }
        result.storage_providers.s3 === '{}' && delete result.storage_providers.s3;
        result.storage_providers.onedata === '{}' && delete result.storage_providers.onedata;
        result.storage_providers.minio === '{}' && delete result.storage_providers.minio;

        if(Object.keys(result.functions.oscar).length === 0 ){
            delete result.functions.oscar
        }
        if(Object.keys(result.functions.aws).length === 0 ){
            delete result.functions.aws
        }
        if(Object.keys(result.storage_providers).length === 0 ){
            delete result.storage_providers
        }

        const output = yaml.dump(result);
        const blob = new Blob([output], {
            type: "text/plain;charset=utf-8",
        });
        saveAs(blob, "workflow.yaml");
    }catch(error){
        return ErrorHandler(error)
    }
}
