(this["webpackJsonpworkflow-builder"]=this["webpackJsonpworkflow-builder"]||[]).push([[0],{147:function(t,e,n){},149:function(t,e,n){},264:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(0),a=n.n(r),i=n(9),c=n.n(i),p=(n(147),n(1)),s=n(55),u=n.n(s),l=n(69),d=n(11),j=n(12),f=n(13),b=n(14),x=n(15),h=(n(149),n(70)),g=n(8);function O(){var t=Object(x.a)(["\n  margin: 10px;\n  padding: 10px;\n  line-height: 1.4em;\n  white-space: pre-wrap;\n  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',\n    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;\n\n  background-color: #eff0f1;\n  overflow: auto;\n"]);return O=function(){return t},t}g.default.pre(O());function v(){var t=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"]);return v=function(){return t},t}g.default.div(v());function y(){var t=Object(x.a)(["\n  margin: 10px 10px 0px;\n  padding: 10px;\n  line-height: 1.4em;\n"]);return y=function(){return t},t}var m=g.default.div(y());function P(){var t=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 93vh;\n"]);return P=function(){return t},t}function w(){var t=Object(x.a)(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"]);return w=function(){return t},t}Object(g.createGlobalStyle)(w());var k=g.default.div(P());function C(){var t=Object(x.a)(["\n  width: 200px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"]);return C=function(){return t},t}var D=g.default.div(C()),M=n(28);function S(){var t=Object(x.a)(["\n  margin-bottom: 1rem;\n  border: 0.5px solid grey;\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n"]);return S=function(){return t},t}var K=g.default.div(S()),B=function(t){var e=t.type,n=t.ports,r=t.properties;return Object(o.jsx)(K,{draggable:!0,onDragStart:function(t){t.dataTransfer.setData(M.REACT_FLOW_CHART,JSON.stringify({type:e,ports:n,properties:r}))},children:e})},U=n(268),N=n(269),T=n(270),A=function(t){switch(t.port.type){case"right":case"left":return Object(o.jsx)(U.a,{style:{fontSize:"1rem"}});case"top":case"bottom":return Object(o.jsx)(N.a,{style:{fontSize:"1rem"}});default:return Object(o.jsx)(T.a,{style:{fontSize:"1rem"}})}},_={offset:{x:0,y:0},scale:1,nodes:{},links:{},selected:{},hovered:{},modalVisible:!1},L=n(265),z=n(62),F=n(267),I=n(271),J=n(272),E=n(273),R=n(94),V=n(127),H=n.n(V),G=n(6),W=n(266);function Y(){var t=Object(x.a)(["\n  width: 20%;\n  align-content: center;\n"]);return Y=function(){return t},t}function q(){var t=Object(x.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return q=function(){return t},t}function Q(){var t=Object(x.a)(["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  margin-bottom: 0.5rem;\n  width: 80%;\n"]);return Q=function(){return t},t}function X(){var t=Object(x.a)(["\n  padding: 30px;\n"]);return X=function(){return t},t}var Z=g.default.div(X()),$=g.default.input(Q()),tt=g.default.div(q()),et=g.default.div(Y()),nt=function(t){var e,n,r,i,c,s,u,l,d,j,f,b,x=t.node,h=t.config,g=a.a.useState(!1),O=Object(G.a)(g,2),v=O[0],y=O[1],m=a.a.useState(x.properties||{}),P=Object(G.a)(m,2),w=P[0],k=P[1];switch(x.type){case"function-input":case"function-output":return Object(o.jsxs)(Z,{onDoubleClick:function(t){h=Object(p.a)(Object(p.a)({},h),{},{selectable:!1}),y(!0)},children:[Object(o.jsxs)(W.a,{title:(null===(e=x.properties)||void 0===e?void 0:e.name)||x.type,visible:v,onOk:function(){x.properties=w,y(!1)},onCancel:function(){return y(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Path:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/input",value:w.path,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{path:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Suffix"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png",value:w.suffix,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{suffix:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:(null===(n=x.properties)||void 0===n?void 0:n.name)||x.type})]});case"s3-storage":return Object(o.jsxs)(Z,{onDoubleClick:function(t){return y(!0)},children:[Object(o.jsxs)(W.a,{title:(null===(r=x.properties)||void 0===r?void 0:r.name)||x.type,visible:v,onOk:function(){x.properties=w,y(!1)},onCancel:function(){return y(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Access Key:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:w.access_key,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{access_key:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Secret Key:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:w.secret_key,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{secret_key:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Region:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"us-east-1",value:w.region,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{region:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:(null===(i=x.properties)||void 0===i?void 0:i.name)||x.type})]});case"one-data-storage":return Object(o.jsxs)(Z,{onDoubleClick:function(){return y(!0)},children:[Object(o.jsxs)(W.a,{title:(null===(c=x.properties)||void 0===c?void 0:c.name)||x.type,visible:v,onOk:function(){x.properties=w,y(!1)},onCancel:function(){return y(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"One Provider Host:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"plg-cyfronet-01.datahub.egi.eu",value:w.oneprovider_host,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{oneprovider_host:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Token:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:w.token,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{token:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Space:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my-space",value:w.space,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{space:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:(null===(s=x.properties)||void 0===s?void 0:s.name)||x.type})]});case"oscar-fx":return Object(o.jsxs)(Z,{onDoubleClick:function(){return y(!0)},children:[Object(o.jsxs)(W.a,{title:(null===(u=x.properties)||void 0===u?void 0:u.name)||x.type,visible:v,onOk:function(){x.properties=w,y(!1)},onCancel:function(){return y(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Name:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet",value:w.name,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{name:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Memory:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1Gi",value:w.memory,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{memory:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Cpu:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1.0",value:w.cpu,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{cpu:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Image:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grycap/darknet",value:w.image,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{image:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Script:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"yolo.sh",value:w.script,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{image:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:(null===(l=x.properties)||void 0===l?void 0:l.name)||x.type})]});case"aws-fx":return Object(o.jsxs)(Z,{onDoubleClick:function(){return y(!0)},children:[Object(o.jsxs)(W.a,{title:(null===(d=x.properties)||void 0===d?void 0:d.name)||x.type,visible:v,onOk:function(){x.properties=w,y(!1)},onCancel:function(){return y(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Name:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet",value:w.name,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{name:t.target.value}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Image:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grycap/darknet",value:w.image,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{container:{image:t.target.value}}))}})]}),Object(o.jsxs)(tt,{children:[Object(o.jsx)(et,{children:"Script:"}),Object(o.jsx)($,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"yolo.sh",value:w.script,onChange:function(t){k(Object(p.a)(Object(p.a)({},w),{},{image:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:(null===(j=x.properties)||void 0===j?void 0:j.name)||x.type})]});default:return Object(o.jsxs)(Z,{onDoubleClick:function(){return y(!0)},children:[Object(o.jsx)(W.a,{title:(null===(f=x.properties)||void 0===f?void 0:f.name)||x.type,visible:v,onOk:function(){x.properties=Object(p.a)(Object(p.a)({},x.properties),{},{test:"test"}),y(!1)},onCancel:function(){return y(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1}}),Object(o.jsx)("p",{children:(null===(b=x.properties)||void 0===b?void 0:b.name)||x.type})]})}};function ot(){var t=Object(x.a)(["\n  margin-right: 1rem;\n"]);return ot=function(){return t},t}var rt=L.a.Header,at=Object(g.default)(z.a)(ot()),it=function(t){Object(f.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state=Object(h.cloneDeep)(_),t}return Object(j.a)(n,[{key:"exportToYaml",value:function(){var t=Object.values(this.state.nodes),e=t.filter((function(t){return"oscar-fx"===t.type})).map((function(t){return t.properties})),n=t.filter((function(t){return"aws-fx"===t.type})).map((function(t){return t.properties})),o=t.filter((function(t){return"one-data-storage"===t.type})).map((function(t){return t.properties})),r=t.filter((function(t){return"s3-storage"===t.type})).map((function(t){return t.properties})),a=(Object.values(this.state.links),H.a.dump({functions:{oscar:e,aws:n},storage_providers:{s3:r,onedata:o}})),i=new Blob([a],{type:"text/plain;charset=utf-8"});Object(R.saveAs)(i,"workflow.yaml")}},{key:"exportState",value:function(){var t=JSON.stringify(this.state),e=new Blob([t],{type:"text/plain;charset=utf-8"});Object(R.saveAs)(e,"state.json")}},{key:"importState",value:function(){var t=this,e=document.createElement("input");e.type="file",e.onchange=function(n){var o=new FileReader;o.onload=function(){var e=Object(l.a)(u.a.mark((function e(n){var o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===n||void 0===n||null===(o=n.target)||void 0===o?void 0:o.result)&&t.setState(JSON.parse(n.target.result));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.readAsText(e.files[0])},e.click()}},{key:"render",value:function(){var t=this,e=this.state,n=Object(h.mapValues)(Object(p.a)(Object(p.a)({},M.actions),{},{onNodeDoubleClick:function(){return Object(p.a)(Object(p.a)({},t.state),{},{selected:{}})}}),(function(e){return function(){t.setState(e.apply(void 0,arguments))}}));return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(L.a,{className:"layout",children:[Object(o.jsx)(rt,{children:Object(o.jsxs)(F.a,{theme:"dark",mode:"horizontal",children:[Object(o.jsx)(at,{ghost:!0,icon:Object(o.jsx)(I.a,{}),onClick:function(){return t.exportState()},children:"Download state"}),Object(o.jsx)(at,{ghost:!0,icon:Object(o.jsx)(J.a,{}),onClick:function(){return t.importState()},children:"Load state"}),Object(o.jsx)(at,{ghost:!0,icon:Object(o.jsx)(E.a,{}),onClick:function(){t.exportToYaml()},children:"Export yaml"})]})}),Object(o.jsxs)(k,{children:[Object(o.jsx)(M.FlowChart,{chart:e,callbacks:n,Components:{NodeInner:nt,Port:A}}),Object(o.jsxs)(D,{children:[Object(o.jsx)(m,{children:"Drag and drop these items onto the canvas."}),Object(o.jsx)(B,{type:"function-input",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(B,{type:"function-output",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(B,{type:"s3-storage",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(B,{type:"one-data-storage",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(B,{properties:{name:"oscar fx"},type:"oscar-fx",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(B,{type:"aws-fx",properties:{name:"aws fx"},ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}})]})]})]})})}}]),n}(a.a.Component),ct=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,274)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),r(t),a(t),i(t)}))};c.a.render(Object(o.jsx)(it,{}),document.getElementById("root")),ct()}},[[264,1,2]]]);
//# sourceMappingURL=main.b1009c96.chunk.js.map