!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(l,a,function(t){return e[t]}.bind(null,a));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=78)}({1:function(e,t){e.exports=_xe_dll_common},2:function(e,t,n){e.exports=n(1)(4)},28:function(e,t,n){e.exports=n(1)(67)},29:function(e,t,n){e.exports=n(1)(13)},6:function(e,t,n){e.exports=n(1)(17)},78:function(e,t,n){"use strict";n.r(t);var l,a,i,s,r,o,c,u=n(6),d=n.n(u),p=n(28),m=n.n(p),f=n(29),b=n.n(f),_=n(2),g=n.n(_),h=(l=window.XE,a=window.jQuery,s=a(),r=[],o="",c="",{init:function(e){return i=this,s=e.$wrapper,o=e.email,c=e.userId,s.on("click",".btnDeleteEmail",(function(e){e.preventDefault(),a(this).css({display:"none"}).siblings().css({display:"inline-block"})})),s.on("click",".btnDeleteEmailConfirm",(function(e){var t;e.preventDefault();var n=a(this),l=g()(t=n.closest("li.list-group-item")).call(t,"[name=email]").val();i.delete(l)})),s.on("click",".btnDeleteEmailCancle",(function(e){var t;e.preventDefault();var n=a(this);n.siblings().addBack().hide(),g()(t=n.parent()).call(t,".btnDeleteEmail").show()})),s.on("click","#__xe_emailAddBtn",(function(){var e=a("#__xe_addedEmailInput"),t=e.val();t&&(e.val(""),i.add(t))})),s.on("change","[name=email]",(function(e){var t=a(this).closest("li.list-group-item"),n=t.closest("ul");t.siblings().each((function(){var e=a(this);g()(e).call(e,"> span.pull-right").length||e.append('<span class="pull-right"><a href="#" class="btn btn-sm btn-link btnDeleteEmail" style="display: inline-block;">삭제</a><a href="#" class="btn btn-sm btn-link btnDeleteEmailConfirm" style="display: none;">삭제확인</a><a href="#" class="btn btn-sm btn-link btnDeleteEmailCancle" style="display: none;">취소</a></span>')})),g()(t).call(t,"> span.pull-right").length>0&&g()(t).call(t,"> span.pull-right").remove(),n.prepend(t.detach())})),i.getEmailList(),this},getEmailList:function(){l.get("settings.user.mail.list",{userId:c}).then((function(e){r=e.data.mails,i.render(e.data.mails)})).catch((function(e){l.toast("danger",e,".__xe_alertEmailModal")}))},delete:function(e){l.post("settings.user.mail.delete",{userId:c,address:e}).then((function(t){var n=b()(r).call(r,e);m()(r).call(r,n,1),i.render(r),l.toast("success","삭제하였습니다.",".__xe_alertEmailModal")})).catch((function(e){l.toast("danger",e,".__xe_alertEmailModal")}))},add:function(e){l.post("settings.user.mail.add",{userId:c,address:e}).then((function(e){var t=e.data.mail;r.push(t),i.render(r),l.toast("success","추가되었습니다.",".__xe_alertEmailModal")})).catch((function(e){l.toast("danger",e,".__xe_alertEmailModal")}))},render:function(e){var t="";t+="<div>",e.length>0&&(t+='<ul class="list-group">',d()(e).call(e,(function(e,n){var l=e.address;t+='<li class="list-group-item clearfix">',t+='<label><input type="radio" name="email" value="'+l+'" '+(l===o?'checked="checked"':"")+"/> "+l+"</label>",e.address!==o&&(t+='<span class="pull-right">',t+='<a href="#" class="btn btn-sm btn-link btnDeleteEmail" style="display: inline-block;">삭제</a>',t+='<a href="#" class="btn btn-sm btn-link btnDeleteEmailConfirm" style="display: none;">삭제확인</a>',t+='<a href="#" class="btn btn-sm btn-link btnDeleteEmailCancle" style="display: none;">취소</a>',t+="</span>"),t+="</li>"})),t+="</ul>"),t+='<div class="input-group input-group-sm" style="margin-bottom: 20px;">',t+='<input type="text" class="form-control" id="__xe_addedEmailInput" placeholder="이메일을 입력하세요">',t+='<span class="input-group-btn"><buttion id="__xe_emailAddBtn" class="btn btn-default" type="button">추가</buttion></span>',t+="</div>",s.html(t)}});window.jQuery((function(e){e(".__xe_settingEmail").click((function(){e(".__xe_emailView").slideToggle(),e("#__xe_emailSetting").slideToggle()})),h.init({$wrapper:e("#__xe_emailSetting"),userId:e("#__xe_emailSetting").data("user-id"),email:e("#__xe_emailSetting").data("email")})}))}});