_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"9pnw":function(e,t,n){e.exports={aboutUs:"HomeAboutUs_aboutUs__1G9Ya",aboutUsMain:"HomeAboutUs_aboutUsMain__c3dQ9",aboutUsTeam:"HomeAboutUs_aboutUsTeam__3MrKU",aboutUsAlumni:"HomeAboutUs_aboutUsAlumni__wEvQY",ourProjects:"HomeAboutUs_ourProjects__2u4FV"}},R2UV:function(e,t,n){e.exports={notifs:"HomeNotifs_notifs__3FyiZ",notifsMain:"HomeNotifs_notifsMain__3ofOW",notif:"HomeNotifs_notif__29-eP"}},RNiq:function(e,t,n){"use strict";n.r(t);var c=n("mC2l"),a=n("KSab"),s=n("9pnw"),r=n.n(s),o=n("YFqc"),i=n.n(o),l=n("nKUr"),u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:r.a.aboutUs,children:[Object(l.jsxs)("div",{className:r.a.aboutUsMain,children:[Object(l.jsx)("h1",{children:"About Us"}),Object(l.jsx)("p",{children:a.d}),Object(l.jsx)("h1",{children:"About VJTI"}),Object(l.jsx)("p",{children:a.e})]}),Object(l.jsxs)("div",{className:r.a.aboutUsTeam,children:[Object(l.jsx)("p",{children:a.c}),Object(l.jsx)("img",{src:"/static/images/".concat(a.b.newgroup),alt:"SRA Team group photo"})]}),Object(l.jsxs)("div",{className:r.a.aboutUsAlumni,children:[Object(l.jsx)("p",{children:a.a}),Object(l.jsx)("img",{src:"/static/images/".concat(a.b.oldGroup),alt:"SRA Team group photo"})]})]}),Object(l.jsxs)("div",{className:r.a.ourProjects,children:[Object(l.jsx)("h1",{children:"Our Projects"}),Object(l.jsx)(i.a,{href:"/projects/flagship",children:Object(l.jsxs)("button",{children:["Flagship Projects \xa0",Object(l.jsx)("span",{children:"\u2192"})]})}),Object(l.jsx)(i.a,{href:"/projects/eklavya",children:Object(l.jsxs)("button",{children:["Eklavya Projects \xa0",Object(l.jsx)("span",{children:"\u2192"})]})}),Object(l.jsx)(i.a,{href:"/projects/ongoing",children:Object(l.jsxs)("button",{children:["Ongoing Projects \xa0",Object(l.jsx)("span",{children:"\u2192"})]})})]})]})},j=n("ouJ7"),d=n.n(j),h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:d.a.reach,children:[Object(l.jsx)("h1",{children:"Our Reach"}),Object(l.jsx)("div",{className:d.a.reachGroup,children:a.i.map((function(e,t){return Object(l.jsx)("a",{href:"".concat(a.j[t]),children:Object(l.jsx)("img",{src:"/static/images/reach/".concat(e),alt:"",className:d.a.reachImg},"alumni_reach_".concat(t))})}))})]})})},b=["espressif.png","texas.png","PCB_Power.jpeg"],f=["https://www.espressif.com/","https://www.ti.com/","https://www.pcbpower.com/"],p=n("nQJE"),m=n.n(p),_=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:m.a.reach,children:[Object(l.jsx)("h1",{children:"Our Sponsors"}),Object(l.jsx)("div",{className:m.a.reachGroup,children:b.map((function(e,t){return Object(l.jsx)("a",{href:"".concat(f[t]),children:Object(l.jsx)("img",{src:"/static/images/sponsors/".concat(e),alt:"",className:m.a.reachImg},"alumni_reach_".concat(t))})}))})]})})},O=n("R2UV"),g=n.n(O),x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:g.a.notifs,id:"notifs",children:[Object(l.jsx)("h1",{children:"Notifications"}),Object(l.jsx)("div",{className:g.a.notifsMain,children:a.p.map((function(e,t){return Object(l.jsx)("div",{className:g.a.notif,children:e},"notification_".concat(t))}))})]})})};t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.a,{imgName:"landing-hero.jpg",title:Object(l.jsxs)(l.Fragment,{children:["Society of",Object(l.jsx)("br",{}),"Robotics and",Object(l.jsx)("br",{}),"Automation, VJTI"]}),subtitleList:a.n,isHome:!0}),Object(l.jsx)(u,{}),Object(l.jsx)(_,{}),Object(l.jsx)(h,{}),Object(l.jsx)(x,{})]})}},"Tu/p":function(e,t,n){e.exports={hero:"Hero_hero__1fVUa",heroHead:"Hero_heroHead__12Yiw",heroSub:"Hero_heroSub__3-rrY",notif:"Hero_notif__yKDqh",wobble:"Hero_wobble__DlBEw","scroll-indicator":"Hero_scroll-indicator__1OdvK",bounce:"Hero_bounce__22czQ",is:"Hero_is__2c_Nk",caption:"Hero_caption__1RLmY",captionHead:"Hero_captionHead__bPVFr",captionSub:"Hero_captionSub__-hd2G",scrollIndicator:"Hero_scrollIndicator__zJATM"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var s,r=a(n("q1tI")),o=n("elyg"),i=n("nOHt"),l=new Map,u=window.IntersectionObserver,j={};var d=function(e,t){var n=s||(u?s=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,c){(0,o.isLocalURL)(t)&&(e.prefetch(t,n,c).catch((function(e){0})),j[t+"%"+n]=!0)}var b=function(e){var t=!1!==e.prefetch,n=r.default.useState(),a=c(n,2),s=a[0],l=a[1],b=(0,i.useRouter)(),f=b&&b.pathname||"/",p=r.default.useMemo((function(){var t=(0,o.resolveHref)(f,e.href,!0),n=c(t,2),a=n[0],s=n[1];return{href:a,as:e.as?(0,o.resolveHref)(f,e.as):s||a}}),[f,e.href,e.as]),m=p.href,_=p.as;r.default.useEffect((function(){if(t&&u&&s&&s.tagName&&(0,o.isLocalURL)(m)&&!j[m+"%"+_])return d(s,(function(){h(b,m,_)}))}),[t,s,m,_,b]);var O=e.children,g=e.replace,x=e.shallow,v=e.scroll;"string"===typeof O&&(O=r.default.createElement("a",null,O));var N=r.Children.only(O),w={ref:function(e){e&&l(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,c,a,s,r){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==r&&(r=c.indexOf("#")<0),t[a?"replace":"push"](n,c,{shallow:s}).then((function(e){e&&r&&(window.scrollTo(0,0),document.body.focus())})))}(e,b,m,_,g,x,v)}};return t&&(w.onMouseEnter=function(e){(0,o.isLocalURL)(m)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),h(b,m,_,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(w.href=(0,o.addBasePath)((0,o.addLocale)(_,b&&b.locale,b&&b.defaultLocale))),r.default.cloneElement(N,w)};t.default=b},mC2l:function(e,t,n){"use strict";var c=n("Tu/p"),a=n.n(c),s=n("IP2g"),r=n("wHSu"),o=n("q1tI"),i=n("nKUr");t.a=function(e){var t=e.imgName,n=e.title,c=e.subtitleList,l=e.isHome,u=e.backgroundPosition,j=void 0===u?"center":u,d=Object(o.useState)("none"),h=d[0],b=d[1];return Object(o.useEffect)((function(){setTimeout((function(){b("")}),2e3)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{style:{backgroundImage:'linear-gradient(\n                            to bottom,\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5)), url("/static/images/hero/'.concat(t,'")'),backgroundPosition:j},className:a.a.hero,children:[Object(i.jsx)("div",{className:a.a.heroHead,children:n}),Object(i.jsx)("div",{className:a.a.heroSub,children:c.map((function(e,t){return c.length!==t+1?Object(i.jsxs)("span",{children:[e,"\xa0\xa0\u2022\xa0\xa0"]},"hero_".concat(t)):Object(i.jsx)("span",{children:e},"hero_".concat(t))}))}),Object(i.jsx)("a",{href:"#is",children:Object(i.jsx)("div",{className:a.a.scrollIndicator})}),l&&Object(i.jsx)("a",{href:"#notifs",className:a.a.notif,style:{display:h},children:Object(i.jsx)(s.a,{icon:r.a})})]}),l&&Object(i.jsxs)("div",{className:a.a.is,id:"is",children:[Object(i.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/ideate-final2.jpg")'},className:a.a.caption,children:[Object(i.jsx)("div",{className:a.a.captionHead,children:"Ideate"}),Object(i.jsx)("div",{className:a.a.captionSub,children:"Changing the world, one solution at a time."})]}),Object(i.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000098, #00000098),\n\t\turl("/static/images/innovate-final2.jpg")'},className:a.a.caption,children:[Object(i.jsx)("div",{className:a.a.captionHead,children:"Innovate"}),Object(i.jsx)("div",{className:a.a.captionSub,children:"Creativity is thinking up new things. Innovation is doing new things."})]}),Object(i.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/inspire-final2.jpg")'},className:a.a.caption,children:[Object(i.jsx)("div",{className:a.a.captionHead,children:"Inspire"}),Object(i.jsx)("div",{className:a.a.captionSub,children:"Don't inspire by being perfect, inspire by embracing your imperfections."})]})]})]})}},nQJE:function(e,t,n){e.exports={reach:"OurSponsors_reach__2a40r",reachGroup:"OurSponsors_reachGroup__cXydu"}},ouJ7:function(e,t,n){e.exports={reach:"HomeReach_reach__gfrvj",reachGroup:"HomeReach_reachGroup__DAikZ"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,5,2,4,3]]]);