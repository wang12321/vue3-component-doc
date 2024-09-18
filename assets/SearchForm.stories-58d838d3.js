var o,s,l,m,i,u;import{f as a}from"./index-57b8f5cf.js";import r from"./SearchForm-3dd8a965.js";import"./index-d7578b05.js";import"./iframe-8798b914.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-26e88939.js";import"./index-b2bd8c87.js";import"./use-form-item-1ca7c638.js";import"./index-34d634be.js";import"./event-f800872e.js";import"./objects-6be20ab1.js";import"./index-f9a11d88.js";import"./index-f6f28c08.js";import"./icon-6eab7272.js";import"./index-f576d4fc.js";import"./index-b9e8ac68.js";const n={title:"Example/SearchForm",component:r,render:p=>({components:{SearchForm:r},setup(){return{args:p}},template:'<SearchForm :form-options="args.formList" :form-data="args.formData" :rules="args.rules"  @submit="args.onSubmit" @reset="args.onCancel"/>'}),tags:["autodocs"],argTypes:{formData:{description:"\u8868\u5355\u6570\u636E\u5B58\u50A8\u5BF9\u8C61"},formList:{description:"\u8868\u5355\u9879\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u6570\u770BformList"},rules:{description:"\u6821\u9A8C"},labelWidth:{description:"\u8868\u5355label\u5BBD\u5EA6"},title:{type:{required:!0},description:"\u8868\u5355\u9879label",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},":key":{type:{required:!0},description:"\u8868\u5355\u9879model\uFF0C\u5BF9\u5E94formData\u7684key",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},placeholder:{description:"\u8868\u5355\u9879placeholder",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:"\u8BF7\u586B\u5199{{title}}"}},control:{type:"text"}},type:{type:{required:!0},description:"\u8868\u5355\u9879type",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"select",options:["input","select","month","year","cascader","date","daterange","datetimerange","dateH","time","datetime","radio","checkbox","inputNumber","switch","slot"]}},options:{description:"type\u4E3Aselect,radio,checkbox\u6709\u6548",table:{category:"formList",type:{summary:"array"},defaultValue:{summary:[]}},control:{type:"array"}},label:{description:"options\u6709\u6548,option label",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},value:{description:"options\u6709\u6548,option label",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},clearable:{description:"\u662F\u5426\u5F00\u542F\u6E05\u9664\uFF0C\u9ED8\u8BA4\u5F00\u542F",table:{category:"formList",type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},change:{description:"@change\u56DE\u8C03\u4E8B\u4EF6",table:{category:"formList",type:{summary:"function"},defaultValue:{summary:"function"}},control:{type:"function"}},inactiveText:{description:"type\u4E3Aswitch\u65F6\u6709\u6548,\u672A\u9009\u4E2D\u6587\u5B57",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},activeText:{description:"type\u4E3Aswitch\u65F6\u6709\u6548,\u9009\u4E2D\u6587\u5B57",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},min:{description:"type\u4E3AinputNumber\u65F6\u6709\u6548\uFF0C\u6700\u5C0F\u503C",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},max:{description:"type\u4E3AinputNumber\u65F6\u6709\u6548\uFF0C\u6700\u5927\u503C",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},border:{description:"checkbox \u6709\u6548\uFF0C\u663E\u793A\u8FB9\u6846",table:{category:"formList",type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},disabled:{description:"disabled",table:{category:"formList",type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},limit:{description:"type\u4E3AuploadImg\u65F6\u6709\u6548\uFF0C\u56FE\u7247\u6570\u91CF\u9650\u5236",table:{category:"formList",type:{summary:"string"},defaultValue:{summary:""}},control:{type:"text"}},multiple:{description:"multiple",table:{category:"formOptions",type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},filterable:{description:"filterable",table:{category:"formOptions",type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},onSubmit:{description:"\u8868\u5355\u63D0\u4EA4",table:{type:{summary:"function"},defaultValue:{summary:"function"}},action:"submitAction"},onReset:{description:"\u8868\u5355\u91CD\u7F6E\u6309\u94AE",table:{type:{summary:"function"},defaultValue:{summary:"function"}},action:"Reset"},formItem:{description:"formItem\u9884\u7559",table:{type:{summary:"template"}}}},args:{formList:[],formData:{},rules:{},onSubmit:a(),onReset:a()}},e={args:{rules:{},formData:{number:50,sex:"\u7537",region:["\u4E2D\u56FD"]},formList:[{title:"\u6635\u79F0",key:"name",type:"input",clearable:!0}]}},t={args:{rules:{},formData:{sex:"\u7537"},formList:[{clearable:!0,title:"\u662F\u5426",key:"yes",type:"select",options:[{value:"1",label:"\u662F"},{value:"2",label:"\u5426"}],label:"label",value:"value"}]}};e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    rules: {},
    formData: {
      number: 50,
      sex: '\u7537',
      region: ['\u4E2D\u56FD']
    },
    formList: [{
      title: '\u6635\u79F0',
      key: 'name',
      type: 'input',
      clearable: true
    }]
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}},t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    rules: {},
    formData: {
      sex: '\u7537'
    },
    formList: [{
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
    }]
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const y=["input","select"];export{y as __namedExportsOrder,n as default,e as input,t as select};
