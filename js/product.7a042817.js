(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{b0c0:function(t,e,r){var n=r("83ab"),s=r("9bf2").f,a=Function.prototype,o=a.toString,i=/^\s*function ([^ (]*)/,c="name";n&&!(c in a)&&s(a,c,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},b1e7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsSAAALEgHS3X78AAAEDUlEQVRYha2YS0wTURSGf4aCtAIt8goaHViYCIkRYUcwkJiQEDaoCxMkUonuDGCiMaY+MKbqQgNRdhIzLnBHwAUbjIJGXSnBDbpCBjWFyKNVAqU8as4wU6bTOzOdtl8yi7lz5/bvmXPOPeemhcNhJILocdcDoMsFoFK1hB/ApHLxXmHG6vKWRMlC3ACaAThpjMtyoLC1A1llR7AdXMPyyABWJj6oX/sKQKCL9wr+lImSxXQDqNM+I0GO8qqosd+PrmJzeUE7NQCgly4zcZyJGJfocdNCYyxBRFZZecyYzVXAmkqWvUOfVP6T1kWJHjf5yTiATqMFgj++xYxtB1eNXuEBjIked5clUSpBx4xWJwJvhiVfUiB/CvlmzV4jekSPW2A9iPEp+mQAZhRHjhdy9E3/AsuXzLjCe4VeM1GTWgtllhyC82SzFGlWSXfkIN2ZJ7214ZvFXP9D1gqneK8wzBQletzdsjNGceDaY9hc+ZYFsVj5/B6LQ8+1TygyS5WojPiU6HGXsgRBiqbUCCIy8otYw045XQAaR+/WW0jtyMmytaYbmW2yYXZEyTdterMpS6dCWDi0Lq1lgJQmbPLzZqOZFOarUxOSw5uRW9cE++GjMbO214PwPb2JTf+i0Qq0hXXZVDeGUEIM/vhuOCe3poEpiJh/dj+edOGkbK/4lGmSNMNRUYW8phbmrMXB/ngTKlHPme1D8ZBRtB/5Zy4xZ/77NKqtGsyoNNyQ42UrsITgdOweSGKWRl5aXc7FyYVaUpAT/xl4EiUg5PuJZeuCiNKkLJXXeBaZJQcj9/SpfH23EJr7hfn+B2bVgh58wqIo0nJrG1Fy+R5yahoi42QhX9/tRAURIieXKJbQRtq+phYUnusAl2XfGQhvJyqImLFsKUqgrEgjodnVJ5IRo+DneK8Qt6WodCm+eGPXIioo0v5+HE2FqEnFUu+SEZREpLEYVraZYb3GQCH/dHtUpCnQJut/PRjXvmi2TZGT815hUhFFtXKP3syi1g7YNW2UQlrmHhSd1+0BoiCLmqQKqWaXPp9c8b3Qm6knyCpk6eyqWr23lL4wpsgLpOTXDeDsunV+b0w5LPf8zOozvLGRMlHBaaZfiepymNXNjGudnmr04vbr4PZmS/6QQBslQdsQFYsMjpODG4lyxduIRkTnFUitOgm2UDcpXOC9QlRTyjzgsCKMmtDC1s5I/qIkSkVdooKg17bLDlcvH+MYstOk7iZUii4SakJAT5CuKEUY7xXoTOGu0fqZJbyZAC30R+v1BBmKUomjiCzTy2OrU19ixuhMgYEoW6dS7dQsrJ7kUX9I6ZtaMslEtCdSGeOoqJaiMvB2SBthr2gbM7KMlmTOPEkgfV71eaeCdO5ppQKJAOA/rnefpavvOBQAAAAASUVORK5CYII="},d2f1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{id:"product"}},[n("b-overlay",{attrs:{show:!t.sell},scopedSlots:t._u([{key:"overlay",fn:function(){return[n("h1",[t._v("已下架")])]},proxy:!0}])},[n("b-row",[n("b-col",{staticClass:"d-flex justify-content-center justify-content-md-end",attrs:{cols:"12",md:"6"}},[n("div",{attrs:{id:"img"}},[n("img",{attrs:{src:t.image}})])]),n("b-col",{staticClass:"d-flex flex-column align-items-start",attrs:{id:"text",cols:"12",md:"6"}},[n("p",{attrs:{id:"title"}},[t._v(t._s(t.name))]),n("p",[t._v(t._s(t.description))]),n("div",{attrs:{id:"price"}},[n("img",{attrs:{src:r("b1e7")}}),t._v(t._s(t.price))])]),n("b-col",{staticClass:"d-flex justify-content-center",attrs:{cols:"12"}},[n("b-btn",{attrs:{id:"exchange-btn"},on:{click:function(e){return t.exchange()}}},[t._v("立即兌換")])],1)],1)],1)],1)},s=[],a=r("1da1"),o=(r("b0c0"),r("a4d3"),r("e01a"),r("99af"),r("96cf"),{name:"Product",data:function(){return{name:"",price:"",description:"",image:"",sell:!0,users:[]}},methods:{exchange:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.$store.state.jwt.token.length){e.next=4;break}return t.$swal({icon:"error",title:"錯誤",text:"請先登入"}),t.$router.push("/login"),e.abrupt("return");case 4:if(e.prev=4,!(t.users.points<t.price)){e.next=8;break}return t.$swal({icon:"error",title:"錯誤",text:"剩餘點數不足"}),e.abrupt("return");case 8:return e.next=10,t.axios.post("/orders",{products:t.$route.params.id},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 10:return r=t.users.points-t.price,e.next=13,t.axios.patch("/users/exchange/"+t.users._id,{points:r},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 13:t.$swal({icon:"success",title:"成功",text:"兌換成功，剩餘 Z 幣 ".concat(r)}),e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](4),console.log(e.t0),t.$swal({icon:"error",title:"錯誤",text:"兌換失敗"});case 20:case"end":return e.stop()}}),e,null,[[4,16]])})))()}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.get("/products/"+t.$route.params.id);case 3:return r=e.sent,n=r.data,t.name=n.result.name,t.price=n.result.price,t.description=n.result.description,t.image="".concat("https://frontclass-zerozero.herokuapp.com","/files/").concat(n.result.image),t.sell=n.result.sell,document.title="".concat(t.name," | 購物網"),e.next=13,t.axios.get("/users",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 13:return s=e.sent,t.users=s.data.result,e.abrupt("return",t.users);case 18:e.prev=18,e.t0=e["catch"](0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})))()}}),i=o,c=r("2877"),u=Object(c["a"])(i,n,s,!1,null,null,null);e["default"]=u.exports},e01a:function(t,e,r){"use strict";var n=r("23e7"),s=r("83ab"),a=r("da84"),o=r("5135"),i=r("861d"),c=r("9bf2").f,u=r("e893"),l=a.Symbol;if(s&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var p={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(p[e]=!0),e};u(d,l);var m=d.prototype=l.prototype;m.constructor=d;var f=m.toString,h="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=f.call(t);if(o(p,t))return"";var r=h?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}}}]);
//# sourceMappingURL=product.7a042817.js.map