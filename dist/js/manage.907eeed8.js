webpackJsonp([0],{575:function(e,n,t){var r=t(209)(t(617),t(663),null,null);r.options.__file="/Users/Jimmy/git/diy-webpack/src/views/product/manage.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e}),r.options.functional,e.exports=r.exports},576:function(e,n,t){t(686);var r=t(209)(t(618),t(665),null,null);r.options.__file="/Users/Jimmy/git/diy-webpack/src/views/product/menu.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e}),r.options.functional,e.exports=r.exports},577:function(e,n,t){t(688);var r=t(209)(t(619),t(667),null,null);r.options.__file="/Users/Jimmy/git/diy-webpack/src/views/product/order.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e}),r.options.functional,e.exports=r.exports},578:function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var a=r(o);return[t].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},579:function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=c[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(a(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var s=[],o=0;o<t.parts.length;o++)s.push(a(t.parts[o]));c[t.id]={id:t.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",m.appendChild(e),e}function a(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(f)return _;r.parentNode.removeChild(r)}if(v){var a=d++;r=p||(p=o()),n=s.bind(null,r,a,!1),t=s.bind(null,r,a,!0)}else r=o(),n=l.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function s(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(n,o);else{var a=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(a,s[n]):e.appendChild(a)}}function l(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=t(583),c={},m=i&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,f=!1,_=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){f=t;var o=u(e,n);return r(o),function(n){for(var t=[],a=0;a<o.length;a++){var s=o[a],l=c[s.id];l.refs--,t.push(l)}n?(o=u(e,n),r(o)):o=[];for(var a=0;a<t.length;a++){var l=t[a];if(0===l.refs){for(var i=0;i<l.parts.length;i++)l.parts[i]();delete c[l.id]}}}};var g=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},583:function(e,n){e.exports=function(e,n){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],s=a[0],l=a[1],i=a[2],u=a[3],c={id:e+":"+o,css:l,media:i,sourceMap:u};r[s]?r[s].parts.push(c):t.push(r[s]={id:s,parts:[c]})}return t}},617:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{ruleForm:{m_name:"",goods_id:"",m_key:"",remark:""},ruleForm2:{mp_name:"",m_key:"",mp_key:"",mp_val:"",mp_group:"",mp_status:"",unique:"",remark:""},rules:{m_name:[{required:!0,message:"请输入模型名称",trigger:"blur"}],m_key:[{required:!0,message:"输入模型Key",trigger:"blur"}],goods_id:[{required:!0,message:"输入模型ID",trigger:"blur"}]},rules2:{mp_name:[{required:!0,message:"请输入Part名称",trigger:"blur"}],m_key:[{required:!0,message:"输入模型Key",trigger:"blur"}],mp_key:[{required:!0,message:"输入Part Key",trigger:"blur"}],mp_val:[{required:!0,message:"输入Part Val",trigger:"blur"}],mp_group:[{required:!0,message:"输入Part Group",trigger:"blur"}],mp_status:[{required:!0,message:"输入Part Status",trigger:"blur"}],unique:[{required:!0,message:"输入 unique",trigger:"blur"}]}}},methods:{submitForm:function(e){var n=this;this.$refs[e].validate(function(t){t&&n.$https.submit("/api/model/create",n.ruleForm).then(function(t){n.$message({message:t.msg,type:"success"}),n.resetForm(e)},function(e){n.$message({message:e.msg,type:"warning"})})})},submitForm2:function(e){var n=this;this.$refs[e].validate(function(t){t&&n.$https.submit("/api/model/addpart",n.ruleForm2).then(function(t){n.$message({message:t.msg,type:"success"}),n.resetForm(e)},function(e){n.$message({message:e.msg,type:"warning"})})})},resetForm:function(e){this.$refs[e].resetFields()}}}},618:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={components:{},data:function(){return{activeIndex:"1"}},created:function(){this.activeIndex=this.$route.name},methods:{handleSelect:function(e,n){}}}},619:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={components:{},data:function(){return{tableData:{rows:[],total:0},detailView:!1,chooseItem:{}}},mounted:function(){this.query()},methods:{query:function(){var e=this;this.$https.get("order/list",{user_id:100000001}).then(function(n){e.$set(e.tableData,"rows",n.info.list)})},getDetail:function(e,n,t,r){var o=this;this.$https.get("order/detail",{user_id:e,order_sn:n,m_key:t,goods_id:r}).then(function(e){o.chooseItem=e.info,o.chooseItem.partList=[];var n=JSON.parse(e.info.m_part);"[object Array]"==Object.prototype.toString.call(n)?o.chooseItem.partList=n:o.chooseItem.partList.push(n),o.detailView=!0})}}}},626:function(e,n,t){n=e.exports=t(578)(!0),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"menu.vue",sourceRoot:""}])},628:function(e,n,t){n=e.exports=t(578)(!0),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"order.vue",sourceRoot:""}])},663:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{"background-color":"#fff",height:"100%"}},[t("div",{staticStyle:{"font-size":"20px",padding:"10px",background:"#059dc1",color:"#FFF"}},[e._v("商品录入")]),e._v(" "),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"模型名称",prop:"m_name"}},[t("el-input",{model:{value:e.ruleForm.m_name,callback:function(n){e.ruleForm.m_name=n},expression:"ruleForm.m_name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"模型ID",prop:"goods_id"}},[t("el-input",{model:{value:e.ruleForm.goods_id,callback:function(n){e.ruleForm.goods_id=n},expression:"ruleForm.goods_id"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"模型KEY",prop:"m_key"}},[t("el-input",{model:{value:e.ruleForm.m_key,callback:function(n){e.ruleForm.m_key=n},expression:"ruleForm.m_key"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.remark,callback:function(n){e.ruleForm.remark=n},expression:"ruleForm.remark"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(n){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(n){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),e._v(" "),t("div",{staticStyle:{"font-size":"20px",padding:"10px",background:"#059dc1",color:"#FFF"}},[e._v("商品部件录入")]),e._v(" "),t("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,rules:e.rules2,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"模型KEY",prop:"m_key"}},[t("el-input",{model:{value:e.ruleForm2.m_key,callback:function(n){e.ruleForm2.m_key=n},expression:"ruleForm2.m_key"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"部件名称",prop:"mp_name"}},[t("el-input",{model:{value:e.ruleForm2.mp_name,callback:function(n){e.ruleForm2.mp_name=n},expression:"ruleForm2.mp_name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"部件KEY",prop:"mp_key"}},[t("el-input",{model:{value:e.ruleForm2.mp_key,callback:function(n){e.ruleForm2.mp_key=n},expression:"ruleForm2.mp_key"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"部件Val",prop:"mp_val"}},[t("el-input",{model:{value:e.ruleForm2.mp_val,callback:function(n){e.ruleForm2.mp_val=n},expression:"ruleForm2.mp_val"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"部件Group",prop:"mp_group"}},[t("el-input",{model:{value:e.ruleForm2.mp_group,callback:function(n){e.ruleForm2.mp_group=n},expression:"ruleForm2.mp_group"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"部件Status",prop:"mp_status"}},[t("el-input",{model:{value:e.ruleForm2.mp_status,callback:function(n){e.ruleForm2.mp_status=n},expression:"ruleForm2.mp_status"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Unique",prop:"unique"}},[t("el-input",{model:{value:e.ruleForm2.unique,callback:function(n){e.ruleForm2.unique=n},expression:"ruleForm2.unique"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"remark"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm2.remark,callback:function(n){e.ruleForm2.remark=n},expression:"ruleForm2.remark"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(n){e.submitForm2("ruleForm2")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(n){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},665:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[t("el-menu-item",{attrs:{index:"model"}},[t("router-link",{attrs:{to:"/manage/model",tag:"div"}},[e._v("模型管理")])],1),e._v(" "),t("el-menu-item",{attrs:{index:"order"}},[t("router-link",{attrs:{to:"/manage/order",tag:"div"}},[e._v("订单管理")])],1)],1),e._v(" "),t("router-view")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},667:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{"background-color":"#fff",height:"100%"}},[t("div",{staticStyle:{"font-size":"20px",padding:"10px",background:"#059dc1",color:"#FFF"}},[e._v("订单管理")]),e._v(" "),t("div",{staticStyle:{padding:"20px 10px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData.rows,border:""}},[t("el-table-column",{attrs:{label:"序号",width:"50"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n                    "+e._s(n.$index+1,n.row)+"\n                ")]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"order_sn",label:"订单号",width:"200"}}),e._v(" "),t("el-table-column",{attrs:{prop:"ud_name",label:"设计名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("a",{attrs:{href:"javascript:void (0)"},on:{click:function(t){e.getDetail(n.row.user_id,n.row.order_sn,n.row.m_key,n.row.goods_id)}}},[e._v(e._s(n.row.ud_name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"goods_id",label:"商品ID",width:"280"}}),e._v(" "),t("el-table-column",{attrs:{prop:"m_key",label:"模型KEY",width:"180"}}),e._v(" "),t("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),t("el-table-column",{attrs:{prop:"remark",width:"100",label:"下载素材"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("a",{attrs:{href:"javascript:void (0)"},on:{click:function(t){e.getDetail(n.row.order_sn,n.row.m_key,n.row.goods_id)}}},[e._v("下载")])]}}])})],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"订单详情",visible:e.detailView,width:"50%","custom-class":"preview-dialog",center:""},on:{"update:visible":function(n){e.detailView=n}}},[t("div",[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-row",[t("el-col",{attrs:{span:8}},[e._v("\n                            订单编号\n                        ")]),e._v(" "),t("el-col",{attrs:{span:16}},[e._v("\n                            "+e._s(e.chooseItem.order_sn)+"\n                        ")])],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-row",[t("el-col",{attrs:{span:8}},[e._v("\n                            商品ID\n                        ")]),e._v(" "),t("el-col",{attrs:{span:16}},[e._v("\n                            "+e._s(e.chooseItem.goods_id)+"\n                        ")])],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-row",[t("el-col",{attrs:{span:8}},[e._v("\n                            模型编号\n                        ")]),e._v(" "),t("el-col",{attrs:{span:16}},[e._v("\n                            "+e._s(e.chooseItem.m_key)+"\n                        ")])],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-row",[t("el-col",{attrs:{span:8}},[e._v("\n                            设计名称\n                        ")]),e._v(" "),t("el-col",{attrs:{span:16}},[e._v("\n                            "+e._s(e.chooseItem.ud_name)+"\n                        ")])],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-row",[t("el-col",{attrs:{span:4}},[e._v("\n                            备注\n                        ")]),e._v(" "),t("el-col",{attrs:{span:20}},[e._v("\n                            "+e._s(e.chooseItem.m_key)+"\n                        ")])],1)],1)],1),e._v(" "),t("el-row",[t("el-table",{attrs:{border:"",data:e.chooseItem.partList}},[t("el-table-column",{attrs:{prop:"partName",label:"部件名称",width:"200"}}),e._v(" "),t("el-table-column",{attrs:{prop:"color",label:"颜色",width:"120"}}),e._v(" "),t("el-table-column",{attrs:{prop:"rects",label:"渲染参数",width:"300"},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n                            "+e._s(JSON.stringify(n.row))+"\n\n                        ")]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"rects",label:"素材"},scopedSlots:e._u([{key:"default",fn:function(n){return e._l(n.row.rects,function(n,r){return t("p",{key:r,staticStyle:{}},[t("span",[t("img",{attrs:{width:"50px",src:"/api/uploads/ui_ziyuan/"+n.image}})]),t("a",{staticStyle:{float:"right"},attrs:{href:"/api/uploads/ui_ziyuan/"+n.image,target:"_blank"}},[e._v("下载")])])})}}])})],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center",padding:"4px"},slot:"footer"},[t("el-button",{attrs:{type:"success"},on:{click:function(n){e.detailView=!1}}},[e._v("确定")])],1)])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},686:function(e,n,t){var r=t(626);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(579)("1bd8bc11",r,!1)},688:function(e,n,t){var r=t(628);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(579)("1ae6aaf8",r,!1)}});