webpackJsonp([12],{gBLU:function(e,t){},mvv6:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"searchTop clearflex"},[l("el-col",{attrs:{span:18}},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[l("div",[l("el-form-item",{attrs:{label:"组织编号"}},[l("el-input",{attrs:{placeholder:"请输入组织编号"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"组织名称"}},[l("el-input",{attrs:{placeholder:"请输入组织名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"组织类型"}},[l("el-select",{attrs:{placeholder:"请选择组织类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-option",{attrs:{label:"机构",value:"ganmao"}}),e._v(" "),l("el-option",{attrs:{label:"部门",value:"fashao"}}),e._v(" "),l("el-option",{attrs:{label:"组",value:"waiguan"}})],1)],1)],1),e._v(" "),l("transition",{attrs:{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"}},[e.isUpDown?e._e():l("div",{staticClass:"selectMode"},[l("el-form-item",{attrs:{label:"申请时间"}},[l("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1)],1)])],1)],1),e._v(" "),l("el-col",{staticClass:"sarchClass",staticStyle:{"text-align":"center"},attrs:{span:6}},[l("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),l("el-button",{staticClass:"highSearch",attrs:{size:"medium",type:"primary",icon:e.isUpDown?"el-icon-arrow-up":"el-icon-arrow-down"},on:{click:e.onUpDown}},[e._v("高级查询")])],1)],1),e._v(" "),l("div",{staticStyle:{padding:"10px 0","text-align":"left"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.drawerOpen("add")}}},[e._v("新增")])],1),e._v(" "),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:""}},[l("el-table-column",{attrs:{prop:"id",label:"编号",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"机构名称",width:"300"}}),e._v(" "),l("el-table-column",{attrs:{prop:"type",label:"类型",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{prop:"update",label:"申请时间",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.drawerOpen("addChild")}}},[e._v("添加下级")]),e._v(" "),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.drawerOpen("edit")}}},[e._v("编辑")])]}}])})],1),e._v(" "),l("el-pagination",{style:{float:"right",padding:"20px"},attrs:{"current-page":e.page,"page-size":e.pageSize,"page-sizes":[10,30,50,100],total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),e._v(" "),l("el-drawer",{attrs:{title:e.title,visible:e.drawer,direction:e.direction,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[l("el-form",{ref:"ruleForm",staticStyle:{width:"90%"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},["添加下级"==e.title?l("el-form-item",{attrs:{label:"父级机构",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入组织名称",disabled:""},model:{value:e.ruleForm.Fname,callback:function(t){e.$set(e.ruleForm,"Fname",t)},expression:"ruleForm.Fname"}})],1):e._e(),e._v(" "),l("el-form-item",{attrs:{label:"组织名称",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入组织名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"所属行政区",prop:"name"}},[[l("el-select",{attrs:{placeholder:"请选择所属行政区"},model:{value:e.ruleForm.area,callback:function(t){e.$set(e.ruleForm,"area",t)},expression:"ruleForm.area"}},e._l(e.option,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2),e._v(" "),l("el-form-item",{attrs:{label:"组织类型",prop:"name"}},[[l("el-select",{attrs:{placeholder:"请选择组织类型"},model:{value:e.ruleForm.area,callback:function(t){e.$set(e.ruleForm,"area",t)},expression:"ruleForm.area"}},e._l(e.option,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2),e._v(" "),l("el-form-item",{attrs:{label:"负责人",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入负责人"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"联系人",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"联系电话",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"联系地址",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入联系地址"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1)],1)],1)])},staticRenderFns:[]};var r=l("VU/8")({data:function(){return{page:1,pageSize:10,total:10,isUpDown:!0,drawer:!1,title:"新增机构",form:{},tableData:[{id:"202107221",name:"测试1",type:"发明",update:"2021-07-01",details:"测试1的简单的组织详情"}],option:[],ruleForm:{Fname:"测试1"}}},methods:{onSubmit:function(){},onUpDown:function(){this.isUpDown=!this.isUpDown},handleCurrentChange:function(){},handleSizeChange:function(){},drawerOpen:function(e){this.drawer=!0,this.title="add"==e?"新增机构":"addChild"==e?"添加下级":"编辑机构"}}},a,!1,function(e){l("gBLU")},null,null);t.default=r.exports}});
//# sourceMappingURL=12.c95a3966880e3b77e96e.js.map