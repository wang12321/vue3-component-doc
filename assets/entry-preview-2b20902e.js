import{h as p,c as w,i as P,a as S,r as g}from"./vue.esm-bundler-26e88939.js";var U=Object.defineProperty,j=(e,t)=>{for(var r in t)U(e,r,{get:t[r],enumerable:!0})};const{sanitizeStoryContextUpdate:I}=__STORYBOOK_MODULE_PREVIEW_API__;var A={};j(A,{applyDecorators:()=>T,parameters:()=>E,render:()=>O,renderToCanvas:()=>h});var O=(e,t)=>{let{id:r,component:s}=t;if(!s)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return()=>p(s,e,R(e,t))},N=async(e,t)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(r=>r(e,t)))},f=new Map;async function h({storyFn:e,forceRemount:t,showMain:r,showException:s,storyContext:o,id:n},a){let u=f.get(a);if(u&&!t){let c=e(),l=b(c,o);return C(u.reactiveArgs,l),()=>{d(u.vueApp,a)}}u&&t&&d(u.vueApp,a);let i=w({setup(){o.args=g(o.args);let c=e(),l=b(c,o),m={vueApp:i,reactiveArgs:g(l)};return f.set(a,m),()=>p(c)}});return i.config.errorHandler=(c,l,m)=>{var y;(y=window.__STORYBOOK_PREVIEW__)!=null&&y.storyRenders.some(_=>_.id===n&&_.phase==="playing")?setTimeout(()=>{throw c},0):s(c)},await N(i,o),i.mount(a),r(),()=>{d(i,a)}}function R(e,t){let{argTypes:r}=t,s=Object.entries(e).filter(([o])=>{var n,a;return((a=(n=r[o])==null?void 0:n.table)==null?void 0:a.category)==="slots"}).map(([o,n])=>[o,typeof n=="function"?n:()=>n]);return Object.fromEntries(s)}function b(e,t){return e.props&&P(e)?e.props:t.args}function C(e,t){if(Object.keys(t).length===0)return;let r=S(e)?e:g(e);Object.keys(r).forEach(s=>{s in t||delete r[s]}),Object.assign(r,t)}function d(e,t){e==null||e.unmount(),f.has(t)&&f.delete(t)}function x(e){return typeof e=="function"?{render:e,name:e.name}:e}function v(e,t){let r=e;return r===null?null:typeof r=="function"?r:t?{...x(r),components:{...r.components||{},story:t}}:{render(){return p(r)}}}function T(e,t){return t.reduce((r,s)=>o=>{let n,a=s(u=>{let i=I(u);return u&&(i.args=Object.assign(o.args,i.args)),n=r({...o,...i}),n},o);return n||(n=r(o)),a===n?n:v(a,()=>p(n))},r=>v(e(r)))}var E={renderer:"vue3"};export{T as applyDecorators,E as parameters,O as render,h as renderToCanvas};
