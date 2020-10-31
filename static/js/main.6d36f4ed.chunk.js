(this["webpackJsonpworkflow-builder"]=this["webpackJsonpworkflow-builder"]||[]).push([[0],{168:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),i=n.n(o),p=n(13),c=n.n(p),a=(n(93),n(18)),s=n(19),u=n(22),d=n(23),l=n(8),j=(n(94),n(33)),f=n(3);function b(){var t=Object(l.a)(["\n  margin: 10px;\n  padding: 10px;\n  line-height: 1.4em;\n  white-space: pre-wrap;\n  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',\n    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;\n\n  background-color: #eff0f1;\n  overflow: auto;\n"]);return b=function(){return t},t}f.default.pre(b());function x(){var t=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"]);return x=function(){return t},t}f.default.div(x());function y(){var t=Object(l.a)(["\n  margin: 10px 10px 0px;\n  padding: 10px;\n  line-height: 1.4em;\n"]);return y=function(){return t},t}var h=f.default.div(y());function O(){var t=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 100vh;\n"]);return O=function(){return t},t}function v(){var t=Object(l.a)(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"]);return v=function(){return t},t}var m=Object(f.createGlobalStyle)(v()),g=f.default.div(O()),w=function(t){var e=t.children;return Object(r.jsxs)(g,{children:[e,Object(r.jsx)(m,{})]})};function C(){var t=Object(l.a)(["\n  width: 300px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"]);return C=function(){return t},t}var F=f.default.div(C()),k=n(11);function S(){var t=Object(l.a)(["\n  margin-bottom: 1rem;\n  border: 0.5px solid grey;\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n"]);return S=function(){return t},t}var D=f.default.div(S()),L=function(t){var e=t.type,n=t.ports,o=t.properties,i=t.display;return Object(r.jsx)(D,{draggable:!0,onDragStart:function(t){console.log(t),t.dataTransfer.setData(k.REACT_FLOW_CHART,JSON.stringify({type:e,ports:n,properties:o}))},children:i||e})},M={offset:{x:0,y:0},scale:1,nodes:{},links:{},selected:{},hovered:{}},T=n(171),A=n(172),N=n(173);function z(){var t=Object(l.a)(["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  width: 100%;\n"]);return z=function(){return t},t}function B(){var t=Object(l.a)(["\n  padding: 30px;\n"]);return B=function(){return t},t}var I=f.default.div(B()),J=(f.default.input(z()),function(t){var e=t.node;t.config;switch(e.type){case"Function input":case"Function output":case"Storage provider":return Object(r.jsx)(I,{children:Object(r.jsx)("p",{children:e.type})});default:return Object(r.jsxs)(I,{children:[Object(r.jsx)("p",{children:e.type}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:Object(r.jsx)(T.a,{type:"primary",shape:"circle",icon:Object(r.jsx)(A.a,{})})})]})}}),V=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state=Object(j.cloneDeep)(M),t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=Object(j.mapValues)(k.actions,(function(e){return function(){return t.setState(e.apply(void 0,arguments))}}));return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(w,{children:[Object(r.jsx)(k.FlowChart,{chart:e,callbacks:n,Components:{NodeInner:J}}),Object(r.jsxs)(F,{children:[Object(r.jsx)(h,{children:"Drag and drop these items onto the canvas."}),Object(r.jsx)(L,{display:Object(r.jsxs)("div",{children:[Object(r.jsx)(N.a,{})," input"]}),type:"Function input",ports:{port1:{id:"port1",type:"bottom",properties:{custom:"property"}},port2:{id:"port2",type:"right",properties:{custom:"property"}}}}),Object(r.jsx)(L,{display:Object(r.jsxs)("div",{children:[Object(r.jsx)(N.a,{})," output"]}),type:"Function output",ports:{port1:{id:"port1",type:"top",properties:{custom:"property"}},port2:{id:"port2",type:"bottom",properties:{custom:"property"}}}}),Object(r.jsx)(L,{type:"S3 storage",ports:{port1:{id:"port1",type:"left",properties:{custom:"property"}}},properties:{custom:"property"}}),Object(r.jsx)(L,{type:"One-data storage",ports:{port1:{id:"port1",type:"left",properties:{custom:"property"}}},properties:{custom:"property"}}),Object(r.jsx)(L,{display:Object(r.jsxs)("div",{children:["oscar ",Object(r.jsx)(N.a,{})]}),type:"Function",ports:{port1:{id:"port1",type:"top",properties:{custom:"property"}},port2:{id:"port2",type:"bottom",properties:{custom:"property"}}}}),Object(r.jsx)(L,{display:Object(r.jsxs)("div",{children:["aws ",Object(r.jsx)(N.a,{})]}),type:"Function",ports:{port1:{id:"port1",type:"top",properties:{custom:"property"}},port2:{id:"port2",type:"bottom",properties:{custom:"property"}}}})]})]})})}}]),n}(i.a.Component),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,p=e.getTTFB;n(t),r(t),o(t),i(t),p(t)}))};c.a.render(Object(r.jsx)(V,{}),document.getElementById("root")),E()},93:function(t,e,n){},94:function(t,e,n){}},[[168,1,2]]]);
//# sourceMappingURL=main.6d36f4ed.chunk.js.map