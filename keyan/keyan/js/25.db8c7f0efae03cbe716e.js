webpackJsonp([25],{"ZC+C":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"searchTop clearflex"},[a("el-col",{attrs:{span:18}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[a("div",[a("el-form-item",{attrs:{label:"编号"}},[a("el-input",{attrs:{placeholder:"请输入编号"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属人"}},[a("el-input",{attrs:{placeholder:"请输入所属人"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-option",{attrs:{label:"发明",value:"ganmao"}}),e._v(" "),a("el-option",{attrs:{label:"实用新型",value:"fashao"}}),e._v(" "),a("el-option",{attrs:{label:"外观设计",value:"waiguan"}})],1)],1)],1),e._v(" "),a("transition",{attrs:{duration:{enter:800,leave:100},mode:"out-in",name:"el-fade-in-linear"}},[e.isUpDown?e._e():a("div",{staticClass:"selectMode"},[a("el-form-item",{attrs:{label:"发布时间"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1)],1)])],1)],1),e._v(" "),a("el-col",{staticClass:"sarchClass",staticStyle:{"text-align":"center"},attrs:{span:6}},[a("el-button",{attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:e.onSubmit}},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"highSearch",attrs:{size:"medium",type:"primary",icon:e.isUpDown?"el-icon-arrow-up":"el-icon-arrow-down"},on:{click:e.onUpDown}},[e._v("高级查询")])],1)],1),e._v(" "),a("div",{staticStyle:{padding:"10px 0","text-align":"left"}},[a("el-button",{attrs:{type:"primary"}},[e._v("新增")])],1),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"id",label:"编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"所属人",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"update",label:"发布时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"details",label:"详情",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("下载")])]}}])})],1),e._v(" "),a("el-pagination",{style:{float:"right",padding:"20px"},attrs:{"current-page":e.page,"page-size":e.pageSize,"page-sizes":[10,30,50,100],total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)])},staticRenderFns:[]};var n=a("VU/8")({data:function(){return{page:1,pageSize:10,total:10,isUpDown:!0,form:{},tableData:[{id:"202107221",name:"测试1",type:"发明",update:"2021-07-01",details:"测试1的简单的获奖详情"}]}},methods:{onSubmit:function(){},onUpDown:function(){this.isUpDown=!this.isUpDown},handleCurrentChange:function(){},handleSizeChange:function(){}}},l,!1,function(e){a("tv8l")},null,null);t.default=n.exports},tv8l:function(e,t){}});
//# sourceMappingURL=25.db8c7f0efae03cbe716e.js.map