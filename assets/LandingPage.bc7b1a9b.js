import{Q as m}from"./QCardSection.93ca20b2.js";import{u as f,a as g,Q as h}from"./QBtn.1106fff4.js";import{m as v,n as x,o as l,u,p as i,q as o,G as _,s as b,l as C,t as S,v as y,w as c,x as w,y as k,z as I}from"./index.b7c3ad49.js";import{Q as M}from"./QCard.1be5af88.js";import{u as N}from"./auth.3820e33c.js";import"./firebase.b163514c.js";const Q='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';var A=v({name:"QSpinnerDots",props:f,setup(r){const{cSize:t,classes:a}=g(r);return()=>x("svg",{class:a.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:Q})}});const z=l({__name:"SignInComponent",setup(r){const t=u(),a=()=>{const n=new _;b(C(),n).then(()=>{t.push("/chats").catch(e=>{console.error("failed to push route",e)})}).catch(e=>{console.error("failed to sign in!",e)})};return(n,e)=>(i(),o(h,{label:"Sign in with Google",rounded:"",outline:"","text-color":"pink-5",icon:"login",onClick:a}))}}),T=l({__name:"LandingPage",setup(r){const t=u(),{isLoggedIn:a,authInitialized:n}=N(),e=S(!1),p=()=>{e.value=!0},d=()=>{e.value=!1};return y(()=>{a.value&&t.push("/chats")}),(B,s)=>(i(),o(M,{class:"fixed-center q-pa-lg text-center text-pink-5",style:{"border-color":"var(--pink-5)"},flat:"",bordered:""},{default:c(()=>[w(m,{class:"text-h4 q-pt-none"},{default:c(()=>s[0]||(s[0]=[k("Ahmad Chat App")])),_:1}),e.value||I(n)===void 0?(i(),o(A,{key:0,color:"pink-5",size:"2em"})):(i(),o(z,{key:1,onSignInStart:p,onSignInEnd:d}))]),_:1}))}});export{T as default};
