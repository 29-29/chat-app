import{Q as m,a as f}from"./QCard.63db5039.js";import{u as g,a as h,Q as v}from"./QBtn.3017b0bb.js";import{l as x,m as _,n as l,u,o as i,p as o,G as b,s as C,q as S,t as y,v as w,w as c,x as k,y as I,z as M}from"./index.5cdbdc63.js";import{u as N}from"./auth.5b5ad50b.js";import"./firebase.a8ab39df.js";const Q='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>';var A=x({name:"QSpinnerDots",props:g,setup(r){const{cSize:t,classes:a}=h(r);return()=>_("svg",{class:a.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:Q})}});const z=l({__name:"SignInComponent",setup(r){const t=u(),a=()=>{const n=new b;C(S(),n).then(()=>{t.push("/chats").catch(e=>{console.error("failed to push route",e)})}).catch(e=>{console.error("failed to sign in!",e)})};return(n,e)=>(i(),o(v,{label:"Sign in with Google",rounded:"",outline:"","text-color":"pink-5",icon:"login",onClick:a}))}}),E=l({__name:"LandingPage",setup(r){const t=u(),{isLoggedIn:a,authInitialized:n}=N(),e=y(!1),p=()=>{e.value=!0},d=()=>{e.value=!1};return w(()=>{a.value&&t.push("/chats")}),(B,s)=>(i(),o(m,{class:"fixed-center q-pa-lg text-center text-pink-5",style:{"border-color":"var(--pink-5)"},flat:"",bordered:""},{default:c(()=>[k(f,{class:"text-h4 q-pt-none"},{default:c(()=>s[0]||(s[0]=[I("Ahmad Chat App")])),_:1}),e.value||M(n)===void 0?(i(),o(A,{key:0,color:"pink-5",size:"2em"})):(i(),o(z,{key:1,onSignInStart:p,onSignInEnd:d}))]),_:1}))}});export{E as default};
