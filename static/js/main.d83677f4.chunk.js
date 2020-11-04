(this["webpackJsonpworkflow-builder"]=this["webpackJsonpworkflow-builder"]||[]).push([[0],{147:function(t,n,e){},149:function(t,n,e){},264:function(t,n,e){"use strict";e.r(n);var o=e(2),r=e(0),i=e.n(r),a=e(9),c=e.n(a),u=(e(147),e(55)),p=e.n(u),s=e(69),l=e(1),d=e(12),f=e(13),j=e(14),b=e(15),g=e(11),x=(e(149),e(70)),O=e(8);function h(){var t=Object(g.a)(["\n  margin: 10px;\n  padding: 10px;\n  line-height: 1.4em;\n  white-space: pre-wrap;\n  font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',\n    'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;\n\n  background-color: #eff0f1;\n  overflow: auto;\n"]);return h=function(){return t},t}O.default.pre(h());function v(){var t=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n"]);return v=function(){return t},t}O.default.div(v());function y(){var t=Object(g.a)(["\n  margin: 10px 10px 0px;\n  padding: 10px;\n  line-height: 1.4em;\n"]);return y=function(){return t},t}var m=O.default.div(y());function k(){var t=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  max-width: 100vw;\n  max-height: 93vh;\n"]);return k=function(){return t},t}function P(){var t=Object(g.a)(["\n  body {\n    margin: 0px;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *, :after, :before {\n    box-sizing: inherit;\n  }\n"]);return P=function(){return t},t}Object(O.createGlobalStyle)(P());var w=O.default.div(k());function C(){var t=Object(g.a)(["\n  width: 200px;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"]);return C=function(){return t},t}var D=O.default.div(C()),M=e(28);function S(){var t=Object(g.a)(["\n      background: ",";\n    "]);return S=function(){return t},t}function K(){var t=Object(g.a)(["\n      color: ",";\n    "]);return K=function(){return t},t}function U(){var t=Object(g.a)(["\n  margin-bottom: 1rem;\n  border: 0.5px solid grey;\n  padding: 20px 30px;\n  font-size: 14px;\n  background: white;\n  cursor: move;\n  ","\n  ",";\n"]);return U=function(){return t},t}var N=O.default.div(U(),(function(t){return t.color&&Object(O.css)(K(),t.color)}),(function(t){return t.background&&Object(O.css)(S(),t.background)})),B=function(t){switch(t){case"function-input":return{background:"#4b005e",color:"white"};case"function-output":return{background:"#5e4d00",color:"white"};case"oscar-fx":return{background:"#005e14",color:"white"};case"aws-fx":return{background:"#a32a06",color:"white"};case"s3-storage":return{background:"#aa5237",color:"white"};case"one-data-storage":return{background:"#02005e",color:"white"};default:return{background:"#FFF",color:"black"}}},I=function(t){var n=t.type,e=t.ports,r=t.properties,i=B(n);return Object(o.jsx)(N,{background:i.background,color:i.color,draggable:!0,onDragStart:function(t){t.dataTransfer.setData(M.REACT_FLOW_CHART,JSON.stringify({type:n,ports:e,properties:r}))},children:n})},_=e(268),J=e(269),A=e(270),T=function(t){switch(t.port.type){case"right":case"left":return Object(o.jsx)(_.a,{style:{fontSize:"1rem"}});case"top":case"bottom":return Object(o.jsx)(J.a,{style:{fontSize:"1rem"}});default:return Object(o.jsx)(A.a,{style:{fontSize:"1rem"}})}},F={offset:{x:0,y:0},scale:1,nodes:{},links:{},selected:{},hovered:{},modalVisible:!1},L=e(265),z=e(62),E=e(267),R=e(271),V=e(272),H=e(273),G=e(94),W=e(127),Y=e.n(W),q=e(6),Q=e(266);function X(){var t=Object(g.a)(["\n  width: 20%;\n  align-content: center;\n"]);return X=function(){return t},t}function Z(){var t=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Z=function(){return t},t}function $(){var t=Object(g.a)(["\n  padding: 10px;\n  border: 1px solid cornflowerblue;\n  margin-bottom: 0.5rem;\n  width: 80%;\n"]);return $=function(){return t},t}function tt(){var t=Object(g.a)(["\n      background: ",";\n    "]);return tt=function(){return t},t}function nt(){var t=Object(g.a)(["\n      color: ",";\n    "]);return nt=function(){return t},t}function et(){var t=Object(g.a)(["\n  padding: 30px;\n  ","\n  ",";\n"]);return et=function(){return t},t}var ot=O.default.div(et(),(function(t){return t.color&&Object(O.css)(nt(),t.color)}),(function(t){return t.background&&Object(O.css)(tt(),t.background)})),rt=O.default.input($()),it=O.default.div(Z()),at=O.default.div(X()),ct=function(t){var n,e,r,a,c,u,p,s,d,f,j,b,g,x,O,h=t.node,v=(t.config,i.a.useState(!1)),y=Object(q.a)(v,2),m=y[0],k=y[1],P=i.a.useState(h.properties||{}),w=Object(q.a)(P,2),C=w[0],D=w[1],M=B(h.type);switch(h.type){case"function-input":return Object(o.jsxs)(ot,{color:M.color,background:M.background,onDoubleClick:function(t){k(!0)},children:[Object(o.jsxs)(Q.a,{title:(null===(n=h.properties)||void 0===n?void 0:n.name)||h.type,visible:m,onOk:function(){h.properties=C,k(!1)},onCancel:function(){return k(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Storage provider:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"minio",value:C.storage_provider,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{storage_provider:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Path:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/input",value:C.path,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{path:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Suffix"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:C.suffix,onChange:function(t){var n=t.target.value;D(n?Object(l.a)(Object(l.a)({},C),{},{suffix:t.target.value}):{path:C.path})}})]})]}),Object(o.jsx)("p",{children:"".concat(h.type," ").concat((null===(e=h.properties)||void 0===e?void 0:e.name)||"")})]});case"function-output":return Object(o.jsxs)(ot,{color:M.color,background:M.background,onDoubleClick:function(t){k(!0)},children:[Object(o.jsxs)(Q.a,{title:(null===(r=h.properties)||void 0===r?void 0:r.name)||h.type,visible:m,onOk:function(){h.properties=C,k(!1)},onCancel:function(){return k(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Storage provider:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"s3.my-aws",value:C.storage_provider,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{storage_provider:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Path:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet-workflow/input",value:C.path,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{path:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Suffix"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"png, jpg, xls",value:C.suffix,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{suffix:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:"".concat(h.type," ").concat((null===(a=h.properties)||void 0===a?void 0:a.name)||"")})]});case"s3-storage":return Object(o.jsxs)(ot,{color:M.color,background:M.background,onDoubleClick:function(t){return k(!0)},children:[Object(o.jsxs)(Q.a,{title:(null===(c=h.properties)||void 0===c?void 0:c.name)||h.type,visible:m,onOk:function(){h.properties=C,k(!1)},onCancel:function(){return k(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Name:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my-s3",value:C.name,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{name:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Access Key:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:C.access_key,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{access_key:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Secret Key:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:C.secret_key,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{secret_key:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Region:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"us-east-1",value:C.region,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{region:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:"".concat(h.type," ").concat((null===(u=h.properties)||void 0===u?void 0:u.name)||"")})]});case"one-data-storage":return Object(o.jsxs)(ot,{color:M.color,background:M.background,onDoubleClick:function(){return k(!0)},children:[Object(o.jsxs)(Q.a,{title:(null===(p=h.properties)||void 0===p?void 0:p.name)||h.type,visible:m,onOk:function(){h.properties=C,k(!1)},onCancel:function(){return k(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Name:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my-onedata",value:C.name,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{name:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"One Provider Host:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"plg-cyfronet-01.datahub.egi.eu",value:C.oneprovider_host,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{oneprovider_host:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Token:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"xxxxxxxxxxxxxxxx",value:C.token,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{token:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Space:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"my-space",value:C.space,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{space:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:"".concat(h.type," ").concat((null===(s=h.properties)||void 0===s?void 0:s.name)||"")})]});case"oscar-fx":return Object(o.jsxs)(ot,{color:M.color,background:M.background,onDoubleClick:function(){return k(!0)},children:[Object(o.jsxs)(Q.a,{title:(null===(d=h.properties)||void 0===d?void 0:d.name)||h.type,visible:m,onOk:function(){h.properties=C,k(!1)},onCancel:function(){return k(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Name:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"darknet",value:C.name,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{name:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Memory:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1Gi",value:C.memory,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{memory:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Cpu:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"1.0",value:C.cpu,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{cpu:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Image:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grycap/darknet",value:C.image,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{image:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Script:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"yolo.sh",value:C.script,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{script:t.target.value}))}})]})]}),Object(o.jsx)("p",{children:"".concat(h.type," ").concat((null===(f=h.properties)||void 0===f?void 0:f.name)||"")})]});case"aws-fx":return Object(o.jsxs)(ot,{color:M.color,background:M.background,onDoubleClick:function(){return k(!0)},children:[Object(o.jsxs)(Q.a,{title:(null===(j=h.properties)||void 0===j?void 0:j.name)||h.type,visible:m,onOk:function(){h.properties=C,k(!1)},onCancel:function(){return k(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1},children:[Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Name:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"scar-grayify-workflow",value:C.name,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{name:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Script:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grayify-image.sh",value:C.init_script,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{init_script:t.target.value}))}})]}),Object(o.jsxs)(it,{children:[Object(o.jsx)(at,{children:"Image:"}),Object(o.jsx)(rt,{onClick:function(t){return t.stopPropagation()},onMouseUp:function(t){return t.stopPropagation()},onMouseDown:function(t){return t.stopPropagation()},onKeyDown:function(t){return t.stopPropagation()},placeholder:"grycap/imagemagick",value:null===(b=C.container)||void 0===b?void 0:b.image,onChange:function(t){D(Object(l.a)(Object(l.a)({},C),{},{container:{image:t.target.value}}))}})]})]}),Object(o.jsx)("p",{children:"".concat(h.type," ").concat((null===(g=h.properties)||void 0===g?void 0:g.name)||"")})]});default:return Object(o.jsxs)(ot,{color:M.color,background:M.background,onDoubleClick:function(){k(!0)},children:[Object(o.jsx)(Q.a,{title:(null===(x=h.properties)||void 0===x?void 0:x.name)||h.type,visible:m,onOk:function(){h.properties=C,k(!1)},onCancel:function(){return k(!1)},okButtonProps:{disabled:!1},cancelButtonProps:{disabled:!1}}),Object(o.jsx)("p",{children:"".concat(h.type," ").concat((null===(O=h.properties)||void 0===O?void 0:O.name)||"")})]})}};function ut(){var t=Object(g.a)(["\n  margin-right: 1rem;\n"]);return ut=function(){return t},t}var pt=L.a.Header,st=Object(O.default)(z.a)(ut()),lt=function(t){Object(j.a)(e,t);var n=Object(b.a)(e);function e(){var t;Object(d.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))).state=Object(x.cloneDeep)(F),t}return Object(f.a)(e,[{key:"exportToYaml",value:function(){var t=Object.values(this.state.nodes),n=Object.values(this.state.links),e=t.filter((function(t){return"function-input"===t.type})),o=t.filter((function(t){return"function-output"===t.type})),r=t.filter((function(t){return"oscar-fx"===t.type})).map((function(t){var r=n.filter((function(n){return n.to.nodeId===t.id||n.from.nodeId===t.id})),i=e.find((function(t){return r.some((function(n){return n.from.nodeId===t.id||n.to.nodeId===t.id}))})),a=o.find((function(t){return r.some((function(n){return n.from.nodeId===t.id||n.to.nodeId===t.id}))}));return Object(l.a)(Object(l.a)({},t.properties),{},{input:[(null===i||void 0===i?void 0:i.properties.suffix)?Object(l.a)(Object(l.a)({},null===i||void 0===i?void 0:i.properties),{},{suffix:i.properties.suffix.split(",")}):Object(l.a)({},null===i||void 0===i?void 0:i.properties)],output:[(null===a||void 0===a?void 0:a.properties.suffix)?Object(l.a)(Object(l.a)({},null===a||void 0===a?void 0:a.properties),{},{suffix:a.properties.suffix.split(",")}):Object(l.a)({},null===a||void 0===a?void 0:a.properties)]})})),i=t.filter((function(t){return"aws-fx"===t.type})).map((function(t){var r=n.filter((function(n){return n.to.nodeId===t.id||n.from.nodeId===t.id})),i=e.find((function(t){return r.some((function(n){return n.from.nodeId===t.id||n.to.nodeId===t.id}))})),a=o.find((function(t){return r.some((function(n){return n.from.nodeId===t.id||n.to.nodeId===t.id}))}));return Object(l.a)(Object(l.a)({},t.properties),{},{input:[(null===i||void 0===i?void 0:i.properties.suffix)?Object(l.a)(Object(l.a)({},null===i||void 0===i?void 0:i.properties),{},{suffix:i.properties.suffix.split(",")}):Object(l.a)({},null===i||void 0===i?void 0:i.properties)],output:[(null===a||void 0===a?void 0:a.properties.suffix)?Object(l.a)(Object(l.a)({},null===a||void 0===a?void 0:a.properties),{},{suffix:a.properties.suffix.split(",")}):Object(l.a)({},null===a||void 0===a?void 0:a.properties)]})})),a=t.filter((function(t){return"one-data-storage"===t.type})).map((function(t){return t.properties})),c=new Set(a.map((function(t){return t.name}))),u=Array.from(c).map((function(t){var n=a.find((function(n){return n.name===t}));return delete n.name,JSON.parse('{ "'.concat(t,'": ').concat(JSON.stringify(n)," }"))})),p=t.filter((function(t){return"s3-storage"===t.type})).map((function(t){return t.properties})),s=new Set(p.map((function(t){return t.name}))),d=Array.from(s).map((function(t){var n=p.find((function(n){return n.name===t}));return delete n.name,JSON.parse('{ "'.concat(t,'": ').concat(JSON.stringify(n)," }"))})),f=Y.a.dump({functions:{oscar:r.map((function(t){return JSON.parse('{ "'.concat(t.name,'": ').concat(JSON.stringify(t)," }"))})),aws:i.map((function(t){return JSON.parse('{ "'.concat(t.name,'": ').concat(JSON.stringify(t)," }"))}))},storage_providers:{s3:d.length>1?d:d.length>0?d[0]:{},onedata:u.length>1?u:u.length>0?u[0]:{}}}),j=new Blob([f],{type:"text/plain;charset=utf-8"});Object(G.saveAs)(j,"workflow.yaml")}},{key:"exportState",value:function(){var t=JSON.stringify(this.state),n=new Blob([t],{type:"text/plain;charset=utf-8"});Object(G.saveAs)(n,"state.json")}},{key:"importState",value:function(){var t=this,n=document.createElement("input");n.type="file",n.onchange=function(e){var o=new FileReader;o.onload=function(){var n=Object(s.a)(p.a.mark((function n(e){var o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(null===e||void 0===e||null===(o=e.target)||void 0===o?void 0:o.result)&&t.setState(JSON.parse(e.target.result));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o.readAsText(n.files[0])},n.click()}},{key:"render",value:function(){var t=this,n=this.state,e=Object(x.mapValues)(Object(l.a)(Object(l.a)({},M.actions),{},{onNodeDoubleClick:function(){return Object(l.a)(Object(l.a)({},t.state),{},{selected:{}})}}),(function(n){return function(){t.setState(n.apply(void 0,arguments))}}));return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(L.a,{className:"layout",children:[Object(o.jsx)(pt,{children:Object(o.jsxs)(E.a,{theme:"dark",mode:"horizontal",children:[Object(o.jsx)(st,{ghost:!0,icon:Object(o.jsx)(R.a,{}),onClick:function(){return t.exportState()},children:"Download state"}),Object(o.jsx)(st,{ghost:!0,icon:Object(o.jsx)(V.a,{}),onClick:function(){return t.importState()},children:"Load state"}),Object(o.jsx)(st,{ghost:!0,icon:Object(o.jsx)(H.a,{}),onClick:function(){t.exportToYaml()},children:"Export yaml"})]})}),Object(o.jsxs)(w,{children:[Object(o.jsx)(M.FlowChart,{chart:n,callbacks:e,Components:{NodeInner:ct,Port:T}}),Object(o.jsxs)(D,{children:[Object(o.jsx)(m,{children:"Drag and drop these items onto the canvas."}),Object(o.jsx)(I,{type:"function-input",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(I,{type:"function-output",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(I,{type:"s3-storage",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(I,{type:"one-data-storage",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(I,{type:"oscar-fx",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}}),Object(o.jsx)(I,{type:"aws-fx",ports:{port1:{id:"port1",type:"top",properties:{path:""}},port2:{id:"port2",type:"right",properties:{path:""}},port3:{id:"port3",type:"bottom",properties:{path:""}},port4:{id:"port4",type:"left",properties:{path:""}}}})]})]})]})})}}]),e}(i.a.Component),dt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,274)).then((function(n){var e=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),o(t),r(t),i(t),a(t)}))};c.a.render(Object(o.jsx)(lt,{}),document.getElementById("root")),dt()}},[[264,1,2]]]);
//# sourceMappingURL=main.d83677f4.chunk.js.map