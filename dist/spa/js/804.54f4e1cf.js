"use strict";(self["webpackChunkoc_front_end"]=self["webpackChunkoc_front_end"]||[]).push([[804],{10804:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ke});var a=l(83673),o=l(62323),i=l(98880);const s={class:"flex items-center col-md-6 col-sm-12 q-pb-md avatar"},n=["src"],d={class:"q-ml-md text-h5 text-weight-medium q-pb-sm q-mt-lg q-ma-none"},r={class:"row client-infos col-md-6 col-sm-12 q-pa-md"},u={class:"column col-12"},c={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},m=(0,a._)("p",null,"Username:",-1),p={class:"text-grey"},h={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},g=(0,a._)("p",null,"Phone:",-1),y={class:"text-grey"},b={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},w=(0,a._)("p",null,"E-mail:",-1),v={class:"text-grey"},f={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},x=(0,a._)("p",null,"User type:",-1),q={class:"text-grey"},_={key:0,class:"col-12 text-h6"},V={class:"flex items-center col-md-6 col-sm-12 q-pb-md avatar"},z=["src"],C={class:"q-ml-md text-h5 text-weight-medium q-pb-sm q-mt-lg q-ma-none"},W={class:"row client-infos col-md-6 col-sm-12 q-pa-md"},k={class:"column col-12"},U={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},Z=(0,a._)("p",null,"Subdomain:",-1),Q={class:"text-grey"},S={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},I=(0,a._)("p",null,"Phone Number:",-1),P={class:"text-grey"},T={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},D=(0,a._)("p",null,"E-mail:",-1),N={class:"text-grey"},A={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},j=(0,a._)("p",null,"Website:",-1),B={class:"text-grey"},E={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},$=(0,a._)("p",null,"Company Size:",-1),H={class:"text-grey"},O={class:"text-body1 text-weight-medium text-left full-width client-info flex q-gutter-sm"},R=(0,a._)("p",null,"Address:",-1),F={class:"text-grey"};function L(e,t,l,L,M,G){const J=(0,a.up)("q-skeleton"),K=(0,a.up)("q-btn"),X=(0,a.up)("q-avatar"),Y=(0,a.up)("q-card"),ee=(0,a.up)("modal"),te=(0,a.up)("q-dialog"),le=(0,a.up)("brandModal"),ae=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(ae,{class:"q-pa-md"},{default:(0,a.w5)((()=>{var l;return[null===e.user?((0,a.wg)(),(0,a.j4)(J,{key:0,class:"custom-skeleton-border",height:"40vh"})):((0,a.wg)(),(0,a.j4)(Y,{key:1,class:"row items-center q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{onClick:t[0]||(t[0]=e=>M.dialogue=!0),class:"absolute-top-right q-mt-xs q-mr-xs",flat:"","text-color":"grey",size:"sm",round:"",unelevated:"",icon:"edit",color:"primary"}),(0,a._)("div",s,[(0,a.Wm)(X,{color:e.user.avatar?"":"primary",size:"120px"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.user.avatar},null,8,n)])),_:1},8,["color"]),(0,a._)("div",null,[(0,a._)("p",d,(0,o.zw)(e.user.name),1)])]),(0,a._)("div",r,[(0,a._)("div",u,[(0,a._)("div",c,[m,(0,a._)("p",p,(0,o.zw)(e.user.username),1)]),(0,a._)("div",h,[g,(0,a._)("p",y,(0,o.zw)(e.user.phoneNumber),1)]),(0,a._)("div",b,[w,(0,a._)("p",v,(0,o.zw)(e.user.email),1)]),(0,a._)("div",f,[x,(0,a._)("p",q,(0,o.zw)(e.user.userType),1)])])])])),_:1})),(0,a.Wm)(te,{seamless:"",position:"right",modelValue:M.dialogue,"onUpdate:modelValue":t[2]||(t[2]=e=>M.dialogue=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{onCloseDialogue:t[1]||(t[1]=e=>{this.getUser(),M.dialogue=!1}),body:e.user},null,8,["body"])])),_:1},8,["modelValue"]),null===(null===(l=this.user)||void 0===l?void 0:l.brand)?((0,a.wg)(),(0,a.j4)(J,{key:2,class:"custom-skeleton-border",height:"40vh"})):(0,a.wy)(((0,a.wg)(),(0,a.j4)(Y,{key:3,class:"row items-center q-my-md q-pa-md"},{default:(0,a.w5)((()=>{var l,i,s,n,d,r,u,c,m,p,h,g,y,b,w,v,f;return["owner"===(null===(l=e.user)||void 0===l?void 0:l.userType)?((0,a.wg)(),(0,a.iD)("div",_,"Brand Info")):(0,a.kq)("",!0),(0,a.Wm)(K,{onClick:t[3]||(t[3]=e=>M.brandDialogue=!0),class:"absolute-top-right q-mt-xs q-mr-xs",flat:"","text-color":"grey",size:"sm",round:"",unelevated:"",icon:"edit",color:"primary"}),(0,a._)("div",V,[(0,a.Wm)(X,{color:null!==(i=e.user)&&void 0!==i&&null!==(s=i.brand)&&void 0!==s&&s.logo?"":"primary",size:"120px"},{default:(0,a.w5)((()=>{var t,l;return[(0,a._)("img",{src:null===(t=e.user)||void 0===t||null===(l=t.brand)||void 0===l?void 0:l.logo},null,8,z)]})),_:1},8,["color"]),(0,a._)("div",null,[(0,a._)("p",C,(0,o.zw)(null===(n=e.user)||void 0===n||null===(d=n.brand)||void 0===d?void 0:d.name),1)])]),(0,a._)("div",W,[(0,a._)("div",k,[(0,a._)("div",U,[Z,(0,a._)("p",Q,(0,o.zw)(null===(r=e.user)||void 0===r||null===(u=r.brand)||void 0===u?void 0:u.subdomain),1)]),(0,a._)("div",S,[I,(0,a._)("p",P,(0,o.zw)(null===(c=e.user)||void 0===c||null===(m=c.brand)||void 0===m?void 0:m.phoneNumber),1)]),(0,a._)("div",T,[D,(0,a._)("p",N,(0,o.zw)(null===(p=e.user)||void 0===p||null===(h=p.brand)||void 0===h?void 0:h.email),1)]),(0,a._)("div",A,[j,(0,a._)("p",B,(0,o.zw)(null===(g=e.user)||void 0===g||null===(y=g.brand)||void 0===y?void 0:y.website),1)]),(0,a._)("div",E,[$,(0,a._)("p",H,(0,o.zw)(null===(b=e.user)||void 0===b||null===(w=b.brand)||void 0===w?void 0:w.companySize),1)]),(0,a._)("div",O,[R,(0,a._)("p",F,(0,o.zw)(null===(v=e.user)||void 0===v||null===(f=v.brand)||void 0===f?void 0:f.address),1)])])])]})),_:1},512)),[[i.F8,"owner"===e.user.userType]]),(0,a.Wm)(te,{seamless:"",position:"right",modelValue:M.brandDialogue,"onUpdate:modelValue":t[5]||(t[5]=e=>M.brandDialogue=e)},{default:(0,a.w5)((()=>{var l;return[(0,a.Wm)(le,{onCloseDialogue:t[4]||(t[4]=e=>{this.getUser(),M.brandDialogue=!1}),body:null===(l=e.user)||void 0===l?void 0:l.brand},null,8,["body"])]})),_:1},8,["modelValue"])]})),_:1})}const M=(0,a.Uk)(" Edit Profile "),G={class:"col-12 flex flex-center q-py-lg tems-center row"};function J(e,t,l,o,i,s){const n=(0,a.up)("q-toolbar-title"),d=(0,a.up)("q-btn"),r=(0,a.up)("q-toolbar"),u=(0,a.up)("q-img"),c=(0,a.up)("q-icon"),m=(0,a.up)("q-badge"),p=(0,a.up)("q-avatar"),h=(0,a.up)("cropableUpload"),g=(0,a.up)("q-input"),y=(0,a.up)("vue-tel-input"),b=(0,a.up)("q-card-section"),w=(0,a.up)("q-card"),v=(0,a.up)("q-layout"),f=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(v,{style:{width:"550px !important"}},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{style:{"max-width":"550px","min-height":"100vh"},flat:"",square:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"bg-grey-3",style:{position:"sticky !important",top:"0","z-index":"15"}},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[M])),_:1}),(0,a.wy)((0,a.Wm)(d,{icon:"close",flat:"",round:"",dense:""},null,512),[[f]])])),_:1}),(0,a.Wm)(b,{class:"q-gutter-sm scroll"},{default:(0,a.w5)((()=>[(0,a._)("div",G,[(0,a.Wm)(p,{clickable:"",color:i.credentials.avatar?"white":"grey",size:"120px",onClick:t[0]||(t[0]=e=>i.show=!i.show),class:"cursor-pointer",style:{border:"0.2px solid grey"}},{default:(0,a.w5)((()=>[i.credentials.avatar?((0,a.wg)(),(0,a.j4)(u,{key:0,round:"",style:{"border-radius":"50% !important"},src:i.credentials.avatar},null,8,["src"])):((0,a.wg)(),(0,a.j4)(c,{key:1,color:"white",name:"person"})),(0,a.Wm)(m,{floating:"",color:"grey"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"white",circle:"",name:"edit",size:"xs"})])),_:1})])),_:1},8,["color"])]),(0,a.Wm)(h,{field:"avatar","lang-type":"en",params:i.imgParams,url:i.imgUrl,value:i.show,headers:i.imgHeaders,modelValue:i.show,"onUpdate:modelValue":t[1]||(t[1]=e=>i.show=e)},null,8,["params","url","value","headers","modelValue"]),(0,a.Wm)(g,{ref:"nameRef",outlined:"",modelValue:i.credentials.name,"onUpdate:modelValue":t[2]||(t[2]=e=>i.credentials.name=e),label:"Name","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type the name"]},null,8,["modelValue","rules"]),(0,a.Wm)(y,{required:"",onCountryChanged:s.countryChange,class:"phone-input",defaultCountry:"iq",customValidate:!1,onOnInput:s.valid,onInput:s.phoneValidate,modelValue:i.phone,"onUpdate:modelValue":t[3]||(t[3]=e=>i.phone=e)},null,8,["onCountryChanged","onOnInput","onInput","modelValue"]),(0,a.Wm)(g,{ref:"passRef",outlined:"",modelValue:i.credentials.password,"onUpdate:modelValue":t[4]||(t[4]=e=>i.credentials.password=e),label:"Password",type:"password","lazy-rules":"",class:"q-mt-lg profile-photo-uploader"},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(r,{class:"bg-grey-3",style:{position:"sticky !important",bottom:"0","z-index":"5"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{loading:i.loading,onClick:s.submit,class:"full-width",color:"primary",label:"Submit","no-caps":""},null,8,["loading","onClick"])])),_:1})])),_:1})}var K=l(93617),X=l(49549),Y=l(30052),ee=l.n(Y),te=l(81022);const le={components:{VueTelInput:X.VueTelInput,cropableUpload:te.Z},props:["body"],data(){return{show:!0,imgUrl:"http://localhost:5050/api/v1/auth/editProfile",imgHeaders:{Authorization:localStorage.getItem("accessToken")},imgDataUrl:null,imgParams:{id:null},phone:"",dialCode:"",loading:!1,credentials:{name:"",username:"",email:"",password:"",department:"",avatar:null}}},methods:{phoneValidate(e){isNaN(Number(e.data))&&(this.phone=this.phone.substring(0,this.phone.length-1))},valid(e,t){t.valid?document.querySelector(".vue-tel-input").removeAttribute("style"):document.querySelector(".vue-tel-input").setAttribute("style","border-color:#cc444b !important;")},countryChange(e){let t=0;this.dialCode="+"+e.dialCode,this.phone&&(this.phone=this.phone.substring(this.dialCode.length,this.phone.length)),0===t&&this.valid("",{valid:!0}),t+=1},...(0,K.nv)("example",["editProfile"]),async submit(){if(this.$refs.nameRef.validate(),!this.$refs.nameRef.hasError){this.loading=!0;let t=new FormData;t.append("name",this.credentials.name),t.append("password",this.credentials.password),t.append("avatar",this.credentials.avatar),t.append("phoneNumber",this.dialCode+this.phone);try{await ee().post("http://localhost:5050/api/v1/auth/editProfile",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}catch(e){console.log(e)}this.$q.notify({type:"positive",message:"User edit successfully",color:"positive",position:"top",timeout:"500"}),this.loading=!1,this.$emit("closeDialogue")}}},async mounted(){this.show=!1,this.credentials.username=this.body.username,this.phone=this.body.phoneNumber,this.credentials.name=this.body.name,this.credentials.email=this.body.email,this.credentials.department=this.body.department}};var ae=l(19214),oe=l(10151),ie=l(39570),se=l(13747),ne=l(2165),de=l(25589),re=l(75096),ue=l(24027),ce=l(24554),me=l(69721),pe=l(64689),he=l(60677),ge=l(7518),ye=l.n(ge);le.render=J;const be=le;ye()(le,"components",{QLayout:ae.Z,QCard:oe.Z,QToolbar:ie.Z,QToolbarTitle:se.Z,QBtn:ne.Z,QCardSection:de.Z,QAvatar:re.Z,QImg:ue.Z,QIcon:ce.Z,QBadge:me.Z,QInput:pe.Z}),ye()(le,"directives",{ClosePopup:he.Z});const we=(0,a.Uk)(" Edit Brand "),ve={class:"col-12 flex flex-center q-py-lg tems-center row"};function fe(e,t,l,o,i,s){const n=(0,a.up)("q-toolbar-title"),d=(0,a.up)("q-btn"),r=(0,a.up)("q-toolbar"),u=(0,a.up)("q-img"),c=(0,a.up)("q-icon"),m=(0,a.up)("q-badge"),p=(0,a.up)("q-avatar"),h=(0,a.up)("cropableUpload"),g=(0,a.up)("q-input"),y=(0,a.up)("vue-tel-input"),b=(0,a.up)("q-card-section"),w=(0,a.up)("q-card"),v=(0,a.up)("q-layout"),f=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(v,{style:{width:"550px !important"}},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{style:{"max-width":"550px","min-height":"100vh"},flat:"",square:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"bg-grey-3",style:{position:"sticky !important",top:"0","z-index":"15"}},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[we])),_:1}),(0,a.wy)((0,a.Wm)(d,{icon:"close",flat:"",round:"",dense:""},null,512),[[f]])])),_:1}),(0,a.Wm)(b,{class:"q-gutter-sm scroll"},{default:(0,a.w5)((()=>[(0,a._)("div",ve,[(0,a.Wm)(p,{clickable:"",color:i.credentials.logo?"white":"grey",size:"120px",onClick:t[0]||(t[0]=e=>i.show=!i.show),class:"cursor-pointer",style:{border:"0.2px solid grey"}},{default:(0,a.w5)((()=>[i.credentials.logo?((0,a.wg)(),(0,a.j4)(u,{key:0,round:"",style:{"border-radius":"50% !important"},src:i.credentials.logo},null,8,["src"])):((0,a.wg)(),(0,a.j4)(c,{key:1,color:"white",name:"person"})),(0,a.Wm)(m,{floating:"",color:"grey"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"white",circle:"",name:"edit",size:"xs"})])),_:1})])),_:1},8,["color"])]),(0,a.Wm)(h,{field:"logo","lang-type":"en",url:i.imgUrl,value:i.show,params:i.imgParams,headers:i.imgHeaders,modelValue:i.show,"onUpdate:modelValue":t[1]||(t[1]=e=>i.show=e)},null,8,["url","value","params","headers","modelValue"]),(0,a.Wm)(g,{outlined:"",modelValue:i.credentials.name,"onUpdate:modelValue":t[2]||(t[2]=e=>i.credentials.name=e),label:"Name","lazy-rules":""},null,8,["modelValue"]),(0,a.Wm)(g,{outlined:"",modelValue:i.credentials.website,"onUpdate:modelValue":t[3]||(t[3]=e=>i.credentials.website=e),label:"Website","lazy-rules":""},null,8,["modelValue"]),(0,a.Wm)(g,{outlined:"",modelValue:i.credentials.address,"onUpdate:modelValue":t[4]||(t[4]=e=>i.credentials.address=e),label:"Address","lazy-rules":""},null,8,["modelValue"]),(0,a.Wm)(g,{outlined:"",modelValue:i.credentials.email,"onUpdate:modelValue":t[5]||(t[5]=e=>i.credentials.email=e),label:"Email","lazy-rules":""},null,8,["modelValue"]),(0,a.Wm)(g,{outlined:"","model-value":"number",modelValue:i.credentials.companySize,"onUpdate:modelValue":t[6]||(t[6]=e=>i.credentials.companySize=e),label:"Company Size"},null,8,["modelValue"]),(0,a.Wm)(g,{outlined:"",modelValue:i.credentials.occupation,"onUpdate:modelValue":t[7]||(t[7]=e=>i.credentials.occupation=e),label:"Occupation"},null,8,["modelValue"]),(0,a.Wm)(y,{required:"",onCountryChanged:s.countryChange,class:"phone-input",defaultCountry:"iq",customValidate:!1,onOnInput:s.valid,onInput:s.phoneValidate,modelValue:i.credentials.phone,"onUpdate:modelValue":t[8]||(t[8]=e=>i.credentials.phone=e)},null,8,["onCountryChanged","onOnInput","onInput","modelValue"])])),_:1})])),_:1}),(0,a.Wm)(r,{class:"bg-grey-3",style:{position:"sticky !important",bottom:"0","z-index":"5"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{loading:i.loading,onClick:s.submit,class:"full-width",color:"primary",label:"Submit","no-caps":""},null,8,["loading","onClick"])])),_:1})])),_:1})}const xe={components:{VueTelInput:X.VueTelInput,cropableUpload:te.Z},props:["body"],data(){return{imgUrl:"http://localhost:5050/api/v1/brands/update",imgHeaders:{Authorization:localStorage.getItem("accessToken")},imgDataUrl:null,imgParams:{id:null},show:!0,phone:"",dialCode:"",loading:!1,subdomain:null,credentials:{phone:null,name:null,email:null,companySize:null,owner:null,address:null,occupation:null,website:null,logo:null}}},computed:{...(0,K.rn)("example",["user"])},events:{},methods:{...(0,K.nv)("example",["getUser"]),phoneValidate(e){isNaN(Number(e.data))&&(this.credentials.phone=this.credentials.phone.substring(0,this.credentials.phone.length-1))},valid(e,t){t.valid?document.querySelector(".vue-tel-input").removeAttribute("style"):document.querySelector(".vue-tel-input").setAttribute("style","border-color:#cc444b !important;")},countryChange(e){let t=0;this.dialCode="+"+e.dialCode,this.credentials.phone&&(this.credentials.phone=this.credentials.phone.substring(this.dialCode.length,this.credentials.phone.length)),0===t&&this.valid("",{valid:!0}),t+=1},async submit(){this.loading=!0;let e=new FormData;e.append("id",this.credentials.id),this.credentials.phone&&e.append("phoneNumber",this.dialCode+this.credentials.phone),this.credentials.name&&e.append("name",this.credentials.name),this.credentials.email&&e.append("email",this.credentials.email),this.credentials.subdomain&&e.append("subdomain",this.credentials.subdomain),this.credentials.companySize&&e.append("companySize",this.credentials.companySize),this.credentials.owner&&e.append("owner",this.credentials.owner),this.credentials.address&&e.append("address",this.credentials.address),this.credentials.occupation&&e.append("occupation",this.credentials.occupation),this.credentials.website&&e.append("website",this.credentials.website);try{await ee().post("http://localhost:5050/api/v1/brands/update",e,{headers:{Authorization:localStorage.getItem("accessToken")}});await this.getUser()}catch(t){console.log(t)}this.$q.notify({type:"positive",message:"Brand edit successfully",color:"positive",position:"top",timeout:"500"}),this.loading=!1,this.$emit("closeDialogue")}},async mounted(){this.show=!1,console.log(this.body),this.imgParams.id=this.body.id,this.credentials.id=this.body.id,this.credentials.username=this.body.username,this.credentials.phone=this.body.phoneNumber,this.credentials.name=this.body.name,this.credentials.logo=this.body.logo,this.credentials.email=this.body.email,this.credentials.subdomain=this.body.subdomain,this.credentials.companySize=this.body.companySize,this.credentials.owner=this.body.owner,this.credentials.address=this.body.address,this.credentials.occupation=this.body.occupation,this.credentials.website=this.body.website}};xe.render=fe;const qe=xe;ye()(xe,"components",{QLayout:ae.Z,QCard:oe.Z,QToolbar:ie.Z,QToolbarTitle:se.Z,QBtn:ne.Z,QCardSection:de.Z,QAvatar:re.Z,QImg:ue.Z,QIcon:ce.Z,QBadge:me.Z,QInput:pe.Z}),ye()(xe,"directives",{ClosePopup:he.Z});var _e=l(61959);const Ve={data(){return{brand:(0,_e.iH)(null),dialogue:!1,brandDialogue:!1,loading:!1}},components:{modal:be,brandModal:qe},computed:{...(0,K.rn)("example",["user"])},methods:{...(0,K.nv)("example",["getUser"])},async mounted(){await this.getUser()}};var ze=l(24379),Ce=l(54103),We=l(46778);Ve.render=L;const ke=Ve;ye()(Ve,"components",{QPage:ze.Z,QSkeleton:Ce.ZP,QCard:oe.Z,QBtn:ne.Z,QAvatar:re.Z,QDialog:We.Z})}}]);