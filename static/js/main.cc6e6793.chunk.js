(this["webpackJsonpsmartwatch-frontend"]=this["webpackJsonpsmartwatch-frontend"]||[]).push([[0],{54:function(e,t,s){},72:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(2),r=s.n(a),n=s(27),i=s.n(n),l=(s(54),s(9)),o=s.p+"static/media/menu.70bddae8.svg",d=s.p+"static/media/menu-white.be137123.svg",j=s.p+"static/media/logo.4dea2f0d.svg",x=s.p+"static/media/logowhite.ef08436d.svg",m=s.p+"static/media/dark.143b6549.png",b=s.p+"static/media/white.0dbf3865.png",h=s.p+"static/media/small-white.384e3902.png",u=s.p+"static/media/small-dark.676fe7ce.png",f=function(e){var t=e.toggleSidebar,s=e.isDarkMode;return Object(c.jsx)("div",{className:"container mx-auto px-5 pt-5",children:Object(c.jsxs)("div",{className:"flex items-center justify-between",children:[Object(c.jsx)("div",{className:"nav-btn",children:Object(c.jsx)("img",{src:s?d:o,className:"w-8 h-8 cursor-pointer",onClick:t,alt:"menu"})}),Object(c.jsx)("div",{className:"hidden justify-between lg:flex",children:Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)("span",{className:"no-underline cursor-pointer mr-7 font-markr",children:"Home"}),Object(c.jsx)("span",{className:"no-underline cursor-pointer mr-7 font-markr",children:"Smartphone"}),Object(c.jsx)("span",{className:"no-underline cursor-pointer mr-7 font-markr",children:"Store"}),Object(c.jsx)("button",{className:"px-3 py-2 bg-red-300 font-light hover:bg-red-400 text-white focus:outline-none font-markr",children:"Buy Now"})]})}),Object(c.jsx)("div",{className:"logo-header cursor-pointer",children:Object(c.jsx)("img",{src:s?x:j,className:"h-9",alt:"logo"})})]})})},O=s(29),g=function(e){var t=e.toggleSidebar,s=Object(a.useRef)();return Object(a.useEffect)((function(){var e=function(e){s.current.contains(e.target)||t()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t]),Object(c.jsx)("div",{className:"text-white bg-sidebar h-full min-h-screen w-full fixed top-0 left-0 z-10",children:Object(c.jsx)("div",{className:"lg:w-1/4 md:w-2/5 w-3/5 bg-black z-20 h-full p-10",ref:s,children:Object(c.jsxs)("div",{className:"flex flex-col justify-between h-full",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:" float-right text-2xl cursor-pointer",onClick:t,children:Object(c.jsx)(O.c,{})}),Object(c.jsxs)("div",{className:"flex flex-col clear-right mt-20 space-y-7",children:[Object(c.jsx)("span",{className:"text-2xl cursor-pointer",children:"Home"}),Object(c.jsx)("span",{className:"text-2xl cursor-pointer",children:"Smartphone"}),Object(c.jsx)("span",{className:"text-2xl cursor-pointer",children:"Store"})]})]}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:x,className:"w-36 float-right",alt:"logowhite"})})]})})})},w=s(31),p=s(37),v=s.n(p),N=(s(70),s(71),s(16)),k=function(e){return e.isDark?Object(c.jsx)("div",{className:"w-52 py-3 px-3 watch-item hover:shadow-none dark:bg-gray-800",children:Object(c.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(c.jsx)("h5",{className:"font-bold text-black dark:text-white sm:text-2xl text-lg",children:"Dark"}),Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:u})]})}):Object(c.jsx)("div",{className:"w-52 py-3 px-3 watch-item hover:shadow-none dark:bg-gray-800",children:Object(c.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(c.jsx)("h5",{className:"font-bold text-black dark:text-white sm:text-2xl text-lg",children:"White"}),Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:h})]})})},y=(s(72),function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],r=t[1],n=Object(a.useState)(null),i=Object(l.a)(n,2),o=i[0],d=i[1],j=Object(a.useRef)(null),x=Object(a.useRef)(null);Object(a.useEffect)((function(){r(j.current),d(x.current)}),[]);return Object(c.jsx)("div",{className:"container mx-auto lg:px-20 px-5 min-h-screen flex items-center justify-center hero-container",children:Object(c.jsxs)("div",{className:"flex md:justify-around relative md:flex-row flex-col justify-center items-center",children:[Object(c.jsxs)("div",{className:"md:block flex flex-col justify-center items-center md:mb-40 mb-0",children:[Object(c.jsx)("h1",{className:"font-extrabold sm:text-6xl text-4xl mb-3 font-markh",children:"Smartwatch"}),Object(c.jsx)("span",{className:"tracking-widest uppercase text-red-300 sm:text-2xl text-lg font-markr",children:"Element Series"}),Object(c.jsx)("p",{className:"mt-7 mb-8 text-gray-500 md:w-3/4 hero-desc md:text-left text-center font-markr",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo."})]}),Object(c.jsxs)("div",{className:"img-hero relative",children:[Object(c.jsxs)(v.a,Object(w.a)(Object(w.a)({},{dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{asNavFor:s,ref:x,children:[Object(c.jsx)("div",{className:"focus:outline-none",children:Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:b})}),Object(c.jsx)("div",{className:"focus:outline-none",children:Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:m})}),Object(c.jsx)("div",{className:"focus:outline-none",children:Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:b})}),Object(c.jsx)("div",{className:"focus:outline-none",children:Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:m})}),Object(c.jsx)("div",{className:"focus:outline-none",children:Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:b})}),Object(c.jsx)("div",{className:"focus:outline-none",children:Object(c.jsx)(N.LazyLoadImage,{alt:"IMGwristwatch",src:m})})]})),Object(c.jsx)("span",{className:"text-3xl arrow-right text-gray-700 dark:text-white cursor-pointer",onClick:function(){return j.current.slickNext()},children:Object(c.jsx)(O.b,{})}),Object(c.jsx)("span",{className:"text-3xl arrow-left text-gray-700 dark:text-white cursor-pointer",onClick:function(){return j.current.slickPrev()},children:Object(c.jsx)(O.a,{})})]}),Object(c.jsx)("div",{className:"text-black watch-list w-40",children:Object(c.jsxs)(v.a,Object(w.a)(Object(w.a)({},{dots:!1,arrows:!1,infinite:!0,centerMode:!0,centerPadding:"1px",speed:1e3,slidesToShow:3,slidesToScroll:1}),{},{asNavFor:o,ref:j,children:[Object(c.jsx)(k,{}),Object(c.jsx)(k,{isDark:!0}),Object(c.jsx)(k,{}),Object(c.jsx)(k,{isDark:!0}),Object(c.jsx)(k,{}),Object(c.jsx)(k,{isDark:!0})]}))})]})})}),S=s(45);var L=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],r=t[1],n=function(){return r(!s)},i=Object(a.useState)(JSON.parse(localStorage.getItem("DARK_MODE"))||!0),o=Object(l.a)(i,2),d=o[0],j=o[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("DARK_MODE"));console.log(e);var t=document.documentElement;d?t.classList.contains("dark")||(t.className+="dark",localStorage.setItem("DARK_MODE",!0)):(t.classList.remove("dark"),localStorage.setItem("DARK_MODE",!1))}),[d]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"h-full min-h-screen dark:bg-gray-900 text-black dark:text-white relative overflow-hidden",children:[Object(c.jsx)(f,{toggleSidebar:n,isDarkMode:d}),Object(c.jsx)(y,{}),Object(c.jsx)("div",{className:"bg-white dark:bg-gray-900 p-4 rounded-full shadow-2xl fixed md:right-16 md:bottom-14 right-5 bottom-5",children:Object(c.jsx)(S.DarkModeSwitch,{checked:d,onChange:function(e){j(e)},size:30})})]}),s&&Object(c.jsx)(g,{toggleSidebar:n})]})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,78)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),r(e),n(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),I()}},[[77,1,2]]]);
//# sourceMappingURL=main.cc6e6793.chunk.js.map