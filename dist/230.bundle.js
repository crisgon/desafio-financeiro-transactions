/*! For license information please see 230.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktransactions=self.webpackChunktransactions||[]).push([[230,848],{1020:(e,r,t)=>{var a=t(5931),n=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var a,c={},f=null,i=null;for(a in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,a)&&!l.hasOwnProperty(a)&&(c[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===c[a]&&(c[a]=r[a]);return{$$typeof:n,type:e,key:f,ref:i,props:c,_owner:s.current}}r.jsx=c,r.jsxs=c},4848:(e,r,t)=>{e.exports=t(1020)},4230:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});var a=t(4848),n=t(4562);function o({list:e}){return console.log("Dados",e),(0,a.jsxs)(n.Card,{type:"default",sx:{flex:1,overflow:"auto",minHeight:"calc(100vh - 144px)"},children:["TRANSACOES",e.length>0?(0,a.jsx)("div",{children:e.map((e=>(0,a.jsxs)("p",{children:[e.type," - ",e.value]},e.id)))}):(0,a.jsx)("span",{children:"Não foram encontradas transações para essa conta"})]})}}}]);