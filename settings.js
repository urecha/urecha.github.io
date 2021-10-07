!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function d(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}s((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});class o{constructor(){}static getAndSetIds(){return i(this,void 0,void 0,(function*(){o.appId=miro.getClientId(),o.boardId=(yield miro.board.info.get()).id}))}}e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Constants=e.LocalSetting=e.BoardSetting=void 0,function(t){t.PROJECT_ID="projectId",t.CB_ADDRESS="cbAddress",t.INBOX_TRACKER_ID="inboxTrackerId",t.USER_MAPPING="USER_MAPPING"}(e.BoardSetting||(e.BoardSetting={})),function(t){t.CB_USERNAME="cbUsername",t.CB_PASSWORD="cbPassword",t.ADVANCED_SEARCH_ENABLED="ADVANCED_SEARCH_ENABLED",t.SELECTED_TRACKER="SELECTED_TRACKER",t.CBQL_STRING="CBQL_STRING"}(e.LocalSetting||(e.LocalSetting={})),function(t){t.NEWPOS="NEWPOS",t.LS_KEY="codebeamer-miro-plugin"}(e.Constants||(e.Constants={}))},function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function d(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}s((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.getCurrentUserId=e.deleteWidget=e.recreateWidget=e.createOrUpdateWidget=e.findLinesByFromCard=e.findWidgetByTypeAndMetadataId=e.getWidgetDetail=e.getAllSynchedCodeBeamerCardItemIds=void 0;const o=n(0);function r(t){return i(this,void 0,void 0,(function*(){return miro.board.widgets.get({type:t.type}).then(e=>e.filter(t=>!!t.metadata[o.default.appId]).find(e=>e.metadata[o.default.appId].id===t.metadata[o.default.appId].id))}))}function a(t){return i(this,void 0,void 0,(function*(){if(!("CARD"!==t.type||t.x&&t.y)){const e=yield miro.board.viewport.get();let n=Math.random()*e.width/10,i=Math.random()*e.height/10;t.x=e.x+e.width/2+n,t.y=e.y+e.height/2+i}let e=(yield miro.board.widgets.create(t))[0],n=e.metadata[o.default.appId].id;return console.log(`${e.type} widget ${e.id} has been created to match item ${n||"<the settings>"}`),e}))}function d(t){return i(this,void 0,void 0,(function*(){return miro.board.widgets.deleteById(t)}))}e.getAllSynchedCodeBeamerCardItemIds=function(){return i(this,void 0,void 0,(function*(){return(yield miro.board.widgets.get({type:"CARD"})).filter(t=>t.metadata[o.default.appId]&&t.metadata[o.default.appId].id).map(t=>t.metadata[o.default.appId].id)}))},e.getWidgetDetail=function(t){return i(this,void 0,void 0,(function*(){return(yield miro.board.widgets.get(t))[0]}))},e.findWidgetByTypeAndMetadataId=r,e.findLinesByFromCard=function(t){return i(this,void 0,void 0,(function*(){return(yield miro.board.widgets.get({type:"LINE"})).filter(e=>e.metadata[o.default.appId]&&e.startWidgetId===t)}))},e.createOrUpdateWidget=function(t){return i(this,void 0,void 0,(function*(){const e=yield r(t);return e?(t.id=e.id,function(t){return i(this,void 0,void 0,(function*(){let e=(yield miro.board.widgets.update(t))[0],n=e.metadata[o.default.appId].id;return console.log(`${e.type} widget ${e.id} has been updated to match item ${n||"<the settings>"}`),e}))}(t)):a(t)}))},e.recreateWidget=function(t){return i(this,void 0,void 0,(function*(){return yield d(t.id),t.id=void 0,a(t)}))},e.deleteWidget=d,e.getCurrentUserId=function(){return miro.currentUser.getId()}},function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function d(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}s((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=n(2),r=n(1),a=n(0);class d{constructor(){this.state={onReadyCalled:!1,onReadyFuncs:[]}}static getInstance(){return d.instance||(d.instance=new d),d.instance}onPluginReady(t){this.state.onReadyCalled?t():this.state.onReadyFuncs.push(t)}static runOnPluginReadyFuncs(){for(d.getInstance().state.onReadyCalled=!0;d.getInstance().state.onReadyFuncs.length;)d.getInstance().state.onReadyFuncs.shift().call()}getBoardSetting(t){return this.configWidget.metadata[a.default.appId].settings[t]}saveBoardSettings(t){return i(this,void 0,void 0,(function*(){console.log("Updating metadata: ",t),console.log("ConfigWidget: ",this.configWidget),Object.assign(this.configWidget.metadata[a.default.appId].settings,t),console.log("Metadata: ",this.configWidget.metadata[a.default.appId]),console.log("ConfigWidget: ",this.configWidget)}))}getLocalStoreLocation(){return r.Constants.LS_KEY+"-"+a.default.boardId}saveLocalSettings(t){const e=localStorage.getItem(this.getLocalStoreLocation());let n=null===e?{}:JSON.parse(e);Object.assign(n,t),localStorage.setItem(this.getLocalStoreLocation(),JSON.stringify(n))}getLocalSetting(t){return JSON.parse(localStorage.getItem(this.getLocalStoreLocation())||"{}")[t]}storeUserMapping(t){return i(this,void 0,void 0,(function*(){let e=this.getBoardSetting(r.BoardSetting.USER_MAPPING);e||(e=[]),e=e.filter(e=>e.cbUserId!=t.cbUserId&&e.miroUserId!=t.miroUserId),e.push(t),yield this.saveBoardSettings({[r.BoardSetting.USER_MAPPING]:e})}))}getUserMapping(t){return this.getBoardSetting(r.BoardSetting.USER_MAPPING).find(e=>!(t.cbUserId&&e.cbUserId!=t.cbUserId||t.miroUserId&&e.miroUserId!=t.miroUserId))}static initConfigCard(){return i(this,void 0,void 0,(function*(){if(d.configInitCalled)return;d.configInitCalled=!0;let t=(yield miro.board.widgets.get({type:"CARD"})).filter(t=>!!t.metadata[a.default.appId]).find(t=>!!t.metadata[a.default.appId].settings);if(!t){let e={type:"CARD",title:"CodeBeamer-Miro Settings. Click on the context button to make changes!",capabilities:{editable:!1},metadata:{[a.default.appId]:{settings:{}}},card:{logo:{iconUrl:window.location.href+"img/codeBeamer-Logo.png"}},style:{backgroundColor:"#00A85D"}};t=yield o.createOrUpdateWidget(e)}d.getInstance().configWidget=t}))}}d.configInitCalled=!1,miro.onReady(()=>i(void 0,void 0,void 0,(function*(){yield a.default.getAndSetIds(),function(t){i(this,void 0,void 0,(function*(){(yield miro.board.widgets.areAllWidgetsLoaded())?t():miro.addListener("ALL_WIDGETS_LOADED",t)}))}(()=>i(void 0,void 0,void 0,(function*(){yield d.initConfigCard(),d.runOnPluginReadyFuncs()})))}))),e.default=d},function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function d(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}s((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.submitNewCodeBeamerItem=e.createOrUpdateCbItem=e.getCodeBeamerAssociationDetails=e.getCodeBeamerOutgoingRelations=e.getCodeBeamerProjectTrackers=e.getCodeBeamerUser=e.getCodeBeamerCbqlResult=e.getCodeBeamerItemURL=e.RELATION_UPSTREAM_REF_TYPE=e.RELATION_OUT_ASSOCIATION_TYPE=void 0;const o=n(2),r=n(5),a=n(3),d=n(1),s=a.default.getInstance();function c(t){if(401===t.status)throw console.log("Go and authorize yourself"),new Error("Go and authorize yourself");if(!t.ok)throw new Error(t.statusText);let e=t.json();if(e.message)throw new Error(e.message);return e}function u(){let t=new Headers({"Content-Type":"application/json"}),e=s.getLocalSetting(d.LocalSetting.CB_USERNAME),n=s.getLocalSetting(d.LocalSetting.CB_PASSWORD);return t.append("Authorization","Basic "+btoa(e+":"+n)),t}function l(){let t=s.getBoardSetting(d.BoardSetting.CB_ADDRESS);return new URL(t)}function f(){let t=l();return t.pathname=t.pathname+"/api/v3",t}function g(t){return i(this,void 0,void 0,(function*(){return t.tracker=yield function(t){return i(this,void 0,void 0,(function*(){return fetch(`${f()}/trackers/${t.id}`,{method:"GET",headers:u()}).then(c)}))}(t.tracker),t.renderedDescription=t.description?"Wiki"===t.descriptionFormat?yield function(t,e){return i(this,void 0,void 0,(function*(){let n={contextId:e.id,contextVersion:e.version,renderingContextType:"TRACKER_ITEM",markup:t};return fetch(`${f()}/projects/${e.tracker.project.id}/wiki2html`,{method:"POST",headers:u(),body:JSON.stringify(n)}).then(t=>t.text())}))}(t.description,t):t.description:"",t}))}function h(t){return i(this,void 0,void 0,(function*(){yield g(t);let e=yield r.convert2Card(t);return t.card=yield o.createOrUpdateWidget(e),t}))}e.RELATION_OUT_ASSOCIATION_TYPE="OutgoingTrackerItemAssociation",e.RELATION_UPSTREAM_REF_TYPE="UpstreamTrackerItemReference",e.getCodeBeamerItemURL=function(t){let e=l();return e.pathname=e.pathname+"/issue/"+t,e},e.getCodeBeamerCbqlResult=function(t,e=1,n=500){return i(this,void 0,void 0,(function*(){try{let i=f();return i.pathname=i.pathname+"/items/query",i.search=`page=${e}&pageSize=${n}&queryString=${t}`,fetch(i.toString(),{method:"GET",headers:u()}).then(c)}catch(t){console.log("Error while getting items from codeBeamer",t)}}))},e.getCodeBeamerUser=function(t){return t||(t=a.default.getInstance().getLocalSetting(d.LocalSetting.CB_USERNAME)),fetch(`${f()}/users/findByName?name=${t}`,{method:"GET",headers:u()}).then(c)},e.getCodeBeamerProjectTrackers=function(t){return i(this,void 0,void 0,(function*(){return t||(t=a.default.getInstance().getBoardSetting(d.BoardSetting.PROJECT_ID)),fetch(`${f()}/projects/${t}/trackers`,{method:"GET",headers:u()}).then(c)}))},e.getCodeBeamerOutgoingRelations=function(t){return i(this,void 0,void 0,(function*(){const e=yield fetch(`${f()}/items/${t.id}/relations`,{method:"GET",headers:u()}).then(c);return e.outgoingAssociations.concat(e.upstreamReferences)}))},e.getCodeBeamerAssociationDetails=function(t){return i(this,void 0,void 0,(function*(){return fetch(`${f()}/associations/${t.id}`,{method:"GET",headers:u()}).then(c)}))},e.createOrUpdateCbItem=h,e.submitNewCodeBeamerItem=function(t){return i(this,void 0,void 0,(function*(){t=yield o.getWidgetDetail({id:t.id});let e=r.convert2CbItem(t),n=yield function(t){return i(this,void 0,void 0,(function*(){return fetch(`${f()}/trackers/${s.getBoardSetting(d.BoardSetting.INBOX_TRACKER_ID)}/items`,{method:"POST",headers:u(),body:JSON.stringify(t)}).then(c)}))}(e);n[d.Constants.NEWPOS]={x:t.x,y:t.y},o.deleteWidget(t),yield h(n),miro.board.selection.selectWidgets({id:n.card.id})}))}},function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function d(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}s((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.convert2CbItem=e.convert2Line=e.convert2Card=void 0;const o=n(0),r=n(4),a=n(1),d=n(3);function s(t){return i(this,void 0,void 0,(function*(){let e={lineType:miro.enums.lineType.ARROW,lineStyle:miro.enums.lineStyle.NORMAL,lineEndStyle:miro.enums.lineArrowheadStyle.ARC_ARROW,lineStartStyle:miro.enums.lineArrowheadStyle.NONE,lineThickness:1};if(t.type===r.RELATION_OUT_ASSOCIATION_TYPE){switch((yield r.getCodeBeamerAssociationDetails(t)).type.id){case 1:e.lineColor="#cf7f30",e.lineEndStyle=miro.enums.lineArrowheadStyle.ARROW,e.lineThickness=5;break;case 4:case 9:e.lineColor="#21cfb7",e.lineStyle=miro.enums.lineStyle.DASHED,e.lineStartStyle=1;break;case 6:case 8:case 7:e.lineColor="#b32525"}}else t.type===r.RELATION_UPSTREAM_REF_TYPE&&(e.lineThickness=3);return e}))}e.convert2Card=function(t){var e,n,s,c;return i(this,void 0,void 0,(function*(){let i={type:"CARD",title:`<a href="${r.getCodeBeamerItemURL(t.id)}">[${t.tracker.keyName}-${t.id}] - ${t.name}</a>`,description:t.renderedDescription,card:{logo:{iconUrl:new URL(window.location.href).origin+"/img/codeBeamer-Logo-BW.png"},customFields:[{mainColor:"#4f8ae8",fontColor:"#ffffff",value:"Status: "+t.status.name}]},capabilities:{editable:!1},metadata:{[o.default.appId]:{id:t.id}}};if(t.release&&(null===(n=null===(e=i.card)||void 0===e?void 0:e.customFields)||void 0===n||n.push({value:"Rel: "+t.release.name})),t.storyPoints&&(null===(c=null===(s=i.card)||void 0===s?void 0:s.customFields)||void 0===c||c.push({value:"SP: "+t.storyPoints})),delete i.assignee,t.assignedTo){let e=t.assignedTo.map(t=>t.id).map(t=>d.default.getInstance().getUserMapping({cbUserId:t})).find(t=>!!t);e&&(i.assignee={userId:e.miroUserId})}let u=function(t){var e=t.customFields?t.customFields.find(t=>"ColorFieldValue"===t.type):null;return e?e.value:null}(t),l=u||(t.tracker.color?t.tracker.color:null);return l&&(i.style={backgroundColor:l}),t[a.Constants.NEWPOS]&&(i.x=t[a.Constants.NEWPOS].x,i.y=t[a.Constants.NEWPOS].y),i}))},e.convert2Line=function(t,e,n){return i(this,void 0,void 0,(function*(){return{type:"LINE",startWidgetId:e,endWidgetId:n,style:yield s(t),capabilities:{editable:!1},metadata:{[o.default.appId]:{id:t.id}}}}))},e.convert2CbItem=function(t){let e={name:"New Item",description:"--"};switch(t.type){case"CARD":const i=(n=t.title,(new DOMParser).parseFromString(n,"text/html").body.textContent);i&&(e.name=i),t.description&&(e.description=t.description);break;case"SHAPE":case"STICKER":t.plainText&&(e.name=t.plainText);break;case"TEXT":t.text&&(e.name=t.text);break;default:throw new Error(`Widget type '${t.type}' not supported`)}var n;return e}},,function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},,function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function d(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,d)}s((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3),r=n(1),a=n(4),d=n(2),s=(n(10),o.default.getInstance());function c(t){let e=s.getLocalSetting(t);if(e){let n=document.getElementById(t);n&&(n.value=e)}}function u(t){let e=s.getBoardSetting(t);if(e){let n=document.getElementById(t);n&&(n.value=e)}}function l(t,e){let n=document.getElementById(e);return t[e]=n?n.value:null,t}let f=document.getElementById("saveButton");f&&(f.onclick=function(){return i(this,void 0,void 0,(function*(){let t={};l(t,r.BoardSetting.CB_ADDRESS),l(t,r.BoardSetting.INBOX_TRACKER_ID),l(t,r.BoardSetting.PROJECT_ID);let e={};l(e,r.LocalSetting.CB_USERNAME),l(e,r.LocalSetting.CB_PASSWORD),yield Promise.all([s.saveBoardSettings(t),s.saveLocalSettings(e)]),yield a.getCodeBeamerUser().then(t=>{d.getCurrentUserId().then(e=>{s.storeUserMapping({cbUserId:t.id,miroUserId:e})}),miro.showNotification("CB Connection OK!"),miro.board.ui.closeModal()}).catch(t=>{miro.showErrorNotification("CB Connection could not be established: "+t),console.log("CB connection could not be established: ",t)})}))}),s.onPluginReady(()=>i(void 0,void 0,void 0,(function*(){u(r.BoardSetting.CB_ADDRESS),u(r.BoardSetting.INBOX_TRACKER_ID),u(r.BoardSetting.PROJECT_ID),c(r.LocalSetting.CB_USERNAME),c(r.LocalSetting.CB_PASSWORD)})))},function(t,e,n){var i,o,r,a,d;i=n(11),o=n(7).utf8,r=n(12),a=n(7).bin,(d=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):o.stringToBytes(t):r(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var n=i.bytesToWords(t),s=8*t.length,c=1732584193,u=-271733879,l=-1732584194,f=271733878,g=0;g<n.length;g++)n[g]=16711935&(n[g]<<8|n[g]>>>24)|4278255360&(n[g]<<24|n[g]>>>8);n[s>>>5]|=128<<s%32,n[14+(s+64>>>9<<4)]=s;var h=d._ff,p=d._gg,m=d._hh,y=d._ii;for(g=0;g<n.length;g+=16){var v=c,S=u,I=l,C=f;c=h(c,u,l,f,n[g+0],7,-680876936),f=h(f,c,u,l,n[g+1],12,-389564586),l=h(l,f,c,u,n[g+2],17,606105819),u=h(u,l,f,c,n[g+3],22,-1044525330),c=h(c,u,l,f,n[g+4],7,-176418897),f=h(f,c,u,l,n[g+5],12,1200080426),l=h(l,f,c,u,n[g+6],17,-1473231341),u=h(u,l,f,c,n[g+7],22,-45705983),c=h(c,u,l,f,n[g+8],7,1770035416),f=h(f,c,u,l,n[g+9],12,-1958414417),l=h(l,f,c,u,n[g+10],17,-42063),u=h(u,l,f,c,n[g+11],22,-1990404162),c=h(c,u,l,f,n[g+12],7,1804603682),f=h(f,c,u,l,n[g+13],12,-40341101),l=h(l,f,c,u,n[g+14],17,-1502002290),c=p(c,u=h(u,l,f,c,n[g+15],22,1236535329),l,f,n[g+1],5,-165796510),f=p(f,c,u,l,n[g+6],9,-1069501632),l=p(l,f,c,u,n[g+11],14,643717713),u=p(u,l,f,c,n[g+0],20,-373897302),c=p(c,u,l,f,n[g+5],5,-701558691),f=p(f,c,u,l,n[g+10],9,38016083),l=p(l,f,c,u,n[g+15],14,-660478335),u=p(u,l,f,c,n[g+4],20,-405537848),c=p(c,u,l,f,n[g+9],5,568446438),f=p(f,c,u,l,n[g+14],9,-1019803690),l=p(l,f,c,u,n[g+3],14,-187363961),u=p(u,l,f,c,n[g+8],20,1163531501),c=p(c,u,l,f,n[g+13],5,-1444681467),f=p(f,c,u,l,n[g+2],9,-51403784),l=p(l,f,c,u,n[g+7],14,1735328473),c=m(c,u=p(u,l,f,c,n[g+12],20,-1926607734),l,f,n[g+5],4,-378558),f=m(f,c,u,l,n[g+8],11,-2022574463),l=m(l,f,c,u,n[g+11],16,1839030562),u=m(u,l,f,c,n[g+14],23,-35309556),c=m(c,u,l,f,n[g+1],4,-1530992060),f=m(f,c,u,l,n[g+4],11,1272893353),l=m(l,f,c,u,n[g+7],16,-155497632),u=m(u,l,f,c,n[g+10],23,-1094730640),c=m(c,u,l,f,n[g+13],4,681279174),f=m(f,c,u,l,n[g+0],11,-358537222),l=m(l,f,c,u,n[g+3],16,-722521979),u=m(u,l,f,c,n[g+6],23,76029189),c=m(c,u,l,f,n[g+9],4,-640364487),f=m(f,c,u,l,n[g+12],11,-421815835),l=m(l,f,c,u,n[g+15],16,530742520),c=y(c,u=m(u,l,f,c,n[g+2],23,-995338651),l,f,n[g+0],6,-198630844),f=y(f,c,u,l,n[g+7],10,1126891415),l=y(l,f,c,u,n[g+14],15,-1416354905),u=y(u,l,f,c,n[g+5],21,-57434055),c=y(c,u,l,f,n[g+12],6,1700485571),f=y(f,c,u,l,n[g+3],10,-1894986606),l=y(l,f,c,u,n[g+10],15,-1051523),u=y(u,l,f,c,n[g+1],21,-2054922799),c=y(c,u,l,f,n[g+8],6,1873313359),f=y(f,c,u,l,n[g+15],10,-30611744),l=y(l,f,c,u,n[g+6],15,-1560198380),u=y(u,l,f,c,n[g+13],21,1309151649),c=y(c,u,l,f,n[g+4],6,-145523070),f=y(f,c,u,l,n[g+11],10,-1120210379),l=y(l,f,c,u,n[g+2],15,718787259),u=y(u,l,f,c,n[g+9],21,-343485551),c=c+v>>>0,u=u+S>>>0,l=l+I>>>0,f=f+C>>>0}return i.endian([c,u,l,f])})._ff=function(t,e,n,i,o,r,a){var d=t+(e&n|~e&i)+(o>>>0)+a;return(d<<r|d>>>32-r)+e},d._gg=function(t,e,n,i,o,r,a){var d=t+(e&i|n&~i)+(o>>>0)+a;return(d<<r|d>>>32-r)+e},d._hh=function(t,e,n,i,o,r,a){var d=t+(e^n^i)+(o>>>0)+a;return(d<<r|d>>>32-r)+e},d._ii=function(t,e,n,i,o,r,a){var d=t+(n^(e|~i))+(o>>>0)+a;return(d<<r|d>>>32-r)+e},d._blocksize=16,d._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=i.wordsToBytes(d(t,e));return e&&e.asBytes?n:e&&e.asString?a.bytesToString(n):i.bytesToHex(n)}},function(t,e){var n,i;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&i.rotl(t,8)|4278255360&i.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=i.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,i=0;n<t.length;n++,i+=8)e[i>>>5]|=t[n]<<24-i%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var e=[],i=0;i<t.length;i+=3)for(var o=t[i]<<16|t[i+1]<<8|t[i+2],r=0;r<4;r++)8*i+6*r<=8*t.length?e.push(n.charAt(o>>>6*(3-r)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],i=0,o=0;i<t.length;o=++i%4)0!=o&&e.push((n.indexOf(t.charAt(i-1))&Math.pow(2,-2*o+8)-1)<<2*o|n.indexOf(t.charAt(i))>>>6-2*o);return e}},t.exports=i},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}}]);