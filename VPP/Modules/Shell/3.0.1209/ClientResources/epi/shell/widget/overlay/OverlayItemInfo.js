//>>built
require({cache:{"url:epi/shell/widget/overlay/templates/OverlayItemInfo.html":"<span class=\"epi-overlay-content\">\r\n    <span data-dojo-attach-point=\"highlightArea\" class=\"epi-overlay-content-highlight-area\"></span>\r\n</span>"}});define("epi/shell/widget/overlay/OverlayItemInfo",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/html/entities","epi/string","epi/shell/widget/Tooltip","dojo/text!./templates/OverlayItemInfo.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c){return _2([_7,_8],{templateString:_c,postCreate:function(){this.inherited(arguments);this.showStatusMessage(false);},destroy:function(){this.inherited(arguments);this._destroyTooltip();},showStatusMessage:function(_d){if(this._tooltip){_d?this._tooltip.open(this.domNode):this._tooltip.close();}},_setStatusIconAttr:function(_e){var _f=_3.isArray(_e);if(_f){_1.forEach(_e,function(_10){_4.add(this.highlightArea,_10);},this);}else{_4.add(this.highlightArea,_e);}},_setStatusMessageAttr:function(_11){if(!_11){return;}var _12=_3.isArray(_11);if(this._tooltip){if(_12){this._tooltip.tooltipRows=_11;}else{this._tooltip.label=_9.encode(_11);}}else{var _13=_5.create("div",{"class":"epi-overlay-content-tooltip",innerHTML:_a.toHTML(_9.encode(_11))}),_14=_12?{tooltipRows:_11}:{label:_13.outerHTML};this._tooltip=new _b(_14);}},_destroyTooltip:function(){if(this._tooltip){this._tooltip.destroyRecursive();this._tooltip=null;}}});});