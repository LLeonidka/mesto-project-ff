/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(r){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new A(n||[]);return u(i,"_invoke",{value:C(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function S(){}var w={};p(w,c,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(P([])));L&&L!==o&&i.call(L,c)&&(w=L);var E=S.prototype=b.prototype=Object.create(w);function q(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(o,u,a,c){var s=d(e[o],e,u);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==t(p)&&i.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;u(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function C(t,e,n){var o=h;return function(i,u){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw u;return{value:r,done:!0}}for(n.method=i,n.arg=u;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===_)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,_;var u=i.arg;return u?u.done?(e[t.resultName]=u.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):u:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,u=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return u.next=u}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=S,u(E,"constructor",{value:S,configurable:!0}),u(S,"constructor",{value:g,configurable:!0}),g.displayName=p(S,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,p(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},q(k.prototype),p(k.prototype,s,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var u=new k(f(t,e,r,o),i);return n.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},q(E),p(E,l,"Generator"),p(E,c,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=P,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var c=i.call(u,"catchLoc"),s=i.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var u=t.apply(e,n);function a(t){r(u,o,i,a,c,"next",t)}function c(t){r(u,o,i,a,c,"throw",t)}a(void 0)}))}}var o="https://nomoreparties.co/v1/wff-cohort-11",i="7d389222-4963-4e60-abeb-254664ef8ba1";function u(t){return a.apply(this,arguments)}function a(){return(a=n(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.ok){t.next=6;break}return t.next=3,r.json();case 3:return t.abrupt("return",t.sent);case 6:return t.abrupt("return",Promise.reject("Ошибка: ".concat(r.status)));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return s.apply(this,arguments)}function s(){return(s=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/users/me",{headers:{authorization:i}});case 2:return r=t.sent,t.abrupt("return",u(r));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=n(e().mark((function t(r,n){var a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/users/me",{method:"PATCH",headers:{authorization:i,"Content-Type":"application/json"},body:JSON.stringify({name:r,about:n})});case 2:return a=t.sent,t.abrupt("return",u(a));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/cards",{headers:{authorization:i}});case 2:return r=t.sent,t.abrupt("return",u(r));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return(d=n(e().mark((function t(r,n){var a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/cards",{body:JSON.stringify({name:r,link:n}),method:"POST",headers:{authorization:i,"Content-Type":"application/json"}});case 2:return a=t.sent,t.abrupt("return",u(a));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/cards/"+r,{method:"DELETE",headers:{authorization:i}});case 2:return n=t.sent,t.abrupt("return",u(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/cards/likes/"+r,{method:"PUT",headers:{authorization:i}});case 2:return n=t.sent,t.abrupt("return",u(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return(v=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/cards/likes/"+r,{method:"DELETE",headers:{authorization:i}});case 2:return n=t.sent,t.abrupt("return",u(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(o+"/users/me/avatar",{method:"PATCH",headers:{authorization:i,"Content-Type":"application/json"},body:JSON.stringify({avatar:r})});case 2:return n=t.sent,t.abrupt("return",u(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){t.classList.add("popup_is-opened"),t.classList.add("popup_is-animated"),window.addEventListener("keydown",g)}function b(t){t.classList.remove("popup_is-opened"),t.classList.remove("popup_is-animated"),window.removeEventListener("keydown",g)}function g(t){"Escape"===t.key&&b(document.querySelector(".popup_is-opened"))}var S,w,x,L,E,q,k,C=function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r),o.classList.remove(n),o.textContent=""},j=function(t,e,r,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),!e.validity.valid||e.validity.tooShort?function(t,e,r,n,o){var i=t.querySelector(".".concat(e.id,"-error"));e.classList.add(r),i.textContent=n,i.classList.add(o)}(t,e,r,e.validationMessage,n):C(t,e,r,n)},O=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r)):(e.disabled=!0,e.classList.add(r))};w=(S={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}).formSelector,x=S.inputSelector,L=S.submitButtonSelector,E=S.inactiveButtonClass,q=S.inputErrorClass,k=S.errorClass,Array.from(document.querySelectorAll(w)).forEach((function(t){!function(t,e,r,n,o,i){var u=Array.from(t.querySelectorAll(e)),a=t.querySelector(r);O(u,a,n),u.forEach((function(e){e.addEventListener("input",(function(){j(t,e,o,i),O(u,a,n)}))}))}(t,x,L,E,q,k),t.addEventListener("submit",(function(e){e.preventDefault(),Array.from(this.querySelectorAll(x)).forEach((function(e){j(t,e,q,k)}))}))}));var T=function(t,e){var r=t.querySelectorAll(e.inputSelector),n=t.querySelector(e.submitButtonSelector);r.forEach((function(r){r.classList.remove(e.inputErrorClass),r.value="",C(t,r)})),t.classList.remove(e.errorClass),n.classList.add(e.inactiveButtonClass),n.disabled=!0},A=document.querySelector(".popup_type_image"),P=(document.querySelectorAll(".popup"),document.querySelector(".profile__add-button")),B=document.querySelector(".popup_type_new-card"),N=document.querySelectorAll(".popup__close"),z=document.querySelector(".profile__edit-button"),G=document.querySelector(".popup_type_edit"),D=document.querySelector(".popup__input_type_card-name"),F=document.querySelector(".popup__input_type_url"),I=(document.querySelector('form[name="edit-profile"]'),document.querySelector(".popup__input_type_name")),M=document.querySelector(".popup__input_type_description"),H=document.querySelector(".profile__title"),J=document.querySelector(".profile__description"),V=document.querySelector(".profile__image"),Y=document.querySelector('form[name="edit-profile"]'),U=document.querySelector(".popup_type_avatar"),K=document.querySelector('form[name="edit-avatar"]'),Q=document.querySelector(".profile__image-container"),R=document.querySelector(".popup__input_type_url"),W=document.querySelector('form[name="new-place"]'),X=document.querySelectorAll(".popup");function Z(t,e){H.textContent=t,J.textContent=e}function $(t){_(A),A.querySelector("img").src=t.link,A.querySelector(".popup__caption").textContent=t.name,A.querySelector("img").alt=t.name}function tt(t){var e=document.querySelector(".places__list");e.innerHTML="",t.forEach((function(t){var r=function(t,e,r,n){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),i=o.querySelector(".card__image");i.src=t.link,i.alt=t.name,o.querySelector(".card__title").textContent=t.name;var u=o.querySelector(".card__like-button"),a=o.querySelector(".card__delete-button"),s=!1;u.addEventListener("click",(function(){s?function(t){return v.apply(this,arguments)}(t._id).then((function(t){u.classList.remove("card__like-button_is-active"),console.log(t),s=!1,l.textContent=t.likes.length})):function(t){return y.apply(this,arguments)}(t._id).then((function(t){u.classList.add("card__like-button_is-active"),console.log(t),s=!0,l.textContent=t.likes.length}))})),c().then((function(e){e.name===t.owner.name?a.addEventListener("click",(function(){r(o)})):a.remove(),t.likes.find((function(t){return t.name===e.name}))&&(u.classList.toggle("card__like-button_is-active"),s=!0,l.textContent=t.likes.length)}));var l=o.querySelector(".card__like-counter");return l.textContent=t.likes.length,i.addEventListener("click",(function(){n(t)})),o}(t,0,(function(e){(function(t){return h.apply(this,arguments)})(t._id).then((function(t){console.log(t),e.remove()}))}),$);console.log(r),e.append(r)}))}K.addEventListener("submit",(function(t){t.preventDefault();var e=R.value;console.log(e),K.querySelector(".button").textContent="Сохранение...",function(t){return m.apply(this,arguments)}(e).then((function(t){var r;r=e,V.style.backgroundImage="url("+r+")",b(U)})).catch((function(t){console.log(t)})).finally((function(){K.querySelector(".button").textContent="Сохранить"}))})),Y.addEventListener("submit",(function(t){t.preventDefault();var e=I.value,r=M.value;Y.querySelector(".button").textContent="Сохранение...",function(t,e){return l.apply(this,arguments)}(e,r).then((function(t){b(document.querySelector(".popup_is-opened")),Z(e,r),console.log(t)})).catch((function(t){console.log(t)})).finally((function(){Y.querySelector(".button").textContent="Сохранить"}))})),P.addEventListener("click",(function(){_(B),T(W,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"})})),z.addEventListener("click",(function(){_(G),T(Y,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),I.value=H.textContent,M.value=J.textContent})),N.forEach((function(t){return t.addEventListener("click",(function(){return b(document.querySelector(".popup_is-opened"))}))})),Q.addEventListener("click",(function(){_(U),T(K,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"})})),W.addEventListener("submit",(function(t){t.preventDefault();var e=D.value,r=F.value;W.querySelector(".button").textContent="Сохранение...",function(t,e){return d.apply(this,arguments)}(e,r).then((function(t){b(document.querySelector(".popup_is-opened")),D.value="",F.value="",p().then((function(t){tt(t)})).catch((function(t){console.log(t)})).finally((function(){W.querySelector(".button").textContent="Сохранить"}))}))})),X.forEach((function(t){return t.addEventListener("click",(function(e){e.target==t&&b(document.querySelector(".popup_is-opened"))}))})),c().then((function(t){Z(t.name,t.about)})).catch((function(t){console.log(t)})),p().then((function(t){tt(t)})).catch((function(t){console.log(t)}))})();