import React, { useState } from "react";
import "./App.css";
import { mapValues } from "lodash";
import { Message, Page, Sidebar, SidebarItem } from "./components";
import {
  actions,
  FlowChart,
  IChart,
  INodeInnerDefaultProps,
} from "@mrblenny/react-flow-chart";
import { chartSimple } from "./misc/exampleChartState";
import styled from "styled-components";

const Outer = styled.div`
  padding: 30px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid cornflowerblue;
  width: 100%;
`;

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  if (node.type === "output-only") {
    return (
      <Outer>
        <p>Use Node inner to customise the content of the node</p>
      </Outer>
    );
  } else {
    return (
      <Outer>
        <p>Add custom displays for each node.type</p>
        <p>You may need to stop event propagation so your forms work.</p>
        <br />
        <Input
          type="number"
          placeholder="Some Input"
          onChange={(e) => console.log(e)}
          onClick={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </Outer>
    );
  }
};
const App: React.FC = () => {
  const [chart, setChart] = useState<IChart>(chartSimple);

  const stateActions = mapValues(actions, (func: any) => (...args: any) =>
    setChart(func(...args))
  ) as typeof actions;

  return (
    <div className="App">
      <Page>
        <FlowChart
          chart={chart}
          callbacks={stateActions}
          Components={{
            NodeInner: NodeInnerCustom,
          }}
        />
        <Sidebar>
          <Message>Drag and drop these items onto the canvas.</Message>
          <SidebarItem
            type="top/bottom"
            ports={{
              port1: {
                id: "port1",
                type: "top",
                properties: {
                  custom: "property",
                },
              },
              port2: {
                id: "port1",
                type: "bottom",
                properties: {
                  custom: "property",
                },
              },
            }}
            properties={{
              custom: "property",
            }}
          />
          <SidebarItem
            type="bottom-only"
            ports={{
              port1: {
                id: "port1",
                type: "bottom",
                properties: {
                  custom: "property",
                },
              },
            }}
          />
          <SidebarItem
            type="left-right"
            ports={{
              port1: {
                id: "port1",
                type: "left",
                properties: {
                  custom: "property",
                },
              },
              port2: {
                id: "port2",
                type: "right",
                properties: {
                  custom: "property",
                },
              },
            }}
          />
          <SidebarItem
            type="all-sides"
            ports={{
              port1: {
                id: "port1",
                type: "left",
              },
              port2: {
                id: "port2",
                type: "right",
              },
              port3: {
                id: "port3",
                type: "top",
              },
              port4: {
                id: "port4",
                type: "bottom",
              },
            }}
          />
          <SidebarItem
            type="lots-of-ports"
            ports={{
              port1: {
                id: "port1",
                type: "left",
              },
              port2: {
                id: "port2",
                type: "right",
              },
              port3: {
                id: "port3",
                type: "top",
              },
              port4: {
                id: "port4",
                type: "bottom",
              },
              port5: {
                id: "port5",
                type: "left",
              },
              port6: {
                id: "port6",
                type: "right",
              },
              port7: {
                id: "port7",
                type: "top",
              },
              port8: {
                id: "port8",
                type: "bottom",
              },
              port9: {
                id: "port9",
                type: "left",
              },
              port10: {
                id: "port10",
                type: "right",
              },
              port11: {
                id: "port11",
                type: "top",
              },
              port12: {
                id: "port12",
                type: "bottom",
              },
            }}
          />
        </Sidebar>
      </Page>
    </div>
  );
};

export default App;
