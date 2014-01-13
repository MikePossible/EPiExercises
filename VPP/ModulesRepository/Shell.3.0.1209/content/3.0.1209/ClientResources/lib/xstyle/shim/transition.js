//>>built
define("xstyle/shim/transition",["../main"],function(_1){var _2=[];function _3(_4){if(_4.propertyName!="className"){return;}var _5=_4.srcElement;var _6=_5._transitions;var _7=_5._previousStyle;var _8=_5.runtimeStyle;var _9=_5.currentStyle;for(var i in _7){var _a=_8[i];if(!_6){_5._transitions=_6={};}var _b=_7[i];var _c=_9[i];_8[i]=_a;if(_b!=_c&&(_b||_a)){var _d=_e(_c);if(_d.units){var _f=_e(_a);var _10=_11(_d,_f);var _12=_e(_b);var _13=_11(_d,_12);if(_13&&_10&&_12.units==_d.units){var _14=_6[i];if(_14){_14.at=1;}var _15=_15||(_16=new Date().getTime());_14=_6[i]={from:(_b||_a),element:_5,to:_c,startTime:_15,duration:_5._transitionDuration*_10/_13,timing:_17[_5._transitionTiming||"ease"],property:i,t:0};if(!_18(_14)){_2.push(_14);}_7[i]=_c;}}}}};var rgb=/^rgba?\(([0-9,]+)\)/i;var hex=/#([0-9a-f]+)/i;var _19=/([-0-9\.]+)([\w]+)/;function _e(_1a){var _1b=_1a.match(rgb);if(_1b){var _1c=_1b[1].split(",");for(var i=0;i<4;i++){_1c[0]=+(_1c[0]||0);}}else{if(_1b=_1a.match(hex)){_1b=_1b[1];var _1c=[];var _1d=_1b.length==3;_1c[0]=parseInt(_1b[0]+_1b[_1d?0:1],16);_1c[1]=parseInt(_1b[_1d?1:2]+_1b[_1d?1:3],16);_1c[2]=parseInt(_1b[_1d?2:4]+_1b[_1d?2:5],16);_1c.units="rgb";return _1c;}else{if(_1b=_1a.match(_19)){_1c=[_1b[1]];_1c.units=_1b[2];return _1c;}else{return [];}}}_1c.units="rgb";return _1c;};function _11(_1e,end){var sum=0;for(var i=0;i<_1e.length;i++){sum+=Math.abs((end[i]||0)-(_1e[i]||0));}return sum;};function _1f(_20,end,_21){var mid=[];for(var i=0;i<_20.length;i++){mid[i]=end[i]*_21-_20[i]*(_21-1);}if(_20.units=="rgb"){return "#"+mid[0].toString(16)+mid[1].toString(16)+mid[2].toString(16)+mid[3].toString(16);}else{return mid[0]+_20.units;}};var _2=[];var _16=new Date().getTime();var _22=30;setInterval(function(){var _23=_16;_16=new Date().getTime();for(var i=0,l=_2.length;i<l;i++){if(_18(_2[i])){_2.splice(i--,1);l--;}}},_22);function _18(_24){var _25=_24.element;runtimeStyle=_25.runtimeStyle;var t=_24.t=(_16-_24.startTime)/1000/_24.duration;if(t>=1){runtimeStyle[_24.property]="";return true;}runtimeStyle[_24.property]=_1f(_e(_24.from),_e(_24.to),_24.timing(_24.t));};var _17={ease:_26(0.25,0.1,0.25,1),linear:_26(0,0,1,1),"ease-in":_26(0.42,0,1,1),"ease-out":_26(0,0,0.58,1),"ease-in-out":_26(0.42,0,0.58,1)};function _26(x0,y0,x1,y1){var p1=((y0+0.01)/(x0+0.01))/3;var p2=1-((1.01-y1)/(1.01-x1))/3;return function(t){return 3*(1-t)*(1-t)*t*p1+3*(1-t)*t*t*p2+t*t*t;};};function _27(t){var v=((x0-Math.sqrt(x0*x0+t*(x1-2*x0)))/(2*x0-x1)*2/3*(1-t)*(1-t)+((x1-x0-Math.sqrt((x1-x0)*(x1-x0)+(t-x0)*((1-x0)-2*(x1-x0))))/(2*(x1-x0)-1+x0)*2/3+1/3)*t*t)/((1-t)*(1-t)+t*t);var v=(x0-x1+Math.sqrt((x1-x0)*(x1-x0)-(1+x0-t)*(x0-2*x1)))/(1+x0-t);return t*t*(1-t)+(1-(1-t)*(1-t))*t;};return {onProperty:function(_28,_29,_2a){return _1.addRenderer(_28,_29,_2a,function(_2b){var _2c=_2b.currentStyle;var _2d=_2b._previousStyle={};if(_28=="transition-duration"){_2b._transitionDuration=parseFloat(_29);}for(var i in _2c){_2d[i]=_2c[i];}_2b.attachEvent("onpropertychange",_3);});}};});