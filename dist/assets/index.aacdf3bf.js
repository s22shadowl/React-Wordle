import{W as b,j as h,s as i,R as x,a as y}from"./vendor.10244191.js";const w=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function m(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function p(o){if(o.ep)return;o.ep=!0;const c=m(o);fetch(o.href,c)}};w();const d={background_main:"#1C2833",background_sub:"#FFFFFF",font_main:"#FFFFFF",font_sub:"#1C2833",words_background_correct:"#27AE60",words_background_nearAnswer:"#FFC300",words_background_unused:"#ABB2B9",words_background_wrongAnswer:"#273746"},_=b`
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
        background-color: ${d.background_main};
    }

    button {
        background-color: inherit;
        border: none;
        box-shadow: none;
    }
`,e=h.exports.jsx,t=h.exports.jsxs,k=h.exports.Fragment,v=i.div``,s=i.div`
  display: flex;
  min-width: 300px;
  height: 60px;
  margin: 6px;
`,n=i.div`
  height: 100%;
  width: 60px;
  margin: 3px;
  background-color: ${d.words_background_unused};
`,F=()=>t(v,{children:[t(s,{children:[e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{})]}),t(s,{children:[e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{})]}),t(s,{children:[e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{})]}),t(s,{children:[e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{})]}),t(s,{children:[e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{})]}),t(s,{children:[e(n,{}),e(n,{}),e(n,{}),e(n,{}),e(n,{})]})]}),B=i.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  color: ${d.font_main};
  padding: 5px;
  border-bottom: ${d.background_sub} 2px solid;
`,u=i.div`
  cursor: pointer;
  position: absolute;
  border-radius: 100%;
  margin: 5px;
  background-color: ${d.background_sub};
  height: 30px;
  width: 30px;
`,j=i(u)``,W=i(u)`
  right: 5px;
`,A=i(u)`
  right: 40px;
`,K=()=>t(B,{children:[e(j,{}),e(W,{}),e(A,{}),"Wordle22"]}),N=i.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30vh;
  width: 100%;
`,g=i.div`
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 3px;
`,r=i.button`
  cursor: pointer;
  height: 100%;
  width: 40px;
  margin: 3px;
  background-color: ${d.words_background_unused};
  color: ${d.font_main};
`,f=i(r)`
  width: 60px;
`,R=()=>t(N,{children:[t(g,{children:[e(r,{children:"Q"}),e(r,{children:"W"}),e(r,{children:"E"}),e(r,{children:"R"}),e(r,{children:"T"}),e(r,{children:"Y"}),e(r,{children:"U"}),e(r,{children:"I"}),e(r,{children:"O"}),e(r,{children:"P"})]}),t(g,{children:[e(r,{children:"A"}),e(r,{children:"S"}),e(r,{children:"D"}),e(r,{children:"F"}),e(r,{children:"G"}),e(r,{children:"H"}),e(r,{children:"J"}),e(r,{children:"K"}),e(r,{children:"L"})]}),t(g,{children:[e(f,{children:"Enter"}),e(r,{children:"Z"}),e(r,{children:"X"}),e(r,{children:"C"}),e(r,{children:"V"}),e(r,{children:"B"}),e(r,{children:"N"}),e(r,{children:"M"}),e(f,{children:"Back"})]})]}),$=i.div`
  background-color: ${d.background_main};
  width: 500px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,L=()=>t($,{children:[e(K,{}),e(F,{}),e(R,{})]});function O(){return t(k,{children:[e(_,{}),e("div",{className:"container",children:e(L,{})})]})}x.render(e(y.StrictMode,{children:e(O,{})}),document.getElementById("root"));
