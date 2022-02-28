var w=Object.defineProperty;var C=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var c=(e,r,t)=>(C(e,typeof r!="symbol"?r+"":r,t),t);import"./style.7f2dd081.js";import{c as x,a as y,R as a,r as s,b as D,P as M}from"./vendor.48efdcbb.js";const U=x({name:"settings",initialState:{cbAddress:"",projectId:"",inboxTrackerId:"",cbUsername:"",cbPassword:""},reducers:{saveSettings:e=>{}}});var O=y({reducer:U.reducer});function L(){const e=()=>{console.log("Saving (prentending, at least)")};return a.createElement("button",{id:"saveButton",className:"miro-btn miro-btn--primary miro-btn--small",onClick:e},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},a.createElement("path",{d:"M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})),a.createElement("span",{className:"icon-button-text"},"Save"))}var v;(function(e){e.OR="OR",e.AND="AND"})(v||(v={}));var _;(function(e){e.TEAM="Team",e.RELEASE="Release",e.SUBJECT="Subject"})(_||(_={}));var d;(function(e){e.CB_USERNAME="cbUsername",e.ADVANCED_SEARCH_ENABLED="ADVANCED_SEARCH_ENABLED",e.SELECTED_TRACKER="SELECTED_TRACKER",e.CBQL_STRING="CBQL_STRING",e.SUBQUERY_LINK_METHOD="SUBQUERY_LINK_METHOD",e.FILTER_CRITERIA="FILTER_CRITERIA"})(d||(d={}));var g;(function(e){e.CB_PASSWORD="cbPassword"})(g||(g={}));var l;(function(e){e.LS_KEY="codebeamer-miro-plugin",e.LS_BS_KEY="codebeamer-miro-plugin-board-settings",e.SS_KEY="codebeamer-miro-plugin"})(l||(l={}));var f;(function(e){e.ID="ID",e.TEAMS="Teams",e.OWNER="Owner",e.RELEASE="Release",e.PRIORITY="Priority",e.STORY_POINTS="Story Points",e.START_DATE="Start Date",e.END_DATE="End Date",e.ASSIGNED_TO="Assigned To",e.ASSIGNED_AT="Assigned At",e.SUBMITTED_AT="Submitted At",e.SUBMITTED_BY="Submitted By",e.MODIFIED_AT="Modified At",e.MODIFIED_BY="Modified By"})(f||(f={}));var o;(function(e){e.PROJECT_ID="projectId",e.CB_ADDRESS="cbAddress",e.INBOX_TRACKER_ID="inboxTrackerId",e.USER_MAPPING="USER_MAPPING",e.IMPORT_CONFIGURATION="importConfiguration"})(o||(o={}));const m=class{constructor(r,t){c(this,"_appId",(1e5+Math.random()*999999).toString());c(this,"_boardId",(1e5+Math.random()*999999).toString());this._appId=r,this._boardId=t}get appId(){return this._appId}get boardId(){return this._boardId}static create(r,t){return this._instance=new m(r,t),this._instance}static getInstance(){if(!this._instance){console.warn("Store not initialized. Initializing a test-store with test-ids.");const r="e2e-test",t="e2e-test";return m.create(r,t)}return this._instance}getBoardSetting(r){let t=JSON.parse(localStorage.getItem(this.getBoardSettingsLocalStorageKey())||"{}");if(!t)throw new Error("Coudnn't load board settings. Please verify their integrity in the plugin settings.");return t[r]}getLocalSettingsLocalStorageKey(){return l.LS_KEY+"-"+this.boardId}getSessionStorageKey(){return l.SS_KEY+"-"+this.boardId}getBoardSettingsLocalStorageKey(){return l.LS_BS_KEY+"-"+this.boardId}async saveBoardSettings(r){const t=localStorage.getItem(this.getBoardSettingsLocalStorageKey());let n=t===null?{}:JSON.parse(t);Object.assign(n,r),localStorage.setItem(this.getBoardSettingsLocalStorageKey(),JSON.stringify(n))}saveLocalSettings(r){const t=localStorage.getItem(this.getLocalSettingsLocalStorageKey());let n=t===null?{}:JSON.parse(t);Object.assign(n,r),localStorage.setItem(this.getLocalSettingsLocalStorageKey(),JSON.stringify(n))}saveSessionSettings(r){const t=sessionStorage.getItem(this.getSessionStorageKey());let n=t===null?{}:JSON.parse(t);Object.assign(n,r),sessionStorage.setItem(this.getSessionStorageKey(),JSON.stringify(n))}getLocalSetting(r){let t=JSON.parse(localStorage.getItem(this.getLocalSettingsLocalStorageKey())||"{}");if(!t)throw miro.showNotification("Couldn't load local settings. Please re-enter them and then retry."),miro.board.ui.openModal("settings.html"),new Error("Coudnn't load local settings. Please verify their integrity in the plugin settings.");return t[r]}getSessionSetting(r){let t=JSON.parse(sessionStorage.getItem(this.getSessionStorageKey())||"{}");if(!t)throw miro.showNotification("Couldn't load local settings. Please re-enter them and then retry."),miro.board.ui.openModal("settings.html"),new Error("Coudnn't load session settings. Please verify their integrity in the plugin settings.");return t[r]}async storeUserMapping(r){let t;try{t=this.getBoardSetting(o.USER_MAPPING)}catch{t=[]}t=t.filter(n=>n.cbUserId!=r.cbUserId&&n.miroUserId!=r.miroUserId),t.push(r),await this.saveBoardSettings({[o.USER_MAPPING]:t})}getUserMapping(r){let t;try{t=this.getBoardSetting(o.USER_MAPPING)}catch{return null}return t.find(n=>(!r.cbUserId||n.cbUserId==r.cbUserId)&&(!r.miroUserId||n.miroUserId==r.miroUserId))}};let u=m;c(u,"_instance");function K(){const[e,r]=s.exports.useState(""),[t,n]=s.exports.useState(""),[R,S]=s.exports.useState(""),[T,E]=s.exports.useState(""),[B,p]=s.exports.useState("");return s.exports.useEffect(()=>{var h,I,b,N,A;const i=u.getInstance();r((h=i.getBoardSetting(o.CB_ADDRESS))!=null?h:""),n((I=i.getBoardSetting(o.PROJECT_ID))!=null?I:""),S((b=i.getBoardSetting(o.INBOX_TRACKER_ID))!=null?b:""),E((N=i.getLocalSetting(d.CB_USERNAME))!=null?N:""),p((A=i.getSessionSetting(g.CB_PASSWORD))!=null?A:"")}),a.createElement(a.Fragment,null,a.createElement("div",{className:"row"},a.createElement("div",{className:"col border-right"},a.createElement("div",{className:"miro-h3"},"Project"),a.createElement("p",{className:"miro-p-small"},"Enter information about the codeBeamer instance and project you want to synchronize from/to."),a.createElement("div",{className:"miro-input-field miro-input-field--small"},a.createElement("label",null,"codeBeamer Address"),a.createElement("input",{id:"cbAddress",name:"cbAddress",type:"text",className:"miro-input miro-input--primary",placeholder:"e.g. https://retina.roche.com/cb",onChange:i=>r(i.target.value),value:e})),a.createElement("div",{className:"miro-input-field miro-input-field--small"},a.createElement("label",null,"Project ID or Key"),a.createElement("input",{id:"projectId",name:"projectId",type:"text",className:"miro-input miro-input--primary",placeholder:"e.g. 5",onChange:i=>n(i.target.value),value:t})),a.createElement("div",{className:"miro-input-field miro-input-field--small"},a.createElement("label",{title:"Synchronizing cards created in Miro will dump them in this tracker."},"Inbox Tracker ID",a.createElement("img",{id:"questionMark",src:"img/questionMark.svg",title:"Tracker to dump issues created in Miro when synchroized to codeBeamer"})),a.createElement("input",{id:"inboxTrackerId",name:"inboxTrackerId",type:"number",className:"miro-input miro-input--primary",placeholder:"e.g. 4877085",onChange:i=>S(i.target.value),value:R}))),a.createElement("div",{className:"col"},a.createElement("div",{className:"miro-h3"},"Authentication"),a.createElement("p",{className:"miro-p-small"},"Enter your credentials for the specified codeBeamer domain."),a.createElement("div",{className:"miro-input-field miro-input-field--small"},a.createElement("label",null,"codeBeamer Username"),a.createElement("input",{id:"cbUsername",name:"cbUsername",type:"text",className:"miro-input miro-input--primary",placeholder:"Username",onChange:i=>E(i.target.value),value:T})),a.createElement("div",{className:"miro-input-field miro-input-field--small"},a.createElement("label",null,"codeBeamer Password"),a.createElement("input",{id:"cbPassword",name:"cbPassword",type:"password",className:"miro-input miro-input--primary",placeholder:"**********",onChange:i=>p(i.target.value),value:B})))))}function P(){return s.exports.createElement(s.exports.Fragment,null,s.exports.createElement("div",{className:"miro-h2"},s.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},s.exports.createElement("title",null,"Settings"),s.exports.createElement("path",{d:"M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"})),s.exports.createElement("span",{className:"icon-header-text"},"codeBeamer Sync Settings"),s.exports.createElement("div",{className:"cb-logo"},s.exports.createElement("svg",{"enable-background":"new 0 0 256 256",version:"1.1",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",fill:"#050038"},s.exports.createElement("path",{className:"st0",d:"M128,255c70.1,0,127-56.9,127-127S198.1,1,128,1S1,57.9,1,128S57.9,255,128,255"}),s.exports.createElement("path",{className:"st1",d:"m142.7 103.9c1.4 12.6 2.6 29.3 21.5 18.5 0.5-0.2 0.9-0.5 1.2-0.7 4.5-6.7-0.2-20.9 5.1-20 5.9 1-1.2 7.6 1.8 12.7 3.1-2.1 3.6-11 7.9-8.3 4.2 2.6-3.4 5.6-3.7 8.9 2.7 1.4 10.4-6 11.4-0.7 0.9 4-9.3 3.4-10.3 5.4 2.1 3.3 12.7 0.7 10.1 6-2.2 4.4-9.4-3.3-13.6-2 1.2 3.7 8.9 4.4 5.7 8-2.9 3.3-6.8-2.5-11.7-7.1-0.6 0.7-1.2 1.4-1.9 2.1-11.9 11.9-26 8.9-33.2-3.5-3.5-6-3.3-9.7-4.3-16.2-1.3 4-2.2 7.8-2.6 11.6-10.5 9.2-19.8 19.1-22.8 34.2 7-5.5 13.6-13.1 20.4-9.8 6.4 3.1 11.4 12.6 13.6 20.2 6.1-2.8 11.2-5.8 12.8-1.6 1.9 5.3-6.8 2.8-9.6 6.4 4 3.1 15.1-2.4 15.7 3.3 0.7 6.9-9.9-0.4-13.6 2.4 0.3 2.6 11.6 6.1 9.1 10.1-3.4 5.3-8.9-5.9-12.3-5.6-1.1 3.8 5.9 10.1 0.3 11.3-5.9 1.2-2.7-8.7-5.2-12.3-5.4 4.2-0.3 14.4-7.2 13.1-6-1.2 4-13.8 2.9-23-2.8-3.3-5.9-6.5-8.9-5.4-6.3 2.5-6.7 9.3-17.9 13.6 8.8 17 33.4 33.9 57.1 32.4 21.4-1.4 46-18.3 36.6-55.5-1.2-4.7-1-6.5 2.1-0.7 14.2 26.8-4.8 72.1-54.3 66.8-58.6-6.2-63.2-56.8-81.2-61.2-4-1-8.1 3.1-11.7 6.2 0.4 8.3 5.1 17.8-0.4 18.4-5.2 0.6-1-6.8-3.7-10.1-3.7 2.9-1.1 14.3-6.5 13.5-6.4-0.9 2.6-8.9 0.8-12.8-2.5-0.3-8.1 9.2-11.2 6-4.2-4.3 7.3-6.7 7.7-9.9-3.2-1.8-10.6 3.2-10.4-2.2 0.2-5.5 8.5-0.5 12.4-2-2.7-5.9-13.1-3.5-10.4-9.5 1.8-3.9 7.4 1.8 13.8 5.3 2-8.1 11.3-21.4 18-21.9 5.4-0.4 9.9 4.1 14.4 8.9-0.2-2.6-0.2-5.2-0.1-7.9 0.5-24.5 9.5-46.2 44.9-61.1 1.4-10.4-9.9-13.4-8-20.8 1.6-5.7 9.5-10.9 16.3-12.7-2.9-5.5-6.5-10.2-2.8-11.9 4.4-2 2.8 5.7 6.1 7.8 2.4-3.6-3-12.7 1.9-13.6 5.8-1 0.2 8.4 2.9 11.4 2.2-0.4 4.4-10.3 8-8.4 4.8 2.6-4.5 7.9-3.9 10.8 3.3 0.7 8.2-5.7 9.6-1 1.4 4.9-7.3 2.8-10.2 5.2 3.9 4.4 12.3-0.5 11.6 5.4-0.6 4.9-10.8-1.8-18.5-1.2-3.3 2.5-7.2 6.1-7 9.4 0.3 5 6.7 9 10.6 13.4 7.4-3.2 6.6-10.9 12-13.8 20-11 51.4 6.3 51.6 14.9 0.1 8.2-17.3 19.7-32.1 23.2-3.5 0.8-6.1-0.5-8.4-1.8-8.8-5.3-11.7 3.1-18.3 9.4",fill:"#FFFFFF"})))),s.exports.createElement(K,null),s.exports.createElement(L,null))}D.render(s.exports.createElement(M,{store:O},s.exports.createElement(P,null)),document.getElementById("root"));