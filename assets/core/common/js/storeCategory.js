!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=57)}({0:function(e,t,r){e.exports=r(1)(0)},1:function(e,t){e.exports=_xe_dll_common},2:function(e,t,r){e.exports=r(1)(6)},57:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),a=r(0),u=r.n(a),c=r(6);window.jQuery("#btnCreateCategory").on("click",(function(e){var t,r=e.target,n=o()(t=u()(r).closest("form")).call(t,'[name="id"]').val(),a={};c.default.app("Griper").then((function(e){n?e.form.fn.clear(u()(r).closest("form")):e.form(u()(r),"You must first create a category ID.")})),a.categoryName=n,c.default.post("fieldType.storeCategory",a).then((function(e){var t=u()(r).closest(".__xe_df_category");o()(t).call(t,'[name="category_id"]').val(e.data.id),o()(t).call(t,"button").hide(),t.append(u()("<a>").text(c.default.Lang.trans("xe::categoryManagement")).prop("target","_blank").prop("href","/settings/category/"+e.data.id))}))}))},6:function(e,t,r){e.exports=r(1)(530)}});