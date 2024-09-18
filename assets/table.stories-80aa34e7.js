var l,r,p;import o from"./TableComponent-0f75bb05.js";import"./iframe-8798b914.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-26e88939.js";import"./index-34d634be.js";import"./event-f800872e.js";import"./use-form-item-1ca7c638.js";import"./_commonjsHelpers-725317a4.js";import"./objects-6be20ab1.js";import"./_plugin-vue_export-helper-c27b6911.js";const n={title:"Example/TableComponent",component:o,render:e=>({components:{TableComponent:o},setup(){return{args:e}},template:'<TableComponent :tableData="args.tableData" :tableColumn="args.tableColumn" :options="args.options" :operates="args.operates"/>'}),tags:["autodocs"],argTypes:{tableData:{description:"\u8868\u683C\u6570\u636E\u5BF9\u8C61"},pageData:{description:"\u5206\u9875\u7EC4\u5EFA\u7684\u914D\u7F6E\u9879\u6570\u636E"},total:{description:"\u603B\u6570\u76EE",table:{category:"pageData",type:{summary:0},defaultValue:{summary:""}},control:{type:Number}},pageNum:{description:"options\u6709\u6548,option label",table:{category:"pageData",type:{summary:1},defaultValue:{summary:1}},control:{type:Number}},pageSize:{description:"options\u6709\u6548,option label",table:{category:"pageData",type:{summary:10},defaultValue:{summary:10}},control:{type:Number}},options:{description:"\u8868\u683C\u914D\u7F6E",table:{category:"tableConfig",type:{summary:{}},defaultValue:{summary:{}}},control:{type:Object}},operates:{description:"\u8868\u683C\u6309\u94AE\u914D\u7F6E"},border:{description:"\u662F\u5426\u5E26\u6709\u7EB5\u5411\u8FB9\u6846",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},stripe:{description:"\u662F\u5426\u4E3A\u6591\u9A6C\u7EB9 table",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},fit:{description:"\u5217\u7684\u5BBD\u5EA6\u662F\u5426\u81EA\u6491\u5F00",table:{category:"operates",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},showHeader:{description:"\u662F\u5426\u663E\u793A\u8868\u5934",table:{category:"operates",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},highlightCurrentRow:{description:"\u662F\u5426\u8981\u9AD8\u4EAE\u5F53\u524D\u884C",table:{category:"operates",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},mutiSelect:{description:"\u662F\u5426\u591A\u9879\u9009\u62E9",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},loading:{description:"\u662F\u5426\u6B63\u5728\u52A0\u8F7D",table:{category:"operates",type:{summary:!1},defaultValue:{summary:!1}},control:{type:Boolean}},tableColumn:{description:"\u8868\u683C\u5217\u6570\u636E"},handleSelectionChange:{description:"\u8868\u683C\u591A\u9009\u56DE\u8C03"},onSortChange:{description:"\u8868\u683C\u6392\u5E8F\u56DE\u8C03"},showSummary:{description:"\u662F\u5426\u9700\u8981\u8868\u683C\u5408\u8BA1",table:{category:"tableConfig",type:{summary:!0},defaultValue:{summary:!0}},control:{type:Boolean}},summaryMethod:{description:"\u8868\u683C\u5408\u8BA1\u51FD\u6570",table:{category:"tableConfig",type:{summary:()=>{}},defaultValue:{summary:()=>{}}},control:{type:Function}}},args:{tableData:[],tableColumn:[],options:{},operates:[]}},t={args:{tableData:[{tzmc:"11",xgsj:123},{tzmc:"11",xgsj:2}],options:{showHeader:!0,loading:!1,border:!1,mutiSelect:!0,className:"table-class"},tableColumn:[{label:"\u6D4B\u8BD5",prop:"tzmc"},{label:"\u540D\u79F0",prop:"tzmc",align:"left",tip:"\u6269\u5C55\u63D0\u793A"},{label:"\u6743\u9650",prop:"gxlx",isHidden:!0,align:"left",showOverflowTooltip:!0},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"lrsj",formatter:e=>`<span style="color: dodgerblue;">${e.xgsj}</span>`},{label:"\u66F4\u65B0\u65F6\u95F4",prop:"xgsj"}],operates:{align:"left",width:"380px",fixed:"right",label:"\u64CD\u4F5C",isButton:!0,list:[{label:"\u67E5\u770B",show:!0,icon:"Edit",btnType:"primary",plain:!0,method:(e,a,s)=>{console.log(s),alert("\u67E5\u770B")}},{label:"\u7F16\u8F91",show:!0,btnType:"danger",plain:!0,method:(e,a)=>{console.log(e,a),alert("\u7F16\u8F91")}},{label:"\u662F\u5426\u5220\u9664\u5F53\u524D\u6570\u636E?",show:!0,type:"delete",btnType:"danger",plain:!0,method:(e,a)=>{console.log(e,a),alert("\u5220\u9664")}}]}}};t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tableData: [{
      tzmc: '11',
      xgsj: 123
    }, {
      tzmc: '11',
      xgsj: 2
    }],
    options: {
      showHeader: true,
      loading: false,
      border: false,
      mutiSelect: true,
      className: 'table-class'
    },
    tableColumn: [{
      label: '\u6D4B\u8BD5',
      prop: 'tzmc'
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
}`,...(p=(r=t.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const i=["table"];export{i as __namedExportsOrder,n as default,t as table};
