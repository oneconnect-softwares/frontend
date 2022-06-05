"use strict";(self["webpackChunkoc_front_end"]=self["webpackChunkoc_front_end"]||[]).push([[8405],{88405:(e,l,t)=>{t.r(l),t.d(l,{default:()=>ae});var a=t(83673),o=t(98880);const i={class:"full-width flex justify-between items-center header-height-standard q-px-md",style:{"border-bottom":"1px solid lightgrey"}},s=(0,a._)("div",{class:"text-h4"},"CRM",-1),n={class:"flex items-center"},d={class:"flex flex-center bg-secondary q-mr-sm"},r={class:"q-pr-md q-pl-md"};function p(e,l,t,p,u,m){const c=(0,a.up)("q-btn"),w=(0,a.up)("breadcrmps"),f=(0,a.up)("q-tab"),b=(0,a.up)("q-tabs"),g=(0,a.up)("grid"),y=(0,a.up)("tbl"),h=(0,a.up)("q-tab-panel"),_=(0,a.up)("q-tab-panels"),W=(0,a.up)("modal"),k=(0,a.up)("q-dialog"),x=(0,a.up)("q-scroll-area"),q=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(q,{class:"q-py-none q-my-none"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[s,(0,a._)("div",n,[(0,a._)("div",d,[(0,a.Wm)(c,{class:"q-mr-xs",onClick:l[0]||(l[0]=e=>u.table=!0),outline:"",style:{color:"goldenrod"},color:u.table?"primary":"grey",icon:"view_headline"},null,8,["color"]),(0,a.Wm)(c,{onClick:l[1]||(l[1]=e=>u.table=!1),outline:"",style:{color:"goldenrod"},color:u.table?"grey":"primary",icon:"apps"},null,8,["color"])]),(0,a.Wm)(c,{onClick:l[2]||(l[2]=e=>u.dialogue=!0),color:"primary",label:"Add "+p.tab[0].toUpperCase()+p.tab.substr(1,p.tab.length),unelevated:"",rounded:"","no-caps":""},null,8,["label"])])]),(0,a.Wm)(w,{class:"q-pa-md full-width",map:u.crumps},null,8,["map"]),(0,a.Wm)(x,{style:{"max-height":"auto !important","min-height":"auto !important",height:"calc(100vh - 131px)"},class:"q-px-md"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[(0,a.Wm)(b,{bordered:"",modelValue:p.tab,"onUpdate:modelValue":l[3]||(l[3]=e=>p.tab=e),dense:"",class:"text-grey q-mt-md bg-white rounded-borders bordered","active-color":"primary","indicator-color":"primary","no-caps":"",align:"justify"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{name:"client",label:"Clients"}),(0,a.Wm)(f,{name:"lead",label:"Leads"}),(0,a.Wm)(f,{name:"blacklist",label:"Black list"})])),_:1},8,["modelValue"])]),(0,a.Wm)(_,{modelValue:p.tab,"onUpdate:modelValue":l[4]||(l[4]=e=>p.tab=e),animated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"bg-secondary",name:"client"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{type:"client"},null,512),[[o.F8,!u.table]]),(0,a.wy)((0,a.Wm)(y,{type:"client"},null,512),[[o.F8,u.table]])])),_:1}),(0,a.Wm)(h,{name:"lead"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{type:"lead"},null,512),[[o.F8,!u.table]]),(0,a.wy)((0,a.Wm)(y,{type:"lead"},null,512),[[o.F8,u.table]])])),_:1}),(0,a.Wm)(h,{name:"blacklist"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{type:"blacklist"},null,512),[[o.F8,!u.table]]),(0,a.wy)((0,a.Wm)(y,{type:"blacklist"},null,512),[[o.F8,u.table]])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(k,{seamless:"",position:"right",modelValue:u.dialogue,"onUpdate:modelValue":l[6]||(l[6]=e=>u.dialogue=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{onCloseDialogue:l[5]||(l[5]=e=>u.dialogue=!1),type:p.tab,actionType:"Add",id:{}},null,8,["type"])])),_:1},8,["modelValue"])])),_:1})])),_:1})}var u=t(46303),m=t(62323);const c=["src"],w={style:{"font-size":"20px"}};function f(e,l,t,o,i,s){const n=(0,a.up)("q-avatar"),d=(0,a.up)("router-link"),r=(0,a.up)("q-td"),p=(0,a.up)("q-btn"),u=(0,a.up)("q-icon"),f=(0,a.up)("q-item-section"),b=(0,a.up)("q-item"),g=(0,a.up)("q-separator"),y=(0,a.up)("q-list"),h=(0,a.up)("q-menu"),_=(0,a.up)("q-tr"),W=(0,a.up)("q-table"),k=(0,a.up)("modal"),x=(0,a.up)("q-dialog"),q=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(W,{rows:s.data,columns:i.columns,"row-key":"id",loading:i.loading,flat:"",class:"bg-secondary q-pa-md"},{body:(0,a.w5)((l=>[(0,a.Wm)(_,{class:(0,m.C_)(l.rowIndex%2!==0&&"bg-white"),props:l},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{key:"logo",props:l},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{to:`/client/${l.row.id}`},{default:(0,a.w5)((()=>[l.row.logo?((0,a.wg)(),(0,a.j4)(n,{key:0,size:"30px"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:l.row.logo},null,8,c)])),_:2},1024)):((0,a.wg)(),(0,a.j4)(n,{key:1,size:"30px","font-size":"20px",color:"grey","text-color":"white",icon:"person"}))])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,a.Wm)(r,{class:"flex items-center justify-start",key:"name",props:l},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"text-black",to:`/client/${l.row.id}`},{default:(0,a.w5)((()=>[(0,a._)("p",w,(0,m.zw)(l.row.name),1)])),_:2},1032,["to"])])),_:2},1032,["props"]),(0,a.Wm)(r,{key:"phoneNumber1",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(l.row.phoneNumber1),1)])),_:2},1032,["props"]),(0,a.Wm)(r,{key:"businessType",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(l.row.businessType),1)])),_:2},1032,["props"]),(0,a.Wm)(r,{key:"email",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(l.row.email),1)])),_:2},1032,["props"]),(0,a.Wm)(r,{key:"website",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(l.row.website),1)])),_:2},1032,["props"]),(0,a.Wm)(r,{key:"address",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(l.row.address),1)])),_:2},1032,["props"]),(0,a.Wm)(r,{key:"rate",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(l.row.rate),1)])),_:2},1032,["props"]),(0,a.Wm)(r,{key:"zipCode",props:l},{default:(0,a.w5)((()=>[(0,a.Uk)((0,m.zw)(l.row.zipCode),1)])),_:2},1032,["props"]),(0,a.Wm)(r,{class:"row flex text-center",key:"zipCode",props:l},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{to:`/client/${l.row.id}`},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{dense:"","text-color":"dark",round:"",flat:"",icon:"visibility"})])),_:2},1032,["to"]),(0,a.Wm)(p,{dense:"",round:"",flat:"",icon:"more_vert"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{"transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{style:{"min-width":"75px"}},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(b,{onClick:t=>e.deleteClient({id:l.row.id}),style:{},clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"delete",color:"negative",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[q]]),(0,a.Wm)(g),(0,a.wy)((0,a.Wm)(b,{onClick:e=>s.editClient(l.row),clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:"edit",color:"warning",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[q]])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:2},1032,["class","props"])])),_:1},8,["rows","columns","loading"]),(0,a.Wm)(x,{onCloseDialogue:l[0]||(l[0]=e=>i.dialogue=!1),inProfile:!1,seamless:"",position:"right",modelValue:i.dialogue,"onUpdate:modelValue":l[1]||(l[1]=e=>i.dialogue=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{type:t.type,body:i.body,id:i.id,actionType:"Edit"},null,8,["type","body","id"])])),_:1},8,["modelValue"])])}var b=t(93617),g=t(99834);const y={props:["type"],computed:{...(0,b.rn)("crmStore",["clients","leads","blacklist"]),data(){return"client"===this.type?this.clients:"lead"===this.type?this.leads:this.blacklist}},data(){return{body:null,id:null,dialogue:!1,loading:!1,columns:[{name:"logo",required:!0,label:"#",align:"center",field:e=>e.name,format:e=>`${e}`},{name:"name",required:!0,label:"Company/Individual",align:"left",field:e=>e.name,format:e=>`${e}`},{name:"phoneNumber1",align:"left",label:"Phone number 1",field:"phoneNumber1"},{name:"businessType",label:"Business type",align:"left",field:"businessType"},{name:"email",label:"E-mail",align:"left",field:"email"},{name:"website",label:"Website",align:"left",field:"website"},{name:"address",label:"Address",align:"left",field:"address"},{name:"rate",label:"Rate",align:"left",field:"rate"},{name:"zipCode",label:"Zip code",align:"left",field:"zipCode"},{name:"actions",label:"Actions",align:"left",field:"actions"}]}},components:{modal:g.Z},methods:{...(0,b.nv)("crmStore",["getClients","deleteClient"]),editClient(e){if(!0===this.dialogue)return this.dialogue=!1,void setTimeout((()=>{this.body=e,this.dialogue=!0}),200);this.body=e,this.dialogue=!0},rowColor(e){if(e.rowIndex%2!==0||0!==e.rowIndex)return"background: #fff;"}},async mounted(){this.loading=!0,await this.getClients(this.type),this.loading=!1}};var h=t(57678),_=t(18186),W=t(83884),k=t(75096),x=t(2165),q=t(20811),C=t(27011),Z=t(83414),v=t(52035),Q=t(24554),z=t(65869),T=t(62025),V=t(64689),U=t(46778),I=t(60677),S=t(7518),P=t.n(S);y.render=f;const j=y;P()(y,"components",{QTable:h.Z,QTr:_.Z,QTd:W.Z,QAvatar:k.Z,QBtn:x.Z,QMenu:q.Z,QList:C.Z,QItem:Z.Z,QItemSection:v.Z,QIcon:Q.Z,QSeparator:z.Z,QSpace:T.Z,QInput:V.Z,QDialog:U.Z}),P()(y,"directives",{ClosePopup:I.Z});var D=t(61959);const A={class:"row items-center q-pa-sm"},$={class:"flex column flex-center"},F=["src"],M=["innerHTML"],N={class:"text-span text-grey"},B=(0,a.Uk)("View Profile");function L(e,l,t,o,i,s){const n=(0,a.up)("q-icon"),d=(0,a.up)("q-item-section"),r=(0,a.up)("q-item"),p=(0,a.up)("q-separator"),u=(0,a.up)("q-list"),c=(0,a.up)("q-menu"),w=(0,a.up)("q-btn"),f=(0,a.up)("q-avatar"),b=(0,a.up)("router-link"),g=(0,a.up)("q-card-section"),y=(0,a.up)("q-card-actions"),h=(0,a.up)("q-card"),_=(0,a.up)("modal"),W=(0,a.up)("q-dialog"),k=(0,a.up)("q-page"),x=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(k,{class:"q-pt-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",A,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.data,((l,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-sm",key:t},[(0,a.Wm)(h,{flat:"",bordered:"",style:{position:"relative !important"},class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{style:{"z-index":"2"},class:"absolute-top-right",dense:"",round:"",flat:"",icon:"more_vert"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{"transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{style:{"min-width":"75px"}},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(r,{onClick:t=>e.deleteClient({id:l.id}),style:{},clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{name:"delete",color:"negative",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[x]]),(0,a.Wm)(p),(0,a.wy)((0,a.Wm)(r,{onClick:e=>s.editClient(l),clickable:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{name:"edit",color:"warning",size:"xs"})])),_:1})])),_:2},1032,["onClick"]),[[x]])])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(g,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",$,[(0,a.Wm)(b,{to:`/client/${l.id}`},{default:(0,a.w5)((()=>[l.logo?((0,a.wg)(),(0,a.j4)(f,{key:0,size:"100px","font-size":"52px"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:l.logo},null,8,F)])),_:2},1024)):((0,a.wg)(),(0,a.j4)(f,{key:1,size:"100px","font-size":"52px",color:"grey","text-color":"white",icon:"person"}))])),_:2},1032,["to"]),(0,a.Wm)(b,{class:"q-py-sm row flex wrapword",style:{"min-width":"80% !important","white-space":"nowrap",overflow:"hidden !important","text-overflow":"ellipsis"},to:`/client/${l.id}`},{default:(0,a.w5)((()=>[(0,a._)("p",{class:"text-black text-h6 text-center col-12 wrapword",innerHTML:l.name,style:{width:"10vw"}},null,8,M)])),_:2},1032,["to"]),(0,a._)("p",N,(0,m.zw)(l.businessType),1)])])),_:2},1024),(0,a.Wm)(y,{align:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{to:`/client/${l.id}`},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{color:"primary",class:"q-mb-md",outline:"","no-caps":""},{default:(0,a.w5)((()=>[B])),_:1})])),_:2},1032,["to"])])),_:2},1024)])),_:2},1024)])))),128))]),(0,a.Wm)(W,{seamless:"",position:"right",modelValue:i.dialogue,"onUpdate:modelValue":l[1]||(l[1]=e=>i.dialogue=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{onCloseDialogue:l[0]||(l[0]=e=>i.dialogue=!1),type:t.type,inProfile:!1,body:i.body,actionType:"Edit",id:i.id},null,8,["type","body","id"])])),_:1},8,["modelValue"])])),_:1})}const H={components:{modal:g.Z},props:["type"],computed:{...(0,b.rn)("crmStore",["clients","leads","blacklist"]),data(){return"client"===this.type?this.clients:"lead"===this.type?this.leads:this.blacklist}},data(){return{loading:!1,dialogue:!1,id:"",body:null,options:[]}},methods:{...(0,b.nv)("crmStore",["getClients","deleteClient"]),editClient(e){if(!0===this.dialogue)return this.dialogue=!1,void setTimeout((()=>{this.body=e,this.dialogue=!0}),200);this.body=e,this.dialogue=!0},getUserOptions(e){let l=[],t=[];this.options=[],setTimeout((()=>{if(e){for(let a=0;a<this.users.length;a++){for(let l=0;l<e.members.length;l++)Number(e.members[l].memberId)===Number(this.users[a].id)&&t.push({id:this.users[a].id,label:this.users[l].name});l.push({id:this.users[a].id,label:this.users[a].name})}this.options=l.filter((({id:e})=>!t.some((({id:l})=>l===e))))}}),200)}},async mounted(){this.loading=!0,await this.getClients(this.type),this.loading=!1}};var E=t(24379),R=t(10151),O=t(25589),K=t(99367);H.render=L,H.__scopeId="data-v-3752ca29";const Y=H;P()(H,"components",{QPage:E.Z,QCard:R.Z,QBtn:x.Z,QMenu:q.Z,QList:C.Z,QItem:Z.Z,QItemSection:v.Z,QIcon:Q.Z,QSeparator:z.Z,QCardSection:O.Z,QAvatar:k.Z,QCardActions:K.Z,QDialog:U.Z}),P()(H,"directives",{ClosePopup:I.Z});const G={components:{breadcrmps:u.Z,tbl:j,grid:Y,modal:g.Z},data(){return{table:!1,crumps:[{id:1,name:"OneConnect",icon:"home",path:"/"},{id:2,name:"CRM",icon:"groups",path:"/crm"}],dialogue:!1}},setup(){return{tab:(0,D.iH)("client")}}};var J=t(47704),X=t(57547),ee=t(3269),le=t(5906),te=t(86602);G.render=p;const ae=G;P()(G,"components",{QPage:E.Z,QBtn:x.Z,QScrollArea:J.Z,QTabs:X.Z,QTab:ee.Z,QTabPanels:le.Z,QTabPanel:te.Z,QDialog:U.Z})}}]);