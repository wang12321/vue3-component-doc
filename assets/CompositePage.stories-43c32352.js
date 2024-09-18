import{_ as h,__tla as Y}from"./iframe-dc54bd9f.js";import{d as R,b as O,e as Z,f as D,g as n,j as x,o as d,k as _,u as t,m as j,l as i,n as C,p as ee,q as T,s as ae,t as te,v as w,x as oe,y as le}from"./vue.esm-bundler-26e88939.js";import"../sb-preview/runtime.js";let P,z,p,re=Promise.all([(()=>{try{return Y}catch{}})()]).then(async()=>{var B,F,V;const L={key:0,style:{height:"40px"}},A={style:{float:"left"}},k={style:{float:"right"}},N={style:{float:"left","margin-right":"5px","margin-top":"5px"}},E={style:{float:"left"}},I=R({name:"CompositePage"}),S=R({...I,props:{getPageDataApi:{type:Function},pageData:{type:Object,default:()=>({total:0,pageNum:1,pageSize:10})},searchFormConfig:{type:Object,default:()=>({})},searchFormOptions:{type:Array,default:()=>[]},searchFormData:{type:Object,default:()=>({})},tableTopRightBtnList:{type:Array,default:()=>[]},pageSize:{type:String,default:()=>"default"},tableTopLeftBtnList:{type:Array,default:()=>[]},tableData:{type:Array,default:()=>[]},tableColumn:{type:Array,default:()=>[]},tableConfig:{type:Object,default:()=>({})},operates:{type:Object,default:()=>({})}},emits:["onUpTableData","onReloadData","onSubmit","handleSelectionChange","onSortChange","onReset"],setup(a,{expose:l,emit:v}){const $=w(()=>h(()=>import("./Pagination-3aab73c9.js"),["./Pagination-3aab73c9.js","./vue.esm-bundler-26e88939.js","./use-form-item-1ca7c638.js","./icon-6eab7272.js","./index-34d634be.js","./event-f800872e.js","./index-b9e8ac68.js","./index-f576d4fc.js","./index-f6f28c08.js","./_plugin-vue_export-helper-c27b6911.js","./Pagination-df705dba.css","./index-064c4613.css"],import.meta.url)),H=w(()=>h(()=>import("./TableComponent-3d5c62b3.js").then(async e=>(await e.__tla,e)),["./TableComponent-3d5c62b3.js","./iframe-dc54bd9f.js","./vue.esm-bundler-26e88939.js","./index-34d634be.js","./event-f800872e.js","./use-form-item-1ca7c638.js","./_commonjsHelpers-725317a4.js","./objects-6be20ab1.js","./_plugin-vue_export-helper-c27b6911.js","./TableComponent-dd15a6b0.css","./index-064c4613.css"],import.meta.url)),U=w(()=>h(()=>import("./ButtonGroup-49648c36.js"),["./ButtonGroup-49648c36.js","./vue.esm-bundler-26e88939.js","./index-f9a11d88.js","./use-form-item-1ca7c638.js","./index-f6f28c08.js","./icon-6eab7272.js","./_plugin-vue_export-helper-c27b6911.js","./ButtonGroup-7c791a7f.css","./index-064c4613.css"],import.meta.url)),W=w(()=>h(()=>import("./SearchForm-f78a7259.js").then(async e=>(await e.__tla,e)),["./SearchForm-f78a7259.js","./iframe-dc54bd9f.js","./vue.esm-bundler-26e88939.js","./index-b2bd8c87.js","./use-form-item-1ca7c638.js","./index-34d634be.js","./event-f800872e.js","./objects-6be20ab1.js","./index-f9a11d88.js","./index-f6f28c08.js","./icon-6eab7272.js","./index-f576d4fc.js","./index-b9e8ac68.js","./SearchForm-79aa9645.css","./index-064c4613.css"],import.meta.url));let s=v;const o=a,m=O(()=>({isPagination:!0,isTableTop:!0,isSerialNumber:!0,summaryMethod:Function,showSummary:!1,options:{border:!1,stripe:!1,fit:!0,showHeader:!0,highlightCurrentRow:!0,mutiSelect:!1,loading:!1},...o.tableConfig})),r=O(()=>({isShow:!0,isAdvanced:!0,labelWidth:"100px",widthDefault:"200px",submitBtn:{icon:"",name:"\u67E5\u8BE2"},resetBtn:{icon:"",name:"\u91CD\u7F6E"},rules:{},...o.searchFormConfig})),M=e=>{s("handleSelectionChange",e)},q=({column:e,prop:u,order:c})=>{s("onSortChange",{column:e,prop:u,order:c})},g=Z({}),G=()=>{s("onSubmit",o.searchFormData),o.pageData.pageNum=1,y(g.value)},J=()=>{Object.keys(o.searchFormData).forEach(e=>{o.searchFormData[e]=""}),s("onReset"),o.pageData.pageNum=1,y(g.value)},K=e=>{s("onReloadData",e),y(g.value)};function y(e,u){e&&(g.value=e);let c={...o.searchFormData,pageNum:o.pageData.pageNum,pageSize:o.pageData.pageSize,...e};o.getPageDataApi&&o.getPageDataApi(c).then(b=>{u?u(b):s("onUpTableData",b)})}return l({getPageData:y}),(e,u)=>{const c=x("el-header"),b=x("el-main"),Q=x("el-container");return d(),D(Q,null,{default:n(()=>[_(c,{style:{height:"auto","background-color":"#ffffff"}},{default:n(()=>[t(r).isShow?(d(),D(t(W),j({key:0},e.$attrs,{size:a.pageSize,widthDefault:t(r).widthDefault,"form-options":a.searchFormOptions,"form-data":a.searchFormData,isAdvanced:t(r).isAdvanced,labelWidth:t(r).labelWidth,submitBtn:t(r).submitBtn,resetBtn:t(r).resetBtn,rules:t(r).rules,onOnSubmit:G,onOnReset:J}),{button:n(()=>[i(e.$slots,"searchButton")]),formItem:n(()=>[i(e.$slots,"searchFormItem")]),_:3},16,["size","widthDefault","form-options","form-data","isAdvanced","labelWidth","submitBtn","resetBtn","rules"])):C("",!0)]),_:3}),_(b,{style:{"margin-top":"20px","background-color":"#ffffff"}},{default:n(()=>[t(m).isTableTop?(d(),ee("div",L,[T("div",A,[i(e.$slots,"tableTopLeft")]),T("div",k,[T("div",N,[i(e.$slots,"tableTopRight")]),T("div",E,[a.tableTopRightBtnList&&a.tableTopRightBtnList.length?(d(),D(t(U),{key:0,list:a.tableTopRightBtnList.filter(f=>f.show===!0),size:a.pageSize,"is-button":!0},null,8,["list","size"])):C("",!0)])])])):C("",!0),_(t(H),j(e.$attrs,{tableData:a.tableData,tableColumn:a.tableColumn,options:t(m).options,operates:a.operates,"summary-method":t(m).summaryMethod,showSummary:t(m).showSummary,onSelectionChange:M,onSortChange:q}),ae({expand:n(()=>[i(e.$slots,"tableExpand")]),_:2},[te(a.tableColumn,(f,ne)=>({name:f.slot,fn:n(X=>[i(e.$slots,f.slot,oe(le(X)))])}))]),1040,["tableData","tableColumn","options","operates","summary-method","showSummary"]),t(m).isPagination?(d(),D(t($),{key:1,pageData:a.pageData,onOnReloadData:K},null,8,["pageData"])):C("",!0)]),_:3})]),_:3})}}});S.__docgenInfo={exportName:"default",displayName:"CompositePage",description:"",tags:{},expose:[{name:"getPageData"}],props:[{name:"getPageDataApi",type:{name:"func"}},{name:"pageData",type:{name:"object"},defaultValue:{func:!1,value:`{
  total:0,
  pageNum:1,
  pageSize:10
}`}},{name:"searchFormConfig",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"searchFormOptions",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"searchFormData",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"tableTopRightBtnList",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"pageSize",type:{name:"string"},defaultValue:{func:!0,value:`() => {
  return 'default'
}`}},{name:"tableTopLeftBtnList",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"tableData",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"tableColumn",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"tableConfig",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"operates",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"onUpTableData"},{name:"onReloadData"},{name:"onSubmit"},{name:"handleSelectionChange"},{name:"onSortChange"},{name:"onReset"}],slots:[{name:"searchButton"},{name:"searchFormItem"},{name:"tableTopLeft"},{name:"tableTopRight"},{name:"column.slot",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"tableExpand"}],sourceFiles:["/Users/fangfei/Desktop/\u6C5F\u94C3\u4EE3\u7801/vue3/jmc-ele-component-vue3/src/stories/CompositePage.vue"]},z={title:"Example/CompositePage",component:S,render:a=>({components:{CompositePage:S},setup(){return{args:a}},template:'<CompositePage :searchFormOptions="args.searchFormOptions" :searchFormData="args.searchFormData" :searchFormConfig="args.searchFormConfig" :tableTopRightBtnList="args.tableTopBtnList" :tableColumn="args.tableColumn" :tableConfig="args.tableConfig" :operates="args.operates" :tableData="args.tableData" :pageData="args.pageData" @onReloadData="args.onReloadData" />'}),tags:["autodocs"],argTypes:{getPageDataApi:{description:"\u8868\u683C\u6570\u636E\u63A5\u53E3API"},tableData:{description:"\u8868\u683C\u6570\u636E\u5BF9\u8C61"},pageData:{description:"\u5206\u9875\u7EC4\u5EFA\u7684\u914D\u7F6E\u9879\u6570\u636E"},total:{description:"\u603B\u6570\u76EE",table:{category:"pageData",type:{summary:0},defaultValue:{summary:""}},control:{type:Number}},pageNum:{description:"options\u6709\u6548,option label",table:{category:"pageData",type:{summary:1},defaultValue:{summary:1}},control:{type:Number}},pageSize:{description:"options\u6709\u6548,option label",table:{category:"pageData",type:{summary:10},defaultValue:{summary:10}},control:{type:Number}},searchFormConfig:{description:"\u8868\u683C\u641C\u7D22\u6761\u4EF6\u914D\u7F6E"},isShow:{description:"\u662F\u5426\u9700\u8981\u67E5\u8BE2\u6761\u4EF6",table:{category:"searchFormConfig",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},isAdvanced:{description:"\u662F\u5426\u9700\u8981\u5C55\u5F00\u6536\u8D77",table:{category:"searchFormConfig",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},labelWidth:{description:"label\u5BBD\u5EA6",table:{category:"searchFormConfig",type:{summary:""},defaultValue:{summary:"100px"}},control:{type:String}},widthDefault:{description:"\u6761\u4EF6\u5BBD\u5EA6",table:{category:"searchFormConfig",type:{summary:""},defaultValue:{summary:"200px"}},control:{type:String}},submitBtn:{description:"\u67E5\u8BE2\u6309\u94AE",table:{category:"searchFormConfig",type:{summary:{}},defaultValue:{summary:{}}},control:{type:Object}},resetBtn:{description:"\u91CD\u7F6E\u6309\u94AE",table:{category:"searchFormConfig",type:{summary:{}},defaultValue:{summary:{}}},control:{type:Object}},rules:{description:"\u8868\u5355\u6821\u9A8C\u89C4\u5219",table:{category:"searchFormConfig",type:{summary:{}},defaultValue:{summary:{}}},control:{type:Object}},searchFormOptions:{description:"\u8868\u683C\u641C\u7D22\u6761\u4EF6\u5217\u8868"},tableConfig:{description:"\u8868\u683C\u914D\u7F6E"},isPagination:{description:"\u662F\u5426\u9700\u8981\u5206\u9875",table:{category:"tableConfig",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},isTableTop:{description:"\u662F\u5426\u9700\u8981\u8868\u683C\u5934\u90E8\u6309\u94AE",table:{category:"tableConfig",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},isSerialNumber:{description:"\u662F\u5426\u9700\u8981\u8868\u683C\u5E8F\u53F7",table:{category:"tableConfig",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},showSummary:{description:"\u662F\u5426\u9700\u8981\u8868\u683C\u5408\u8BA1",table:{category:"tableConfig",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},summaryMethod:{description:"\u8868\u683C\u5408\u8BA1\u51FD\u6570",table:{category:"tableConfig",type:{summary:()=>{}},defaultValue:{summary:()=>{}}},control:{type:Function}},options:{description:"\u8868\u683C\u914D\u7F6E",table:{category:"tableConfig",type:{summary:{}},defaultValue:{summary:{}}},control:{type:Object}},operates:{description:"\u8868\u683C\u6309\u94AE\u914D\u7F6E"},border:{description:"\u662F\u5426\u5E26\u6709\u7EB5\u5411\u8FB9\u6846",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},stripe:{description:"\u662F\u5426\u4E3A\u6591\u9A6C\u7EB9 table",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},fit:{description:"\u5217\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00",table:{category:"operates",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},showHeader:{description:"\u662F\u5426\u663E\u793A\u8868\u5934",table:{category:"operates",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},highlightCurrentRow:{description:"\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C",table:{category:"operates",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},mutiSelect:{description:"\u662F\u5426\u591A\u9879\u9009\u62E9",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},loading:{description:"\u662F\u5426\u6B63\u5728\u52A0\u8F7D",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},tableColumn:{description:"\u8868\u683C\u5217\u6570\u636E"},tableTopRightBtnList:{description:"\u8868\u683C\u53F3\u4FA7\u6309\u94AE\u96C6"},tableTopLeftBtnList:{description:"\u8868\u683C\u5DE6\u4FA7\u6309\u94AE\u96C6"},tableTopLeft:{description:"\u8868\u683C\u5DE6\u4FA7\u63D2\u69FD"},tableTopRight:{description:"\u8868\u683C\u53F3\u4FA7\u63D2\u69FD"},onReloadData:{description:"\u8868\u683C\u5206\u9875\u56DE\u8C03"},onUpTableData:{description:"\u8868\u683C\u6570\u636E\u56DE\u8C03"},onSubmit:{description:"\u8868\u683C\u6761\u4EF6\u67E5\u8BE2\u56DE\u8C03"},handleSelectionChange:{description:"\u8868\u683C\u591A\u9009\u56DE\u8C03"},onSortChange:{description:"\u8868\u683C\u6392\u5E8F\u56DE\u8C03"},onReset:{description:"\u8868\u683C\u6761\u4EF6\u91CD\u7F6E\u56DE\u8C03"}},args:{tableData:[],tableColumn:[],options:{},operates:[]}},p={args:{onReloadData:()=>{},tableConfig:{isPagination:!0,options:{showHeader:!0,loading:!1,border:!1,mutiSelect:!0,className:"table-class"}},searchFormOptions:[{title:"\u6635\u79F0",key:"name",type:"input",clearable:!0,isAdvanced:!0},{titleShow:!0,clearable:!0,title:"\u662F\u5426",key:"yes",type:"select",options:[{value:"1",label:"\u662F"},{value:"2",label:"\u5426"}],label:"label",value:"value"}],pageData:{total:150,pageNum:1,pageSize:10},searchFormData:{value:""},searchFormConfig:{},tableTopBtnList:[{label:"\u65B0\u589E",show:!0,btnType:"primary",method:(a,l)=>{console.log(a,l),alert("\u65B0\u589E")}}],tableData:[{tzmc:"11",xgsj:123},{tzmc:"11",xgsj:2}],tableColumn:[{label:"\u6D4B\u8BD5",prop:"tzmc1"},{label:"\u540D\u79F0",prop:"tzmc",align:"left",tip:"\u6269\u5C55\u63D0\u793A"},{label:"\u6743\u9650",prop:"gxlx",isHidden:!0,align:"left",showOverflowTooltip:!0},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"lrsj",formatter:a=>`<span style="color: dodgerblue;">${a.xgsj}</span>`},{label:"\u66F4\u65B0\u65F6\u95F4",prop:"xgsj"}],operates:{align:"left",width:"380px",fixed:"right",label:"\u64CD\u4F5C",isButton:!0,list:[{label:"\u67E5\u770B",show:!0,icon:"Edit",btnType:"primary",plain:!0,method:(a,l,v)=>{console.log(v),alert("\u67E5\u770B")}},{label:"\u7F16\u8F91",show:!0,btnType:"danger",plain:!0,method:(a,l)=>{console.log(a,l),alert("\u7F16\u8F91")}},{label:"\u662F\u5426\u5220\u9664\u5F53\u524D\u6570\u636E?",show:!0,type:"delete",btnType:"danger",plain:!0,method:(a,l)=>{console.log(a,l),alert("\u5220\u9664")}}]}}},p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    onReloadData: () => {},
    tableConfig: {
      isPagination: true,
      options: {
        showHeader: true,
        loading: false,
        border: false,
        mutiSelect: true,
        className: 'table-class'
      }
    },
    searchFormOptions: [{
      title: '\u6635\u79F0',
      key: 'name',
      type: 'input',
      clearable: true,
      isAdvanced: true
    }, {
      titleShow: true,
      clearable: true,
      title: '\u662F\u5426',
      key: 'yes',
      type: 'select',
      options: [{
        value: '1',
        label: '\u662F'
      }, {
        value: '2',
        label: '\u5426'
      }],
      label: 'label',
      value: 'value'
    }],
    pageData: {
      total: 150,
      pageNum: 1,
      pageSize: 10
    },
    searchFormData: {
      value: ''
    },
    searchFormConfig: {},
    tableTopBtnList: [{
      label: '\u65B0\u589E',
      show: true,
      btnType: 'primary',
      method: (index: number, row: keyType) => {
        console.log(index, row);
        alert('\u65B0\u589E');
      }
    }],
    tableData: [{
      tzmc: '11',
      xgsj: 123
    }, {
      tzmc: '11',
      xgsj: 2
    }],
    tableColumn: [{
      label: '\u6D4B\u8BD5',
      prop: 'tzmc1'
    }, {
      label: '\u540D\u79F0',
      prop: 'tzmc',
      align: 'left',
      tip: '\u6269\u5C55\u63D0\u793A'
    }, {
      label: '\u6743\u9650',
      prop: 'gxlx',
      isHidden: true,
      align: 'left',
      showOverflowTooltip: true
    }, {
      label: '\u521B\u5EFA\u65F6\u95F4',
      prop: 'lrsj',
      formatter: (row: keyType) => {
        return \`<span style="color: dodgerblue;">\${row.xgsj}</span>\`;
      }
    }, {
      label: '\u66F4\u65B0\u65F6\u95F4',
      prop: 'xgsj'
    }],
    operates: {
      align: 'left',
      width: '380px',
      fixed: 'right',
      label: '\u64CD\u4F5C',
      isButton: true,
      list: [{
        label: '\u67E5\u770B',
        show: true,
        icon: 'Edit',
        btnType: 'primary',
        plain: true,
        method: (index: number, row: keyType, index1: number) => {
          console.log(index1);
          alert('\u67E5\u770B');
        }
      }, {
        label: '\u7F16\u8F91',
        show: true,
        btnType: 'danger',
        plain: true,
        method: (index: number, row: keyType) => {
          console.log(index, row);
          alert('\u7F16\u8F91');
        }
      }, {
        label: '\u662F\u5426\u5220\u9664\u5F53\u524D\u6570\u636E?',
        show: true,
        type: 'delete',
        btnType: 'danger',
        plain: true,
        method: (index: number, row: keyType) => {
          console.log(index, row);
          alert('\u5220\u9664');
        }
      }]
    }
  }
}`,...(V=(F=p.parameters)==null?void 0:F.docs)==null?void 0:V.source}}},P=["page"]});export{P as __namedExportsOrder,re as __tla,z as default,p as page};
