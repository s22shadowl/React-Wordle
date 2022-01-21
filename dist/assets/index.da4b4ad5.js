import{W as $,j as y,s as a,r as p,R as K,a as C}from"./vendor.a308cf72.js";const R=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};R();const i={background_main:"#1C2833",background_sub:"#FFFFFF",font_main:"#FFFFFF",font_sub:"#1C2833",words_background_correct:"#27AE60",words_background_nearAnswer:"#FFC300",words_background_unused:"#ABB2B9",words_background_wrongAnswer:"#273746"},W=$`
    * {
        font-family: "微軟正黑體";
        font-weight: bold;
        -webkit-user-select:none;
        -moz-user-select:none;
        -o-user-select:none;
        user-select:none;
    }
    body {
      margin: 0;
    }
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: ${i.background_main};
    }

    button {
        background-color: inherit;
        border: none;
        box-shadow: none;
    }
`,n=y.exports.jsx,m=y.exports.jsxs,j=y.exports.Fragment,S=a.div``,E=a.div`
  display: flex;
  min-width: 300px;
  height: 60px;
  margin: 6px;
`,b=a.div`
  position: relative;
  height: 100%;
  width: 60px;
  margin: 3px;
  background-color: ${e=>{switch(e.status){case"TBD":return i.words_background_unused;case"correct":return i.words_background_correct;case"near":return i.words_background_nearAnswer;case"wrong":return i.words_background_wrongAnswer}}};
  &::before {
    content: "${e=>e.value?e.value:""}";
    font-size: 2rem;
    color: ${i.font_main};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,N=({currentMap:e})=>{const u=e[0].map((r,o)=>m(E,{children:[n(b,{value:r[0]?r[0]:"",status:e[1][o][0]},`${o}-0`),n(b,{value:r[1]?r[1]:"",status:e[1][o][1]},`${o}-1`),n(b,{value:r[2]?r[2]:"",status:e[1][o][2]},`${o}-2`),n(b,{value:r[3]?r[3]:"",status:e[1][o][3]},`${o}-3`),n(b,{value:r[4]?r[4]:"",status:e[1][o][4]},`${o}-4`)]},o));return n(S,{children:u})},L=a.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  color: ${i.font_main};
  padding: 5px;
  border-bottom: ${i.background_sub} 2px solid;
`,k=a.div`
  cursor: pointer;
  position: absolute;
  border-radius: 100%;
  margin: 5px;
  background-color: ${i.background_sub};
  height: 30px;
  width: 30px;
`,O=a(k)``,G=a(k)`
  right: 5px;
`,P=a(k)`
  right: 40px;
`,z=()=>m(L,{children:[n(O,{}),n(G,{}),n(P,{}),"Wordle22"]}),H=a.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30vh;
  width: 100%;
`,U=a.div`
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 3px;
`,w=a.button`
  cursor: pointer;
  height: 100%;
  width: 40px;
  margin: 3px;
  background-color: ${e=>{switch(e.status){case"unused":return i.words_background_unused;case"correct":return i.words_background_correct;case"near":return i.words_background_nearAnswer;case"wrong":return i.words_background_wrongAnswer}}};
  color: ${i.font_main};
`,T=a(w)`
  width: 60px;
`,Z=({enterWord:e,submitGuess:u,deleteWord:r})=>{const t=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]].map((s,l)=>m(U,{children:[l===2&&n(T,{status:"unused",onClick:()=>u(),children:"Enter"},"Enter"),s.map(g=>n(w,{status:"unused",value:g,onClick:()=>{e(g)},children:g},g)),l===2&&n(T,{status:"unused",onClick:()=>r(),children:"Back"},"Back")]},l));return n(H,{children:t})},q=a.div`
  background-color: ${i.background_main};
  width: 500px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,J=()=>{const[e,u]=p.exports.useState([[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]],[["TBD","TBD","TBD","TBD","TBD"],["TBD","TBD","TBD","TBD","TBD"],["TBD","TBD","TBD","TBD","TBD"],["TBD","TBD","TBD","TBD","TBD"],["TBD","TBD","TBD","TBD","TBD"],["TBD","TBD","TBD","TBD","TBD"]]]);console.log(e),p.exports.useState(0);const[r,o]=p.exports.useState(0),[t,s]=p.exports.useState(0),[l,g]=p.exports.useState(["A","P","P","L","E"]),B=p.exports.useRef(!1),D=()=>{t!==0&&(u([e[0].map((c,d)=>r!==d?c:c.map((f,h)=>t-1!==h?f:"")),e[1]]),s(t-1))},_=c=>{t!==5&&(u([e[0].map((d,f)=>r!==f?d:d.map((h,F)=>t!==F?h:c)),e[1]]),s(t+1))},x=()=>{console.log("submit"),e[0][r].length===5&&(v(e[0][r]),o(r+1),s(0))},v=c=>{const d=[];for(let f in c)l.indexOf(c[f])!==-1?l[f]===c[f]?d.push("correct"):d.push("near"):d.push("wrong");u([e[0],e[1].map((f,h)=>r!==h?f:d)])},A=c=>{const d=/[a-z]|[A-Z]/;c.key.length===1&&d.test(c.key)?_(c.key.toUpperCase()):c.key==="Enter"?x():c.key==="Backspace"&&D()};return m(q,{onKeyDown:c=>{B.current||A(c),B.current=!0},onKeyUp:()=>B.current=!1,tabIndex:-1,children:[n(z,{}),n(N,{currentMap:e}),n(Z,{deleteWord:D,enterWord:_,submitGuess:x})]})};function M(){return m(j,{children:[n(W,{}),n("div",{className:"container",children:n(J,{})})]})}K.render(n(C.StrictMode,{children:n(M,{})}),document.getElementById("root"));
