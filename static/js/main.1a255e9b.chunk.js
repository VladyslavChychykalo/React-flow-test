(this.webpackJsonpflow=this.webpackJsonpflow||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(13),a=n.n(s),i=(n(33),n(34),n(16)),r=n(17),l=n(18),d=n(21),j=(n(35),n(44)),b=n(45),u=n(28),h=n(46),m=n(47),p=n(48),x=n(9),O=n(10),f=n(2),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={lists:{email:["All","Lotto 247 Masterlist","Lotto 247 Conversion List"],sms:["All","Lotto 247 SMS Masterlist","Test List SMS RO","Test List SMS ES","Test List SMS PT","Test List SMS RU","Test List SMS EN"]},currentType:"email"},e.updateList=function(t){var n=e.state.lists[t],c=document.querySelector("#mlists");c.innerHTML="",n.forEach((function(e,t){var n=document.createElement("option");n.setAttribute("value",t+1),n.innerHTML=e,c.append(n)}))},e.onChange=function(t){e.setState({currentType:t.target.value}),e.updateList(t.target.value)},e.onCheckbox=function(e){document.querySelector("#test-email").disabled=!e.target.checked},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.updateList("email"),document.querySelector("#test-email").disabled=!document.querySelector("#test-checkbox").checked}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col mb-3",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{addonType:"prepend",children:Object(f.jsx)(u.a,{children:Object(f.jsx)(x.a,{icon:O.c})})}),Object(f.jsx)(h.a,{placeholder:"Rule name"}),Object(f.jsx)(b.a,{addonType:"append",children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(h.a,{addon:!0,type:"checkbox","aria-label":"Checkbox for following text input"}),Object(f.jsx)("span",{className:"ml-2",children:"Rule enabled"})]})})]})})}),Object(f.jsxs)("div",{className:"row border-bottom",children:[Object(f.jsx)("div",{className:"col-md-6 mb-3",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{addonType:"prepend",children:Object(f.jsx)(u.a,{children:Object(f.jsx)(x.a,{icon:O.b})})}),Object(f.jsxs)("select",{className:"custom-select",id:"send-type",onChange:this.onChange,value:this.state.currentType,children:[Object(f.jsx)("option",{value:"email",children:"Email"}),Object(f.jsx)("option",{value:"sms",children:"SMS"})]})]})}),Object(f.jsx)("div",{className:"col-md-6 mb-3",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{addonType:"prepend",children:Object(f.jsx)(u.a,{children:Object(f.jsx)(x.a,{icon:O.a})})}),Object(f.jsx)("select",{className:"custom-select",id:"mlists"})]})})]}),Object(f.jsxs)("div",{className:"row my-3 border-bottom",children:[Object(f.jsx)("div",{className:"col-md-6 mb-3",children:Object(f.jsx)(m.a,{check:!0,inline:!0,children:Object(f.jsxs)(p.a,{check:!0,children:[Object(f.jsx)(h.a,{type:"checkbox",onChange:this.onCheckbox,id:"test-checkbox"})," ","Send all campaigns to test email"]})})}),Object(f.jsx)("div",{className:"col-md-6 mb-3",children:Object(f.jsx)(h.a,{placeholder:"Email for test",id:"test-email"})})]})]})}}]),n}(c.Component),y=n(24),v=n(27),N=n(4),k=n(51),C=n(50),S=n(49),L=function(e){console.log(e);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{className:"badge badge-pill badge-danger",style:{fontSize:"1.2rem",padding:"5px 20px"},children:"Trigger"}),Object(f.jsx)(m.a,{children:Object(f.jsxs)(h.a,{type:"select",name:"select",id:"triggersSelect",children:[Object(f.jsx)("option",{children:"CustomerID"}),Object(f.jsx)("option",{children:"FTD"}),Object(f.jsx)("option",{children:"MarketingOptInInd"})]})}),Object(f.jsx)(N.c,{type:"source",position:"bottom",style:{background:"#dc3545"},onConnect:function(e){return console.log("handle onConnect",e)}})]})},T=function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N.c,{type:"target",position:"top",style:{background:"#007bff"},onConnect:function(e){return console.log("handle onConnect",e)}}),Object(f.jsx)("p",{className:"badge badge-pill badge-primary",style:{fontSize:"1.2rem",padding:"5px 20px"},children:"Conditions"}),Object(f.jsx)(_,{}),Object(f.jsx)(N.c,{type:"source",id:"yes",position:"bottom",style:{background:"#d2f95d",left:"20%"},onConnect:function(e){return console.log("handle onConnect",e)},className:"handle-yes"}),Object(f.jsx)(N.c,{type:"source",id:"no",position:"bottom",style:{background:"#f96a5d",left:"80%"},onConnect:function(e){return console.log("handle onConnect",e)},className:"handle-no"})]})},_=function(){var e=1;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"conditions-block"}),Object(f.jsx)(S.a,{outline:!0,color:"success",className:"mb-3",onClick:function(t){return function(t){var n=t.closest(".btn-outline-success").previousElementSibling,c=document.createElement("div");c.classList.add("mb-3","form-inline","d-flex","justify-content-center"),c.setAttribute("id","cond-group-".concat(e++)),c.innerHTML='\n\t\t\t<div className="form-group">\n\t\t\t\t<select name="custom-field" id="custom-field" class="form-control mr-3">\n\t\t\t\t\t<option value="LastTransactionType">LastTransactionType</option>\n\t\t\t\t\t<option value="CustomerID">CustomerID</option>\n\t\t\t\t\t<option value="FirstName">FirstName</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<div className="form-group mr-3">\n\t\t\t\t<select name="condition-state" id="condition-state" class="form-control mr-3">\n\t\t\t\t\t<option value="is">is</option>\n\t\t\t\t\t<option value="is not">is not</option>\n\t\t\t\t\t<option value="less then">less then</option>\n\t\t\t\t</select>\n\t\t\t\t<input name="condition-value" id="condition-value" type="text" class="form-control mr-3"/>\n\t\t\t</div>\n\t\t';var o=document.createElement("button");o.classList.add("btn","btn-outline","btn-danger"),o.innerHTML='<i class="fas fa-times"></i>',o.addEventListener("click",(function(){return c.remove()})),c.append(o),n.append(c)}(t.target)},children:Object(f.jsx)(x.a,{icon:O.e})})]})},w=function(e){return console.log(e),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N.c,{type:"target",position:"top",style:{background:"#28a745"},onConnect:function(e){return console.log("handle onConnect",e)}}),Object(f.jsx)("p",{className:"badge badge-pill badge-success",style:{fontSize:"1.2rem",padding:"5px 20px"},children:"Send"}),Object(f.jsx)(m.a,{children:Object(f.jsxs)(h.a,{type:"select",name:"select",id:"campaignSelect",children:[Object(f.jsx)("option",{children:"L247_Conversion_RNP_EN_Day1"}),Object(f.jsx)("option",{children:"L247_Conversion_RNP_EN_Day4"}),Object(f.jsx)("option",{children:"L247_Conversion_RNP_EN_Day7"}),Object(f.jsx)("option",{children:"L247_Conversion_RNP_EN_Day14"}),Object(f.jsx)("option",{children:"L247_Conversion_RNP_EN_Day20"}),Object(f.jsx)("option",{children:"L247_Conversion_RNP_EN_Day30"})]})}),Object(f.jsxs)(m.a,{check:!0,className:"d-flex",children:[Object(f.jsxs)(p.a,{check:!0,className:"mr-5",children:[Object(f.jsx)(h.a,{type:"checkbox",defaultChecked:!0})," Track opens"]}),Object(f.jsxs)(p.a,{check:!0,className:"mr-5",children:[Object(f.jsx)(h.a,{type:"checkbox",defaultChecked:!0})," Track clicks"]}),Object(f.jsxs)(p.a,{check:!0,className:"mr-5",children:[Object(f.jsx)(h.a,{type:"checkbox"})," Ignore unsubscribed"]}),Object(f.jsxs)(p.a,{check:!0,className:"mr-5",children:[Object(f.jsx)(h.a,{type:"checkbox"})," Include unconfirmed"]})]})]})},E=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N.c,{type:"target",position:"top",style:{background:"#ffc107"},onConnect:function(e){return console.log("handle onConnect",e)}}),Object(f.jsx)("p",{className:"badge badge-pill badge-warning",style:{fontSize:"1.2rem",padding:"5px 20px"},children:"Delay"}),Object(f.jsxs)(m.a,{row:!0,children:[Object(f.jsx)(C.a,{sm:6,children:Object(f.jsx)(h.a,{type:"number",defaultValue:3})}),Object(f.jsx)(C.a,{sm:6,children:Object(f.jsxs)(h.a,{type:"select",name:"select",id:"delaySelect",defaultValue:"Days",children:[Object(f.jsx)("option",{children:"Minutes"}),Object(f.jsx)("option",{children:"Hours"}),Object(f.jsx)("option",{children:"Days"})]})})]}),Object(f.jsx)(N.c,{type:"source",position:"bottom",style:{background:"#ffc107"},onConnect:function(e){return console.log("handle onConnect",e)}})]})},M=function(e){var t=e.addNode,n=Object(N.i)((function(e){return e.nodes})),c=-1,o=-1;return n.length>0&&(c=n[n.length-1].__rf.height,o=n[n.length-1].__rf.position.y),Object(f.jsxs)(k.a,{className:"py-2",children:[Object(f.jsx)(C.a,{sm:3,children:Object(f.jsx)(S.a,{color:"danger",className:"trigger-node-button",onClick:function(){return t(o,c,Object(f.jsx)(L,{}),"triggerNode",{background:"#fae1e3"},!1)},children:"Add Trigger node"})}),Object(f.jsx)(C.a,{sm:3,children:Object(f.jsx)(S.a,{color:"primary",className:"condition-node-button",onClick:function(){return t(o,c,Object(f.jsx)(T,{}),"conditionsNode",{width:800,background:"#d9ebff"})},children:"Add Condition node"})}),Object(f.jsx)(C.a,{sm:3,children:Object(f.jsx)(S.a,{color:"warning",className:"delay-node-button",onClick:function(){return t(o,c,Object(f.jsx)(E,{}),"delayNode",{width:300,background:"#fff6da"})},children:"Add Delay node"})}),Object(f.jsx)(C.a,{sm:3,children:Object(f.jsx)(S.a,{color:"success",className:"send-node-button",onClick:function(){return t(o,c,Object(f.jsx)(w,{}),"sendNode",{width:700,background:"#dff2e3"})},children:"Add Send node"})})]})},D=(n(42),{triggerNode:L,conditionsNode:T,delayNode:E,sendNode:w}),R=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(null),a=Object(v.a)(s,2),i=a[0],r=a[1];console.log(n);Object(c.useEffect)((function(){var e=document.querySelector(".trigger-node-button"),t=document.querySelector(".condition-node-button"),c=document.querySelector(".delay-node-button"),o=document.querySelector(".send-node-button");i&&n.length>0&&i.fitView({padding:.25}),-1===n.findIndex((function(e){return"triggerNode"===e.type}))?(e.disabled=!1,t.disabled=!0,c.disabled=!0,o.disabled=!0):(e.disabled=!0,t.disabled=!1,c.disabled=!1,o.disabled=!1)}),[i,n.length,n]);var l=Object(c.useCallback)((function(e){i||(r(e),console.log("flow loaded:",e))}),[i]);return Object(f.jsxs)(N.e,{children:[Object(f.jsx)(M,{addNode:function(e,t,n,c,s){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];s=Object(y.a)({width:400,border:"1px solid #dddddd",borderRadius:10,padding:"20px 10px",background:"#ffffff"},s),console.log(t),console.log(e);var i=100;-1!==e&&(i=e+t+50),o((function(e){return e.concat({id:(e.length+1).toString(),data:{label:"".concat(n)},position:{x:100,y:i},type:c,style:s,selectable:a})}))}}),Object(f.jsxs)(N.g,{elements:n,style:{height:"70vh"},onLoad:l,nodeTypes:D,onConnect:function(e){return o((function(t){return Object(N.f)(Object(y.a)(Object(y.a)({},e),{},{animated:!0,style:{stroke:"#1890ff",strokeWidth:"2px"}}),t)}))},onElementsRemove:function(e){return o((function(t){return Object(N.h)(e,t)}))},deleteKeyCode:46,children:[Object(f.jsx)(N.a,{gap:16,color:"#888"}),Object(f.jsx)(N.d,{nodeColor:function(e){return"triggerNode"===e.type?"#dc3545":"conditionsNode"===e.type?"#007bff":"delayNode"===e.type?"#ffc107":"sendNode"===e.type?"#28a745":"#dddddd"},nodeStrokeWidth:0,nodeBorderRadius:10}),Object(f.jsx)(N.b,{})]})]})},F=R,A=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={flowBlock:!1},e.showFlowBlock=function(){e.setState({flowBlock:!0})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"alert alert-primary",role:"alert",children:["Use ",Object(f.jsx)("strong",{children:"Delete"})," key to remove nodes. Note: Trigger node cannot be removed"]}),Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(F,{})})]}),t=Object(f.jsxs)(S.a,{color:"primary",size:"lg",block:!0,onClick:this.showFlowBlock,children:["Next step",Object(f.jsx)(x.a,{icon:O.d,className:"ml-2"})]}),n=this.state.flowBlock?e:t;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"text-center text-primary",children:"Rules nodes"}),Object(f.jsx)(g,{}),n]})}}]),n}(c.Component);a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.1a255e9b.chunk.js.map