"use strict";(self["webpackChunkoc_front_end"]=self["webpackChunkoc_front_end"]||[]).push([[8093],{98093:(e,l,a)=>{a.r(l),a.d(l,{default:()=>I});var o=a(83673),i=a(62323);const t=e=>((0,o.dD)("data-v-e7c4a6fe"),e=e(),(0,o.Cn)(),e),n={class:"flex justify-between items-center"},d=t((()=>(0,o._)("p",{class:"text-h4"},"Suppliers",-1))),s={style:{"font-size":"20px"}};function r(e,l,a,t,r,p){const u=(0,o.up)("breadcrumps"),m=(0,o.up)("q-btn"),c=(0,o.up)("q-td"),f=(0,o.up)("q-rating"),w=(0,o.up)("q-icon"),b=(0,o.up)("q-item-section"),g=(0,o.up)("q-item"),y=(0,o.up)("q-separator"),_=(0,o.up)("q-list"),k=(0,o.up)("q-menu"),W=(0,o.up)("q-tr"),h=(0,o.up)("q-table"),C=(0,o.up)("modal"),Z=(0,o.up)("q-dialog"),q=(0,o.up)("q-page"),x=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(q,{class:"q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o._)("div",null,[d,(0,o.Wm)(u,{map:r.crumps},null,8,["map"])]),(0,o.Wm)(m,{onClick:l[0]||(l[0]=e=>{r.body=null,r.action="Add",r.dialogue=!0}),color:"primary",label:"Create Record",unelevated:"",rounded:"","no-caps":""})]),(0,o.Wm)(h,{rows:e.suppliers,columns:r.columns,"row-key":"id",loading:r.loading,flat:"",class:"bg-secondary q-pt-md"},{body:(0,o.w5)((l=>[(0,o.Wm)(W,{class:(0,i.C_)(l.rowIndex%2!==0&&"bg-white"),props:l},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{class:"flex items-center justify-start",key:"name",props:l},{default:(0,o.w5)((()=>[(0,o._)("p",s,(0,i.zw)(l.row.name),1)])),_:2},1032,["props"]),(0,o.Wm)(c,{key:"phoneNumbers",props:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(l.row.phoneNumbers),1)])),_:2},1032,["props"]),(0,o.Wm)(c,{key:"email",props:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(l.row.email),1)])),_:2},1032,["props"]),(0,o.Wm)(c,{key:"website",props:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(l.row.website),1)])),_:2},1032,["props"]),(0,o.Wm)(c,{key:"address",props:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(l.row.address),1)])),_:2},1032,["props"]),(0,o.Wm)(c,{key:"rate",class:"fit",props:l},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{style:{"min-width":"73px"},modelValue:l.row.rate,"onUpdate:modelValue":e=>l.row.rate=e,max:5,color:"primary",readonly:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["props"]),(0,o.Wm)(c,{key:"zipCode",props:l},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(l.row.zipCode),1)])),_:2},1032,["props"]),(0,o.Wm)(c,{key:"zipCode",props:l},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{dense:"",round:"",flat:"",icon:"more_vert"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{"transition-show":"scale","transition-hide":"scale"},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{style:{"min-width":"75px"}},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(g,{onClick:a=>e.deleteSupplier({id:l.row.id}),style:{},clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"delete",color:"negative",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[x]]),(0,o.Wm)(y),(0,o.wy)((0,o.Wm)(g,{onClick:e=>{r.body=l.row,r.action="Edit",r.dialogue=!0},clickable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"edit",color:"warning",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[x]])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["rows","columns","loading"]),(0,o.Wm)(Z,{onCloseDialogue:l[2]||(l[2]=e=>r.dialogue=!1),inProfile:!1,seamless:"",position:"right",modelValue:r.dialogue,"onUpdate:modelValue":l[3]||(l[3]=e=>r.dialogue=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{id:r.id,onCloseDialogue:l[1]||(l[1]=e=>r.dialogue=!1),actionType:r.action,body:r.body},null,8,["id","actionType","body"])])),_:1},8,["modelValue"])])),_:1})}var p=a(93617),u=a(14093),m=a(46303);const c={computed:{...(0,p.rn)("financeStore",["suppliers"])},data(){return{id:null,dialogue:!1,loading:!1,body:null,action:"",crumps:[{id:1,name:"OneConnect",icon:"home",path:"/"},{id:2,name:"Suppliers",icon:"badge",path:"/finance/suppliers"}],columns:[{name:"name",required:!0,label:"Company/Individual",align:"left",field:e=>e.name,format:e=>`${e}`},{name:"phoneNumbers",align:"left",label:"Phone number",field:"phoneNumbers"},{name:"email",label:"E-mail",align:"left",field:"email"},{name:"website",label:"Website",align:"left",field:"website"},{name:"address",label:"Address",align:"left",field:"address"},{name:"rate",label:"Rate",align:"left",field:"rate"},{name:"zipCode",label:"Zip code",align:"left",field:"zipCode"},{name:"actions",label:"Actions",align:"left",field:"actions"}]}},components:{modal:u.Z,breadcrumps:m.Z},methods:{...(0,p.nv)("financeStore",["getSuppliers","updateSupplier","deleteSupplier"]),editClient(e){this.id=e,this.dialogue=!0},rowColor(e){if(e.rowIndex%2!==0||0!==e.rowIndex)return"background: #fff;"}},async mounted(){this.loading=!0,await this.getSuppliers(),this.loading=!1}};var f=a(24379),w=a(2165),b=a(57678),g=a(18186),y=a(83884),_=a(98833),k=a(20811),W=a(27011),h=a(83414),C=a(52035),Z=a(24554),q=a(65869),x=a(46778),Q=a(75096),v=a(60677),z=a(7518),S=a.n(z);c.render=r,c.__scopeId="data-v-e7c4a6fe";const I=c;S()(c,"components",{QPage:f.Z,QBtn:w.Z,QTable:b.Z,QTr:g.Z,QTd:y.Z,QRating:_.Z,QMenu:k.Z,QList:W.Z,QItem:h.Z,QItemSection:C.Z,QIcon:Z.Z,QSeparator:q.Z,QDialog:x.Z,QAvatar:Q.Z}),S()(c,"directives",{ClosePopup:v.Z})}}]);