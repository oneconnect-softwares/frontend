"use strict";(self["webpackChunkoc_front_end"]=self["webpackChunkoc_front_end"]||[]).push([[715],{3715:(e,t,o)=>{o.r(t),o.d(t,{default:()=>K});o(246);var a=o(3673),i=o(2323),n=o(8880);const s={class:"flex justify-between items-center"},l=(0,a._)("p",{class:"text-h4"},"Category",-1),r={style:{"font-size":"15px",margin:"0 !important"}},d={class:"flex"},p={key:0,class:"text-h6"},c={key:0},u={key:0},m=["onClick"],g={key:1,class:"q-ml-md"};function b(e,t,o,b,y,f){const w=(0,a.up)("breadcrumps"),h=(0,a.up)("q-btn"),C=(0,a.up)("q-td"),x=(0,a.up)("q-icon"),k=(0,a.up)("q-item-section"),_=(0,a.up)("q-item"),q=(0,a.up)("q-separator"),W=(0,a.up)("q-list"),S=(0,a.up)("q-menu"),v=(0,a.up)("q-tr"),z=(0,a.up)("q-space"),Z=(0,a.up)("q-input"),Q=(0,a.up)("q-popup-proxy"),T=(0,a.up)("q-spinner-tail"),V=(0,a.up)("q-table"),I=(0,a.up)("modal"),$=(0,a.up)("q-dialog"),D=(0,a.up)("q-page"),L=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(D,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a._)("div",null,[l,(0,a.Wm)(w,{map:y.crumps},null,8,["map"])]),(0,a.Wm)(h,{onClick:t[0]||(t[0]=e=>{y.action="Add",y.prompt=!0}),color:"primary",label:"Create Record",unelevated:"",rounded:"","no-caps":""})]),(0,a.Wm)(V,{rows:e.categories,columns:y.columns,"row-key":"id",loading:y.loading,flat:"",class:"bg-secondary q-pt-md"},{body:(0,a.w5)((o=>[(0,a.Wm)(v,{class:(0,i.C_)(o.rowIndex%2!==0&&"bg-white"),props:o},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{"auto-width":""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{size:"sm",color:"primary",round:"",dense:"",onClick:e=>o.expand=!o.expand,icon:o.expand?"remove":"add"},null,8,["onClick","icon"])])),_:2},1024),(0,a.Wm)(C,{key:"name",props:o},{default:(0,a.w5)((()=>[(0,a._)("p",r,(0,i.zw)(o.row.name),1)])),_:2},1032,["props"]),(0,a.Wm)(C,{key:"description",innerHTML:o.row.description,props:o},null,8,["innerHTML","props"]),(0,a.Wm)(C,{key:"actions",props:o},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{style:{"z-index":"10"},dense:"",round:"",flat:"",icon:"more_vert"},{default:(0,a.w5)((()=>[(0,a.Wm)(S,{"transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{style:{"min-width":"75px"}},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(_,{onClick:t=>e.deleteCategory({id:o.row.id}),style:{},clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{name:"delete",color:"negative",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[L]]),(0,a.Wm)(q),(0,a.wy)((0,a.Wm)(_,{onClick:e=>f.edit(o.row),clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{name:"edit",color:"warning",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[L]])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:2},1032,["class","props"]),(0,a.wy)((0,a.Wm)(v,{props:o},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{colspan:"100%"},{default:(0,a.w5)((()=>[(0,a._)("div",d,[0!==o.row.expenseSubCategories.length?((0,a.wg)(),(0,a.iD)("p",p,"Sub categories")):(0,a.kq)("",!0),(0,a.Wm)(z),(0,a.Wm)(h,{color:"primary",icon:"add","no-caps":"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{breakpoint:0,class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{modelValue:y.sub,"onUpdate:modelValue":t[1]||(t[1]=e=>y.sub=e)},null,8,["modelValue"]),(0,a.wy)((0,a.Wm)(h,{size:"sm","no-caps":"",label:"Submit",disable:""===y.sub,flat:"",onClick:e=>f.addSubCateg(o.row.id),color:"primary",class:"q-mt-sm"},null,8,["disable","onClick"]),[[L]])])),_:2},1024)])),_:2},1024)]),0===o.row.expenseSubCategories.length?((0,a.wg)(),(0,a.iD)("div",c,"No sub-categories found.")):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.row.expenseSubCategories,((n,s)=>((0,a.wg)(),(0,a.iD)("div",{key:s,class:"flex items-center"},[(0,a.Wm)(h,{icon:"delete",onClick:t=>e.deleteSubCategory({id:Number(o.row.expenseSubCategories[s].id)}),color:"negative",flat:"",size:"sm"},null,8,["onClick"]),y.i===s?((0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(T,{color:"primary",size:"2em"})])):((0,a.wg)(),(0,a.iD)("div",{key:1,onClick:e=>{y.subs=o.row.expenseSubCategories[s].name},class:"text-left"},[(0,a.Uk)((0,i.zw)(s+1)+"-"+(0,i.zw)(o.row.expenseSubCategories[s].name)+" ",1),(0,a.Wm)(Q,{breakpoint:0,class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{modelValue:y.subs,"onUpdate:modelValue":t[2]||(t[2]=e=>y.subs=e)},null,8,["modelValue"]),(0,a.wy)((0,a.Wm)(h,{size:"sm",label:"Submit",disable:y.subs===o.row.expenseSubCategories[s].name,"no-caps":"",flat:"",onClick:e=>{f.editSubCateg(o.row.expenseSubCategories[s].id,o.row.id),y.i=s},color:"primary",class:"q-mt-sm"},null,8,["disable","onClick"]),[[L]])])),_:2},1024)],8,m))])))),128)),y.subLoading?((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(T,{color:"primary",size:"2em"})])):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1032,["props"]),[[n.F8,o.expand]])])),_:1},8,["rows","columns","loading"]),(0,a.Wm)($,{seamless:"",position:"right",modelValue:y.prompt,"onUpdate:modelValue":t[4]||(t[4]=e=>y.prompt=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{onCloseDialogue:t[3]||(t[3]=t=>{y.prompt=!1,e.getCategories()}),actionType:y.action,body:y.body},null,8,["actionType","body"])])),_:1},8,["modelValue"])])),_:1})}var y=o(3617);function f(e,t,o,n,s,l){const r=(0,a.up)("q-toolbar-title"),d=(0,a.up)("q-btn"),p=(0,a.up)("q-toolbar"),c=(0,a.up)("q-input"),u=(0,a.up)("q-editor"),m=(0,a.up)("q-card-section"),g=(0,a.up)("q-card"),b=(0,a.up)("q-layout"),y=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(b,{style:{width:"550px !important"}},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{style:{"max-width":"550px","min-height":"100vh"},flat:"",square:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"bg-grey-3",style:{position:"sticky !important",top:"0","z-index":"15"}},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.actionType+" ")+"Tax ",1)])),_:1}),(0,a.wy)((0,a.Wm)(d,{icon:"close",flat:"",round:"",dense:""},null,512),[[y]])])),_:1}),(0,a.Wm)(m,{class:"q-gutter-md scroll"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{ref:"nameRef",outlined:"",modelValue:s.expenseCategory.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.expenseCategory.name=e),label:"Name","lazy-rules":"",rules:[e=>e&&e.length>0||"Please write the name"]},null,8,["modelValue","rules"]),(0,a.Wm)(u,{modelValue:s.expenseCategory.description,"onUpdate:modelValue":t[1]||(t[1]=e=>s.expenseCategory.description=e),dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["modelValue","dense","toolbar"])])),_:1})])),_:1}),(0,a.Wm)(p,{class:"bg-grey-3",style:{position:"sticky !important",bottom:"0","z-index":"5"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{loading:s.loading,onClick:l.submit,label:"Submit","no-caps":"",type:"reset",color:"primary",unelevated:"",class:"full-width"},null,8,["loading","onClick"])])),_:1})])),_:1})}var w=o(52),h=o.n(w);const C={props:["actionType","body"],data(){return{expenseCategory:{name:"",description:"Description"},loading:!1}},methods:{async submit(){this.$refs.nameRef.validate(),this.$refs.nameRef.hasError||(this.loading=!0,"Add"===this.actionType?await this.create():await this.update(),this.loading=!1,this.$emit("closeDialogue"))},async create(){await h().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenseCategories/create",this.expenseCategory,{headers:{Authorization:localStorage.getItem("accessToken")}});this.loading=!1,this.$q.notify({type:"positive",message:"Tax created",color:"positive",position:"top",timeout:"500"})},async update(){await h().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenseCategories/update",{...this.expenseCategory,id:this.body.id},{headers:{Authorization:localStorage.getItem("accessToken")}});this.loading=!1,this.$q.notify({type:"positive",message:"Tax updated",color:"positive",position:"top",timeout:"500"})}},async mounted(){"Edit"===this.actionType&&(this.expenseCategory.name=this.body.name,this.expenseCategory.description=this.body.description)}};var x=o(9214),k=o(151),_=o(9570),q=o(3747),W=o(2165),S=o(5589),v=o(4689),z=o(9989),Z=o(677),Q=o(7518),T=o.n(Q);C.render=f,C.__scopeId="data-v-243acfe9";const V=C;T()(C,"components",{QLayout:x.Z,QCard:k.Z,QToolbar:_.Z,QToolbarTitle:q.Z,QBtn:W.Z,QCardSection:S.Z,QInput:v.Z,QEditor:z.Z}),T()(C,"directives",{ClosePopup:Z.Z});var I=o(6303);const $={data(){return{prompt:!1,loading:!1,subLoading:!1,subs:"",sub:"",i:null,action:"",body:{},crumps:[{id:1,name:"OneConnect",icon:"home",path:"/"},{id:2,name:"Category",icon:"category",path:"/finance/categories"}],columns:[{name:"#",align:"center",label:"#",field:"#"},{name:"name",align:"left",label:"Name",field:"name"},{name:"description",align:"left",label:"Description",field:"description"},{name:"actions",align:"left",label:"Actions",field:"actions"}]}},components:{breadcrumps:I.Z,modal:V},computed:{...(0,y.rn)("financeStore",["categories"])},methods:{...(0,y.nv)("financeStore",["getCategories","addSubCategory","deleteSubCategory","deleteSubCategory","editSubCategory","deleteCategory"]),rowColor(e){if(e.rowIndex%2!==0)return"background: #fff;"},async editSubCateg(e,t){await this.editSubCategory({id:e,expenseCategoryId:t,name:this.subs}),this.i=null},async addSubCateg(e){this.subLoading=!0,await this.addSubCategory({expenseCategoryId:e,name:this.sub}),this.subLoading=!1},edit(e){this.body=e,this.action="Edit",this.prompt=!0}},async mounted(){await this.getCategories()}};var D=o(4379),L=o(1277),A=o(8186),U=o(3884),N=o(811),P=o(7011),R=o(3414),j=o(2035),E=o(4554),M=o(5869),B=o(2025),F=o(3944),H=o(682),G=o(6778);$.render=b;const K=$;T()($,"components",{QPage:D.Z,QBtn:W.Z,QTable:L.Z,QTr:A.Z,QTd:U.Z,QMenu:N.Z,QList:P.Z,QItem:R.Z,QItemSection:j.Z,QIcon:E.Z,QSeparator:M.Z,QSpace:B.Z,QPopupProxy:F.Z,QInput:v.Z,QSpinnerTail:H.Z,QDialog:G.Z}),T()($,"directives",{ClosePopup:Z.Z})}}]);