(()=>{"use strict";var e={3494:(e,t,a)=>{a(5363),a(71);var o=a(8880),n=a(9592),c=a(3673);function i(e,t,a,o,n,i){const s=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(s)}const s=(0,c.aZ)({name:"App"});s.render=i;const r=s;var p=a(6236),d=a(7083),l=a(9582),h=a(5833);const u=(0,d.BC)((function(){const e=l.r5,t=(0,l.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h.Z,history:e("")});return t}));async function m(e,t){const o="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:c}=await Promise.resolve().then(a.bind(a,6236)),i="function"===typeof u?await u({store:o}):u;o.$router=i;const s=e(r);return s.use(n.Z,t),{app:s,store:o,storeKey:c,router:i}}var g=a(6395),k=a(4434);const v={config:{brand:{primary:"#308be5",secondary:"#f2f2f2",accent:"#9C27B0",silk:"#f2f2f2",dark:"#1d1d1d",positive:"#82b865",negative:"#cc444b",info:"#31CCEC",warning:"#ffae30"}},plugins:{LocalStorage:g.Z,Notify:k.Z}},f="";async function I({app:e,router:t,store:a,storeKey:o},n){let c=!1;const i=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},s=e=>{if(c=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},r=window.location.href.replace(window.location.origin,"");for(let d=0;!1===c&&d<n.length;d++)try{await n[d]({app:e,router:t,store:a,ssrContext:null,redirect:s,urlPath:r,publicPath:f})}catch(p){return p&&p.url?void s(p.url):void console.error("[Quasar] boot error:",p)}!0!==c&&(e.use(t),e.use(a,o),e.mount("#q-app"))}m(o.ri,v).then((e=>Promise.all([Promise.resolve().then(a.bind(a,4112)),Promise.resolve().then(a.bind(a,5474)),Promise.resolve().then(a.bind(a,1174))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));I(e,a)}))))},5474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s,api:()=>i});var o=a(7083),n=a(52),c=a.n(n);const i=c().create({baseURL:"http://onconnect-backend-api.herokuapp.com/api/v1"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=c(),e.config.globalProperties.$api=i}))},4112:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r,i18n:()=>s});var o=a(7083),n=a(6115);const c={failed:"Action failed",success:"Action was successful"},i={"en-US":c},s=(0,n.o)({locale:"en-US",messages:i}),r=(0,o.xr)((({app:e})=>{e.use(s)}))},1174:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var o=a(7083);a(5833);const n=(0,o.xr)((async({app:e,router:t})=>{t.beforeEach(((e,t,a)=>{if(e.meta.needsAuth)localStorage.getItem("accessToken")?a():a("/login");else{if("/login"===e.path&&localStorage.getItem("accessToken"))return void a(t.path);a()}}))}))},5833:(e,t,a)=>{a.d(t,{Z:()=>k});a(71);const o=[{path:"/crm",component:()=>Promise.all([a.e(736),a.e(64),a.e(549)]).then(a.bind(a,6549)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(64),a.e(349)]).then(a.bind(a,7349))},{path:"/client/:id",component:()=>Promise.all([a.e(736),a.e(64),a.e(527)]).then(a.bind(a,7679))}],meta:{needsAuth:!0}}],n=o,c=[{path:"/finance",component:()=>Promise.all([a.e(736),a.e(64),a.e(549)]).then(a.bind(a,6549)),children:[{path:"/finance/invoice",component:()=>Promise.all([a.e(736),a.e(64),a.e(652)]).then(a.bind(a,2172))},{path:"/finance/invoice/:id",component:()=>Promise.all([a.e(736),a.e(64),a.e(532)]).then(a.bind(a,4532))},{path:"/finance/quotation",component:()=>Promise.all([a.e(736),a.e(64),a.e(534)]).then(a.bind(a,9541))},{path:"/finance/quote/:id",component:()=>Promise.all([a.e(736),a.e(64),a.e(318)]).then(a.bind(a,6318))},{path:"/finance/taxes",component:()=>Promise.all([a.e(736),a.e(64),a.e(870)]).then(a.bind(a,6870))},{path:"/finance/categories",component:()=>Promise.all([a.e(736),a.e(64),a.e(715)]).then(a.bind(a,3715))},{path:"/finance/suppliers",component:()=>Promise.all([a.e(736),a.e(64),a.e(758)]).then(a.bind(a,8758))},{path:"/finance/payment",component:()=>Promise.all([a.e(736),a.e(64),a.e(13)]).then(a.bind(a,13))},{path:"/finance/expenses",component:()=>Promise.all([a.e(736),a.e(64),a.e(79)]).then(a.bind(a,2333))},{path:"/finance/expense/:id",component:()=>Promise.all([a.e(736),a.e(64),a.e(920)]).then(a.bind(a,1920))}],meta:{needsAuth:!0}}],i=c,s=[{path:"/accounting",component:()=>Promise.all([a.e(736),a.e(64),a.e(549)]).then(a.bind(a,6549)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(64),a.e(645)]).then(a.bind(a,8645))}],meta:{needsAuth:!0}}],r=s,p=[{path:"/projects",component:()=>Promise.all([a.e(736),a.e(64),a.e(549)]).then(a.bind(a,6549)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(64),a.e(925)]).then(a.bind(a,9977))},{path:"/projects/tasks",component:()=>Promise.all([a.e(736),a.e(64),a.e(657)]).then(a.bind(a,1657))},{path:"/projects/:id",component:()=>Promise.all([a.e(736),a.e(64),a.e(238)]).then(a.bind(a,436))}],meta:{needsAuth:!0}}],d=p,l=[{path:"/users",component:()=>Promise.all([a.e(736),a.e(64),a.e(549)]).then(a.bind(a,6549)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(64),a.e(92)]).then(a.bind(a,5092))}],meta:{needsAuth:!0}}],h=l,u=[{path:"/chat",component:()=>Promise.all([a.e(736),a.e(64),a.e(316)]).then(a.bind(a,7316)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(64)]).then(a.bind(a,5699))}],meta:{needsAuth:!0}}],m=u,g=[{path:"/",component:()=>Promise.all([a.e(736),a.e(64),a.e(549)]).then(a.bind(a,6549)),children:[{path:"",redirect:"/crm",component:()=>Promise.all([a.e(736),a.e(64),a.e(283)]).then(a.bind(a,283))},{path:"/profile",component:()=>Promise.all([a.e(736),a.e(469)]).then(a.bind(a,4469)),meta:{needsAuth:!0}}],meta:{needsAuth:!0}},{path:"/login",component:()=>Promise.all([a.e(736),a.e(64),a.e(815)]).then(a.bind(a,9815)),meta:{needsAuth:!1}},...n,...i,...r,...d,...h,...m,{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(193)]).then(a.bind(a,2193))}],k=g},6236:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Yt});var o={};a.r(o),a.d(o,{someGetter:()=>G});var n={};a.r(n),a.d(n,{GET_CLIENT:()=>O,GET_CLIENTS:()=>j,GET_CLIENT_MEETINGS:()=>x});var c={};a.r(c),a.d(c,{addSocial:()=>V,createClient:()=>R,deleteClient:()=>q,deleteContact:()=>U,deleteSocial:()=>D,editSocial:()=>J,getClientMeetings:()=>F,getClients:()=>M,getOneClient:()=>L,removeMeeting:()=>B,updateClient:()=>Q});var i={};a.r(i),a.d(i,{someGetter:()=>Z});var s={};a.r(s),a.d(s,{GET_INVENTORY_ITEMS:()=>X,GET_JOINED_ITEMS:()=>W,GET_NON_INVENTORY_ITEMS:()=>Y,GET_SERVICE_ITEMS:()=>K});var r={};a.r(r),a.d(r,{addItem:()=>te,addNItem:()=>ce,addSItem:()=>pe,addSubService:()=>he,delItem:()=>oe,delNItem:()=>se,delSItem:()=>le,deleteSubService:()=>me,editItem:()=>ae,editNItem:()=>ie,editSItem:()=>de,editSubService:()=>ue,getInventoryItems:()=>ee,getJoinedItems:()=>ge,getNonInventoryItems:()=>ne,getServiceItems:()=>re});var p={};a.r(p),a.d(p,{someGetter:()=>fe});var d={};a.r(d),a.d(d,{GET_CATEGORIES:()=>we,GET_EXPENSE:()=>ze,GET_EXPENSES:()=>_e,GET_INVOICE:()=>be,GET_INVOICES:()=>Ie,GET_JOINED_CATEGORIES:()=>Ae,GET_PAYMENT_METHODS:()=>Pe,GET_QUOTE:()=>Te,GET_QUOTES:()=>Se,GET_SUB_CATEGORIES:()=>Ee,GET_SUPPLIERS:()=>Ce,GET_TAXES:()=>ye});var l={};a.r(l),a.d(l,{addExpense:()=>it,addExpenseFile:()=>st,addInvoice:()=>Oe,addPaymentMethod:()=>tt,addQuote:()=>Re,addSubCategory:()=>$e,createSupplier:()=>Ye,deleteCategory:()=>Ve,deleteExpense:()=>dt,deleteInvoice:()=>Ne,deletePaymentMethod:()=>ot,deleteQuote:()=>qe,deleteSubCategory:()=>Ze,deleteSupplier:()=>We,deleteTax:()=>Fe,editExpense:()=>pt,editInvoice:()=>xe,editQuote:()=>Qe,editSubCategory:()=>He,getCategories:()=>Be,getExpense:()=>ct,getExpenses:()=>nt,getInvoice:()=>je,getInvoices:()=>Ge,getJoinedCategories:()=>De,getPaymentMethods:()=>et,getQuote:()=>Le,getQuotes:()=>Me,getSubCategories:()=>Je,getSuppliers:()=>Xe,getTaxes:()=>Ue,replaceExpenseFile:()=>rt,updatePaymentMethod:()=>at,updateSupplier:()=>Ke});var h={};a.r(h),a.d(h,{someGetter:()=>ut});var u={};a.r(u),a.d(u,{GET_PROJECTS:()=>mt});var m={};a.r(m),a.d(m,{addBoard:()=>Et,addFiles:()=>vt,addMembers:()=>jt,addProject:()=>kt,addProjectLeader:()=>yt,addProjectMember:()=>St,addTask:()=>Pt,deleteBoard:()=>Ct,deleteMember:()=>Gt,deleteProject:()=>bt,deleteProjectLeader:()=>wt,deleteProjectMember:()=>Tt,deleteTask:()=>zt,editBoard:()=>At,editProject:()=>It,editTask:()=>_t,getProjects:()=>gt,replaceFiles:()=>ft});var g={};a.r(g),a.d(g,{someGetter:()=>Nt});var k={};a.r(k),a.d(k,{GET_USERS:()=>Mt});var v={};a.r(v),a.d(v,{deleteUser:()=>Rt,getUsers:()=>Lt});var f={};a.r(f),a.d(f,{someGetter:()=>Ut});var I={};a.r(I),a.d(I,{CLEAR_CHAT:()=>Dt,GET_CHAT:()=>Bt,GET_MESSAGE:()=>Vt,GET_ROOMS:()=>Ft});var b={};a.r(b),a.d(b,{clearChat:()=>Ht,getChat:()=>$t,getMessage:()=>Zt,getRooms:()=>Jt});var S=a(7083),T=a(3617),y=a(52),w=a.n(y);const E={isLoggedIn:localStorage.getItem("isLoggedIn")?localStorage.getItem(""):"",accessToken:localStorage.getItem("accessToken")?"Bearer "+localStorage.getItem(""):"",user:{avatar:null}},A={LOG_IN(e,t){localStorage.setItem("accessToken","Bearer "+t),localStorage.setItem("isLoggedIn",!0),e.accessToken=t,e.isLoggedIn=!0},GET_USER(e,t){e.user=t}},C={async logIn({commit:e},t){try{let a=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/auth/signin",t);return!!a.data.success&&(e("LOG_IN",a.data.data.accessToken),!0)}catch(a){return!1}},async signUp({commit:e},t){let a=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/auth/signup",t);return!!a.data.success},async editProfile({commit:e},t){let a=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/auth/editProfile",t,{headers:{Authorization:localStorage.getItem("accessToken")}});return!!a.data.success},async getUser({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/auth/me",{headers:{Authorization:localStorage.getItem("accessToken")}});e("GET_USER",t.data)}},P={},_={namespaced:!0,state:E,mutations:A,actions:C,getters:P};function z(){return{allClients:[],clients:[],leads:[],blacklist:[],currentClient:[],clientContacts:[],clientMeetings:[],clientSocialLinks:[]}}function G(){}a(7070);function j(e,t){let a=[],o=[],n=[];for(let c=t.res.length-1;c>-1;c--)"client"===t.res[c].clientType?a.push(t.res[c]):"lead"===t.res[c].clientType?o.push(t.res[c]):"blacklist"===t.res[c].clientType&&n.push(t.res[c]);Object.assign(e.allClients,t.res),e.clients=a,e.leads=o,e.blacklist=n}function O(e,t){e.currentClient=t,e.clientContacts=t.clientContacts,e.clientSocialLinks=t.socialMedias}function x(e,t){e.clientMeetings=t.reverse()}var N=a(4434);async function M({commit:e},t){let a=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/clients",{headers:{Authorization:localStorage.getItem("accessToken")}});e("GET_CLIENTS",{type:t,res:a.data.data})}async function L({commit:e,dispatch:t},a){let o=await w().get(`https://onconnect-backend-api.herokuapp.com/api/v1/clients/${a}`,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_CLIENT",o.data.data)}async function R({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/clients/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getClients")}async function Q({commit:e,dispatch:t},a){try{await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/clients/update",a,{headers:{Authorization:localStorage.getItem("accessToken")}})}catch(o){console.log(o.response)}await t("getClients")}async function q({commit:e,dispatch:t},a){try{await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/clients/delete",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getClients")}catch(o){"Invalid url!"===o.response.data.message&&N.Z.create({type:"warning",message:"This client has pending operations!",textColor:"white"})}}async function U({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/clientContacts/delete",{id:Number(a.id)},{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getOneClient",a.clientId)}async function F({commit:e,dispatch:t},a){let o=await w().get(`https://onconnect-backend-api.herokuapp.com/api/v1/clients/${a}`,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_CLIENT_MEETINGS",o.data.data.meetings)}async function B({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/meetings/delete",{id:a.id},{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getClientMeetings",a.clientId)}async function D({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/socialMedias/delete",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getOneClient",a.clientId)}async function V({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/socialMedias/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getOneClient",a.clientId)}async function J({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/socialMedias/update",a.data,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getOneClient",a.clientId)}const $={namespaced:!0,state:z,mutations:n,actions:c,getters:o};function H(){return{inventoryItems:[],nonInventoryItems:[],serviceItems:[],joinedItems:[]}}function Z(){}function X(e,t){e.inventoryItems=t.reverse()}function Y(e,t){e.nonInventoryItems=t.reverse()}function K(e,t){for(let a=0;a<t.services.length;a++)t.services[a]={...t.services[a],subServices:[]};for(let a=0;a<t.services.length;a++)for(let e=0;e<t.subServices.length;e++)t.subServices[e].serviceItemId===t.services[a].id&&t.services[a].subServices.push(t.subServices[e]);e.serviceItems=t.services.reverse()}function W(e,t){e.joinedItems=t}async function ee({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/inventoryItems",{headers:{Authorization:localStorage.getItem("accessToken")}});e("GET_INVENTORY_ITEMS",t.data.data)}async function te({commit:e,dispatch:t},a){try{a.qty=Number(a.qty),console.log(a);await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/inventoryItems/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}})}catch(o){console.log(o.response)}t("getInventoryItems")}async function ae({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/inventoryItems/update",a,{headers:{Authorization:localStorage.getItem("accessToken")}});t("getInventoryItems")}async function oe({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/inventoryItems/delete",{id:a},{headers:{Authorization:localStorage.getItem("accessToken")}});t("getInventoryItems")}async function ne({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/nonInventoryItems",{headers:{Authorization:localStorage.getItem("accessToken")}});e("GET_NON_INVENTORY_ITEMS",t.data.data)}async function ce({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/nonInventoryItems/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}});t("getNonInventoryItems")}async function ie({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/nonInventoryItems/update",a,{headers:{Authorization:localStorage.getItem("accessToken")}});t("getNonInventoryItems")}async function se({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/nonInventoryItems/delete",{id:a},{headers:{Authorization:localStorage.getItem("accessToken")}});t("getNonInventoryItems")}async function re({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/serviceItems",{headers:{Authorization:localStorage.getItem("accessToken")}}),a=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/subServiceItems",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_SERVICE_ITEMS",{services:t.data.data,subServices:a.data.data})}async function pe({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/serviceItems/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}});t("getServiceItems")}async function de({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/serviceItems/update",a,{headers:{Authorization:localStorage.getItem("accessToken")}});t("getServiceItems")}async function le({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/serviceItems/delete",{id:a},{headers:{Authorization:localStorage.getItem("accessToken")}});t("getServiceItems")}async function he({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/subServiceItems/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getServiceItems")}async function ue({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/subServiceItems/update",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getServiceItems")}async function me({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/subServiceItems/delete",{id:a},{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getServiceItems")}async function ge({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/joinedItems",{headers:{Authorization:localStorage.getItem("accessToken")}});e("GET_JOINED_ITEMS",t.data.data)}const ke={namespaced:!0,state:H,mutations:s,actions:r,getters:i};function ve(){return{invoices:[],sentInvoices:[],paidInvoices:[],notPaidInvoices:[],oneInvoice:{},quotes:[],oneQuote:{},oneExpense:{},sentQuotes:[],acceptedQuotes:[],rejectedQuotes:[],categories:[],subCategories:[],joinedCategories:[],suppliers:[],paymentMethods:[],expenses:[],taxes:[]}}function fe(){}function Ie(e,t){e.invoices=[],e.invoices=t.reverse(),e.sentInvoices=[],e.paidInvoices=[],e.notPaidInvoices=[];for(let a=0;a<e.invoices.length;a++)"Sent"===e.invoices[a].status?e.sentInvoices.push(e.invoices[a]):"Paid"===e.invoices[a].status?e.paidInvoices.push(e.invoices[a]):"Not paid"===e.invoices[a].status&&e.notPaidInvoices.push(e.invoices[a])}function be(e,t){e.oneInvoice=t}function Se(e,t){e.quotes=[],e.quotes=t.reverse(),e.sentQuotes=[],e.acceptedQuotes=[],e.rejectedQuotes=[];for(let a=0;a<e.quotes.length;a++)"Sent"===e.quotes[a].status?e.sentQuotes.push(e.quotes[a]):"Accepted"===e.quotes[a].status?e.acceptedQuotes.push(e.quotes[a]):"Rejected"===e.quotes[a].status&&e.rejectedQuotes.push(e.quotes[a])}function Te(e,t){e.oneQuote=t}function ye(e,t){e.taxes=t.reverse()}function we(e,t){e.categories=t.reverse()}function Ee(e,t){e.subCategories=t.reverse()}function Ae(e,t){e.joinedCategories=t}function Ce(e,t){e.suppliers=t.reverse()}function Pe(e,t){e.paymentMethods=t.reverse()}function _e(e,t){e.expenses=t.reverse()}function ze(e,t){e.oneExpense=t}async function Ge({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/invoices",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_INVOICES",t.data.data)}async function je({commit:e},t){let a=await w().get(`https://onconnect-backend-api.herokuapp.com/api/v1/invoices/${t}`,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_INVOICE",a.data.data)}async function Oe({commit:e,dispatch:t},a){console.log(a);try{let e=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/invoices/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}});console.log(e)}catch(o){console.log(o.response)}await t("getInvoices")}async function xe({commit:e,dispatch:t},a){console.log(a);let o=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/invoices/update",a,{headers:{Authorization:localStorage.getItem("accessToken")}});console.log(o),await t("getInvoices")}async function Ne({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/invoices/delete",{id:a},{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getInvoices")}async function Me({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/quotes",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_QUOTES",t.data.data)}async function Le({commit:e},t){let a=await w().get(`https://onconnect-backend-api.herokuapp.com/api/v1/quotes/${t}`,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_QUOTE",a.data.data)}async function Re({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/quotes/create",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getQuotes")}async function Qe({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/quotes/update",a,{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getQuotes")}async function qe({commit:e,dispatch:t},a){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/quotes/delete",{id:a},{headers:{Authorization:localStorage.getItem("accessToken")}});await t("getQuotes")}async function Ue({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/taxes",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_TAXES",t.data.data)}async function Fe({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/taxes/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getTaxes")}async function Be({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/expenseCategories",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_CATEGORIES",t.data.data)}async function De({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/joinedItems/joinedExpenseCategories",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_JOINED_CATEGORIES",t.data.data)}async function Ve({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenseCategories/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getCategories")}async function Je({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/expenseSubCategories",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_SUB_CATEGORIES",t.data.data)}async function $e({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenseSubCategories/create",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getCategories")}async function He({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenseSubCategories/update",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getCategories")}async function Ze({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenseSubCategories/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getCategories")}async function Xe({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/suppliers",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_SUPPLIERS",t.data.data)}async function Ye({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/suppliers/create",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getSuppliers")}async function Ke({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/suppliers/update",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getSuppliers")}async function We({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/suppliers/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getSuppliers")}async function et({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/paymentMethods",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_PAYMENT_METHODS",t.data.data)}async function tt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/paymentMethods/create",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getPaymentMethods")}async function at({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/paymentMethods/update",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getPaymentMethods")}async function ot({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/paymentMethods/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getPaymentMethods")}async function nt({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/expenses",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_EXPENSES",t.data.data)}async function ct({commit:e},t){let a=await w().get(`https://onconnect-backend-api.herokuapp.com/api/v1/expenses/${t}`,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_EXPENSE",a.data.data)}async function it({dispatch:e},t){let a=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenses/create",t.invoice,{headers:{Authorization:localStorage.getItem("accessToken")}}),o=new FormData;o.append("id",a.data.data.id),o.append("files",t.file),await e("addExpenseFile",o),await e("getExpenses")}async function st({dispatch:e},t){try{await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenses/addFile",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}catch(a){console.log(a.response)}await e("getExpenses")}async function rt({dispatch:e},t){try{let e=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenses/replaceFiles",t,{headers:{Authorization:localStorage.getItem("accessToken")}});console.log(e)}catch(a){console.log(a.response)}await e("getExpenses")}async function pt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenses/update",t.invoice,{headers:{Authorization:localStorage.getItem("accessToken")}});let a=new FormData;a.append("id",t.invoice.id),a.append("files",t.file),await e("addExpenseFile",a),await e("getExpenses")}async function dt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/expenses/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getExpenses")}const lt={namespaced:!0,state:ve,mutations:d,actions:l,getters:p};function ht(){return{projects:[]}}function ut(){}function mt(e,t){e.projects=t.reverse()}async function gt({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/projects",{headers:{Authorization:localStorage.getItem("accessToken")}});await e("GET_PROJECTS",t.data.data)}async function kt({dispatch:e},t){let a=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/create",t.data,{headers:{Authorization:localStorage.getItem("accessToken")}});if(await e("getProjects"),t.files){console.log(a.data.data.id);let o=new FormData;o.append("id",a.data.data.id),o.append("files",t.files),await e("addFiles",o),await e("getProjects")}}async function vt({dispatch:e},t){let a=await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/addFile",t,{headers:{Authorization:localStorage.getItem("accessToken")}});console.log(a)}async function ft({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/replaceFiles",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function It({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/update",t.data,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getProjects")}async function bt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getProjects")}async function St({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/addTeamMembers",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getProjects")}async function Tt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/removeTeamMembers",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getProjects")}async function yt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/addTeamLeaders",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getProjects")}async function wt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/projects/removeTeamLeaders",t,{headers:{Authorization:localStorage.getItem("accessToken")}});await e("getProjects")}async function Et({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/boards/create",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function At({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/boards/update",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function Ct({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/boards/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function Pt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/tasks/create",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function _t({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/tasks/update",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function zt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/tasks/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function Gt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/tasks/removeTeamMembers",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}async function jt({dispatch:e},t){await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/tasks/addTeamMembers",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}const Ot={namespaced:!0,state:ht,mutations:u,actions:m,getters:h};function xt(){return{users:[]}}function Nt(){}function Mt(e,t){e.users=[];for(let a=0;a<t.length;a++)"partner"!==t[a].userType&&e.users.push(t[a])}async function Lt({commit:e}){let t=await w().get("https://onconnect-backend-api.herokuapp.com/api/v1/users/allWithBrand",{headers:{Authorization:localStorage.getItem("accessToken")}});e("GET_USERS",t.data.data)}async function Rt({dispatch:e},t){try{await w().post("https://onconnect-backend-api.herokuapp.com/api/v1/users/delete",t,{headers:{Authorization:localStorage.getItem("accessToken")}})}catch(a){console.log(a.response)}e("getUsers")}const Qt={namespaced:!0,state:xt,mutations:k,actions:v,getters:g};function qt(){return{rooms:[],chat:[],currentChat:[]}}function Ut(){}function Ft(e,t){e.rooms=t}function Bt(e,t){e.chat=[],e.chat=t}function Dt(e){e.chat=[]}function Vt(e,t){e.chat.messages.push({...t})}async function Jt({commit:e},t){e("GET_ROOMS",t)}async function $t({commit:e},t){e("GET_CHAT",t)}async function Ht({commit:e}){e("CLEAR_CHAT")}async function Zt({commit:e},t){e("GET_MESSAGE",t)}const Xt={namespaced:!0,state:qt,mutations:I,actions:b,getters:f},Yt=(0,S.h)((function(){const e=(0,T.MT)({modules:{example:_,crmStore:$,accountingStore:ke,financeStore:lt,userStore:Qt,projectStore:Ot,chatStore:Xt},strict:!1});return e}))}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o].call(c.exports,c,c.exports,a),c.exports}a.m=e,(()=>{var e=[];a.O=(t,o,n,c)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,n,c]=e[d],s=!0,r=0;r<o.length;r++)(!1&c||i>=c)&&Object.keys(a.O).every((e=>a.O[e](o[r])))?o.splice(r--,1):(s=!1,c<i&&(i=c));if(s){e.splice(d--,1);var p=n();void 0!==p&&(t=p)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[o,n,c]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{13:"492b70b4",64:"c6d71b8c",79:"0c04ac35",92:"3f68f63d",193:"559cdf71",238:"2ea524ec",283:"1f8f1126",316:"42a6931c",318:"848c50f9",349:"bfca0062",469:"4f101fbc",527:"4d8ba008",532:"1155ecaf",534:"67f68ec5",549:"8ad54d6d",645:"ad91b501",652:"237ed4bb",657:"04923e24",715:"a11397a4",758:"b597971e",815:"00833d6a",870:"bc076af7",920:"f2388713",925:"32d62d5a"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{79:"51829099",92:"ef78eb9f",143:"ce549ef8",238:"0312da73",318:"2e462ca4",349:"30a80329",527:"808fea8a",532:"4e1f030d",534:"51829099",549:"bd37c9f1",652:"51829099",657:"62b3d288",715:"0f3a5221",736:"059c2bff",758:"7ba8f9bb",815:"8ce568fa",870:"f6ff71f0",920:"04d47707",925:"6821d784"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="oc_front_end:";a.l=(o,n,c,i)=>{if(e[o])e[o].push(n);else{var s,r;if(void 0!==c)for(var p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var l=p[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+c){s=l;break}}s||(r=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+c),s.src=o),e[o]=[n];var h=(t,a)=>{s.onerror=s.onload=null,clearTimeout(u);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),r&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var e=(e,t,a,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var c=c=>{if(n.onerror=n.onload=null,"load"===c.type)a();else{var i=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=i,r.request=s,n.parentNode.removeChild(n),o(r)}};return n.onerror=n.onload=c,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var n=a[o],c=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(c===e||c===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],c=n.getAttribute("data-href");if(c===e||c===t)return n}},o=o=>new Promise(((n,c)=>{var i=a.miniCssF(o),s=a.p+i;if(t(i,s))return n();e(o,s,n,c)})),n={143:0};a.f.miniCss=(e,t)=>{var a={79:1,92:1,238:1,318:1,349:1,527:1,532:1,534:1,549:1,652:1,657:1,715:1,758:1,815:1,870:1,920:1,925:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,o)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var c=new Promise(((a,o)=>n=e[t]=[a,o]));o.push(n[2]=c);var i=a.p+a.u(t),s=new Error,r=o=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var c=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+c+": "+i+")",s.name="ChunkLoadError",s.type=c,s.request=i,n[1](s)}};a.l(i,r,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,o)=>{var n,c,[i,s,r]=o,p=0;if(i.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(r)var d=r(a)}for(t&&t(o);p<i.length;p++)c=i[p],a.o(e,c)&&e[c]&&e[c][0](),e[i[p]]=0;return a.O(d)},o=self["webpackChunkoc_front_end"]=self["webpackChunkoc_front_end"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(3494)));o=a.O(o)})();