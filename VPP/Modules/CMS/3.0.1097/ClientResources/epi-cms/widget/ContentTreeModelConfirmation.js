//>>built
define("epi-cms/widget/ContentTreeModelConfirmation",["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/Deferred","dojo/string","dojo/when","dojo/_base/json","dojox/html/entities","epi/dependency","epi/string","epi/shell/TypeDescriptorManager","epi/shell/widget/dialog/Alert","epi/shell/widget/dialog/Confirmation","epi-cms/contentediting/ContentActionSupport","epi-cms/widget/sharedContentDialogHandler","epi/i18n!epi/cms/nls/episerver.cms.components.pagetree"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,res){return function(_10){var _11=function(_12){return _12&&typeof _12=="function";};var _13=function(_14,_15){var _16=new _c({destroyOnHide:true,description:_a.toHTML(_14),onAction:function(){if(_11(_15)){_15();}}});_16.show();};var _17=function(_18,_19){var _1a=new _4();_6(_19,function(_1b){var _1c=new _d({destroyOnHide:true,description:_a.toHTML(_1b),title:_18,onAction:function(_1d){_1d?_1a.resolve():_1a.cancel();}});_1c.show();});return _1a;};var _1e=function(_1f,_20){_6(_1f,function(_21){if(_21&&(_21.message||_21.statusDescription)){var _22=_21.message||_21.statusDescription;_13(_22,_20);}else{if(_11(_20)){_20();}}},function(e){_13(_8.encode(_7.fromJson(e.xhr.responseText)));});return _1f;};_3.around(_10,"pasteItem",function(_23){return function(_24,_25,_26,_27,_28){var _29=_b.getResourceValue(_24.typeIdentifier,"move");var _2a=true;if(_26.isWastebasket){_2a=_f({contentData:_24});}else{if(_28!==undefined&&(_26.properties.pageChildOrderRule!==_e.sortOrder.Index)){var _2b=_5.substitute(res.changepeerorderconfirmation,[_10.getLabel(_26)]);_2a=_17(_29,_2b);}else{if(!_27){if(!_10.canCut(_24)){_13(_b.getResourceValue(_24.typeIdentifier,"moverequiresdeleteaccess"),function(){return false;});return;}_2a=_17(_29,_b.getResourceValue(_24.typeIdentifier,"moveconfirmation"));}else{if(!_10.canCopy(_24)){_13(_b.getResourceValue(_24.typeIdentifier,"copynotsupported"));return;}}}}var _2c=arguments;return _6(_2a,function(){return _23.apply(_10,_2c);},function(){return false;});};});_3.after(_10,"pasteItem",function(_2d){return _2d&&_1e(_2d);});_3.after(_10,"remove",function(_2e){return _2e&&_1e(_2e);});return _10;};});