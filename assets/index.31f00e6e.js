const eu=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Ki={},tu="/chat-app/",Vt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${tu}${r}`,r in Ki)return;Ki[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":eu,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ai(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},sn=[],je=()=>{},nu=()=>!1,Fr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ci=e=>e.startsWith("onUpdate:"),pe=Object.assign,li=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ru=Object.prototype.hasOwnProperty,ne=(e,t)=>ru.call(e,t),W=Array.isArray,on=e=>Br(e)==="[object Map]",Ra=e=>Br(e)==="[object Set]",K=e=>typeof e=="function",he=e=>typeof e=="string",Dt=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Pa=e=>(fe(e)||K(e))&&K(e.then)&&K(e.catch),ka=Object.prototype.toString,Br=e=>ka.call(e),su=e=>Br(e).slice(8,-1),Oa=e=>Br(e)==="[object Object]",ui=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},iu=/-(\w)/g,Fe=$r(e=>e.replace(iu,(t,n)=>n?n.toUpperCase():"")),ou=/\B([A-Z])/g,Xt=$r(e=>e.replace(ou,"-$1").toLowerCase()),Hr=$r(e=>e.charAt(0).toUpperCase()+e.slice(1)),ss=$r(e=>e?`on${Hr(e)}`:""),kt=(e,t)=>!Object.is(e,t),is=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},xa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},au=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Na=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let qi;const jr=()=>qi||(qi=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function fi(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=he(r)?fu(r):fi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(he(e)||fe(e))return e}const cu=/;(?![^(]*\))/g,lu=/:([^]+)/,uu=/\/\*[^]*?\*\//g;function fu(e){const t={};return e.replace(uu,"").split(cu).forEach(n=>{if(n){const r=n.split(lu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function di(e){let t="";if(he(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=di(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const du="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hu=ai(du);function Da(e){return!!e||e===""}const Ma=e=>!!(e&&e.__v_isRef===!0),pu=e=>he(e)?e:e==null?"":W(e)||fe(e)&&(e.toString===ka||!K(e.toString))?Ma(e)?pu(e.value):JSON.stringify(e,La,2):String(e),La=(e,t)=>Ma(t)?La(e,t.value):on(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[os(r,i)+" =>"]=s,n),{})}:Ra(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>os(n))}:Dt(t)?os(t):fe(t)&&!W(t)&&!Oa(t)?String(t):t,os=(e,t="")=>{var n;return Dt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let De;class Ua{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=De;try{return De=this,t()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function gu(e){return new Ua(e)}function mu(){return De}let le;const as=new WeakSet;class Fa{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,as.has(this)&&(as.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$a(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gi(this),Ha(this);const t=le,n=Ve;le=this,Ve=!0;try{return this.fn()}finally{ja(this),le=t,Ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)gi(t);this.deps=this.depsTail=void 0,Gi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?as.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Os(this)&&this.run()}get dirty(){return Os(this)}}let Ba=0,Rn,Pn;function $a(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=Rn,Rn=e}function hi(){Ba++}function pi(){if(--Ba>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Rn;){let t=Rn;for(Rn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ha(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ja(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),gi(r),_u(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Os(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Va(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Va(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Fn))return;e.globalVersion=Fn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Os(e)){e.flags&=-3;return}const n=le,r=Ve;le=e,Ve=!0;try{Ha(e);const s=e.fn(e._value);(t.version===0||kt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=n,Ve=r,ja(e),e.flags&=-3}}function gi(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function _u(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ve=!0;const Wa=[];function Mt(){Wa.push(Ve),Ve=!1}function Lt(){const e=Wa.pop();Ve=e===void 0?!0:e}function Gi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let Fn=0;class vu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!Ve||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new vu(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,za(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=r)}return n}trigger(t){this.version++,Fn++,this.notify(t)}notify(t){hi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pi()}}}function za(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)za(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const xs=new WeakMap,qt=Symbol(""),Ns=Symbol(""),Bn=Symbol("");function ye(e,t,n){if(Ve&&le){let r=xs.get(e);r||xs.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new mi),s.map=r,s.key=n),s.track()}}function at(e,t,n,r,s,i){const o=xs.get(e);if(!o){Fn++;return}const c=a=>{a&&a.trigger()};if(hi(),t==="clear")o.forEach(c);else{const a=W(e),l=a&&ui(n);if(a&&n==="length"){const f=Number(r);o.forEach((u,h)=>{(h==="length"||h===Bn||!Dt(h)&&h>=f)&&c(u)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(Bn)),t){case"add":a?l&&c(o.get("length")):(c(o.get(qt)),on(e)&&c(o.get(Ns)));break;case"delete":a||(c(o.get(qt)),on(e)&&c(o.get(Ns)));break;case"set":on(e)&&c(o.get(qt));break}}pi()}function tn(e){const t=Z(e);return t===e?t:(ye(t,"iterate",Bn),Ue(e)?t:t.map(be))}function Vr(e){return ye(e=Z(e),"iterate",Bn),e}const yu={__proto__:null,[Symbol.iterator](){return cs(this,Symbol.iterator,be)},concat(...e){return tn(this).concat(...e.map(t=>W(t)?tn(t):t))},entries(){return cs(this,"entries",e=>(e[1]=be(e[1]),e))},every(e,t){return st(this,"every",e,t,void 0,arguments)},filter(e,t){return st(this,"filter",e,t,n=>n.map(be),arguments)},find(e,t){return st(this,"find",e,t,be,arguments)},findIndex(e,t){return st(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return st(this,"findLast",e,t,be,arguments)},findLastIndex(e,t){return st(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return st(this,"forEach",e,t,void 0,arguments)},includes(...e){return ls(this,"includes",e)},indexOf(...e){return ls(this,"indexOf",e)},join(e){return tn(this).join(e)},lastIndexOf(...e){return ls(this,"lastIndexOf",e)},map(e,t){return st(this,"map",e,t,void 0,arguments)},pop(){return In(this,"pop")},push(...e){return In(this,"push",e)},reduce(e,...t){return Ji(this,"reduce",e,t)},reduceRight(e,...t){return Ji(this,"reduceRight",e,t)},shift(){return In(this,"shift")},some(e,t){return st(this,"some",e,t,void 0,arguments)},splice(...e){return In(this,"splice",e)},toReversed(){return tn(this).toReversed()},toSorted(e){return tn(this).toSorted(e)},toSpliced(...e){return tn(this).toSpliced(...e)},unshift(...e){return In(this,"unshift",e)},values(){return cs(this,"values",be)}};function cs(e,t,n){const r=Vr(e),s=r[t]();return r!==e&&!Ue(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const bu=Array.prototype;function st(e,t,n,r,s,i){const o=Vr(e),c=o!==e&&!Ue(e),a=o[t];if(a!==bu[t]){const u=a.apply(e,i);return c?be(u):u}let l=n;o!==e&&(c?l=function(u,h){return n.call(this,be(u),h,e)}:n.length>2&&(l=function(u,h){return n.call(this,u,h,e)}));const f=a.call(o,l,r);return c&&s?s(f):f}function Ji(e,t,n,r){const s=Vr(e);let i=n;return s!==e&&(Ue(e)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,e)}):i=function(o,c,a){return n.call(this,o,be(c),a,e)}),s[t](i,...r)}function ls(e,t,n){const r=Z(e);ye(r,"iterate",Bn);const s=r[t](...n);return(s===-1||s===!1)&&yi(n[0])?(n[0]=Z(n[0]),r[t](...n)):s}function In(e,t,n=[]){Mt(),hi();const r=Z(e)[t].apply(e,n);return pi(),Lt(),r}const wu=ai("__proto__,__v_isRef,__isVue"),Ka=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Dt));function Eu(e){Dt(e)||(e=String(e));const t=Z(this);return ye(t,"has",e),t.hasOwnProperty(e)}class qa{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xu:Qa:i?Ya:Ja).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){let a;if(o&&(a=yu[n]))return a;if(n==="hasOwnProperty")return Eu}const c=Reflect.get(t,n,Ee(t)?t:r);return(Dt(n)?Ka.has(n):wu(n))||(s||ye(t,"get",n),i)?c:Ee(c)?o&&ui(n)?c:c.value:fe(c)?s?Za(c):bn(c):c}}class Ga extends qa{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const a=Jt(i);if(!Ue(r)&&!Jt(r)&&(i=Z(i),r=Z(r)),!W(t)&&Ee(i)&&!Ee(r))return a?!1:(i.value=r,!0)}const o=W(t)&&ui(n)?Number(n)<t.length:ne(t,n),c=Reflect.set(t,n,r,Ee(t)?t:s);return t===Z(s)&&(o?kt(r,i)&&at(t,"set",n,r):at(t,"add",n,r)),c}deleteProperty(t,n){const r=ne(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&at(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Dt(n)||!Ka.has(n))&&ye(t,"has",n),r}ownKeys(t){return ye(t,"iterate",W(t)?"length":qt),Reflect.ownKeys(t)}}class Iu extends qa{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Su=new Ga,Tu=new Iu,Cu=new Ga(!0);const Ds=e=>e,lr=e=>Reflect.getPrototypeOf(e);function Au(e,t,n){return function(...r){const s=this.__v_raw,i=Z(s),o=on(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,l=s[e](...r),f=n?Ds:t?Ms:be;return!t&&ye(i,"iterate",a?Ns:qt),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:c?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function ur(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ru(e,t){const n={get(s){const i=this.__v_raw,o=Z(i),c=Z(s);e||(kt(s,c)&&ye(o,"get",s),ye(o,"get",c));const{has:a}=lr(o),l=t?Ds:e?Ms:be;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ye(Z(s),"iterate",qt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Z(i),c=Z(s);return e||(kt(s,c)&&ye(o,"has",s),ye(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=Z(c),l=t?Ds:e?Ms:be;return!e&&ye(a,"iterate",qt),c.forEach((f,u)=>s.call(i,l(f),l(u),o))}};return pe(n,e?{add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear")}:{add(s){!t&&!Ue(s)&&!Jt(s)&&(s=Z(s));const i=Z(this);return lr(i).has.call(i,s)||(i.add(s),at(i,"add",s,s)),this},set(s,i){!t&&!Ue(i)&&!Jt(i)&&(i=Z(i));const o=Z(this),{has:c,get:a}=lr(o);let l=c.call(o,s);l||(s=Z(s),l=c.call(o,s));const f=a.call(o,s);return o.set(s,i),l?kt(i,f)&&at(o,"set",s,i):at(o,"add",s,i),this},delete(s){const i=Z(this),{has:o,get:c}=lr(i);let a=o.call(i,s);a||(s=Z(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&at(i,"delete",s,void 0),l},clear(){const s=Z(this),i=s.size!==0,o=s.clear();return i&&at(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Au(s,e,t)}),n}function _i(e,t){const n=Ru(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Pu={get:_i(!1,!1)},ku={get:_i(!1,!0)},Ou={get:_i(!0,!1)};const Ja=new WeakMap,Ya=new WeakMap,Qa=new WeakMap,xu=new WeakMap;function Nu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Du(e){return e.__v_skip||!Object.isExtensible(e)?0:Nu(su(e))}function bn(e){return Jt(e)?e:vi(e,!1,Su,Pu,Ja)}function Xa(e){return vi(e,!1,Cu,ku,Ya)}function Za(e){return vi(e,!0,Tu,Ou,Qa)}function vi(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Du(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return s.set(e,c),c}function an(e){return Jt(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function yi(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Xn(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&xa(e,"__v_skip",!0),e}const be=e=>fe(e)?bn(e):e,Ms=e=>fe(e)?Za(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function bi(e){return ec(e,!1)}function Mu(e){return ec(e,!0)}function ec(e,t){return Ee(e)?e:new Lu(e,t)}class Lu{constructor(t,n){this.dep=new mi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Z(t),this._value=n?t:be(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ue(t)||Jt(t);t=r?t:Z(t),kt(t,n)&&(this._rawValue=t,this._value=r?t:be(t),this.dep.trigger())}}function cn(e){return Ee(e)?e.value:e}const Uu={get:(e,t,n)=>t==="__v_raw"?e:cn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function tc(e){return an(e)?e:new Proxy(e,Uu)}class Fu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new mi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Fn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return $a(this,!0),!0}get value(){const t=this.dep.track();return Va(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bu(e,t,n=!1){let r,s;return K(e)?r=e:(r=e.get,s=e.set),new Fu(r,s,n)}const fr={},Sr=new WeakMap;let Wt;function $u(e,t=!1,n=Wt){if(n){let r=Sr.get(n);r||Sr.set(n,r=[]),r.push(e)}}function Hu(e,t,n=ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:Ue(O)||s===!1||s===0?ct(O,1):ct(O);let f,u,h,g,_=!1,w=!1;if(Ee(e)?(u=()=>e.value,_=Ue(e)):an(e)?(u=()=>l(e),_=!0):W(e)?(w=!0,_=e.some(O=>an(O)||Ue(O)),u=()=>e.map(O=>{if(Ee(O))return O.value;if(an(O))return l(O);if(K(O))return a?a(O,2):O()})):K(e)?t?u=a?()=>a(e,2):e:u=()=>{if(h){Mt();try{h()}finally{Lt()}}const O=Wt;Wt=f;try{return a?a(e,3,[g]):e(g)}finally{Wt=O}}:u=je,t&&s){const O=u,C=s===!0?1/0:s;u=()=>ct(O(),C)}const B=mu(),x=()=>{f.stop(),B&&li(B.effects,f)};if(i&&t){const O=t;t=(...C)=>{O(...C),x()}}let P=w?new Array(e.length).fill(fr):fr;const M=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(t){const C=f.run();if(s||_||(w?C.some((L,V)=>kt(L,P[V])):kt(C,P))){h&&h();const L=Wt;Wt=f;try{const V=[C,P===fr?void 0:w&&P[0]===fr?[]:P,g];a?a(t,3,V):t(...V),P=C}finally{Wt=L}}}else f.run()};return c&&c(M),f=new Fa(u),f.scheduler=o?()=>o(M,!1):M,g=O=>$u(O,!1,f),h=f.onStop=()=>{const O=Sr.get(f);if(O){if(a)a(O,4);else for(const C of O)C();Sr.delete(f)}},t?r?M(!0):P=f.run():o?o(M.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function ct(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Ee(e))ct(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)ct(e[r],t,n);else if(Ra(e)||on(e))e.forEach(r=>{ct(r,t,n)});else if(Oa(e)){for(const r in e)ct(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ct(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zn(e,t,n,r){try{return r?e(...r):e()}catch(s){er(s,t,n)}}function Ke(e,t,n,r){if(K(e)){const s=Zn(e,t,n,r);return s&&Pa(s)&&s.catch(i=>{er(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ke(e[i],t,n,r));return s}}function er(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let c=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,a,l)===!1)return}c=c.parent}if(i){Mt(),Zn(i,null,10,[e,a,l]),Lt();return}}ju(e,n,s,r,o)}function ju(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Se=[];let Qe=-1;const ln=[];let wt=null,nn=0;const nc=Promise.resolve();let Tr=null;function rc(e){const t=Tr||nc;return e?t.then(this?e.bind(this):e):t}function Vu(e){let t=Qe+1,n=Se.length;for(;t<n;){const r=t+n>>>1,s=Se[r],i=$n(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function wi(e){if(!(e.flags&1)){const t=$n(e),n=Se[Se.length-1];!n||!(e.flags&2)&&t>=$n(n)?Se.push(e):Se.splice(Vu(t),0,e),e.flags|=1,sc()}}function sc(){Tr||(Tr=nc.then(oc))}function Ls(e){W(e)?ln.push(...e):wt&&e.id===-1?wt.splice(nn+1,0,e):e.flags&1||(ln.push(e),e.flags|=1),sc()}function Yi(e,t,n=Qe+1){for(;n<Se.length;n++){const r=Se[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Se.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ic(e){if(ln.length){const t=[...new Set(ln)].sort((n,r)=>$n(n)-$n(r));if(ln.length=0,wt){wt.push(...t);return}for(wt=t,nn=0;nn<wt.length;nn++){const n=wt[nn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,nn=0}}const $n=e=>e.id==null?e.flags&2?-1:1/0:e.id;function oc(e){const t=je;try{for(Qe=0;Qe<Se.length;Qe++){const n=Se[Qe];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Zn(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Qe<Se.length;Qe++){const n=Se[Qe];n&&(n.flags&=-2)}Qe=-1,Se.length=0,ic(),Tr=null,(Se.length||ln.length)&&oc()}}let Re=null,ac=null;function Cr(e){const t=Re;return Re=e,ac=e&&e.type.__scopeId||null,t}function Wu(e,t=Re,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&lo(-1);const i=Cr(t);let o;try{o=e(...s)}finally{Cr(i),r._d&&lo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function J_(e,t){if(Re===null)return e;const n=Jr(Re),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,c,a=ae]=t[s];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&ct(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return e}function Bt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Mt(),Ke(a,n,8,[e.el,c,e,t]),Lt())}}const cc=Symbol("_vte"),lc=e=>e.__isTeleport,kn=e=>e&&(e.disabled||e.disabled===""),zu=e=>e&&(e.defer||e.defer===""),Qi=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,Xi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Us=(e,t)=>{const n=e&&e.to;return he(n)?t?t(n):null:n},Ku={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,c,a,l){const{mc:f,pc:u,pbc:h,o:{insert:g,querySelector:_,createText:w,createComment:B}}=l,x=kn(t.props);let{shapeFlag:P,children:M,dynamicChildren:O}=t;if(e==null){const C=t.el=w(""),L=t.anchor=w("");g(C,n,r),g(L,n,r);const V=(k,H)=>{P&16&&(s&&s.isCE&&(s.ce._teleportTarget=k),f(M,k,H,s,i,o,c,a))},Y=()=>{const k=t.target=Us(t.props,_),H=uc(k,t,w,g);k&&(o!=="svg"&&Qi(k)?o="svg":o!=="mathml"&&Xi(k)&&(o="mathml"),x||(V(k,H),gr(t,!1)))};x&&(V(n,L),gr(t,!0)),zu(t.props)?Ae(Y,i):Y()}else{t.el=e.el,t.targetStart=e.targetStart;const C=t.anchor=e.anchor,L=t.target=e.target,V=t.targetAnchor=e.targetAnchor,Y=kn(e.props),k=Y?n:L,H=Y?C:V;if(o==="svg"||Qi(L)?o="svg":(o==="mathml"||Xi(L))&&(o="mathml"),O?(h(e.dynamicChildren,O,k,s,i,o,c),Si(e,t,!0)):a||u(e,t,k,H,s,i,o,c,!1),x)Y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):dr(t,n,C,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=Us(t.props,_);J&&dr(t,J,null,l,0)}else Y&&dr(t,L,V,l,1);gr(t,x)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:a,targetStart:l,targetAnchor:f,target:u,props:h}=e;if(u&&(s(l),s(f)),i&&s(a),o&16){const g=i||!kn(h);for(let _=0;_<c.length;_++){const w=c[_];r(w,t,n,g,!!w.dynamicChildren)}}},move:dr,hydrate:qu};function dr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:f}=e,u=i===2;if(u&&r(o,t,n),(!u||kn(f))&&a&16)for(let h=0;h<l.length;h++)s(l[h],t,n,2);u&&r(c,t,n)}function qu(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a,insert:l,createText:f}},u){const h=t.target=Us(t.props,a);if(h){const g=kn(t.props),_=h._lpa||h.firstChild;if(t.shapeFlag&16)if(g)t.anchor=u(o(e),t,c(e),n,r,s,i),t.targetStart=_,t.targetAnchor=_&&o(_);else{t.anchor=o(e);let w=_;for(;w;){if(w&&w.nodeType===8){if(w.data==="teleport start anchor")t.targetStart=w;else if(w.data==="teleport anchor"){t.targetAnchor=w,h._lpa=t.targetAnchor&&o(t.targetAnchor);break}}w=o(w)}t.targetAnchor||uc(h,t,f,l),u(_&&o(_),t,h,n,r,s,i)}gr(t,g)}return t.anchor&&o(t.anchor)}const Y_=Ku;function gr(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function uc(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[cc]=i,e&&(r(s,e),r(i,e)),i}const Et=Symbol("_leaveCb"),hr=Symbol("_enterCb");function Gu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vc(()=>{e.isMounted=!0}),yc(()=>{e.isUnmounting=!0}),e}const Le=[Function,Array],fc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},dc=e=>{const t=e.subTree;return t.component?dc(t.component):t},Ju={name:"BaseTransition",props:fc,setup(e,{slots:t}){const n=Xf(),r=Gu();return()=>{const s=t.default&&gc(t.default(),!0);if(!s||!s.length)return;const i=hc(s),o=Z(e),{mode:c}=o;if(r.isLeaving)return us(i);const a=Zi(i);if(!a)return us(i);let l=Fs(a,o,r,n,h=>l=h);a.type!==we&&Hn(a,l);const f=n.subTree,u=f&&Zi(f);if(u&&u.type!==we&&!Ze(a,u)&&dc(n).type!==we){const h=Fs(u,o,r,n);if(Hn(u,h),c==="out-in"&&a.type!==we)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave},us(i);c==="in-out"&&a.type!==we&&(h.delayLeave=(g,_,w)=>{const B=pc(r,u);B[String(u.key)]=u,g[Et]=()=>{_(),g[Et]=void 0,delete l.delayedLeave},l.delayedLeave=w})}return i}}};function hc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const Yu=Ju;function pc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Fs(e,t,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:h,onLeave:g,onAfterLeave:_,onLeaveCancelled:w,onBeforeAppear:B,onAppear:x,onAfterAppear:P,onAppearCancelled:M}=t,O=String(e.key),C=pc(n,e),L=(k,H)=>{k&&Ke(k,r,9,H)},V=(k,H)=>{const J=H[1];L(k,H),W(k)?k.every(N=>N.length<=1)&&J():k.length<=1&&J()},Y={mode:o,persisted:c,beforeEnter(k){let H=a;if(!n.isMounted)if(i)H=B||a;else return;k[Et]&&k[Et](!0);const J=C[O];J&&Ze(e,J)&&J.el[Et]&&J.el[Et](),L(H,[k])},enter(k){let H=l,J=f,N=u;if(!n.isMounted)if(i)H=x||l,J=P||f,N=M||u;else return;let G=!1;const ue=k[hr]=me=>{G||(G=!0,me?L(N,[k]):L(J,[k]),Y.delayedLeave&&Y.delayedLeave(),k[hr]=void 0)};H?V(H,[k,ue]):ue()},leave(k,H){const J=String(e.key);if(k[hr]&&k[hr](!0),n.isUnmounting)return H();L(h,[k]);let N=!1;const G=k[Et]=ue=>{N||(N=!0,H(),ue?L(w,[k]):L(_,[k]),k[Et]=void 0,C[J]===e&&delete C[J])};C[J]=e,g?V(g,[k,G]):G()},clone(k){const H=Fs(k,t,n,r,s);return s&&s(H),H}};return Y}function us(e){if(zr(e))return e=Nt(e),e.children=null,e}function Zi(e){if(!zr(e))return lc(e.type)&&e.children?hc(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&K(n.default))return n.default()}}function Hn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Hn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function gc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&s++,r=r.concat(gc(o.children,t,c))):(t||o.type!==we)&&r.push(c!=null?Nt(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Wr(e,t){return K(e)?(()=>pe({name:e.name},t,{setup:e}))():e}function mc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Bs(e,t,n,r,s=!1){if(W(e)){e.forEach((_,w)=>Bs(_,t&&(W(t)?t[w]:t),n,r,s));return}if(On(r)&&!s)return;const i=r.shapeFlag&4?Jr(r.component):r.el,o=s?null:i,{i:c,r:a}=e,l=t&&t.r,f=c.refs===ae?c.refs={}:c.refs,u=c.setupState,h=Z(u),g=u===ae?()=>!1:_=>ne(h,_);if(l!=null&&l!==a&&(he(l)?(f[l]=null,g(l)&&(u[l]=null)):Ee(l)&&(l.value=null)),K(a))Zn(a,c,12,[o,f]);else{const _=he(a),w=Ee(a);if(_||w){const B=()=>{if(e.f){const x=_?g(a)?u[a]:f[a]:a.value;s?W(x)&&li(x,i):W(x)?x.includes(i)||x.push(i):_?(f[a]=[i],g(a)&&(u[a]=f[a])):(a.value=[i],e.k&&(f[e.k]=a.value))}else _?(f[a]=o,g(a)&&(u[a]=o)):w&&(a.value=o,e.k&&(f[e.k]=o))};o?(B.id=-1,Ae(B,n)):B()}}}jr().requestIdleCallback;jr().cancelIdleCallback;const On=e=>!!e.type.__asyncLoader,zr=e=>e.type.__isKeepAlive;function Qu(e,t){_c(e,"a",t)}function Xu(e,t){_c(e,"da",t)}function _c(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Kr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)zr(s.parent.vnode)&&Zu(r,t,n,s),s=s.parent}}function Zu(e,t,n,r){const s=Kr(t,e,r,!0);bc(()=>{li(r[t],s)},n)}function Kr(e,t,n=ge,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Mt();const c=tr(n),a=Ke(t,n,e,o);return c(),Lt(),a});return r?s.unshift(i):s.push(i),i}}const gt=e=>(t,n=ge)=>{(!Wn||e==="sp")&&Kr(e,(...r)=>t(...r),n)},ef=gt("bm"),vc=gt("m"),tf=gt("bu"),nf=gt("u"),yc=gt("bum"),bc=gt("um"),rf=gt("sp"),sf=gt("rtg"),of=gt("rtc");function af(e,t=ge){Kr("ec",e,t)}const wc="components";function cf(e,t){return uf(wc,e,!0,t)||e}const lf=Symbol.for("v-ndc");function uf(e,t,n=!0,r=!1){const s=Re||ge;if(s){const i=s.type;if(e===wc){const c=rd(i,!1);if(c&&(c===t||c===Fe(t)||c===Hr(Fe(t))))return i}const o=eo(s[e]||i[e],t)||eo(s.appContext[e],t);return!o&&r?i:o}}function eo(e,t){return e&&(e[t]||e[Fe(t)]||e[Hr(Fe(t))])}function Q_(e,t,n,r){let s;const i=n&&n[r],o=W(e);if(o||he(e)){const c=o&&an(e);let a=!1;c&&(a=!Ue(e),e=Vr(e)),s=new Array(e.length);for(let l=0,f=e.length;l<f;l++)s[l]=t(a?be(e[l]):e[l],l,void 0,i&&i[l])}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,i&&i[c])}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(c,a)=>t(c,a,void 0,i&&i[a]));else{const c=Object.keys(e);s=new Array(c.length);for(let a=0,l=c.length;a<l;a++){const f=c[a];s[a]=t(e[f],f,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const $s=e=>e?Wc(e)?Jr(e):$s(e.parent):null,xn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$s(e.parent),$root:e=>$s(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ei(e),$forceUpdate:e=>e.f||(e.f=()=>{wi(e.update)}),$nextTick:e=>e.n||(e.n=rc.bind(e.proxy)),$watch:e=>Of.bind(e)}),fs=(e,t)=>e!==ae&&!e.__isScriptSetup&&ne(e,t),ff={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(fs(r,t))return o[t]=1,r[t];if(s!==ae&&ne(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&ne(l,t))return o[t]=3,i[t];if(n!==ae&&ne(n,t))return o[t]=4,n[t];Hs&&(o[t]=0)}}const f=xn[t];let u,h;if(f)return t==="$attrs"&&ye(e.attrs,"get",""),f(e);if((u=c.__cssModules)&&(u=u[t]))return u;if(n!==ae&&ne(n,t))return o[t]=4,n[t];if(h=a.config.globalProperties,ne(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return fs(s,t)?(s[t]=n,!0):r!==ae&&ne(r,t)?(r[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||e!==ae&&ne(e,o)||fs(t,o)||(c=i[0])&&ne(c,o)||ne(r,o)||ne(xn,o)||ne(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function to(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Hs=!0;function df(e){const t=Ei(e),n=e.proxy,r=e.ctx;Hs=!1,t.beforeCreate&&no(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:g,updated:_,activated:w,deactivated:B,beforeDestroy:x,beforeUnmount:P,destroyed:M,unmounted:O,render:C,renderTracked:L,renderTriggered:V,errorCaptured:Y,serverPrefetch:k,expose:H,inheritAttrs:J,components:N,directives:G,filters:ue}=t;if(l&&hf(l,r,null),o)for(const X in o){const ee=o[X];K(ee)&&(r[X]=ee.bind(n))}if(s){const X=s.call(n,n);fe(X)&&(e.data=bn(X))}if(Hs=!0,i)for(const X in i){const ee=i[X],rt=K(ee)?ee.bind(n,n):K(ee.get)?ee.get.bind(n,n):je,mt=!K(ee)&&K(ee.set)?ee.set.bind(n):je,Ge=He({get:rt,set:mt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ce=>Ge.value=Ce})}if(c)for(const X in c)Ec(c[X],r,n,X);if(a){const X=K(a)?a.call(n):a;Reflect.ownKeys(X).forEach(ee=>{mr(ee,X[ee])})}f&&no(f,e,"c");function ie(X,ee){W(ee)?ee.forEach(rt=>X(rt.bind(n))):ee&&X(ee.bind(n))}if(ie(ef,u),ie(vc,h),ie(tf,g),ie(nf,_),ie(Qu,w),ie(Xu,B),ie(af,Y),ie(of,L),ie(sf,V),ie(yc,P),ie(bc,O),ie(rf,k),W(H))if(H.length){const X=e.exposed||(e.exposed={});H.forEach(ee=>{Object.defineProperty(X,ee,{get:()=>n[ee],set:rt=>n[ee]=rt})})}else e.exposed||(e.exposed={});C&&e.render===je&&(e.render=C),J!=null&&(e.inheritAttrs=J),N&&(e.components=N),G&&(e.directives=G),k&&mc(e)}function hf(e,t,n=je){W(e)&&(e=js(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),Ee(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function no(e,t,n){Ke(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ec(e,t,n,r){let s=r.includes(".")?Mc(n,r):()=>n[r];if(he(e)){const i=t[e];K(i)&&_r(s,i)}else if(K(e))_r(s,e.bind(n));else if(fe(e))if(W(e))e.forEach(i=>Ec(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&_r(s,i,e)}}function Ei(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(l=>Ar(a,l,o,!0)),Ar(a,t,o)),fe(t)&&i.set(t,a),a}function Ar(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ar(e,i,n,!0),s&&s.forEach(o=>Ar(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=pf[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const pf={data:ro,props:so,emits:so,methods:Cn,computed:Cn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Cn,directives:Cn,watch:mf,provide:ro,inject:gf};function ro(e,t){return t?e?function(){return pe(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function gf(e,t){return Cn(js(e),js(t))}function js(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Cn(e,t){return e?pe(Object.create(null),e,t):t}function so(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:pe(Object.create(null),to(e),to(t!=null?t:{})):t}function mf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function Ic(){return{app:null,config:{isNativeTag:nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _f=0;function vf(e,t){return function(r,s=null){K(r)||(r=pe({},r)),s!=null&&!fe(s)&&(s=null);const i=Ic(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:_f++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:id,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&K(f.install)?(o.add(f),f.install(l,...u)):K(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,h){if(!a){const g=l._ceVNode||ke(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(g,f):e(g,f,h),a=!0,l._container=f,f.__vue_app__=l,Jr(g.component)}},onUnmount(f){c.push(f)},unmount(){a&&(Ke(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l},runWithContext(f){const u=un;un=l;try{return f()}finally{un=u}}};return l}}let un=null;function mr(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function We(e,t,n=!1){const r=ge||Re;if(r||un){const s=un?un._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}const Sc={},Tc=()=>Object.create(Sc),Cc=e=>Object.getPrototypeOf(e)===Sc;function yf(e,t,n,r=!1){const s={},i=Tc();e.propsDefaults=Object.create(null),Ac(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Xa(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function bf(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=Z(s),[a]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(qr(e.emitsOptions,h))continue;const g=t[h];if(a)if(ne(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const _=Fe(h);s[_]=Vs(a,c,_,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Ac(e,t,s,i)&&(l=!0);let f;for(const u in c)(!t||!ne(t,u)&&((f=Xt(u))===u||!ne(t,f)))&&(a?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=Vs(a,c,u,void 0,e,!0)):delete s[u]);if(i!==c)for(const u in i)(!t||!ne(t,u)&&!0)&&(delete i[u],l=!0)}l&&at(e.attrs,"set","")}function Ac(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(An(a))continue;const l=t[a];let f;s&&ne(s,f=Fe(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:qr(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Z(n),l=c||ae;for(let f=0;f<i.length;f++){const u=i[f];n[u]=Vs(s,a,u,l[u],e,!ne(l,u))}}return o}function Vs(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=ne(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=tr(s);r=l[n]=a.call(null,t),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}const wf=new WeakMap;function Rc(e,t,n=!1){const r=n?wf:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let a=!1;if(!K(e)){const f=u=>{a=!0;const[h,g]=Rc(u,t,!0);pe(o,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!a)return fe(e)&&r.set(e,sn),sn;if(W(i))for(let f=0;f<i.length;f++){const u=Fe(i[f]);io(u)&&(o[u]=ae)}else if(i)for(const f in i){const u=Fe(f);if(io(u)){const h=i[f],g=o[u]=W(h)||K(h)?{type:h}:pe({},h),_=g.type;let w=!1,B=!0;if(W(_))for(let x=0;x<_.length;++x){const P=_[x],M=K(P)&&P.name;if(M==="Boolean"){w=!0;break}else M==="String"&&(B=!1)}else w=K(_)&&_.name==="Boolean";g[0]=w,g[1]=B,(w||ne(g,"default"))&&c.push(u)}}const l=[o,c];return fe(e)&&r.set(e,l),l}function io(e){return e[0]!=="$"&&!An(e)}const Pc=e=>e[0]==="_"||e==="$stable",Ii=e=>W(e)?e.map($e):[$e(e)],Ef=(e,t,n)=>{if(t._n)return t;const r=Wu((...s)=>Ii(t(...s)),n);return r._c=!1,r},kc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Pc(s))continue;const i=e[s];if(K(i))t[s]=Ef(s,i,r);else if(i!=null){const o=Ii(i);t[s]=()=>o}}},Oc=(e,t)=>{const n=Ii(t);e.slots.default=()=>n},xc=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},If=(e,t,n)=>{const r=e.slots=Tc();if(e.vnode.shapeFlag&32){const s=t._;s?(xc(r,t,n),n&&xa(r,"_",s,!0)):kc(t,r)}else t&&Oc(e,t)},Sf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ae;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:xc(s,t,n):(i=!t.$stable,kc(t,s)),o=t}else t&&(Oc(e,t),o={default:1});if(i)for(const c in s)!Pc(c)&&o[c]==null&&delete s[c]},Ae=Vf;function Tf(e){return Cf(e)}function Cf(e,t){const n=jr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:g=je,insertStaticContent:_}=e,w=(d,p,m,b=null,v=null,E=null,A=void 0,T=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ze(d,p)&&(b=y(d),Ce(d,v,E,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:I,ref:j,shapeFlag:D}=p;switch(I){case Gr:B(d,p,m,b);break;case we:x(d,p,m,b);break;case ps:d==null&&P(p,m,b,A);break;case Xe:N(d,p,m,b,v,E,A,T,S);break;default:D&1?C(d,p,m,b,v,E,A,T,S):D&6?G(d,p,m,b,v,E,A,T,S):(D&64||D&128)&&I.process(d,p,m,b,v,E,A,T,S,F)}j!=null&&v&&Bs(j,d&&d.ref,E,p||d,!p)},B=(d,p,m,b)=>{if(d==null)r(p.el=c(p.children),m,b);else{const v=p.el=d.el;p.children!==d.children&&l(v,p.children)}},x=(d,p,m,b)=>{d==null?r(p.el=a(p.children||""),m,b):p.el=d.el},P=(d,p,m,b)=>{[d.el,d.anchor]=_(d.children,p,m,b,d.el,d.anchor)},M=({el:d,anchor:p},m,b)=>{let v;for(;d&&d!==p;)v=h(d),r(d,m,b),d=v;r(p,m,b)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},C=(d,p,m,b,v,E,A,T,S)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null?L(p,m,b,v,E,A,T,S):k(d,p,v,E,A,T,S)},L=(d,p,m,b,v,E,A,T)=>{let S,I;const{props:j,shapeFlag:D,transition:$,dirs:q}=d;if(S=d.el=o(d.type,E,j&&j.is,j),D&8?f(S,d.children):D&16&&Y(d.children,S,null,b,v,ds(d,E),A,T),q&&Bt(d,null,b,"created"),V(S,d,d.scopeId,A,b),j){for(const ce in j)ce!=="value"&&!An(ce)&&i(S,ce,null,j[ce],E,b);"value"in j&&i(S,"value",null,j.value,E),(I=j.onVnodeBeforeMount)&&Ye(I,b,d)}q&&Bt(d,null,b,"beforeMount");const Q=Af(v,$);Q&&$.beforeEnter(S),r(S,p,m),((I=j&&j.onVnodeMounted)||Q||q)&&Ae(()=>{I&&Ye(I,b,d),Q&&$.enter(S),q&&Bt(d,null,b,"mounted")},v)},V=(d,p,m,b,v)=>{if(m&&g(d,m),b)for(let E=0;E<b.length;E++)g(d,b[E]);if(v){let E=v.subTree;if(p===E||Uc(E.type)&&(E.ssContent===p||E.ssFallback===p)){const A=v.vnode;V(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},Y=(d,p,m,b,v,E,A,T,S=0)=>{for(let I=S;I<d.length;I++){const j=d[I]=T?It(d[I]):$e(d[I]);w(null,j,p,m,b,v,E,A,T)}},k=(d,p,m,b,v,E,A)=>{const T=p.el=d.el;let{patchFlag:S,dynamicChildren:I,dirs:j}=p;S|=d.patchFlag&16;const D=d.props||ae,$=p.props||ae;let q;if(m&&$t(m,!1),(q=$.onVnodeBeforeUpdate)&&Ye(q,m,p,d),j&&Bt(p,d,m,"beforeUpdate"),m&&$t(m,!0),(D.innerHTML&&$.innerHTML==null||D.textContent&&$.textContent==null)&&f(T,""),I?H(d.dynamicChildren,I,T,m,b,ds(p,v),E):A||ee(d,p,T,null,m,b,ds(p,v),E,!1),S>0){if(S&16)J(T,D,$,m,v);else if(S&2&&D.class!==$.class&&i(T,"class",null,$.class,v),S&4&&i(T,"style",D.style,$.style,v),S&8){const Q=p.dynamicProps;for(let ce=0;ce<Q.length;ce++){const re=Q[ce],Oe=D[re],_e=$[re];(_e!==Oe||re==="value")&&i(T,re,Oe,_e,v,m)}}S&1&&d.children!==p.children&&f(T,p.children)}else!A&&I==null&&J(T,D,$,m,v);((q=$.onVnodeUpdated)||j)&&Ae(()=>{q&&Ye(q,m,p,d),j&&Bt(p,d,m,"updated")},b)},H=(d,p,m,b,v,E,A)=>{for(let T=0;T<p.length;T++){const S=d[T],I=p[T],j=S.el&&(S.type===Xe||!Ze(S,I)||S.shapeFlag&70)?u(S.el):m;w(S,I,j,null,b,v,E,A,!0)}},J=(d,p,m,b,v)=>{if(p!==m){if(p!==ae)for(const E in p)!An(E)&&!(E in m)&&i(d,E,p[E],null,v,b);for(const E in m){if(An(E))continue;const A=m[E],T=p[E];A!==T&&E!=="value"&&i(d,E,T,A,v,b)}"value"in m&&i(d,"value",p.value,m.value,v)}},N=(d,p,m,b,v,E,A,T,S)=>{const I=p.el=d?d.el:c(""),j=p.anchor=d?d.anchor:c("");let{patchFlag:D,dynamicChildren:$,slotScopeIds:q}=p;q&&(T=T?T.concat(q):q),d==null?(r(I,m,b),r(j,m,b),Y(p.children||[],m,j,v,E,A,T,S)):D>0&&D&64&&$&&d.dynamicChildren?(H(d.dynamicChildren,$,m,v,E,A,T),(p.key!=null||v&&p===v.subTree)&&Si(d,p,!0)):ee(d,p,m,j,v,E,A,T,S)},G=(d,p,m,b,v,E,A,T,S)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?v.ctx.activate(p,m,b,A,S):ue(p,m,b,v,E,A,S):me(d,p,S)},ue=(d,p,m,b,v,E,A)=>{const T=d.component=Qf(d,b,v);if(zr(d)&&(T.ctx.renderer=F),Zf(T,!1,A),T.asyncDep){if(v&&v.registerDep(T,ie,A),!d.el){const S=T.subTree=ke(we);x(null,S,p,m)}}else ie(T,d,p,m,v,E,A)},me=(d,p,m)=>{const b=p.component=d.component;if(Uf(d,p,m))if(b.asyncDep&&!b.asyncResolved){X(b,p,m);return}else b.next=p,b.update();else p.el=d.el,b.vnode=p},ie=(d,p,m,b,v,E,A)=>{const T=()=>{if(d.isMounted){let{next:D,bu:$,u:q,parent:Q,vnode:ce}=d;{const xe=Nc(d);if(xe){D&&(D.el=ce.el,X(d,D,A)),xe.asyncDep.then(()=>{d.isUnmounted||T()});return}}let re=D,Oe;$t(d,!1),D?(D.el=ce.el,X(d,D,A)):D=ce,$&&is($),(Oe=D.props&&D.props.onVnodeBeforeUpdate)&&Ye(Oe,Q,D,ce),$t(d,!0);const _e=hs(d),Be=d.subTree;d.subTree=_e,w(Be,_e,u(Be.el),y(Be),d,v,E),D.el=_e.el,re===null&&Ti(d,_e.el),q&&Ae(q,v),(Oe=D.props&&D.props.onVnodeUpdated)&&Ae(()=>Ye(Oe,Q,D,ce),v)}else{let D;const{el:$,props:q}=p,{bm:Q,m:ce,parent:re,root:Oe,type:_e}=d,Be=On(p);if($t(d,!1),Q&&is(Q),!Be&&(D=q&&q.onVnodeBeforeMount)&&Ye(D,re,p),$t(d,!0),$&&de){const xe=()=>{d.subTree=hs(d),de($,d.subTree,d,v,null)};Be&&_e.__asyncHydrate?_e.__asyncHydrate($,d,xe):xe()}else{Oe.ce&&Oe.ce._injectChildStyle(_e);const xe=d.subTree=hs(d);w(null,xe,m,b,d,v,E),p.el=xe.el}if(ce&&Ae(ce,v),!Be&&(D=q&&q.onVnodeMounted)){const xe=p;Ae(()=>Ye(D,re,xe),v)}(p.shapeFlag&256||re&&On(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Ae(d.a,v),d.isMounted=!0,p=m=b=null}};d.scope.on();const S=d.effect=new Fa(T);d.scope.off();const I=d.update=S.run.bind(S),j=d.job=S.runIfDirty.bind(S);j.i=d,j.id=d.uid,S.scheduler=()=>wi(j),$t(d,!0),I()},X=(d,p,m)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,bf(d,p.props,b,m),Sf(d,p.children,m),Mt(),Yi(d),Lt()},ee=(d,p,m,b,v,E,A,T,S=!1)=>{const I=d&&d.children,j=d?d.shapeFlag:0,D=p.children,{patchFlag:$,shapeFlag:q}=p;if($>0){if($&128){mt(I,D,m,b,v,E,A,T,S);return}else if($&256){rt(I,D,m,b,v,E,A,T,S);return}}q&8?(j&16&&Me(I,v,E),D!==I&&f(m,D)):j&16?q&16?mt(I,D,m,b,v,E,A,T,S):Me(I,v,E,!0):(j&8&&f(m,""),q&16&&Y(D,m,b,v,E,A,T,S))},rt=(d,p,m,b,v,E,A,T,S)=>{d=d||sn,p=p||sn;const I=d.length,j=p.length,D=Math.min(I,j);let $;for($=0;$<D;$++){const q=p[$]=S?It(p[$]):$e(p[$]);w(d[$],q,m,null,v,E,A,T,S)}I>j?Me(d,v,E,!0,!1,D):Y(p,m,b,v,E,A,T,S,D)},mt=(d,p,m,b,v,E,A,T,S)=>{let I=0;const j=p.length;let D=d.length-1,$=j-1;for(;I<=D&&I<=$;){const q=d[I],Q=p[I]=S?It(p[I]):$e(p[I]);if(Ze(q,Q))w(q,Q,m,null,v,E,A,T,S);else break;I++}for(;I<=D&&I<=$;){const q=d[D],Q=p[$]=S?It(p[$]):$e(p[$]);if(Ze(q,Q))w(q,Q,m,null,v,E,A,T,S);else break;D--,$--}if(I>D){if(I<=$){const q=$+1,Q=q<j?p[q].el:b;for(;I<=$;)w(null,p[I]=S?It(p[I]):$e(p[I]),m,Q,v,E,A,T,S),I++}}else if(I>$)for(;I<=D;)Ce(d[I],v,E,!0),I++;else{const q=I,Q=I,ce=new Map;for(I=Q;I<=$;I++){const Ne=p[I]=S?It(p[I]):$e(p[I]);Ne.key!=null&&ce.set(Ne.key,I)}let re,Oe=0;const _e=$-Q+1;let Be=!1,xe=0;const En=new Array(_e);for(I=0;I<_e;I++)En[I]=0;for(I=q;I<=D;I++){const Ne=d[I];if(Oe>=_e){Ce(Ne,v,E,!0);continue}let Je;if(Ne.key!=null)Je=ce.get(Ne.key);else for(re=Q;re<=$;re++)if(En[re-Q]===0&&Ze(Ne,p[re])){Je=re;break}Je===void 0?Ce(Ne,v,E,!0):(En[Je-Q]=I+1,Je>=xe?xe=Je:Be=!0,w(Ne,p[Je],m,null,v,E,A,T,S),Oe++)}const Wi=Be?Rf(En):sn;for(re=Wi.length-1,I=_e-1;I>=0;I--){const Ne=Q+I,Je=p[Ne],zi=Ne+1<j?p[Ne+1].el:b;En[I]===0?w(null,Je,m,zi,v,E,A,T,S):Be&&(re<0||I!==Wi[re]?Ge(Je,m,zi,2):re--)}}},Ge=(d,p,m,b,v=null)=>{const{el:E,type:A,transition:T,children:S,shapeFlag:I}=d;if(I&6){Ge(d.component.subTree,p,m,b);return}if(I&128){d.suspense.move(p,m,b);return}if(I&64){A.move(d,p,m,F);return}if(A===Xe){r(E,p,m);for(let D=0;D<S.length;D++)Ge(S[D],p,m,b);r(d.anchor,p,m);return}if(A===ps){M(d,p,m);return}if(b!==2&&I&1&&T)if(b===0)T.beforeEnter(E),r(E,p,m),Ae(()=>T.enter(E),v);else{const{leave:D,delayLeave:$,afterLeave:q}=T,Q=()=>r(E,p,m),ce=()=>{D(E,()=>{Q(),q&&q()})};$?$(E,Q,ce):ce()}else r(E,p,m)},Ce=(d,p,m,b=!1,v=!1)=>{const{type:E,props:A,ref:T,children:S,dynamicChildren:I,shapeFlag:j,patchFlag:D,dirs:$,cacheIndex:q}=d;if(D===-2&&(v=!1),T!=null&&Bs(T,null,m,d,!0),q!=null&&(p.renderCache[q]=void 0),j&256){p.ctx.deactivate(d);return}const Q=j&1&&$,ce=!On(d);let re;if(ce&&(re=A&&A.onVnodeBeforeUnmount)&&Ye(re,p,d),j&6)cr(d.component,m,b);else{if(j&128){d.suspense.unmount(m,b);return}Q&&Bt(d,null,p,"beforeUnmount"),j&64?d.type.remove(d,p,m,F,b):I&&!I.hasOnce&&(E!==Xe||D>0&&D&64)?Me(I,p,m,!1,!0):(E===Xe&&D&384||!v&&j&16)&&Me(S,p,m),b&&Zt(d)}(ce&&(re=A&&A.onVnodeUnmounted)||Q)&&Ae(()=>{re&&Ye(re,p,d),Q&&Bt(d,null,p,"unmounted")},m)},Zt=d=>{const{type:p,el:m,anchor:b,transition:v}=d;if(p===Xe){en(m,b);return}if(p===ps){O(d);return}const E=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:T}=v,S=()=>A(m,E);T?T(d.el,E,S):S()}else E()},en=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},cr=(d,p,m)=>{const{bum:b,scope:v,job:E,subTree:A,um:T,m:S,a:I}=d;oo(S),oo(I),b&&is(b),v.stop(),E&&(E.flags|=8,Ce(A,d,p,m)),T&&Ae(T,p),Ae(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Me=(d,p,m,b=!1,v=!1,E=0)=>{for(let A=E;A<d.length;A++)Ce(d[A],p,m,b,v)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[cc];return m?h(m):p};let U=!1;const R=(d,p,m)=>{d==null?p._vnode&&Ce(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,m),p._vnode=d,U||(U=!0,Yi(),ic(),U=!1)},F={p:w,um:Ce,m:Ge,r:Zt,mt:ue,mc:Y,pc:ee,pbc:H,n:y,o:e};let te,de;return t&&([te,de]=t(F)),{render:R,hydrate:te,createApp:vf(R,te)}}function ds({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function $t({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Af(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Si(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=It(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Si(o,c)),c.type===Gr&&(c.el=o.el)}}function Rf(e){const t=e.slice(),n=[0];let r,s,i,o,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<l?i=c+1:o=c;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Nc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nc(t)}function oo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Pf=Symbol.for("v-scx"),kf=()=>We(Pf);function _r(e,t,n){return Dc(e,t,n)}function Dc(e,t,n=ae){const{immediate:r,deep:s,flush:i,once:o}=n,c=pe({},n),a=t&&r||!t&&i!=="post";let l;if(Wn){if(i==="sync"){const g=kf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=je,g.resume=je,g.pause=je,g}}const f=ge;c.call=(g,_,w)=>Ke(g,f,_,w);let u=!1;i==="post"?c.scheduler=g=>{Ae(g,f&&f.suspense)}:i!=="sync"&&(u=!0,c.scheduler=(g,_)=>{_?g():wi(g)}),c.augmentJob=g=>{t&&(g.flags|=4),u&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const h=Hu(e,t,c);return Wn&&(l?l.push(h):a&&h()),h}function Of(e,t,n){const r=this.proxy,s=he(e)?e.includes(".")?Mc(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=tr(this),c=Dc(s,i.bind(r),n);return o(),c}function Mc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const xf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fe(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function Nf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let s=n;const i=t.startsWith("update:"),o=i&&xf(r,t.slice(7));o&&(o.trim&&(s=n.map(f=>he(f)?f.trim():f)),o.number&&(s=n.map(au)));let c,a=r[c=ss(t)]||r[c=ss(Fe(t))];!a&&i&&(a=r[c=ss(Xt(t))]),a&&Ke(a,e,6,s);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ke(l,e,6,s)}}function Lc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!K(e)){const a=l=>{const f=Lc(l,t,!0);f&&(c=!0,pe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(fe(e)&&r.set(e,null),null):(W(i)?i.forEach(a=>o[a]=null):pe(o,i),fe(e)&&r.set(e,o),o)}function qr(e,t){return!e||!Fr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,Xt(t))||ne(e,t))}function hs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:u,data:h,setupState:g,ctx:_,inheritAttrs:w}=e,B=Cr(e);let x,P;try{if(n.shapeFlag&4){const O=s||r,C=O;x=$e(l.call(C,O,f,u,g,h,_)),P=c}else{const O=t;x=$e(O.length>1?O(u,{attrs:c,slots:o,emit:a}):O(u,null)),P=t.props?c:Mf(c)}}catch(O){Nn.length=0,er(O,e,1),x=ke(we)}let M=x;if(P&&w!==!1){const O=Object.keys(P),{shapeFlag:C}=M;O.length&&C&7&&(i&&O.some(ci)&&(P=Lf(P,i)),M=Nt(M,P,!1,!0))}return n.dirs&&(M=Nt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Hn(M,n.transition),x=M,Cr(B),x}function Df(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(Vn(s)){if(s.type!==we||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fr(n))&&((t||(t={}))[n]=e[n]);return t},Lf=(e,t)=>{const n={};for(const r in e)(!ci(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Uf(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:a}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?ao(r,o,l):!!o;if(a&8){const f=t.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==r[h]&&!qr(l,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ao(r,o,l):!0:!!o;return!1}function ao(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!qr(n,i))return!0}return!1}function Ti({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Uc=e=>e.__isSuspense;let Ws=0;const Ff={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,c,a,l){if(e==null)Bf(t,n,r,s,i,o,c,a,l);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}$f(e,t,n,r,s,o,c,a,l)}},hydrate:Hf,normalize:jf},X_=Ff;function jn(e,t){const n=e.props&&e.props[t];K(n)&&n()}function Bf(e,t,n,r,s,i,o,c,a){const{p:l,o:{createElement:f}}=a,u=f("div"),h=e.suspense=Fc(e,s,r,t,u,n,i,o,c,a);l(null,h.pendingBranch=e.ssContent,u,null,r,h,i,o),h.deps>0?(jn(e,"onPending"),jn(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,i,o),fn(h,e.ssFallback)):h.resolve(!1,!0)}function $f(e,t,n,r,s,i,o,c,{p:a,um:l,o:{createElement:f}}){const u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;const h=t.ssContent,g=t.ssFallback,{activeBranch:_,pendingBranch:w,isInFallback:B,isHydrating:x}=u;if(w)u.pendingBranch=h,Ze(h,w)?(a(w,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0?u.resolve():B&&(x||(a(_,g,n,r,s,null,i,o,c),fn(u,g)))):(u.pendingId=Ws++,x?(u.isHydrating=!1,u.activeBranch=w):l(w,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),B?(a(null,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0?u.resolve():(a(_,g,n,r,s,null,i,o,c),fn(u,g))):_&&Ze(h,_)?(a(_,h,n,r,s,u,i,o,c),u.resolve(!0)):(a(null,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0&&u.resolve()));else if(_&&Ze(h,_))a(_,h,n,r,s,u,i,o,c),fn(u,h);else if(jn(t,"onPending"),u.pendingBranch=h,h.shapeFlag&512?u.pendingId=h.component.suspenseId:u.pendingId=Ws++,a(null,h,u.hiddenContainer,null,s,u,i,o,c),u.deps<=0)u.resolve();else{const{timeout:P,pendingId:M}=u;P>0?setTimeout(()=>{u.pendingId===M&&u.fallback(g)},P):P===0&&u.fallback(g)}}function Fc(e,t,n,r,s,i,o,c,a,l,f=!1){const{p:u,m:h,um:g,n:_,o:{parentNode:w,remove:B}}=l;let x;const P=Wf(e);P&&t&&t.pendingBranch&&(x=t.pendingId,t.deps++);const M=e.props?Na(e.props.timeout):void 0,O=i,C={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Ws++,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(L=!1,V=!1){const{vnode:Y,activeBranch:k,pendingBranch:H,pendingId:J,effects:N,parentComponent:G,container:ue}=C;let me=!1;C.isHydrating?C.isHydrating=!1:L||(me=k&&H.transition&&H.transition.mode==="out-in",me&&(k.transition.afterLeave=()=>{J===C.pendingId&&(h(H,ue,i===O?_(k):i,0),Ls(N))}),k&&(w(k.el)===ue&&(i=_(k)),g(k,G,C,!0)),me||h(H,ue,i,0)),fn(C,H),C.pendingBranch=null,C.isInFallback=!1;let ie=C.parent,X=!1;for(;ie;){if(ie.pendingBranch){ie.effects.push(...N),X=!0;break}ie=ie.parent}!X&&!me&&Ls(N),C.effects=[],P&&t&&t.pendingBranch&&x===t.pendingId&&(t.deps--,t.deps===0&&!V&&t.resolve()),jn(Y,"onResolve")},fallback(L){if(!C.pendingBranch)return;const{vnode:V,activeBranch:Y,parentComponent:k,container:H,namespace:J}=C;jn(V,"onFallback");const N=_(Y),G=()=>{!C.isInFallback||(u(null,L,H,N,k,null,J,c,a),fn(C,L))},ue=L.transition&&L.transition.mode==="out-in";ue&&(Y.transition.afterLeave=G),C.isInFallback=!0,g(Y,k,null,!0),ue||G()},move(L,V,Y){C.activeBranch&&h(C.activeBranch,L,V,Y),C.container=L},next(){return C.activeBranch&&_(C.activeBranch)},registerDep(L,V,Y){const k=!!C.pendingBranch;k&&C.deps++;const H=L.vnode.el;L.asyncDep.catch(J=>{er(J,L,0)}).then(J=>{if(L.isUnmounted||C.isUnmounted||C.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:N}=L;Ks(L,J,!1),H&&(N.el=H);const G=!H&&L.subTree.el;V(L,N,w(H||L.subTree.el),H?null:_(L.subTree),C,o,Y),G&&B(G),Ti(L,N.el),k&&--C.deps===0&&C.resolve()})},unmount(L,V){C.isUnmounted=!0,C.activeBranch&&g(C.activeBranch,n,L,V),C.pendingBranch&&g(C.pendingBranch,n,L,V)}};return C}function Hf(e,t,n,r,s,i,o,c,a){const l=t.suspense=Fc(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,c,!0),f=a(e,l.pendingBranch=t.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),f}function jf(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=co(r?n.default:n),e.ssFallback=r?co(n.fallback):ke(we)}function co(e){let t;if(K(e)){const n=gn&&e._c;n&&(e._d=!1,Ci()),e=e(),n&&(e._d=!0,t=Pe,Bc())}return W(e)&&(e=Df(e)),e=$e(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Vf(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Ls(e)}function fn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Ti(r,s))}function Wf(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const Xe=Symbol.for("v-fgt"),Gr=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),ps=Symbol.for("v-stc"),Nn=[];let Pe=null;function Ci(e=!1){Nn.push(Pe=e?null:[])}function Bc(){Nn.pop(),Pe=Nn[Nn.length-1]||null}let gn=1;function lo(e){gn+=e,e<0&&Pe&&(Pe.hasOnce=!0)}function $c(e){return e.dynamicChildren=gn>0?Pe||sn:null,Bc(),gn>0&&Pe&&Pe.push(e),e}function Z_(e,t,n,r,s,i){return $c(Vc(e,t,n,r,s,i,!0))}function Hc(e,t,n,r,s){return $c(ke(e,t,n,r,s,!0))}function Vn(e){return e?e.__v_isVNode===!0:!1}function Ze(e,t){return e.type===t.type&&e.key===t.key}const jc=({key:e})=>e!=null?e:null,vr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Ee(e)||K(e)?{i:Re,r:e,k:t,f:!!n}:e:null);function Vc(e,t=null,n=null,r=0,s=null,i=e===Xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jc(t),ref:t&&vr(t),scopeId:ac,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return c?(Ai(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),gn>0&&!o&&Pe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Pe.push(a),a}const ke=zf;function zf(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===lf)&&(e=we),Vn(e)){const c=Nt(e,t,!0);return n&&Ai(c,n),gn>0&&!i&&Pe&&(c.shapeFlag&6?Pe[Pe.indexOf(e)]=c:Pe.push(c)),c.patchFlag=-2,c}if(sd(e)&&(e=e.__vccOpts),t){t=Kf(t);let{class:c,style:a}=t;c&&!he(c)&&(t.class=di(c)),fe(a)&&(yi(a)&&!W(a)&&(a=pe({},a)),t.style=fi(a))}const o=he(e)?1:Uc(e)?128:lc(e)?64:fe(e)?4:K(e)?2:0;return Vc(e,t,n,r,s,o,i,!0)}function Kf(e){return e?yi(e)||Cc(e)?pe({},e):e:null}function Nt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=e,l=t?Gf(s||{},t):s,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&jc(l),ref:t&&t.ref?n&&i?W(i)?i.concat(vr(t)):[i,vr(t)]:vr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Hn(f,a.clone(f)),f}function qf(e=" ",t=0){return ke(Gr,null,e,t)}function ev(e="",t=!1){return t?(Ci(),Hc(we,null,e)):ke(we,null,e)}function $e(e){return e==null||typeof e=="boolean"?ke(we):W(e)?ke(Xe,null,e.slice()):Vn(e)?It(e):ke(Gr,null,String(e))}function It(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function Ai(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ai(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Cc(t)?t._ctx=Re:s===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),r&64?(n=16,t=[qf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=di([t.class,r.class]));else if(s==="style")t.style=fi([t.style,r.style]);else if(Fr(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Ye(e,t,n,r=null){Ke(e,t,7,[n,r])}const Jf=Ic();let Yf=0;function Qf(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Jf,i={uid:Yf++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ua(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(r,s),emitsOptions:Lc(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Nf.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const Xf=()=>ge||Re;let Rr,zs;{const e=jr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rr=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),zs=t("__VUE_SSR_SETTERS__",n=>Wn=n)}const tr=e=>{const t=ge;return Rr(e),e.scope.on(),()=>{e.scope.off(),Rr(t)}},uo=()=>{ge&&ge.scope.off(),Rr(null)};function Wc(e){return e.vnode.shapeFlag&4}let Wn=!1;function Zf(e,t=!1,n=!1){t&&zs(t);const{props:r,children:s}=e.vnode,i=Wc(e);yf(e,r,i,t),If(e,s,n);const o=i?ed(e,t):void 0;return t&&zs(!1),o}function ed(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ff);const{setup:r}=n;if(r){Mt();const s=e.setupContext=r.length>1?nd(e):null,i=tr(e),o=Zn(r,e,0,[e.props,s]),c=Pa(o);if(Lt(),i(),(c||e.sp)&&!On(e)&&mc(e),c){if(o.then(uo,uo),t)return o.then(a=>{Ks(e,a,t)}).catch(a=>{er(a,e,0)});e.asyncDep=o}else Ks(e,o,t)}else zc(e,t)}function Ks(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=tc(t)),zc(e,n)}let fo;function zc(e,t,n){const r=e.type;if(!e.render){if(!t&&fo&&!r.render){const s=r.template||Ei(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,l=pe(pe({isCustomElement:i,delimiters:c},o),a);r.render=fo(s,l)}}e.render=r.render||je}{const s=tr(e);Mt();try{df(e)}finally{Lt(),s()}}}const td={get(e,t){return ye(e,"get",""),e[t]}};function nd(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,td),slots:e.slots,emit:e.emit,expose:t}}function Jr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(tc(Xn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)},has(t,n){return n in t||n in xn}})):e.proxy}function rd(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function sd(e){return K(e)&&"__vccOpts"in e}const He=(e,t)=>Bu(e,t,Wn);function Ri(e,t,n){const r=arguments.length;return r===2?fe(t)&&!W(t)?Vn(t)?ke(e,null,[t]):ke(e,t):ke(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vn(n)&&(n=[n]),ke(e,t,n))}const id="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qs;const ho=typeof window!="undefined"&&window.trustedTypes;if(ho)try{qs=ho.createPolicy("vue",{createHTML:e=>e})}catch{}const Kc=qs?e=>qs.createHTML(e):e=>e,od="http://www.w3.org/2000/svg",ad="http://www.w3.org/1998/Math/MathML",ot=typeof document!="undefined"?document:null,po=ot&&ot.createElement("template"),cd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?ot.createElementNS(od,e):t==="mathml"?ot.createElementNS(ad,e):n?ot.createElement(e,{is:n}):ot.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{po.innerHTML=Kc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=po.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_t="transition",Sn="animation",zn=Symbol("_vtc"),qc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ld=pe({},fc,qc),ud=e=>(e.displayName="Transition",e.props=ld,e),tv=ud((e,{slots:t})=>Ri(Yu,fd(e),t)),Ht=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},go=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function fd(e){const t={};for(const N in e)N in qc||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:f=c,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=dd(s),w=_&&_[0],B=_&&_[1],{onBeforeEnter:x,onEnter:P,onEnterCancelled:M,onLeave:O,onLeaveCancelled:C,onBeforeAppear:L=x,onAppear:V=P,onAppearCancelled:Y=M}=t,k=(N,G,ue)=>{jt(N,G?f:c),jt(N,G?l:o),ue&&ue()},H=(N,G)=>{N._isLeaving=!1,jt(N,u),jt(N,g),jt(N,h),G&&G()},J=N=>(G,ue)=>{const me=N?V:P,ie=()=>k(G,N,ue);Ht(me,[G,ie]),mo(()=>{jt(G,N?a:i),vt(G,N?f:c),go(me)||_o(G,r,w,ie)})};return pe(t,{onBeforeEnter(N){Ht(x,[N]),vt(N,i),vt(N,o)},onBeforeAppear(N){Ht(L,[N]),vt(N,a),vt(N,l)},onEnter:J(!1),onAppear:J(!0),onLeave(N,G){N._isLeaving=!0;const ue=()=>H(N,G);vt(N,u),vt(N,h),gd(),mo(()=>{!N._isLeaving||(jt(N,u),vt(N,g),go(O)||_o(N,r,B,ue))}),Ht(O,[N,ue])},onEnterCancelled(N){k(N,!1),Ht(M,[N])},onAppearCancelled(N){k(N,!0),Ht(Y,[N])},onLeaveCancelled(N){H(N),Ht(C,[N])}})}function dd(e){if(e==null)return null;if(fe(e))return[gs(e.enter),gs(e.leave)];{const t=gs(e);return[t,t]}}function gs(e){return Na(e)}function vt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[zn]||(e[zn]=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[zn];n&&(n.delete(t),n.size||(e[zn]=void 0))}function mo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let hd=0;function _o(e,t,n,r){const s=e._endId=++hd,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=pd(e,t);if(!o)return r();const l=o+"end";let f=0;const u=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++f>=a&&u()};setTimeout(()=>{f<a&&u()},c+1),e.addEventListener(l,h)}function pd(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${_t}Delay`),i=r(`${_t}Duration`),o=vo(s,i),c=r(`${Sn}Delay`),a=r(`${Sn}Duration`),l=vo(c,a);let f=null,u=0,h=0;t===_t?o>0&&(f=_t,u=o,h=i.length):t===Sn?l>0&&(f=Sn,u=l,h=a.length):(u=Math.max(o,l),f=u>0?o>l?_t:Sn:null,h=f?f===_t?i.length:a.length:0);const g=f===_t&&/\b(transform|all)(,|$)/.test(r(`${_t}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:g}}function vo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>yo(n)+yo(e[r])))}function yo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function gd(){return document.body.offsetHeight}function md(e,t,n){const r=e[zn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const bo=Symbol("_vod"),_d=Symbol("_vsh"),vd=Symbol(""),yd=/(^|;)\s*display\s*:/;function bd(e,t,n){const r=e.style,s=he(n);let i=!1;if(n&&!s){if(t)if(he(t))for(const o of t.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&yr(r,c,"")}else for(const o in t)n[o]==null&&yr(r,o,"");for(const o in n)o==="display"&&(i=!0),yr(r,o,n[o])}else if(s){if(t!==n){const o=r[vd];o&&(n+=";"+o),r.cssText=n,i=yd.test(n)}}else t&&e.removeAttribute("style");bo in e&&(e[bo]=i?r.display:"",e[_d]&&(r.display="none"))}const wo=/\s*!important$/;function yr(e,t,n){if(W(n))n.forEach(r=>yr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=wd(e,t);wo.test(n)?e.setProperty(Xt(r),n.replace(wo,""),"important"):e[r]=n}}const Eo=["Webkit","Moz","ms"],ms={};function wd(e,t){const n=ms[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return ms[t]=r;r=Hr(r);for(let s=0;s<Eo.length;s++){const i=Eo[s]+r;if(i in e)return ms[t]=i}return t}const Io="http://www.w3.org/1999/xlink";function So(e,t,n,r,s,i=hu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Io,t.slice(6,t.length)):e.setAttributeNS(Io,t,n):n==null||i&&!Da(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Dt(n)?String(n):n)}function To(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Kc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Da(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Ed(e,t,n,r){e.addEventListener(t,n,r)}function Id(e,t,n,r){e.removeEventListener(t,n,r)}const Co=Symbol("_vei");function Sd(e,t,n,r,s=null){const i=e[Co]||(e[Co]={}),o=i[t];if(r&&o)o.value=r;else{const[c,a]=Td(t);if(r){const l=i[t]=Rd(r,s);Ed(e,c,l,a)}else o&&(Id(e,c,o,a),i[t]=void 0)}}const Ao=/(?:Once|Passive|Capture)$/;function Td(e){let t;if(Ao.test(e)){t={};let r;for(;r=e.match(Ao);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let _s=0;const Cd=Promise.resolve(),Ad=()=>_s||(Cd.then(()=>_s=0),_s=Date.now());function Rd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Pd(r,n.value),t,5,[r])};return n.value=e,n.attached=Ad(),n}function Pd(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ro=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,kd=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?md(e,r,o):t==="style"?bd(e,n,r):Fr(t)?ci(t)||Sd(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Od(e,t,r,o))?(To(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&So(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!he(r))?To(e,Fe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),So(e,t,r,o))};function Od(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ro(t)&&K(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ro(t)&&he(n)?!1:t in e}const xd=["ctrl","shift","alt","meta"],Nd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>xd.some(n=>e[`${n}Key`]&&!t.includes(n))},nv=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const c=Nd[t[o]];if(c&&c(s,t))return}return e(s,...i)})},Dd=pe({patchProp:kd},cd);let Po;function Md(){return Po||(Po=Tf(Dd))}const Ld=(...e)=>{const t=Md().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Fd(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ud(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Ud(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Fd(e){return he(e)?document.querySelector(e):e}function Pi(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const Yt=bi(!1);let Gs;function Bd(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function $d(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const Gc="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Hd(e){const t=e.toLowerCase(),n=$d(t),r=Bd(t,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Yt.value===!0&&(Gs={is:{...s}}),Gc===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const ko=navigator.userAgent||navigator.vendor||window.opera,jd={has:{touch:!1,webStorage:!1},within:{iframe:!1}},et={userAgent:ko,is:Hd(ko),has:{touch:Gc},within:{iframe:window.self!==window.top}},Js={install(e){const{$q:t}=e;Yt.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,et),Yt.value=!1}),t.platform=bn(this)):t.platform=this}};{let e;Pi(et.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(Js,et),Yt.value===!0&&(Object.assign(Js,Gs,jd),Gs=null)}function rv(e){return Xn(Wr(e))}function sv(e){return Xn(e)}const Yr=(e,t)=>{const n=bn(e);for(const r in e)Pi(t,r,()=>n[r],s=>{n[r]=s});return t},Qr={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(Qr,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Kn(){}function iv(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function ov(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function av(e){e.stopPropagation()}function cv(e){e.cancelable!==!1&&e.preventDefault()}function lv(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function uv(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],Qr[s[3]])})}function fv(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],Qr[r[3]])}),e[n]=void 0)}function Vd(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,n!==!0&&e.apply(this,i)};r!==null?clearTimeout(r):n===!0&&e.apply(this,i),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const vs=["sm","md","lg","xl"],{passive:Oo}=Qr;var Wd=Yr({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Kn,setDebounce:Kn,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||et.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen!==void 0&&e.config.screen.bodyClasses===!0;this.__update=u=>{const[h,g]=i();if(g!==this.height&&(this.height=g),h!==this.width)this.width=h;else if(u!==!0)return;let _=this.sizes;this.gt.xs=h>=_.sm,this.gt.sm=h>=_.md,this.gt.md=h>=_.lg,this.gt.lg=h>=_.xl,this.lt.sm=h<_.sm,this.lt.md=h<_.md,this.lt.lg=h<_.lg,this.lt.xl=h<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let c,a={},l=16;this.setSizes=u=>{vs.forEach(h=>{u[h]!==void 0&&(a[h]=u[h])})},this.setDebounce=u=>{l=u};const f=()=>{const u=getComputedStyle(document.body);u.getPropertyValue("--q-size-sm")&&vs.forEach(h=>{this.sizes[h]=parseInt(u.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{vs.forEach(g=>{h[g]&&(this.sizes[g]=h[g])}),this.__update(!0)},this.setDebounce=h=>{c!==void 0&&r.removeEventListener("resize",c,Oo),c=h>0?Vd(this.__update,h):this.__update,r.addEventListener("resize",c,Oo)},this.setDebounce(l),Object.keys(a).length!==0?(this.setSizes(a),a=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Yt.value===!0?t.push(f):f()}});const ve=Yr({isActive:!1,mode:!1},{__media:void 0,set(e){ve.mode=e,e==="auto"?(ve.__media===void 0&&(ve.__media=window.matchMedia("(prefers-color-scheme: dark)"),ve.__updateMedia=()=>{ve.set("auto")},ve.__media.addListener(ve.__updateMedia)),e=ve.__media.matches):ve.__media!==void 0&&(ve.__media.removeListener(ve.__updateMedia),ve.__media=void 0),ve.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){ve.set(ve.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function zd(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let Jc=!1;function Kd(e){Jc=e.isComposing===!0}function qd(e){return Jc===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function dv(e,t){return qd(e)===!0?!1:[].concat(t).includes(e.keyCode)}function Yc(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function Gd({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=Yc(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function Jd(){const{is:e}=et,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=Yc(e);s!==void 0&&n.add(`platform-${s}`)}}et.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),et.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function Yd(e){for(const t in e)zd(t,e[t])}var Qd={install(e){if(this.__installed!==!0){if(Yt.value===!0)Jd();else{const{$q:t}=e;t.config.brand!==void 0&&Yd(t.config.brand);const n=Gd(et,t.config);document.body.classList.add.apply(document.body.classList,n)}et.is.ios===!0&&document.body.addEventListener("touchstart",Kn),window.addEventListener("keydown",Kd,!0)}}};const Qc=()=>!0;function Xd(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function Zd(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function eh(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return Qc;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(Xd).map(Zd)),()=>t.includes(window.location.hash)}var th={__history:[],add:Kn,remove:Kn,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=et.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Qc),this.__history.push(o)},this.remove=o=>{const c=this.__history.indexOf(o);c>=0&&this.__history.splice(c,1)};const s=eh(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},xo={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function No(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const St=Yr({__qLang:{}},{getLocale:No,set(e=xo,t){const n={...e,rtl:e.rtl===!0,getLocale:No};{if(n.set=St.set,St.__langConfig===void 0||St.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(St.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=St.__qLang,St.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||xo))}});var nh={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Pr=Yr({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=Pr.set,Object.assign(Pr.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Pi(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||nh))}}),rh="_q_",hv="_q_l_",pv="_q_pc_",gv="_q_fo_";function mv(){}const Do={};let Xc=!1;function sh(){Xc=!0}function Mo(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const Lo=[Js,Qd,ve,Wd,th,St,Pr];function Uo(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function ih(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(rh,n.$q),Uo(n,Lo),t.components!==void 0&&Object.values(t.components).forEach(r=>{Mo(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{Mo(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&Uo(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&Lo.includes(r)===!1)),Yt.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var oh=function(e,t={}){const n={version:"2.17.1"};Xc===!1?(t.config!==void 0&&Object.assign(Do,t.config),n.config={...Do},sh()):n.config=t.config||{},ih(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},ah={name:"Quasar",version:"2.17.1",install:oh,lang:St,iconSet:Pr};const ch=Wr({name:"App",__name:"App",setup(e){return(t,n)=>{const r=cf("router-view");return Ci(),Hc(r)}}});function _v(e){return e}var lh=!1;/*!
 * pinia v2.2.6
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const uh=Symbol();var Fo;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Fo||(Fo={}));function fh(){const e=gu(!0),t=e.run(()=>bi({}));let n=[],r=[];const s=Xn({install(i){s._a=i,i.provide(uh,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!lh?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}var ys=()=>fh();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof document!="undefined";function Zc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function dh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Zc(e.default)}const se=Object.assign;function bs(e,t){const n={};for(const r in t){const s=t[r];n[r]=qe(s)?s.map(e):e(s)}return n}const Dn=()=>{},qe=Array.isArray,el=/#/g,hh=/&/g,ph=/\//g,gh=/=/g,mh=/\?/g,tl=/\+/g,_h=/%5B/g,vh=/%5D/g,nl=/%5E/g,yh=/%60/g,rl=/%7B/g,bh=/%7C/g,sl=/%7D/g,wh=/%20/g;function ki(e){return encodeURI(""+e).replace(bh,"|").replace(_h,"[").replace(vh,"]")}function Eh(e){return ki(e).replace(rl,"{").replace(sl,"}").replace(nl,"^")}function Ys(e){return ki(e).replace(tl,"%2B").replace(wh,"+").replace(el,"%23").replace(hh,"%26").replace(yh,"`").replace(rl,"{").replace(sl,"}").replace(nl,"^")}function Ih(e){return Ys(e).replace(gh,"%3D")}function Sh(e){return ki(e).replace(el,"%23").replace(mh,"%3F")}function Th(e){return e==null?"":Sh(e).replace(ph,"%2F")}function qn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ch=/\/$/,Ah=e=>e.replace(Ch,"");function ws(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=Oh(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qn(o)}}function Rh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Bo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ph(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(t.matched[r],n.matched[s])&&il(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function il(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!kh(e[n],t[n]))return!1;return!0}function kh(e,t){return qe(e)?$o(e,t):qe(t)?$o(t,e):e===t}function $o(e,t){return qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Oh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Gn;(function(e){e.pop="pop",e.push="push"})(Gn||(Gn={}));var Mn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Mn||(Mn={}));function xh(e){if(!e)if(rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ah(e)}const Nh=/^[^#]+#/;function Dh(e,t){return e.replace(Nh,"#")+t}function Mh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Xr=()=>({left:window.scrollX,top:window.scrollY});function Lh(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Mh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ho(e,t){return(history.state?history.state.position-t:-1)+e}const Qs=new Map;function Uh(e,t){Qs.set(e,t)}function Fh(e){const t=Qs.get(e);return Qs.delete(e),t}let Bh=()=>location.protocol+"//"+location.host;function ol(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Bo(a,"")}return Bo(n,e)+r+s}function $h(e,t,n,r){let s=[],i=[],o=null;const c=({state:h})=>{const g=ol(e,location),_=n.value,w=t.value;let B=0;if(h){if(n.value=g,t.value=h,o&&o===_){o=null;return}B=w?h.position-w.position:0}else r(g);s.forEach(x=>{x(n.value,_,{delta:B,type:Gn.pop,direction:B?B>0?Mn.forward:Mn.back:Mn.unknown})})};function a(){o=n.value}function l(h){s.push(h);const g=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(se({},h.state,{scroll:Xr()}),"")}function u(){for(const h of i)h();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:u}}function jo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Xr():null}}function Hh(e){const{history:t,location:n}=window,r={value:ol(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const u=e.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+a:Bh()+e+a;try{t[f?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(a,l){const f=se({},t.state,jo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=se({},s.value,t.state,{forward:a,scroll:Xr()});i(f.current,f,!0);const u=se({},jo(r.value,a,null),{position:f.position+1},l);i(a,u,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function jh(e){e=xh(e);const t=Hh(e),n=$h(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=se({location:"",base:e,go:r,createHref:Dh.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Vh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),jh(e)}function Wh(e){return typeof e=="string"||e&&typeof e=="object"}function al(e){return typeof e=="string"||typeof e=="symbol"}const cl=Symbol("");var Vo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Vo||(Vo={}));function _n(e,t){return se(new Error,{type:e,[cl]:!0},t)}function it(e,t){return e instanceof Error&&cl in e&&(t==null||!!(e.type&t))}const Wo="[^/]+?",zh={sensitive:!1,strict:!1,start:!0,end:!0},Kh=/[.+*?^${}()[\]/\\]/g;function qh(e,t){const n=se({},zh,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const h=l[u];let g=40+(n.sensitive?.25:0);if(h.type===0)u||(s+="/"),s+=h.value.replace(Kh,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:w,optional:B,regexp:x}=h;i.push({name:_,repeatable:w,optional:B});const P=x||Wo;if(P!==Wo){g+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${_}" (${P}): `+O.message)}}let M=w?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;u||(M=B&&l.length<2?`(?:/${M})`:"/"+M),B&&(M+="?"),s+=M,g+=20,B&&(g+=-8),w&&(g+=-20),P===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),u={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",_=i[h-1];u[_.name]=g&&_.repeatable?g.split("/"):g}return u}function a(l){let f="",u=!1;for(const h of e){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:_,repeatable:w,optional:B}=g,x=_ in l?l[_]:"";if(qe(x)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const P=qe(x)?x.join("/"):x;if(!P)if(B)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);f+=P}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Gh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ll(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Gh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zo(r))return 1;if(zo(s))return-1}return s.length-r.length}function zo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Jh={type:0,value:""},Yh=/[a-zA-Z0-9_]/;function Qh(e){if(!e)return[[]];if(e==="/")return[[Jh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function u(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&u(),o()):a===":"?(u(),n=1):h();break;case 4:h(),n=r;break;case 1:a==="("?n=2:Yh.test(a)?h():(u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function Xh(e,t,n){const r=qh(Qh(e.path),n),s=se(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Zh(e,t){const n=[],r=new Map;t=Jo({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,g){const _=!g,w=qo(u);w.aliasOf=g&&g.record;const B=Jo(t,u),x=[w];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of O)x.push(qo(se({},w,{components:g?g.record.components:w.components,path:C,aliasOf:g?g.record:w})))}let P,M;for(const O of x){const{path:C}=O;if(h&&C[0]!=="/"){const L=h.record.path,V=L[L.length-1]==="/"?"":"/";O.path=h.record.path+(C&&V+C)}if(P=Xh(O,h,B),g?g.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),_&&u.name&&!Go(P)&&o(u.name)),ul(P)&&a(P),w.children){const L=w.children;for(let V=0;V<L.length;V++)i(L[V],P,g&&g.children[V])}g=g||P}return M?()=>{o(M)}:Dn}function o(u){if(al(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){const h=np(u,n);n.splice(h,0,u),u.record.name&&!Go(u)&&r.set(u.record.name,u)}function l(u,h){let g,_={},w,B;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw _n(1,{location:u});B=g.record.name,_=se(Ko(h.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Ko(u.params,g.keys.map(M=>M.name))),w=g.stringify(_)}else if(u.path!=null)w=u.path,g=n.find(M=>M.re.test(w)),g&&(_=g.parse(w),B=g.record.name);else{if(g=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw _n(1,{location:u,currentLocation:h});B=g.record.name,_=se({},h.params,u.params),w=g.stringify(_)}const x=[];let P=g;for(;P;)x.unshift(P.record),P=P.parent;return{name:B,path:w,params:_,matched:x,meta:tp(x)}}e.forEach(u=>i(u));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Ko(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ep(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ep(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Go(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function tp(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Jo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function np(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;ll(e,t[i])<0?r=i:n=i+1}const s=rp(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function rp(e){let t=e;for(;t=t.parent;)if(ul(t)&&ll(e,t)===0)return t}function ul({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function sp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(tl," "),o=i.indexOf("="),c=qn(o<0?i:i.slice(0,o)),a=o<0?null:qn(i.slice(o+1));if(c in t){let l=t[c];qe(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function Yo(e){let t="";for(let n in e){const r=e[n];if(n=Ih(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&Ys(i)):[r&&Ys(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ip(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const op=Symbol(""),Qo=Symbol(""),Zr=Symbol(""),Oi=Symbol(""),Xs=Symbol("");function Tn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=h=>{h===!1?a(_n(4,{from:n,to:t})):h instanceof Error?a(h):Wh(h)?a(_n(2,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),c())},f=i(()=>e.call(r&&r.instances[s],t,n,l));let u=Promise.resolve(f);e.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Es(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const c in o.components){let a=o.components[c];if(!(t!=="beforeRouteEnter"&&!o.instances[c]))if(Zc(a)){const f=(a.__vccOpts||a)[t];f&&i.push(Tt(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const u=dh(f)?f.default:f;o.mods[c]=f,o.components[c]=u;const g=(u.__vccOpts||u)[t];return g&&Tt(g,n,r,o,c,s)()}))}}return i}function Xo(e){const t=We(Zr),n=We(Oi),r=He(()=>{const a=cn(e.to);return t.resolve(a)}),s=He(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],u=n.matched;if(!f||!u.length)return-1;const h=u.findIndex(mn.bind(null,f));if(h>-1)return h;const g=Zo(a[l-2]);return l>1&&Zo(f)===g&&u[u.length-1].path!==g?u.findIndex(mn.bind(null,a[l-2])):h}),i=He(()=>s.value>-1&&up(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&il(n.params,r.value.params));function c(a={}){return lp(a)?t[cn(e.replace)?"replace":"push"](cn(e.to)).catch(Dn):Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const ap=Wr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xo,setup(e,{slots:t}){const n=bn(Xo(e)),{options:r}=We(Zr),s=He(()=>({[ea(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ea(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ri("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),cp=ap;function lp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function up(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ea=(e,t,n)=>e!=null?e:t!=null?t:n,fp=Wr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=We(Xs),s=He(()=>e.route||r.value),i=We(Qo,0),o=He(()=>{let l=cn(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),c=He(()=>s.value.matched[o.value]);mr(Qo,He(()=>o.value+1)),mr(op,c),mr(Xs,s);const a=bi();return _r(()=>[a.value,c.value,e.name],([l,f,u],[h,g,_])=>{f&&(f.instances[u]=l,g&&g!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!mn(f,g)||!h)&&(f.enterCallbacks[u]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,f=e.name,u=c.value,h=u&&u.components[f];if(!h)return ta(n.default,{Component:h,route:l});const g=u.props[f],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,B=Ri(h,se({},_,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return ta(n.default,{Component:B,route:l})||B}}});function ta(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const dp=fp;function hp(e){const t=Zh(e.routes,e),n=e.parseQuery||sp,r=e.stringifyQuery||Yo,s=e.history,i=Tn(),o=Tn(),c=Tn(),a=Mu(yt);let l=yt;rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=bs.bind(null,y=>""+y),u=bs.bind(null,Th),h=bs.bind(null,qn);function g(y,U){let R,F;return al(y)?(R=t.getRecordMatcher(y),F=U):F=y,t.addRoute(F,R)}function _(y){const U=t.getRecordMatcher(y);U&&t.removeRoute(U)}function w(){return t.getRoutes().map(y=>y.record)}function B(y){return!!t.getRecordMatcher(y)}function x(y,U){if(U=se({},U||a.value),typeof y=="string"){const p=ws(n,y,U.path),m=t.resolve({path:p.path},U),b=s.createHref(p.fullPath);return se(p,m,{params:h(m.params),hash:qn(p.hash),redirectedFrom:void 0,href:b})}let R;if(y.path!=null)R=se({},y,{path:ws(n,y.path,U.path).path});else{const p=se({},y.params);for(const m in p)p[m]==null&&delete p[m];R=se({},y,{params:u(p)}),U.params=u(U.params)}const F=t.resolve(R,U),te=y.hash||"";F.params=f(h(F.params));const de=Rh(r,se({},y,{hash:Eh(te),path:F.path})),d=s.createHref(de);return se({fullPath:de,hash:te,query:r===Yo?ip(y.query):y.query||{}},F,{redirectedFrom:void 0,href:d})}function P(y){return typeof y=="string"?ws(n,y,a.value.path):se({},y)}function M(y,U){if(l!==y)return _n(8,{from:U,to:y})}function O(y){return V(y)}function C(y){return O(se(P(y),{replace:!0}))}function L(y){const U=y.matched[y.matched.length-1];if(U&&U.redirect){const{redirect:R}=U;let F=typeof R=="function"?R(y):R;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),se({query:y.query,hash:y.hash,params:F.path!=null?{}:y.params},F)}}function V(y,U){const R=l=x(y),F=a.value,te=y.state,de=y.force,d=y.replace===!0,p=L(R);if(p)return V(se(P(p),{state:typeof p=="object"?se({},te,p.state):te,force:de,replace:d}),U||R);const m=R;m.redirectedFrom=U;let b;return!de&&Ph(r,F,R)&&(b=_n(16,{to:m,from:F}),Ge(F,F,!0,!1)),(b?Promise.resolve(b):H(m,F)).catch(v=>it(v)?it(v,2)?v:mt(v):ee(v,m,F)).then(v=>{if(v){if(it(v,2))return V(se({replace:d},P(v.to),{state:typeof v.to=="object"?se({},te,v.to.state):te,force:de}),U||m)}else v=N(m,F,!0,d,te);return J(m,F,v),v})}function Y(y,U){const R=M(y,U);return R?Promise.reject(R):Promise.resolve()}function k(y){const U=en.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(y):y()}function H(y,U){let R;const[F,te,de]=pp(y,U);R=Es(F.reverse(),"beforeRouteLeave",y,U);for(const p of F)p.leaveGuards.forEach(m=>{R.push(Tt(m,y,U))});const d=Y.bind(null,y,U);return R.push(d),Me(R).then(()=>{R=[];for(const p of i.list())R.push(Tt(p,y,U));return R.push(d),Me(R)}).then(()=>{R=Es(te,"beforeRouteUpdate",y,U);for(const p of te)p.updateGuards.forEach(m=>{R.push(Tt(m,y,U))});return R.push(d),Me(R)}).then(()=>{R=[];for(const p of de)if(p.beforeEnter)if(qe(p.beforeEnter))for(const m of p.beforeEnter)R.push(Tt(m,y,U));else R.push(Tt(p.beforeEnter,y,U));return R.push(d),Me(R)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),R=Es(de,"beforeRouteEnter",y,U,k),R.push(d),Me(R))).then(()=>{R=[];for(const p of o.list())R.push(Tt(p,y,U));return R.push(d),Me(R)}).catch(p=>it(p,8)?p:Promise.reject(p))}function J(y,U,R){c.list().forEach(F=>k(()=>F(y,U,R)))}function N(y,U,R,F,te){const de=M(y,U);if(de)return de;const d=U===yt,p=rn?history.state:{};R&&(F||d?s.replace(y.fullPath,se({scroll:d&&p&&p.scroll},te)):s.push(y.fullPath,te)),a.value=y,Ge(y,U,R,d),mt()}let G;function ue(){G||(G=s.listen((y,U,R)=>{if(!cr.listening)return;const F=x(y),te=L(F);if(te){V(se(te,{replace:!0}),F).catch(Dn);return}l=F;const de=a.value;rn&&Uh(Ho(de.fullPath,R.delta),Xr()),H(F,de).catch(d=>it(d,12)?d:it(d,2)?(V(d.to,F).then(p=>{it(p,20)&&!R.delta&&R.type===Gn.pop&&s.go(-1,!1)}).catch(Dn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ee(d,F,de))).then(d=>{d=d||N(F,de,!1),d&&(R.delta&&!it(d,8)?s.go(-R.delta,!1):R.type===Gn.pop&&it(d,20)&&s.go(-1,!1)),J(F,de,d)}).catch(Dn)}))}let me=Tn(),ie=Tn(),X;function ee(y,U,R){mt(y);const F=ie.list();return F.length?F.forEach(te=>te(y,U,R)):console.error(y),Promise.reject(y)}function rt(){return X&&a.value!==yt?Promise.resolve():new Promise((y,U)=>{me.add([y,U])})}function mt(y){return X||(X=!y,ue(),me.list().forEach(([U,R])=>y?R(y):U()),me.reset()),y}function Ge(y,U,R,F){const{scrollBehavior:te}=e;if(!rn||!te)return Promise.resolve();const de=!R&&Fh(Ho(y.fullPath,0))||(F||!R)&&history.state&&history.state.scroll||null;return rc().then(()=>te(y,U,de)).then(d=>d&&Lh(d)).catch(d=>ee(d,y,U))}const Ce=y=>s.go(y);let Zt;const en=new Set,cr={currentRoute:a,listening:!0,addRoute:g,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:w,resolve:x,options:e,push:O,replace:C,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:rt,install(y){const U=this;y.component("RouterLink",cp),y.component("RouterView",dp),y.config.globalProperties.$router=U,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(a)}),rn&&!Zt&&a.value===yt&&(Zt=!0,O(s.location).catch(te=>{}));const R={};for(const te in yt)Object.defineProperty(R,te,{get:()=>a.value[te],enumerable:!0});y.provide(Zr,U),y.provide(Oi,Xa(R)),y.provide(Xs,a);const F=y.unmount;en.add(y),y.unmount=function(){en.delete(y),en.size<1&&(l=yt,G&&G(),G=null,a.value=yt,Zt=!1,X=!1),F()}}};function Me(y){return y.reduce((U,R)=>U.then(()=>k(R)),Promise.resolve())}return cr}function pp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(l=>mn(l,c))?r.push(c):n.push(c));const a=e.matched[o];a&&(t.matched.find(l=>mn(l,a))||s.push(a))}return[n,r,s]}function vv(){return We(Zr)}function yv(e){return We(Oi)}/**
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
 */const fl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},gp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,f=i>>2,u=(i&3)<<4|c>>4;let h=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(h=64)),r.push(n[f],n[u],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const u=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||l==null||u==null)throw new mp;const h=i<<2|c>>4;if(r.push(h),l!==64){const g=c<<4&240|l>>2;if(r.push(g),u!==64){const _=l<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _p=function(e){const t=fl(e);return dl.encodeByteArray(t,!0)},kr=function(e){return _p(e).replace(/\./g,"")},hl=function(e){try{return dl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vp(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yp=()=>vp().__FIREBASE_DEFAULTS__,bp=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wp=()=>{if(typeof document=="undefined")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&hl(e[1]);return t&&JSON.parse(t)},es=()=>{try{return yp()||bp()||wp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pl=e=>{var t,n;return(n=(t=es())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},bv=e=>{const t=pl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},gl=()=>{var e;return(e=es())===null||e===void 0?void 0:e.config},ml=e=>{var t;return(t=es())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Ep{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function wv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[kr(JSON.stringify(n)),kr(JSON.stringify(o)),c].join(".")}/**
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
 */function Te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ip(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Sp(){var e;const t=(e=es())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tp(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Cp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ap(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rp(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ev(){return!Sp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pp(){try{return typeof indexedDB=="object"}catch{return!1}}function kp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const Op="FirebaseError";class Ut extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Op,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?xp(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,c,r)}}function xp(e,t){return e.replace(Np,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Np=/\{\$([^}]+)}/g;function Dp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Or(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(na(i)&&na(o)){if(!Or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function na(e){return e!==null&&typeof e=="object"}/**
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
 */function rr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mp(e,t){const n=new Lp(e,t);return n.subscribe.bind(n)}class Lp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Up(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Up(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Is(){}/**
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
 */function Ft(e){return e&&e._delegate?e._delegate:e}class vn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Fp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ep;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($p(t))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zt){return this.instances.has(t)}getOptions(t=zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zt){return this.component?this.component.multipleInstances?t:zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bp(e){return e===zt?void 0:e}function $p(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const jp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Vp=oe.INFO,Wp={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},zp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Wp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _l{constructor(t){this.name=t,this._logLevel=Vp,this._logHandler=zp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const Kp=(e,t)=>t.some(n=>e instanceof n);let ra,sa;function qp(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gp(){return sa||(sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vl=new WeakMap,Zs=new WeakMap,yl=new WeakMap,Ss=new WeakMap,xi=new WeakMap;function Jp(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ot(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&vl.set(n,e)}).catch(()=>{}),xi.set(t,e),t}function Yp(e){if(Zs.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Zs.set(e,t)}let ei={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Zs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qp(e){ei=e(ei)}function Xp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ts(this),t,...n);return yl.set(r,t.sort?t.sort():[t]),Ot(r)}:Gp().includes(e)?function(...t){return e.apply(Ts(this),t),Ot(vl.get(this))}:function(...t){return Ot(e.apply(Ts(this),t))}}function Zp(e){return typeof e=="function"?Xp(e):(e instanceof IDBTransaction&&Yp(e),Kp(e,qp())?new Proxy(e,ei):e)}function Ot(e){if(e instanceof IDBRequest)return Jp(e);if(Ss.has(e))return Ss.get(e);const t=Zp(e);return t!==e&&(Ss.set(e,t),xi.set(t,e)),t}const Ts=e=>xi.get(e);function eg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=Ot(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ot(o.result),a.oldVersion,a.newVersion,Ot(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const tg=["get","getKey","getAll","getAllKeys","count"],ng=["put","add","delete","clear"],Cs=new Map;function ia(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Cs.get(t))return Cs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ng.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tg.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Cs.set(t,i),i}Qp(e=>({...e,get:(t,n,r)=>ia(t,n)||e.get(t,n,r),has:(t,n)=>!!ia(t,n)||e.has(t,n)}));/**
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
 */class rg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ti="@firebase/app",oa="0.10.13";/**
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
 */const ht=new _l("@firebase/app"),ig="@firebase/app-compat",og="@firebase/analytics-compat",ag="@firebase/analytics",cg="@firebase/app-check-compat",lg="@firebase/app-check",ug="@firebase/auth",fg="@firebase/auth-compat",dg="@firebase/database",hg="@firebase/data-connect",pg="@firebase/database-compat",gg="@firebase/functions",mg="@firebase/functions-compat",_g="@firebase/installations",vg="@firebase/installations-compat",yg="@firebase/messaging",bg="@firebase/messaging-compat",wg="@firebase/performance",Eg="@firebase/performance-compat",Ig="@firebase/remote-config",Sg="@firebase/remote-config-compat",Tg="@firebase/storage",Cg="@firebase/storage-compat",Ag="@firebase/firestore",Rg="@firebase/vertexai-preview",Pg="@firebase/firestore-compat",kg="firebase",Og="10.14.1";/**
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
 */const ni="[DEFAULT]",xg={[ti]:"fire-core",[ig]:"fire-core-compat",[ag]:"fire-analytics",[og]:"fire-analytics-compat",[lg]:"fire-app-check",[cg]:"fire-app-check-compat",[ug]:"fire-auth",[fg]:"fire-auth-compat",[dg]:"fire-rtdb",[hg]:"fire-data-connect",[pg]:"fire-rtdb-compat",[gg]:"fire-fn",[mg]:"fire-fn-compat",[_g]:"fire-iid",[vg]:"fire-iid-compat",[yg]:"fire-fcm",[bg]:"fire-fcm-compat",[wg]:"fire-perf",[Eg]:"fire-perf-compat",[Ig]:"fire-rc",[Sg]:"fire-rc-compat",[Tg]:"fire-gcs",[Cg]:"fire-gcs-compat",[Ag]:"fire-fst",[Pg]:"fire-fst-compat",[Rg]:"fire-vertex","fire-js":"fire-js",[kg]:"fire-js-all"};/**
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
 */const xr=new Map,Ng=new Map,ri=new Map;function aa(e,t){try{e.container.addComponent(t)}catch(n){ht.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Jn(e){const t=e.name;if(ri.has(t))return ht.debug(`There were multiple attempts to register component ${t}.`),!1;ri.set(t,e);for(const n of xr.values())aa(n,e);for(const n of Ng.values())aa(n,e);return!0}function bl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function lt(e){return e.settings!==void 0}/**
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
 */const Dg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},xt=new nr("app","Firebase",Dg);/**
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
 */class Mg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=Og;function Lg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ni,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(n||(n=gl()),!n)throw xt.create("no-options");const i=xr.get(s);if(i){if(Or(n,i.options)&&Or(r,i.config))return i;throw xt.create("duplicate-app",{appName:s})}const o=new Hp(s);for(const a of ri.values())o.addComponent(a);const c=new Mg(n,r,o);return xr.set(s,c),c}function Ug(e=ni){const t=xr.get(e);if(!t&&e===ni&&gl())return Lg();if(!t)throw xt.create("no-app",{appName:e});return t}function Ln(e,t,n){var r;let s=(r=xg[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ht.warn(c.join(" "));return}Jn(new vn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Fg="firebase-heartbeat-database",Bg=1,Yn="firebase-heartbeat-store";let As=null;function wl(){return As||(As=eg(Fg,Bg,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Yn)}catch(n){console.warn(n)}}}}).catch(e=>{throw xt.create("idb-open",{originalErrorMessage:e.message})})),As}async function $g(e){try{const n=(await wl()).transaction(Yn),r=await n.objectStore(Yn).get(El(e));return await n.done,r}catch(t){if(t instanceof Ut)ht.warn(t.message);else{const n=xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ht.warn(n.message)}}}async function ca(e,t){try{const r=(await wl()).transaction(Yn,"readwrite");await r.objectStore(Yn).put(t,El(e)),await r.done}catch(n){if(n instanceof Ut)ht.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ht.warn(r.message)}}}function El(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Hg=1024,jg=30*24*60*60*1e3;class Vg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=la();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=jg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=la(),{heartbeatsToSend:r,unsentEntries:s}=Wg(this._heartbeatsCache.heartbeats),i=kr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ht.warn(n),""}}}function la(){return new Date().toISOString().substring(0,10)}function Wg(e,t=Hg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ua(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ua(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pp()?kp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $g(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ua(e){return kr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Kg(e){Jn(new vn("platform-logger",t=>new rg(t),"PRIVATE")),Jn(new vn("heartbeat",t=>new Vg(t),"PRIVATE")),Ln(ti,oa,e),Ln(ti,oa,"esm2017"),Ln("fire-js","")}Kg("");function Ni(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Il(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qg=Il,Sl=new nr("auth","Firebase",Il());/**
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
 */const Nr=new _l("@firebase/auth");function Gg(e,...t){Nr.logLevel<=oe.WARN&&Nr.warn(`Auth (${sr}): ${e}`,...t)}function br(e,...t){Nr.logLevel<=oe.ERROR&&Nr.error(`Auth (${sr}): ${e}`,...t)}/**
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
 */function nt(e,...t){throw Mi(e,...t)}function ze(e,...t){return Mi(e,...t)}function Di(e,t,n){const r=Object.assign(Object.assign({},qg()),{[t]:n});return new nr("auth","Firebase",r).create(t,{appName:e.name})}function Gt(e){return Di(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jg(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&nt(e,"argument-error"),Di(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Sl.create(e,...t)}function z(e,t,...n){if(!e)throw Mi(t,...n)}function ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw br(t),new Error(t)}function pt(e,t){e||ut(t)}/**
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
 */function si(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Yg(){return fa()==="http:"||fa()==="https:"}function fa(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Qg(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yg()||Cp()||"connection"in navigator)?navigator.onLine:!0}function Xg(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ir{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ip()||Ap()}get(){return Qg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Li(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Tl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Zg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const em=new ir(3e4,6e4);function Ui(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function wn(e,t,n,r,s={}){return Cl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=rr(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return Tp()||(l.referrerPolicy="no-referrer"),Tl.fetch()(Al(e,e.config.apiHost,n,c),l)})}async function Cl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zg),t);try{const s=new nm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw pr(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw pr(e,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Di(e,f,l);nt(e,f)}}catch(s){if(s instanceof Ut)throw s;nt(e,"network-request-failed",{message:String(s)})}}async function tm(e,t,n,r,s={}){const i=await wn(e,t,n,r,s);return"mfaPendingCredential"in i&&nt(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Al(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Li(e.config,s):`${e.config.apiScheme}://${s}`}class nm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),em.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function rm(e,t){return wn(e,"POST","/v1/accounts:delete",t)}async function Rl(e,t){return wn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Un(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sm(e,t=!1){const n=Ft(e),r=await n.getIdToken(t),s=Fi(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Un(Rs(s.auth_time)),issuedAtTime:Un(Rs(s.iat)),expirationTime:Un(Rs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Rs(e){return Number(e)*1e3}function Fi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const s=hl(n);return s?JSON.parse(s):(br("Failed to decode base64 JWT payload"),null)}catch(s){return br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function da(e){const t=Fi(e);return z(t,"internal-error"),z(typeof t.exp!="undefined","internal-error"),z(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Qn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ut&&im(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function im({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class om{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ii{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Qn(e,Rl(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Pl(i.providerUserInfo):[],c=cm(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ii(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(e,u)}async function am(e){const t=Ft(e);await Dr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function cm(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Pl(e){return e.map(t=>{var{providerId:n}=t,r=Ni(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lm(e,t){const n=await Cl(e,{},async()=>{const r=rr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Al(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Tl.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function um(e,t){return wn(e,"POST","/v2/accounts:revokeToken",Ui(e,t))}/**
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
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken!="undefined","internal-error"),z(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):da(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){z(t.length!==0,"internal-error");const n=da(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await lm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new dn;return r&&(z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function bt(e,t){z(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class ft{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Ni(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ii(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Qn(this,this.stsTokenManager.getToken(this.auth,t));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sm(this,t)}reload(){return am(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ft(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Dr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Gt(this.auth));const t=await this.getIdToken();return await Qn(this,rm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,a,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(c=n.tenantId)!==null&&c!==void 0?c:void 0,B=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:O,isAnonymous:C,providerData:L,stsTokenManager:V}=n;z(M&&V,t,"internal-error");const Y=dn.fromJSON(this.name,V);z(typeof M=="string",t,"internal-error"),bt(u,t.name),bt(h,t.name),z(typeof O=="boolean",t,"internal-error"),z(typeof C=="boolean",t,"internal-error"),bt(g,t.name),bt(_,t.name),bt(w,t.name),bt(B,t.name),bt(x,t.name),bt(P,t.name);const k=new ft({uid:M,auth:t,email:h,emailVerified:O,displayName:u,isAnonymous:C,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:Y,createdAt:x,lastLoginAt:P});return L&&Array.isArray(L)&&(k.providerData=L.map(H=>Object.assign({},H))),B&&(k._redirectEventId=B),k}static async _fromIdTokenResponse(t,n,r=!1){const s=new dn;s.updateFromServerResponse(n);const i=new ft({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Dr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Pl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new dn;c.updateFromIdToken(r);const a=new ft({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ii(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const ha=new Map;function dt(e){pt(e instanceof Function,"Expected a class definition");let t=ha.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ha.set(e,t),t)}/**
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
 */class kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}kl.type="NONE";const pa=kl;/**
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
 */function wr(e,t,n){return`firebase:${e}:${t}:${n}`}class hn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wr(this.userKey,s.apiKey,i),this.fullPersistenceKey=wr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ft._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new hn(dt(pa),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||dt(pa);const o=wr(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const u=ft._fromJSON(t,f);l!==i&&(c=u),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new hn(i,t,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hn(i,t,r))}}/**
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
 */function ga(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ol(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ll(t))return"Blackberry";if(Ul(t))return"Webos";if(xl(t))return"Safari";if((t.includes("chrome/")||Nl(t))&&!t.includes("edge/"))return"Chrome";if(Ml(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ol(e=Te()){return/firefox\//i.test(e)}function xl(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Nl(e=Te()){return/crios\//i.test(e)}function Dl(e=Te()){return/iemobile/i.test(e)}function Ml(e=Te()){return/android/i.test(e)}function Ll(e=Te()){return/blackberry/i.test(e)}function Ul(e=Te()){return/webos/i.test(e)}function Bi(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fm(e=Te()){var t;return Bi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function dm(){return Rp()&&document.documentMode===10}function Fl(e=Te()){return Bi(e)||Ml(e)||Ul(e)||Ll(e)||/windows phone/i.test(e)||Dl(e)}/**
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
 */function Bl(e,t=[]){let n;switch(e){case"Browser":n=ga(Te());break;case"Worker":n=`${ga(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${r}`}/**
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
 */class hm{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const a=t(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pm(e,t={}){return wn(e,"GET","/v2/passwordPolicy",Ui(e,t))}/**
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
 */const gm=6;class mm{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class _m{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ma(this),this.idTokenSubscription=new ma(this),this.beforeStateQueue=new hm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Rl(this,{idToken:t}),r=await ft._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Dr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Xg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(lt(this.app))return Promise.reject(Gt(this));const n=t?Ft(t):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return lt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await pm(this),n=new mm(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new nr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await um(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dt(t)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Gg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ts(e){return Ft(e)}class ma{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mp(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $i={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vm(e){$i=e}function ym(e){return $i.loadJS(e)}function bm(){return $i.gapiScript}function wm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Em(e,t){const n=bl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Or(i,t!=null?t:{}))return s;nt(s,"already-initialized")}return n.initialize({options:t})}function Im(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Sm(e,t,n){const r=ts(e);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=$l(t),{host:o,port:c}=Tm(t),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Cm()}function $l(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Tm(e){const t=$l(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_a(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_a(o)}}}function _a(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Cm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Hl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(t){return ut("not implemented")}_linkToIdToken(t,n){return ut("not implemented")}_getReauthenticationResolver(t){return ut("not implemented")}}/**
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
 */async function pn(e,t){return tm(e,"POST","/v1/accounts:signInWithIdp",Ui(e,t))}/**
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
 */const Am="http://localhost";class Qt extends Hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Qt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Ni(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return pn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,pn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,pn(t,n)}buildRequest(){const t={requestUri:Am,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=rr(n)}return t}}/**
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
 */class Hi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class or extends Hi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends or{constructor(){super("facebook.com")}static credential(t){return Qt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class At extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Qt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class Rt extends or{constructor(){super("github.com")}static credential(t){return Qt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Pt extends or{constructor(){super("twitter.com")}static credential(t,n){return Qt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */class yn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await ft._fromIdTokenResponse(t,r,s),o=va(r);return new yn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=va(r);return new yn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function va(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Mr extends Ut{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Mr(t,n,r,s)}}function jl(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(e,i,t,r):i})}async function Rm(e,t,n=!1){const r=await Qn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yn._forOperation(e,"link",r)}/**
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
 */async function Pm(e,t,n=!1){const{auth:r}=e;if(lt(r.app))return Promise.reject(Gt(r));const s="reauthenticate";try{const i=await Qn(e,jl(r,s,t,e),n);z(i.idToken,r,"internal-error");const o=Fi(i.idToken);z(o,r,"internal-error");const{sub:c}=o;return z(e.uid===c,r,"user-mismatch"),yn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),i}}/**
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
 */async function km(e,t,n=!1){if(lt(e.app))return Promise.reject(Gt(e));const r="signIn",s=await jl(e,r,t),i=await yn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function Om(e,t,n,r){return Ft(e).onIdTokenChanged(t,n,r)}function xm(e,t,n){return Ft(e).beforeAuthStateChanged(t,n)}function Iv(e,t,n,r){return Ft(e).onAuthStateChanged(t,n,r)}function Sv(e){return Ft(e).signOut()}const Lr="__sak";/**
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
 */class Vl{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lr,"1"),this.storage.removeItem(Lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nm=1e3,Dm=10;class Wl extends Vl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dm()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Dm):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Wl.type="LOCAL";const Mm=Wl;/**
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
 */class zl extends Vl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}zl.type="SESSION";const Kl=zl;/**
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
 */function Lm(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ns{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ns(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Lm(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
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
 */function ji(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Um{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ji("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function Fm(e){tt().location.href=e}/**
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
 */function ql(){return typeof tt().WorkerGlobalScope!="undefined"&&typeof tt().importScripts=="function"}async function Bm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $m(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Hm(){return ql()?self:null}/**
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
 */const Gl="firebaseLocalStorageDb",jm=1,Ur="firebaseLocalStorage",Jl="fbase_key";class ar{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(e,t){return e.transaction([Ur],t?"readwrite":"readonly").objectStore(Ur)}function Vm(){const e=indexedDB.deleteDatabase(Gl);return new ar(e).toPromise()}function oi(){const e=indexedDB.open(Gl,jm);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ur,{keyPath:Jl})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ur)?t(r):(r.close(),await Vm(),t(await oi()))})})}async function ya(e,t,n){const r=rs(e,!0).put({[Jl]:t,value:n});return new ar(r).toPromise()}async function Wm(e,t){const n=rs(e,!1).get(t),r=await new ar(n).toPromise();return r===void 0?null:r.value}function ba(e,t){const n=rs(e,!0).delete(t);return new ar(n).toPromise()}const zm=800,Km=3;class Yl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Km)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(Hm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Bm(),!this.activeServiceWorker)return;this.sender=new Um(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$m()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await oi();return await ya(t,Lr,"1"),await ba(t,Lr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ya(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Wm(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ba(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=rs(s,!1).getAll();return new ar(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yl.type="LOCAL";const qm=Yl;new ir(3e4,6e4);/**
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
 */function Ql(e,t){return t?dt(t):(z(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Vi extends Hl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return pn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return pn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return pn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Gm(e){return km(e.auth,new Vi(e),e.bypassAuthState)}function Jm(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),Pm(n,new Vi(e),e.bypassAuthState)}async function Ym(e){const{auth:t,user:n}=e;return z(n,t,"internal-error"),Rm(n,new Vi(e),e.bypassAuthState)}/**
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
 */class Xl{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Gm;case"linkViaPopup":case"linkViaRedirect":return Ym;case"reauthViaPopup":case"reauthViaRedirect":return Jm;default:nt(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qm=new ir(2e3,1e4);async function Tv(e,t,n){if(lt(e.app))return Promise.reject(ze(e,"operation-not-supported-in-this-environment"));const r=ts(e);Jg(e,t,Hi);const s=Ql(r,n);return new Kt(r,"signInViaPopup",t,s).executeNotNull()}class Kt extends Xl{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Qm.get())};t()}}Kt.currentPopupAction=null;/**
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
 */const Xm="pendingRedirect",Er=new Map;class Zm extends Xl{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Er.get(this.auth._key());if(!t){try{const r=await e_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Er.set(this.auth._key(),t)}return this.bypassAuthState||Er.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e_(e,t){const n=r_(t),r=n_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function t_(e,t){Er.set(e._key(),t)}function n_(e){return dt(e._redirectPersistence)}function r_(e){return wr(Xm,e.config.apiKey,e.name)}async function s_(e,t,n=!1){if(lt(e.app))return Promise.reject(Gt(e));const r=ts(e),s=Ql(r,t),o=await new Zm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const i_=10*60*1e3;class o_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!a_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Zl(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=i_&&this.cachedEventUids.clear(),this.cachedEventUids.has(wa(t))}saveEventToCache(t){this.cachedEventUids.add(wa(t)),this.lastProcessedEventTime=Date.now()}}function wa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Zl({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function a_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zl(e);default:return!1}}/**
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
 */async function c_(e,t={}){return wn(e,"GET","/v1/projects",t)}/**
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
 */const l_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u_=/^https?/;async function f_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await c_(e);for(const n of t)try{if(d_(n))return}catch{}nt(e,"unauthorized-domain")}function d_(e){const t=si(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!u_.test(n))return!1;if(l_.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const h_=new ir(3e4,6e4);function Ea(){const e=tt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function p_(e){return new Promise((t,n)=>{var r,s,i;function o(){Ea(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ea(),n(ze(e,"network-request-failed"))},timeout:h_.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const c=wm("iframefcb");return tt()[c]=()=>{gapi.load?o():n(ze(e,"network-request-failed"))},ym(`${bm()}?onload=${c}`).catch(a=>n(a))}}).catch(t=>{throw Ir=null,t})}let Ir=null;function g_(e){return Ir=Ir||p_(e),Ir}/**
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
 */const m_=new ir(5e3,15e3),__="__/auth/iframe",v_="emulator/auth/iframe",y_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w_(e){const t=e.config;z(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Li(t,v_):`https://${e.config.authDomain}/${__}`,r={apiKey:t.apiKey,appName:e.name,v:sr},s=b_.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${rr(r).slice(1)}`}async function E_(e){const t=await g_(e),n=tt().gapi;return z(n,e,"internal-error"),t.open({where:document.body,url:w_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(e,"network-request-failed"),c=tt().setTimeout(()=>{i(o)},m_.get());function a(){tt().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const I_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S_=500,T_=600,C_="_blank",A_="http://localhost";class Ia{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function R_(e,t,n,r=S_,s=T_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},I_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(c=Nl(l)?C_:n),Ol(l)&&(t=t||A_,a.scrollbars="yes");const f=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(fm(l)&&c!=="_self")return P_(t||"",c),new Ia(null);const u=window.open(t||"",c,f);z(u,e,"popup-blocked");try{u.focus()}catch{}return new Ia(u)}function P_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const k_="__/auth/handler",O_="emulator/auth/handler",x_=encodeURIComponent("fac");async function Sa(e,t,n,r,s,i){z(e.config.authDomain,e,"auth-domain-config-required"),z(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:sr,eventId:s};if(t instanceof Hi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Dp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(t instanceof or){const f=t.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await e._getAppCheckToken(),l=a?`#${x_}=${encodeURIComponent(a)}`:"";return`${N_(e)}?${rr(c).slice(1)}${l}`}function N_({config:e}){return e.emulator?Li(e,O_):`https://${e.authDomain}/${k_}`}/**
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
 */const Ps="webStorageSupport";class D_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kl,this._completeRedirectFn=s_,this._overrideRedirectResult=t_}async _openPopup(t,n,r,s){var i;pt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Sa(t,n,r,si(),s);return R_(t,o,ji())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Sa(t,n,r,si(),s);return Fm(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await E_(t),r=new o_(t);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ps,{type:Ps},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ps];o!==void 0&&n(!!o),nt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fl()||xl()||Bi()}}const M_=D_;var Ta="@firebase/auth",Ca="1.7.9";/**
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
 */class L_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function U_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F_(e){Jn(new vn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bl(e)},l=new _m(r,s,i,a);return Im(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Jn(new vn("auth-internal",t=>{const n=ts(t.getProvider("auth").getImmediate());return(r=>new L_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Ta,Ca,U_(e)),Ln(Ta,Ca,"esm2017")}/**
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
 */const B_=5*60,$_=ml("authIdTokenMaxAge")||B_;let Aa=null;const H_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$_)return;const s=n==null?void 0:n.token;Aa!==s&&(Aa=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function j_(e=Ug()){const t=bl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Em(e,{popupRedirectResolver:M_,persistence:[qm,Mm,Kl]}),r=ml("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=H_(i.toString());xm(n,o,()=>o(n.currentUser)),Om(n,c=>o(c))}}const s=pl("auth");return s&&Sm(n,`http://${s}`),n}function V_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}vm({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",V_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});F_("Browser");const W_=[{path:"/",component:()=>Vt(()=>import("./LandingPage.a3d27b31.js"),["assets/LandingPage.a3d27b31.js","assets/QCard.c4d0a603.js","assets/QBtn.02cef3e0.js","assets/auth.b6bd1098.js","assets/firebase.21bf6f1f.js"])},{path:"/chats",component:()=>Vt(()=>import("./MainLayout.4f80aedc.js"),["assets/MainLayout.4f80aedc.js","assets/QLayout.9a18bef6.js","assets/QBtn.02cef3e0.js","assets/scroll.82d444d4.js","assets/QAvatar.ff360a4e.js","assets/auth.b6bd1098.js","assets/firebase.21bf6f1f.js"]),meta:{requiresAuth:!0},children:[{path:"",component:()=>Vt(()=>import("./ChatsPage.795928bf.js"),["assets/ChatsPage.795928bf.js","assets/QBtn.02cef3e0.js","assets/firebase.21bf6f1f.js","assets/QAvatar.ff360a4e.js","assets/auth.b6bd1098.js","assets/QInput.b04191e0.js","assets/OverlappingAvatars.f5dca592.js","assets/OverlappingAvatars.19edd09d.css","assets/room.65373b80.js","assets/QCard.c4d0a603.js","assets/scroll.82d444d4.js"])}]},{path:"/chat",component:()=>Vt(()=>import("./ChatLayout.d89c8187.js"),["assets/ChatLayout.d89c8187.js","assets/QBtn.02cef3e0.js","assets/QAvatar.ff360a4e.js","assets/auth.b6bd1098.js","assets/firebase.21bf6f1f.js","assets/QLayout.9a18bef6.js","assets/scroll.82d444d4.js","assets/room.65373b80.js","assets/OverlappingAvatars.f5dca592.js","assets/OverlappingAvatars.19edd09d.css"]),meta:{requiresAuth:!0},children:[{path:":id",component:()=>Vt(()=>import("./ChatPage.d1759d3b.js"),["assets/ChatPage.d1759d3b.js","assets/QAvatar.ff360a4e.js","assets/auth.b6bd1098.js","assets/firebase.21bf6f1f.js","assets/QBtn.02cef3e0.js","assets/QInput.b04191e0.js","assets/room.65373b80.js"])}]},{path:"/:catchAll(.*)*",component:()=>Vt(()=>import("./ErrorNotFound.9d9714e5.js"),["assets/ErrorNotFound.9d9714e5.js","assets/QBtn.02cef3e0.js"])}];var ks=function(){const t=hp({scrollBehavior:()=>({left:0,top:0}),routes:W_,history:Vh("/chat-app/")});return t.beforeEach((n,r,s)=>{const i=j_();n.matched.some(c=>c.meta.requiresAuth)&&!i.currentUser?s("/"):n.path==="/"&&i.currentUser?s("/chats"):s()}),t};async function z_(e,t){const n=e(ch);n.use(ah,t);const r=typeof ys=="function"?await ys({}):ys;n.use(r);const s=Xn(typeof ks=="function"?await ks({store:r}):ks);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}var K_={config:{}};const q_="/chat-app/";async function G_({app:e,router:t,store:n},r){let s=!1;const i=a=>{try{return t.resolve(a).href}catch{}return Object(a)===a?null:a},o=a=>{if(s=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const l=i(a);l!==null&&(window.location.href=l,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let a=0;s===!1&&a<r.length;a++)try{await r[a]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:c,publicPath:q_})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(e.use(t),e.mount("#q-app"))}z_(Ld,K_).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([Vt(()=>import("./firebase.21bf6f1f.js").then(function(r){return r.n}),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");G_(e,s)})});export{ev as $,He as A,Xf as B,vn as C,Iv as D,Sv as E,Ut as F,At as G,J_ as H,sv as I,dv as J,uv as K,oe as L,fv as M,av as N,iv as O,yc as P,lv as Q,cv as R,sr as S,tv as T,Qr as U,cf as V,Z_ as W,Vc as X,pu as Y,Xe as Z,Jn as _,Ug as a,Yt as a0,Kn as a1,rc as a2,We as a3,mv as a4,_r as a5,hv as a6,mr as a7,pv as a8,bn as a9,bc as aa,Q_ as ab,th as ac,Xu as ad,Do as ae,Pi as af,Y_ as ag,et as ah,ov as ai,Z as aj,X_ as ak,tf as al,gv as am,Vd as an,Qu as ao,qd as ap,di as aq,yv as ar,nv as as,bl as b,bv as c,wv as d,_l as e,Or as f,Ft as g,Te as h,Ev as i,_v as j,Lg as k,rv as l,Ri as m,Wr as n,Ci as o,Hc as p,j_ as q,Ln as r,Tv as s,bi as t,vv as u,vc as v,Wu as w,ke as x,qf as y,cn as z};
