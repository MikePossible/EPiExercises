//>>built
define("epi-cms/contentediting/FloatingEditorWrapper",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-geometry","dojo/aspect","dojo/Deferred","dojo/has","dojo/when","epi/dependency","epi/string","epi/shell/widget/dialog/LightWeight","epi-cms/contentediting/OverlayBasedEditorWrapper"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c){return _2([_c],{formContainerWidgetType:"epi/shell/widget/FormContainer",destroy:function(){this._removeEditingFeatures();this._destroyDialog();this.inherited(arguments);},startEdit:function(_d){_3.mixin(this.editorParams,_d);var _e=this,_f=new _6();_e._destroyDialog();_8(_e._setupDialog(),function(){_e._dialog.show();_e.own(_5.after(_e._dialog,"onAfterShow",function(){_e._startEdit(_d);_e._onTryToStopWithInvalidValue();_f.resolve();}));});return _f;},_createDialog:function(_10){return new _b({title:this.propertyDisplayName,content:_10,duration:350,snapToNode:this.blockDisplayNode,positioner:_9.resolve("epi.shell.layout.PositioningUtility")});},_setupDialog:function(){var _11={};var _12=function(_13,_14){_11[_13]=_14;};var _15=_3.hitch(this,function(_16){for(var _17 in _11){var _18=_11[_17];_18.set("parent",this);if(_18.stopEditOnBlur===true){this.connect(_18,"onBlur",this.onStopEdit);}}_11=null;});var _19=_3.mixin({intermediateChanges:true},this.editorParams);if(this.editorWidgetType===this.formContainerWidgetType){_3.mixin(_19,{onFieldCreated:_12,onFormCreated:_15});}var def=new _6();var _1a=_a.slashName(this.editorWidgetType);require([_1a],_3.hitch(this,function(_1b){var _1c=new _1b(_19);this.editorWidget=_1c;var _1d=this._createDialog(_1c);this._handlers=[this.connect(_1d,"onButtonClose",this._onButtonClose),this.connect(_1d,"onCancel",this._onDialogCancel),this.connect(_1d.doneButtonNode,"onClick",this._onButtonClose),this.connect(_1c,"onChange",this._onChange),this.connect(_1c,"onKeyPress","_onEditorKeyPress")];this._dialog=_1d;if(this._createdEditor&&this.editorWidget.startup){this.editorWidget.startup();}def.resolve();}));return def;},_onDialogCancel:function(){this.cancel();},_destroyDialog:function(){_1.forEach(this._handlers,function(_1e){_1e.remove();});if(this._dialog){this._dialog.destroy();this._dialog=null;}if(this.editorWidget){this.editorWidget.destroy();this.editorWidget=null;}},_removeEditingFeatures:function(){if(this._dialog.open){this._dialog.hide();}},_onTryToStopWithInvalidValue:function(){dijit.focus(this._dialog.titleNode);if(this.editorWidget.focus){this.editorWidget.focus();}},_onButtonClose:function(){if(!this.editorWidget.isShowingChildDialog){this.tryToStopEditing(false);}}});});