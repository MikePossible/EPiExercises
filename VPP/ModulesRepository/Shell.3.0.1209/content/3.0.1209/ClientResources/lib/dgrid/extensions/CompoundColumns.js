//>>built
define("dgrid/extensions/CompoundColumns",["dojo/_base/lang","dojo/_base/declare","dgrid/util/misc","xstyle/css!../css/extensions/CompoundColumns.css"],function(_1,_2,_3){return _2(null,{configStructure:function(){var _4=(this.subRows&&this.subRows[0])||this.columns,_5=[[]],_6=[];_5[0].className="dgrid-spacer-row";function _7(_8,_9,_a){var _b=0,_c=function(){},_d,_e,_f;function _10(_11,i){_e=_11.children;_f=_11.children&&(_11.showChildHeaders!==false);if(_e){_b+=(_11.colSpan=_7(_e,_9+1,_f));}else{_6.push(_11);_5[0].push(_1.delegate(_11,{renderHeaderCell:_c}));_b++;}if(!_f){_11=_1.delegate(_11,{rowSpan:-_9});}if(_a){(_5[_9]||(_5[_9]=[])).push(_11);}};_3.each(_8,_10,this);return _b;};_7(_4,1,true);var _12=_5.length,i,j,_13,_14;for(i=0;i<_12;i++){_13=_5[i];for(j=0;j<_13.length;j++){_14=_13[j];if(_14.rowSpan<1){_14.rowSpan+=_12;}}}_6=[_6];_6.headerRows=_5;this.subRows=_6;this.inherited(arguments);}});});