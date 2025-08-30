import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as C}from"./index-D4H_InIO.js";function s({label:a,value:t,onChange:n,placeholder:z,variant:c="outlined",size:m="md",helperText:g,clearable:E,disabled:V,invalid:p,errorMessage:r,type:u="text",passwordToggle:x}){const[v,H]=C.useState(!1),R=x&&u==="password"?v?"text":"password":u,L=m==="sm"?"px-2 py-1 text-sm":m==="lg"?"px-4 py-2 text-lg":"px-3 py-2 text-base",_=c==="filled"?"bg-gray-100 border-transparent focus:bg-white":c==="ghost"?"border-transparent focus:border-gray-400":"border-gray-300";return e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700 dark:text-gray-200",children:a}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{className:`flex-1 rounded border outline-none focus:ring-2 focus:ring-blue-500 ${L} ${_}`,value:t,onChange:n,placeholder:z,disabled:V,"aria-invalid":p||!!r,type:R}),E&&t&&e.jsx("button",{type:"button",className:"text-gray-500 hover:text-gray-800",onClick:()=>n({target:{value:""}}),children:"✕"}),x&&u==="password"&&e.jsx("button",{type:"button",className:"text-gray-500 hover:text-gray-800",onClick:()=>H(k=>!k),children:v?"🙈":"👁️"})]}),(g||r)&&e.jsx("span",{className:`text-xs ${r||p?"text-red-500":"text-gray-500"}`,role:r||p?"alert":void 0,children:r||g})]})}s.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled' | 'ghost'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},passwordToggle:{required:!1,tsType:{name:"boolean"},description:""}}};const P={title:"Components/InputField",component:s,args:{label:"Label",placeholder:"Type here",helperText:"Helper text"}},l={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...a,variant:"outlined"}),e.jsx(s,{...a,variant:"filled"}),e.jsx(s,{...a,variant:"ghost"})]})},i={render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...a,size:"sm"}),e.jsx(s,{...a,size:"md"}),e.jsx(s,{...a,size:"lg"})]})},d={render:()=>{const[a,t]=C.useState("");return e.jsx(s,{label:"Search",value:a,onChange:n=>t(n.target.value),clearable:!0})}},o={args:{value:"Hello"},render:a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{...a,disabled:!0}),e.jsx(s,{...a,invalid:!0,errorMessage:"Required field"}),e.jsx(s,{...a,passwordToggle:!0,type:"password"})]})};var y,f,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
    <InputField {...args} variant="outlined" />
    <InputField {...args} variant="filled" />
    <InputField {...args} variant="ghost" />
  </div>
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,j,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div className="space-y-4">
    <InputField {...args} size="sm" />
    <InputField {...args} size="md" />
    <InputField {...args} size="lg" />
  </div>
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var I,w,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('');
    return <InputField label="Search" value={val} onChange={e => setVal(e.target.value)} clearable />;
  }
}`,...(q=(w=d.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var N,S,F;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'Hello'
  },
  render: args => <div className="space-y-4">
    <InputField {...args} disabled />
    <InputField {...args} invalid errorMessage="Required field" />
    <InputField {...args} passwordToggle type="password" />
  </div>
}`,...(F=(S=o.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const O=["Variants","Sizes","Controlled","States"];export{d as Controlled,i as Sizes,o as States,l as Variants,O as __namedExportsOrder,P as default};
