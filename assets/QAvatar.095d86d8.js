import{a as d,b as c}from"./auth.5b5ad50b.js";import{l as u,A as a,m as t,B as S}from"./index.5cdbdc63.js";import{h as v,d as g,e as m,f as q,g as f}from"./QBtn.3017b0bb.js";const h=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],k=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var b=u({name:"QSkeleton",props:{...d,tag:{type:String,default:"div"},type:{type:String,validator:e=>h.includes(e),default:"rect"},animation:{type:String,validator:e=>k.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:n}){const o=S(),i=c(e,o.proxy.$q),l=a(()=>{const s=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:s[0],height:s[1]}}),r=a(()=>`q-skeleton q-skeleton--${i.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>t(e.tag,{class:r.value,style:l.value},v(n.default))}}),x=u({name:"QAvatar",props:{...g,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:n}){const o=m(e),i=a(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),l=a(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const r=e.icon!==void 0?[t(q,{name:e.icon})]:void 0;return t("div",{class:i.value,style:o.value},[t("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},f(n.default,r))])}}});export{b as Q,x as a};
