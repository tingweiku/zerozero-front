(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"login"}},[r("p",{staticClass:"title"},[t._v("會員登入")]),r("div",{attrs:{id:"wrap"}}),r("div",{attrs:{id:"loginbox"}},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{cols:"9"}},[r("b-form",{attrs:{id:"form-login"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"帳號","label-for":"input-account",state:t.state.account,"invalid-feedback":"帳號格式不正確"}},[r("b-form-input",{attrs:{id:"input-account",type:"text",required:"",placeholder:"請輸入帳號",state:t.state.account},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),r("b-form-group",{attrs:{label:"密碼","label-for":"input-password",state:t.state.password,"invalid-feedback":"密碼格式不正確"}},[r("b-form-input",{attrs:{id:"input-password",type:"password",required:"",placeholder:"請輸入密碼",state:t.state.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("div",{staticClass:"text-center"},[r("b-btn",{staticClass:"mt-5 d-block w-100",attrs:{id:"btn-login",type:"submit"}},[t._v("登入")])],1),r("div",{attrs:{id:"link"}},[r("router-link",{attrs:{to:"/register"}},[t._v("會員註冊")]),t._v("|"),r("router-link",{attrs:{to:"/"}},[t._v("忘記密碼")])],1)],1)],1)],1)],1),r("div",{attrs:{id:"content"}})])},s=[],n=r("1da1"),o=(r("96cf"),{data:function(){return{form:{account:"",password:""}}},computed:{state:function(){var t=this.form.account,e=this.form.password;return{account:0===t.length?null:t.length>=4&&t.length<=20,password:0===e.length?null:e.length>=4&&e.length<=20}}},methods:{submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("/users/login",t.form);case 3:r=e.sent,a=r.data,t.$swal({icon:"success",title:"成功",text:"登入成功"}),t.$store.commit("login",a),t.$router.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}}),i=o,c=r("2877"),l=Object(c["a"])(i,a,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=login.9d60170c.js.map