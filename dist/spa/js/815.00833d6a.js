"use strict";(self["webpackChunkoc_front_end"]=self["webpackChunkoc_front_end"]||[]).push([[815],{9815:(e,s,t)=>{t.r(s),t.d(s,{default:()=>_});var a=t(3673),l=t(8880),n=t(3402),o=t.n(n);const r=e=>((0,a.dD)("data-v-13c9a3a0"),e=e(),(0,a.Cn)(),e),i={class:"flex flex-center full-height"},d=r((()=>(0,a._)("div",{class:"row items-center text-center"},[(0,a._)("div",{class:"col"},[(0,a._)("div",{class:"text-h6"},[(0,a._)("img",{height:"100",width:"100",src:o()})]),(0,a._)("div",{class:"text-subtitle2"},"Log in to access your dashboard")])],-1))),u={class:"q-gutter-md"};function c(e,s,t,n,o,r){const c=(0,a.up)("q-card-section"),p=(0,a.up)("q-input"),m=(0,a.up)("q-btn"),f=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(f,{style:{"min-width":"320px","max-width":"400px"},flat:"",bordered:"",class:"my-card bg-grey-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[d])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(p,{autofocus:"",ref:"nameRef",outlined:"",modelValue:o.credentials.username,"onUpdate:modelValue":s[0]||(s[0]=e=>o.credentials.username=e),label:"Username","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type your username"],onKeyup:(0,l.D2)(r.login,["enter"])},null,8,["modelValue","rules","onKeyup"]),(0,a.Wm)(p,{ref:"passRef",outlined:"",type:"password",modelValue:o.credentials.password,"onUpdate:modelValue":s[1]||(s[1]=e=>o.credentials.password=e),label:"Password","lazy-rules":"",rules:[e=>e.length>7||"Please type your password"],onKeyup:(0,l.D2)(r.login,["enter"])},null,8,["modelValue","rules","onKeyup"]),(0,a._)("div",null,[(0,a.Wm)(m,{loading:o.loading,onClick:r.login,label:"Log in","no-caps":"",type:"reset",color:"primary",unelevated:"",class:"q-ml-sm full-width"},null,8,["loading","onClick"])])])])),_:1})])),_:1})])}var p=t(3617);const m={data(){return{credentials:{username:"",password:""},loading:!1}},methods:{...(0,p.nv)("example",["logIn"]),async login(){if(this.$refs.nameRef.validate(),this.$refs.passRef.validate(),this.$refs.nameRef.hasError||this.$refs.passRef.hasError)return;this.loading=!0;let e=await this.logIn(this.credentials);e?(this.$q.notify({type:"positive",message:"Logged in successfully",color:"positive",position:"top",timeout:"500"}),this.$router.push("/")):this.$q.notify({type:"negative",message:"Wrong Credentials!",color:"negative",position:"top",timeout:"500"}),this.loading=!1}}};var f=t(151),g=t(5589),h=t(4689),y=t(2165),v=t(7518),w=t.n(v);m.render=c,m.__scopeId="data-v-13c9a3a0";const _=m;w()(m,"components",{QCard:f.Z,QCardSection:g.Z,QInput:h.Z,QBtn:y.Z})}}]);