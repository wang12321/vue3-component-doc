import"../sb-preview/runtime.js";let e,w=(async()=>{(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();let E,p,c,O,u,l;E="modulepreload",p=function(_,i){return new URL(_,i).href},c={},e=function(_,i,s){if(!i||i.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(i.map(r=>{if(r=p(r,s),r in c)return;c[r]=!0;const o=r.endsWith(".css"),L=o?'[rel="stylesheet"]':"";if(s)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===r&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${L}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),o)return new Promise((a,m)=>{n.addEventListener("load",a),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>_()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:O}=__STORYBOOK_MODULE_CHANNELS__,{addons:u}=__STORYBOOK_MODULE_PREVIEW_API__,l=O({page:"preview"}),u.setChannel(l),window.__STORYBOOK_ADDONS_CHANNEL__=l,window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const d={"./src/stories/AmountInput.stories.ts":async()=>e(()=>import("./AmountInput.stories-4bdf19b2.js"),["./AmountInput.stories-4bdf19b2.js","./index-57b8f5cf.js","./index-d7578b05.js","./vue.esm-bundler-26e88939.js","./index-f576d4fc.js","./event-f800872e.js","./use-form-item-1ca7c638.js","./icon-6eab7272.js","./_plugin-vue_export-helper-c27b6911.js","./AmountInput.stories-bdd34770.css"],import.meta.url),"./src/stories/CompositePage.stories.ts":async()=>e(()=>import("./CompositePage.stories-9c90651e.js").then(async _=>(await _.__tla,_)),["./CompositePage.stories-9c90651e.js","./vue.esm-bundler-26e88939.js"],import.meta.url),"./src/stories/DialogForm.stories.ts":async()=>e(()=>import("./DialogForm.stories-72598bac.js"),["./DialogForm.stories-72598bac.js","./vue.esm-bundler-26e88939.js","./use-form-item-1ca7c638.js","./index-b2bd8c87.js","./index-34d634be.js","./event-f800872e.js","./objects-6be20ab1.js","./index-f9a11d88.js","./index-f6f28c08.js","./icon-6eab7272.js","./index-f576d4fc.js","./index-b9e8ac68.js","./_plugin-vue_export-helper-c27b6911.js","./DialogForm.stories-bfa6c7e4.css","./index-064c4613.css"],import.meta.url),"./src/stories/Pagination.stories.ts":async()=>e(()=>import("./Pagination.stories-f53c01e1.js"),["./Pagination.stories-f53c01e1.js","./vue.esm-bundler-26e88939.js","./_plugin-vue_export-helper-c27b6911.js","./Pagination.stories-02db0a71.css"],import.meta.url),"./src/stories/SearchForm.stories.ts":async()=>e(()=>import("./SearchForm.stories-5befbc78.js"),["./SearchForm.stories-5befbc78.js","./index-57b8f5cf.js","./index-d7578b05.js","./SearchForm-b63c2f0a.js","./vue.esm-bundler-26e88939.js","./index-b2bd8c87.js","./use-form-item-1ca7c638.js","./index-34d634be.js","./event-f800872e.js","./objects-6be20ab1.js","./index-f9a11d88.js","./index-f6f28c08.js","./icon-6eab7272.js","./index-f576d4fc.js","./index-b9e8ac68.js","./SearchForm-79aa9645.css","./index-064c4613.css"],import.meta.url),"./src/stories/table.stories.ts":async()=>e(()=>import("./table.stories-0bf28bc7.js"),["./table.stories-0bf28bc7.js","./TableComponent-5781ba1c.js","./vue.esm-bundler-26e88939.js","./index-34d634be.js","./event-f800872e.js","./use-form-item-1ca7c638.js","./_commonjsHelpers-725317a4.js","./objects-6be20ab1.js","./_plugin-vue_export-helper-c27b6911.js","./TableComponent-dd15a6b0.css","./index-064c4613.css"],import.meta.url)};async function R(_){return d[_]()}const{composeConfigs:P,PreviewWeb:f,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,T=async()=>{const _=await Promise.all([e(()=>import("./entry-preview-2b20902e.js"),["./entry-preview-2b20902e.js","./vue.esm-bundler-26e88939.js"],import.meta.url),e(()=>import("./entry-preview-docs-cbcbbe4f.js"),["./entry-preview-docs-cbcbbe4f.js","./index-6a8d456b.js","./_commonjsHelpers-725317a4.js","./vue.esm-bundler-26e88939.js"],import.meta.url),e(()=>import("./preview-ee71643a.js"),["./preview-ee71643a.js","./index-8c3ac41d.js"],import.meta.url),e(()=>import("./preview-8e2066cc.js"),[],import.meta.url),e(()=>import("./preview-02f54fcd.js"),["./preview-02f54fcd.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-73c648b3.js"),[],import.meta.url),e(()=>import("./preview-3a10f865.js"),[],import.meta.url),e(()=>import("./preview-da31036b.js"),["./preview-da31036b.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-b54d3dcc.js"),[],import.meta.url),e(()=>import("./preview-6f3917b3.js"),["./preview-6f3917b3.js","./index-d7578b05.js"],import.meta.url),e(()=>import("./preview-1c20fb67.js").then(async i=>(await i.__tla,i)),[],import.meta.url),e(()=>import("./preview-c485859c.js"),[],import.meta.url)]);return P(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new f(R,T),window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore})();export{e as _,w as __tla};
