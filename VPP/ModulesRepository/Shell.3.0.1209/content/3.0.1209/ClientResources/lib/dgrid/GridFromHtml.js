//>>built
define("dgrid/GridFromHtml",["./Grid","dojo/_base/declare","put-selector/put"],function(_1,_2,_3){var _4="data-dgrid-column";function _5(_6){var _7=[],_8=_6.getElementsByTagName("tr"),_9=_8.length,_a=_b.utils.getColumnFromCell,_c,tr,_d,_e;for(var i=0;i<_9;i++){_c=[];_7.push(_c);tr=_8[i];_d=tr.getElementsByTagName("th"),_e=_d.length;for(var j=0;j<_e;j++){_c.push(_a(_d[j]));}}if(tr){_6.removeChild(tr.parentNode);}return _7;};var _b=_2(_1,{configStructure:function(){if(!this._checkedTrs){this._checkedTrs=true;this.subRows=_5(this.srcNodeRef,this.subRows);}return this.inherited(arguments);},create:function(_f,_10){var div=document.createElement("div"),id=_10.id,_11=_10.getAttribute("style");if(id){this.id=id;}div.className=_10.className;_11&&div.setAttribute("style",_11);_10.parentNode.replaceChild(div,_10);(_f=_f||{}).srcNodeRef=_10;this.inherited(arguments,[_f,div]);_3(_10,"!");}});_b.utils={getBoolFromAttr:function(_12,_13){var val=_12.getAttribute(_13);return val&&val!=="false";},getNumFromAttr:function(_14,_15){var val=_14.getAttribute(_15);val=val&&Number(val);return isNaN(val)?undefined:val;},getPropsFromNode:function(_16){var obj,str=_16.getAttribute(_4);if(!str){return {};}try{obj=eval("("+str+")");}catch(e){throw new Error("Error in "+_4+" {"+str+"}: "+e.toString());}return obj;},getColumnFromCell:function(th){var _17=_b.utils.getNumFromAttr,obj,tmp;obj=_b.utils.getPropsFromNode(th);obj.label="label" in obj?obj.label:th.innerHTML;obj.field=obj.field||th.className||th.innerHTML;if(!obj.className&&th.className){obj.className=th.className;}if(!obj.rowSpan&&(tmp=_17(th,"rowspan"))){obj.rowSpan=tmp;}if(!obj.colSpan&&(tmp=_17(th,"colspan"))){obj.colSpan=tmp;}return obj;}};return _b;});