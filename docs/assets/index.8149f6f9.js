import{S as D,i as G,s as q,a as ee,e as m,t as H,b as y,c as f,d as M,f as c,l as K,n as P,g as C,h as I,j as Y,r as Oe,k as Fe,m as Je,o as re,p as fe,q as Re,u as ue,v as de,w as me,x as S,y as W,z as te,A as pe,B as N,C as O,D as F,E as se,F as Q,G as ie,H as he,I as ge,J as _e,K as ve,L as qe,M as De,N as le}from"./vendor.322bcbf0.js";const Ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}};Ge();const{window:X}=Fe;function Ue(s,e,t){const l=s.slice();return l[14]=e[t],l[16]=t,l}function be(s,e,t){const l=s.slice();return l[14]=e[t],l[16]=t,l}function we(s){let e,t,l,n=s[16]+1+"",r,i,u,o,a,d,h,k,$;return{c(){e=m("div"),t=m("p"),l=H("0"),r=H(n),i=H("."),u=y(),o=m("a"),a=m("p"),d=H(s[14]),f(t,"class","inline text-purple-400"),f(a,"class","inline text-off-gray text-lg"),f(o,"href",h=`#${s[14].toLowerCase()}`),f(o,"class","hover:text-purple-400 transition duration-300"),f(e,"class","font-mono flex-col flex items-center text-md")},m(b,_){M(b,e,_),c(e,t),c(t,l),c(t,r),c(t,i),c(e,u),c(e,o),c(o,a),c(a,d),k||($=K(o,"click",s[10]),k=!0)},p:P,d(b){b&&C(e),k=!1,$()}}}function ke(s){let e;return{c(){e=m("spacer")},m(t,l){M(t,e,l)},d(t){t&&C(e)}}}function Ve(s){let e,t,l,n,r,i=["About","Experience","Work","Contact"],u=[];for(let o=0;o<4;o+=1)u[o]=Qe(Ue(s,i,o));return{c(){for(let o=0;o<4;o+=1)u[o].c();e=y(),t=m("a"),l=H("Resume"),n=y(),r=m("spacer"),f(t,"href",ye),f(t,"class","btn px-4 py-2")},m(o,a){for(let d=0;d<4;d+=1)u[d].m(o,a);M(o,e,a),M(o,t,a),c(t,l),M(o,n,a),M(o,r,a)},p:P,d(o){Y(u,o),o&&C(e),o&&C(t),o&&C(n),o&&C(r)}}}function Ke(s){let e=s[1],t,l=$e(s);return{c(){l.c(),t=Je()},m(n,r){l.m(n,r),M(n,t,r)},p(n,r){r&2&&q(e,e=n[1])?(l.d(1),l=$e(n),l.c(),l.m(t.parentNode,t)):l.p(n,r)},d(n){n&&C(t),l.d(n)}}}function Qe(s){let e,t,l,n=s[16]+1+"",r,i,u,o,a,d;return{c(){e=m("a"),t=m("p"),l=H("0"),r=H(n),i=H("."),u=y(),o=m("p"),a=H(s[14]),f(t,"class","inline text-purple-400"),f(o,"class","inline text-off-gray "),f(e,"href",d=`#${s[14].toLowerCase()}`),f(e,"class","text-xs font-mono py-2 hover:text-purple-400 transition duration-300")},m(h,k){M(h,e,k),c(e,t),c(t,l),c(t,r),c(t,i),c(e,u),c(e,o),c(o,a)},p:P,d(h){h&&C(e)}}}function $e(s){let e,t,l,n;return{c(){e=m("ion-icon"),re(e,"name",t=s[1]?"close-outline":"menu-outline"),re(e,"class","text-purple-400 text-5xl z-30 cursor-pointer right-0")},m(r,i){M(r,e,i),l||(n=K(e,"click",s[11]),l=!0)},p(r,i){i&2&&t!==(t=r[1]?"close-outline":"menu-outline")&&re(e,"name",t)},d(r){r&&C(e),l=!1,n()}}}function Ye(s){let e=!1,t=()=>{e=!1},l,n,r,i,u,o,a,d,h,k,$,b,_,p,w,A;ee(s[7]),ee(s[8]);let x=["About","Experience","Work","Contact"],g=[];for(let v=0;v<4;v+=1)g[v]=we(be(s,x,v));let z=s[2]>=768&&ke();function J(v,B){return v[2]<768?Ke:Ve}let L=J(s),j=L(s);return{c(){n=m("div"),r=y(),i=m("div");for(let v=0;v<4;v+=1)g[v].c();u=y(),o=m("a"),a=H("Resume"),d=y(),h=m("div"),z&&z.c(),k=y(),$=m("a"),$.textContent="home",b=y(),_=m("spacer"),p=y(),j.c(),f(n,"id","blur-filter"),f(n,"class","z-10 h-full w-1/3 fixed transition-all duration-300 svelte-1c2b9vj"),I(n,"open",s[1]),f(o,"href",ye),f(o,"class","btn text-sm px-8 py-4"),f(i,"id","nav-menu"),f(i,"class","fixed transition-all duration-300 top-0 w-2/3 h-full z-20 flex flex-col items-center justify-center svelte-1c2b9vj"),I(i,"open",s[1]),f($,"href","#home"),f(_,"class","flex-grow"),f(h,"id","header"),f(h,"class","-translate-y-full transform transition-transform duration-300 flex items-center fixed top-0 w-full z-20 svelte-1c2b9vj"),I(h,"show",s[3]),I(h,"at-top",s[0]>50),I(h,"nav-closed",!s[1])},m(v,B){M(v,n,B),M(v,r,B),M(v,i,B);for(let E=0;E<4;E+=1)g[E].m(i,null);c(i,u),c(i,o),c(o,a),M(v,d,B),M(v,h,B),z&&z.m(h,null),c(h,k),c(h,$),c(h,b),c(h,_),c(h,p),j.m(h,null),w||(A=[K(X,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),s[7]()}),K(X,"resize",s[8]),K(n,"click",s[9])],w=!0)},p(v,[B]){if(B&1&&!e&&(e=!0,clearTimeout(l),scrollTo(X.pageXOffset,v[0]),l=setTimeout(t,100)),B&2&&I(n,"open",v[1]),B&16){x=["About","Experience","Work","Contact"];let E;for(E=0;E<4;E+=1){const Z=be(v,x,E);g[E]?g[E].p(Z,B):(g[E]=we(Z),g[E].c(),g[E].m(i,u))}for(;E<4;E+=1)g[E].d(1)}B&2&&I(i,"open",v[1]),v[2]>=768?z||(z=ke(),z.c(),z.m(h,k)):z&&(z.d(1),z=null),L===(L=J(v))&&j?j.p(v,B):(j.d(1),j=L(v),j&&(j.c(),j.m(h,null))),B&8&&I(h,"show",v[3]),B&1&&I(h,"at-top",v[0]>50),B&2&&I(h,"nav-closed",!v[1])},i:P,o:P,d(v){v&&C(n),v&&C(r),v&&C(i),Y(g,v),v&&C(d),v&&C(h),z&&z.d(),j.d(),w=!1,Oe(A)}}}const ye="https://drive.google.com/file/d/1WIp7ROSmk95ZSGt-f3s6llsv7N_tEJ4I/view?usp=sharing";function Xe(s,e,t){let l=!1;const n=()=>{t(1,l=!l),window.document.body.classList.toggle("noscroll")};let{offset:r=50}=e,{tolerance:i=0}=e,u,o=!0,a=0,d=0;const h=w=>{const A=d-w;return d=w,w<r?"show":Math.abs(A)<=i?o:A<0?"hide":"show"};function k(){t(0,a=X.pageYOffset)}function $(){t(2,u=X.innerWidth)}const b=()=>{n()},_=()=>{n()},p=()=>{n()};return s.$$set=w=>{"offset"in w&&t(5,r=w.offset),"tolerance"in w&&t(6,i=w.tolerance)},s.$$.update=()=>{s.$$.dirty&1&&t(3,o=h(a)==="show")},[a,l,u,o,n,r,i,k,$,b,_,p]}class Ze extends D{constructor(e){super();G(this,e,Xe,Ye,q,{offset:5,tolerance:6})}}function et(s){let e,t,l,n,r;const i=s[2].default,u=fe(i,s,s[1],null);return{c(){e=m("div"),t=m("div"),u&&u.c(),l=y(),n=m("div"),f(n,"class",""+(Re("w-px h-10 bg-off-gray self-center")+" svelte-1bvp6s")),f(t,"class","flex flex-col hover-children svelte-1bvp6s"),f(e,"class","hidden md:block bottom-0 fixed svelte-1bvp6s"),I(e,"right",s[0]==="right"),I(e,"left",s[0]==="left")},m(o,a){M(o,e,a),c(e,t),u&&u.m(t,null),c(t,l),c(t,n),r=!0},p(o,[a]){u&&u.p&&(!r||a&2)&&ue(u,i,o,o[1],r?me(i,o[1],a,null):de(o[1]),null),a&1&&I(e,"right",o[0]==="right"),a&1&&I(e,"left",o[0]==="left")},i(o){r||(S(u,o),r=!0)},o(o){W(u,o),r=!1},d(o){o&&C(e),u&&u.d(o)}}}function tt(s,e,t){let{$$slots:l={},$$scope:n}=e,{side:r}=e;return s.$$set=i=>{"side"in i&&t(0,r=i.side),"$$scope"in i&&t(1,n=i.$$scope)},[r,n,l]}class xe extends D{constructor(e){super();G(this,e,tt,et,q,{side:0})}}const lt=`
    I build things for the web.
  `,nt=`
    I'm a software engineer based in Seattle, WA specializing in building (and occasionally designing)
    exceptional websites, applications, and everything in between.
  `;function rt(s){let e,t,l,n,r,i,u,o,a,d,h,k;return{c(){e=m("div"),t=m("p"),t.textContent="Hi, my name is",l=y(),n=m("p"),n.textContent="Jack Bowman.",r=y(),i=m("p"),i.textContent=`${lt}`,u=y(),o=m("p"),o.textContent=`${nt}`,a=y(),d=m("a"),d.textContent="Get in touch",f(t,"class","text-purple-400 ml-1 text-sm font-mono"),f(n,"class","big-text mt-3 font-semibold"),f(i,"class","big-text text-off-gray font-semibold mt-4"),f(o,"class","text-off-gray max-w-md mt-6 mb-10 text-md"),f(d,"href","mailto:jackbow@umich.edu"),f(d,"class","btn px-6 py-4"),f(e,"id","home"),f(e,"class","mx-auto max-w-screen-lg flex flex-col h-screen justify-center items-start")},m($,b){M($,e,b),c(e,t),c(e,l),c(e,n),c(e,r),c(e,i),c(e,u),c(e,o),c(e,a),c(e,d),k=!0},p:P,i($){k||(ee(()=>{h||(h=te(e,pe,{y:-100,duration:2e3},!0)),h.run(1)}),k=!0)},o($){h||(h=te(e,pe,{y:-100,duration:2e3},!1)),h.run(0),k=!1},d($){$&&C(e),$&&h&&h.end()}}}class st extends D{constructor(e){super();G(this,e,null,rt,q,{})}}function it(s){let e,t;const l=s[5].default,n=fe(l,s,s[4],null);return{c(){e=m("div"),n&&n.c(),f(e,"class","media-wrapper svelte-lgu1ae"),I(e,"project",s[2]),I(e,"centered",s[3]),I(e,"media-wrapper-border",s[0]),I(e,"media-wrapper-constrained",s[1])},m(r,i){M(r,e,i),n&&n.m(e,null),t=!0},p(r,[i]){n&&n.p&&(!t||i&16)&&ue(n,l,r,r[4],t?me(l,r[4],i,null):de(r[4]),null),i&4&&I(e,"project",r[2]),i&8&&I(e,"centered",r[3]),i&1&&I(e,"media-wrapper-border",r[0]),i&2&&I(e,"media-wrapper-constrained",r[1])},i(r){t||(S(n,r),t=!0)},o(r){W(n,r),t=!1},d(r){r&&C(e),n&&n.d(r)}}}function ot(s,e,t){let{$$slots:l={},$$scope:n}=e,{border:r=!1}=e,{constrained:i=!1}=e,{project:u=!1}=e,{centered:o=!1}=e;return s.$$set=a=>{"border"in a&&t(0,r=a.border),"constrained"in a&&t(1,i=a.constrained),"project"in a&&t(2,u=a.project),"centered"in a&&t(3,o=a.centered),"$$scope"in a&&t(4,n=a.$$scope)},[r,i,u,o,n,l]}class oe extends D{constructor(e){super();G(this,e,ot,it,q,{border:0,constrained:1,project:2,centered:3})}}var ne={paragraphs:["Hello! I'm Jack, a software engineer based in Seattle, WA.","I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.","Shortly after graduating from the University of Michigan, I joined the engineering team at Mcity where I work on a wide variety of interesting and meaningful projects on a daily basis.","Here are a few technologies I've been working with recently:"],bullets:["Vue","Docker","Python","WebSockets","PostgreSQL","Cypress.io"]};function je(s,e,t){const l=s.slice();return l[0]=e[t],l}function Me(s,e,t){const l=s.slice();return l[3]=e[t],l}function Ce(s){let e,t=s[3]+"",l;return{c(){e=m("p"),l=H(t),f(e,"class","mb-4 scrollreveal")},m(n,r){M(n,e,r),c(e,l)},p:P,d(n){n&&C(e)}}}function ze(s){let e,t=s[0]+"",l;return{c(){e=m("li"),l=H(t)},m(n,r){M(n,e,r),c(e,l)},p:P,d(n){n&&C(e)}}}function at(s){let e,t;return{c(){e=m("img"),f(e,"loading","lazy"),se(e.src,t="/media/me.webp")||f(e,"src",t),f(e,"alt","yours truly")},m(l,n){M(l,e,n)},d(l){l&&C(e)}}}function ct(s){let e,t,l,n,r,i,u,o,a,d,h,k=ne.paragraphs,$=[];for(let p=0;p<k.length;p+=1)$[p]=Ce(Me(s,k,p));let b=ne.bullets,_=[];for(let p=0;p<b.length;p+=1)_[p]=ze(je(s,b,p));return d=new oe({props:{border:!0,constrained:!0,centered:!0,$$slots:{default:[at]},$$scope:{ctx:s}}}),{c(){e=m("div"),t=m("h1"),t.textContent="About Me",l=y(),n=m("div"),r=m("div");for(let p=0;p<$.length;p+=1)$[p].c();i=y(),u=m("ul");for(let p=0;p<_.length;p+=1)_[p].c();o=y(),a=m("div"),N(d.$$.fragment),f(t,"class","section-header"),f(u,"class","font-mono text-xs xs:text-sm grid gap-2 grid-cols-3 grid-rows-2 grid-flow-col scrollreveal"),f(r,"class","text-md text-off-gray"),f(a,"class","z-0 scrollreveal"),f(n,"class","md:grid grid-layout md:gap-10 svelte-f1o81p"),f(e,"id","about"),f(e,"class","mx-auto max-w-3xl py-16 md:py-20")},m(p,w){M(p,e,w),c(e,t),c(e,l),c(e,n),c(n,r);for(let A=0;A<$.length;A+=1)$[A].m(r,null);c(r,i),c(r,u);for(let A=0;A<_.length;A+=1)_[A].m(u,null);c(n,o),c(n,a),O(d,a,null),h=!0},p(p,[w]){if(w&0){k=ne.paragraphs;let x;for(x=0;x<k.length;x+=1){const g=Me(p,k,x);$[x]?$[x].p(g,w):($[x]=Ce(g),$[x].c(),$[x].m(r,i))}for(;x<$.length;x+=1)$[x].d(1);$.length=k.length}if(w&0){b=ne.bullets;let x;for(x=0;x<b.length;x+=1){const g=je(p,b,x);_[x]?_[x].p(g,w):(_[x]=ze(g),_[x].c(),_[x].m(u,null))}for(;x<_.length;x+=1)_[x].d(1);_.length=b.length}const A={};w&64&&(A.$$scope={dirty:w,ctx:p}),d.$set(A)},i(p){h||(S(d.$$.fragment,p),h=!0)},o(p){W(d.$$.fragment,p),h=!1},d(p){p&&C(e),Y($,p),Y(_,p),F(d)}}}class ft extends D{constructor(e){super();G(this,e,null,ct,q,{})}}var ae=[{title:"Full-Stack Engineer",company:"Mcity",location:"Ann Arbor, MI",range:"March 2020 - Present",link:"https://www.mcity.umich.edu/",bullets:["Developed research tools for the world\u2019s largest connected & autonomous vehicle test environment in a small team.Used by Ford, GM, Toyota, Subaru, and BMW autonomous vehicle engineers among others.","Created location based network visualization tool for connectivity, mapping, and searching of all facility devices.","Added features, improved user interfaces, and triaged errors in existing applications.","Implemented unit test and integration test suites hooked into CI / CD pipelines.","On-boarded and trained a new-hire engineer."]},{title:"Assistant Researcher",company:"ArtsEngine",location:"Ann Arbor, MI",range:"October 2017 \u2014 June 2020",link:"https://artsengine.engin.umich.edu/",bullets:["Conceptualized statistical analysis workflows, and designed integral visualization and decision support tools.",`Instrumental in fulfilling deliverables or several national and local grants, as well as national policy-level talks
      and discussion.`,`Experience with cluster analysis, topic modeling, random forests, large longitudinal survey data, consulting with
      statistics doctorates, etc. to solve real problems and gain new insights.`,`Described, summarized, and interpreted unstructured and structured data using various statistical models,
      natural language processing tools, and plotting libraries`]}];function Ae(s,e,t){const l=s.slice();return l[4]=e[t],l[6]=t,l}function Ie(s,e,t){const l=s.slice();return l[1]=e[t],l[6]=t,l}function Se(s,e){let t,l=e[1].company+"",n,r,i,u;function o(){return e[3](e[6])}return{key:s,first:null,c(){t=m("p"),n=H(l),r=y(),f(t,"class","tab scrollreveal text-center sm:text-left text-xs px-4 py-3 font-mono cursor-pointer transition-all duration-300 ease-in-out svelte-fh7ukl"),I(t,"active",e[0]===e[6]),this.first=t},m(a,d){M(a,t,d),c(t,n),c(t,r),i||(u=K(t,"click",o),i=!0)},p(a,d){e=a,d&1&&I(t,"active",e[0]===e[6])},d(a){a&&C(t),i=!1,u()}}}function We(s,e){let t,l=e[4]+"",n;return{key:s,first:null,c(){t=m("li"),n=H(l),f(t,"class","text-sm mb-3 scrollreveal"),this.first=t},m(r,i){M(r,t,i),c(t,n)},p(r,i){e=r,i&2&&l!==(l=e[4]+"")&&Q(n,l)},d(r){r&&C(t)}}}function Le(s){let e,t,l,n=s[1].title+"",r,i,u,o,a=s[1].company+"",d,h,k,$,b=s[1].range+"",_,p,w,A=[],x=new Map,g,z,J=s[1].bullets;const L=j=>j[6];for(let j=0;j<J.length;j+=1){let v=Ae(s,J,j),B=L(v);x.set(B,A[j]=We(B,v))}return{c(){e=m("div"),t=m("h1"),l=m("span"),r=H(n),i=y(),u=m("a"),o=H("@ "),d=H(a),k=y(),$=m("p"),_=H(b),p=y(),w=m("ul");for(let j=0;j<A.length;j+=1)A[j].c();f(u,"href",h=s[1].link),f(t,"class","scrollreveal"),f($,"class","text-sm text-off-gray font-mono font-light mb-4 mt-1 scrollreveal"),f(w,"class","text-off-gray text-md"),f(e,"class","absolute clamp-margin svelte-fh7ukl")},m(j,v){M(j,e,v),c(e,t),c(t,l),c(l,r),c(t,i),c(t,u),c(u,o),c(u,d),c(e,k),c(e,$),c($,_),c(e,p),c(e,w);for(let B=0;B<A.length;B+=1)A[B].m(w,null);z=!0},p(j,v){(!z||v&2)&&n!==(n=j[1].title+"")&&Q(r,n),(!z||v&2)&&a!==(a=j[1].company+"")&&Q(d,a),(!z||v&2&&h!==(h=j[1].link))&&f(u,"href",h),(!z||v&2)&&b!==(b=j[1].range+"")&&Q(_,b),v&2&&(J=j[1].bullets,A=ie(A,v,L,1,j,J,x,w,_e,We,null,Ae))},i(j){z||(ee(()=>{g||(g=te(e,ve,{duration:1e3},!0)),g.run(1)}),z=!0)},o(j){g||(g=te(e,ve,{duration:1e3},!1)),g.run(0),z=!1},d(j){j&&C(e);for(let v=0;v<A.length;v+=1)A[v].d();j&&g&&g.end()}}}function ut(s){let e,t,l,n,r,i=[],u=new Map,o,a,d=s[1],h,k=ae;const $=_=>_[6];for(let _=0;_<k.length;_+=1){let p=Ie(s,k,_),w=$(p);u.set(w,i[_]=Se(w,p))}let b=Le(s);return{c(){e=m("div"),t=m("h1"),t.textContent="Where I've Worked",l=y(),n=m("div"),r=m("div");for(let _=0;_<i.length;_+=1)i[_].c();o=y(),a=m("div"),b.c(),f(t,"class","section-header mb-1"),f(r,"class","flex overflow-y-auto w-max max-w-full flex-row sm:flex-col mb-6 mr-4 "),f(n,"class","sm:flex"),f(e,"id","experience"),f(e,"class","mx-auto max-w-xl py-16 md:py-20")},m(_,p){M(_,e,p),c(e,t),c(e,l),c(e,n),c(n,r);for(let w=0;w<i.length;w+=1)i[w].m(r,null);c(n,o),c(n,a),b.m(a,null),h=!0},p(_,[p]){p&5&&(k=ae,i=ie(i,p,$,1,_,k,u,r,_e,Se,null,Ie)),p&2&&q(d,d=_[1])?(he(),W(b,1,1,P),ge(),b=Le(_),b.c(),S(b),b.m(a,null)):b.p(_,p)},i(_){h||(S(b),h=!0)},o(_){W(b),h=!1},d(_){_&&C(e);for(let p=0;p<i.length;p+=1)i[p].d();b.d(_)}}}function dt(s,e,t){let l,n=0;const r=u=>{t(0,n=u)},i=u=>{r(u)};return s.$$.update=()=>{s.$$.dirty&1&&t(1,l=ae[n])},[n,l,r,i]}class mt extends D{constructor(e){super();G(this,e,dt,ut,q,{})}}var Be={heart:(s,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="${s}" height="${e}" viewBox="0 0 24 24" stroke-width="${t}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path></svg>`,"logo-github":(s,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="${s}" height="${e}" viewBox="0 0 24 24" stroke-width="${t}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`,"logo-linkedin":(s,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="${s}" height="${e}" viewBox="0 0 24 24" stroke-width="${t}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="8" y1="11" x2="8" y2="16"></line><line x1="8" y1="8" x2="8" y2="8.01"></line><line x1="12" y1="16" x2="12" y2="11"></line><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`,"star-outline":(s,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="${s}" height="${e}" viewBox="0 0 24 24" stroke-width="${t}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path></svg>`,"git-branch-outline":(s,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-git-branch" width="${s}" height="${e}" viewBox="0 0 24 24" stroke-width="${t}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="7" cy="18" r="2"></circle><circle cx="7" cy="6" r="2"></circle><circle cx="17" cy="6" r="2"></circle><line x1="7" y1="8" x2="7" y2="16"></line><path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path><polyline points="14 14 17 11 20 14"></polyline></svg>`,"external-link":(s,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="${s}" height="${e}" viewBox="0 0 24 24" stroke-width="${t}" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path><line x1="10" y1="14" x2="20" y2="4"></line><polyline points="15 4 20 4 20 9"></polyline></svg>`};function pt(s){let e,t=Be[s[0]](s[1],s[2],s[3])+"";return{c(){e=m("span"),f(e,"class",s[4])},m(l,n){M(l,e,n),e.innerHTML=t},p(l,[n]){n&15&&t!==(t=Be[l[0]](l[1],l[2],l[3])+"")&&(e.innerHTML=t),n&16&&f(e,"class",l[4])},i:P,o:P,d(l){l&&C(e)}}}function ht(s,e,t){let{name:l,width:n=24,height:r=24,strokeWidth:i=2,classes:u=""}=e;return s.$$set=o=>{"name"in o&&t(0,l=o.name),"width"in o&&t(1,n=o.width),"height"in o&&t(2,r=o.height),"strokeWidth"in o&&t(3,i=o.strokeWidth),"classes"in o&&t(4,u=o.classes)},[l,n,r,i,u]}class V extends D{constructor(e){super();G(this,e,ht,pt,q,{name:0,width:1,height:2,strokeWidth:3,classes:4})}}var He=[{title:"Lil' Hash",github:"https://github.com/jackbow/lil-hash",url:"https://lilhash.com/",description:`
      An simple URL shortener that produces easily rememberable and speakable shortened URLs.
      The links expire after 24 hours so there's always a one word shortening available.
    `,tech:["Svelte","Serverless","Tailwindcss"],img:"lilhash.webp"},{title:"Arts Engagement Project",github:"https://github.com/ArtsEngine/ArtsEngagementJupyterBook-Build",url:"https://artsengagementproject.site/",description:`
      The Arts Engagement Project is a study of over 4000 undergraduate students at the University of Michigan
      that asked questions about the impacts, precursors, barriers, frequency, and perceptions of co-curricular
      arts engagement in college.
    `,tech:["NLP","Machine Learning","Data-Viz"],img:"artsengagement.webp"},{title:"Mcity Connected Area Network",description:`
      Network visualization with GPS proximity highlighting, and device details.
    `,tech:["Vue","Flask","PostgreSQL"],img:"mcity-can.webp"}];function Ee(s,e,t){const l=s.slice();return l[0]=e[t],l[2]=t,l}function Te(s,e,t){const l=s.slice();return l[3]=e[t],l}function Pe(s){let e,t=s[3]+"",l;return{c(){e=m("p"),l=H(t),f(e,"class","inline")},m(n,r){M(n,e,r),c(e,l)},p:P,d(n){n&&C(e)}}}function gt(s){let e,t,l,n;return t=new V({props:{width:32,height:32,classes:"text-off-gray text-3xl hover:text-purple-400 transition duration-400 inline",name:"logo-github"}}),{c(){e=m("a"),N(t.$$.fragment),f(e,"aria-label","project source code"),f(e,"href",l=s[0].github)},m(r,i){M(r,e,i),O(t,e,null),n=!0},p:P,i(r){n||(S(t.$$.fragment,r),n=!0)},o(r){W(t.$$.fragment,r),n=!1},d(r){r&&C(e),F(t)}}}function _t(s){let e,t,l,n;return t=new V({props:{width:32,height:32,classes:"text-off-gray text-3xl hover:text-purple-400 transition duration-400 inline",name:"external-link"}}),{c(){e=m("a"),N(t.$$.fragment),f(e,"aria-label","project website"),f(e,"href",l=s[0].url)},m(r,i){M(r,e,i),O(t,e,null),n=!0},p:P,i(r){n||(S(t.$$.fragment,r),n=!0)},o(r){W(t.$$.fragment,r),n=!1},d(r){r&&C(e),F(t)}}}function vt(s){let e,t;return e=new oe({props:{project:!0,$$slots:{default:[wt]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(l,n){O(e,l,n),t=!0},p(l,n){const r={};n&64&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){W(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function bt(s){let e,t;return e=new oe({props:{project:!0,$$slots:{default:[kt]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},m(l,n){O(e,l,n),t=!0},p(l,n){const r={};n&64&&(r.$$scope={dirty:n,ctx:l}),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){W(e.$$.fragment,l),t=!1},d(l){F(e,l)}}}function wt(s){let e,t;return{c(){e=m("video"),e.autoplay=!0,e.muted=!0,e.loop=!0,se(e.src,t="/media/projects/"+s[0].video)||f(e,"src",t),f(e,"type","video/webm")},m(l,n){M(l,e,n)},p:P,d(l){l&&C(e)}}}function kt(s){let e,t;return{c(){e=m("img"),f(e,"loading","lazy"),f(e,"class","object-cover object-center h-full w-full"),se(e.src,t=`/media/projects/${s[0].img}`)||f(e,"src",t),f(e,"alt","Project screenshot")},m(l,n){M(l,e,n)},p:P,d(l){l&&C(e)}}}function Ne(s,e){let t,l,n,r=e[0].title+"",i,u,o,a=e[0].description+"",d,h,k,$,b,_,p,w,A,x,g,z,J=e[0].tech,L=[];for(let T=0;T<J.length;T+=1)L[T]=Pe(Te(e,J,T));let j=e[0].github&&gt(e),v=e[0].url&&_t(e);const B=[bt,vt],E=[];function Z(T,U){return T[0].img?0:T[0].video?1:-1}return~(A=Z(e))&&(x=E[A]=B[A](e)),{key:s,first:null,c(){t=m("div"),l=m("div"),n=m("p"),i=H(r),u=y(),o=m("div"),d=H(a),h=y(),k=m("div");for(let T=0;T<L.length;T+=1)L[T].c();$=y(),b=m("div"),j&&j.c(),_=y(),v&&v.c(),p=y(),w=m("div"),x&&x.c(),g=y(),f(n,"class","z-2 relative text-2xl font-semibold scrollreveal"),f(o,"class","z-2 content-desc relative scrollreveal rounded p-0 md:p-4 mt-4 text-gray-300 text-sm md:shadow-xl svelte-1gols5f"),f(k,"class","flex space-x-4 scrollreveal mt-4 font-mono text-xs z-2 relative text-off-gray"),I(k,"md:justify-start",e[2]%2==1),I(k,"md:justify-end",e[2]%2==0),f(b,"class","scrollreveal mt-4 flex space-x-4"),I(b,"md:justify-start",e[2]%2==1),I(b,"md:justify-end",e[2]%2==0),f(l,"class","z-2 relative p-5 md:z-auto px-2 2xs:px-4 xs:px-8 sm:px-10 md:px-0 svelte-1gols5f"),I(l,"content-right",e[2]%2==0),I(l,"content-left",e[2]%2==1),f(w,"class","z-1 scrollreveal h-full svelte-1gols5f"),I(w,"picture-right",e[2]%2==1),I(w,"picture-left",e[2]%2==0),f(t,"class","project-container justify-items-end grid items-center gap-2 mb-10 mt-2 svelte-1gols5f"),this.first=t},m(T,U){M(T,t,U),c(t,l),c(l,n),c(n,i),c(l,u),c(l,o),c(o,d),c(l,h),c(l,k);for(let R=0;R<L.length;R+=1)L[R].m(k,null);c(l,$),c(l,b),j&&j.m(b,null),c(b,_),v&&v.m(b,null),c(t,p),c(t,w),~A&&E[A].m(w,null),c(t,g),z=!0},p(T,U){if(e=T,U&0){J=e[0].tech;let R;for(R=0;R<J.length;R+=1){const ce=Te(e,J,R);L[R]?L[R].p(ce,U):(L[R]=Pe(ce),L[R].c(),L[R].m(k,null))}for(;R<L.length;R+=1)L[R].d(1);L.length=J.length}e[0].github&&j.p(e,U),e[0].url&&v.p(e,U),x&&x.p(e,U)},i(T){z||(S(j),S(v),S(x),z=!0)},o(T){W(j),W(v),W(x),z=!1},d(T){T&&C(t),Y(L,T),j&&j.d(),v&&v.d(),~A&&E[A].d()}}}function $t(s){let e,t,l,n=[],r=new Map,i,u=He;const o=a=>a[2];for(let a=0;a<u.length;a+=1){let d=Ee(s,u,a),h=o(d);r.set(h,n[a]=Ne(h,d))}return{c(){e=m("div"),t=m("h1"),t.textContent="Some Things I\u2019ve Built",l=y();for(let a=0;a<n.length;a+=1)n[a].c();f(t,"class","section-header"),f(e,"id","work"),f(e,"class","mt-48 mx-auto max-w-screen-lg py-96 2xs:py-48 xs:py-28 sm:py-24 md:py-20 lg:py-14")},m(a,d){M(a,e,d),c(e,t),c(e,l);for(let h=0;h<n.length;h+=1)n[h].m(e,null);i=!0},p(a,[d]){d&0&&(u=He,he(),n=ie(n,d,o,1,a,u,r,e,qe,Ne,null,Ee),ge())},i(a){if(!i){for(let d=0;d<u.length;d+=1)S(n[d]);i=!0}},o(a){for(let d=0;d<n.length;d+=1)W(n[d]);i=!1},d(a){a&&C(e);for(let d=0;d<n.length;d+=1)n[d].d()}}}class yt extends D{constructor(e){super();G(this,e,null,$t,q,{})}}const xt=`
  I'm currently looking for new opportunities. Feel free to reach out for any reason, and I'll try my best to get back to you soon!
`;function jt(s){let e,t,l,n,r,i,u,o;return{c(){e=m("div"),t=m("h1"),t.textContent="What's next?",l=y(),n=m("p"),n.textContent="Get in touch",r=y(),i=m("p"),i.textContent=`${xt}`,u=y(),o=m("a"),o.textContent="Say hello",f(t,"class","scrollreveal font-mono text-sm text-purple-400 svelte-1wj2ksh"),f(n,"id","action"),f(n,"class","scrollreveal text-6xl font-semibold mt-2 text-center svelte-1wj2ksh"),f(i,"class","scrollreveal w-2/3 lg:w-1/3 mt-5 text-center text-md text-off-gray"),f(o,"href","mailto:jackbow@umich.edu"),f(o,"class","scrollreveal btn mt-8 px-6 py-4"),f(e,"id","contact"),f(e,"class","w-full flex flex-col items-center xs:pt-10 sm:pt-18 md:pt-24 lg:pt-28")},m(a,d){M(a,e,d),c(e,t),c(e,l),c(e,n),c(e,r),c(e,i),c(e,u),c(e,o)},p:P,i:P,o:P,d(a){a&&C(e)}}}class Mt extends D{constructor(e){super();G(this,e,null,jt,q,{})}}function Ct(s){let e,t,l,n,r,i,u,o,a,d,h,k,$,b,_;return i=new V({props:{strokeWidth:1.5,height:18,width:18,name:"star-outline"}}),h=new V({props:{strokeWidth:1.5,height:18,width:18,name:"git-branch-outline"}}),{c(){e=m("footer"),t=m("a"),l=m("p"),l.textContent="Built by Jack Bowman",n=y(),r=m("div"),N(i.$$.fragment),u=y(),o=m("p"),a=H(s[0]),d=y(),N(h.$$.fragment),k=y(),$=m("p"),b=H(s[1]),f(l,"class","mb-2"),f(o,"class","mr-4"),f(r,"class","flex justify-around w-2/3 text-xs"),f(t,"href","http://github.com/jackbow/jackbow.github.io"),f(t,"class","p-4 text-off-gray text-xs font-mono hover:text-purple-400 transition duration-400 flex flex-col items-center"),f(e,"class","w-1/1 flex flex-col items-center mt-36 mb-2")},m(p,w){M(p,e,w),c(e,t),c(t,l),c(t,n),c(t,r),O(i,r,null),c(r,u),c(r,o),c(o,a),c(r,d),O(h,r,null),c(r,k),c(r,$),c($,b),_=!0},p(p,[w]){(!_||w&1)&&Q(a,p[0]),(!_||w&2)&&Q(b,p[1])},i(p){_||(S(i.$$.fragment,p),S(h.$$.fragment,p),_=!0)},o(p){W(i.$$.fragment,p),W(h.$$.fragment,p),_=!1},d(p){p&&C(e),F(i),F(h)}}}function zt(s,e,t){let l=0,n=0;return fetch("https://api.github.com/repos/jackbow/jackbow.github.io").then(r=>r.json()).then(r=>{t(0,l=r.stargazers_count),t(1,n=r.forks_count)}).catch(r=>console.error(r)),[l,n]}class At extends D{constructor(e){super();G(this,e,zt,Ct,q,{})}}function It(s){let e,t,l,n,r,i,u,o;return t=new V({props:{name:"logo-github"}}),r=new V({props:{name:"logo-linkedin"}}),u=new V({props:{name:"heart"}}),{c(){e=m("a"),N(t.$$.fragment),l=y(),n=m("a"),N(r.$$.fragment),i=y(),N(u.$$.fragment),f(e,"href","https://github.com/jackbow"),f(n,"href","https://www.linkedin.com/in/jack-bowman-/")},m(a,d){M(a,e,d),O(t,e,null),M(a,l,d),M(a,n,d),O(r,n,null),M(a,i,d),O(u,a,d),o=!0},p:P,i(a){o||(S(t.$$.fragment,a),S(r.$$.fragment,a),S(u.$$.fragment,a),o=!0)},o(a){W(t.$$.fragment,a),W(r.$$.fragment,a),W(u.$$.fragment,a),o=!1},d(a){a&&C(e),F(t),a&&C(l),a&&C(n),F(r),a&&C(i),F(u,a)}}}function St(s){let e;return{c(){e=m("a"),e.textContent="jackbow@umich.edu",f(e,"class","text-xs font-mono column-text"),f(e,"href","mailto:jackbow@umich.edu")},m(t,l){M(t,e,l)},d(t){t&&C(e)}}}function Wt(s){let e,t,l,n,r,i,u,o,a,d,h,k,$,b,_,p,w,A,x;return e=new Ze({}),l=new xe({props:{side:"left",$$slots:{default:[It]},$$scope:{ctx:s}}}),r=new xe({props:{side:"right",$$slots:{default:[St]},$$scope:{ctx:s}}}),o=new st({}),d=new ft({}),k=new mt({}),b=new yt({}),p=new Mt({}),A=new At({}),{c(){N(e.$$.fragment),t=y(),N(l.$$.fragment),n=y(),N(r.$$.fragment),i=y(),u=m("main"),N(o.$$.fragment),a=y(),N(d.$$.fragment),h=y(),N(k.$$.fragment),$=y(),N(b.$$.fragment),_=y(),N(p.$$.fragment),w=y(),N(A.$$.fragment),f(u,"class","mx-auto h-full max-w-screen-3xl svelte-12ecvxh")},m(g,z){O(e,g,z),M(g,t,z),O(l,g,z),M(g,n,z),O(r,g,z),M(g,i,z),M(g,u,z),O(o,u,null),c(u,a),O(d,u,null),c(u,h),O(k,u,null),c(u,$),O(b,u,null),c(u,_),O(p,u,null),M(g,w,z),O(A,g,z),x=!0},p(g,[z]){const J={};z&1&&(J.$$scope={dirty:z,ctx:g}),l.$set(J);const L={};z&1&&(L.$$scope={dirty:z,ctx:g}),r.$set(L)},i(g){x||(S(e.$$.fragment,g),S(l.$$.fragment,g),S(r.$$.fragment,g),S(o.$$.fragment,g),S(d.$$.fragment,g),S(k.$$.fragment,g),S(b.$$.fragment,g),S(p.$$.fragment,g),S(A.$$.fragment,g),x=!0)},o(g){W(e.$$.fragment,g),W(l.$$.fragment,g),W(r.$$.fragment,g),W(o.$$.fragment,g),W(d.$$.fragment,g),W(k.$$.fragment,g),W(b.$$.fragment,g),W(p.$$.fragment,g),W(A.$$.fragment,g),x=!1},d(g){F(e,g),g&&C(t),F(l,g),g&&C(n),F(r,g),g&&C(i),g&&C(u),F(o),F(d),F(k),F(b),F(p),g&&C(w),F(A,g)}}}function Lt(s){return De(async()=>{const e=275;le().reveal(".scrollreveal",{delay:e}),le().reveal(".section-header",{delay:e}),le().reveal("#home",{delay:e}),le().reveal("footer",{delay:e})}),[]}class Bt extends D{constructor(e){super();G(this,e,Lt,Wt,q,{})}}new Bt({target:document.body,intro:!0});
