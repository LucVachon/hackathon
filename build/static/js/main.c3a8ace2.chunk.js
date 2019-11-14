(this.webpackJsonpslartibartfast=this.webpackJsonpslartibartfast||[]).push([[0],{36:function(e,a,t){},51:function(e,a,t){e.exports=t(61)},56:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(6),r=t.n(n),s=(t(56),t(37)),u=t(38),d=t(43),i=t(39),c=t(44),m=(t(36),t(96));var b=function(e){return o.a.createElement("div",{className:"ProjectInput"},o.a.createElement(m.a,{className:"ProjectInputTextField",labelId:"ProjectRole",label:"Project Role",onChange:function(a){e.setProjectRole(a.currentTarget.value)}}),o.a.createElement(m.a,{className:"ProjectInputTextField",labelId:"ProjectName",label:"Project Name",onChange:function(a){e.setProjectName(a.currentTarget.value)}}))},v=t(42);var D=function(e){return o.a.createElement(m.a,{className:"ModuleVariable",label:e.label,onChange:function(a){e.setModuleData(e.index,e.variable,a.target.value)}})};var M=function(e){return o.a.createElement("div",{className:"CrossResourceRoleModule"},[{label:"Module Name",variable:"moduleName"},{label:"Domain",variable:"domain"},{label:"Subdomain",variable:"subDomain"},{label:"User ID",variable:"userId"}].map((function(a){return o.a.createElement(D,{label:a.label,variable:a.variable,setModuleData:e.setModuleData,index:e.index})})))};var p=function(e){return o.a.createElement("div",{className:"RDSInstanceModule"},[{label:"Module Name",variable:"moduleName"},{label:"Domain",variable:"domain"},{label:"Subdomain",variable:"sub_domain"},{label:"Stage",variable:"stage"},{label:"DB Port",variable:"db_port"},{label:"DB Username",variable:"db_username"},{label:"DB Password",variable:"db_password"},{label:"DB Allocated Storage",variable:"db_allocated_stroage"},{label:"DB Name",variable:"db_name"},{label:"DB Engine",variable:"db_engine"},{label:"DB Engine Version",variable:"db_engine_version"},{label:"DB Class",variable:"db_class"},{label:"DB Ingress CIDR",variable:"db_ingress_cidr"}].map((function(a){return o.a.createElement(D,{label:a.label,variable:a.variable,setModuleData:e.setModuleData,index:e.index,defaultValue:a.default?a.default:""})})))};var g=function(e){return o.a.createElement("div",{className:"RDSCluserModule"},[{label:"Module Name",variable:"moduleName"},{label:"Domain",variable:"domain"},{label:"Subdomain",variable:"sub_domain"},{label:"Stage",variable:"stage"},{label:"DB Port",variable:"db_port"},{label:"DB Username",variable:"db_username"},{label:"DB Password",variable:"db_password"},{label:"DB Allocated Storage",variable:"db_allocated_stroage"},{label:"DB Name",variable:"db_name"},{label:"DB Engine",variable:"db_engine"},{label:"DB Engine Version",variable:"db_engine_version"},{label:"DB Class",variable:"db_class"},{label:"DB Ingress CIDR",variable:"db_ingress_cidr"}].map((function(a){return o.a.createElement(D,{label:a.label,variable:a.variable,setModuleData:e.setModuleData,index:e.index,defaultValue:a.default?a.default:""})})))},f=t(93),E=t(98),h=t(95),R=t(99),N=t(94);var j=function(e){return e.module?o.a.createElement("div",{className:"ModuleControls"},o.a.createElement("div",{className:"ModuleTitle"},e.module.props.title,o.a.createElement(N.a,{onClick:function(){e.removeModule(e.index)},style:{float:"right"}},"Remove"),o.a.createElement("div",{style:{clear:"both"}})),o.a.createElement("div",{className:"ModuleWrapper"},e.module)):""};var S=function(e){var a=Object(l.useState)(null),t=Object(v.a)(a,2),n=t[0],r=t[1],s=function(a){var t=e.modules||[];t[a]=null,e.setModules(t),e.removeModuleData(a)},u=function(a){var t=e.modules||[],l=t.slice(a,a+1)[0];t.push(l),e.setModules(t)};return o.a.createElement("div",{className:"ModuleList"},o.a.createElement("div",{className:"ModuleListContainer"},e.modules&&e.modules.map((function(a,t){return o.a.createElement(j,{key:"module".concat(t),index:t,module:a,removeModule:s,cloneModule:u,setModuleData:e.setModuleData})}))),o.a.createElement(f.a,{style:{width:"30em"}},o.a.createElement(E.a,{id:"ModuleSelectLabel"},"Choose Module"),o.a.createElement(h.a,{labelId:"ModuleSelectLabel",onChange:function(e){r(e.target.value)}},o.a.createElement(R.a,{value:"CRRM"},"Cross Resource Role Module"),o.a.createElement(R.a,{value:"RDSI"},"RDS Instance"),o.a.createElement(R.a,{value:"RDSC"},"RDS Cluster"))),o.a.createElement(N.a,{variant:"contained",onClick:function(){var a=e.modules||[];console.log(n),"CRRM"===n&&(e.setModuleData(a.length,"moduleType","CRRM"),a.push(o.a.createElement(M,{index:a.length,setModuleData:e.setModuleData,title:"Cross Resource Role Module"})),e.setModules(a)),"RDSI"===n&&(e.setModuleData(a.length,"moduleType","RDSI"),a.push(o.a.createElement(p,{index:a.length,setModuleData:e.setModuleData,title:"RDS Instance Module"})),e.setModules(a)),"RDSC"===n&&(e.setModuleData(a.length,"moduleType","RDSC"),a.push(o.a.createElement(g,{index:a.length,setModuleData:e.setModuleData,title:"RDS Cluster Module"})),e.setModules(a)),console.log(a)}},"Add Module"))},C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];return(t=Object(d.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(o)))).state={modules:[],moduleData:[],projectRole:"",projectName:""},t.setProjectRole=function(e){t.setState({projectRole:e})},t.setProjectName=function(e){t.setState({projectName:e})},t.setModules=function(e){t.setState({modules:e})},t.setModuleData=function(e,a,l){console.log("".concat(e," ").concat(a,"=").concat(l));var o=t.state.moduleData;o[e]||(o[e]={}),o[e][a]=l,t.setState({moduleData:o}),document.getElementById("outdata").value=JSON.stringify({projectRole:t.state.projectRole,projectName:t.state.projectName,moduleData:t.state.moduleData})},t.removeModuleData=function(e){var a=t.state.moduleData;a[e]=null,t.setState({moduleData:a}),document.getElementById("outdata").value=JSON.stringify({projectRole:t.state.projectRole,projectName:t.state.projectName,moduleData:t.state.moduleData})},t}return Object(c.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"AppContainer"},o.a.createElement("h1",null,"Slartibartfast / Terraform Nursery / Terraform Initializer"),o.a.createElement(b,{setProjectRole:this.setProjectRole,setProjectName:this.setProjectName}),o.a.createElement(S,{setModules:this.setModules,modules:this.state.modules,moduleData:this.state.moduleData,removeModuleData:this.removeModuleData,setModuleData:this.setModuleData}),o.a.createElement("form",{method:"post",action:"/generate"},o.a.createElement("textarea",{name:"JSONOUT",placeholder:"JSON OUTPUT GOES HERE",style:{width:"64em",height:"10em"},id:"outdata"}),o.a.createElement("input",{type:"submit",value:"Submit"}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.c3a8ace2.chunk.js.map