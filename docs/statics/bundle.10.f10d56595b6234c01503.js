(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(e,a,t){var l={"./bash":142,"./bash.js":142,"./css":143,"./css.js":143,"./htmlbars":144,"./htmlbars.js":144,"./javascript":145,"./javascript.js":145,"./scss":146,"./scss.js":146,"./typescript":147,"./typescript.js":147};function c(e){var a=r(e);return t(a)}function r(e){if(!t.o(l,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return l[e]}c.keys=function(){return Object.keys(l)},c.resolve=r,e.exports=c,c.id=156},551:function(e,a,t){"use strict";var l=t(151),c=(t(152),t(153)),r=(t(154),function(){return l.createElement(l.Fragment,{},l.createElement("h1",{id:"field",className:"react-demo-h1"},"Field"),l.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),l.createElement("p",{className:"react-demo-p"},"Rs UForm的核心组件，用于描述表单字段"),l.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),l.createElement(c,{code:"import {Field} from '@uform/react'\n",justCode:!0,lang:"javascript"}),l.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),l.createElement("table",{className:"react-demo-table"},l.createElement("thead",{className:"react-demo-thead"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("th",{align:null,className:"react-demo-th"},"属性名称"),l.createElement("th",{align:null,className:"react-demo-th"},"属性描述"),l.createElement("th",{align:null,className:"react-demo-th"},"属性类型"),l.createElement("th",{align:null,className:"react-demo-th"},"默认值"))),l.createElement("tbody",{className:"react-demo-tbody"},l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"type"),l.createElement("td",{align:null,className:"react-demo-td"},"字段类型"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"name"),l.createElement("td",{align:null,className:"react-demo-td"},"字段名称"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},"{}")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"default"),l.createElement("td",{align:null,className:"react-demo-td"},"默认值"),l.createElement("td",{align:null,className:"react-demo-td"},"any"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"enum"),l.createElement("td",{align:null,className:"react-demo-td"},"枚举值，配置该值在默认情况下会显示Select形态，指定x-component会显示对应的组件形态"),l.createElement("td",{align:null,className:"react-demo-td"},"Array",l.createElement("div",{className:"react-demo-div"},l.createElement("any",{className:"react-demo-any"}))),l.createElement("td",{align:null,className:"react-demo-td"},"[]")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"maxItems"),l.createElement("td",{align:null,className:"react-demo-td"},"最大条目数"),l.createElement("td",{align:null,className:"react-demo-td"},"Number"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"minItems"),l.createElement("td",{align:null,className:"react-demo-td"},"最小条目数"),l.createElement("td",{align:null,className:"react-demo-td"},"Number"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"required"),l.createElement("td",{align:null,className:"react-demo-td"},"字段是否必填"),l.createElement("td",{align:null,className:"react-demo-td"},"Boolean"),l.createElement("td",{align:null,className:"react-demo-td"},"false")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"x-props"),l.createElement("td",{align:null,className:"react-demo-td"},"字段UI组件属性"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},"{}")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"x-rules"),l.createElement("td",{align:null,className:"react-demo-td"},"字段校验规则"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},"Array<String")),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"x-component"),l.createElement("td",{align:null,className:"react-demo-td"},"字段UI组件"),l.createElement("td",{align:null,className:"react-demo-td"},"Object"),l.createElement("td",{align:null,className:"react-demo-td"},'{type:"object",properties:{}}')),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"x-index"),l.createElement("td",{align:null,className:"react-demo-td"},"字段索引顺序"),l.createElement("td",{align:null,className:"react-demo-td"},"Number"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"x-render"),l.createElement("td",{align:null,className:"react-demo-td"},"字段渲染函数"),l.createElement("td",{align:null,className:"react-demo-td"},"Function(fieldProps : FieldRenderProps){}"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"x-effect"),l.createElement("td",{align:null,className:"react-demo-td"},"副作用事件绑定对象"),l.createElement("td",{align:null,className:"react-demo-td"},"Function(dispatch : Function) : {",l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),l.createElement("a",{href:"...arguemtns",className:"react-demo-a"},"eventName"),l.createElement("div",{className:"react-demo-div"},l.createElement("br",{className:"react-demo-br"})),"}"),l.createElement("td",{align:null,className:"react-demo-td"})),l.createElement("tr",{className:"react-demo-tr"},l.createElement("td",{align:null,className:"react-demo-td"},"x-props.editable"),l.createElement("td",{align:null,className:"react-demo-td"},"字段是否可编辑"),l.createElement("td",{align:null,className:"react-demo-td"},"Boolean"),l.createElement("td",{align:null,className:"react-demo-td"},"true")))),l.createElement("h2",{id:"x-rules详解",className:"react-demo-h2"},"x-rules详解"),l.createElement("p",{className:"react-demo-p"},"校验规则，在uform中有几种校验形态："),l.createElement("ul",{className:"react-demo-ul"},l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"字符串正则校验，在x-rules中可以通过传字符串或者字符串数组来描述，下面是正则匹配模式"),l.createElement("ul",{className:"react-demo-ul"},l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"url 匹配url路径")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"email 匹配邮箱")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"ipv6 匹配ipv6格式")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"ipv4 匹配ipv4格式")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"number 匹配number格式")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"integer 匹配整型格式")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"qq 匹配qq格式")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"phone 匹配手机号码")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"idcard 匹配大陆身份证号码")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"taodomain 匹配淘系域名")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"money 匹配货币格式")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"zh 匹配中文字符串")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"date 匹配日期格式")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"zip 匹配邮编")))),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"自定义正则匹配，在x-rules中必须以对象或者数组对象的形式来描述，比如",l.createElement("code",{className:"react-demo-code"},'{pattern:/\\d+/,message:""该字段必须为数字}'))),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"必填型校验，在x-rules中必须以对象或者数组对象的形式来描述，比如",l.createElement("code",{className:"react-demo-code"},'{required:true,message:"该字段必填"}'),",message是选填字段，因为默认错误提示文案里已经有了")),l.createElement("li",{className:"react-demo-li"},l.createElement("p",{className:"react-demo-p"},"自定义校验，在x-rules中可以通过传函数来描述，下面是该函数的类型描述"))),l.createElement(c,{code:"type RuleCallback(\n  value : any,\n  rule : Object,\n  values : Object,\n  name : String) : String | Promise\n\n该回调函数直接return错误文案字符串代表响应错误，如果返回Promise对象，\n代表是异步校验，resolve错误文案的时候代表错误响应，resolve为空的时候代表正确响应\n",justCode:!0,lang:"typescript"}),l.createElement("h2",{id:"x-render详解",className:"react-demo-h2"},"x-render详解"),l.createElement("p",{className:"react-demo-p"},"上面API List中可以看到x-render函数会接收FieldRenderProps类型的参数，下面是它的具体描述"),l.createElement(c,{code:"type FieldRenderProps {\n   name                : String,//字段数据路径\n   path                : Array<String>,//字段数组数据路径\n   value               : any,//字段值\n   errors              : Array<String>,//字段错误消息集合\n   editable            : Boolean | Function,//字段是否可编辑\n   locale              : Object,//国际化文案对象\n   loading             : Boolean,//是否处于加载态\n   schemaPath          : Array<String>,//schema path,考虑到有些schema其实是不占数据路径的，所以这个路径是真实路径\n   getSchema(path) : Object, //根据路径获取schema\n   renderField(childKey : String,reactKey : String | Number) : ReactElement,//根据childKey渲染当前字段的子字段\n   renderComponent(props : Object) : ReactElement,//渲染当前字段的组件，对于x-render来说，可以借助它快速实现渲染包装功能\n   getOrderProperties() : Array<Object>,//根据properties里字段的x-index值求出排序后的properties\n   mutators            : Mutators,//数据操作对象\n   schema              : Object   \n}\n\ntype Mutators {\n   change(value : any),//改变当前字段值\n   dispatch(name : String,payload : any),//触发effect事件\n   errors(errors : String | Array<String>,[...formatValue : String | Number]),//设置当前字段的错误消息\n   push(value : any),//对当前字段的值做push操作\n   pop(),//对当前字段的值做pop操作\n   insert(index : Number,value : any),//对当前字段的值做insert操作\n   remove(name : any),//对当前字段的值做remove操作\n   unshift(value : any),//对当前字段值做unshift操作\n   shift(),//对当前字段值做shift操作\n   move(fromIndex : Number, toIndex : Number)//对当前字段值做move操作\n}\n",justCode:!0,lang:"typescript"}),l.createElement("h2",{id:"x-effect详解",className:"react-demo-h2"},"x-effect详解"),l.createElement("p",{className:"react-demo-p"},"x-effect属于一个非常高级的API，它是为了解决在某些场景，我们的数据联动不是基于字段的onChange事件来做的联动或者依赖onChange事件的其他参数来做的联动，它的解决方案是将dispatch函数给x-effect函数，然后让x-effect函数返回对应的事件处理器，然后再传递给具体的组件，比如："),l.createElement(c,{code:'import {declareFormActions} from \'@uform/react\'\n\nconst actions = declareFormActions()\n\n<SchemaForm effects={($)=>{\n   $(\'selectOptions\',\'aa\')\n    .subscribe(({payload:options})=>{\n      actions.setFieldState(\'bb\',state=>{\n         state.enum = options.extra\n      })\n    })\n }}>\n    <Field \n      type="string" \n      name="aa"\n      enum={[\n        {label:"111",value:"111",extra:["111","222","333"]},\n        {label:"222",value:"222",extra:["111","222","333"]},\n        {label:"333",value:"333",extra:["111","222","333"]}\n      ]}\n      x-effect={dispatch=>{\n        return {\n          onChange(value,options){\n             dispatch("selectOptions",options)\n          }\n        }\n      }}\n    />\n    <Field type="string" name="bb" enum={[]}/>\n</SchemaForm>\n\n这个例子很简单的实现了aa字段的下拉列表中的额外参数赋值到bb的枚举值中，实现了非常规onChange的值联动\n',justCode:!0,lang:"javascript"}),l.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),l.createElement(c,{code:"import React, { Component } from 'react'\nimport ReactDOM from 'react-dom'\nimport SchemaForm, {\n  registerFormField,\n  Field,  \n  connect\n} from '@uform/react'\n\nregisterFormField(\n  'string',\n  connect()(props => <input {...props} value={props.value || ''} />)\n)\n\nReactDOM.render(\n   <SchemaForm defaultValue={{aa:'123'}} onSubmit={values=>console.log(values)}>\n     <Field name=\"aa\" type=\"string\"/>\n     <button htmlType=\"submit\">提交</button>\n   </SchemaForm>\n,document.getElementById('root'))\n",justCode:!0,lang:"javascript"}))});r.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=r}}]);
//# sourceMappingURL=bundle.10.f10d56595b6234c01503.js.map