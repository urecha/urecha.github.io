(()=>{"use strict";var e={5442:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.BoardSetting=void 0,(r=t.BoardSetting||(t.BoardSetting={})).PROJECT_ID="projectId",r.CB_ADDRESS="cbAddress",r.INBOX_TRACKER_ID="inboxTrackerId",r.USER_MAPPING="USER_MAPPING",r.IMPORT_CONFIGURATION="importConfiguration"},7950:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1495:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},9348:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.FilterCriteria=void 0,(r=t.FilterCriteria||(t.FilterCriteria={})).TEAM="Team",r.RELEASE="Release",r.SUBJECT="Subject"},9225:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},25:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(2376),t),o(r(5442),t),o(r(7950),t),o(r(1495),t),o(r(9348),t),o(r(8026),t),o(r(5543),t),o(r(7558),t),o(r(2376),t),o(r(8223),t),o(r(9225),t),o(r(8910),t)},8026:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LocalSetting=void 0,(r=t.LocalSetting||(t.LocalSetting={})).CB_USERNAME="cbUsername",r.ADVANCED_SEARCH_ENABLED="ADVANCED_SEARCH_ENABLED",r.SELECTED_TRACKER="SELECTED_TRACKER",r.CBQL_STRING="CBQL_STRING",r.SUBQUERY_LINK_METHOD="SUBQUERY_LINK_METHOD",r.FILTER_CRITERIA="FILTER_CRITERIA",r.CURRENTLY_EDITED_ITEM="CURRENTLY_EDITED_ITEM"},5543:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SessionSetting=void 0,(t.SessionSetting||(t.SessionSetting={})).CB_PASSWORD="cbPassword"},7558:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SettingKey=void 0,(r=t.SettingKey||(t.SettingKey={})).LS_KEY="codebeamer-miro-plugin",r.LS_BS_KEY="codebeamer-miro-plugin-board-settings",r.SS_KEY="codebeamer-miro-plugin"},2376:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.StandardItemProperty=void 0,(r=t.StandardItemProperty||(t.StandardItemProperty={})).ID="ID",r.TEAMS="Teams",r.OWNER="Owner",r.RELEASE="Release",r.PRIORITY="Priority",r.STORY_POINTS="Story Points",r.START_DATE="Start Date",r.END_DATE="End Date",r.ASSIGNED_TO="Assigned To",r.ASSIGNED_AT="Assigned At",r.SUBMITTED_AT="Submitted At",r.SUBMITTED_BY="Submitted By",r.MODIFIED_AT="Modified At",r.MODIFIED_BY="Modified By"},8910:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SubqueryLinkMethod=void 0,(r=t.SubqueryLinkMethod||(t.SubqueryLinkMethod={})).OR="OR",r.AND="AND"},8223:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1681:function(e,t,r){var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(o,n){function s(e){try{d(i.next(e))}catch(e){n(e)}}function a(e){try{d(i.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=r(25);class n{constructor(e,t){this._appId=(1e5+999999*Math.random()).toString(),this._boardId=(1e5+999999*Math.random()).toString(),this._appId=e,this._boardId=t}get appId(){return this._appId}get boardId(){return this._boardId}static create(e,t){return this._instance=new n(e,t),this._instance}static getInstance(){if(!this._instance){console.warn("Store not initialized. Initializing a test-store with test-ids.");const e="e2e-test",t="e2e-test";return n.create(e,t)}return this._instance}getBoardSetting(e){let t=JSON.parse(localStorage.getItem(this.getBoardSettingsLocalStorageKey())||"{}");if(!t)throw new Error("Coudnn't load board settings. Please verify their integrity in the plugin settings.");return t[e]}getLocalSettingsLocalStorageKey(){return o.SettingKey.LS_KEY+"-"+this.boardId}getSessionStorageKey(){return o.SettingKey.SS_KEY+"-"+this.boardId}getBoardSettingsLocalStorageKey(){return o.SettingKey.LS_BS_KEY+"-"+this.boardId}saveBoardSettings(e){return i(this,void 0,void 0,(function*(){const t=localStorage.getItem(this.getBoardSettingsLocalStorageKey());let r=null===t?{}:JSON.parse(t);Object.assign(r,e),localStorage.setItem(this.getBoardSettingsLocalStorageKey(),JSON.stringify(r))}))}saveLocalSettings(e){const t=localStorage.getItem(this.getLocalSettingsLocalStorageKey());let r=null===t?{}:JSON.parse(t);Object.assign(r,e),localStorage.setItem(this.getLocalSettingsLocalStorageKey(),JSON.stringify(r))}saveSessionSettings(e){const t=sessionStorage.getItem(this.getSessionStorageKey());let r=null===t?{}:JSON.parse(t);Object.assign(r,e),sessionStorage.setItem(this.getSessionStorageKey(),JSON.stringify(r))}getLocalSetting(e){let t=JSON.parse(localStorage.getItem(this.getLocalSettingsLocalStorageKey())||"{}");if(!t)throw miro.showNotification("Couldn't load local settings. Please re-enter them and then retry."),miro.board.ui.openModal("settings.html"),new Error("Coudnn't load local settings. Please verify their integrity in the plugin settings.");return t[e]}getSessionSetting(e){let t=JSON.parse(sessionStorage.getItem(this.getSessionStorageKey())||"{}");if(!t)throw miro.showNotification("Couldn't load local settings. Please re-enter them and then retry."),miro.board.ui.openModal("settings.html"),new Error("Coudnn't load session settings. Please verify their integrity in the plugin settings.");return t[e]}storeUserMapping(e){return i(this,void 0,void 0,(function*(){let t;try{t=this.getBoardSetting(o.BoardSetting.USER_MAPPING)}catch(e){t=[]}t=t.filter((t=>t.cbUserId!=e.cbUserId&&t.miroUserId!=e.miroUserId)),t.push(e),yield this.saveBoardSettings({[o.BoardSetting.USER_MAPPING]:t})}))}getUserMapping(e){let t;try{t=this.getBoardSetting(o.BoardSetting.USER_MAPPING)}catch(e){return null}return t.find((t=>!(e.cbUserId&&t.cbUserId!=e.cbUserId||e.miroUserId&&t.miroUserId!=e.miroUserId)))}}t.default=n}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,r),n.exports}(()=>{const e=r(25);let t=r(1681).default.getInstance().getLocalSetting(e.LocalSetting.CURRENTLY_EDITED_ITEM),i=document.getElementById("itemName");i&&t&&(i.innerText=t);let o=document.getElementById("close");o&&(o.onclick=()=>miro.board.ui.closeModal())})()})();