import{a as de,b as fe}from"./auth.3820e33c.js";import{n as Re,o as Ae,d as Fe,h as G,c as ve,p as Ve}from"./QBtn.1106fff4.js";import{m as ce,t as I,A as g,n as x,J as Ee,Q as we,B as Y,X as _e,v as ae,Y as N,ai as Be,V as $e,P as oe,aj as Te,ak as Ie,al as Me,aa as J,am as Oe,an as Pe,R as X,T as Le,ao as De,ac as je,N as me}from"./index.b7c3ad49.js";import{a as qe,r as Ke}from"./room.b814678f.js";var yt=ce({name:"QItem",props:{...de,...Re,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:r}){const{proxy:{$q:u}}=Y(),f=fe(e,u),{hasLink:d,linkAttrs:c,linkClass:C,linkTag:B,navigateOnClick:M}=Ae(),k=I(null),v=I(null),H=g(()=>e.clickable===!0||d.value===!0||e.tag==="label"),A=g(()=>e.disable!==!0&&H.value===!0),L=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(f.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?C.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(A.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),D=g(()=>{if(e.insetLevel===void 0)return null;const q=u.lang.rtl===!0?"Right":"Left";return{["padding"+q]:16+e.insetLevel*56+"px"}});function O(q){A.value===!0&&(v.value!==null&&(q.qKeyEvent!==!0&&document.activeElement===k.value?v.value.focus():document.activeElement===v.value&&k.value.focus()),M(q))}function z(q){if(A.value===!0&&Ee(q,[13,32])===!0){we(q),q.qKeyEvent=!0;const j=new MouseEvent("click",q);j.qKeyEvent=!0,k.value.dispatchEvent(j)}r("keyup",q)}function V(){const q=Fe(t.default,[]);return A.value===!0&&q.unshift(x("div",{class:"q-focus-helper",tabindex:-1,ref:v})),q}return()=>{const q={ref:k,class:L.value,style:D.value,role:"listitem",onClick:O,onKeyup:z};return A.value===!0?(q.tabindex=e.tabindex||"0",Object.assign(q,c.value)):H.value===!0&&(q["aria-disabled"]="true"),x(B.value,q,V())}}});const Ne=["ul","ol"];var kt=ce({name:"QList",props:{...de,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const r=Y(),u=fe(e,r.proxy.$q),f=g(()=>Ne.includes(e.tag)?null:"list"),d=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>x(e.tag,{class:d.value,role:f.value},G(t.default))}});let re,ee=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const ze=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let u=t;u>0;u--)r.push(Math.floor(Math.random()*256));return r}})(),ge=4096;function ie(){(re===void 0||ee+16>ge)&&(ee=0,re=ze(ge));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}function Ze(e){return e==null?null:e}function he(e,t){return e==null?t===!0?`f_${ie()}`:null:e}function Ue({getValue:e,required:t=!0}={}){if(_e.value===!0){const r=e!==void 0?I(Ze(e())):I(null);return t===!0&&r.value===null&&ae(()=>{r.value=`f_${ie()}`}),e!==void 0&&N(e,u=>{r.value=he(u,t)}),r}return e!==void 0?g(()=>he(e(),t)):I(`f_${ie()}`)}const be=/^on[A-Z]/;function He(){const{attrs:e,vnode:t}=Y(),r={listeners:I({}),attributes:I({})};function u(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&be.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)be.test(c)===!0&&(d[c]=t.props[c]);r.attributes.value=f,r.listeners.value=d}return Be(u),u(),r}function Qe({validate:e,resetValidation:t,requiresQForm:r}){const u=$e(Te,!1);if(u!==!1){const{props:f,proxy:d}=Y();Object.assign(d,{validate:e,resetValidation:t}),N(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),u.unbindComponent(d)):u.bindComponent(d)}),ae(()=>{f.disable!==!0&&u.bindComponent(d)}),oe(()=>{f.disable!==!0&&u.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const ye=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ke=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,pe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,te=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,le=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ye.test(e),hexaColor:e=>ke.test(e),hexOrHexaColor:e=>pe.test(e),rgbColor:e=>te.test(e),rgbaColor:e=>le.test(e),rgbOrRgbaColor:e=>te.test(e)||le.test(e),hexOrRgbColor:e=>ye.test(e)||te.test(e),hexaOrRgbaColor:e=>ke.test(e)||le.test(e),anyColor:e=>pe.test(e)||te.test(e)||le.test(e)},Ye=[!0,!1,"ondemand"],Je={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Ye.includes(e)}};function We(e,t){const{props:r,proxy:u}=Y(),f=I(!1),d=I(null),c=I(!1);Qe({validate:D,resetValidation:L});let C=0,B;const M=g(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),k=g(()=>r.disable!==!0&&M.value===!0&&t.value===!1),v=g(()=>r.error===!0||f.value===!0),H=g(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);N(()=>r.modelValue,()=>{c.value=!0,k.value===!0&&r.lazyRules===!1&&O()});function A(){r.lazyRules!=="ondemand"&&k.value===!0&&c.value===!0&&O()}N(()=>r.reactiveRules,z=>{z===!0?B===void 0&&(B=N(()=>r.rules,A,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),N(()=>r.lazyRules,A),N(e,z=>{z===!0?c.value=!0:k.value===!0&&r.lazyRules!=="ondemand"&&O()});function L(){C++,t.value=!1,c.value=!1,f.value=!1,d.value=null,O.cancel()}function D(z=r.modelValue){if(r.disable===!0||M.value===!1)return!0;const V=++C,q=t.value!==!0?()=>{c.value=!0}:()=>{},j=(R,S)=>{R===!0&&q(),f.value=R,d.value=S||null,t.value=!1},Z=[];for(let R=0;R<r.rules.length;R++){const S=r.rules[R];let T;if(typeof S=="function"?T=S(z,ue):typeof S=="string"&&ue[S]!==void 0&&(T=ue[S](z)),T===!1||typeof T=="string")return j(!0,T),!1;T!==!0&&T!==void 0&&Z.push(T)}return Z.length===0?(j(!1),!0):(t.value=!0,Promise.all(Z).then(R=>{if(R===void 0||Array.isArray(R)===!1||R.length===0)return V===C&&j(!1),!0;const S=R.find(T=>T===!1||typeof T=="string");return V===C&&j(S!==void 0,S),S===void 0},R=>(V===C&&(console.error(R),j(!0)),!1)))}const O=Ie(D,0);return oe(()=>{B!==void 0&&B(),O.cancel()}),Object.assign(u,{resetValidation:L,validate:D}),Me(u,"hasError",()=>v.value),{isDirtyModel:c,hasRules:M,hasError:v,errorMessage:H,validate:D,resetValidation:L}}function se(e){return e!=null&&(""+e).length!==0}const Xe={...de,...Je,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Ge={...Xe,maxlength:[Number,String]},et=["update:modelValue","clear","focus","blur"];function tt({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:u,proxy:f}=Y(),d=fe(u,f.$q),c=Ue({required:e,getValue:()=>u.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?g(()=>u.tag):{value:"label"},isDark:d,editable:g(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:He(),targetUid:c,rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function lt(e){const{props:t,emit:r,slots:u,attrs:f,proxy:d}=Y(),{$q:c}=d;let C=null;e.hasValue===void 0&&(e.hasValue=g(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=i=>{r("update:modelValue",i)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:n,focus:S}),e.computedCounter===void 0&&(e.computedCounter=g(()=>{if(t.counter!==!1){const i=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return i+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:B,hasRules:M,hasError:k,errorMessage:v,resetValidation:H}=We(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?g(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):g(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),L=g(()=>t.bottomSlots===!0||t.hint!==void 0||M.value===!0||t.counter===!0||t.error!==null),D=g(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=g(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(k.value===!0?" q-field--error":"")+(k.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&L.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=g(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(k.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=g(()=>t.labelSlot===!0||t.label!==void 0),q=g(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&k.value!==!0?` text-${t.labelColor}`:"")),j=g(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:t.modelValue,emitValue:e.emitValue})),Z=g(()=>{const i={};return e.targetUid.value&&(i.for=e.targetUid.value),t.disable===!0&&(i["aria-disabled"]="true"),i});function R(){const i=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(i===null||i.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==i&&m.focus({preventScroll:!0}))}function S(){qe(R)}function T(){Ke(R);const i=document.activeElement;i!==null&&e.rootRef.value.contains(i)&&i.blur()}function a(i){C!==null&&(clearTimeout(C),C=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",i))}function n(i,m){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",i)),m!==void 0&&m())})}function s(i){we(i),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),J(()=>{const m=B.value;H(),B.value=m})}function o(i){[13,32].includes(i.keyCode)&&s(i)}function y(){const i=[];return u.prepend!==void 0&&i.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},u.prepend())),i.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},h())),k.value===!0&&t.noErrorIcon===!1&&i.push(b("error",[x(ve,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?i.push(b("inner-loading-append",u.loading!==void 0?u.loading():[x(Ve,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&i.push(b("inner-clearable-append",[x(ve,{class:"q-field__focusable-action",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":c.lang.label.clear,onKeyup:o,onClick:s})])),u.append!==void 0&&i.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},u.append())),e.getInnerAppend!==void 0&&i.push(b("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&i.push(e.getControlChild()),i}function h(){const i=[];return t.prefix!==void 0&&t.prefix!==null&&i.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&i.push(e.getShadowControl()),e.getControl!==void 0?i.push(e.getControl()):u.rawControl!==void 0?i.push(u.rawControl()):u.control!==void 0&&i.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(j.value))),V.value===!0&&i.push(x("div",{class:q.value},G(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&i.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),i.concat(G(u.default))}function F(){let i,m;k.value===!0?v.value!==null?(i=[x("div",{role:"alert"},v.value)],m=`q--slot-error-${v.value}`):(i=G(u.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(i=[x("div",t.hint)],m=`q--slot-hint-${t.hint}`):(i=G(u.hint),m="q--slot-hint"));const w=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&w===!1&&i===void 0)return;const E=x("div",{key:m,class:"q-field__messages col"},i);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?E:x(Le,{name:"q-transition--field-message"},()=>E),w===!0?x("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function b(i,m){return m===null?null:x("div",{key:i,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}let p=!1;return Oe(()=>{p=!0}),Pe(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ae(()=>{d.focus()}),oe(()=>{C!==null&&clearTimeout(C)}),Object.assign(d,{focus:S,blur:T}),function(){const m=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...Z.value}:Z.value;return x(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...m},[u.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},u.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},y()),L.value===!0?F():null]),u.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},u.after()):null])}}const xe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ne={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Se=Object.keys(ne);Se.forEach(e=>{ne[e].regex=new RegExp(ne[e].pattern)});const nt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Se.join("")+"])|(.)","g"),Ce=/[.*+?^${}()|[\]\\]/g,$=String.fromCharCode(1),at={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ot(e,t,r,u){let f,d,c,C,B,M;const k=I(null),v=I(A());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,D),N(()=>e.mask,a=>{if(a!==void 0)O(v.value,!0);else{const n=S(v.value);D(),e.modelValue!==n&&t("update:modelValue",n)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{k.value===!0&&O(v.value,!0)}),N(()=>e.unmaskedValue,()=>{k.value===!0&&O(v.value)});function A(){if(D(),k.value===!0){const a=Z(S(e.modelValue));return e.fillMask!==!1?T(a):a}return e.modelValue}function L(a){if(a<f.length)return f.slice(-a);let n="",s=f;const o=s.indexOf($);if(o!==-1){for(let y=a-s.length;y>0;y--)n+=$;s=s.slice(0,o)+n+s.slice(o)}return s}function D(){if(k.value=e.mask!==void 0&&e.mask.length!==0&&H(),k.value===!1){C=void 0,f="",d="";return}const a=xe[e.mask]===void 0?e.mask:xe[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=n.replace(Ce,"\\$&"),o=[],y=[],h=[];let F=e.reverseFillMask===!0,b="",p="";a.replace(nt,(E,l,_,Q,U)=>{if(Q!==void 0){const K=ne[Q];h.push(K),p=K.negate,F===!0&&(y.push("(?:"+p+"+)?("+K.pattern+"+)?(?:"+p+"+)?("+K.pattern+"+)?"),F=!1),y.push("(?:"+p+"+)?("+K.pattern+")?")}else if(_!==void 0)b="\\"+(_==="\\"?"":_),h.push(_),o.push("([^"+b+"]+)?"+b+"?");else{const K=l!==void 0?l:U;b=K==="\\"?"\\\\\\\\":K.replace(Ce,"\\\\$&"),h.push(K),o.push("([^"+b+"]+)?"+b+"?")}});const i=new RegExp("^"+o.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),m=y.length-1,w=y.map((E,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+E):l===m?new RegExp("^"+E+"("+(p===""?".":p)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+E));c=h,C=E=>{const l=i.exec(e.reverseFillMask===!0?E:E.slice(0,h.length+1));l!==null&&(E=l.slice(1).join(""));const _=[],Q=w.length;for(let U=0,K=E;U<Q;U++){const W=w[U].exec(K);if(W===null)break;K=K.slice(W.shift().length),_.push(...W)}return _.length!==0?_.join(""):E},f=h.map(E=>typeof E=="string"?E:$).join(""),d=f.split($).join(n)}function O(a,n,s){const o=u.value,y=o.selectionEnd,h=o.value.length-y,F=S(a);n===!0&&D();const b=Z(F),p=e.fillMask!==!1?T(b):b,i=v.value!==p;o.value!==p&&(o.value=p),i===!0&&(v.value=p),document.activeElement===o&&J(()=>{if(p===d){const w=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(w,w,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const w=o.selectionEnd;let E=y-1;for(let l=B;l<=E&&l<w;l++)f[l]!==$&&E++;V.right(o,E);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const w=e.reverseFillMask===!0?y===0?p.length>b.length?1:0:Math.max(0,p.length-(p===d?0:Math.min(b.length,h)+1))+1:y;o.setSelectionRange(w,w,"forward");return}if(e.reverseFillMask===!0)if(i===!0){const w=Math.max(0,p.length-(p===d?0:Math.min(b.length,h+1)));w===1&&y===1?o.setSelectionRange(w,w,"forward"):V.rightReverse(o,w)}else{const w=p.length-h;o.setSelectionRange(w,w,"backward")}else if(i===!0){const w=Math.max(0,f.indexOf($),Math.min(b.length,y)-1);V.right(o,w)}else{const w=y-1;V.right(o,w)}});const m=e.unmaskedValue===!0?S(p):p;String(e.modelValue)!==m&&(e.modelValue!==null||m!=="")&&r(m,!0)}function z(a,n,s){const o=Z(S(a.value));n=Math.max(0,f.indexOf($),Math.min(o.length,n)),B=n,a.setSelectionRange(n,s,"forward")}const V={left(a,n){const s=f.slice(n-1).indexOf($)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(f[o]===$){n=o,s===!0&&n++;break}if(o<0&&f[n]!==void 0&&f[n]!==$)return V.right(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},right(a,n){const s=a.value.length;let o=Math.min(s,n+1);for(;o<=s;o++)if(f[o]===$){n=o;break}else f[o-1]===$&&(n=o);if(o>s&&f[n-1]!==void 0&&f[n-1]!==$)return V.left(a,s);a.setSelectionRange(n,n,"forward")},leftReverse(a,n){const s=L(a.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(s[o-1]===$){n=o;break}else if(s[o]===$&&(n=o,o===0))break;if(o<0&&s[n]!==void 0&&s[n]!==$)return V.rightReverse(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},rightReverse(a,n){const s=a.value.length,o=L(s),y=o.slice(0,n+1).indexOf($)===-1;let h=Math.min(s,n+1);for(;h<=s;h++)if(o[h-1]===$){n=h,n>0&&y===!0&&n--;break}if(h>s&&o[n-1]!==void 0&&o[n-1]!==$)return V.leftReverse(a,s);a.setSelectionRange(n,n,"forward")}};function q(a){t("click",a),M=void 0}function j(a){if(t("keydown",a),De(a)===!0||a.altKey===!0)return;const n=u.value,s=n.selectionStart,o=n.selectionEnd;if(a.shiftKey||(M=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&M===void 0&&(M=n.selectionDirection==="forward"?s:o);const y=V[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),y(n,M===s?o:s),a.shiftKey){const h=n.selectionStart;n.setSelectionRange(Math.min(M,h),Math.max(M,h),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===o?(V.left(n,s),n.setSelectionRange(n.selectionStart,o,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===o&&(V.rightReverse(n,o),n.setSelectionRange(s,n.selectionEnd,"forward"))}function Z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return R(a);const n=c;let s=0,o="";for(let y=0;y<n.length;y++){const h=a[s],F=n[y];if(typeof F=="string")o+=F,h===F&&s++;else if(h!==void 0&&F.regex.test(h))o+=F.transform!==void 0?F.transform(h):h,s++;else return o}return o}function R(a){const n=c,s=f.indexOf($);let o=a.length-1,y="";for(let h=n.length-1;h>=0&&o!==-1;h--){const F=n[h];let b=a[o];if(typeof F=="string")y=F+y,b===F&&o--;else if(b!==void 0&&F.regex.test(b))do y=(F.transform!==void 0?F.transform(b):b)+y,o--,b=a[o];while(s===h&&b!==void 0&&F.regex.test(b));else return y}return y}function S(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function T(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:v,hasMask:k,moveCursorForPaste:z,updateMaskValue:O,onMaskedKeydown:j,onMaskedClick:q}}const rt={name:String};function pt(e={}){return(t,r,u)=>{t[r](x("input",{class:"hidden"+(u||""),...e.value}))}}function ut(e){return g(()=>e.name||e.for)}function it(e,t){function r(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?g(()=>{if(e.type==="file")return r()}):g(r)}const st=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,dt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ft=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ct=/[a-z0-9_ -]$/i;function vt(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(je.is.firefox===!0?ct.test(r.data)===!1:st.test(r.data)===!0||dt.test(r.data)===!0||ft.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}var xt=ce({name:"QInput",inheritAttrs:!1,props:{...Ge,...at,...rt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...et,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:u}=Y(),{$q:f}=u,d={};let c=NaN,C,B,M=null,k;const v=I(null),H=ut(e),{innerValue:A,hasMask:L,moveCursorForPaste:D,updateMaskValue:O,onMaskedKeydown:z,onMaskedClick:V}=ot(e,t,b,v),q=it(e,!0),j=g(()=>se(A.value)),Z=vt(h),R=tt({changeEvent:!0}),S=g(()=>e.type==="textarea"||e.autogrow===!0),T=g(()=>S.value===!0||["text","search","url","tel","password"].includes(e.type)),a=g(()=>{const l={...R.splitAttrs.listeners.value,onInput:h,onPaste:y,onChange:i,onBlur:m,onFocus:me};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=Z,L.value===!0&&(l.onKeydown=z,l.onClick=V),e.autogrow===!0&&(l.onAnimationend=F),l}),n=g(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return S.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});N(()=>e.type,()=>{v.value&&(v.value.value=e.modelValue)}),N(()=>e.modelValue,l=>{if(L.value===!0){if(B===!0&&(B=!1,String(l)===c))return;O(l)}else A.value!==l&&(A.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete d.value));e.autogrow===!0&&J(p)}),N(()=>e.autogrow,l=>{l===!0?J(p):v.value!==null&&r.rows>0&&(v.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&J(p)});function s(){qe(()=>{const l=document.activeElement;v.value!==null&&v.value!==l&&(l===null||l.id!==R.targetUid.value)&&v.value.focus({preventScroll:!0})})}function o(){v.value!==null&&v.value.select()}function y(l){if(L.value===!0&&e.reverseFillMask!==!0){const _=l.target;D(_,_.selectionStart,_.selectionEnd)}t("paste",l)}function h(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const _=l.target.value;if(l.target.qComposing===!0){d.value=_;return}if(L.value===!0)O(_,!1,l.inputType);else if(b(_),T.value===!0&&l.target===document.activeElement){const{selectionStart:Q,selectionEnd:U}=l.target;Q!==void 0&&U!==void 0&&J(()=>{l.target===document.activeElement&&_.indexOf(l.target.value)===0&&l.target.setSelectionRange(Q,U)})}e.autogrow===!0&&p()}function F(l){t("animationend",l),p()}function b(l,_){k=()=>{M=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&c!==l&&(c=l,_===!0&&(B=!0),t("update:modelValue",l),J(()=>{c===l&&(c=NaN)})),k=void 0},e.type==="number"&&(C=!0,d.value=l),e.debounce!==void 0?(M!==null&&clearTimeout(M),d.value=l,M=setTimeout(k,e.debounce)):k()}function p(){requestAnimationFrame(()=>{const l=v.value;if(l!==null){const _=l.parentNode.style,{scrollTop:Q}=l,{overflowY:U,maxHeight:K}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),W=U!==void 0&&U!=="scroll";W===!0&&(l.style.overflowY="hidden"),_.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",W===!0&&(l.style.overflowY=parseInt(K,10)<l.scrollHeight?"auto":"hidden"),_.marginBottom="",l.scrollTop=Q}})}function i(l){Z(l),M!==null&&(clearTimeout(M),M=null),k!==void 0&&k(),t("change",l.target.value)}function m(l){l!==void 0&&me(l),M!==null&&(clearTimeout(M),M=null),k!==void 0&&k(),C=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{v.value!==null&&(v.value.value=A.value!==void 0?A.value:"")})}function w(){return d.hasOwnProperty("value")===!0?d.value:A.value!==void 0?A.value:""}oe(()=>{m()}),ae(()=>{e.autogrow===!0&&p()}),Object.assign(R,{innerValue:A,fieldClass:g(()=>`q-${S.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:g(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:v,emitValue:b,hasValue:j,floatingLabel:g(()=>j.value===!0&&(e.type!=="number"||isNaN(A.value)===!1)||se(e.displayValue)),getControl:()=>x(S.value===!0?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:w()}:q.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(S.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},w()),x("span",e.shadowText)])});const E=lt(R);return Object.assign(u,{focus:s,select:o,getNativeElement:()=>v.value}),Me(u,"nativeEl",()=>v.value),E}});export{yt as Q,kt as a,xt as b,pt as c,rt as u};
