(this["webpackJsonpdesafio-dextra"]=this["webpackJsonpdesafio-dextra"]||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/search.e8773304.svg"},21:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(16),o=t.n(r),m=(t(26),t(10)),s=t(1),l=(t(7),function(e){return c.a.createElement("input",e)}),i=t(17),u=t.n(i),p=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("section",{className:"max-width"},c.a.createElement("p",{className:"logo"},"MARVEL"),c.a.createElement("label",{className:"label-header"},c.a.createElement(l,{className:"input-header",placeholder:"Pesquise personagens..."}),c.a.createElement("img",{className:"search-icon",alt:"search",src:u.a}))))},h=function(e){return c.a.createElement("button",e,e.name)},f=function(e){return c.a.createElement("div",{className:"max-width-button"},c.a.createElement(h,{className:e.page<=0?"diplay-none":"button-comics",name:"Previous",onClick:function(){return e.previous("Previous")}}),c.a.createElement(h,{className:"button-comics",name:"Next",onClick:function(){return e.next("Next")}}),c.a.createElement("p",{className:"p-margin p-font-body p-align"},"Page: ",e.page))},E=t(20),d=t(11),b=t.n(d),g=t(18),v=function(){var e=Object(g.a)(b.a.mark((function e(a){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e&limit=10&offset=".concat(10*a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}(),N=function(e){var a=Object(n.useState)([]),t=Object(E.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){v(e.pageNumber).then((function(e){o(e.data.results)}))}),[e.pageNumber]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"max-width-main"},r.map((function(e,a){return c.a.createElement("div",{className:"each-comic",key:a},c.a.createElement("img",{alt:e.title,src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),className:"thumbnails"}),c.a.createElement("p",{className:"p-margin p-font-bold"},e.title),0===e.creators.items.length?c.a.createElement("p",{className:"p-margin"}):c.a.createElement("p",{className:"p-margin p-font-body"},e.creators.items.map((function(e,a){return c.a.createElement("span",{className:"list-creator",key:a},e.name,"/ ")}))))}))))},x=function(e){var a=e.match,t=parseInt(a.params.page)||0,n=Object(s.g)(),r=function(e){"Previous"===e?t>=0&&n.push("/home/".concat(t-1)):n.push("/home/".concat(t+1))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement("section",{className:"main-comics"},c.a.createElement(N,{pageNumber:t}),c.a.createElement(f,{previous:r,next:r,page:t})))},w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement("div",{className:"main-comics"},"Ol\xe1"))};var k=function(){return c.a.createElement(m.a,null,c.a.createElement(s.d,null,c.a.createElement(s.a,{exact:!0,from:"/",to:"/home"}),c.a.createElement(s.b,{path:"/home",exact:!0,component:x}),c.a.createElement(s.b,{path:"/home/:page",component:x}),c.a.createElement(s.b,{path:"/detailed",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){}},[[21,1,2]]]);
//# sourceMappingURL=main.90c7a5d5.chunk.js.map