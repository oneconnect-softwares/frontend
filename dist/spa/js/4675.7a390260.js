"use strict";(self["webpackChunkoc_front_end"]=self["webpackChunkoc_front_end"]||[]).push([[4675],{54675:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});n(10071);var o=n(83673),s=n(98880),l=n(93402),a=n.n(l);const i=e=>((0,o.dD)("data-v-59b774ac"),e=e(),(0,o.Cn)(),e),r={class:"flex flex-center full-height"},u=i((()=>(0,o._)("div",{class:"row items-center text-center"},[(0,o._)("div",{class:"col"},[(0,o._)("div",{class:"text-h6"},[(0,o._)("img",{height:"100",width:"100",src:a()})]),(0,o._)("div",{class:"text-subtitle2"},"Log in to access your dashboard")])],-1))),d={class:"q-gutter-md"},c=i((()=>(0,o._)("div",{id:"google-signin-button"},null,-1))),g={class:"signup-buttons"},p={class:"text-center"},h=(0,o.Uk)("You don`t have an account?"),m=(0,o.Uk)(" Sign up");function f(e,t,n,l,a,i){const f=(0,o.up)("q-card-section"),v=(0,o.up)("q-input"),w=(0,o.up)("q-btn"),y=(0,o.up)("router-link"),_=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(_,{style:{"min-width":"320px","max-width":"400px"},flat:"",bordered:"",class:"my-card bg-grey-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(v,{autofocus:"",ref:"nameRef",outlined:"",modelValue:a.credentials.username,"onUpdate:modelValue":t[0]||(t[0]=e=>a.credentials.username=e),label:"Username","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type your username"],onKeyup:(0,s.D2)(i.login,["enter"])},null,8,["modelValue","rules","onKeyup"]),(0,o.Wm)(v,{ref:"passRef",outlined:"",type:"password",modelValue:a.credentials.password,"onUpdate:modelValue":t[1]||(t[1]=e=>a.credentials.password=e),label:"Password","lazy-rules":"",rules:[e=>e.length>7||"Please type your password"],onKeyup:(0,s.D2)(i.login,["enter"])},null,8,["modelValue","rules","onKeyup"]),(0,o._)("div",null,[(0,o.Wm)(w,{loading:a.loading,onClick:i.login,label:"Log in","no-caps":"",type:"reset",color:"primary",unelevated:"",class:"q-ml-sm full-width"},null,8,["loading","onClick"])])])])),_:1}),c,(0,o._)("div",g,[(0,o._)("button",{onClick:t[2]||(t[2]=(...t)=>e.googleLogIn&&e.googleLogIn(...t))}," Log In with Google ")]),(0,o._)("p",p,[h,(0,o.Wm)(y,{to:"/signup",style:{color:"#1976D2"}},{default:(0,o.w5)((()=>[m])),_:1})])])),_:1})])}var v=n(93617);const w={data(){return{gapi:window.gapi,credentials:{username:"",password:""},loading:!1}},computed:{...(0,v.rn)("auth",["isLoggedIn"])},methods:{onSignIn(){const e=this.gapi.auth;console.log("google api oauth: ",e)},...(0,v.nv)("auth",["googleLogIn"]),...(0,v.nv)("example",["logIn"]),async login(){if(this.$refs.nameRef.validate(),this.$refs.passRef.validate(),this.$refs.nameRef.hasError||this.$refs.passRef.hasError)return;this.loading=!0;let e=await this.logIn(this.credentials);e?(this.$q.notify({type:"positive",message:"Logged in successfully",color:"positive",position:"top",timeout:"500"}),this.$router.push("/")):this.$q.notify({type:"negative",message:"Wrong Credentials!",color:"negative",position:"top",timeout:"500"}),this.loading=!1}},mounted(){this.gapi=window.gapi,this.onSignIn()}};var y=n(10151),_=n(25589),b=n(64689),I=n(2165),k=n(7518),x=n.n(k);w.render=f,w.__scopeId="data-v-59b774ac";const C=w;x()(w,"components",{QCard:y.Z,QCardSection:_.Z,QInput:b.Z,QBtn:I.Z})}}]);