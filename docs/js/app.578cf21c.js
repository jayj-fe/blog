(function(){"use strict";var e={1498:function(e,t,o){var n=o(9199);const a={class:"app"};function s(e,t,o,s,i,r){const l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(l,{name:"header"}),(0,n.Wm)(l),(0,n.Wm)(l,{name:"footer"})])}var i=o(7139),r={name:"App",data(){return{width:0}},methods:{...(0,i.nv)(["fetchPostList","toggleHeader"]),handleResize(){this.width=window.innerWidth,this.width>=768?this.toggleHeader(!0):this.toggleHeader(!1)}},mounted(){this.fetchPostList("post"),window.addEventListener("resize",this.handleResize),this.handleResize()}},l=o(89);const c=(0,l.Z)(r,[["render",s]]);var u=c,p=o(678);const d={class:"app-header"},g={key:0},h={class:"app-header__gnb"};function f(e,t,o,a,s,i){const r=(0,n.up)("font-awesome-icon"),l=(0,n.up)("app-categories");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("button",{type:"button",class:"app-header__mobile-btn",onClick:t[0]||(t[0]=t=>e.toggleHeader(!e.isActiveHeader))},[(0,n.Wm)(r,{icon:"fa-solid fa-bars"})]),e.isActiveHeader?((0,n.wg)(),(0,n.iD)("button",{key:0,type:"button",class:"app-header__mobile-menu__bg",onClick:t[1]||(t[1]=t=>e.toggleHeader(!1))}," ")):(0,n.kq)("",!0),(0,n.Wm)(n.uT,{name:"slide-fade"},{default:(0,n.w5)((()=>[e.isActiveHeader?((0,n.wg)(),(0,n.iD)("aside",g,[(0,n._)("h1",null,[(0,n._)("button",{type:"button",onClick:t[2]||(t[2]=e=>i.routerMoveEvent("ListPage"))},"Jay.J")]),(0,n._)("nav",null,[(0,n._)("ul",h,[(0,n._)("li",null,[(0,n._)("button",{type:"button",onClick:t[3]||(t[3]=e=>i.routerMoveEvent("ListPage"))},"HOME")]),(0,n._)("li",null,[(0,n._)("button",{type:"button",onClick:t[4]||(t[4]=e=>i.routerMoveEvent("ListPage"))},"ARCHIVE")]),(0,n._)("li",null,[(0,n._)("button",{type:"button",onClick:t[5]||(t[5]=e=>i.routerMoveEvent("AboutPage"))},"ABOUT")])]),(0,n.Wm)(l)])])):(0,n.kq)("",!0)])),_:1})])}const m={class:"app-categories"},v=(0,n._)("h3",null,[(0,n._)("span",null,"Categories")],-1),b=["onClick"];function _(e,t,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",m,[v,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.categoriesList,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[(0,n._)("button",{type:"button",onClick:t=>i.routerMoveEvent(e.name)},[(0,n.Uk)("# "+(0,n.zw)(e.name)+" ",1),(0,n._)("span",null,"("+(0,n.zw)(e.length)+")",1)],8,b)])))),128))])])}var w={name:"AppCategories",computed:{...(0,i.rn)(["categoriesList"])},methods:{...(0,i.nv)(["fetchCategoriesList","fetchPostList","toggleHeader"]),routerMoveEvent:function(e){window.innerWidth<=768&&this.toggleHeader(!1),this.fetchPostList(e),"ListPage"!==this.$route.name&&this.$router.push("home")}},mounted(){this.fetchCategoriesList()}};const P=(0,l.Z)(w,[["render",_]]);var y=P,H={name:"AppHeader",components:{AppCategories:y},computed:{...(0,i.rn)(["isActiveHeader"])},methods:{...(0,i.nv)(["fetchPostList","toggleHeader"]),routerMoveEvent:function(e){window.innerWidth<=768&&this.toggleHeader(!1),"ListPage"===e&&this.fetchPostList("post"),this.$route.name!==e&&this.$router.push({name:e})}}};const L=(0,l.Z)(H,[["render",f]]);var A=L;const C={class:"app-footer"},k={href:"https://github.com/jayj-fe",target:"_blank"},j=(0,n.Uk)(" https://github.com/jayj-fe "),O={href:"javascript:location.href = 'mailto:' + ['jayj.fe','gmail.com'].join('@')"},E=(0,n.Uk)(" jayj.fe@gmail.com ");function T(e,t,o,a,s,i){const r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("h1",null,[(0,n._)("button",{type:"button",onClick:t[0]||(t[0]=e=>i.routerMoveEvent("ListPage"))},"Jay.J")]),(0,n._)("nav",null,[(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",k,[(0,n.Wm)(r,{icon:"fa-brands fa-github"}),j])]),(0,n._)("li",null,[(0,n._)("a",O,[(0,n.Wm)(r,{icon:"fa-solid fa-envelope"}),E])])])])])}var D={name:"AppFooter",methods:{...(0,i.nv)(["toggleHeader"]),routerMoveEvent:function(e){this.toggleHeader(!1),this.$route.name!==e&&this.$router.push({name:e})}}};const M=(0,l.Z)(D,[["render",T]]);var W=M;const z={class:"app-con app-list-page"};function I(e,t,o,a,s,i){const r=(0,n.up)("app-list");return(0,n.wg)(),(0,n.iD)("div",z,[(0,n.Wm)(r)])}const R={class:"app-list"},S={class:"app-list__container"},x={href:"#",class:"list-item__title"},Z={class:"list-item__date"},U={class:"list-item__con"};function $(e,t,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("ul",S,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.currentPosts,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e,class:"list-item"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.categories,(e=>((0,n.wg)(),(0,n.iD)("span",{key:e,class:"list-item__categorie"},(0,n.zw)(e),1)))),128)),(0,n._)("a",x,(0,n.zw)(e.title),1),(0,n._)("p",Z,(0,n.zw)(e.date),1),(0,n._)("p",U,(0,n.zw)(e.con),1)])))),128))])])}var G={name:"AppList",computed:{...(0,i.rn)(["currentPosts"])}};const F=(0,l.Z)(G,[["render",$]]);var J=F,K={name:"ListPage",components:{AppList:J}};const Y=(0,l.Z)(K,[["render",I]]);var q=Y;const B={class:"app-con app-about-page"};function N(e,t,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",B," ABOUT PAGE ")}var V={name:"AboutPage"};const Q=(0,l.Z)(V,[["render",N]]);var X=Q;const ee={class:"hello"},te=["innerHTML"];function oe(e,t,o,a,s,i){return(0,n.wg)(),(0,n.iD)("div",ee,[(0,n._)("div",{innerHTML:s.postContent},null,8,te)])}var ne=o(4478),ae=o.n(ne),se=o(6265),ie=o.n(se);const re=-1!==window.location.href.indexOf("localhost")?"http://localhost:9000/":"https://jayj-fe.github.io/";var le=ie().create({withCredentials:!0,baseURL:re,headers:{post:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Origin":"*"}}}),ce={name:"HelloWorld",data(){return{postContent:void 0}},props:{msg:String},methods:{callPage(e){le.get(e).then((e=>{const t=e.data;let o="";o=-1!==t.indexOf("---",2)?t.slice(t.indexOf("---",2)):t;const n=new(ae().Converter),a=n.makeHtml(o);this.postContent=a})).catch((e=>{console.log(e.message)}))}},mounted(){le.get("/blogAPI/postlist.json").then((e=>{console.log(typeof e.data),console.log(e.data);const t=e.data.postlist;console.log(t);const o=[];t.forEach((e=>{console.log(e),void 0!==e.categories.find((e=>"html"==e))&&o.push(e)})),console.log("모든 리스트 출력**********"),console.log(o),console.log("html 타입 출력**********"),console.log("/blogAPI"+o[1].url),this.callPage("/blogAPI"+o[1].url)})).catch((e=>{console.log(e.message)}))}};const ue=(0,l.Z)(ce,[["render",oe],["__scopeId","data-v-34f59584"]]);var pe=ue;const de=[{path:"/",name:"Home",components:{header:A,default:q,footer:W}},{path:"/home",name:"ListPage",components:{header:A,default:q,footer:W}},{path:"/about",name:"AboutPage",components:{header:A,default:X,footer:W}},{path:"/test",name:"HelloWorld",component:pe},{path:"/blogRenewalTest/",name:"Home",components:{header:A,default:q,footer:W}},{path:"/blogRenewalTest/home",name:"ListPage",components:{header:A,default:q,footer:W}},{path:"/blogRenewalTest/about",name:"AboutPage",components:{header:A,default:X,footer:W}},{path:"/blogRenewalTest/test",name:"HelloWorld",component:pe}],ge=(0,p.p7)({history:(0,p.PO)(),routes:de});var he=ge,fe={isActiveHeader:!1,currentPosts:null,categoriesList:null},me={};const ve="TOGGLE_HEADER",be="FETCH_POST_LIST",_e="FETCH_CATEGORIES_LIST";var we={toggleHeader({commit:e},t){e(ve,t)},fetchPostList({commit:e},t){let o="/blogAPI/"+t+"list.json";return le.get(o).then((t=>{t.data.postlist.forEach((e=>{e.date=e.date.slice(0,10);const t=new(ae().Converter);e.con=t.makeHtml(e.con).replace(/<[^>]*>?/g,""),e.con=e.con.replaceAll("\\&lt;","<")})),e(be,t.data.postlist)})).catch((e=>{console.log(e)}))},fetchCategoriesList({commit:e}){return le.get("/blogAPI/categorieslist.json").then((t=>{e(_e,t.data.categorieslist)})).catch((e=>{console.log(e)}))}},Pe={[ve](e,t){e.isActiveHeader=t},[be](e,t){e.currentPosts=t},[_e](e,t){e.categoriesList=t}},ye=(0,i.MT)({state:fe,getters:me,actions:we,mutations:Pe}),He=o(8125),Le=o(7749),Ae=o(8321),Ce=o(2234);He.vI.add(Ae.xiG,Ae.FU$,Ce.zhw);const ke=(0,n.ri)(u);ke.use(he),ke.use(ye),ke.component("font-awesome-icon",Le.GN),ke.mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],s=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,i=n[0],r=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(l)var u=l(o)}for(t&&t(n);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self["webpackChunkblog"]=self["webpackChunkblog"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1498)}));n=o.O(n)})();
//# sourceMappingURL=app.578cf21c.js.map