(window["webpackJsonpjacquline-images"]=window["webpackJsonpjacquline-images"]||[]).push([[0],{128:function(e,t,a){e.exports=a(161)},152:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),i=a.n(r),l=a(20),o=a.n(l),s=a(32),u=a.n(s),m=a(26),p=a(49),d=a.n(p),f=a(48),E=a.n(f),b=(a(134),a(25)),h=a.n(b),g=a(22),v=a.n(g),j=a(43),w=a.n(j),k=a(33),O=a.n(k),x=a(40),y=a.n(x),P=a(42),C=a.n(P),U=a(41),_=a.n(U),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(O.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(y.a,{before:n.photo_200?c.a.createElement(_.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(O.a,{title:"Navigation Example"},c.a.createElement(C.a,null,c.a.createElement(w.a,{size:"xl",level:"2",onClick:a,"data-to":"Counter"},"Show me the PlushPl, please"))))},I=a(34),K=a(47),S=a.n(K),V=a(44),N=a.n(V),W=a(45),q=a.n(W),z=a(46),J=a.n(z),T=(a(152),Object(I.b)()),B=function(e){return c.a.createElement(h.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(S.a,{onClick:e.go,"data-to":"home"},T===I.a?c.a.createElement(N.a,null):c.a.createElement(q.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:J.a,alt:"Persik The Cat"}))},D=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(m.a)(i,2),s=l[0],p=l[1],f=Object(n.useState)(c.a.createElement(E.a,{size:"large"})),b=Object(m.a)(f,2),h=b[0],g=b[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,p(e),g(null);case 5:case"end":return t.stop()}}))}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(d.a,{activePanel:a,popout:h},c.a.createElement(A,{id:"home",fetchedUser:s,go:v}),c.a.createElement(B,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(D,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[128,1,2]]]);
//# sourceMappingURL=main.60143aae.chunk.js.map