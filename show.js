/**
* 重写alert
* @param str : alertx显示信息       类型: string
* @param time: alert显示时间 	    类型: number			
* @param type: alert的类型			类型: string		
*/
;(function(factory) {
	var show = factory();
	if(typeof define === 'function' && define.amd) {
		//AMD
		define(['show'], function() {
			return show;
		});
	} else if( typeof exports === 'object') {
		//Node.js
		module.exports = show;
	}else {
		//普通
		window.show = show;
	}
})(function() {

	var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	
	var hasOwnProperty = ObjProto.hasOwnProperty;

  
	var nativeKeys = Object.keys;

	var isObject = function(obj) {
		return typeof obj === 'object' && !!obj
	}

	var getKeys = function(obj) {
		if(!isObject(obj)) return [];
		if(nativeKeys) return nativeKeys(obj);
		var keys = [];
		for(var key in obj) {
			if(hasOwnProperty.call(obj, key)) {
				keys.push(key);
			} 
		}
		return keys;
	}

	var extend = function(obj) {
		var length = arguments.length;
		if(length < 2 && obj == null) return obj;
		for(var i = 1; i < arguments.length; i++) {
			var source = arguments[i],
				keys = getKeys(source),
				l = keys.length;
			for(var j = 0; j < l; j++) {
				var key = keys[j];
				obj[key] = source[key];
			}
		}
		return obj;
	}

	var trim = function (str) {
	    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	}

	var getWindowWidth = function() {
		if(document.compatMode == "BackCompat") {
		     return document.body.clientWidth;
		}else {
		     return document.documentElement.clientWidth;
		}
	}

	var showObj = {
		"_is_load": false,
		"_timer": null,
		"showAlertBox": function(params) {
			if(!this._is_load) {
				var styleArr = [];
				styleArr.push('top: 0');
				styleArr.push('left:0');
				styleArr.push('zIndex:9999999999');
				styleArr.push('padding:5px 10px');
				styleArr.push('minWidth:300px');
				styleArr.push('height:40px');
				styleArr.push('lineHeight:30px');
				styleArr.push('borderRadius:0 0 4px 4px');
				styleArr.push('fontSize:16px');
				styleArr.push('color:#FFF');
				styleArr.push('boxSizing:border-box');
				styleArr.push('position:fixed');
				styleArr.push('textAlign:center');

				var temp = document.createDocumentFragment();
				this.oDiv = document.createElement('div');
				for(var i = 0, l = styleArr.length; i < l; i++) {
					var key = trim(styleArr[i].split(':')[0]);
					var value = trim(styleArr[i].split(':')[1]);
					this.oDiv.style[key] = value;
				}
				temp.appendChild(this.oDiv);
				if(document.compatMode == "BackCompat") {
				    document.body.appendChild(temp);
				}else {
				    document.documentElement.appendChild(temp);
				}
				this._is_load = true;
				this.doEvent(params);
			}else {
				this.doEvent(params);
			}
		},
		"doEvent": function(params) {
			var _this = this
			if(this.timer) {
				clearTimeout(this.timer);
			} 

			this.oDiv.style.display = 'block';
			this.oDiv.innerHTML = params.str;

			var left = getWindowWidth()/2 - this.oDiv.offsetWidth/2;
			var background = params.type == 'ok' ? '#dff0d8' : '#bcdff1';
			var border = params.type == 'ok' ? '#d0e9c6' : '#bcdff1';
			var color = params.type == 'ok' ? '#3c763d' : '#31708f';

			this.oDiv.style.left = left + 'px';
			this.oDiv.style.background = background;
			this.oDiv.style.border = border;
			this.oDiv.style.color = color;

			this.oDiv.onmouseover = function() {
				clearTimeout(_this.timer);
			}
			this.oDiv.onmouseout = function(){
				_this.timer = setTimeout(function() {
					_this.oDiv.style.display = 'none';
				}, params.time ? params.time:2000);
			}
			this.timer = setTimeout(function(){
				_this.oDiv.style.display = 'none';
			}, params.time ? params.time:2000);
		}
	}

	var show = function(str, time, type) {
		var params = extend({
			"str": "",
			"time": 2000,
			"type": "ok"
		}, {
			"str": str,
			"time": time,
			"type": type
		})
		showObj.showAlertBox(params);
	}

	return show;

});