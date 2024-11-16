const du=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Gi={},hu="/chat-app/",Vt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${hu}${r}`,r in Gi)return;Gi[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":du,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ci(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},on=[],Ve=()=>{},pu=()=>!1,Hr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),li=e=>e.startsWith("onUpdate:"),pe=Object.assign,ui=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gu=Object.prototype.hasOwnProperty,ne=(e,t)=>gu.call(e,t),W=Array.isArray,an=e=>jr(e)==="[object Map]",xa=e=>jr(e)==="[object Set]",K=e=>typeof e=="function",he=e=>typeof e=="string",Lt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Na=e=>(fe(e)||K(e))&&K(e.then)&&K(e.catch),Da=Object.prototype.toString,jr=e=>Da.call(e),mu=e=>jr(e).slice(8,-1),La=e=>jr(e)==="[object Object]",fi=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=ci(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_u=/-(\w)/g,Fe=Vr(e=>e.replace(_u,(t,n)=>n?n.toUpperCase():"")),vu=/\B([A-Z])/g,Zt=Vr(e=>e.replace(vu,"-$1").toLowerCase()),Wr=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),os=Vr(e=>e?`on${Wr(e)}`:""),Ot=(e,t)=>!Object.is(e,t),as=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ma=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},yu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ua=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let Ji;const zr=()=>Ji||(Ji=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function di(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=he(r)?Iu(r):di(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(he(e)||fe(e))return e}const bu=/;(?![^(]*\))/g,wu=/:([^]+)/,Eu=/\/\*[^]*?\*\//g;function Iu(e){const t={};return e.replace(Eu,"").split(bu).forEach(n=>{if(n){const r=n.split(wu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function hi(e){let t="";if(he(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=hi(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Su="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tu=ci(Su);function Fa(e){return!!e||e===""}const Ba=e=>!!(e&&e.__v_isRef===!0),Cu=e=>he(e)?e:e==null?"":W(e)||fe(e)&&(e.toString===Da||!K(e.toString))?Ba(e)?Cu(e.value):JSON.stringify(e,$a,2):String(e),$a=(e,t)=>Ba(t)?$a(e,t.value):an(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[cs(r,i)+" =>"]=s,n),{})}:xa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>cs(n))}:Lt(t)?cs(t):fe(t)&&!W(t)&&!La(t)?String(t):t,cs=(e,t="")=>{var n;return Lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class Ha{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=De;try{return De=this,t()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Au(e){return new Ha(e)}function Ru(){return De}let le;const ls=new WeakSet;class ja{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ls.has(this)&&(ls.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yi(this),za(this);const t=le,n=We;le=this,We=!0;try{return this.fn()}finally{Ka(this),le=t,We=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)mi(t);this.deps=this.depsTail=void 0,Yi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ls.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ns(this)&&this.run()}get dirty(){return Ns(this)}}let Va=0,On,xn;function Wa(e,t=!1){if(e.flags|=8,t){e.next=xn,xn=e;return}e.next=On,On=e}function pi(){Va++}function gi(){if(--Va>0)return;if(xn){let t=xn;for(xn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;On;){let t=On;for(On=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function za(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ka(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mi(r),Pu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ns(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(qa(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function qa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Hn))return;e.globalVersion=Hn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ns(e)){e.flags&=-3;return}const n=le,r=We;le=e,We=!0;try{za(e);const s=e.fn(e._value);(t.version===0||Ot(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=n,We=r,Ka(e),e.flags&=-3}}function mi(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let We=!0;const Ga=[];function Mt(){Ga.push(We),We=!1}function Ut(){const e=Ga.pop();We=e===void 0?!0:e}function Yi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let Hn=0;class ku{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _i{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!We||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new ku(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,Ja(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=r)}return n}trigger(t){this.version++,Hn++,this.notify(t)}notify(t){pi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gi()}}}function Ja(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ja(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ds=new WeakMap,qt=Symbol(""),Ls=Symbol(""),jn=Symbol("");function ye(e,t,n){if(We&&le){let r=Ds.get(e);r||Ds.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new _i),s.map=r,s.key=n),s.track()}}function ct(e,t,n,r,s,i){const o=Ds.get(e);if(!o){Hn++;return}const c=a=>{a&&a.trigger()};if(pi(),t==="clear")o.forEach(c);else{const a=W(e),l=a&&fi(n);if(a&&n==="length"){const f=Number(r);o.forEach((u,h)=>{(h==="length"||h===jn||!Lt(h)&&h>=f)&&c(u)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(jn)),t){case"add":a?l&&c(o.get("length")):(c(o.get(qt)),an(e)&&c(o.get(Ls)));break;case"delete":a||(c(o.get(qt)),an(e)&&c(o.get(Ls)));break;case"set":an(e)&&c(o.get(qt));break}}gi()}function nn(e){const t=X(e);return t===e?t:(ye(t,"iterate",jn),Ue(e)?t:t.map(be))}function Kr(e){return ye(e=X(e),"iterate",jn),e}const Ou={__proto__:null,[Symbol.iterator](){return us(this,Symbol.iterator,be)},concat(...e){return nn(this).concat(...e.map(t=>W(t)?nn(t):t))},entries(){return us(this,"entries",e=>(e[1]=be(e[1]),e))},every(e,t){return st(this,"every",e,t,void 0,arguments)},filter(e,t){return st(this,"filter",e,t,n=>n.map(be),arguments)},find(e,t){return st(this,"find",e,t,be,arguments)},findIndex(e,t){return st(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return st(this,"findLast",e,t,be,arguments)},findLastIndex(e,t){return st(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return st(this,"forEach",e,t,void 0,arguments)},includes(...e){return fs(this,"includes",e)},indexOf(...e){return fs(this,"indexOf",e)},join(e){return nn(this).join(e)},lastIndexOf(...e){return fs(this,"lastIndexOf",e)},map(e,t){return st(this,"map",e,t,void 0,arguments)},pop(){return Cn(this,"pop")},push(...e){return Cn(this,"push",e)},reduce(e,...t){return Qi(this,"reduce",e,t)},reduceRight(e,...t){return Qi(this,"reduceRight",e,t)},shift(){return Cn(this,"shift")},some(e,t){return st(this,"some",e,t,void 0,arguments)},splice(...e){return Cn(this,"splice",e)},toReversed(){return nn(this).toReversed()},toSorted(e){return nn(this).toSorted(e)},toSpliced(...e){return nn(this).toSpliced(...e)},unshift(...e){return Cn(this,"unshift",e)},values(){return us(this,"values",be)}};function us(e,t,n){const r=Kr(e),s=r[t]();return r!==e&&!Ue(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const xu=Array.prototype;function st(e,t,n,r,s,i){const o=Kr(e),c=o!==e&&!Ue(e),a=o[t];if(a!==xu[t]){const u=a.apply(e,i);return c?be(u):u}let l=n;o!==e&&(c?l=function(u,h){return n.call(this,be(u),h,e)}:n.length>2&&(l=function(u,h){return n.call(this,u,h,e)}));const f=a.call(o,l,r);return c&&s?s(f):f}function Qi(e,t,n,r){const s=Kr(e);let i=n;return s!==e&&(Ue(e)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,e)}):i=function(o,c,a){return n.call(this,o,be(c),a,e)}),s[t](i,...r)}function fs(e,t,n){const r=X(e);ye(r,"iterate",jn);const s=r[t](...n);return(s===-1||s===!1)&&bi(n[0])?(n[0]=X(n[0]),r[t](...n)):s}function Cn(e,t,n=[]){Mt(),pi();const r=X(e)[t].apply(e,n);return gi(),Ut(),r}const Nu=ci("__proto__,__v_isRef,__isVue"),Ya=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Lt));function Du(e){Lt(e)||(e=String(e));const t=X(this);return ye(t,"has",e),t.hasOwnProperty(e)}class Qa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Wu:tc:i?ec:Za).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){let a;if(o&&(a=Ou[n]))return a;if(n==="hasOwnProperty")return Du}const c=Reflect.get(t,n,Ee(t)?t:r);return(Lt(n)?Ya.has(n):Nu(n))||(s||ye(t,"get",n),i)?c:Ee(c)?o&&fi(n)?c:c.value:fe(c)?s?rc(c):In(c):c}}class Xa extends Qa{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const a=Jt(i);if(!Ue(r)&&!Jt(r)&&(i=X(i),r=X(r)),!W(t)&&Ee(i)&&!Ee(r))return a?!1:(i.value=r,!0)}const o=W(t)&&fi(n)?Number(n)<t.length:ne(t,n),c=Reflect.set(t,n,r,Ee(t)?t:s);return t===X(s)&&(o?Ot(r,i)&&ct(t,"set",n,r):ct(t,"add",n,r)),c}deleteProperty(t,n){const r=ne(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ct(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Lt(n)||!Ya.has(n))&&ye(t,"has",n),r}ownKeys(t){return ye(t,"iterate",W(t)?"length":qt),Reflect.ownKeys(t)}}class Lu extends Qa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Mu=new Xa,Uu=new Lu,Fu=new Xa(!0);const Ms=e=>e,fr=e=>Reflect.getPrototypeOf(e);function Bu(e,t,n){return function(...r){const s=this.__v_raw,i=X(s),o=an(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,l=s[e](...r),f=n?Ms:t?Us:be;return!t&&ye(i,"iterate",a?Ls:qt),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:c?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function dr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $u(e,t){const n={get(s){const i=this.__v_raw,o=X(i),c=X(s);e||(Ot(s,c)&&ye(o,"get",s),ye(o,"get",c));const{has:a}=fr(o),l=t?Ms:e?Us:be;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ye(X(s),"iterate",qt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=X(i),c=X(s);return e||(Ot(s,c)&&ye(o,"has",s),ye(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=X(c),l=t?Ms:e?Us:be;return!e&&ye(a,"iterate",qt),c.forEach((f,u)=>s.call(i,l(f),l(u),o))}};return pe(n,e?{add:dr("add"),set:dr("set"),delete:dr("delete"),clear:dr("clear")}:{add(s){!t&&!Ue(s)&&!Jt(s)&&(s=X(s));const i=X(this);return fr(i).has.call(i,s)||(i.add(s),ct(i,"add",s,s)),this},set(s,i){!t&&!Ue(i)&&!Jt(i)&&(i=X(i));const o=X(this),{has:c,get:a}=fr(o);let l=c.call(o,s);l||(s=X(s),l=c.call(o,s));const f=a.call(o,s);return o.set(s,i),l?Ot(i,f)&&ct(o,"set",s,i):ct(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:c}=fr(i);let a=o.call(i,s);a||(s=X(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&ct(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&ct(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Bu(s,e,t)}),n}function vi(e,t){const n=$u(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Hu={get:vi(!1,!1)},ju={get:vi(!1,!0)},Vu={get:vi(!0,!1)};const Za=new WeakMap,ec=new WeakMap,tc=new WeakMap,Wu=new WeakMap;function zu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ku(e){return e.__v_skip||!Object.isExtensible(e)?0:zu(mu(e))}function In(e){return Jt(e)?e:yi(e,!1,Mu,Hu,Za)}function nc(e){return yi(e,!1,Fu,ju,ec)}function rc(e){return yi(e,!0,Uu,Vu,tc)}function yi(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Ku(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return s.set(e,c),c}function cn(e){return Jt(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function bi(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function er(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&Ma(e,"__v_skip",!0),e}const be=e=>fe(e)?In(e):e,Us=e=>fe(e)?rc(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function wi(e){return sc(e,!1)}function qu(e){return sc(e,!0)}function sc(e,t){return Ee(e)?e:new Gu(e,t)}class Gu{constructor(t,n){this.dep=new _i,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:be(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ue(t)||Jt(t);t=r?t:X(t),Ot(t,n)&&(this._rawValue=t,this._value=r?t:be(t),this.dep.trigger())}}function ln(e){return Ee(e)?e.value:e}const Ju={get:(e,t,n)=>t==="__v_raw"?e:ln(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ic(e){return cn(e)?e:new Proxy(e,Ju)}class Yu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new _i(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Wa(this,!0),!0}get value(){const t=this.dep.track();return qa(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Qu(e,t,n=!1){let r,s;return K(e)?r=e:(r=e.get,s=e.set),new Yu(r,s,n)}const hr={},Cr=new WeakMap;let Wt;function Xu(e,t=!1,n=Wt){if(n){let r=Cr.get(n);r||Cr.set(n,r=[]),r.push(e)}}function Zu(e,t,n=ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:Ue(O)||s===!1||s===0?lt(O,1):lt(O);let f,u,h,g,_=!1,w=!1;if(Ee(e)?(u=()=>e.value,_=Ue(e)):cn(e)?(u=()=>l(e),_=!0):W(e)?(w=!0,_=e.some(O=>cn(O)||Ue(O)),u=()=>e.map(O=>{if(Ee(O))return O.value;if(cn(O))return l(O);if(K(O))return a?a(O,2):O()})):K(e)?t?u=a?()=>a(e,2):e:u=()=>{if(h){Mt();try{h()}finally{Ut()}}const O=Wt;Wt=f;try{return a?a(e,3,[g]):e(g)}finally{Wt=O}}:u=Ve,t&&s){const O=u,C=s===!0?1/0:s;u=()=>lt(O(),C)}const B=Ru(),x=()=>{f.stop(),B&&ui(B.effects,f)};if(i&&t){const O=t;t=(...C)=>{O(...C),x()}}let P=w?new Array(e.length).fill(hr):hr;const L=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(t){const C=f.run();if(s||_||(w?C.some((M,V)=>Ot(M,P[V])):Ot(C,P))){h&&h();const M=Wt;Wt=f;try{const V=[C,P===hr?void 0:w&&P[0]===hr?[]:P,g];a?a(t,3,V):t(...V),P=C}finally{Wt=M}}}else f.run()};return c&&c(L),f=new ja(u),f.scheduler=o?()=>o(L,!1):L,g=O=>Xu(O,!1,f),h=f.onStop=()=>{const O=Cr.get(f);if(O){if(a)a(O,4);else for(const C of O)C();Cr.delete(f)}},t?r?L(!0):P=f.run():o?o(L.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function lt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ee(e))lt(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)lt(e[r],t,n);else if(xa(e)||an(e))e.forEach(r=>{lt(r,t,n)});else if(La(e)){for(const r in e)lt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&lt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(e,t,n,r){try{return r?e(...r):e()}catch(s){nr(s,t,n)}}function qe(e,t,n,r){if(K(e)){const s=tr(e,t,n,r);return s&&Na(s)&&s.catch(i=>{nr(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(qe(e[i],t,n,r));return s}}function nr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let c=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,a,l)===!1)return}c=c.parent}if(i){Mt(),tr(i,null,10,[e,a,l]),Ut();return}}ef(e,n,s,r,o)}function ef(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Se=[];let Xe=-1;const un=[];let Et=null,rn=0;const oc=Promise.resolve();let Ar=null;function ac(e){const t=Ar||oc;return e?t.then(this?e.bind(this):e):t}function tf(e){let t=Xe+1,n=Se.length;for(;t<n;){const r=t+n>>>1,s=Se[r],i=Vn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Ei(e){if(!(e.flags&1)){const t=Vn(e),n=Se[Se.length-1];!n||!(e.flags&2)&&t>=Vn(n)?Se.push(e):Se.splice(tf(t),0,e),e.flags|=1,cc()}}function cc(){Ar||(Ar=oc.then(uc))}function Fs(e){W(e)?un.push(...e):Et&&e.id===-1?Et.splice(rn+1,0,e):e.flags&1||(un.push(e),e.flags|=1),cc()}function Xi(e,t,n=Xe+1){for(;n<Se.length;n++){const r=Se[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Se.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lc(e){if(un.length){const t=[...new Set(un)].sort((n,r)=>Vn(n)-Vn(r));if(un.length=0,Et){Et.push(...t);return}for(Et=t,rn=0;rn<Et.length;rn++){const n=Et[rn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Et=null,rn=0}}const Vn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function uc(e){const t=Ve;try{for(Xe=0;Xe<Se.length;Xe++){const n=Se[Xe];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),tr(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Xe<Se.length;Xe++){const n=Se[Xe];n&&(n.flags&=-2)}Xe=-1,Se.length=0,lc(),Ar=null,(Se.length||un.length)&&uc()}}let Pe=null,fc=null;function Rr(e){const t=Pe;return Pe=e,fc=e&&e.type.__scopeId||null,t}function nf(e,t=Pe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&fo(-1);const i=Rr(t);let o;try{o=e(...s)}finally{Rr(i),r._d&&fo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ov(e,t){if(Pe===null)return e;const n=Xr(Pe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,c,a=ae]=t[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&lt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return e}function $t(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Mt(),qe(a,n,8,[e.el,c,e,t]),Ut())}}const dc=Symbol("_vte"),hc=e=>e.__isTeleport,Nn=e=>e&&(e.disabled||e.disabled===""),rf=e=>e&&(e.defer||e.defer===""),Zi=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,eo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Bs=(e,t)=>{const n=e&&e.to;return he(n)?t?t(n):null:n},sf={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,c,a,l){const{mc:f,pc:u,pbc:h,o:{insert:g,querySelector:_,createText:w,createComment:B}}=l,x=Nn(t.props);let{shapeFlag:P,children:L,dynamicChildren:O}=t;if(e==null){const C=t.el=w(""),M=t.anchor=w("");g(C,n,r),g(M,n,r);const V=(k,H)=>{P&16&&(s&&s.isCE&&(s.ce._teleportTarget=k),f(L,k,H,s,i,o,c,a))},Y=()=>{const k=t.target=Bs(t.props,_),H=pc(k,t,w,g);k&&(o!=="svg"&&Zi(k)?o="svg":o!=="mathml"&&eo(k)&&(o="mathml"),x||(V(k,H),_r(t,!1)))};x&&(V(n,M),_r(t,!0)),rf(t.props)?Re(Y,i):Y()}else{t.el=e.el,t.targetStart=e.targetStart;const C=t.anchor=e.anchor,M=t.target=e.target,V=t.targetAnchor=e.targetAnchor,Y=Nn(e.props),k=Y?n:M,H=Y?C:V;if(o==="svg"||Zi(M)?o="svg":(o==="mathml"||eo(M))&&(o="mathml"),O?(h(e.dynamicChildren,O,k,s,i,o,c),Ci(e,t,!0)):a||u(e,t,k,H,s,i,o,c,!1),x)Y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):pr(t,n,C,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=Bs(t.props,_);J&&pr(t,J,null,l,0)}else Y&&pr(t,M,V,l,1);_r(t,x)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:a,targetStart:l,targetAnchor:f,target:u,props:h}=e;if(u&&(s(l),s(f)),i&&s(a),o&16){const g=i||!Nn(h);for(let _=0;_<c.length;_++){const w=c[_];r(w,t,n,g,!!w.dynamicChildren)}}},move:pr,hydrate:of};function pr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:f}=e,u=i===2;if(u&&r(o,t,n),(!u||Nn(f))&&a&16)for(let h=0;h<l.length;h++)s(l[h],t,n,2);u&&r(c,t,n)}function of(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a,insert:l,createText:f}},u){const h=t.target=Bs(t.props,a);if(h){const g=Nn(t.props),_=h._lpa||h.firstChild;if(t.shapeFlag&16)if(g)t.anchor=u(o(e),t,c(e),n,r,s,i),t.targetStart=_,t.targetAnchor=_&&o(_);else{t.anchor=o(e);let w=_;for(;w;){if(w&&w.nodeType===8){if(w.data==="teleport start anchor")t.targetStart=w;else if(w.data==="teleport anchor"){t.targetAnchor=w,h._lpa=t.targetAnchor&&o(t.targetAnchor);break}}w=o(w)}t.targetAnchor||pc(h,t,f,l),u(_&&o(_),t,h,n,r,s,i)}_r(t,g)}return t.anchor&&o(t.anchor)}const av=sf;function _r(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function pc(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[dc]=i,e&&(r(s,e),r(i,e)),i}const It=Symbol("_leaveCb"),gr=Symbol("_enterCb");function gc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ec(()=>{e.isMounted=!0}),Sc(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],mc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},_c=e=>{const t=e.subTree;return t.component?_c(t.component):t},af={name:"BaseTransition",props:mc,setup(e,{slots:t}){const n=Jc(),r=gc();return()=>{const s=t.default&&Ii(t.default(),!0);if(!s||!s.length)return;const i=vc(s),o=X(e),{mode:c}=o;if(r.isLeaving)return ds(i);const a=to(i);if(!a)return ds(i);let l=Wn(a,o,r,n,h=>l=h);a.type!==we&&Yt(a,l);const f=n.subTree,u=f&&to(f);if(u&&u.type!==we&&!Ze(a,u)&&_c(n).type!==we){const h=Wn(u,o,r,n);if(Yt(u,h),c==="out-in"&&a.type!==we)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},ds(i);c==="in-out"&&a.type!==we&&(h.delayLeave=(g,_,w)=>{const B=yc(r,u);B[String(u.key)]=u,g[It]=()=>{_(),g[It]=void 0,delete l.delayedLeave},l.delayedLeave=w})}return i}}};function vc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const cf=af;function yc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Wn(e,t,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:h,onLeave:g,onAfterLeave:_,onLeaveCancelled:w,onBeforeAppear:B,onAppear:x,onAfterAppear:P,onAppearCancelled:L}=t,O=String(e.key),C=yc(n,e),M=(k,H)=>{k&&qe(k,r,9,H)},V=(k,H)=>{const J=H[1];M(k,H),W(k)?k.every(N=>N.length<=1)&&J():k.length<=1&&J()},Y={mode:o,persisted:c,beforeEnter(k){let H=a;if(!n.isMounted)if(i)H=B||a;else return;k[It]&&k[It](!0);const J=C[O];J&&Ze(e,J)&&J.el[It]&&J.el[It](),M(H,[k])},enter(k){let H=l,J=f,N=u;if(!n.isMounted)if(i)H=x||l,J=P||f,N=L||u;else return;let G=!1;const ue=k[gr]=me=>{G||(G=!0,me?M(N,[k]):M(J,[k]),Y.delayedLeave&&Y.delayedLeave(),k[gr]=void 0)};H?V(H,[k,ue]):ue()},leave(k,H){const J=String(e.key);if(k[gr]&&k[gr](!0),n.isUnmounting)return H();M(h,[k]);let N=!1;const G=k[It]=ue=>{N||(N=!0,H(),ue?M(w,[k]):M(_,[k]),k[It]=void 0,C[J]===e&&delete C[J])};C[J]=e,g?V(g,[k,G]):G()},clone(k){const H=Wn(k,t,n,r,s);return s&&s(H),H}};return Y}function ds(e){if(Gr(e))return e=Dt(e),e.children=null,e}function to(e){if(!Gr(e))return hc(e.type)&&e.children?vc(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function Yt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Yt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ii(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$e?(o.patchFlag&128&&s++,r=r.concat(Ii(o.children,t,c))):(t||o.type!==we)&&r.push(c!=null?Dt(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function qr(e,t){return K(e)?(()=>pe({name:e.name},t,{setup:e}))():e}function bc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $s(e,t,n,r,s=!1){if(W(e)){e.forEach((_,w)=>$s(_,t&&(W(t)?t[w]:t),n,r,s));return}if(Dn(r)&&!s)return;const i=r.shapeFlag&4?Xr(r.component):r.el,o=s?null:i,{i:c,r:a}=e,l=t&&t.r,f=c.refs===ae?c.refs={}:c.refs,u=c.setupState,h=X(u),g=u===ae?()=>!1:_=>ne(h,_);if(l!=null&&l!==a&&(he(l)?(f[l]=null,g(l)&&(u[l]=null)):Ee(l)&&(l.value=null)),K(a))tr(a,c,12,[o,f]);else{const _=he(a),w=Ee(a);if(_||w){const B=()=>{if(e.f){const x=_?g(a)?u[a]:f[a]:a.value;s?W(x)&&ui(x,i):W(x)?x.includes(i)||x.push(i):_?(f[a]=[i],g(a)&&(u[a]=f[a])):(a.value=[i],e.k&&(f[e.k]=a.value))}else _?(f[a]=o,g(a)&&(u[a]=o)):w&&(a.value=o,e.k&&(f[e.k]=o))};o?(B.id=-1,Re(B,n)):B()}}}zr().requestIdleCallback;zr().cancelIdleCallback;const Dn=e=>!!e.type.__asyncLoader,Gr=e=>e.type.__isKeepAlive;function lf(e,t){wc(e,"a",t)}function uf(e,t){wc(e,"da",t)}function wc(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Jr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Gr(s.parent.vnode)&&ff(r,t,n,s),s=s.parent}}function ff(e,t,n,r){const s=Jr(t,e,r,!0);Tc(()=>{ui(r[t],s)},n)}function Jr(e,t,n=ge,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Mt();const c=rr(n),a=qe(t,n,e,o);return c(),Ut(),a});return r?s.unshift(i):s.push(i),i}}const mt=e=>(t,n=ge)=>{(!qn||e==="sp")&&Jr(e,(...r)=>t(...r),n)},df=mt("bm"),Ec=mt("m"),hf=mt("bu"),Ic=mt("u"),Sc=mt("bum"),Tc=mt("um"),pf=mt("sp"),gf=mt("rtg"),mf=mt("rtc");function _f(e,t=ge){Jr("ec",e,t)}const Cc="components";function vf(e,t){return bf(Cc,e,!0,t)||e}const yf=Symbol.for("v-ndc");function bf(e,t,n=!0,r=!1){const s=Pe||ge;if(s){const i=s.type;if(e===Cc){const c=dd(i,!1);if(c&&(c===t||c===Fe(t)||c===Wr(Fe(t))))return i}const o=no(s[e]||i[e],t)||no(s.appContext[e],t);return!o&&r?i:o}}function no(e,t){return e&&(e[t]||e[Fe(t)]||e[Wr(Fe(t))])}function cv(e,t,n,r){let s;const i=n&&n[r],o=W(e);if(o||he(e)){const c=o&&cn(e);let a=!1;c&&(a=!Ue(e),e=Kr(e)),s=new Array(e.length);for(let l=0,f=e.length;l<f;l++)s[l]=t(a?be(e[l]):e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,i&&i[c])}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(c,a)=>t(c,a,void 0,i&&i[a]));else{const c=Object.keys(e);s=new Array(c.length);for(let a=0,l=c.length;a<l;a++){const f=c[a];s[a]=t(e[f],f,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Hs=e=>e?Yc(e)?Xr(e):Hs(e.parent):null,Ln=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hs(e.parent),$root:e=>Hs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Si(e),$forceUpdate:e=>e.f||(e.f=()=>{Ei(e.update)}),$nextTick:e=>e.n||(e.n=ac.bind(e.proxy)),$watch:e=>Hf.bind(e)}),hs=(e,t)=>e!==ae&&!e.__isScriptSetup&&ne(e,t),wf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(hs(r,t))return o[t]=1,r[t];if(s!==ae&&ne(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&ne(l,t))return o[t]=3,i[t];if(n!==ae&&ne(n,t))return o[t]=4,n[t];js&&(o[t]=0)}}const f=Ln[t];let u,h;if(f)return t==="$attrs"&&ye(e.attrs,"get",""),f(e);if((u=c.__cssModules)&&(u=u[t]))return u;if(n!==ae&&ne(n,t))return o[t]=4,n[t];if(h=a.config.globalProperties,ne(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return hs(s,t)?(s[t]=n,!0):r!==ae&&ne(r,t)?(r[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||e!==ae&&ne(e,o)||hs(t,o)||(c=i[0])&&ne(c,o)||ne(r,o)||ne(Ln,o)||ne(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ro(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let js=!0;function Ef(e){const t=Si(e),n=e.proxy,r=e.ctx;js=!1,t.beforeCreate&&so(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:g,updated:_,activated:w,deactivated:B,beforeDestroy:x,beforeUnmount:P,destroyed:L,unmounted:O,render:C,renderTracked:M,renderTriggered:V,errorCaptured:Y,serverPrefetch:k,expose:H,inheritAttrs:J,components:N,directives:G,filters:ue}=t;if(l&&If(l,r,null),o)for(const Z in o){const ee=o[Z];K(ee)&&(r[Z]=ee.bind(n))}if(s){const Z=s.call(n,n);fe(Z)&&(e.data=In(Z))}if(js=!0,i)for(const Z in i){const ee=i[Z],rt=K(ee)?ee.bind(n,n):K(ee.get)?ee.get.bind(n,n):Ve,_t=!K(ee)&&K(ee.set)?ee.set.bind(n):Ve,Je=je({get:rt,set:_t});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Ae=>Je.value=Ae})}if(c)for(const Z in c)Ac(c[Z],r,n,Z);if(a){const Z=K(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(ee=>{vr(ee,Z[ee])})}f&&so(f,e,"c");function ie(Z,ee){W(ee)?ee.forEach(rt=>Z(rt.bind(n))):ee&&Z(ee.bind(n))}if(ie(df,u),ie(Ec,h),ie(hf,g),ie(Ic,_),ie(lf,w),ie(uf,B),ie(_f,Y),ie(mf,M),ie(gf,V),ie(Sc,P),ie(Tc,O),ie(pf,k),W(H))if(H.length){const Z=e.exposed||(e.exposed={});H.forEach(ee=>{Object.defineProperty(Z,ee,{get:()=>n[ee],set:rt=>n[ee]=rt})})}else e.exposed||(e.exposed={});C&&e.render===Ve&&(e.render=C),J!=null&&(e.inheritAttrs=J),N&&(e.components=N),G&&(e.directives=G),k&&bc(e)}function If(e,t,n=Ve){W(e)&&(e=Vs(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),Ee(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function so(e,t,n){qe(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ac(e,t,n,r){let s=r.includes(".")?$c(n,r):()=>n[r];if(he(e)){const i=t[e];K(i)&&yr(s,i)}else if(K(e))yr(s,e.bind(n));else if(fe(e))if(W(e))e.forEach(i=>Ac(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&yr(s,i,e)}}function Si(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(l=>Pr(a,l,o,!0)),Pr(a,t,o)),fe(t)&&i.set(t,a),a}function Pr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Pr(e,i,n,!0),s&&s.forEach(o=>Pr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=Sf[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const Sf={data:io,props:oo,emits:oo,methods:Pn,computed:Pn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Pn,directives:Pn,watch:Cf,provide:io,inject:Tf};function io(e,t){return t?e?function(){return pe(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function Tf(e,t){return Pn(Vs(e),Vs(t))}function Vs(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?pe(Object.create(null),e,t):t}function oo(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:pe(Object.create(null),ro(e),ro(t!=null?t:{})):t}function Cf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function Rc(){return{app:null,config:{isNativeTag:pu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Af=0;function Rf(e,t){return function(r,s=null){K(r)||(r=pe({},r)),s!=null&&!fe(s)&&(s=null);const i=Rc(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:Af++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pd,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&K(f.install)?(o.add(f),f.install(l,...u)):K(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,h){if(!a){const g=l._ceVNode||Te(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(g,f):e(g,f,h),a=!0,l._container=f,f.__vue_app__=l,Xr(g.component)}},onUnmount(f){c.push(f)},unmount(){a&&(qe(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){const u=fn;fn=l;try{return f()}finally{fn=u}}};return l}}let fn=null;function vr(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function ze(e,t,n=!1){const r=ge||Pe;if(r||fn){const s=fn?fn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}const Pc={},kc=()=>Object.create(Pc),Oc=e=>Object.getPrototypeOf(e)===Pc;function Pf(e,t,n,r=!1){const s={},i=kc();e.propsDefaults=Object.create(null),xc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:nc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function kf(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=X(s),[a]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Yr(e.emitsOptions,h))continue;const g=t[h];if(a)if(ne(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const _=Fe(h);s[_]=Ws(a,c,_,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{xc(e,t,s,i)&&(l=!0);let f;for(const u in c)(!t||!ne(t,u)&&((f=Zt(u))===u||!ne(t,f)))&&(a?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=Ws(a,c,u,void 0,e,!0)):delete s[u]);if(i!==c)for(const u in i)(!t||!ne(t,u)&&!0)&&(delete i[u],l=!0)}l&&ct(e.attrs,"set","")}function xc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(kn(a))continue;const l=t[a];let f;s&&ne(s,f=Fe(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Yr(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=X(n),l=c||ae;for(let f=0;f<i.length;f++){const u=i[f];n[u]=Ws(s,a,u,l[u],e,!ne(l,u))}}return o}function Ws(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=ne(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=rr(s);r=l[n]=a.call(null,t),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}const Of=new WeakMap;function Nc(e,t,n=!1){const r=n?Of:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let a=!1;if(!K(e)){const f=u=>{a=!0;const[h,g]=Nc(u,t,!0);pe(o,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!a)return fe(e)&&r.set(e,on),on;if(W(i))for(let f=0;f<i.length;f++){const u=Fe(i[f]);ao(u)&&(o[u]=ae)}else if(i)for(const f in i){const u=Fe(f);if(ao(u)){const h=i[f],g=o[u]=W(h)||K(h)?{type:h}:pe({},h),_=g.type;let w=!1,B=!0;if(W(_))for(let x=0;x<_.length;++x){const P=_[x],L=K(P)&&P.name;if(L==="Boolean"){w=!0;break}else L==="String"&&(B=!1)}else w=K(_)&&_.name==="Boolean";g[0]=w,g[1]=B,(w||ne(g,"default"))&&c.push(u)}}const l=[o,c];return fe(e)&&r.set(e,l),l}function ao(e){return e[0]!=="$"&&!kn(e)}const Dc=e=>e[0]==="_"||e==="$stable",Ti=e=>W(e)?e.map(He):[He(e)],xf=(e,t,n)=>{if(t._n)return t;const r=nf((...s)=>Ti(t(...s)),n);return r._c=!1,r},Lc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Dc(s))continue;const i=e[s];if(K(i))t[s]=xf(s,i,r);else if(i!=null){const o=Ti(i);t[s]=()=>o}}},Mc=(e,t)=>{const n=Ti(t);e.slots.default=()=>n},Uc=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Nf=(e,t,n)=>{const r=e.slots=kc();if(e.vnode.shapeFlag&32){const s=t._;s?(Uc(r,t,n),n&&Ma(r,"_",s,!0)):Lc(t,r)}else t&&Mc(e,t)},Df=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ae;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:Uc(s,t,n):(i=!t.$stable,Lc(t,s)),o=t}else t&&(Mc(e,t),o={default:1});if(i)for(const c in s)!Dc(c)&&o[c]==null&&delete s[c]},Re=Zf;function Lf(e){return Mf(e)}function Mf(e,t){const n=zr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:g=Ve,insertStaticContent:_}=e,w=(d,p,m,b=null,v=null,E=null,A=void 0,T=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ze(d,p)&&(b=y(d),Ae(d,v,E,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:I,ref:j,shapeFlag:D}=p;switch(I){case Qr:B(d,p,m,b);break;case we:x(d,p,m,b);break;case ms:d==null&&P(p,m,b,A);break;case $e:N(d,p,m,b,v,E,A,T,S);break;default:D&1?C(d,p,m,b,v,E,A,T,S):D&6?G(d,p,m,b,v,E,A,T,S):(D&64||D&128)&&I.process(d,p,m,b,v,E,A,T,S,F)}j!=null&&v&&$s(j,d&&d.ref,E,p||d,!p)},B=(d,p,m,b)=>{if(d==null)r(p.el=c(p.children),m,b);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},x=(d,p,m,b)=>{d==null?r(p.el=a(p.children||""),m,b):p.el=d.el},P=(d,p,m,b)=>{[d.el,d.anchor]=_(d.children,p,m,b,d.el,d.anchor)},L=({el:d,anchor:p},m,b)=>{let v;for(;d&&d!==p;)v=h(d),r(d,m,b),d=v;r(p,m,b)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},C=(d,p,m,b,v,E,A,T,S)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null?M(p,m,b,v,E,A,T,S):k(d,p,v,E,A,T,S)},M=(d,p,m,b,v,E,A,T)=>{let S,I;const{props:j,shapeFlag:D,transition:$,dirs:q}=d;if(S=d.el=o(d.type,E,j&&j.is,j),D&8?f(S,d.children):D&16&&Y(d.children,S,null,b,v,ps(d,E),A,T),q&&$t(d,null,b,"created"),V(S,d,d.scopeId,A,b),j){for(const ce in j)ce!=="value"&&!kn(ce)&&i(S,ce,null,j[ce],E,b);"value"in j&&i(S,"value",null,j.value,E),(I=j.onVnodeBeforeMount)&&Qe(I,b,d)}q&&$t(d,null,b,"beforeMount");const Q=Uf(v,$);Q&&$.beforeEnter(S),r(S,p,m),((I=j&&j.onVnodeMounted)||Q||q)&&Re(()=>{I&&Qe(I,b,d),Q&&$.enter(S),q&&$t(d,null,b,"mounted")},v)},V=(d,p,m,b,v)=>{if(m&&g(d,m),b)for(let E=0;E<b.length;E++)g(d,b[E]);if(v){let E=v.subTree;if(p===E||jc(E.type)&&(E.ssContent===p||E.ssFallback===p)){const A=v.vnode;V(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},Y=(d,p,m,b,v,E,A,T,S=0)=>{for(let I=S;I<d.length;I++){const j=d[I]=T?St(d[I]):He(d[I]);w(null,j,p,m,b,v,E,A,T)}},k=(d,p,m,b,v,E,A)=>{const T=p.el=d.el;let{patchFlag:S,dynamicChildren:I,dirs:j}=p;S|=d.patchFlag&16;const D=d.props||ae,$=p.props||ae;let q;if(m&&Ht(m,!1),(q=$.onVnodeBeforeUpdate)&&Qe(q,m,p,d),j&&$t(p,d,m,"beforeUpdate"),m&&Ht(m,!0),(D.innerHTML&&$.innerHTML==null||D.textContent&&$.textContent==null)&&f(T,""),I?H(d.dynamicChildren,I,T,m,b,ps(p,v),E):A||ee(d,p,T,null,m,b,ps(p,v),E,!1),S>0){if(S&16)J(T,D,$,m,v);else if(S&2&&D.class!==$.class&&i(T,"class",null,$.class,v),S&4&&i(T,"style",D.style,$.style,v),S&8){const Q=p.dynamicProps;for(let ce=0;ce<Q.length;ce++){const re=Q[ce],Oe=D[re],_e=$[re];(_e!==Oe||re==="value")&&i(T,re,Oe,_e,v,m)}}S&1&&d.children!==p.children&&f(T,p.children)}else!A&&I==null&&J(T,D,$,m,v);((q=$.onVnodeUpdated)||j)&&Re(()=>{q&&Qe(q,m,p,d),j&&$t(p,d,m,"updated")},b)},H=(d,p,m,b,v,E,A)=>{for(let T=0;T<p.length;T++){const S=d[T],I=p[T],j=S.el&&(S.type===$e||!Ze(S,I)||S.shapeFlag&70)?u(S.el):m;w(S,I,j,null,b,v,E,A,!0)}},J=(d,p,m,b,v)=>{if(p!==m){if(p!==ae)for(const E in p)!kn(E)&&!(E in m)&&i(d,E,p[E],null,v,b);for(const E in m){if(kn(E))continue;const A=m[E],T=p[E];A!==T&&E!=="value"&&i(d,E,T,A,v,b)}"value"in m&&i(d,"value",p.value,m.value,v)}},N=(d,p,m,b,v,E,A,T,S)=>{const I=p.el=d?d.el:c(""),j=p.anchor=d?d.anchor:c("");let{patchFlag:D,dynamicChildren:$,slotScopeIds:q}=p;q&&(T=T?T.concat(q):q),d==null?(r(I,m,b),r(j,m,b),Y(p.children||[],m,j,v,E,A,T,S)):D>0&&D&64&&$&&d.dynamicChildren?(H(d.dynamicChildren,$,m,v,E,A,T),(p.key!=null||v&&p===v.subTree)&&Ci(d,p,!0)):ee(d,p,m,j,v,E,A,T,S)},G=(d,p,m,b,v,E,A,T,S)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?v.ctx.activate(p,m,b,A,S):ue(p,m,b,v,E,A,S):me(d,p,S)},ue=(d,p,m,b,v,E,A)=>{const T=d.component=ad(d,b,v);if(Gr(d)&&(T.ctx.renderer=F),cd(T,!1,A),T.asyncDep){if(v&&v.registerDep(T,ie,A),!d.el){const S=T.subTree=Te(we);x(null,S,p,m)}}else ie(T,d,p,m,v,E,A)},me=(d,p,m)=>{const b=p.component=d.component;if(qf(d,p,m))if(b.asyncDep&&!b.asyncResolved){Z(b,p,m);return}else b.next=p,b.update();else p.el=d.el,b.vnode=p},ie=(d,p,m,b,v,E,A)=>{const T=()=>{if(d.isMounted){let{next:D,bu:$,u:q,parent:Q,vnode:ce}=d;{const xe=Fc(d);if(xe){D&&(D.el=ce.el,Z(d,D,A)),xe.asyncDep.then(()=>{d.isUnmounted||T()});return}}let re=D,Oe;Ht(d,!1),D?(D.el=ce.el,Z(d,D,A)):D=ce,$&&as($),(Oe=D.props&&D.props.onVnodeBeforeUpdate)&&Qe(Oe,Q,D,ce),Ht(d,!0);const _e=gs(d),Be=d.subTree;d.subTree=_e,w(Be,_e,u(Be.el),y(Be),d,v,E),D.el=_e.el,re===null&&Ai(d,_e.el),q&&Re(q,v),(Oe=D.props&&D.props.onVnodeUpdated)&&Re(()=>Qe(Oe,Q,D,ce),v)}else{let D;const{el:$,props:q}=p,{bm:Q,m:ce,parent:re,root:Oe,type:_e}=d,Be=Dn(p);if(Ht(d,!1),Q&&as(Q),!Be&&(D=q&&q.onVnodeBeforeMount)&&Qe(D,re,p),Ht(d,!0),$&&de){const xe=()=>{d.subTree=gs(d),de($,d.subTree,d,v,null)};Be&&_e.__asyncHydrate?_e.__asyncHydrate($,d,xe):xe()}else{Oe.ce&&Oe.ce._injectChildStyle(_e);const xe=d.subTree=gs(d);w(null,xe,m,b,d,v,E),p.el=xe.el}if(ce&&Re(ce,v),!Be&&(D=q&&q.onVnodeMounted)){const xe=p;Re(()=>Qe(D,re,xe),v)}(p.shapeFlag&256||re&&Dn(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Re(d.a,v),d.isMounted=!0,p=m=b=null}};d.scope.on();const S=d.effect=new ja(T);d.scope.off();const I=d.update=S.run.bind(S),j=d.job=S.runIfDirty.bind(S);j.i=d,j.id=d.uid,S.scheduler=()=>Ei(j),Ht(d,!0),I()},Z=(d,p,m)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,kf(d,p.props,b,m),Df(d,p.children,m),Mt(),Xi(d),Ut()},ee=(d,p,m,b,v,E,A,T,S=!1)=>{const I=d&&d.children,j=d?d.shapeFlag:0,D=p.children,{patchFlag:$,shapeFlag:q}=p;if($>0){if($&128){_t(I,D,m,b,v,E,A,T,S);return}else if($&256){rt(I,D,m,b,v,E,A,T,S);return}}q&8?(j&16&&Le(I,v,E),D!==I&&f(m,D)):j&16?q&16?_t(I,D,m,b,v,E,A,T,S):Le(I,v,E,!0):(j&8&&f(m,""),q&16&&Y(D,m,b,v,E,A,T,S))},rt=(d,p,m,b,v,E,A,T,S)=>{d=d||on,p=p||on;const I=d.length,j=p.length,D=Math.min(I,j);let $;for($=0;$<D;$++){const q=p[$]=S?St(p[$]):He(p[$]);w(d[$],q,m,null,v,E,A,T,S)}I>j?Le(d,v,E,!0,!1,D):Y(p,m,b,v,E,A,T,S,D)},_t=(d,p,m,b,v,E,A,T,S)=>{let I=0;const j=p.length;let D=d.length-1,$=j-1;for(;I<=D&&I<=$;){const q=d[I],Q=p[I]=S?St(p[I]):He(p[I]);if(Ze(q,Q))w(q,Q,m,null,v,E,A,T,S);else break;I++}for(;I<=D&&I<=$;){const q=d[D],Q=p[$]=S?St(p[$]):He(p[$]);if(Ze(q,Q))w(q,Q,m,null,v,E,A,T,S);else break;D--,$--}if(I>D){if(I<=$){const q=$+1,Q=q<j?p[q].el:b;for(;I<=$;)w(null,p[I]=S?St(p[I]):He(p[I]),m,Q,v,E,A,T,S),I++}}else if(I>$)for(;I<=D;)Ae(d[I],v,E,!0),I++;else{const q=I,Q=I,ce=new Map;for(I=Q;I<=$;I++){const Ne=p[I]=S?St(p[I]):He(p[I]);Ne.key!=null&&ce.set(Ne.key,I)}let re,Oe=0;const _e=$-Q+1;let Be=!1,xe=0;const Tn=new Array(_e);for(I=0;I<_e;I++)Tn[I]=0;for(I=q;I<=D;I++){const Ne=d[I];if(Oe>=_e){Ae(Ne,v,E,!0);continue}let Ye;if(Ne.key!=null)Ye=ce.get(Ne.key);else for(re=Q;re<=$;re++)if(Tn[re-Q]===0&&Ze(Ne,p[re])){Ye=re;break}Ye===void 0?Ae(Ne,v,E,!0):(Tn[Ye-Q]=I+1,Ye>=xe?xe=Ye:Be=!0,w(Ne,p[Ye],m,null,v,E,A,T,S),Oe++)}const Ki=Be?Ff(Tn):on;for(re=Ki.length-1,I=_e-1;I>=0;I--){const Ne=Q+I,Ye=p[Ne],qi=Ne+1<j?p[Ne+1].el:b;Tn[I]===0?w(null,Ye,m,qi,v,E,A,T,S):Be&&(re<0||I!==Ki[re]?Je(Ye,m,qi,2):re--)}}},Je=(d,p,m,b,v=null)=>{const{el:E,type:A,transition:T,children:S,shapeFlag:I}=d;if(I&6){Je(d.component.subTree,p,m,b);return}if(I&128){d.suspense.move(p,m,b);return}if(I&64){A.move(d,p,m,F);return}if(A===$e){r(E,p,m);for(let D=0;D<S.length;D++)Je(S[D],p,m,b);r(d.anchor,p,m);return}if(A===ms){L(d,p,m);return}if(b!==2&&I&1&&T)if(b===0)T.beforeEnter(E),r(E,p,m),Re(()=>T.enter(E),v);else{const{leave:D,delayLeave:$,afterLeave:q}=T,Q=()=>r(E,p,m),ce=()=>{D(E,()=>{Q(),q&&q()})};$?$(E,Q,ce):ce()}else r(E,p,m)},Ae=(d,p,m,b=!1,v=!1)=>{const{type:E,props:A,ref:T,children:S,dynamicChildren:I,shapeFlag:j,patchFlag:D,dirs:$,cacheIndex:q}=d;if(D===-2&&(v=!1),T!=null&&$s(T,null,m,d,!0),q!=null&&(p.renderCache[q]=void 0),j&256){p.ctx.deactivate(d);return}const Q=j&1&&$,ce=!Dn(d);let re;if(ce&&(re=A&&A.onVnodeBeforeUnmount)&&Qe(re,p,d),j&6)ur(d.component,m,b);else{if(j&128){d.suspense.unmount(m,b);return}Q&&$t(d,null,p,"beforeUnmount"),j&64?d.type.remove(d,p,m,F,b):I&&!I.hasOnce&&(E!==$e||D>0&&D&64)?Le(I,p,m,!1,!0):(E===$e&&D&384||!v&&j&16)&&Le(S,p,m),b&&en(d)}(ce&&(re=A&&A.onVnodeUnmounted)||Q)&&Re(()=>{re&&Qe(re,p,d),Q&&$t(d,null,p,"unmounted")},m)},en=d=>{const{type:p,el:m,anchor:b,transition:v}=d;if(p===$e){tn(m,b);return}if(p===ms){O(d);return}const E=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:T}=v,S=()=>A(m,E);T?T(d.el,E,S):S()}else E()},tn=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},ur=(d,p,m)=>{const{bum:b,scope:v,job:E,subTree:A,um:T,m:S,a:I}=d;co(S),co(I),b&&as(b),v.stop(),E&&(E.flags|=8,Ae(A,d,p,m)),T&&Re(T,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Le=(d,p,m,b=!1,v=!1,E=0)=>{for(let A=E;A<d.length;A++)Ae(d[A],p,m,b,v)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[dc];return m?h(m):p};let U=!1;const R=(d,p,m)=>{d==null?p._vnode&&Ae(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,m),p._vnode=d,U||(U=!0,Xi(),lc(),U=!1)},F={p:w,um:Ae,m:Je,r:en,mt:ue,mc:Y,pc:ee,pbc:H,n:y,o:e};let te,de;return t&&([te,de]=t(F)),{render:R,hydrate:te,createApp:Rf(R,te)}}function ps({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Uf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ci(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=St(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ci(o,c)),c.type===Qr&&(c.el=o.el)}}function Ff(e){const t=e.slice(),n=[0];let r,s,i,o,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<l?i=c+1:o=c;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Fc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fc(t)}function co(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Bf=Symbol.for("v-scx"),$f=()=>ze(Bf);function yr(e,t,n){return Bc(e,t,n)}function Bc(e,t,n=ae){const{immediate:r,deep:s,flush:i,once:o}=n,c=pe({},n),a=t&&r||!t&&i!=="post";let l;if(qn){if(i==="sync"){const g=$f();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=Ve,g.resume=Ve,g.pause=Ve,g}}const f=ge;c.call=(g,_,w)=>qe(g,f,_,w);let u=!1;i==="post"?c.scheduler=g=>{Re(g,f&&f.suspense)}:i!=="sync"&&(u=!0,c.scheduler=(g,_)=>{_?g():Ei(g)}),c.augmentJob=g=>{t&&(g.flags|=4),u&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const h=Zu(e,t,c);return qn&&(l?l.push(h):a&&h()),h}function Hf(e,t,n){const r=this.proxy,s=he(e)?e.includes(".")?$c(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=rr(this),c=Bc(s,i.bind(r),n);return o(),c}function $c(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const jf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fe(t)}Modifiers`]||e[`${Zt(t)}Modifiers`];function Vf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let s=n;const i=t.startsWith("update:"),o=i&&jf(r,t.slice(7));o&&(o.trim&&(s=n.map(f=>he(f)?f.trim():f)),o.number&&(s=n.map(yu)));let c,a=r[c=os(t)]||r[c=os(Fe(t))];!a&&i&&(a=r[c=os(Zt(t))]),a&&qe(a,e,6,s);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,qe(l,e,6,s)}}function Hc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!K(e)){const a=l=>{const f=Hc(l,t,!0);f&&(c=!0,pe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(fe(e)&&r.set(e,null),null):(W(i)?i.forEach(a=>o[a]=null):pe(o,i),fe(e)&&r.set(e,o),o)}function Yr(e,t){return!e||!Hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,Zt(t))||ne(e,t))}function gs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:u,data:h,setupState:g,ctx:_,inheritAttrs:w}=e,B=Rr(e);let x,P;try{if(n.shapeFlag&4){const O=s||r,C=O;x=He(l.call(C,O,f,u,g,h,_)),P=c}else{const O=t;x=He(O.length>1?O(u,{attrs:c,slots:o,emit:a}):O(u,null)),P=t.props?c:zf(c)}}catch(O){Mn.length=0,nr(O,e,1),x=Te(we)}let L=x;if(P&&w!==!1){const O=Object.keys(P),{shapeFlag:C}=L;O.length&&C&7&&(i&&O.some(li)&&(P=Kf(P,i)),L=Dt(L,P,!1,!0))}return n.dirs&&(L=Dt(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&Yt(L,n.transition),x=L,Rr(B),x}function Wf(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(Kn(s)){if(s.type!==we||s.children==="v-if"){if(n)return;n=s}}else return}return n}const zf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hr(n))&&((t||(t={}))[n]=e[n]);return t},Kf=(e,t)=>{const n={};for(const r in e)(!li(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:a}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?lo(r,o,l):!!o;if(a&8){const f=t.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==r[h]&&!Yr(l,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?lo(r,o,l):!0:!!o;return!1}function lo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Yr(n,i))return!0}return!1}function Ai({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const jc=e=>e.__isSuspense;let zs=0;const Gf={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,c,a,l){if(e==null)Jf(t,n,r,s,i,o,c,a,l);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}Yf(e,t,n,r,s,o,c,a,l)}},hydrate:Qf,normalize:Xf},lv=Gf;function zn(e,t){const n=e.props&&e.props[t];K(n)&&n()}function Jf(e,t,n,r,s,i,o,c,a){const{p:l,o:{createElement:f}}=a,u=f("div"),h=e.suspense=Vc(e,s,r,t,u,n,i,o,c,a);l(null,h.pendingBranch=e.ssContent,u,null,r,h,i,o),h.deps>0?(zn(e,"onPending"),zn(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,i,o),dn(h,e.ssFallback)):h.resolve(!1,!0)}function Yf(e,t,n,r,s,i,o,c,{p:a,um:l,o:{createElement:f}}){const u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;const h=t.ssContent,g=t.ssFallback,{activeBranch:_,pendingBranch:w,isInFallback:B,isHydrating:x}=u;if(w)u.pendingBranch=h,Ze(h,w)?(a(w,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0?u.resolve():B&&(x||(a(_,g,n,r,s,null,i,o,c),dn(u,g)))):(u.pendingId=zs++,x?(u.isHydrating=!1,u.activeBranch=w):l(w,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),B?(a(null,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0?u.resolve():(a(_,g,n,r,s,null,i,o,c),dn(u,g))):_&&Ze(h,_)?(a(_,h,n,r,s,u,i,o,c),u.resolve(!0)):(a(null,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0&&u.resolve()));else if(_&&Ze(h,_))a(_,h,n,r,s,u,i,o,c),dn(u,h);else if(zn(t,"onPending"),u.pendingBranch=h,h.shapeFlag&512?u.pendingId=h.component.suspenseId:u.pendingId=zs++,a(null,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0)u.resolve();else{const{timeout:P,pendingId:L}=u;P>0?setTimeout(()=>{u.pendingId===L&&u.fallback(g)},P):P===0&&u.fallback(g)}}function Vc(e,t,n,r,s,i,o,c,a,l,f=!1){const{p:u,m:h,um:g,n:_,o:{parentNode:w,remove:B}}=l;let x;const P=ed(e);P&&t&&t.pendingBranch&&(x=t.pendingId,t.deps++);const L=e.props?Ua(e.props.timeout):void 0,O=i,C={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:zs++,timeout:typeof L=="number"?L:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(M=!1,V=!1){const{vnode:Y,activeBranch:k,pendingBranch:H,pendingId:J,effects:N,parentComponent:G,container:ue}=C;let me=!1;C.isHydrating?C.isHydrating=!1:M||(me=k&&H.transition&&H.transition.mode==="out-in",me&&(k.transition.afterLeave=()=>{J===C.pendingId&&(h(H,ue,i===O?_(k):i,0),Fs(N))}),k&&(w(k.el)===ue&&(i=_(k)),g(k,G,C,!0)),me||h(H,ue,i,0)),dn(C,H),C.pendingBranch=null,C.isInFallback=!1;let ie=C.parent,Z=!1;for(;ie;){if(ie.pendingBranch){ie.effects.push(...N),Z=!0;break}ie=ie.parent}!Z&&!me&&Fs(N),C.effects=[],P&&t&&t.pendingBranch&&x===t.pendingId&&(t.deps--,t.deps===0&&!V&&t.resolve()),zn(Y,"onResolve")},fallback(M){if(!C.pendingBranch)return;const{vnode:V,activeBranch:Y,parentComponent:k,container:H,namespace:J}=C;zn(V,"onFallback");const N=_(Y),G=()=>{!C.isInFallback||(u(null,M,H,N,k,null,J,c,a),dn(C,M))},ue=M.transition&&M.transition.mode==="out-in";ue&&(Y.transition.afterLeave=G),C.isInFallback=!0,g(Y,k,null,!0),ue||G()},move(M,V,Y){C.activeBranch&&h(C.activeBranch,M,V,Y),C.container=M},next(){return C.activeBranch&&_(C.activeBranch)},registerDep(M,V,Y){const k=!!C.pendingBranch;k&&C.deps++;const H=M.vnode.el;M.asyncDep.catch(J=>{nr(J,M,0)}).then(J=>{if(M.isUnmounted||C.isUnmounted||C.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:N}=M;qs(M,J,!1),H&&(N.el=H);const G=!H&&M.subTree.el;V(M,N,w(H||M.subTree.el),H?null:_(M.subTree),C,o,Y),G&&B(G),Ai(M,N.el),k&&--C.deps===0&&C.resolve()})},unmount(M,V){C.isUnmounted=!0,C.activeBranch&&g(C.activeBranch,n,M,V),C.pendingBranch&&g(C.pendingBranch,n,M,V)}};return C}function Qf(e,t,n,r,s,i,o,c,a){const l=t.suspense=Vc(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,c,!0),f=a(e,l.pendingBranch=t.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),f}function Xf(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=uo(r?n.default:n),e.ssFallback=r?uo(n.fallback):Te(we)}function uo(e){let t;if(K(e)){const n=mn&&e._c;n&&(e._d=!1,Ri()),e=e(),n&&(e._d=!0,t=ke,Wc())}return W(e)&&(e=Wf(e)),e=He(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Zf(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Fs(e)}function dn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Ai(r,s))}function ed(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const $e=Symbol.for("v-fgt"),Qr=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),ms=Symbol.for("v-stc"),Mn=[];let ke=null;function Ri(e=!1){Mn.push(ke=e?null:[])}function Wc(){Mn.pop(),ke=Mn[Mn.length-1]||null}let mn=1;function fo(e){mn+=e,e<0&&ke&&(ke.hasOnce=!0)}function zc(e){return e.dynamicChildren=mn>0?ke||on:null,Wc(),mn>0&&ke&&ke.push(e),e}function uv(e,t,n,r,s,i){return zc(Gc(e,t,n,r,s,i,!0))}function Kc(e,t,n,r,s){return zc(Te(e,t,n,r,s,!0))}function Kn(e){return e?e.__v_isVNode===!0:!1}function Ze(e,t){return e.type===t.type&&e.key===t.key}const qc=({key:e})=>e!=null?e:null,br=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Ee(e)||K(e)?{i:Pe,r:e,k:t,f:!!n}:e:null);function Gc(e,t=null,n=null,r=0,s=null,i=e===$e?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qc(t),ref:t&&br(t),scopeId:fc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return c?(Pi(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),mn>0&&!o&&ke&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&ke.push(a),a}const Te=td;function td(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===yf)&&(e=we),Kn(e)){const c=Dt(e,t,!0);return n&&Pi(c,n),mn>0&&!i&&ke&&(c.shapeFlag&6?ke[ke.indexOf(e)]=c:ke.push(c)),c.patchFlag=-2,c}if(hd(e)&&(e=e.__vccOpts),t){t=nd(t);let{class:c,style:a}=t;c&&!he(c)&&(t.class=hi(c)),fe(a)&&(bi(a)&&!W(a)&&(a=pe({},a)),t.style=di(a))}const o=he(e)?1:jc(e)?128:hc(e)?64:fe(e)?4:K(e)?2:0;return Gc(e,t,n,r,s,o,i,!0)}function nd(e){return e?bi(e)||Oc(e)?pe({},e):e:null}function Dt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=e,l=t?sd(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&qc(l),ref:t&&t.ref?n&&i?W(i)?i.concat(br(t)):[i,br(t)]:br(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dt(e.ssContent),ssFallback:e.ssFallback&&Dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Yt(f,a.clone(f)),f}function rd(e=" ",t=0){return Te(Qr,null,e,t)}function fv(e="",t=!1){return t?(Ri(),Kc(we,null,e)):Te(we,null,e)}function He(e){return e==null||typeof e=="boolean"?Te(we):W(e)?Te($e,null,e.slice()):Kn(e)?St(e):Te(Qr,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dt(e)}function Pi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Pi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Oc(t)?t._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Pe},n=32):(t=String(t),r&64?(n=16,t=[rd(t)]):n=8);e.children=t,e.shapeFlag|=n}function sd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=hi([t.class,r.class]));else if(s==="style")t.style=di([t.style,r.style]);else if(Hr(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Qe(e,t,n,r=null){qe(e,t,7,[n,r])}const id=Rc();let od=0;function ad(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||id,i={uid:od++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ha(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nc(r,s),emitsOptions:Hc(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Vf.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const Jc=()=>ge||Pe;let kr,Ks;{const e=zr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};kr=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),Ks=t("__VUE_SSR_SETTERS__",n=>qn=n)}const rr=e=>{const t=ge;return kr(e),e.scope.on(),()=>{e.scope.off(),kr(t)}},ho=()=>{ge&&ge.scope.off(),kr(null)};function Yc(e){return e.vnode.shapeFlag&4}let qn=!1;function cd(e,t=!1,n=!1){t&&Ks(t);const{props:r,children:s}=e.vnode,i=Yc(e);Pf(e,r,i,t),Nf(e,s,n);const o=i?ld(e,t):void 0;return t&&Ks(!1),o}function ld(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wf);const{setup:r}=n;if(r){Mt();const s=e.setupContext=r.length>1?fd(e):null,i=rr(e),o=tr(r,e,0,[e.props,s]),c=Na(o);if(Ut(),i(),(c||e.sp)&&!Dn(e)&&bc(e),c){if(o.then(ho,ho),t)return o.then(a=>{qs(e,a,t)}).catch(a=>{nr(a,e,0)});e.asyncDep=o}else qs(e,o,t)}else Qc(e,t)}function qs(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=ic(t)),Qc(e,n)}let po;function Qc(e,t,n){const r=e.type;if(!e.render){if(!t&&po&&!r.render){const s=r.template||Si(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,l=pe(pe({isCustomElement:i,delimiters:c},o),a);r.render=po(s,l)}}e.render=r.render||Ve}{const s=rr(e);Mt();try{Ef(e)}finally{Ut(),s()}}}const ud={get(e,t){return ye(e,"get",""),e[t]}};function fd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ud),slots:e.slots,emit:e.emit,expose:t}}function Xr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ic(er(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ln)return Ln[n](e)},has(t,n){return n in t||n in Ln}})):e.proxy}function dd(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function hd(e){return K(e)&&"__vccOpts"in e}const je=(e,t)=>Qu(e,t,qn);function ki(e,t,n){const r=arguments.length;return r===2?fe(t)&&!W(t)?Kn(t)?Te(e,null,[t]):Te(e,t):Te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kn(n)&&(n=[n]),Te(e,t,n))}const pd="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gs;const go=typeof window!="undefined"&&window.trustedTypes;if(go)try{Gs=go.createPolicy("vue",{createHTML:e=>e})}catch{}const Xc=Gs?e=>Gs.createHTML(e):e=>e,gd="http://www.w3.org/2000/svg",md="http://www.w3.org/1998/Math/MathML",at=typeof document!="undefined"?document:null,mo=at&&at.createElement("template"),_d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?at.createElementNS(gd,e):t==="mathml"?at.createElementNS(md,e):n?at.createElement(e,{is:n}):at.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mo.innerHTML=Xc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=mo.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},vt="transition",An="animation",_n=Symbol("_vtc"),Zc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},el=pe({},mc,Zc),vd=e=>(e.displayName="Transition",e.props=el,e),dv=vd((e,{slots:t})=>ki(cf,tl(e),t)),jt=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},_o=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function tl(e){const t={};for(const N in e)N in Zc||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:f=c,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=yd(s),w=_&&_[0],B=_&&_[1],{onBeforeEnter:x,onEnter:P,onEnterCancelled:L,onLeave:O,onLeaveCancelled:C,onBeforeAppear:M=x,onAppear:V=P,onAppearCancelled:Y=L}=t,k=(N,G,ue)=>{wt(N,G?f:c),wt(N,G?l:o),ue&&ue()},H=(N,G)=>{N._isLeaving=!1,wt(N,u),wt(N,g),wt(N,h),G&&G()},J=N=>(G,ue)=>{const me=N?V:P,ie=()=>k(G,N,ue);jt(me,[G,ie]),vo(()=>{wt(G,N?a:i),ot(G,N?f:c),_o(me)||yo(G,r,w,ie)})};return pe(t,{onBeforeEnter(N){jt(x,[N]),ot(N,i),ot(N,o)},onBeforeAppear(N){jt(M,[N]),ot(N,a),ot(N,l)},onEnter:J(!1),onAppear:J(!0),onLeave(N,G){N._isLeaving=!0;const ue=()=>H(N,G);ot(N,u),ot(N,h),rl(),vo(()=>{!N._isLeaving||(wt(N,u),ot(N,g),_o(O)||yo(N,r,B,ue))}),jt(O,[N,ue])},onEnterCancelled(N){k(N,!1),jt(L,[N])},onAppearCancelled(N){k(N,!0),jt(Y,[N])},onLeaveCancelled(N){H(N),jt(C,[N])}})}function yd(e){if(e==null)return null;if(fe(e))return[_s(e.enter),_s(e.leave)];{const t=_s(e);return[t,t]}}function _s(e){return Ua(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[_n]||(e[_n]=new Set)).add(t)}function wt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[_n];n&&(n.delete(t),n.size||(e[_n]=void 0))}function vo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bd=0;function yo(e,t,n,r){const s=e._endId=++bd,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=nl(e,t);if(!o)return r();const l=o+"end";let f=0;const u=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++f>=a&&u()};setTimeout(()=>{f<a&&u()},c+1),e.addEventListener(l,h)}function nl(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${vt}Delay`),i=r(`${vt}Duration`),o=bo(s,i),c=r(`${An}Delay`),a=r(`${An}Duration`),l=bo(c,a);let f=null,u=0,h=0;t===vt?o>0&&(f=vt,u=o,h=i.length):t===An?l>0&&(f=An,u=l,h=a.length):(u=Math.max(o,l),f=u>0?o>l?vt:An:null,h=f?f===vt?i.length:a.length:0);const g=f===vt&&/\b(transform|all)(,|$)/.test(r(`${vt}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:g}}function bo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>wo(n)+wo(e[r])))}function wo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function rl(){return document.body.offsetHeight}function wd(e,t,n){const r=e[_n];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Eo=Symbol("_vod"),Ed=Symbol("_vsh"),Id=Symbol(""),Sd=/(^|;)\s*display\s*:/;function Td(e,t,n){const r=e.style,s=he(n);let i=!1;if(n&&!s){if(t)if(he(t))for(const o of t.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&wr(r,c,"")}else for(const o in t)n[o]==null&&wr(r,o,"");for(const o in n)o==="display"&&(i=!0),wr(r,o,n[o])}else if(s){if(t!==n){const o=r[Id];o&&(n+=";"+o),r.cssText=n,i=Sd.test(n)}}else t&&e.removeAttribute("style");Eo in e&&(e[Eo]=i?r.display:"",e[Ed]&&(r.display="none"))}const Io=/\s*!important$/;function wr(e,t,n){if(W(n))n.forEach(r=>wr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cd(e,t);Io.test(n)?e.setProperty(Zt(r),n.replace(Io,""),"important"):e[r]=n}}const So=["Webkit","Moz","ms"],vs={};function Cd(e,t){const n=vs[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return vs[t]=r;r=Wr(r);for(let s=0;s<So.length;s++){const i=So[s]+r;if(i in e)return vs[t]=i}return t}const To="http://www.w3.org/1999/xlink";function Co(e,t,n,r,s,i=Tu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(To,t.slice(6,t.length)):e.setAttributeNS(To,t,n):n==null||i&&!Fa(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Lt(n)?String(n):n)}function Ao(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Xc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Fa(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Ad(e,t,n,r){e.addEventListener(t,n,r)}function Rd(e,t,n,r){e.removeEventListener(t,n,r)}const Ro=Symbol("_vei");function Pd(e,t,n,r,s=null){const i=e[Ro]||(e[Ro]={}),o=i[t];if(r&&o)o.value=r;else{const[c,a]=kd(t);if(r){const l=i[t]=Nd(r,s);Ad(e,c,l,a)}else o&&(Rd(e,c,o,a),i[t]=void 0)}}const Po=/(?:Once|Passive|Capture)$/;function kd(e){let t;if(Po.test(e)){t={};let r;for(;r=e.match(Po);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let ys=0;const Od=Promise.resolve(),xd=()=>ys||(Od.then(()=>ys=0),ys=Date.now());function Nd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(Dd(r,n.value),t,5,[r])};return n.value=e,n.attached=xd(),n}function Dd(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ld=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?wd(e,r,o):t==="style"?Td(e,n,r):Hr(t)?li(t)||Pd(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Md(e,t,r,o))?(Ao(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Co(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!he(r))?Ao(e,Fe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Co(e,t,r,o))};function Md(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ko(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ko(t)&&he(n)?!1:t in e}const sl=new WeakMap,il=new WeakMap,Or=Symbol("_moveCb"),Oo=Symbol("_enterCb"),Ud=e=>(delete e.props.mode,e),Fd=Ud({name:"TransitionGroup",props:pe({},el,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Jc(),r=gc();let s,i;return Ic(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!jd(s[0].el,n.vnode.el,o))return;s.forEach(Bd),s.forEach($d);const c=s.filter(Hd);rl(),c.forEach(a=>{const l=a.el,f=l.style;ot(l,o),f.transform=f.webkitTransform=f.transitionDuration="";const u=l[Or]=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",u),l[Or]=null,wt(l,o))};l.addEventListener("transitionend",u)})}),()=>{const o=X(e),c=tl(o);let a=o.tag||$e;if(s=[],i)for(let l=0;l<i.length;l++){const f=i[l];f.el&&f.el instanceof Element&&(s.push(f),Yt(f,Wn(f,c,r,n)),sl.set(f,f.el.getBoundingClientRect()))}i=t.default?Ii(t.default()):[];for(let l=0;l<i.length;l++){const f=i[l];f.key!=null&&Yt(f,Wn(f,c,r,n))}return Te(a,null,i)}}}),hv=Fd;function Bd(e){const t=e.el;t[Or]&&t[Or](),t[Oo]&&t[Oo]()}function $d(e){il.set(e,e.el.getBoundingClientRect())}function Hd(e){const t=sl.get(e),n=il.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function jd(e,t,n){const r=e.cloneNode(),s=e[_n];s&&s.forEach(c=>{c.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=nl(r);return i.removeChild(r),o}const Vd=["ctrl","shift","alt","meta"],Wd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Vd.some(n=>e[`${n}Key`]&&!t.includes(n))},pv=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const c=Wd[t[o]];if(c&&c(s,t))return}return e(s,...i)})},zd=pe({patchProp:Ld},_d);let xo;function Kd(){return xo||(xo=Lf(zd))}const qd=(...e)=>{const t=Kd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Jd(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Gd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Gd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jd(e){return he(e)?document.querySelector(e):e}function Oi(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const Qt=wi(!1);let Js;function Yd(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function Qd(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const ol="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Xd(e){const t=e.toLowerCase(),n=Qd(t),r=Yd(t,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Qt.value===!0&&(Js={is:{...s}}),ol===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const No=navigator.userAgent||navigator.vendor||window.opera,Zd={has:{touch:!1,webStorage:!1},within:{iframe:!1}},et={userAgent:No,is:Xd(No),has:{touch:ol},within:{iframe:window.self!==window.top}},Ys={install(e){const{$q:t}=e;Qt.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,et),Qt.value=!1}),t.platform=In(this)):t.platform=this}};{let e;Oi(et.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(Ys,et),Qt.value===!0&&(Object.assign(Ys,Js,Zd),Js=null)}function gv(e){return er(qr(e))}function mv(e){return er(e)}const Zr=(e,t)=>{const n=In(e);for(const r in e)Oi(t,r,()=>n[r],s=>{n[r]=s});return t},vn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(vn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Gn(){}function _v(e){return e.button===0}function vv(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function yv(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function bv(e){e.stopPropagation()}function Do(e){e.cancelable!==!1&&e.preventDefault()}function wv(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Ev(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Do,vn.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Do,vn.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function Iv(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],vn[s[3]])})}function Sv(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],vn[r[3]])}),e[n]=void 0)}function eh(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,n!==!0&&e.apply(this,i)};r!==null?clearTimeout(r):n===!0&&e.apply(this,i),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const bs=["sm","md","lg","xl"],{passive:Lo}=vn;var th=Zr({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Gn,setDebounce:Gn,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||et.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen!==void 0&&e.config.screen.bodyClasses===!0;this.__update=u=>{const[h,g]=i();if(g!==this.height&&(this.height=g),h!==this.width)this.width=h;else if(u!==!0)return;let _=this.sizes;this.gt.xs=h>=_.sm,this.gt.sm=h>=_.md,this.gt.md=h>=_.lg,this.gt.lg=h>=_.xl,this.lt.sm=h<_.sm,this.lt.md=h<_.md,this.lt.lg=h<_.lg,this.lt.xl=h<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let c,a={},l=16;this.setSizes=u=>{bs.forEach(h=>{u[h]!==void 0&&(a[h]=u[h])})},this.setDebounce=u=>{l=u};const f=()=>{const u=getComputedStyle(document.body);u.getPropertyValue("--q-size-sm")&&bs.forEach(h=>{this.sizes[h]=parseInt(u.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{bs.forEach(g=>{h[g]&&(this.sizes[g]=h[g])}),this.__update(!0)},this.setDebounce=h=>{c!==void 0&&r.removeEventListener("resize",c,Lo),c=h>0?eh(this.__update,h):this.__update,r.addEventListener("resize",c,Lo)},this.setDebounce(l),Object.keys(a).length!==0?(this.setSizes(a),a=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Qt.value===!0?t.push(f):f()}});const ve=Zr({isActive:!1,mode:!1},{__media:void 0,set(e){ve.mode=e,e==="auto"?(ve.__media===void 0&&(ve.__media=window.matchMedia("(prefers-color-scheme: dark)"),ve.__updateMedia=()=>{ve.set("auto")},ve.__media.addListener(ve.__updateMedia)),e=ve.__media.matches):ve.__media!==void 0&&(ve.__media.removeListener(ve.__updateMedia),ve.__media=void 0),ve.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){ve.set(ve.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function nh(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let al=!1;function rh(e){al=e.isComposing===!0}function sh(e){return al===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function Tv(e,t){return sh(e)===!0?!1:[].concat(t).includes(e.keyCode)}function cl(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function ih({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=cl(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function oh(){const{is:e}=et,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=cl(e);s!==void 0&&n.add(`platform-${s}`)}}et.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),et.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function ah(e){for(const t in e)nh(t,e[t])}var ch={install(e){if(this.__installed!==!0){if(Qt.value===!0)oh();else{const{$q:t}=e;t.config.brand!==void 0&&ah(t.config.brand);const n=ih(et,t.config);document.body.classList.add.apply(document.body.classList,n)}et.is.ios===!0&&document.body.addEventListener("touchstart",Gn),window.addEventListener("keydown",rh,!0)}}};const ll=()=>!0;function lh(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function uh(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function fh(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return ll;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(lh).map(uh)),()=>t.includes(window.location.hash)}var dh={__history:[],add:Gn,remove:Gn,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=et.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=ll),this.__history.push(o)},this.remove=o=>{const c=this.__history.indexOf(o);c>=0&&this.__history.splice(c,1)};const s=fh(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},Mo={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Uo(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const Tt=Zr({__qLang:{}},{getLocale:Uo,set(e=Mo,t){const n={...e,rtl:e.rtl===!0,getLocale:Uo};{if(n.set=Tt.set,Tt.__langConfig===void 0||Tt.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Tt.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=Tt.__qLang,Tt.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||Mo))}});var hh={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const xr=Zr({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=xr.set,Object.assign(xr.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Oi(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||hh))}}),ph="_q_",Cv="_q_l_",Av="_q_pc_",Rv="_q_fo_";function Pv(){}const Fo={};let ul=!1;function gh(){ul=!0}function Bo(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const $o=[Ys,ch,ve,th,dh,Tt,xr];function Ho(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function mh(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(ph,n.$q),Ho(n,$o),t.components!==void 0&&Object.values(t.components).forEach(r=>{Bo(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{Bo(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&Ho(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&$o.includes(r)===!1)),Qt.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var _h=function(e,t={}){const n={version:"2.17.1"};ul===!1?(t.config!==void 0&&Object.assign(Fo,t.config),n.config={...Fo},gh()):n.config=t.config||{},mh(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},vh={name:"Quasar",version:"2.17.1",install:_h,lang:Tt,iconSet:xr};const yh=qr({name:"App",__name:"App",setup(e){return(t,n)=>{const r=vf("router-view");return Ri(),Kc(r)}}});function kv(e){return e}var bh=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const wh=Symbol();var jo;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(jo||(jo={}));function Eh(){const e=Au(!0),t=e.run(()=>wi({}));let n=[],r=[];const s=er({install(i){s._a=i,i.provide(wh,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!bh?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}var ws=()=>Eh();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const sn=typeof document!="undefined";function fl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ih(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&fl(e.default)}const se=Object.assign;function Es(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ge(s)?s.map(e):e(s)}return n}const Un=()=>{},Ge=Array.isArray,dl=/#/g,Sh=/&/g,Th=/\//g,Ch=/=/g,Ah=/\?/g,hl=/\+/g,Rh=/%5B/g,Ph=/%5D/g,pl=/%5E/g,kh=/%60/g,gl=/%7B/g,Oh=/%7C/g,ml=/%7D/g,xh=/%20/g;function xi(e){return encodeURI(""+e).replace(Oh,"|").replace(Rh,"[").replace(Ph,"]")}function Nh(e){return xi(e).replace(gl,"{").replace(ml,"}").replace(pl,"^")}function Qs(e){return xi(e).replace(hl,"%2B").replace(xh,"+").replace(dl,"%23").replace(Sh,"%26").replace(kh,"`").replace(gl,"{").replace(ml,"}").replace(pl,"^")}function Dh(e){return Qs(e).replace(Ch,"%3D")}function Lh(e){return xi(e).replace(dl,"%23").replace(Ah,"%3F")}function Mh(e){return e==null?"":Lh(e).replace(Th,"%2F")}function Jn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Uh=/\/$/,Fh=e=>e.replace(Uh,"");function Is(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=jh(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Jn(o)}}function Bh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Vo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function $h(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&yn(t.matched[r],n.matched[s])&&_l(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function yn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _l(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Hh(e[n],t[n]))return!1;return!0}function Hh(e,t){return Ge(e)?Wo(e,t):Ge(t)?Wo(t,e):e===t}function Wo(e,t){return Ge(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function jh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Yn;(function(e){e.pop="pop",e.push="push"})(Yn||(Yn={}));var Fn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Fn||(Fn={}));function Vh(e){if(!e)if(sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Fh(e)}const Wh=/^[^#]+#/;function zh(e,t){return e.replace(Wh,"#")+t}function Kh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const es=()=>({left:window.scrollX,top:window.scrollY});function qh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Kh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function zo(e,t){return(history.state?history.state.position-t:-1)+e}const Xs=new Map;function Gh(e,t){Xs.set(e,t)}function Jh(e){const t=Xs.get(e);return Xs.delete(e),t}let Yh=()=>location.protocol+"//"+location.host;function vl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Vo(a,"")}return Vo(n,e)+r+s}function Qh(e,t,n,r){let s=[],i=[],o=null;const c=({state:h})=>{const g=vl(e,location),_=n.value,w=t.value;let B=0;if(h){if(n.value=g,t.value=h,o&&o===_){o=null;return}B=w?h.position-w.position:0}else r(g);s.forEach(x=>{x(n.value,_,{delta:B,type:Yn.pop,direction:B?B>0?Fn.forward:Fn.back:Fn.unknown})})};function a(){o=n.value}function l(h){s.push(h);const g=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(se({},h.state,{scroll:es()}),"")}function u(){for(const h of i)h();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:u}}function Ko(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?es():null}}function Xh(e){const{history:t,location:n}=window,r={value:vl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const u=e.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+a:Yh()+e+a;try{t[f?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(a,l){const f=se({},t.state,Ko(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=se({},s.value,t.state,{forward:a,scroll:es()});i(f.current,f,!0);const u=se({},Ko(r.value,a,null),{position:f.position+1},l);i(a,u,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Zh(e){e=Vh(e);const t=Xh(e),n=Qh(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=se({location:"",base:e,go:r,createHref:zh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ep(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Zh(e)}function tp(e){return typeof e=="string"||e&&typeof e=="object"}function yl(e){return typeof e=="string"||typeof e=="symbol"}const bl=Symbol("");var qo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(qo||(qo={}));function bn(e,t){return se(new Error,{type:e,[bl]:!0},t)}function it(e,t){return e instanceof Error&&bl in e&&(t==null||!!(e.type&t))}const Go="[^/]+?",np={sensitive:!1,strict:!1,start:!0,end:!0},rp=/[.+*?^${}()[\]/\\]/g;function sp(e,t){const n=se({},np,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const h=l[u];let g=40+(n.sensitive?.25:0);if(h.type===0)u||(s+="/"),s+=h.value.replace(rp,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:w,optional:B,regexp:x}=h;i.push({name:_,repeatable:w,optional:B});const P=x||Go;if(P!==Go){g+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+O.message)}}let L=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;u||(L=B&&l.length<2?`(?:/${L})`:"/"+L),B&&(L+="?"),s+=L,g+=20,B&&(g+=-8),w&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),u={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",_=i[h-1];u[_.name]=g&&_.repeatable?g.split("/"):g}return u}function a(l){let f="",u=!1;for(const h of e){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:_,repeatable:w,optional:B}=g,x=_ in l?l[_]:"";if(Ge(x)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=Ge(x)?x.join("/"):x;if(!P)if(B)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);f+=P}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function ip(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function wl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=ip(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Jo(r))return 1;if(Jo(s))return-1}return s.length-r.length}function Jo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const op={type:0,value:""},ap=/[a-zA-Z0-9_]/;function cp(e){if(!e)return[[]];if(e==="/")return[[op]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function u(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&u(),o()):a===":"?(u(),n=1):h();break;case 4:h(),n=r;break;case 1:a==="("?n=2:ap.test(a)?h():(u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function lp(e,t,n){const r=sp(cp(e.path),n),s=se(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function up(e,t){const n=[],r=new Map;t=Zo({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,g){const _=!g,w=Qo(u);w.aliasOf=g&&g.record;const B=Zo(t,u),x=[w];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of O)x.push(Qo(se({},w,{components:g?g.record.components:w.components,path:C,aliasOf:g?g.record:w})))}let P,L;for(const O of x){const{path:C}=O;if(h&&C[0]!=="/"){const M=h.record.path,V=M[M.length-1]==="/"?"":"/";O.path=h.record.path+(C&&V+C)}if(P=lp(O,h,B),g?g.alias.push(P):(L=L||P,L!==P&&L.alias.push(P),_&&u.name&&!Xo(P)&&o(u.name)),El(P)&&a(P),w.children){const M=w.children;for(let V=0;V<M.length;V++)i(M[V],P,g&&g.children[V])}g=g||P}return L?()=>{o(L)}:Un}function o(u){if(yl(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){const h=hp(u,n);n.splice(h,0,u),u.record.name&&!Xo(u)&&r.set(u.record.name,u)}function l(u,h){let g,_={},w,B;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw bn(1,{location:u});B=g.record.name,_=se(Yo(h.params,g.keys.filter(L=>!L.optional).concat(g.parent?g.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),u.params&&Yo(u.params,g.keys.map(L=>L.name))),w=g.stringify(_)}else if(u.path!=null)w=u.path,g=n.find(L=>L.re.test(w)),g&&(_=g.parse(w),B=g.record.name);else{if(g=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!g)throw bn(1,{location:u,currentLocation:h});B=g.record.name,_=se({},h.params,u.params),w=g.stringify(_)}const x=[];let P=g;for(;P;)x.unshift(P.record),P=P.parent;return{name:B,path:w,params:_,matched:x,meta:dp(x)}}e.forEach(u=>i(u));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Yo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Qo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Xo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dp(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Zo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function hp(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;wl(e,t[i])<0?r=i:n=i+1}const s=pp(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function pp(e){let t=e;for(;t=t.parent;)if(El(t)&&wl(e,t)===0)return t}function El({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function gp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hl," "),o=i.indexOf("="),c=Jn(o<0?i:i.slice(0,o)),a=o<0?null:Jn(i.slice(o+1));if(c in t){let l=t[c];Ge(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function ea(e){let t="";for(let n in e){const r=e[n];if(n=Dh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(r)?r.map(i=>i&&Qs(i)):[r&&Qs(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function mp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ge(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const _p=Symbol(""),ta=Symbol(""),ts=Symbol(""),Ni=Symbol(""),Zs=Symbol("");function Rn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ct(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=h=>{h===!1?a(bn(4,{from:n,to:t})):h instanceof Error?a(h):tp(h)?a(bn(2,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),c())},f=i(()=>e.call(r&&r.instances[s],t,n,l));let u=Promise.resolve(f);e.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ss(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const c in o.components){let a=o.components[c];if(!(t!=="beforeRouteEnter"&&!o.instances[c]))if(fl(a)){const f=(a.__vccOpts||a)[t];f&&i.push(Ct(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const u=Ih(f)?f.default:f;o.mods[c]=f,o.components[c]=u;const g=(u.__vccOpts||u)[t];return g&&Ct(g,n,r,o,c,s)()}))}}return i}function na(e){const t=ze(ts),n=ze(Ni),r=je(()=>{const a=ln(e.to);return t.resolve(a)}),s=je(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],u=n.matched;if(!f||!u.length)return-1;const h=u.findIndex(yn.bind(null,f));if(h>-1)return h;const g=ra(a[l-2]);return l>1&&ra(f)===g&&u[u.length-1].path!==g?u.findIndex(yn.bind(null,a[l-2])):h}),i=je(()=>s.value>-1&&wp(n.params,r.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&_l(n.params,r.value.params));function c(a={}){return bp(a)?t[ln(e.replace)?"replace":"push"](ln(e.to)).catch(Un):Promise.resolve()}return{route:r,href:je(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const vp=qr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:na,setup(e,{slots:t}){const n=In(na(e)),{options:r}=ze(ts),s=je(()=>({[sa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[sa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ki("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),yp=vp;function bp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function wp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ge(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ra(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const sa=(e,t,n)=>e!=null?e:t!=null?t:n,Ep=qr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ze(Zs),s=je(()=>e.route||r.value),i=ze(ta,0),o=je(()=>{let l=ln(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),c=je(()=>s.value.matched[o.value]);vr(ta,je(()=>o.value+1)),vr(_p,c),vr(Zs,s);const a=wi();return yr(()=>[a.value,c.value,e.name],([l,f,u],[h,g,_])=>{f&&(f.instances[u]=l,g&&g!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!yn(f,g)||!h)&&(f.enterCallbacks[u]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,f=e.name,u=c.value,h=u&&u.components[f];if(!h)return ia(n.default,{Component:h,route:l});const g=u.props[f],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,B=ki(h,se({},_,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return ia(n.default,{Component:B,route:l})||B}}});function ia(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ip=Ep;function Sp(e){const t=up(e.routes,e),n=e.parseQuery||gp,r=e.stringifyQuery||ea,s=e.history,i=Rn(),o=Rn(),c=Rn(),a=qu(yt);let l=yt;sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Es.bind(null,y=>""+y),u=Es.bind(null,Mh),h=Es.bind(null,Jn);function g(y,U){let R,F;return yl(y)?(R=t.getRecordMatcher(y),F=U):F=y,t.addRoute(F,R)}function _(y){const U=t.getRecordMatcher(y);U&&t.removeRoute(U)}function w(){return t.getRoutes().map(y=>y.record)}function B(y){return!!t.getRecordMatcher(y)}function x(y,U){if(U=se({},U||a.value),typeof y=="string"){const p=Is(n,y,U.path),m=t.resolve({path:p.path},U),b=s.createHref(p.fullPath);return se(p,m,{params:h(m.params),hash:Jn(p.hash),redirectedFrom:void 0,href:b})}let R;if(y.path!=null)R=se({},y,{path:Is(n,y.path,U.path).path});else{const p=se({},y.params);for(const m in p)p[m]==null&&delete p[m];R=se({},y,{params:u(p)}),U.params=u(U.params)}const F=t.resolve(R,U),te=y.hash||"";F.params=f(h(F.params));const de=Bh(r,se({},y,{hash:Nh(te),path:F.path})),d=s.createHref(de);return se({fullPath:de,hash:te,query:r===ea?mp(y.query):y.query||{}},F,{redirectedFrom:void 0,href:d})}function P(y){return typeof y=="string"?Is(n,y,a.value.path):se({},y)}function L(y,U){if(l!==y)return bn(8,{from:U,to:y})}function O(y){return V(y)}function C(y){return O(se(P(y),{replace:!0}))}function M(y){const U=y.matched[y.matched.length-1];if(U&&U.redirect){const{redirect:R}=U;let F=typeof R=="function"?R(y):R;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),se({query:y.query,hash:y.hash,params:F.path!=null?{}:y.params},F)}}function V(y,U){const R=l=x(y),F=a.value,te=y.state,de=y.force,d=y.replace===!0,p=M(R);if(p)return V(se(P(p),{state:typeof p=="object"?se({},te,p.state):te,force:de,replace:d}),U||R);const m=R;m.redirectedFrom=U;let b;return!de&&$h(r,F,R)&&(b=bn(16,{to:m,from:F}),Je(F,F,!0,!1)),(b?Promise.resolve(b):H(m,F)).catch(v=>it(v)?it(v,2)?v:_t(v):ee(v,m,F)).then(v=>{if(v){if(it(v,2))return V(se({replace:d},P(v.to),{state:typeof v.to=="object"?se({},te,v.to.state):te,force:de}),U||m)}else v=N(m,F,!0,d,te);return J(m,F,v),v})}function Y(y,U){const R=L(y,U);return R?Promise.reject(R):Promise.resolve()}function k(y){const U=tn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(y):y()}function H(y,U){let R;const[F,te,de]=Tp(y,U);R=Ss(F.reverse(),"beforeRouteLeave",y,U);for(const p of F)p.leaveGuards.forEach(m=>{R.push(Ct(m,y,U))});const d=Y.bind(null,y,U);return R.push(d),Le(R).then(()=>{R=[];for(const p of i.list())R.push(Ct(p,y,U));return R.push(d),Le(R)}).then(()=>{R=Ss(te,"beforeRouteUpdate",y,U);for(const p of te)p.updateGuards.forEach(m=>{R.push(Ct(m,y,U))});return R.push(d),Le(R)}).then(()=>{R=[];for(const p of de)if(p.beforeEnter)if(Ge(p.beforeEnter))for(const m of p.beforeEnter)R.push(Ct(m,y,U));else R.push(Ct(p.beforeEnter,y,U));return R.push(d),Le(R)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),R=Ss(de,"beforeRouteEnter",y,U,k),R.push(d),Le(R))).then(()=>{R=[];for(const p of o.list())R.push(Ct(p,y,U));return R.push(d),Le(R)}).catch(p=>it(p,8)?p:Promise.reject(p))}function J(y,U,R){c.list().forEach(F=>k(()=>F(y,U,R)))}function N(y,U,R,F,te){const de=L(y,U);if(de)return de;const d=U===yt,p=sn?history.state:{};R&&(F||d?s.replace(y.fullPath,se({scroll:d&&p&&p.scroll},te)):s.push(y.fullPath,te)),a.value=y,Je(y,U,R,d),_t()}let G;function ue(){G||(G=s.listen((y,U,R)=>{if(!ur.listening)return;const F=x(y),te=M(F);if(te){V(se(te,{replace:!0}),F).catch(Un);return}l=F;const de=a.value;sn&&Gh(zo(de.fullPath,R.delta),es()),H(F,de).catch(d=>it(d,12)?d:it(d,2)?(V(d.to,F).then(p=>{it(p,20)&&!R.delta&&R.type===Yn.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ee(d,F,de))).then(d=>{d=d||N(F,de,!1),d&&(R.delta&&!it(d,8)?s.go(-R.delta,!1):R.type===Yn.pop&&it(d,20)&&s.go(-1,!1)),J(F,de,d)}).catch(Un)}))}let me=Rn(),ie=Rn(),Z;function ee(y,U,R){_t(y);const F=ie.list();return F.length?F.forEach(te=>te(y,U,R)):console.error(y),Promise.reject(y)}function rt(){return Z&&a.value!==yt?Promise.resolve():new Promise((y,U)=>{me.add([y,U])})}function _t(y){return Z||(Z=!y,ue(),me.list().forEach(([U,R])=>y?R(y):U()),me.reset()),y}function Je(y,U,R,F){const{scrollBehavior:te}=e;if(!sn||!te)return Promise.resolve();const de=!R&&Jh(zo(y.fullPath,0))||(F||!R)&&history.state&&history.state.scroll||null;return ac().then(()=>te(y,U,de)).then(d=>d&&qh(d)).catch(d=>ee(d,y,U))}const Ae=y=>s.go(y);let en;const tn=new Set,ur={currentRoute:a,listening:!0,addRoute:g,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:w,resolve:x,options:e,push:O,replace:C,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:rt,install(y){const U=this;y.component("RouterLink",yp),y.component("RouterView",Ip),y.config.globalProperties.$router=U,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(a)}),sn&&!en&&a.value===yt&&(en=!0,O(s.location).catch(te=>{}));const R={};for(const te in yt)Object.defineProperty(R,te,{get:()=>a.value[te],enumerable:!0});y.provide(ts,U),y.provide(Ni,nc(R)),y.provide(Zs,a);const F=y.unmount;tn.add(y),y.unmount=function(){tn.delete(y),tn.size<1&&(l=yt,G&&G(),G=null,a.value=yt,en=!1,Z=!1),F()}}};function Le(y){return y.reduce((U,R)=>U.then(()=>k(R)),Promise.resolve())}return ur}function Tp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(l=>yn(l,c))?r.push(c):n.push(c));const a=e.matched[o];a&&(t.matched.find(l=>yn(l,a))||s.push(a))}return[n,r,s]}function Ov(){return ze(ts)}function xv(e){return ze(Ni)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Cp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,f=i>>2,u=(i&3)<<4|c>>4;let h=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(h=64)),r.push(n[f],n[u],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Il(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Cp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const u=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||l==null||u==null)throw new Ap;const h=i<<2|c>>4;if(r.push(h),l!==64){const g=c<<4&240|l>>2;if(r.push(g),u!==64){const _=l<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ap extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rp=function(e){const t=Il(e);return Sl.encodeByteArray(t,!0)},Nr=function(e){return Rp(e).replace(/\./g,"")},Tl=function(e){try{return Sl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=()=>Pp().__FIREBASE_DEFAULTS__,Op=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},xp=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Tl(e[1]);return t&&JSON.parse(t)},ns=()=>{try{return kp()||Op()||xp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cl=e=>{var t,n;return(n=(t=ns())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Nv=e=>{const t=Cl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Al=()=>{var e;return(e=ns())===null||e===void 0?void 0:e.config},Rl=e=>{var t;return(t=ns())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[Nr(JSON.stringify(n)),Nr(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Lp(){var e;const t=(e=ns())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mp(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Up(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bp(){const e=Ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Lv(){return!Lp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $p(){try{return typeof indexedDB=="object"}catch{return!1}}function Hp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="FirebaseError";class Ft extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=jp,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Vp(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ft(s,c,r)}}function Vp(e,t){return e.replace(Wp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Wp=/\{\$([^}]+)}/g;function zp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Dr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(oa(i)&&oa(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oa(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Kp(e,t){const n=new qp(e,t);return n.subscribe.bind(n)}class qp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Ts),s.error===void 0&&(s.error=Ts),s.complete===void 0&&(s.complete=Ts);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ts(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return e&&e._delegate?e._delegate:e}class wn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Np;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qp(t))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zt){return this.instances.has(t)}getOptions(t=zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zt){return this.component?this.component.multipleInstances?t:zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yp(e){return e===zt?void 0:e}function Qp(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Jp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const Zp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},eg=oe.INFO,tg={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},ng=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=tg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pl{constructor(t){this.name=t,this._logLevel=eg,this._logHandler=ng,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const rg=(e,t)=>t.some(n=>e instanceof n);let aa,ca;function sg(){return aa||(aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ig(){return ca||(ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,ei=new WeakMap,Ol=new WeakMap,Cs=new WeakMap,Di=new WeakMap;function og(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(xt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&kl.set(n,e)}).catch(()=>{}),Di.set(t,e),t}function ag(e){if(ei.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ei.set(e,t)}let ti={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ei.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ol.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cg(e){ti=e(ti)}function lg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(As(this),t,...n);return Ol.set(r,t.sort?t.sort():[t]),xt(r)}:ig().includes(e)?function(...t){return e.apply(As(this),t),xt(kl.get(this))}:function(...t){return xt(e.apply(As(this),t))}}function ug(e){return typeof e=="function"?lg(e):(e instanceof IDBTransaction&&ag(e),rg(e,sg())?new Proxy(e,ti):e)}function xt(e){if(e instanceof IDBRequest)return og(e);if(Cs.has(e))return Cs.get(e);const t=ug(e);return t!==e&&(Cs.set(e,t),Di.set(t,e)),t}const As=e=>Di.get(e);function fg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=xt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(xt(o.result),a.oldVersion,a.newVersion,xt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const dg=["get","getKey","getAll","getAllKeys","count"],hg=["put","add","delete","clear"],Rs=new Map;function la(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rs.get(t))return Rs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=hg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dg.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Rs.set(t,i),i}cg(e=>({...e,get:(t,n,r)=>la(t,n)||e.get(t,n,r),has:(t,n)=>!!la(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ni="@firebase/app",ua="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Pl("@firebase/app"),mg="@firebase/app-compat",_g="@firebase/analytics-compat",vg="@firebase/analytics",yg="@firebase/app-check-compat",bg="@firebase/app-check",wg="@firebase/auth",Eg="@firebase/auth-compat",Ig="@firebase/database",Sg="@firebase/data-connect",Tg="@firebase/database-compat",Cg="@firebase/functions",Ag="@firebase/functions-compat",Rg="@firebase/installations",Pg="@firebase/installations-compat",kg="@firebase/messaging",Og="@firebase/messaging-compat",xg="@firebase/performance",Ng="@firebase/performance-compat",Dg="@firebase/remote-config",Lg="@firebase/remote-config-compat",Mg="@firebase/storage",Ug="@firebase/storage-compat",Fg="@firebase/firestore",Bg="@firebase/vertexai-preview",$g="@firebase/firestore-compat",Hg="firebase",jg="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]",Vg={[ni]:"fire-core",[mg]:"fire-core-compat",[vg]:"fire-analytics",[_g]:"fire-analytics-compat",[bg]:"fire-app-check",[yg]:"fire-app-check-compat",[wg]:"fire-auth",[Eg]:"fire-auth-compat",[Ig]:"fire-rtdb",[Sg]:"fire-data-connect",[Tg]:"fire-rtdb-compat",[Cg]:"fire-fn",[Ag]:"fire-fn-compat",[Rg]:"fire-iid",[Pg]:"fire-iid-compat",[kg]:"fire-fcm",[Og]:"fire-fcm-compat",[xg]:"fire-perf",[Ng]:"fire-perf-compat",[Dg]:"fire-rc",[Lg]:"fire-rc-compat",[Mg]:"fire-gcs",[Ug]:"fire-gcs-compat",[Fg]:"fire-fst",[$g]:"fire-fst-compat",[Bg]:"fire-vertex","fire-js":"fire-js",[Hg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map,Wg=new Map,si=new Map;function fa(e,t){try{e.container.addComponent(t)}catch(n){pt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qn(e){const t=e.name;if(si.has(t))return pt.debug(`There were multiple attempts to register component ${t}.`),!1;si.set(t,e);for(const n of Lr.values())fa(n,e);for(const n of Wg.values())fa(n,e);return!0}function xl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ut(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Nt=new sr("app","Firebase",zg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=jg;function qg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ri,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(n||(n=Al()),!n)throw Nt.create("no-options");const i=Lr.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const o=new Xp(s);for(const a of si.values())o.addComponent(a);const c=new Kg(n,r,o);return Lr.set(s,c),c}function Gg(e=ri){const t=Lr.get(e);if(!t&&e===ri&&Al())return qg();if(!t)throw Nt.create("no-app",{appName:e});return t}function Bn(e,t,n){var r;let s=(r=Vg[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}Qn(new wn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="firebase-heartbeat-database",Yg=1,Xn="firebase-heartbeat-store";let Ps=null;function Nl(){return Ps||(Ps=fg(Jg,Yg,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Xn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Nt.create("idb-open",{originalErrorMessage:e.message})})),Ps}async function Qg(e){try{const n=(await Nl()).transaction(Xn),r=await n.objectStore(Xn).get(Dl(e));return await n.done,r}catch(t){if(t instanceof Ft)pt.warn(t.message);else{const n=Nt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pt.warn(n.message)}}}async function da(e,t){try{const r=(await Nl()).transaction(Xn,"readwrite");await r.objectStore(Xn).put(t,Dl(e)),await r.done}catch(n){if(n instanceof Ft)pt.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function Dl(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=1024,Zg=30*24*60*60*1e3;class em{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ha();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Zg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ha(),{heartbeatsToSend:r,unsentEntries:s}=tm(this._heartbeatsCache.heartbeats),i=Nr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pt.warn(n),""}}}function ha(){return new Date().toISOString().substring(0,10)}function tm(e,t=Xg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pa(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $p()?Hp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return da(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function pa(e){return Nr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(e){Qn(new wn("platform-logger",t=>new pg(t),"PRIVATE")),Qn(new wn("heartbeat",t=>new em(t),"PRIVATE")),Bn(ni,ua,e),Bn(ni,ua,"esm2017"),Bn("fire-js","")}rm("");function Li(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Ll(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sm=Ll,Ml=new sr("auth","Firebase",Ll());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Pl("@firebase/auth");function im(e,...t){Mr.logLevel<=oe.WARN&&Mr.warn(`Auth (${or}): ${e}`,...t)}function Er(e,...t){Mr.logLevel<=oe.ERROR&&Mr.error(`Auth (${or}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,...t){throw Ui(e,...t)}function Ke(e,...t){return Ui(e,...t)}function Mi(e,t,n){const r=Object.assign(Object.assign({},sm()),{[t]:n});return new sr("auth","Firebase",r).create(t,{appName:e.name})}function Gt(e){return Mi(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function om(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&nt(e,"argument-error"),Mi(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ui(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ml.create(e,...t)}function z(e,t,...n){if(!e)throw Ui(t,...n)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Er(t),new Error(t)}function gt(e,t){e||ft(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function am(){return ga()==="http:"||ga()==="https:"}function ga(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(am()||Up()||"connection"in navigator)?navigator.onLine:!0}function lm(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=Dp()||Fp()}get(){return cm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new ar(3e4,6e4);function Bi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Sn(e,t,n,r,s={}){return Fl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=ir(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return Mp()||(l.referrerPolicy="no-referrer"),Ul.fetch()(Bl(e,e.config.apiHost,n,c),l)})}async function Fl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},um),t);try{const s=new hm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw mr(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw mr(e,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Mi(e,f,l);nt(e,f)}}catch(s){if(s instanceof Ft)throw s;nt(e,"network-request-failed",{message:String(s)})}}async function dm(e,t,n,r,s={}){const i=await Sn(e,t,n,r,s);return"mfaPendingCredential"in i&&nt(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Bl(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Fi(e.config,s):`${e.config.apiScheme}://${s}`}class hm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),fm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(e,t){return Sn(e,"POST","/v1/accounts:delete",t)}async function $l(e,t){return Sn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gm(e,t=!1){const n=Bt(e),r=await n.getIdToken(t),s=$i(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$n(ks(s.auth_time)),issuedAtTime:$n(ks(s.iat)),expirationTime:$n(ks(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ks(e){return Number(e)*1e3}function $i(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tl(n);return s?JSON.parse(s):(Er("Failed to decode base64 JWT payload"),null)}catch(s){return Er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ma(e){const t=$i(e);return z(t,"internal-error"),z(typeof t.exp!="undefined","internal-error"),z(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ft&&mm(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function mm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Zn(e,$l(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Hl(i.providerUserInfo):[],c=ym(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new oi(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,u)}async function vm(e){const t=Bt(e);await Ur(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ym(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Hl(e){return e.map(t=>{var{providerId:n}=t,r=Li(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(e,t){const n=await Fl(e,{},async()=>{const r=ir({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Bl(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ul.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wm(e,t){return Sn(e,"POST","/v2/accounts:revokeToken",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken!="undefined","internal-error"),z(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):ma(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){z(t.length!==0,"internal-error");const n=ma(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hn;return r&&(z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new hn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,t){z(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class dt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Li(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _m(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,t));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return gm(this,t)}reload(){return vm(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new dt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(Gt(this.auth));const t=await this.getIdToken();return await Zn(this,pm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,a,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(c=n.tenantId)!==null&&c!==void 0?c:void 0,B=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:O,isAnonymous:C,providerData:M,stsTokenManager:V}=n;z(L&&V,t,"internal-error");const Y=hn.fromJSON(this.name,V);z(typeof L=="string",t,"internal-error"),bt(u,t.name),bt(h,t.name),z(typeof O=="boolean",t,"internal-error"),z(typeof C=="boolean",t,"internal-error"),bt(g,t.name),bt(_,t.name),bt(w,t.name),bt(B,t.name),bt(x,t.name),bt(P,t.name);const k=new dt({uid:L,auth:t,email:h,emailVerified:O,displayName:u,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:Y,createdAt:x,lastLoginAt:P});return M&&Array.isArray(M)&&(k.providerData=M.map(H=>Object.assign({},H))),B&&(k._redirectEventId=B),k}static async _fromIdTokenResponse(t,n,r=!1){const s=new hn;s.updateFromServerResponse(n);const i=new dt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Ur(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Hl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new hn;c.updateFromIdToken(r);const a=new dt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Map;function ht(e){gt(e instanceof Function,"Expected a class definition");let t=_a.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_a.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}jl.type="NONE";const va=jl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e,t,n){return`firebase:${e}:${t}:${n}`}class pn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?dt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new pn(ht(va),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ht(va);const o=Ir(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const u=dt._fromJSON(t,f);l!==i&&(c=u),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new pn(i,t,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Kl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Vl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gl(t))return"Blackberry";if(Jl(t))return"Webos";if(Wl(t))return"Safari";if((t.includes("chrome/")||zl(t))&&!t.includes("edge/"))return"Chrome";if(ql(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vl(e=Ce()){return/firefox\//i.test(e)}function Wl(e=Ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zl(e=Ce()){return/crios\//i.test(e)}function Kl(e=Ce()){return/iemobile/i.test(e)}function ql(e=Ce()){return/android/i.test(e)}function Gl(e=Ce()){return/blackberry/i.test(e)}function Jl(e=Ce()){return/webos/i.test(e)}function Hi(e=Ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Em(e=Ce()){var t;return Hi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Im(){return Bp()&&document.documentMode===10}function Yl(e=Ce()){return Hi(e)||ql(e)||Jl(e)||Gl(e)||/windows phone/i.test(e)||Kl(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(e,t=[]){let n;switch(e){case"Browser":n=ya(Ce());break;case"Worker":n=`${ya(Ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const a=t(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(e,t={}){return Sn(e,"GET","/v2/passwordPolicy",Bi(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=6;class Am{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Cm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ba(this),this.idTokenSubscription=new ba(this),this.beforeStateQueue=new Sm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ml,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await $l(this,{idToken:t}),r=await dt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ur(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ut(this.app))return Promise.reject(Gt(this));const n=t?Bt(t):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ut(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Tm(this),n=new Am(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new sr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wm(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ql(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&im(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rs(e){return Bt(e)}class ba{constructor(t){this.auth=t,this.observer=null,this.addObserver=Kp(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pm(e){ji=e}function km(e){return ji.loadJS(e)}function Om(){return ji.gapiScript}function xm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(e,t){const n=xl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dr(i,t!=null?t:{}))return s;nt(s,"already-initialized")}return n.initialize({options:t})}function Dm(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Lm(e,t,n){const r=rs(e);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Xl(t),{host:o,port:c}=Mm(t),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Um()}function Xl(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Mm(e){const t=Xl(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wa(o)}}}function wa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Um(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(t){return ft("not implemented")}_linkToIdToken(t,n){return ft("not implemented")}_getReauthenticationResolver(t){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){return dm(e,"POST","/v1/accounts:signInWithIdp",Bi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="http://localhost";class Xt extends Zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Xt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Li(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return gn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,gn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,gn(t,n)}buildRequest(){const t={requestUri:Fm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ir(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Vi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends cr{constructor(){super("facebook.com")}static credential(t){return Xt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends cr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Xt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends cr{constructor(){super("github.com")}static credential(t){return Xt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pt.credential(t.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends cr{constructor(){super("twitter.com")}static credential(t,n){return Xt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await dt._fromIdTokenResponse(t,r,s),o=Ea(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Ea(r);return new En({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Ea(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Ft{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Fr(t,n,r,s)}}function eu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fr._fromErrorAndOperation(e,i,t,r):i})}async function Bm(e,t,n=!1){const r=await Zn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return En._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(e,t,n=!1){const{auth:r}=e;if(ut(r.app))return Promise.reject(Gt(r));const s="reauthenticate";try{const i=await Zn(e,eu(r,s,t,e),n);z(i.idToken,r,"internal-error");const o=$i(i.idToken);z(o,r,"internal-error");const{sub:c}=o;return z(e.uid===c,r,"user-mismatch"),En._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(e,t,n=!1){if(ut(e.app))return Promise.reject(Gt(e));const r="signIn",s=await eu(e,r,t),i=await En._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function jm(e,t,n,r){return Bt(e).onIdTokenChanged(t,n,r)}function Vm(e,t,n){return Bt(e).beforeAuthStateChanged(t,n)}function Mv(e,t,n,r){return Bt(e).onAuthStateChanged(t,n,r)}function Uv(e){return Bt(e).signOut()}const Br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Br,"1"),this.storage.removeItem(Br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=1e3,zm=10;class nu extends tu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Im()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,zm):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Wm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}nu.type="LOCAL";const Km=nu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends tu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ru.type="SESSION";const su=ru;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ss(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await qm(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ss.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Wi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Jm(e){tt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){return typeof tt().WorkerGlobalScope!="undefined"&&typeof tt().importScripts=="function"}async function Ym(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qm(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Xm(){return iu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="firebaseLocalStorageDb",Zm=1,$r="firebaseLocalStorage",au="fbase_key";class lr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function is(e,t){return e.transaction([$r],t?"readwrite":"readonly").objectStore($r)}function e_(){const e=indexedDB.deleteDatabase(ou);return new lr(e).toPromise()}function ai(){const e=indexedDB.open(ou,Zm);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore($r,{keyPath:au})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains($r)?t(r):(r.close(),await e_(),t(await ai()))})})}async function Ia(e,t,n){const r=is(e,!0).put({[au]:t,value:n});return new lr(r).toPromise()}async function t_(e,t){const n=is(e,!1).get(t),r=await new lr(n).toPromise();return r===void 0?null:r.value}function Sa(e,t){const n=is(e,!0).delete(t);return new lr(n).toPromise()}const n_=800,r_=3;class cu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ai(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>r_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ss._getInstance(Xm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Ym(),!this.activeServiceWorker)return;this.sender=new Gm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Qm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ai();return await Ia(t,Br,"1"),await Sa(t,Br),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ia(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>t_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=is(s,!1).getAll();return new lr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cu.type="LOCAL";const s_=cu;new ar(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(e,t){return t?ht(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Zl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return gn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return gn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function i_(e){return Hm(e.auth,new zi(e),e.bypassAuthState)}function o_(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),$m(n,new zi(e),e.bypassAuthState)}async function a_(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),Bm(n,new zi(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return i_;case"linkViaPopup":case"linkViaRedirect":return a_;case"reauthViaPopup":case"reauthViaRedirect":return o_;default:nt(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new ar(2e3,1e4);async function Fv(e,t,n){if(ut(e.app))return Promise.reject(Ke(e,"operation-not-supported-in-this-environment"));const r=rs(e);om(e,t,Vi);const s=lu(r,n);return new Kt(r,"signInViaPopup",t,s).executeNotNull()}class Kt extends uu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=Wi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,c_.get())};t()}}Kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="pendingRedirect",Sr=new Map;class u_ extends uu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Sr.get(this.auth._key());if(!t){try{const r=await f_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Sr.set(this.auth._key(),t)}return this.bypassAuthState||Sr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f_(e,t){const n=p_(t),r=h_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function d_(e,t){Sr.set(e._key(),t)}function h_(e){return ht(e._redirectPersistence)}function p_(e){return Ir(l_,e.config.apiKey,e.name)}async function g_(e,t,n=!1){if(ut(e.app))return Promise.reject(Gt(e));const r=rs(e),s=lu(r,t),o=await new u_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=10*60*1e3;class __{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!v_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!fu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=m_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(t))}saveEventToCache(t){this.cachedEventUids.add(Ta(t)),this.lastProcessedEventTime=Date.now()}}function Ta(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function fu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function v_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fu(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(e,t={}){return Sn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w_=/^https?/;async function E_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await y_(e);for(const n of t)try{if(I_(n))return}catch{}nt(e,"unauthorized-domain")}function I_(e){const t=ii(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!w_.test(n))return!1;if(b_.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new ar(3e4,6e4);function Ca(){const e=tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function T_(e){return new Promise((t,n)=>{var r,s,i;function o(){Ca(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ca(),n(Ke(e,"network-request-failed"))},timeout:S_.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const c=xm("iframefcb");return tt()[c]=()=>{gapi.load?o():n(Ke(e,"network-request-failed"))},km(`${Om()}?onload=${c}`).catch(a=>n(a))}}).catch(t=>{throw Tr=null,t})}let Tr=null;function C_(e){return Tr=Tr||T_(e),Tr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new ar(5e3,15e3),R_="__/auth/iframe",P_="emulator/auth/iframe",k_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x_(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fi(t,P_):`https://${e.config.authDomain}/${R_}`,r={apiKey:t.apiKey,appName:e.name,v:or},s=O_.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ir(r).slice(1)}`}async function N_(e){const t=await C_(e),n=tt().gapi;return z(n,e,"internal-error"),t.open({where:document.body,url:x_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(e,"network-request-failed"),c=tt().setTimeout(()=>{i(o)},A_.get());function a(){tt().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L_=500,M_=600,U_="_blank",F_="http://localhost";class Aa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B_(e,t,n,r=L_,s=M_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},D_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ce().toLowerCase();n&&(c=zl(l)?U_:n),Vl(l)&&(t=t||F_,a.scrollbars="yes");const f=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(Em(l)&&c!=="_self")return $_(t||"",c),new Aa(null);const u=window.open(t||"",c,f);z(u,e,"popup-blocked");try{u.focus()}catch{}return new Aa(u)}function $_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="__/auth/handler",j_="emulator/auth/handler",V_=encodeURIComponent("fac");async function Ra(e,t,n,r,s,i){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:or,eventId:s};if(t instanceof Vi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",zp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(t instanceof cr){const f=t.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await e._getAppCheckToken(),l=a?`#${V_}=${encodeURIComponent(a)}`:"";return`${W_(e)}?${ir(c).slice(1)}${l}`}function W_({config:e}){return e.emulator?Fi(e,j_):`https://${e.authDomain}/${H_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="webStorageSupport";class z_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=su,this._completeRedirectFn=g_,this._overrideRedirectResult=d_}async _openPopup(t,n,r,s){var i;gt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ra(t,n,r,ii(),s);return B_(t,o,Wi())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ra(t,n,r,ii(),s);return Jm(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await N_(t),r=new __(t);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Os,{type:Os},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Os];o!==void 0&&n(!!o),nt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yl()||Wl()||Hi()}}const K_=z_;var Pa="@firebase/auth",ka="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J_(e){Qn(new wn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ql(e)},l=new Rm(r,s,i,a);return Dm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Qn(new wn("auth-internal",t=>{const n=rs(t.getProvider("auth").getImmediate());return(r=>new q_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Pa,ka,G_(e)),Bn(Pa,ka,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=5*60,Q_=Rl("authIdTokenMaxAge")||Y_;let Oa=null;const X_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q_)return;const s=n==null?void 0:n.token;Oa!==s&&(Oa=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z_(e=Gg()){const t=xl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Nm(e,{popupRedirectResolver:K_,persistence:[s_,Km,su]}),r=Rl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=X_(i.toString());Vm(n,o,()=>o(n.currentUser)),jm(n,c=>o(c))}}const s=Cl("auth");return s&&Lm(n,`http://${s}`),n}function ev(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Pm({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ev().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J_("Browser");const tv=[{path:"/",component:()=>Vt(()=>import("./LandingPage.bc7b1a9b.js"),["assets/LandingPage.bc7b1a9b.js","assets/QCardSection.93ca20b2.js","assets/QBtn.1106fff4.js","assets/QCard.1be5af88.js","assets/auth.3820e33c.js","assets/firebase.b163514c.js"])},{path:"/chats",component:()=>Vt(()=>import("./MainLayout.16fcd62e.js"),["assets/MainLayout.16fcd62e.js","assets/QLayout.1be02410.js","assets/QBtn.1106fff4.js","assets/QScrollObserver.2a6200a8.js","assets/scroll.a8da4cf4.js","assets/auth.3820e33c.js","assets/firebase.b163514c.js"]),meta:{requiresAuth:!0},children:[{path:"",component:()=>Vt(()=>import("./ChatroomsPage.941a3480.js"),["assets/ChatroomsPage.941a3480.js","assets/QBtn.1106fff4.js","assets/firebase.b163514c.js","assets/scroll.a8da4cf4.js","assets/auth.3820e33c.js","assets/QInput.7956ab7a.js","assets/room.b814678f.js","assets/OverlappingAvatars.99c714a4.js","assets/OverlappingAvatars.d73fd17c.css","assets/QCardSection.93ca20b2.js","assets/QCard.1be5af88.js"])}]},{path:"/chat",component:()=>Vt(()=>import("./ChatLayout.e5ff100a.js"),["assets/ChatLayout.e5ff100a.js","assets/QBtn.1106fff4.js","assets/scroll.a8da4cf4.js","assets/auth.3820e33c.js","assets/firebase.b163514c.js","assets/QLayout.1be02410.js","assets/QScrollObserver.2a6200a8.js","assets/room.b814678f.js","assets/OverlappingAvatars.99c714a4.js","assets/OverlappingAvatars.d73fd17c.css"]),meta:{requiresAuth:!0},children:[{path:":id",component:()=>Vt(()=>import("./ChatPage.ce595281.js"),["assets/ChatPage.ce595281.js","assets/ChatPage.4c143fc5.css","assets/scroll.a8da4cf4.js","assets/auth.3820e33c.js","assets/firebase.b163514c.js","assets/QBtn.1106fff4.js","assets/room.b814678f.js","assets/QInput.7956ab7a.js","assets/QCard.1be5af88.js","assets/QScrollObserver.2a6200a8.js"])}]},{path:"/:catchAll(.*)*",component:()=>Vt(()=>import("./ErrorNotFound.3a4d41bb.js"),["assets/ErrorNotFound.3a4d41bb.js","assets/QBtn.1106fff4.js"])}];var xs=function(){const t=Sp({scrollBehavior:()=>({left:0,top:0}),routes:tv,history:ep("/chat-app/")});return t.beforeEach((n,r,s)=>{const i=Z_();n.matched.some(c=>c.meta.requiresAuth)&&!i.currentUser?s("/"):n.path==="/"&&i.currentUser?s("/chats"):s()}),t};async function nv(e,t){const n=e(yh);n.use(vh,t);const r=typeof ws=="function"?await ws({}):ws;n.use(r);const s=er(typeof xs=="function"?await xs({store:r}):xs);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}var rv={config:{}};const sv="/chat-app/";async function iv({app:e,router:t,store:n},r){let s=!1;const i=a=>{try{return t.resolve(a).href}catch{}return Object(a)===a?null:a},o=a=>{if(s=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const l=i(a);l!==null&&(window.location.href=l,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let a=0;s===!1&&a<r.length;a++)try{await r[a]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:c,publicPath:sv})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(e.use(t),e.mount("#q-app"))}nv(qd,rv).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([Vt(()=>import("./firebase.b163514c.js").then(function(r){return r.l}),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");iv(e,s)})});export{vf as $,je as A,Jc as B,wn as C,Mv as D,Uv as E,Ft as F,Rt as G,ov as H,mv as I,Tv as J,Iv as K,oe as L,Sv as M,bv as N,vv as O,Sc as P,wv as Q,Do as R,or as S,dv as T,vn as U,ze as V,Pv as W,Qt as X,yr as Y,Cv as Z,Qn as _,Gg as a,uv as a0,Gc as a1,Cu as a2,$e as a3,fv as a4,vr as a5,Av as a6,In as a7,Tc as a8,Gn as a9,ac as aa,dh as ab,et as ac,yv as ad,cv as ae,X as af,lv as ag,Ys as ah,hf as ai,Rv as aj,eh as ak,Oi as al,uf as am,lf as an,sh as ao,Fo as ap,av as aq,hi as ar,di as as,xv as at,_v as au,Ev as av,hv as aw,pv as ax,xl as b,Nv as c,Dv as d,Pl as e,Dr as f,Bt as g,Ce as h,Lv as i,kv as j,qg as k,Z_ as l,gv as m,ki as n,qr as o,Ri as p,Kc as q,Bn as r,Fv as s,wi as t,Ov as u,Ec as v,nf as w,Te as x,rd as y,ln as z};
