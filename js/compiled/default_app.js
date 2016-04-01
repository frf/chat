/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mibew={};!function(e,t,n){t.Marionette.TemplateCache.prototype.compileTemplate=function(e){return n.compile(e)};for(var i in n.templates)n.templates.hasOwnProperty(i)&&n.registerPartial(i,n.templates[i]);e.Models={},e.Collections={},e.Views={},e.Objects={},e.Objects.Models={},e.Objects.Collections={}}(Mibew,Backbone,Handlebars),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){t.registerHelper("formatTime",function(e){var t=new Date(1e3*e),n=t.getHours().toString(),i=t.getMinutes().toString(),r=t.getSeconds().toString();return n=10>n?"0"+n:n,i=10>i?"0"+i:i,r=10>r?"0"+r:r,n+":"+i+":"+r}),t.registerHelper("urlReplace",function(e){return new t.SafeString(e.toString().replace(/((?:https?|ftp):\/\/\S*)/g,'<a href="$1" target="_blank">$1</a>'))}),t.registerHelper("l10n",function(){var t=e.Localization,n=Array.prototype.slice;return t.trans.apply(t,n.call(arguments))}),t.registerHelper("ifEven",function(e,t){return e%2===0?t.fn(this):t.inverse(this)}),t.registerHelper("ifOdd",function(e,t){return e%2!==0?t.fn(this):t.inverse(this)}),t.registerHelper("ifAny",function(){for(var e=arguments.length,t=arguments[e-1],n=[].slice.call(arguments,0,e-1),i=0,r=n.length;r>i;i++)if(n[i])return t.fn(this);return t.inverse(this)}),t.registerHelper("ifEqual",function(e,t,n){return e==t?n.fn(this):n.inverse(this)}),t.registerHelper("repeat",function(e,t){for(var n="",i=t.fn(this),r=0;e>r;r++)n+=i;return n}),t.registerHelper("replace",function(e,t,n){var i=e.replace(/\\n/g,"\n").replace(/\\t/g,"	").replace(/\\u([A-Za-z0-9])/g,function(e,t){return String.fromCharCode(parseInt(t,16))});return n.fn(this).split(i).join(t)}),t.registerHelper("cutString",function(e,t){return t.fn(this).substr(0,e)}),t.registerHelper("block",function(e,t){return this._blocksStorage&&this._blocksStorage.hasOwnProperty(e)?this._blocksStorage[e]:t.fn(this)}),t.registerHelper("extends",function(e,n){if(this._blocksStorage=this._blocksStorage||{},n.fn(this),!t.templates.hasOwnProperty(e))throw Error('Parent template "'+e+'" is not defined');return t.templates[e](this)}),t.registerHelper("override",function(e,t){return this._blocksStorage.hasOwnProperty(e)||(this._blocksStorage[e]=t.fn(this)),""}),t.registerHelper("ifOverridden",function(e,t){return this._blocksStorage&&this._blocksStorage.hasOwnProperty(e)?t.fn(this):t.inverse(this)}),t.registerHelper("unlessOverridden",function(e,t){return this._blocksStorage&&this._blocksStorage.hasOwnProperty(e)?t.inverse(this):t.fn(this)})}(Mibew,Handlebars),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){e.Localization={};var n={};e.Localization.trans=function(e){var t=Array.prototype.slice.call(arguments,1),i=n.hasOwnProperty(e)?n[e]:e;return i.replace(/\{([0-9]+)\}/g,function(e,n){return t[parseInt(n)]||""})},e.Localization.set=function(e){t.extend(n,e)}}(Mibew,_),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t,n,i){e.Server=function(e){this.updateTimer=null,this.options=i.extend({url:"",requestsFrequency:2,reconnectPause:1,onTimeout:function(){},onTransportError:function(){},onCallError:function(e){},onUpdateError:function(e){},onResponseError:function(e){}},e),this.callbacks={},this.callPeriodically={},this.callPeriodicallyLastId=0,this.ajaxRequest=null,this.buffer=[],this.functions={},this.functionsLastId=0,this.mibewAPI=new t(new this.options.interactionType)},e.Server.prototype.callFunctions=function(e,t,n){try{if(!(e instanceof Array))throw new Error("The first arguments must be an array");for(var i=0;i<e.length;i++)this.mibewAPI.checkFunction(e[i],!1);var r=this.generateToken();this.callbacks[r]=t,this.buffer.push({token:r,functions:e}),n&&this.update()}catch(s){return this.options.onCallError(s),!1}return!0},e.Server.prototype.callFunctionsPeriodically=function(e,t){return this.callPeriodicallyLastId++,this.callPeriodically[this.callPeriodicallyLastId]={functionsListBuilder:e,callbackFunction:t},this.callPeriodicallyLastId},e.Server.prototype.stopCallFunctionsPeriodically=function(e){e in this.callPeriodically&&delete this.callPeriodically[e]},e.Server.prototype.generateToken=function(){var e;do e="wnd"+(new Date).getTime().toString()+Math.round(50*Math.random()).toString();while(e in this.callbacks);return e},e.Server.prototype.processRequest=function(e){var t=new MibewAPIExecutionContext,n=this.mibewAPI.getResultFunction(e.functions,this.callbacks.hasOwnProperty(e.token));if(null===n)for(var i in e.functions)e.functions.hasOwnProperty(i)&&(this.processFunction(e.functions[i],t),this.buffer.push(this.mibewAPI.buildResult(t.getResults(),e.token)));else this.callbacks.hasOwnProperty(e.token)&&(this.callbacks[e.token](n.arguments),delete this.callbacks[e.token])},e.Server.prototype.processFunction=function(e,t){if(this.functions.hasOwnProperty(e["function"])){var n=t.getArgumentsList(e),r={};for(var s in this.functions[e["function"]])this.functions[e["function"]].hasOwnProperty(s)&&(r=i.extend(r,this.functions[e["function"]][s](n)));t.storeFunctionResults(e,r)}},e.Server.prototype.sendRequests=function(e){var t=this;this.ajaxRequest=n.ajax({url:t.options.url,timeout:5e3,async:!0,cache:!1,type:"POST",dataType:"text",data:{data:this.mibewAPI.encodePackage(e)},success:i.bind(t.receiveResponse,t),error:i.bind(t.onError,t)})},e.Server.prototype.runUpdater=function(){this.update()},e.Server.prototype.updateAfter=function(e){this.updateTimer=setTimeout(i.bind(this.update,this),1e3*e)},e.Server.prototype.restartUpdater=function(){this.updateTimer&&clearTimeout(this.updateTimer),this.ajaxRequest&&this.ajaxRequest.abort(),this.updateAfter(this.options.reconnectPause)},e.Server.prototype.update=function(){this.updateTimer&&clearTimeout(this.updateTimer);for(var e in this.callPeriodically)this.callPeriodically.hasOwnProperty(e)&&this.callFunctions(this.callPeriodically[e].functionsListBuilder(),this.callPeriodically[e].callbackFunction);if(0==this.buffer.length)return void this.updateAfter(this.options.requestsFrequency);try{this.sendRequests(this.buffer),this.buffer=[]}catch(t){this.options.onUpdateError(t)}},e.Server.prototype.receiveResponse=function(e,t,n){""==e&&this.updateAfter(this.options.requestsFrequency);try{var i=this.mibewAPI.decodePackage(e);for(var r in i.requests)this.processRequest(i.requests[r])}catch(s){this.options.onResponseError(s)}finally{this.updateAfter(this.options.requestsFrequency)}},e.Server.prototype.registerFunction=function(e,t){return this.functionsLastId++,e in this.functions||(this.functions[e]={}),this.functions[e][this.functionsLastId]=t,this.functionsLastId},e.Server.prototype.unregisterFunction=function(e){for(var t in this.functions)this.functions.hasOwnProperty(t)&&(e in this.functions[t]&&delete this.functions[t][e],i.isEmpty(this.functions[t])&&delete this.functions[t])},e.Server.prototype.onError=function(e,t,n){"abort"!=t&&(this.restartUpdater(),"timeout"==t?this.options.onTimeout():"error"==t&&this.options.onTransportError())}}(Mibew,MibewAPI,$,_),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t,n,i,r){e.Utils={},e.Utils.toUpperCaseFirst=function(e){return"string"!=typeof e?!1:""===e?e:e.substring(0,1).toUpperCase()+e.substring(1)},e.Utils.toDashFormat=function(e){if("string"!=typeof e)return!1;var t=e.match(/((?:[A-Z]?[a-z0-9]+)|(?:[A-Z][a-z0-9]*))/g);if(!t)return"";for(var n=0;n<t.length;n++)t[n]=t[n].toLowerCase();return t.join("-")},e.Utils.checkEmail=function(e){if(!e)return!1;var t=e.split("@");if(t.length<2)return!1;var n=t.pop(),i=t.join("@");return r.isFQDN(n)?/^(([a-zA-Z0-9!#$%&'*+\-/=?\^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-/=?\^_`{|}~]+)*)|(\".+\"))$/.test(i):!1},e.Utils.playSound=function(e){var n=t('audio[data-file="'+e+'"]');if(n.length>0)n.get(0).play();else{var i=t("<audio>",{autoplay:!0,style:"display: none"}).append('<source src="'+e+'.wav" type="audio/x-wav" /><source src="'+e+'.mp3" type="audio/mpeg" codecs="mp3" /><embed src="'+e+'.wav" type="audio/x-wav" hidden="true" autostart="true" loop="false" />');t("body").append(i),t.isFunction(i.get(0).play)&&i.attr("data-file",e)}},e.Utils.buildWindowParams=function(e){var t=n.defaults({},e,{toolbar:!1,scrollbars:!1,location:!1,status:!0,menubar:!1,width:640,heght:480,resizable:!0});return["toolbar="+(t.toolbar?"1":"0"),"scrollbars="+(t.scrollbars?"1":"0"),"location="+(t.location?"1":"0"),"status="+(t.status?"1":"0"),"menubar="+(t.menubar?"1":"0"),"width="+t.width,"height="+t.height,"resizable="+(t.resizable?"1":"0")].join(",")};var s=n.once(function(){i.defaultOptions.className||(i.defaultOptions.className="vex-theme-default"),i.dialog.buttons.YES.text=e.Localization.trans("OK"),i.dialog.buttons.NO.text=e.Localization.trans("Cancel")}),o=function(){return i.getAllVexes().length>0};e.Utils.alert=function(e){s(),o()||i.dialog.alert({message:e})},e.Utils.confirm=function(e,t){s(),i.dialog.confirm({message:e,callback:t})},e.Utils.prompt=function(e,t){s(),i.dialog.prompt({message:e,callback:t})}}(Mibew,jQuery,_,vex,validator),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){e.Models.Base=t.Model.extend({getModelType:function(){return""}})}(Mibew,Backbone),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){e.Models.Control=e.Models.Base.extend({defaults:{title:"",weight:0}})}(Mibew),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){e.Models.Message=e.Models.Base.extend({defaults:{kind:null,created:0,name:"",message:"",plugin:"",data:{}},KIND_USER:1,KIND_AGENT:2,KIND_FOR_AGENT:3,KIND_INFO:4,KIND_CONN:5,KIND_EVENTS:6,KIND_PLUGIN:7})}(Mibew),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){e.Models.Page=t.Model.extend()}(Mibew,Backbone),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){e.Models.Thread=e.Models.Base.extend({defaults:{id:0,token:0,lastId:0,userId:null,agentId:null,state:null},STATE_QUEUE:0,STATE_WAITING:1,STATE_CHATTING:2,STATE_CLOSED:3,STATE_LOADING:4,STATE_LEFT:5,STATE_INVITED:6})}(Mibew),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){e.Models.User=e.Models.Base.extend({defaults:{isAgent:!1,name:""}})}(Mibew),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){e.Collections.Controls=t.Collection.extend({comparator:function(e){return e.get("weight")}})}(Mibew,Backbone),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t,n){e.Views.Control=t.Marionette.ItemView.extend({template:n.templates.default_control,modelEvents:{change:"render"},events:{mouseover:"mouseOver",mouseleave:"mouseLeave"},attributes:function(){var e=[];e.push("control"),this.className&&(e.push(this.className),this.className="");var t=this.getDashedControlType();return t&&e.push(t),{"class":e.join(" ")}},mouseOver:function(){var e=this.getDashedControlType();this.$el.addClass("active"+(e?"-"+e:""))},mouseLeave:function(){var e=this.getDashedControlType();this.$el.removeClass("active"+(e?"-"+e:""))},getDashedControlType:function(){return"undefined"==typeof this.dashedControlType&&(this.dashedControlType=e.Utils.toDashFormat(this.model.getModelType())||""),this.dashedControlType}})}(Mibew,Backbone,Handlebars),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t,n){e.Views.Message=t.Marionette.ItemView.extend({template:n.templates.message,className:"message",modelEvents:{change:"render"},serializeData:function(){var e=this.model.toJSON(),t=this.model.get("kind");return e.kindName=this.kindToString(t),e},kindToString:function(e){return e==this.model.KIND_USER?"user":e==this.model.KIND_AGENT?"agent":e==this.model.KIND_FOR_AGENT?"hidden":e==this.model.KIND_INFO?"info":e==this.model.KIND_CONN?"connection":e==this.model.KIND_EVENTS?"event":e==this.model.KIND_PLUGIN?"plugin":""}})}(Mibew,Backbone,Handlebars),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t,n){var i=function(t,i,r){var s=n.extend({model:t},r);if("function"!=typeof t.getModelType)return new i(s);var o=t.getModelType();return o&&e.Views[o]?new e.Views[o](s):new i(s)};e.Views.CollectionBase=t.Marionette.CollectionView.extend({childView:t.Marionette.ItemView,buildChildView:i}),e.Views.CompositeBase=t.Marionette.CompositeView.extend({buildChildView:i})}(Mibew,Backbone,_),/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){e.Views.ControlsCollection=e.Views.CollectionBase.extend({className:"controls-collection",getChildView:function(t){return e.Views.Control}})}(Mibew);