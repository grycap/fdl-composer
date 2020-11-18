(this["webpackJsonpworkflow-builder"]=this["webpackJsonpworkflow-builder"]||[]).push([[0],{151:function(t,n,o){},153:function(t,n,o){},272:function(t,n,o){"use strict";o.r(n);var e=o(2),r=o(0),a=o.n(r),c=o(11),i=o.n(c),u=(o(151),o(63)),p=o.n(u),s=o(79),l=o(6),j=o(1),b=o(13),d=o(14),f=o(15),g=o(16),O=o(9),x=(o(153),o(51)),h=o(8);function v(){var t=Object(O.a)(["\n  margin: 10px;\n  padding: 10px;\n  line-height: 1.4em;\n  white-space: pre-wrap;\n  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',\n    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;\n\n  background-color: #eff0f1;\n  overflow: auto;\n"]);return v=function(){return t},t}h.default.pre(v());function P(){var t=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"]);return P=function(){return t},t}h.default.div(P());function y(){var t=Object(O.a)(["\n  margin: 10px 10px 0px;\n  padding: 10px;\n  line-height: 1.4em;\n"]);return y=function(){return t},t}var w=h.default.div(y());function k(){var t=Object(O.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 93vh;\n"]);return k=function(){return t},t}function m(){var t=Object(O.a)(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"]);return m=function(){return t},t}Object(h.createGlobalStyle)(m());var C=h.default.div(k());function D(){var t=Object(O.a)(["\n  width: 200px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"]);return D=function(){return t},t}var M=h.default.div(D()),K=function(){return Object(e.jsxs)(M,{children:[Object(e.jsx)(w,{children:"Drag and drop these items onto the canvas."}),Object(e.jsx)(z,{type:"s3-storage",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}})," ",Object(e.jsx)(z,{type:"minio-storage",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(e.jsx)(z,{type:"one-data-storage",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(e.jsx)(z,{type:"oscar-fx",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(e.jsx)(z,{type:"aws-lambda",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(e.jsx)(z,{type:"aws-batch",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}})]})},U=o(30);function S(){var t=Object(O.a)(["\n      background: ",";\n    "]);return S=function(){return t},t}function _(){var t=Object(O.a)(["\n      color: ",";\n    "]);return _=function(){return t},t}function T(){var t=Object(O.a)(["\n  margin-bottom: 1rem;\n  border: 0.5px solid grey;\n  padding: 20px 30px;\n  border-radius: 50%;\n  font-size: 14px;\n  cursor: move;\n  ","\n  ",";\n"]);return T=function(){return t},t}function B(){var t=Object(O.a)(["\n      background: ",";\n    "]);return B=function(){return t},t}function N(){var t=Object(O.a)(["\n      color: ",";\n    "]);return N=function(){return t},t}function A(){var t=Object(O.a)(["\n  margin-bottom: 1rem;\n  border: 0.5px solid grey;\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n  ","\n  ",";\n"]);return A=function(){return t},t}var F=h.default.div(A(),(function(t){return t.color&&Object(h.css)(N(),t.color)}),(function(t){return t.background&&Object(h.css)(B(),t.background)})),I=h.default.div(T(),(function(t){return t.color&&Object(h.css)(_(),t.color)}),(function(t){return t.background&&Object(h.css)(S(),t.background)})),L=function(t){switch(t){case"aws-batch":return{background:"#4b005e",color:"white"};case"oscar-fx":return{background:"#005e14",color:"white"};case"aws-lambda":return{background:"#a32a06",color:"white"};case"s3-storage":return{background:"#aa5237",color:"white"};case"one-data-storage":return{background:"#02005e",color:"white"};case"minio-storage":return{background:"#5e4d00",color:"white"};default:return{background:"#FFF",color:"black"}}},z=function(t){var n=t.type,o=t.ports,r=t.properties,a=L(n);return n.includes("storage")?Object(e.jsx)(I,{background:a.background,color:a.color,draggable:!0,onDragStart:function(t){t.dataTransfer.setData(U.REACT_FLOW_CHART,JSON.stringify({type:n,ports:o,properties:r}))},children:n}):Object(e.jsx)(F,{background:a.background,color:a.color,draggable:!0,onDragStart:function(t){t.dataTransfer.setData(U.REACT_FLOW_CHART,JSON.stringify({type:n,ports:o,properties:r}))},children:n})},J=o(278),R=o(279),E=o(280),V=function(t){switch(t.port.type){case"right":case"left":return Object(e.jsx)(J.a,{style:{fontSize:"1rem"}});case"top":case"bottom":return Object(e.jsx)(R.a,{style:{fontSize:"1rem"}});default:return Object(e.jsx)(E.a,{style:{fontSize:"1rem"}})}},H={offset:{x:0,y:0},scale:1,nodes:{},links:{},selected:{},hovered:{},modalVisible:!1},G=o(273),W=o(72),Y=o(276),q=o(281),Q=o(282),X=o(283),Z=o(97),$=o(130),tt=o.n($),nt=o(19),ot=o(5),et=o(275),rt=o(277),at=o(274);function ct(){var t=Object(O.a)(["\n  width: 20%;\n  align-content: center;\n"]);return ct=function(){return t},t}function it(){var t=Object(O.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return it=function(){return t},t}function ut(){var t=Object(O.a)(["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  margin-bottom: 0.5rem;\n  width: 80%;\n"]);return ut=function(){return t},t}function pt(){var t=Object(O.a)(["\n      background: ",";\n    "]);return pt=function(){return t},t}function st(){var t=Object(O.a)(["\n      color: ",";\n    "]);return st=function(){return t},t}function lt(){var t=Object(O.a)(["\n  padding: 30px;\n  border-radius: 50%;\n  ","\n  ",";\n"]);return lt=function(){return t},t}function jt(){var t=Object(O.a)(["\n      background: ",";\n    "]);return jt=function(){return t},t}function bt(){var t=Object(O.a)(["\n      color: ",";\n    "]);return bt=function(){return t},t}function dt(){var t=Object(O.a)(["\n  padding: 30px;\n  ","\n  ",";\n"]);return dt=function(){return t},t}var ft=h.default.div(dt(),(function(t){return t.color&&Object(h.css)(bt(),t.color)}),(function(t){return t.background&&Object(h.css)(jt(),t.background)})),gt=h.default.div(lt(),(function(t){return t.color&&Object(h.css)(st(),t.color)}),(function(t){return t.background&&Object(h.css)(pt(),t.background)})),Ot=h.default.input(ut()),xt=h.default.div(it()),ht=h.default.div(ct()),vt=function(t){var n,o,r,c,i,u,p,s,l,b,d,f,g,O,x,h,v,P,y,w,k,m,C,D,M,K,U,S,_,T,B,N,A,F,I,z,J,R,E,V=t.node,H=(t.config,Object(nt.a)(t,["node","config"])),G=a.a.useState(!1),W=Object(ot.a)(G,2),Y=W[0],q=W[1],Q=a.a.useState(V.properties||{}),X=Object(ot.a)(Q,2),Z=X[0],$=X[1],tt=L(V.type);switch(V.type){case"s3-storage":return Object(e.jsxs)(gt,Object(j.a)(Object(j.a)({},H),{},{color:tt.color,background:tt.background,onDoubleClick:function(t){return q(!0)},children:[Object(e.jsxs)(et.a,{title:(null===(n=V.properties)||void 0===n?void 0:n.name)||V.type,visible:Y,onOk:function(){V.properties=Z,q(!1)},onCancel:function(){return q(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Name:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my-s3",value:Z.name,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{name:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Access Key:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:Z.access_key,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{access_key:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Secret Key:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:Z.secret_key,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{secret_key:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Region:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"us-east-1",value:Z.region,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{region:t.target.value}))}})]})]}),Object(e.jsx)("p",{children:"".concat(V.type," ").concat((null===(o=V.properties)||void 0===o?void 0:o.name)||"")})]}));case"minio-storage":return Object(e.jsxs)(gt,{color:tt.color,background:tt.background,onDoubleClick:function(t){return q(!0)},children:[Object(e.jsxs)(et.a,{title:(null===(r=V.properties)||void 0===r?void 0:r.name)||V.type,visible:Y,onOk:function(){V.properties=Z,q(!1)},onCancel:function(){return q(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Name:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my_minio",value:Z.name,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{name:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Endpoint:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"minio-endpoint",value:Z.endpoint,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{endpoint:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Verify:"}),Object(e.jsx)(rt.a,{onClick:function(t){return t.stopPropagation()},value:Z.verify,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{verify:t.target.checked}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Region:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"us-east-1",value:Z.region,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{region:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Access Key:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:Z.access_key,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{access_key:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Secret Key:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:Z.secret_key,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{secret_key:t.target.value}))}})]})]}),Object(e.jsx)("p",{children:"".concat(V.type," ").concat((null===(c=V.properties)||void 0===c?void 0:c.name)||"")})]});case"one-data-storage":return Object(e.jsxs)(gt,{color:tt.color,background:tt.background,onDoubleClick:function(){return q(!0)},children:[Object(e.jsxs)(et.a,{title:(null===(i=V.properties)||void 0===i?void 0:i.name)||V.type,visible:Y,onOk:function(){V.properties=Z,q(!1)},onCancel:function(){return q(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Name:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my-onedata",value:Z.name,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{name:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"One Provider Host:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"plg-cyfronet-01.datahub.egi.eu",value:Z.oneprovider_host,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{oneprovider_host:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Token:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:Z.token,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{token:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Space:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my-space",value:Z.space,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{space:t.target.value}))}})]})]}),Object(e.jsx)("p",{children:"".concat(V.type," ").concat((null===(u=V.properties)||void 0===u?void 0:u.name)||"")})]});case"oscar-fx":return Object(e.jsxs)(ft,{color:tt.color,background:tt.background,onDoubleClick:function(){return q(!0)},children:[Object(e.jsx)(et.a,{title:(null===(p=V.properties)||void 0===p?void 0:p.name)||V.type,visible:Y,onOk:function(){V.properties=Z,q(!1)},onCancel:function(){return q(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:Object(e.jsxs)(at.a,{defaultActiveKey:"1",children:[Object(e.jsxs)(at.a.TabPane,{tab:"Function",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Name:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet",value:Z.name,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{name:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Memory:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1Gi",value:Z.memory,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{memory:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Cpu:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1.0",value:Z.cpu,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{cpu:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Image:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grycap/darknet",value:Z.image,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{image:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Script:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"yolo.sh",value:Z.script,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{script:t.target.value}))}})]})]},"1"),Object(e.jsxs)(at.a.TabPane,{tab:"Input",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Storage provider:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"storage provider name",value:null===(s=Z.input)||void 0===s?void 0:s.storage_provider,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{storage_provider:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Path:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/input",value:null===(l=Z.input)||void 0===l?void 0:l.path,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{path:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Suffix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:null===(b=Z.input)||void 0===b?void 0:b.suffix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{suffix:t.target.value})})):delete Z.suffix}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Prefix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"result-, demo-",value:null===(d=Z.input)||void 0===d?void 0:d.prefix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{prefix:t.target.value})})):delete Z.prefix}})]})]},"2"),Object(e.jsxs)(at.a.TabPane,{tab:"Output",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Storage provider:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"storage provider name",value:null===(f=Z.output)||void 0===f?void 0:f.storage_provider,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{storage_provider:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Path:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/output",value:null===(g=Z.output)||void 0===g?void 0:g.path,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{path:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Suffix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:null===(O=Z.output)||void 0===O?void 0:O.suffix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{suffix:t.target.value})})):delete Z.suffix}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Prefix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"result-, demo-",value:null===(x=Z.output)||void 0===x?void 0:x.prefix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{prefix:t.target.value})})):delete Z.prefix}})]})]},"3")]})}),Object(e.jsx)("p",{children:"".concat(V.type," ").concat((null===(h=V.properties)||void 0===h?void 0:h.name)||"")})]});case"aws-lambda":return Object(e.jsxs)(ft,{color:tt.color,background:tt.background,onDoubleClick:function(){return q(!0)},children:[Object(e.jsx)(et.a,{title:(null===(v=V.properties)||void 0===v?void 0:v.name)||V.type,visible:Y,onOk:function(){V.properties=Z,q(!1)},onCancel:function(){return q(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:Object(e.jsxs)(at.a,{defaultActiveKey:"1",children:[Object(e.jsxs)(at.a.TabPane,{tab:"Function",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Name:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet",value:Z.name,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{name:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Memory:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1Gi",value:Z.memory,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{memory:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Cpu:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1.0",value:Z.cpu,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{cpu:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Image:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grycap/darknet",value:Z.image,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{image:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Script:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"yolo.sh",value:Z.script,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{script:t.target.value}))}})]})]},"1"),Object(e.jsxs)(at.a.TabPane,{tab:"Input",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Storage provider:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"storage provider name",value:null===(P=Z.input)||void 0===P?void 0:P.storage_provider,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{storage_provider:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Path:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/input",value:null===(y=Z.input)||void 0===y?void 0:y.path,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{path:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Suffix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:null===(w=Z.input)||void 0===w?void 0:w.suffix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{suffix:t.target.value})})):delete Z.suffix}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Prefix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"result-, demo-",value:null===(k=Z.input)||void 0===k?void 0:k.prefix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{prefix:t.target.value})})):delete Z.prefix}})]})]},"2"),Object(e.jsxs)(at.a.TabPane,{tab:"Output",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Storage provider:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"storage provider name",value:null===(m=Z.output)||void 0===m?void 0:m.storage_provider,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{storage_provider:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Path:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/output",value:null===(C=Z.output)||void 0===C?void 0:C.path,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{path:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Suffix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:null===(D=Z.output)||void 0===D?void 0:D.suffix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{suffix:t.target.value})})):delete Z.suffix}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Prefix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"result-, demo-",value:null===(M=Z.output)||void 0===M?void 0:M.prefix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{prefix:t.target.value})})):delete Z.prefix}})]})]},"3")]})}),Object(e.jsx)("p",{children:"".concat(V.type," ").concat((null===(K=V.properties)||void 0===K?void 0:K.name)||"")})]});case"aws-batch":return Object(e.jsxs)(ft,{color:tt.color,background:tt.background,onDoubleClick:function(){return q(!0)},children:[Object(e.jsx)(et.a,{title:(null===(U=V.properties)||void 0===U?void 0:U.name)||V.type,visible:Y,onOk:function(){V.properties=Z,q(!1)},onCancel:function(){return q(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:Object(e.jsxs)(at.a,{children:[Object(e.jsxs)(at.a.TabPane,{tab:"Function",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Name:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"scar-grayify-workflow",value:Z.name,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{name:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Script:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grayify-image.sh",value:Z.init_script,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{init_script:t.target.value}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Image:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grycap/imagemagick",value:null===(S=Z.container)||void 0===S?void 0:S.image,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{container:{image:t.target.value}}))}})]})]},"1"),Object(e.jsxs)(at.a.TabPane,{tab:"Input",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Storage provider:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"storage provider name",value:null===(_=Z.input)||void 0===_?void 0:_.storage_provider,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{storage_provider:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Path:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/input",value:null===(T=Z.input)||void 0===T?void 0:T.path,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{path:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Suffix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:null===(B=Z.input)||void 0===B?void 0:B.suffix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{suffix:t.target.value})})):delete Z.suffix}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Prefix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"result-, demo-",value:null===(N=Z.input)||void 0===N?void 0:N.prefix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{input:Object(j.a)(Object(j.a)({},Z.input),{},{prefix:t.target.value})})):delete Z.prefix}})]})]},"2"),Object(e.jsxs)(at.a.TabPane,{tab:"Output",children:[Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Storage provider:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"storage provider name",value:null===(A=Z.output)||void 0===A?void 0:A.storage_provider,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{storage_provider:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Path:"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/output",value:null===(F=Z.output)||void 0===F?void 0:F.path,onChange:function(t){$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{path:t.target.value})}))}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Suffix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:null===(I=Z.output)||void 0===I?void 0:I.suffix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{suffix:t.target.value})})):delete Z.suffix}})]}),Object(e.jsxs)(xt,{children:[Object(e.jsx)(ht,{children:"Prefix"}),Object(e.jsx)(Ot,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"result-, demo-",value:null===(z=Z.output)||void 0===z?void 0:z.prefix,onChange:function(t){t.target.value?$(Object(j.a)(Object(j.a)({},Z),{},{output:Object(j.a)(Object(j.a)({},Z.output),{},{prefix:t.target.value})})):delete Z.prefix}})]})]},"3")]})}),Object(e.jsx)("p",{children:"".concat(V.type," ").concat((null===(J=V.properties)||void 0===J?void 0:J.name)||"")})]});default:return Object(e.jsxs)(ft,{color:tt.color,background:tt.background,onDoubleClick:function(){q(!0)},children:[Object(e.jsx)(et.a,{title:(null===(R=V.properties)||void 0===R?void 0:R.name)||V.type,visible:Y,onOk:function(){V.properties=Z,q(!1)},onCancel:function(){return q(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1}}),Object(e.jsx)("p",{children:"".concat(V.type," ").concat((null===(E=V.properties)||void 0===E?void 0:E.name)||"")})]})}};function Pt(){var t=Object(O.a)(["\n  margin-right: 1rem;\n"]);return Pt=function(){return t},t}var yt=G.a.Header,wt=Object(h.default)(W.a)(Pt()),kt=function(t){Object(f.a)(o,t);var n=Object(g.a)(o);function o(){var t;Object(b.a)(this,o);for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state=Object(x.cloneDeep)(H),t}return Object(d.a)(o,[{key:"extractIO",value:function(t){var n=t.properties.input?t.properties.input:{};n.prefix&&(n.prefix=n.prefix.split(",")),n.suffix&&(n.suffix=n.suffix.split(","));var o=t.properties.output?t.properties.output:{};return o.prefix&&(o.prefix=o.prefix.split(",")),o.suffix&&(o.suffix=o.suffix.split(",")),Object(j.a)(Object(j.a)({},t.properties),{},{input:[n],output:[o]})}},{key:"exportToYaml",value:function(){var t=this,n=Object.values(this.state.nodes),o=(Object.values(this.state.links),n.filter((function(t){return"oscar-fx"===t.type})).map((function(n){return t.extractIO(n)}))),e=n.filter((function(t){return"aws-fx"===t.type})).map((function(n){return t.extractIO(n)})),r=n.filter((function(t){return"one-data-storage"===t.type})).map((function(t){return t.properties})).reduce((function(t,n){var o=Object(x.cloneDeep)(n);return delete o.name,Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},n.name,o))}),{}),a=n.filter((function(t){return"s3-storage"===t.type})).map((function(t){return t.properties})).reduce((function(t,n){var o=Object(x.cloneDeep)(n);return delete o.name,Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},n.name,o))}),{}),c=tt.a.dump({functions:{oscar:o.map((function(t){return JSON.parse('{ "'.concat(t.name,'": ').concat(JSON.stringify(t)," }"))})),aws:[e.reduce((function(t,n){var o=Object(x.cloneDeep)(n);return delete o.name,Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},n.name,o))}),{})]},storage_providers:{s3:a,onedata:r}}),i=new Blob([c],{type:"text/plain;charset=utf-8"});Object(Z.saveAs)(i,"workflow.yaml")}},{key:"exportState",value:function(){var t=JSON.stringify(this.state),n=new Blob([t],{type:"text/plain;charset=utf-8"});Object(Z.saveAs)(n,"state.json")}},{key:"importState",value:function(){var t=this,n=document.createElement("input");n.type="file",n.onchange=function(o){var e=new FileReader;e.onload=function(){var n=Object(s.a)(p.a.mark((function n(o){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(null===o||void 0===o||null===(e=o.target)||void 0===e?void 0:e.result)&&t.setState(JSON.parse(o.target.result));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),e.readAsText(n.files[0])},n.click()}},{key:"render",value:function(){var t=this,n=this.state,o=Object(x.mapValues)(Object(j.a)(Object(j.a)({},U.actions),{},{onNodeDoubleClick:function(){return Object(j.a)(Object(j.a)({},t.state),{},{selected:{}})}}),(function(n){return function(){t.setState(n.apply(void 0,arguments))}}));return Object(e.jsx)("div",{className:"App",children:Object(e.jsxs)(G.a,{className:"layout",children:[Object(e.jsx)(yt,{children:Object(e.jsxs)(Y.a,{theme:"dark",mode:"horizontal",children:[Object(e.jsx)(wt,{ghost:!0,icon:Object(e.jsx)(q.a,{}),onClick:function(){return t.exportState()},children:"Download state"}),Object(e.jsx)(wt,{ghost:!0,icon:Object(e.jsx)(Q.a,{}),onClick:function(){return t.importState()},children:"Load state"}),Object(e.jsx)(wt,{ghost:!0,icon:Object(e.jsx)(X.a,{}),onClick:function(){t.exportToYaml()},children:"Export yaml"})]})}),Object(e.jsxs)(C,{children:[Object(e.jsx)(U.FlowChart,{chart:n,callbacks:o,Components:{NodeInner:vt,Port:V}}),Object(e.jsx)(K,{})]})]})})}}]),o}(a.a.Component),mt=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,284)).then((function(n){var o=n.getCLS,e=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;o(t),e(t),r(t),a(t),c(t)}))};i.a.render(Object(e.jsx)(kt,{}),document.getElementById("root")),mt()}},[[272,1,2]]]);
//# sourceMappingURL=main.1b6beda4.chunk.js.map