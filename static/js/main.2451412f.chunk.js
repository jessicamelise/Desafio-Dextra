(this["webpackJsonpdesafio-dextra"]=this["webpackJsonpdesafio-dextra"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(11),n(12),n(5)),s=n(1),l=n.n(s),u=n(4),m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e&limit=10&offset=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("We got a problem to fetch the information",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();var f=function(){return r.a.createElement("div",null,function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){m(1).then((function(e){c(e.data.results)}))}),[]),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.id),r.a.createElement("p",null,e.title),r.a.createElement("img",{alt:e.title,scr:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension)}),0===e.creators.items.length?r.a.createElement("p",null,"n\xe3o encontrado"):e.creators.items.map((function(e,t){return r.a.createElement("p",{key:t},e.name)})))})))}())};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.2451412f.chunk.js.map