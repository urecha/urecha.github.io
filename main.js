!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{s(i.next(e))}catch(e){r(e)}}function d(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});class o{constructor(){}static getAndSetIds(){return i(this,void 0,void 0,(function*(){o.appId=miro.getClientId(),o.boardId=(yield miro.board.info.get()).id}))}}t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Constants=t.LocalSetting=t.BoardSetting=void 0,function(e){e.PROJECT_ID="projectId",e.CB_ADDRESS="cbAddress",e.INBOX_TRACKER_ID="inboxTrackerId",e.USER_MAPPING="USER_MAPPING"}(t.BoardSetting||(t.BoardSetting={})),function(e){e.CB_USERNAME="cbUsername",e.CB_PASSWORD="cbPassword",e.ADVANCED_SEARCH_ENABLED="ADVANCED_SEARCH_ENABLED",e.SELECTED_TRACKER="SELECTED_TRACKER",e.CBQL_STRING="CBQL_STRING"}(t.LocalSetting||(t.LocalSetting={})),function(e){e.NEWPOS="NEWPOS",e.LS_KEY="codebeamer-miro-plugin"}(t.Constants||(t.Constants={}))},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{s(i.next(e))}catch(e){r(e)}}function d(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getCurrentUserId=t.deleteWidget=t.recreateWidget=t.createOrUpdateWidget=t.findLinesByFromCard=t.findWidgetByTypeAndMetadataId=t.getWidgetDetail=t.getAllSynchedCodeBeamerCardItemIds=void 0;const o=n(0);function r(e){return i(this,void 0,void 0,(function*(){return miro.board.widgets.get({type:e.type}).then(t=>t.filter(e=>!!e.metadata[o.default.appId]).find(t=>t.metadata[o.default.appId].id===e.metadata[o.default.appId].id))}))}function a(e){return i(this,void 0,void 0,(function*(){if(!("CARD"!==e.type||e.x&&e.y)){const t=yield miro.board.viewport.get();let n=Math.random()*t.width/10,i=Math.random()*t.height/10;e.x=t.x+t.width/2+n,e.y=t.y+t.height/2+i}let t=(yield miro.board.widgets.create(e))[0],n=t.metadata[o.default.appId].id;return console.log(`${t.type} widget ${t.id} has been created to match item ${n||"<the settings>"}`),t}))}function d(e){return i(this,void 0,void 0,(function*(){return miro.board.widgets.deleteById(e)}))}t.getAllSynchedCodeBeamerCardItemIds=function(){return i(this,void 0,void 0,(function*(){return(yield miro.board.widgets.get({type:"CARD"})).filter(e=>e.metadata[o.default.appId]&&e.metadata[o.default.appId].id).map(e=>e.metadata[o.default.appId].id)}))},t.getWidgetDetail=function(e){return i(this,void 0,void 0,(function*(){return(yield miro.board.widgets.get(e))[0]}))},t.findWidgetByTypeAndMetadataId=r,t.findLinesByFromCard=function(e){return i(this,void 0,void 0,(function*(){return(yield miro.board.widgets.get({type:"LINE"})).filter(t=>t.metadata[o.default.appId]&&t.startWidgetId===e)}))},t.createOrUpdateWidget=function(e){return i(this,void 0,void 0,(function*(){const t=yield r(e);return t?(e.id=t.id,function(e){return i(this,void 0,void 0,(function*(){let t=(yield miro.board.widgets.update(e))[0],n=t.metadata[o.default.appId].id;return console.log(`${t.type} widget ${t.id} has been updated to match item ${n||"<the settings>"}`),t}))}(e)):a(e)}))},t.recreateWidget=function(e){return i(this,void 0,void 0,(function*(){return yield d(e.id),e.id=void 0,a(e)}))},t.deleteWidget=d,t.getCurrentUserId=function(){return miro.currentUser.getId()}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{s(i.next(e))}catch(e){r(e)}}function d(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(1),a=n(0);class d{constructor(){this.state={onReadyCalled:!1,onReadyFuncs:[]}}static getInstance(){return d.instance||(d.instance=new d),d.instance}onPluginReady(e){this.state.onReadyCalled?e():this.state.onReadyFuncs.push(e)}static runOnPluginReadyFuncs(){for(d.getInstance().state.onReadyCalled=!0;d.getInstance().state.onReadyFuncs.length;)d.getInstance().state.onReadyFuncs.shift().call()}getBoardSetting(e){return this.configWidget.metadata[a.default.appId].settings[e]}saveBoardSettings(e){return i(this,void 0,void 0,(function*(){console.log("Updating metadata: ",e),console.log("ConfigWidget: ",this.configWidget),Object.assign(this.configWidget.metadata[a.default.appId].settings,e),console.log("Metadata: ",this.configWidget.metadata[a.default.appId]),console.log("ConfigWidget: ",this.configWidget)}))}getLocalStoreLocation(){return r.Constants.LS_KEY+"-"+a.default.boardId}saveLocalSettings(e){const t=localStorage.getItem(this.getLocalStoreLocation());let n=null===t?{}:JSON.parse(t);Object.assign(n,e),localStorage.setItem(this.getLocalStoreLocation(),JSON.stringify(n))}getLocalSetting(e){return JSON.parse(localStorage.getItem(this.getLocalStoreLocation())||"{}")[e]}storeUserMapping(e){return i(this,void 0,void 0,(function*(){let t=this.getBoardSetting(r.BoardSetting.USER_MAPPING);t||(t=[]),t=t.filter(t=>t.cbUserId!=e.cbUserId&&t.miroUserId!=e.miroUserId),t.push(e),yield this.saveBoardSettings({[r.BoardSetting.USER_MAPPING]:t})}))}getUserMapping(e){return this.getBoardSetting(r.BoardSetting.USER_MAPPING).find(t=>!(e.cbUserId&&t.cbUserId!=e.cbUserId||e.miroUserId&&t.miroUserId!=e.miroUserId))}static initConfigCard(){return i(this,void 0,void 0,(function*(){if(d.configInitCalled)return;d.configInitCalled=!0;let e=(yield miro.board.widgets.get({type:"CARD"})).filter(e=>!!e.metadata[a.default.appId]).find(e=>!!e.metadata[a.default.appId].settings);if(!e){let t={type:"CARD",title:"CodeBeamer-Miro Settings. Click on the context button to make changes!",capabilities:{editable:!1},metadata:{[a.default.appId]:{settings:{}}},card:{logo:{iconUrl:window.location.href+"img/codeBeamer-Logo.png"}},style:{backgroundColor:"#00A85D"}};e=yield o.createOrUpdateWidget(t)}d.getInstance().configWidget=e}))}}d.configInitCalled=!1,miro.onReady(()=>i(void 0,void 0,void 0,(function*(){yield a.default.getAndSetIds(),function(e){i(this,void 0,void 0,(function*(){(yield miro.board.widgets.areAllWidgetsLoaded())?e():miro.addListener("ALL_WIDGETS_LOADED",e)}))}(()=>i(void 0,void 0,void 0,(function*(){yield d.initConfigCard(),d.runOnPluginReadyFuncs()})))}))),t.default=d},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{s(i.next(e))}catch(e){r(e)}}function d(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.submitNewCodeBeamerItem=t.createOrUpdateCbItem=t.getCodeBeamerAssociationDetails=t.getCodeBeamerOutgoingRelations=t.getCodeBeamerProjectTrackers=t.getCodeBeamerUser=t.getCodeBeamerCbqlResult=t.getCodeBeamerItemURL=t.RELATION_UPSTREAM_REF_TYPE=t.RELATION_OUT_ASSOCIATION_TYPE=void 0;const o=n(2),r=n(5),a=n(3),d=n(1),s=a.default.getInstance();function c(e){if(401===e.status)throw console.log("Go and authorize yourself"),new Error("Go and authorize yourself");if(!e.ok)throw new Error(e.statusText);let t=e.json();if(t.message)throw new Error(t.message);return t}function l(){let e=new Headers({"Content-Type":"application/json"}),t=s.getLocalSetting(d.LocalSetting.CB_USERNAME),n=s.getLocalSetting(d.LocalSetting.CB_PASSWORD);return e.append("Authorization","Basic "+btoa(t+":"+n)),e}function u(){let e=s.getBoardSetting(d.BoardSetting.CB_ADDRESS);return new URL(e)}function f(){let e=u();return e.pathname=e.pathname+"/api/v3",e}function g(e){return i(this,void 0,void 0,(function*(){return e.tracker=yield function(e){return i(this,void 0,void 0,(function*(){return fetch(`${f()}/trackers/${e.id}`,{method:"GET",headers:l()}).then(c)}))}(e.tracker),e.renderedDescription=e.description?"Wiki"===e.descriptionFormat?yield function(e,t){return i(this,void 0,void 0,(function*(){let n={contextId:t.id,contextVersion:t.version,renderingContextType:"TRACKER_ITEM",markup:e};return fetch(`${f()}/projects/${t.tracker.project.id}/wiki2html`,{method:"POST",headers:l(),body:JSON.stringify(n)}).then(e=>e.text())}))}(e.description,e):e.description:"",e}))}function m(e){return i(this,void 0,void 0,(function*(){yield g(e);let t=yield r.convert2Card(e);return e.card=yield o.createOrUpdateWidget(t),e}))}t.RELATION_OUT_ASSOCIATION_TYPE="OutgoingTrackerItemAssociation",t.RELATION_UPSTREAM_REF_TYPE="UpstreamTrackerItemReference",t.getCodeBeamerItemURL=function(e){let t=u();return t.pathname=t.pathname+"/issue/"+e,t},t.getCodeBeamerCbqlResult=function(e,t=1,n=500){return i(this,void 0,void 0,(function*(){try{let i=f();return i.pathname=i.pathname+"/items/query",i.search=`page=${t}&pageSize=${n}&queryString=${e}`,fetch(i.toString(),{method:"GET",headers:l()}).then(c)}catch(e){console.log("Error while getting items from codeBeamer",e)}}))},t.getCodeBeamerUser=function(e){return e||(e=a.default.getInstance().getLocalSetting(d.LocalSetting.CB_USERNAME)),fetch(`${f()}/users/findByName?name=${e}`,{method:"GET",headers:l()}).then(c)},t.getCodeBeamerProjectTrackers=function(e){return i(this,void 0,void 0,(function*(){return e||(e=a.default.getInstance().getBoardSetting(d.BoardSetting.PROJECT_ID)),fetch(`${f()}/projects/${e}/trackers`,{method:"GET",headers:l()}).then(c)}))},t.getCodeBeamerOutgoingRelations=function(e){return i(this,void 0,void 0,(function*(){const t=yield fetch(`${f()}/items/${e.id}/relations`,{method:"GET",headers:l()}).then(c);return t.outgoingAssociations.concat(t.upstreamReferences)}))},t.getCodeBeamerAssociationDetails=function(e){return i(this,void 0,void 0,(function*(){return fetch(`${f()}/associations/${e.id}`,{method:"GET",headers:l()}).then(c)}))},t.createOrUpdateCbItem=m,t.submitNewCodeBeamerItem=function(e){return i(this,void 0,void 0,(function*(){e=yield o.getWidgetDetail({id:e.id});let t=r.convert2CbItem(e),n=yield function(e){return i(this,void 0,void 0,(function*(){return fetch(`${f()}/trackers/${s.getBoardSetting(d.BoardSetting.INBOX_TRACKER_ID)}/items`,{method:"POST",headers:l(),body:JSON.stringify(e)}).then(c)}))}(t);n[d.Constants.NEWPOS]={x:e.x,y:e.y},o.deleteWidget(e),yield m(n),miro.board.selection.selectWidgets({id:n.card.id})}))}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{s(i.next(e))}catch(e){r(e)}}function d(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.convert2CbItem=t.convert2Line=t.convert2Card=void 0;const o=n(0),r=n(4),a=n(1),d=n(3);function s(e){return i(this,void 0,void 0,(function*(){let t={lineType:miro.enums.lineType.ARROW,lineStyle:miro.enums.lineStyle.NORMAL,lineEndStyle:miro.enums.lineArrowheadStyle.ARC_ARROW,lineStartStyle:miro.enums.lineArrowheadStyle.NONE,lineThickness:1};if(e.type===r.RELATION_OUT_ASSOCIATION_TYPE){switch((yield r.getCodeBeamerAssociationDetails(e)).type.id){case 1:t.lineColor="#cf7f30",t.lineEndStyle=miro.enums.lineArrowheadStyle.ARROW,t.lineThickness=5;break;case 4:case 9:t.lineColor="#21cfb7",t.lineStyle=miro.enums.lineStyle.DASHED,t.lineStartStyle=1;break;case 6:case 8:case 7:t.lineColor="#b32525"}}else e.type===r.RELATION_UPSTREAM_REF_TYPE&&(t.lineThickness=3);return t}))}t.convert2Card=function(e){var t,n,s,c;return i(this,void 0,void 0,(function*(){let i={type:"CARD",title:`<a href="${r.getCodeBeamerItemURL(e.id)}">[${e.tracker.keyName}-${e.id}] - ${e.name}</a>`,description:e.renderedDescription,card:{logo:{iconUrl:new URL(window.location.href).origin+"/img/codeBeamer-Logo-BW.png"},customFields:[{mainColor:"#4f8ae8",fontColor:"#ffffff",value:"Status: "+e.status.name}]},capabilities:{editable:!1},metadata:{[o.default.appId]:{id:e.id}}};if(e.release&&(null===(n=null===(t=i.card)||void 0===t?void 0:t.customFields)||void 0===n||n.push({value:"Rel: "+e.release.name})),e.storyPoints&&(null===(c=null===(s=i.card)||void 0===s?void 0:s.customFields)||void 0===c||c.push({value:"SP: "+e.storyPoints})),delete i.assignee,e.assignedTo){let t=e.assignedTo.map(e=>e.id).map(e=>d.default.getInstance().getUserMapping({cbUserId:e})).find(e=>!!e);t&&(i.assignee={userId:t.miroUserId})}let l=function(e){var t=e.customFields?e.customFields.find(e=>"ColorFieldValue"===e.type):null;return t?t.value:null}(e),u=l||(e.tracker.color?e.tracker.color:null);return u&&(i.style={backgroundColor:u}),e[a.Constants.NEWPOS]&&(i.x=e[a.Constants.NEWPOS].x,i.y=e[a.Constants.NEWPOS].y),i}))},t.convert2Line=function(e,t,n){return i(this,void 0,void 0,(function*(){return{type:"LINE",startWidgetId:t,endWidgetId:n,style:yield s(e),capabilities:{editable:!1},metadata:{[o.default.appId]:{id:e.id}}}}))},t.convert2CbItem=function(e){let t={name:"New Item",description:"--"};switch(e.type){case"CARD":const i=(n=e.title,(new DOMParser).parseFromString(n,"text/html").body.textContent);i&&(t.name=i),e.description&&(t.description=e.description);break;case"SHAPE":case"STICKER":e.plainText&&(t.name=e.plainText);break;case"TEXT":e.text&&(t.name=e.text);break;default:throw new Error(`Widget type '${e.type}' not supported`)}var n;return t}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{s(i.next(e))}catch(e){r(e)}}function d(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.syncWithCodeBeamer=void 0;const o=n(5),r=n(2),a=n(4),d=n(0);function s(e){return i(this,void 0,void 0,(function*(){let t=yield a.getCodeBeamerOutgoingRelations(e);const n=yield r.findLinesByFromCard(e.card.id);let s=Promise.all(n.map(e=>i(this,void 0,void 0,(function*(){t.find(t=>e.metadata[d.default.appId].id===t.id)||(console.log(`deleting line ${e.id} because the relation ${e.metadata[d.default.appId].id} does not exist anymore`),yield r.deleteWidget(e))})))),c=Promise.all(t.map(t=>i(this,void 0,void 0,(function*(){const n=yield r.findWidgetByTypeAndMetadataId({type:"CARD",metadata:{[d.default.appId]:{id:t.itemRevision.id}}});console.log(`Association ${t.id}: card for codeBeamer ID ${t.itemRevision.id} is: ${n?n.id:"NOT FOUND (item not synced)"}`),n&&(yield r.createOrUpdateWidget(yield o.convert2Line(t,e.card.id,n.id)))}))));yield Promise.all([s,c])}))}t.syncWithCodeBeamer=function(e){return a.getCodeBeamerCbqlResult(`item.id IN (${e.join(",")})`).then(e=>i(this,void 0,void 0,(function*(){return e.items}))).then(e=>i(this,void 0,void 0,(function*(){console.log("starting createOrUpdateCbItem for all Items");for(let t of e)yield a.createOrUpdateCbItem(t);console.log("starting createUpdateOrDeleteRelationLines for all Items");for(let t of e)yield s(t)})))}}]);