//>>built
define("epi-cms/contentediting/LanguageNotification",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/dom-construct","epi/dependency","epi-cms/ApplicationSettings","epi-cms/contentediting/_ContentEditingNotification","epi-cms/contentediting/command/Editing","epi/i18n!epi/cms/nls/episerver.cms.contentediting.languagenotification"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){return _1([_8],{_onExecuteSuccess:function(_b){if(!_b.languageContext){return;}var _c=_6.resolve("epi.storeregistry").get("epi.cms.language");_c.query().then(_2.hitch(this,function(_d){languageResource={};_3.forEach(_d,function(_e){languageResource[_e.languageId]=_e.name;},this);var _f=_b.languageContext.warning;var _10=_7.currentContentLanguage;var _11=_b.languageContext;var _12;if(_10!=_11.preferredLanguage&&_11.isTranslationNeeded){_f=_2.replace(_a.nottranslatedswitchto,[languageResource[_11.language],languageResource[_11.preferredLanguage]]);_12=_11.preferredLanguage;}else{if(_10!=_11.language&&!_11.isTranslationNeeded){_f=_2.replace(_a.workinginwrongsite,[languageResource[_10],languageResource[_11.language]]);_12=_11.language;}}if(!_f){this._setNotification(null);return;}var _13=_5.create("div",{innerHTML:_f});if(_12){var url=new _4(window.top.location.href);var _14=_2.replace(_a.switchto,[languageResource[_12]]);var _15=_5.create("a",{href:[url.scheme,"://",url.authority,url.path,"?language=",_12,"#context=",_b.versionAgnosticUri].join(""),innerHTML:_14,title:_14},_13);}this._setNotification({content:_13,commands:_11.isTranslationNeeded&&_10==_11.preferredLanguage?[_9.translate]:[]});}));}});});