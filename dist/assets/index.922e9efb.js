import{W as k,j as v,s as i,r as f,R as w,a as _}from"./vendor.a308cf72.js";const B=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function d(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=d(t);fetch(t.href,a)}};B();const l={background_main:"#1C2833",background_sub:"#FFFFFF",font_main:"#FFFFFF",font_sub:"#1C2833",words_background_correct:"#27AE60",words_background_nearAnswer:"#FFC300",words_background_unused:"#ABB2B9",words_background_wrongAnswer:"#273746"},F=k`
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
        background-color: ${l.background_main};
    }

    button {
        background-color: inherit;
        border: none;
        box-shadow: none;
    }
`,e=v.exports.jsx,u=v.exports.jsxs,A=v.exports.Fragment,j=i.div``,W=i.div`
  display: flex;
  min-width: 300px;
  height: 60px;
  margin: 6px;
`,g=i.div`
  position: relative;
  height: 100%;
  width: 60px;
  margin: 3px;
  background-color: ${l.words_background_unused};
  &::before {
    content: "${s=>s.value?s.value:""}";
    font-size: 2rem;
    color: ${l.font_main};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,K=({currentAnswer:s,guessHistory:c})=>{const d=c.map(r=>(console.log(r),u(W,{children:[e(g,{value:r[0][0]?r[0][0]:""},0),e(g,{value:r[0][1]?r[0][1]:""},1),e(g,{value:r[0][2]?r[0][2]:""},2),e(g,{value:r[0][3]?r[0][3]:""},3),e(g,{value:r[0][4]?r[0][4]:""},4)]})));return e(j,{children:d})},R=i.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  color: ${l.font_main};
  padding: 5px;
  border-bottom: ${l.background_sub} 2px solid;
`,m=i.div`
  cursor: pointer;
  position: absolute;
  border-radius: 100%;
  margin: 5px;
  background-color: ${l.background_sub};
  height: 30px;
  width: 30px;
`,$=i(m)``,C=i(m)`
  right: 5px;
`,E=i(m)`
  right: 40px;
`,L=()=>u(R,{children:[e($,{}),e(C,{}),e(E,{}),"Wordle22"]}),N=i.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30vh;
  width: 100%;
`,b=i.div`
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 3px;
`,n=i.button`
  cursor: pointer;
  height: 100%;
  width: 40px;
  margin: 3px;
  background-color: ${l.words_background_unused};
  color: ${l.font_main};
`,y=i(n)`
  width: 60px;
`,S=({enterWord:s,submitGuess:c,deleteWord:d})=>u(N,{children:[u(b,{children:[e(n,{"data-value":"q",onClick:()=>{s("q"),console.log("click")},children:"Q"}),e(n,{"data-value":"w",children:"W"}),e(n,{"data-value":"e",children:"E"}),e(n,{"data-value":"r",children:"R"}),e(n,{"data-value":"t",children:"T"}),e(n,{"data-value":"y",children:"Y"}),e(n,{"data-value":"u",children:"U"}),e(n,{"data-value":"i",children:"I"}),e(n,{"data-value":"o",children:"O"}),e(n,{"data-value":"p",children:"P"})]}),u(b,{children:[e(n,{"data-value":"a",children:"A"}),e(n,{"data-value":"s",children:"S"}),e(n,{"data-value":"d",children:"D"}),e(n,{"data-value":"f",children:"F"}),e(n,{"data-value":"g",children:"G"}),e(n,{"data-value":"h",children:"H"}),e(n,{"data-value":"j",children:"J"}),e(n,{"data-value":"k",children:"K"}),e(n,{"data-value":"l",children:"L"})]}),u(b,{children:[e(y,{onClick:()=>c(),children:"Enter"}),e(n,{"data-value":"z",children:"Z"}),e(n,{"data-value":"x",children:"X"}),e(n,{"data-value":"c",children:"C"}),e(n,{"data-value":"v",children:"V"}),e(n,{"data-value":"b",children:"B"}),e(n,{"data-value":"n",children:"N"}),e(n,{"data-value":"m",children:"M"}),e(y,{onClick:()=>d(),children:"Back"})]})]}),G=i.div`
  background-color: ${l.background_main};
  width: 500px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,O=()=>{const[s,c]=f.exports.useState([[""],[""],[""],[""],[""],[""]]),[d,r]=f.exports.useState([]);f.exports.useState("");const t=f.exports.useRef(!1);console.log("render",s[0]);const a=o=>{const p=/[a-z]|[A-Z]/;o.key.length===1&&p.test(o.key)?(console.log("keydown",t.current),x(o.key)):o.key==="Enter"||o.key==="Backspace"&&h()};document.addEventListener("keydown",o=>{t.current||a(o),t.current=!0}),document.addEventListener("keyup",o=>{t.current=!1});const h=()=>{const o=d;o.pop(),r(o),c([[o]])},x=o=>{const p=d;d.length!==5&&(p.push(o),r(p),c([[p]]))};return u(G,{children:[e(L,{}),e(K,{currentAnswer:d,guessHistory:s}),e(S,{deleteWord:h,enterWord:x,submitGuess:()=>{}})]})};function z(){return u(A,{children:[e(F,{}),e("div",{className:"container",children:e(O,{})})]})}w.render(e(_.StrictMode,{children:e(z,{})}),document.getElementById("root"));
