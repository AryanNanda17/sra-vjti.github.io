_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"017J":function(e,n,t){"use strict";t.r(n);var i=t("mC2l"),a=t("nkaK"),s=t.n(a),c=t("f0do"),r=t("KSab"),o=t("nKUr"),l=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{imgName:"teachers-hero.jpg",backgroundPosition:"center top",title:Object(o.jsx)(o.Fragment,{children:"Teachers Incharge"}),subtitleList:[""],isHome:!1}),Object(o.jsx)("div",{className:s.a.teachers,id:"is",children:r.l.map((function(e,n){return Object(o.jsx)(c.a,{index:n,name:e.name,sub:e.sub,imgName:e.imgName,linkedInLink:e.linkedInLink,githubLink:e.githubLink},"farculty_incharge_".concat(n))}))})]})};n.default=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,{})})}},"Tu/p":function(e,n,t){e.exports={hero:"Hero_hero__1fVUa",heroHead:"Hero_heroHead__12Yiw",heroSub:"Hero_heroSub__3-rrY",notif:"Hero_notif__yKDqh",wobble:"Hero_wobble__DlBEw","scroll-indicator":"Hero_scroll-indicator__1OdvK",bounce:"Hero_bounce__22czQ",is:"Hero_is__2c_Nk",caption:"Hero_caption__1RLmY",captionHead:"Hero_captionHead__bPVFr",captionSub:"Hero_captionSub__-hd2G",scrollIndicator:"Hero_scrollIndicator__zJATM"}},f0do:function(e,n,t){"use strict";var i=t("y9D+"),a=t.n(i),s=t("IP2g"),c=t("8tEE"),r=t("nKUr"),o=function(e){var n=e.linkedInLink;return""!==n?Object(r.jsx)("a",{href:n,target:"blank",children:Object(r.jsx)(s.a,{icon:c.d})}):null},l=function(e){var n=e.githubLink;return""!==n?Object(r.jsx)("a",{href:n,target:"blank",children:Object(r.jsx)(s.a,{icon:c.b})}):null};n.a=function(e){var n=e.index,t=e.imgName,i=e.name,s=e.sub,c=e.linkedInLink,d=e.githubLink;return Object(r.jsxs)("div",{className:n%2==0?a.a.person:a.a.personr,children:[Object(r.jsx)("div",{style:{backgroundImage:'url("/static/images/'.concat(t,'")')},className:a.a.personImg}),Object(r.jsxs)("div",{className:a.a.personCont,children:[Object(r.jsx)("div",{className:a.a.personContName,children:i}),Object(r.jsx)("div",{className:a.a.personContSub,children:s}),Object(r.jsxs)("div",{className:a.a.links,children:[Object(r.jsx)(o,{linkedInLink:c}),Object(r.jsx)(l,{githubLink:d})]})]})]})}},lX3S:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teams/teacherincharge",function(){return t("017J")}])},mC2l:function(e,n,t){"use strict";var i=t("Tu/p"),a=t.n(i),s=t("IP2g"),c=t("wHSu"),r=t("q1tI"),o=t("DWWe"),l=t("nKUr");n.a=function(e){var n=e.imgName,t=e.title,i=e.subtitleList,d=e.isHome,b=e.backgroundPosition,u=void 0===b?"center":b,j=Object(r.useState)("none"),_=j[0],h=j[1],m=Object(r.useState)(n),g=m[0],p=m[1],O=Object(o.a)();return Object(r.useEffect)((function(){O.width<780&&p("landing-hero4.png")}),[O]),Object(r.useEffect)((function(){setTimeout((function(){h("")}),2e3)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:{backgroundImage:'linear-gradient(\n                            to bottom,\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5)), url("/static/images/hero/'.concat(g,'")'),backgroundPosition:u},className:a.a.hero,children:[Object(l.jsx)("div",{className:a.a.heroHead,children:t}),Object(l.jsx)("div",{className:a.a.heroSub,children:i.map((function(e,n){return i.length!==n+1?Object(l.jsxs)("span",{children:[e,"\xa0\xa0\u2022\xa0\xa0"]},"hero_".concat(n)):Object(l.jsx)("span",{children:e},"hero_".concat(n))}))}),Object(l.jsx)("a",{href:"#is",children:Object(l.jsx)("div",{className:a.a.scrollIndicator})}),d&&Object(l.jsx)("a",{href:"#notifs",className:a.a.notif,style:{display:_},children:Object(l.jsx)(s.a,{icon:c.a})})]}),d&&Object(l.jsxs)("div",{className:a.a.is,id:"is",children:[Object(l.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/ideate.png")'},className:a.a.caption,children:[Object(l.jsx)("div",{className:a.a.captionHead,children:"Ideate"}),Object(l.jsx)("div",{className:a.a.captionSub,children:"Changing the world, one solution at a time."})]}),Object(l.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000098, #00000098),\n\t\turl("/static/images/innovate.png")'},className:a.a.caption,children:[Object(l.jsx)("div",{className:a.a.captionHead,children:"Innovate"}),Object(l.jsx)("div",{className:a.a.captionSub,children:"Creativity is thinking up new things. Innovation is doing new things."})]}),Object(l.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/inspire.png")'},className:a.a.caption,children:[Object(l.jsx)("div",{className:a.a.captionHead,children:"Inspire"}),Object(l.jsx)("div",{className:a.a.captionSub,children:"Don't inspire by being perfect, inspire by embracing your imperfections."})]})]})]})}},nkaK:function(e,n,t){},"y9D+":function(e,n,t){e.exports={person:"Person_person__rWuoY",personImg:"Person_personImg__rnqgu",personr:"Person_personr__3_TAL",personCont:"Person_personCont__2GxaU",personContName:"Person_personContName__3oVHz",personContSub:"Person_personContSub__jqZWS",links:"Person_links__1yFih"}}},[["lX3S",0,1,4,6,2,3]]]);