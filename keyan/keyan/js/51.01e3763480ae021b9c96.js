webpackJsonp([51],{"9bBU":function(t,e,a){a("mClu");var d=a("FeBl").Object;t.exports=function(t,e,a){return d.defineProperty(t,e,a)}},C4MV:function(t,e,a){t.exports={default:a("9bBU"),__esModule:!0}},Ki20:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=a("bOdI"),p=a.n(d),i=a("woOf"),r=a.n(i),o=a("Xxa5"),s=a.n(o),n=a("exGp"),u=a.n(n),c={name:"Apis",props:{row:{default:function(){return{}},type:Object}},data:function(){return{apiTreeData:[],apiTreeIds:[],needConfirm:!1,apiDefaultProps:{children:"children",label:"description"}}},created:function(){var t=this;return u()(s.a.mark(function e(){var a,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[{ID:1,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/base/login",description:"用户登录",apiGroup:"base",method:"POST"},{ID:2,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/user/register",description:"用户注册",apiGroup:"user",method:"POST"},{ID:3,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/api/createApi",description:"创建api",apiGroup:"api",method:"POST"},{ID:4,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/api/getApiList",description:"获取api列表",apiGroup:"api",method:"POST"},{ID:5,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/api/getApiById",description:"获取api详细信息",apiGroup:"api",method:"POST"},{ID:6,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/api/deleteApi",description:"删除Api",apiGroup:"api",method:"POST"},{ID:7,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/api/updateApi",description:"更新Api",apiGroup:"api",method:"POST"},{ID:8,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/api/getAllApis",description:"获取所有api",apiGroup:"api",method:"POST"},{ID:9,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/authority/createAuthority",description:"创建角色",apiGroup:"authority",method:"POST"},{ID:10,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/authority/deleteAuthority",description:"删除角色",apiGroup:"authority",method:"POST"},{ID:11,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/authority/getAuthorityList",description:"获取角色列表",apiGroup:"authority",method:"POST"},{ID:12,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/getMenu",description:"获取菜单树",apiGroup:"menu",method:"POST"},{ID:13,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/getMenuList",description:"分页获取基础menu列表",apiGroup:"menu",method:"POST"},{ID:14,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/addBaseMenu",description:"新增菜单",apiGroup:"menu",method:"POST"},{ID:15,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/getBaseMenuTree",description:"获取用户动态路由",apiGroup:"menu",method:"POST"},{ID:16,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/addMenuAuthority",description:"增加menu和角色关联关系",apiGroup:"menu",method:"POST"},{ID:17,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/getMenuAuthority",description:"获取指定角色menu",apiGroup:"menu",method:"POST"},{ID:18,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/deleteBaseMenu",description:"删除菜单",apiGroup:"menu",method:"POST"},{ID:19,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/updateBaseMenu",description:"更新菜单",apiGroup:"menu",method:"POST"},{ID:20,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/menu/getBaseMenuById",description:"根据id获取菜单",apiGroup:"menu",method:"POST"},{ID:21,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/user/changePassword",description:"修改密码",apiGroup:"user",method:"POST"},{ID:23,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/user/getUserList",description:"获取用户列表",apiGroup:"user",method:"POST"},{ID:24,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/user/setUserAuthority",description:"修改用户角色",apiGroup:"user",method:"POST"},{ID:25,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/fileUploadAndDownload/upload",description:"文件上传示例",apiGroup:"fileUploadAndDownload",method:"POST"},{ID:26,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/fileUploadAndDownload/getFileList",description:"获取上传文件列表",apiGroup:"fileUploadAndDownload",method:"POST"},{ID:27,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/casbin/updateCasbin",description:"更改角色api权限",apiGroup:"casbin",method:"POST"},{ID:28,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/casbin/getPolicyPathByAuthorityId",description:"获取权限列表",apiGroup:"casbin",method:"POST"},{ID:29,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/fileUploadAndDownload/deleteFile",description:"删除文件",apiGroup:"fileUploadAndDownload",method:"POST"},{ID:30,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/jwt/jsonInBlacklist",description:"jwt加入黑名单(退出)",apiGroup:"jwt",method:"POST"},{ID:31,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/authority/setDataAuthority",description:"设置角色资源权限",apiGroup:"authority",method:"POST"},{ID:32,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/system/getSystemConfig",description:"获取配置文件内容",apiGroup:"system",method:"POST"},{ID:33,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/system/setSystemConfig",description:"设置配置文件内容",apiGroup:"system",method:"POST"},{ID:34,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/customer/customer",description:"创建客户",apiGroup:"customer",method:"POST"},{ID:35,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/customer/customer",description:"更新客户",apiGroup:"customer",method:"PUT"},{ID:36,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/customer/customer",description:"删除客户",apiGroup:"customer",method:"DELETE"},{ID:37,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/customer/customer",description:"获取单一客户",apiGroup:"customer",method:"GET"},{ID:38,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/customer/customerList",description:"获取客户列表",apiGroup:"customer",method:"GET"},{ID:39,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/casbin/casbinTest/:pathParam",description:"RESTFUL模式测试",apiGroup:"casbin",method:"GET"},{ID:40,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/autoCode/createTemp",description:"自动化代码",apiGroup:"autoCode",method:"POST"},{ID:41,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/authority/updateAuthority",description:"更新角色信息",apiGroup:"authority",method:"PUT"},{ID:42,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/authority/copyAuthority",description:"拷贝角色",apiGroup:"authority",method:"POST"},{ID:43,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/user/deleteUser",description:"删除用户",apiGroup:"user",method:"DELETE"},{ID:44,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionaryDetail/createSysDictionaryDetail",description:"新增字典内容",apiGroup:"sysDictionaryDetail",method:"POST"},{ID:45,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionaryDetail/deleteSysDictionaryDetail",description:"删除字典内容",apiGroup:"sysDictionaryDetail",method:"DELETE"},{ID:46,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionaryDetail/updateSysDictionaryDetail",description:"更新字典内容",apiGroup:"sysDictionaryDetail",method:"PUT"},{ID:47,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionaryDetail/findSysDictionaryDetail",description:"根据ID获取字典内容",apiGroup:"sysDictionaryDetail",method:"GET"},{ID:48,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionaryDetail/getSysDictionaryDetailList",description:"获取字典内容列表",apiGroup:"sysDictionaryDetail",method:"GET"},{ID:49,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionary/createSysDictionary",description:"新增字典",apiGroup:"sysDictionary",method:"POST"},{ID:50,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionary/deleteSysDictionary",description:"删除字典",apiGroup:"sysDictionary",method:"DELETE"},{ID:51,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionary/updateSysDictionary",description:"更新字典",apiGroup:"sysDictionary",method:"PUT"},{ID:52,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionary/findSysDictionary",description:"根据ID获取字典",apiGroup:"sysDictionary",method:"GET"},{ID:53,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysDictionary/getSysDictionaryList",description:"获取字典列表",apiGroup:"sysDictionary",method:"GET"},{ID:54,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysOperationRecord/createSysOperationRecord",description:"新增操作记录",apiGroup:"sysOperationRecord",method:"POST"},{ID:55,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysOperationRecord/deleteSysOperationRecord",description:"删除操作记录",apiGroup:"sysOperationRecord",method:"DELETE"},{ID:56,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysOperationRecord/findSysOperationRecord",description:"根据ID获取操作记录",apiGroup:"sysOperationRecord",method:"GET"},{ID:57,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysOperationRecord/getSysOperationRecordList",description:"获取操作记录列表",apiGroup:"sysOperationRecord",method:"GET"},{ID:58,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/autoCode/getTables",description:"获取数据库表",apiGroup:"autoCode",method:"GET"},{ID:59,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/autoCode/getDB",description:"获取所有数据库",apiGroup:"autoCode",method:"GET"},{ID:60,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/autoCode/getColumn",description:"获取所选table的所有字段",apiGroup:"autoCode",method:"GET"},{ID:61,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/sysOperationRecord/deleteSysOperationRecordByIds",description:"批量删除操作历史",apiGroup:"sysOperationRecord",method:"DELETE"},{ID:62,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/simpleUploader/upload",description:"插件版分片上传",apiGroup:"simpleUploader",method:"POST"},{ID:63,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/simpleUploader/checkFileMd5",description:"文件完整度验证",apiGroup:"simpleUploader",method:"GET"},{ID:64,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/simpleUploader/mergeFileMd5",description:"上传完成合并文件",apiGroup:"simpleUploader",method:"GET"},{ID:65,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/user/setUserInfo",description:"设置用户信息",apiGroup:"user",method:"PUT"},{ID:66,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/system/getServerInfo",description:"获取服务器信息",apiGroup:"system",method:"POST"},{ID:67,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/email/emailTest",description:"发送测试邮件",apiGroup:"email",method:"POST"},{ID:80,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/autoCode/preview",description:"预览自动化代码",apiGroup:"autoCode",method:"POST"},{ID:81,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/excel/importExcel",description:"导入excel",apiGroup:"excel",method:"POST"},{ID:82,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/excel/loadExcel",description:"下载excel",apiGroup:"excel",method:"GET"},{ID:83,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/excel/exportExcel",description:"导出excel",apiGroup:"excel",method:"POST"},{ID:84,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/excel/downloadTemplate",description:"下载excel模板",apiGroup:"excel",method:"GET"},{ID:85,CreatedAt:"2021-06-15T15:06:25+08:00",UpdatedAt:"2021-06-15T15:06:25+08:00",path:"/api/deleteApisByIds",description:"批量删除api",apiGroup:"api",method:"DELETE"}],t.apiTreeData=t.buildApiTree(a),e.next=5,getPolicyPathByAuthorityId({authorityId:t.row.authorityId});case 5:d=e.sent,t.activeUserId=t.row.authorityId,t.apiTreeIds=[],d.data.paths&&d.data.paths.map(function(e){t.apiTreeIds.push("p:"+e.path+"m:"+e.method)});case 9:case"end":return e.stop()}},e,t)}))()},methods:{nodeChange:function(){this.needConfirm=!0},enterAndNext:function(){this.authApiEnter()},buildApiTree:function(t){var e={};t&&t.map(function(t){t.onlyId="p:"+t.path+"m:"+t.method,Object.prototype.hasOwnProperty.call(e,t.apiGroup)?e[t.apiGroup].push(t):r()(e,p()({},t.apiGroup,[t]))});var a=[];for(var d in e){var i={ID:d,description:d+"组",children:e[d]};a.push(i)}return a},authApiEnter:function(){var t=this;return u()(s.a.mark(function e(){var a,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$refs.apiTree.getCheckedNodes(!0),d=[],a&&a.map(function(t){var e={path:t.path,method:t.method};d.push(e)}),e.next=5,UpdateCasbin({authorityId:t.activeUserId,casbinInfos:d});case 5:0===e.sent.code&&t.$message({type:"success",message:"api设置成功"});case 7:case"end":return e.stop()}},e,t)}))()}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"clearflex"},[e("el-button",{staticClass:"fl-right",attrs:{size:"small",type:"primary"},on:{click:this.authApiEnter}},[this._v("确 定")])],1),this._v(" "),e("el-tree",{ref:"apiTree",attrs:{data:this.apiTreeData,"default-checked-keys":this.apiTreeIds,props:this.apiDefaultProps,"default-expand-all":"","highlight-current":"","node-key":"onlyId","show-checkbox":""},on:{check:this.nodeChange}})],1)},staticRenderFns:[]},h=a("VU/8")(c,T,!1,null,null,null);e.default=h.exports},bOdI:function(t,e,a){"use strict";e.__esModule=!0;var d,p=a("C4MV"),i=(d=p)&&d.__esModule?d:{default:d};e.default=function(t,e,a){return e in t?(0,i.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},mClu:function(t,e,a){var d=a("kM2E");d(d.S+d.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})}});
//# sourceMappingURL=51.01e3763480ae021b9c96.js.map