_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),a=(n("H/sG"),n("q1tI")),c=n("Q35P"),o=n.n(c),s=n("YFqc"),i=n.n(s),l=n("DWWe"),f=n("KSab"),u=n("nKUr"),b=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1],r=Object(l.a)();Object(a.useEffect)((function(){document.getElementById("navbar");r.width>780?n(!0):n(!1)}),[r]),Object(a.useEffect)((function(){var e=document.getElementById("navbar");e.style.clipPath=t?"circle(150% at 100% 0%)":"circle(15% at 100% 0%)"}),[t]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("nav",{className:o.a.navbar,id:"navbar",children:[Object(u.jsx)("div",{className:o.a.navbarToggle,id:"navbar-toggle",children:Object(u.jsx)("img",{onClick:function(){n(!t)},src:"/static/images/KhopdiBaba.svg",className:o.a.khopdi,id:"khopdi",alt:""})}),Object(u.jsxs)("div",{className:o.a.navbarElemList,id:"navbar-elem-list",onClick:function(){r.width>780||!t||n(!1)},children:[Object(u.jsx)(i.a,{href:"/",children:Object(u.jsx)("a",{children:Object(u.jsx)("div",{className:o.a.navHome,id:"nav-home",children:Object(u.jsx)("img",{className:o.a.sraLogo,src:"/static/images/SRA_logo.png",alt:""})})})}),f.o.map((function(e,t){return Object(u.jsx)(i.a,{href:e.link,children:Object(u.jsx)("a",{children:Object(u.jsx)("div",{className:o.a.navbarElem,children:e.name})})},"link_".concat(t))}))]})]})})},d=n("kzqI"),j=n.n(d),p=n("IP2g"),h=n("8tEE");var v=function(){var e=Object(a.useState)("none"),t=e[0],n=e[1];return Object(a.useEffect)((function(){setTimeout((function(){n("")}),2e3)}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("footer",{className:j.a.footer,children:[Object(u.jsx)("h3",{children:"Connect with us"}),Object(u.jsxs)("div",{className:j.a.footerIcons,children:[Object(u.jsx)("a",{href:f.s.github,target:"_blank",style:{display:t},children:Object(u.jsx)(p.a,{icon:h.b})}),Object(u.jsx)("a",{href:f.s.linkedin,target:"_blank",style:{display:t},children:Object(u.jsx)(p.a,{icon:h.d})}),Object(u.jsx)("a",{href:f.s.facebook,target:"_blank",style:{display:t},children:Object(u.jsx)(p.a,{icon:h.a})}),Object(u.jsx)("a",{href:f.s.youtube,target:"_blank",style:{display:t},children:Object(u.jsx)(p.a,{icon:h.f})}),Object(u.jsx)("a",{href:f.s.twitter,target:"_blank",style:{display:t},children:Object(u.jsx)(p.a,{icon:h.e})}),Object(u.jsx)("a",{href:f.s.instagram,target:"_blank",style:{display:t},children:Object(u.jsx)(p.a,{icon:h.c})})]})]})})};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(t,g({},n)),Object(u.jsx)(v,{})]})}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"H/sG":function(e,t,n){},Q35P:function(e,t,n){e.exports={navbar:"Navbar_navbar__1pVdo",khopdi:"Navbar_khopdi__28mkE",navbarToggle:"Navbar_navbarToggle__3rDGF",navbarElemList:"Navbar_navbarElemList__11yAb",navbarElem:"Navbar_navbarElem__Ws2d8",navHome:"Navbar_navHome__3VGWz",sraLogo:"Navbar_sraLogo__OOqKu"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c,o=a(n("q1tI")),s=n("elyg"),i=n("nOHt"),l=new Map,f=window.IntersectionObserver,u={};var b=function(e,t){var n=c||(f?c=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),u[t+"%"+n]=!0)}var j=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=r(n,2),c=a[0],l=a[1],j=(0,i.useRouter)(),p=j&&j.pathname||"/",h=o.default.useMemo((function(){var t=(0,s.resolveHref)(p,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,s.resolveHref)(p,e.as):c||a}}),[p,e.href,e.as]),v=h.href,O=h.as;o.default.useEffect((function(){if(t&&f&&c&&c.tagName&&(0,s.isLocalURL)(v)&&!u[v+"%"+O])return b(c,(function(){d(j,v,O)}))}),[t,c,v,O,j]);var g=e.children,_=e.replace,m=e.shallow,y=e.scroll;"string"===typeof g&&(g=o.default.createElement("a",null,g));var x=o.Children.only(g),w={ref:function(e){e&&l(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,j,v,O,_,m,y)}};return t&&(w.onMouseEnter=function(e){(0,s.isLocalURL)(v)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),d(j,v,O,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(w.href=(0,s.addBasePath)((0,s.addLocale)(O,j&&j.locale,j&&j.defaultLocale))),o.default.cloneElement(x,w)};t.default=j},kzqI:function(e,t,n){e.exports={footer:"Footer_footer__3f33N",footerIcons:"Footer_footerIcons__1cLLm",wiggle:"Footer_wiggle__1CnK0"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[[0,0,1,6,2,3,5]]]);