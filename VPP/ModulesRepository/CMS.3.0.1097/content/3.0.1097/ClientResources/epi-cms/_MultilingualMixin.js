//>>built
define("epi-cms/_MultilingualMixin",["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/_base/lang","epi/dependency","epi-cms/ApplicationSettings","epi-cms/component/SiteTreeModel"],function(_1,_2,_3,_4,_5,_6,_7){return _1([],{isMultilingual:false,_application:null,_siteTreeModel:null,_cachedValue:undefined,constructor:function(_8){_4.mixin(this,_8);},_isSiteMultilingual:function(){var _9=new _2();if(this._cachedValue!==undefined){_9.resolve(this._cachedValue);}if(!this._siteTreeModel){var _a=_5.resolve("epi.storeregistry"),_b=_a.get("epi.cms.sitestructure");this._siteTreeModel=new _7({store:_b});}_3(this._siteTreeModel.getAllLanguagesForCurrentSite(),_4.hitch(this,function(_c){this._cachedValue=_c.length>=2;_9.resolve(this._cachedValue);}));return _9;},_contentExistsInCurrentLanguage:function(_d){if(!_d){return false;}if(_d.capabilities&&!_d.capabilities.language){return true;}if(!_d.currentLanguageBranch){return false;}return _6.currentContentLanguage===_d.currentLanguageBranch.languageId;}});});