(this.webpackJsonpfamily_tree=this.webpackJsonpfamily_tree||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(49),o=a.n(l),i=(a(104),a(105),a(7)),c=a(11),s=Object(c.a)(),u=a(14),m=a(18),d=a(20),p=a(19),h=a(15),E=a(38),v=(a(109),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"renderChildNodes",value:function(){if(this.props.children&&this.props.children.length>0){var e=this.props.children.length-1,t=1===this.props.children.length?"noSiblings":null,a=this.props.children[0].generation,n=this.props,l=n.colorArray,o=n.ordinalNumerals;return this.props.children.map((function(n,i){return n.children?n.children?r.a.createElement(f,{name:n.name,spouseName:n.spouseName,label:{name:"".concat(o(i+1)," Child"),spouseName:"Spouse",color:"".concat(l[a-1])},key:i,firstChild:0===i?"firstChild":"",borderDiv2:0===i||i===e?null:r.a.createElement("div",{className:"borderDiv2"}),lastChild:i===e?"lastChild":"",noSiblings:t?"noSiblings":"",parentHeight:"auto",children:n.children,hasChildren:"hasChildren",generation:a,colorArray:l,ordinalNumerals:o}):null:r.a.createElement(f,{name:n.name,spouseName:n.spouseName,label:{name:"".concat(o(i+1)," Child"),spouseName:"Spouse",color:"".concat(l[a-1])},key:i,firstChild:0===i?"firstChild":"",borderDiv2:0===i||i===e?null:r.a.createElement("div",{className:"borderDiv2"}),lastChild:i===e?"lastChild":"",noSiblings:t?"noSiblings":"",parentHeight:30,generation:a,colorArray:l,ordinalNumerals:o})}))}}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,this.renderChildNodes(this.props.parentHeight))}}]),a}(n.Component)),f=(a(110),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).hideOrShowIsChildren=function(e){e.target.nextSibling.classList.toggle("hide");var t=e.target.classList;t.toggle("minus"),t.toggle("plus")},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.parentHeight,a=e.isAncestor,n=e.hasChildren,l=e.lastChild,o=e.borderDiv2,i=e.name,c=e.spouseName,s=e.label,u=e.noSiblings;return r.a.createElement("div",{style:{height:"".concat(t,"px")},className:"".concat(a||""," ").concat(n||"noChildren"," ").concat(a?"":"parentToBorder"," ").concat(l||""," ").concat(u)},r.a.createElement("div",{className:"borderDiv"}),o||"",r.a.createElement("div",{className:"labelNameDiv"},r.a.createElement("div",{className:"childLabelDiv"},r.a.createElement("div",{className:"ui ".concat(s.color," horizontal label")},s.name),r.a.createElement("h4",{className:"ui blue header treeh4"},i||"loading")),c?r.a.createElement("div",{className:"spouseLabelDiv"},r.a.createElement("div",{className:"ui purple horizontal label"},s.spouseName),r.a.createElement("h4",{className:"ui blue header treeh4"},c||"loading")):null),n?r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("i",{className:"minus purple icon minimizer",onClick:this.hideOrShowIsChildren}),r.a.createElement("div",{className:"isChildren"},a?null:r.a.createElement("div",{className:"pointerDiv"}),r.a.createElement(v,this.props))):null)}}]),a}(n.Component)),g=(a(111),function(e){return n.createElement("div",{className:"treeKey"},n.createElement("div",{className:"",id:"keyHeader"},n.createElement("h2",{className:"ui header purple"},"Key")),n.createElement("div",{className:"ui list"},n.createElement("div",{className:"item"},n.createElement("div",{className:"ui two column padded grid",id:"keyGenerationColors"},n.createElement("div",{className:"item eight wide column",id:"itemLabelMine"},n.createElement("h4",{className:"ui blue header"},"Generation Colors")),n.createElement("div",{className:"ui eight wide column relaxed grid",id:"colorSelectorMine"},n.createElement("div",{className:"row"},n.createElement("div",{className:"item ".concat(e.colorArray[0]," column")},"1st"),n.createElement("div",{className:"item ".concat(e.colorArray[1]," column")},"2nd"),n.createElement("div",{className:"item ".concat(e.colorArray[2]," column")},"3rd"),n.createElement("div",{className:"item ".concat(e.colorArray[3]," column")},"4th"),n.createElement("div",{className:"item ".concat(e.colorArray[4]," column")},"5th"))))),n.createElement("div",{className:"item"},n.createElement("div",{className:"ui two column padded grid",id:"keyMinimizer"},n.createElement("div",{className:"item eight wide column",id:"itemLabelMine"},n.createElement("h4",{className:"ui blue header"},"Show/Hide Children")),n.createElement("div",{className:"ui eight wide mobile four wide tablet column relaxed grid",id:"minimizerIcons"},n.createElement("div",{className:"item eight wide column"},n.createElement("i",{className:"plus purple icon"})),n.createElement("div",{className:"item eight wide column"},n.createElement("i",{className:"minus purple icon"}))))),n.createElement("div",{className:"item"},n.createElement("div",{className:"ui two column centered padded mobile only grid"},n.createElement("div",{className:"centered row"},n.createElement("i",{className:"arrow circle down huge blue icon"})),n.createElement("div",{className:"centered row"},n.createElement("h4",null,"Scroll Down for Tree"))))))}),N=(a(112),a(96)),b=a.n(N),y=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("i",{className:"question circle icon",id:"questionCircleIcon"}),r.a.createElement("div",{className:"overScrollMessageDiv",style:{animationPlayState:"".concat("hide"===window.sessionStorage.getItem("noShowMessage")?"paused":"show"===window.sessionStorage.getItem("noShowMessage")?"running":void 0)}},r.a.createElement("i",{className:"close icon large",onClick:function(e){window.sessionStorage.setItem("noShowMessage","hide"),e.target.parentElement.style.animation="none"},title:"don't show message again"}),r.a.createElement("div",{className:"overScrollMessage"},r.a.createElement("div",null,r.a.createElement("h3",null,"Notice:"),r.a.createElement("p",null,"Some children may appear off screen, You may use the scroll right function located at the bottom of the page to bring them in view")),r.a.createElement("img",{src:b.a,className:"scrollRightGif",alt:"page scrolling"}))))},S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).colorArray=["orange","green","teal","violet","olive"],e.ordinalNumerals=function(e){var t=["th","st","nd","rd"],a=e%100;return e+(t[(a-20)%10]||t[a]||t[0])},e.stopInstructions=function(){window.sessionStorage.setItem("playAnimation","no")},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tree"},r.a.createElement("i",{className:"play icon",id:"playIcon",onClick:this.cancelSessionStorage}),r.a.createElement("h1",null,"Family Tree"),r.a.createElement(y,null),r.a.createElement(g,{colorArray:this.colorArray}),r.a.createElement(f,Object.assign({name:this.props.ancestor,spouseName:this.props.spouseName,label:{name:"Ancestor",spouseName:"Spouse",color:"purple"},isAncestor:"isAncestor",noSiblings:"noSiblings",hasChildren:"hasChildren",parentHeight:"auto",colorArray:this.colorArray,ordinalNumerals:this.ordinalNumerals},this.props)),r.a.createElement(E.a,{type:"button",className:"ui blue mini button",to:"".concat("/FAMILY_TREE","/"),onClick:this.stopInstructions},r.a.createElement("i",{className:"arrow left icon"}),"Back to Form"))}}]),a}(n.Component),w=Object(h.b)((function(e){var t,a,n,r,l;return{ancestor:null===(t=e.createTree[0])||void 0===t?void 0:t.ancestor,spouseName:null===(a=e.createTree[0])||void 0===a?void 0:a.spouseName,children:null===(n=e.createTree[0])||void 0===n?void 0:n.children,parentHeight:null===(r=e.createTree[0])||void 0===r?void 0:r.parentHeight,genPxObject:null===(l=e.createTree[0])||void 0===l?void 0:l.generationPxRelation}}))(S),C=a(218),A=a(219),I=a(220),O=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var l=t[0],o=l.input,i=l.assocArray,c=l.labelProps,s=l.type,u=l.meta,m=u.touched,d=u.error,p=l.autofocus,h=l.placeholder,E=l.inputClass,v=l.inputReduxProps,f=c.label,g=c.className;return Object(n.useEffect)((function(){for(var e=0;e<v.fieldValue.length;e++)i===v.fieldValue[e].name&&o.value!==v.fieldValue[e].value&&v.getFieldValue(i,o.value,v.fieldValue)})),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:g},f),r.a.createElement("input",Object.assign({},o,{className:E||null,type:s,autoFocus:p,placeholder:h||null})),m&&d&&r.a.createElement("div",{className:"ui left pointing red basic label"},d))};function x(){var e=arguments.length<=0?void 0:arguments[0],t=e.input,a=e.labelProps,l=a.label,o=a.className,i=e.DemoBoxDownPointer,c=e.inputReduxProps;return Object(n.useEffect)((function(){for(var e=0;e<c.spouseState.length;e++)t.name===c.spouseState[e].name&&t.value!==c.spouseState[e].value&&c.getSpouseState(t.value,t.name,c.spouseState)})),r.a.createElement("div",{className:"checkbox container"},i||null,r.a.createElement("div",{className:o},l),r.a.createElement("input",Object.assign({},t,{type:"checkbox",checked:t.value})))}var T=function e(t){for(var a=t.fields,n=t.fieldArrayReduxProps,l=t.required,o=t.maxLength,i=a.name.match(/\[\d+\]/g),c="",s=0;s<n.fieldValue.length;s++)a.name===n.fieldValue[s].name&&(c=n.fieldValue[s].value);var u=function(e){for(var t=0;t<n.spouseState.length;t++)if(e===n.spouseState[t].name)return n.spouseState[t].bool;return!1};return r.a.createElement("div",{className:"ui list",id:"ul"},a.map((function(t,c){return r.a.createElement("div",{className:"item",id:"item",key:c},r.a.createElement("div",{className:"inline field",id:"formChildrenRows"},r.a.createElement(A.a,{name:"".concat(t,"field"),assocArray:"".concat(t,"arr"),component:O,labelProps:{label:"".concat(n.ordinalNumerals(c+1)," Child"),className:"ui purple horizontal label"},validate:[l,o],autofocus:!0,inputClass:"",inputReduxProps:n,onChange:function(e,a,r,l){return n.getFieldValue("".concat(t,"arr"),a,n.fieldValue)},ID:"".concat(t,"arr").concat(c)}),u("".concat(t,"isSpouse"))&&r.a.createElement(A.a,{name:"".concat(t,"spouse"),validate:o,component:O,autofocus:!0,labelProps:{label:"Spouse",className:"ui purple horizontal label spouseLabel"},inputReduxProps:n,placeholder:"spouse"}),r.a.createElement(A.a,{component:x,name:"".concat(t,"isSpouse"),labelProps:{label:"".concat(u("".concat(t,"isSpouse"))?"Remove Spouse":"Add Spouse"),className:"ui basic mini label addSpouseLabel"},inputReduxProps:n,onChange:function(e,a,r,l){!1===a&&n.clearFields(!1,!1,["".concat(t,"spouse")]),n.getSpouseState(a,l,n.spouseState)}}),r.a.createElement("button",{type:"button",className:"ui red mini button",title:"Remove Child Input",onClick:function(){a.remove(c),n.clearFields(!1,!1,["".concat(t,"field"),"".concat(t,"spouse")]),n.getSpouseState(!1,"".concat(t,"isSpouse"),n.spouseState)}},r.a.createElement("i",{className:"trash icon"}))),(null===i||void 0===i?void 0:i.length)>3?r.a.createElement("div",{className:"limitMessage"},"No more than 5 generations"):r.a.createElement(I.a,{name:"".concat(t,"arr"),component:e,fieldArrayReduxProps:n,required:l,maxLength:o,ID:"".concat(t,"arr")}))})),r.a.createElement("button",{className:"tiny ui button olive",type:"button",onClick:function(){return a.push({})},disabled:!(n.valid&&!n.pristine)},r.a.createElement("i",{className:"user plus icon"}),c?"Add Child to ".concat(c):"Add Child"))},j=function(){var e=arguments.length<=0?void 0:arguments[0],t=e.type,a=e.className,n=e.text,l=e.disabled,o=e.onClick;return r.a.createElement("button",{type:t,className:a,onClick:o,disabled:l},n)},L=(a(188),function(){return n.createElement("div",{className:"demoBoxLeftPointer"},n.createElement("i",{className:"hand point left outline big blue icon",id:"pointLeftHandDemoBox"}),n.createElement("div",{className:"leftPointerMessage1"},"Start by entering the Ancestor of your Family Tree!"),n.createElement("div",{className:"leftPointerMessage2"},"After you've entered your ancestor you may now add Children"))}),P=(a(189),function(){return r.a.createElement("div",{className:"demoBoxDownPointer"},r.a.createElement("i",{className:"hand point down outline big blue icon",id:"pointDownHandDemoBox"}),r.a.createElement("div",{className:"downPointerMessage"},"Each field will have the option to add a Spouse if necessary"))}),R=(a(190),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).required=function(e){return e?void 0:"Required"},e.maxLength=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}},e.maxLength50=e.maxLength(50),e.submitValidation=function(){return!(e.props.valid&&!e.props.pristine)},e.spouseState=function(t){for(var a=0;a<e.props.spouseState.length;a++)if(t===e.props.spouseState[a].name)return e.props.spouseState[a].bool;return!1},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"ui form",onSubmit:this.props.handleSubmit(this.props.onSubmit),autoComplete:"off"},r.a.createElement("div",{className:"inline field",id:"ancestorChildren"},r.a.createElement(A.a,{name:"ancestor",assocArray:"ancestorChildren",component:O,labelProps:{label:"Ancestor",className:"ui purple horizontal label"},validate:[this.required,this.maxLength50],type:"text",autofocus:!0,inputClass:"",inputReduxProps:this.props,onChange:function(t,a,n,r){return e.props.getFieldValue("ancestorChildren",a,e.props.fieldValue)}}),this.props.cancelIntro?null:r.a.createElement(L,null),this.spouseState("isSpouse")&&r.a.createElement(A.a,{name:"ancestorspouse",validate:this.maxLength50,component:O,autofocus:!0,labelProps:{label:"Spouse",className:"ui purple horizontal label spouseLabel"},inputReduxProps:this.props,placeholder:"spouse"}),r.a.createElement(A.a,{component:x,name:"isSpouse",labelProps:{label:"".concat(this.spouseState("isSpouse")?"Remove Spouse":"Add Spouse"),className:"ui basic mini label addSpouseLabel"},inputReduxProps:this.props,DemoBoxDownPointer:this.props.cancelIntro?null:r.a.createElement(P,null),onChange:function(t,a,n,r){!1===a&&e.props.clearFields(!1,!1,["ancestorspouse"]),e.props.getSpouseState(a,r,e.props.spouseState)}})),r.a.createElement(I.a,{name:"ancestorChildren",component:T,fieldArrayReduxProps:this.props,required:this.required,maxLength:this.maxLength50,ID:"ancestorChildren"}),r.a.createElement(j,{className:"ui button primary",disabled:this.submitValidation(),text:"Submit"}),r.a.createElement(j,{className:"negative ui button",onClick:this.props.reset,type:"reset",text:"Clear"}))}}]),a}(n.Component));a(191);var _=function(e){return r.a.createElement("div",{className:"treeIcons"},r.a.createElement("div",{className:"parentIcons"},r.a.createElement("i",{className:"user green icon"}),r.a.createElement("i",{className:"user green icon"})),r.a.createElement("div",{className:"childrenIcons"},r.a.createElement("i",{className:"child green icon"}),r.a.createElement("i",{className:"child icon"}),r.a.createElement("i",{className:"child icon"})),r.a.createElement("div",{className:"grandChildrenIcons"},r.a.createElement("div",{className:"childrenIcons"},r.a.createElement("i",{className:"child green icon"}),r.a.createElement("i",{className:"child icon"}),r.a.createElement("i",{className:"child icon"})),r.a.createElement("div",{className:"childrenIcons"},r.a.createElement("i",{className:"child green icon"}),r.a.createElement("i",{className:"child icon"}),r.a.createElement("i",{className:"child icon"})),r.a.createElement("div",{className:"childrenIcons"},r.a.createElement("i",{className:"child green icon"}),r.a.createElement("i",{className:"child icon"}),r.a.createElement("i",{className:"child icon"}))))},k=(a(192),function(e){return r.a.createElement("div",{className:"welcomeMessage"},"Welcome to Family Tree!")}),D=(a(193),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){var a=e.props.formData.enterAncestors.registeredFields;e.props.createTree(t,a)},e.stopInstructions=function(){window.sessionStorage.setItem("playAnimation","no"),e.props.cancelIntroAnimation()},e.ordinalNumerals=function(e){var t=["th","st","nd","rd"],a=e%100;return e+(t[(a-20)%10]||t[a]||t[0])},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.sessionStorage.getItem("playAnimation")&&this.props.cancelIntroAnimation()}},{key:"render",value:function(){return r.a.createElement("div",{className:"ancestorEnter"},r.a.createElement("div",{className:"formHeader"},r.a.createElement("h1",null,"Family Tree"),r.a.createElement(_,null)),this.props.cancelIntro?null:r.a.createElement("button",{type:"button",className:"ui button blue tiny basic",id:"stopInstructionsBtn",onClick:this.stopInstructions},"Hide Instructions"),this.props.cancelIntro?null:r.a.createElement(k,null),r.a.createElement(R,Object.assign({},this.props,{onSubmit:this.onSubmit,ordinalNumerals:this.ordinalNumerals})))}}]),a}(n.Component)),F=Object(h.b)((function(e){return{cancelIntro:e.cancelIntro,formData:e.form,fieldValue:e.fieldValue,spouseState:e.spouseState}}),{createTree:function(e){var t=[],a=function e(t,a,n,r){Object(u.a)(this,e),this.name=t,this.spouseName=a,this.children=n,this.generation=r},n=function(){t.push({ancestor:e.ancestor}),t[0].spouseName=e.ancestorspouse;return t[0].children=function e(t,n){if(t)return t.map((function(t){var r=n,l=n,o=t.field,i=t.spouse||void 0,c=t.arr||void 0;return c&&(l+=1),new a(o,i,c?e(c,l):c,r)}))}(e.ancestorChildren,1),t[0].generation=0,t[0]}();return s.push("".concat("/FAMILY_TREE","/tree")),{type:"CREATE_TREE",payload:n}},getFieldValue:function(e,t,a){function n(e,t){this.name=e,this.value=t}return{type:"GET_FIELD_VALUE",payload:function(){for(var r=0;r<a.length;r++)if(a[r].name===e)return a[r].value=t,a;return a.push(new n(e,t)),a}()}},getSpouseState:function(e,t,a){function n(e,t){this.bool=e,this.name=t}return{type:"GET_SPOUSE_STATE",payload:function(){for(var r=0;r<a.length;r++)if(a[r].name===t)return a[r].bool=e,a;return a.push(new n(e,t)),a}()}},cancelIntroAnimation:function(){return{type:"CANCEL_INTRO_ANIMATION",payload:!0}}})(Object(C.a)({form:"enterAncestors",destroyOnUnmount:!1})(D)),M=function(){return r.a.createElement("div",{className:"ui header",style:{padding:"70px",textAlign:"center"}},r.a.createElement("h1",null,"This path is not defined"),r.a.createElement(E.a,{to:"".concat("/FAMILY_TREE","/"),className:"ui button blue"},"Back to Main Page"))};var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.b,{history:s,basename:"".concat("/FAMILY_TREE","/")},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"".concat("/FAMILY_TREE","/"),render:function(e){return r.a.createElement(F,e)}}),r.a.createElement(i.a,{exact:!0,path:"".concat("/FAMILY_TREE","/tree"),render:function(){return r.a.createElement(w,null)}}),r.a.createElement(i.a,null,r.a.createElement(M,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(6),B=a(98);var q=a(221),z=a(50),G=Object(H.c)({createTree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TREE":return[t.payload];default:return e}},cancelIntro:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CANCEL_INTRO_ANIMATION":return t.payload;default:return e}},form:q.a,fieldValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FIELD_VALUE":return Object(z.a)(t.payload);default:return e}},spouseState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SPOUSE_STATE":return Object(z.a)(t.payload);default:return e}}}),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,Y=Object(H.e)(G,U(Object(H.a)(B.a,(function(e){var t=e.dispatch,a=e.getState;return function(e){return function(n){if("@@redux-form/UNREGISTER_FIELD"===n.type&&n.payload.name.indexOf("isSpouse")>-1){var r=a().spouseState;console.log(r,"spouseState");var l=function(){for(var e=0;e<r.length;e++)if(r[e].name===n.payload.name)return r[e].bool=!1,r;return r}();console.log(l,"array spouse state"),t({type:"GET_SPOUSE_STATE",payload:l})}e(n)}}}))));o.a.render(r.a.createElement(h.a,{store:Y},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a.p+"static/media/scroll_right.7fe5c103.gif"},99:function(e,t,a){e.exports=a(217)}},[[99,1,2]]]);
//# sourceMappingURL=main.af669a09.chunk.js.map