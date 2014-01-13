//>>built
define("epi-cms/widget/_GridWidgetBase",["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/dom-construct","dojo/keys","dojo/topic","dojo/when","dgrid/Keyboard","dgrid/OnDemandGrid","dgrid/Selection","dijit/layout/_LayoutWidget","epi","epi/datetime","epi/UriParser","epi/username","epi/shell/dgrid/Formatter","epi/shell/TypeDescriptorManager","epi-cms/_ContentContextMixin","epi-cms/core/ContentReference","epi-cms/dgrid/DnD","epi-cms/dgrid/formatters","epi-cms/dgrid/WithContextMenu","epi/dependency"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,DnD,_14,_15,_16){return _1([_b,_12],{_gridClass:_1([_9,_10,_a,DnD,_8,_15]),storeKeyName:null,grid:null,store:null,ignoreVersionWhenComparingLinks:true,trackActiveItem:true,defaultGridMixin:null,currentItem:null,contextChangeEvent:"click",postMixInProperties:function(){this.inherited(arguments);this.defaultGridMixin={selectionMode:"single",dndParams:{creator:_2.hitch(this,this._dndNodeCreator),copyOnly:true,selfAccept:false}};if(!this.store&&this.storeKeyName){var _17=_16.resolve("epi.storeregistry");this.store=_17.get(this.storeKeyName);}},startup:function(){this.inherited(arguments);if(this.contextChangeEvent){var _18=_2.hitch(this,"_onChangeContext");this.grid.on(".dgrid-row:"+this.contextChangeEvent,_18);if(typeof this.grid.addKeyHandler=="function"){this.grid.addKeyHandler(_5.ENTER,_18);this.grid.addKeyHandler(_5.SPACE,_18);}}this.grid.on("dgrid-select",_2.hitch(this,"_onSelect"));this.grid.on("dgrid-error",_2.hitch(this,"_onError"));if(this.trackActiveItem){this.own(_3.after(this.grid,"insertRow",_2.hitch(this,this._selectActiveItem)));}this.own(this.connect(this,"layout",_2.hitch(this,function(){this.grid.resize();})));this.grid.startup();},destroy:function(){if(this.grid){this.grid.destroy();}this.inherited(arguments);},select:function(_19){this.grid.clearSelection();if(_19){var _1a=(_19 instanceof _13?_19:new _13(_19.id)).createVersionUnspecificReference().toString();this.grid.select(_1a);}},_forceKeepContext:function(uri){return this._isSameAsCurrentContext(uri);},_onChangeContext:function(e){var row=this.grid.row(e),uri=row.data.uri,_1b={uri:uri};if(this._forceKeepContext(uri)){return;}this._requestNewContext(_1b,{sender:this});},_onSelect:function(e){},_onError:function(_1c){var _1d=this.grid.errorMessage;if(_1c.status&&_1c.status===403){_1d=_c.resources.messages.nopermissiontoviewdata;}this._showErrorMessage(_1d);},_requestNewContext:function(_1e,_1f){_6.publish("/epi/shell/context/request",_1e,_1f);},restore:function(){this.resize();},_isActiveItem:function(row){return _7(this.getCurrentContext(),_2.hitch(this,function(_20){var _21=row.data.uri;return _20&&this._compareUris(_21,_20.uri);}));},_selectActiveItem:function(_22){var row=this.grid.row(_22);if(!row){return _22;}_7(this._isActiveItem(row),_2.hitch(this,function(_23){if(_23){if(this.grid.selectionMode==="single"){this.grid.clearSelection();}this.grid.select(row,null);}}));return _22;},contextChanged:function(_24,_25){this.inherited(arguments);if(_24.type!=="epi.cms.contentdata"){return;}if(!_25||_25.sender!=this){this.onContextChanged(_24);}},onContextChanged:function(_26){this.fetchData();},fetchData:function(){},_showErrorMessage:function(_27){this.grid.cleanup();this.grid.contentNode.innerHTML=_27||"";},contextChangeFailed:function(_28,_29,_2a){this.inherited(arguments);if(_2a&&_2a.sender===this){this._selectActiveItem();}},_renderContentItem:function(_2b,_2c,_2d,_2e){_2d.innerHTML=_14.contentItem(_2b.typeIdentifier,_2b.missingLanguageBranch,_2c);},_localizeDate:function(_2f){return _14.localizedDate(_2f);},_createUserFriendlyUsername:function(_30){return _14.userName(_30);},_dndNodeCreator:function(_31,_32){var _33=_11.getAndConcatenateValues(_31.typeIdentifier,"dndTypes");if(!_33&&this.dndTypes){_33=this.dndTypes;}var _34=_4.create("div").appendChild(document.createTextNode(_31.name));return {"node":_34,"type":_33,"data":_31};},_aroundInsertRow:function(_35){return _2.hitch(this,function(_36,_37,_38,i,_39){var row=_35.apply(this.grid,arguments);var _3a=this.get("currentItem");if(_3a){var _3b=(_3a instanceof _13?_3a:new _13(_3a.id)).createVersionUnspecificReference().toString();if(_3b===_36.contentLink){this.select(_3a);}}return row;});},_getCurrentItem:function(){return _7(this.getCurrentContext(),function(_3c){return {"id":(new _13(_3c.id)).id};});}});});