(function (console, $global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
var com_dango_$itimi_geom_PointUtil = function() { };
com_dango_$itimi_geom_PointUtil.__name__ = true;
com_dango_$itimi_geom_PointUtil.xy = function(point,x,y) {
	point.x = x;
	point.y = y;
};
com_dango_$itimi_geom_PointUtil.convert = function(pt) {
	return { x : pt.x, y : pt.y};
};
com_dango_$itimi_geom_PointUtil.create = function(x,y) {
	return { x : x, y : y};
};
com_dango_$itimi_geom_PointUtil.clone = function(p0) {
	return { x : p0.x, y : p0.y};
};
com_dango_$itimi_geom_PointUtil.lengthSqr = function(p0) {
	return p0.x * p0.x + p0.y * p0.y;
};
com_dango_$itimi_geom_PointUtil.getLength = function(p0) {
	return Math.sqrt(p0.x * p0.x + p0.y * p0.y);
};
com_dango_$itimi_geom_PointUtil.angle = function(p0) {
	return Math.atan2(p0.y,p0.x);
};
com_dango_$itimi_geom_PointUtil.angleBetween = function(p0,p1) {
	return Math.atan2(p0.y - p1.y,p0.x - p1.x);
};
com_dango_$itimi_geom_PointUtil.distanceSqr = function(p0,p1) {
	var x = p0.x - p1.x;
	var y = p0.y - p1.y;
	return x * x + y * y;
};
com_dango_$itimi_geom_PointUtil.distance = function(p0,p1) {
	var x = p0.x - p1.x;
	var y = p0.y - p1.y;
	return Math.sqrt(x * x + y * y);
};
com_dango_$itimi_geom_PointUtil.dot = function(p0,p1) {
	return p0.x * p1.x + p0.y * p1.y;
};
com_dango_$itimi_geom_PointUtil.cross = function(p0,p1) {
	return p0.x * p1.y - p0.y * p1.x;
};
com_dango_$itimi_geom_PointUtil.equals = function(p0,p1) {
	return p0.x == p1.x && p0.y == p1.y;
};
com_dango_$itimi_geom_PointUtil.nearEquals = function(p0,p1,t) {
	if(t == null) t = 0.0;
	var x = Math.abs(p0.x - p1.x);
	var y = Math.abs(p0.y - p1.y);
	return x <= t && y <= t;
};
com_dango_$itimi_geom_PointUtil.gt = function(p0,p1) {
	return p0.x > p1.x && p0.y > p1.y;
};
com_dango_$itimi_geom_PointUtil.gte = function(p0,p1) {
	return p0.x >= p1.x && p0.y >= p1.y;
};
com_dango_$itimi_geom_PointUtil.lt = function(p0,p1) {
	return p0.x < p1.x && p0.y < p1.y;
};
com_dango_$itimi_geom_PointUtil.lte = function(p0,p1) {
	return p0.x <= p1.x && p0.y <= p1.y;
};
com_dango_$itimi_geom_PointUtil.polar = function(l,a) {
	return { x : l * Math.cos(a), y : l * Math.sin(a)};
};
com_dango_$itimi_geom_PointUtil.add = function(p0,p1) {
	return { x : p0.x + p1.x, y : p0.y + p1.y};
};
com_dango_$itimi_geom_PointUtil.sub = function(p0,p1) {
	return { x : p0.x - p1.x, y : p0.y - p1.y};
};
com_dango_$itimi_geom_PointUtil.mul = function(p0,s) {
	return { x : p0.x * s, y : p0.y * s};
};
com_dango_$itimi_geom_PointUtil.div = function(p0,s) {
	return { x : p0.x / s, y : p0.y / s};
};
com_dango_$itimi_geom_PointUtil.abs = function(p0) {
	return { x : Math.abs(p0.x), y : Math.abs(p0.y)};
};
com_dango_$itimi_geom_PointUtil.opposite = function(p0) {
	return { x : -p0.x, y : -p0.y};
};
com_dango_$itimi_geom_PointUtil.perpendicular = function(p0) {
	return { x : -p0.y, y : p0.x};
};
com_dango_$itimi_geom_PointUtil.normalize = function(p0,t) {
	if(t == null) t = 1.0;
	var m = t / Math.sqrt(p0.x * p0.x + p0.y * p0.y);
	return { x : p0.x * m, y : p0.y * m};
};
com_dango_$itimi_geom_PointUtil.interpolate = function(p0,p1,f) {
	return { x : (p1.x - p0.x) * f + p0.x, y : (p1.y - p0.y) * f + p0.y};
};
com_dango_$itimi_geom_PointUtil.pivot = function(p0,p1,a) {
	var x = p0.x - p1.y;
	var y = p0.y - p1.y;
	var l = Math.sqrt(x * x + y * y);
	var an = Math.atan2(y,x) + a;
	return { x : p1.x + l * Math.cos(a), y : p1.y + l * Math.sin(a)};
};
com_dango_$itimi_geom_PointUtil.project = function(p0,p1) {
	var il = 1 / (Math.sqrt(p0.x * p0.x + p0.y * p0.y) * Math.sqrt(p1.x * p1.x + p1.y * p1.y));
	var m = (p0.x * p1.x + p0.y * p1.y) * il;
	return { x : p1.x * m, y : p1.y * m};
};
var com_dango_$itimi_geom_RectangleUtil = function() { };
com_dango_$itimi_geom_RectangleUtil.__name__ = true;
com_dango_$itimi_geom_RectangleUtil.getRight = function(rectangle) {
	return rectangle.x + rectangle.width;
};
com_dango_$itimi_geom_RectangleUtil.getBottom = function(rectangle) {
	return rectangle.y + rectangle.height;
};
com_dango_$itimi_geom_RectangleUtil.create = function(x,y,width,height) {
	return { x : x, y : y, width : width, height : height};
};
com_dango_$itimi_geom_RectangleUtil.clone = function(rectangle) {
	return com_dango_$itimi_geom_RectangleUtil.create(rectangle.x,rectangle.y,rectangle.width,rectangle.height);
};
com_dango_$itimi_geom_RectangleUtil.setPosition = function(rectangle,x,y) {
	rectangle.x = x;
	rectangle.y = y;
};
com_dango_$itimi_geom_RectangleUtil.setPoint = function(rectangle,point) {
	com_dango_$itimi_geom_RectangleUtil.setPosition(rectangle,point.x,point.y);
};
com_dango_$itimi_geom_RectangleUtil.addPosition = function(rectangle,addedX,addedY) {
	rectangle.x += addedX;
	rectangle.y += addedY;
};
com_dango_$itimi_geom_RectangleUtil.addPoint = function(rectangle,point) {
	com_dango_$itimi_geom_RectangleUtil.addPosition(rectangle,point.x,point.y);
};
com_dango_$itimi_geom_RectangleUtil.hitTestPosition = function(rectangle,x,y) {
	return rectangle.x <= x && rectangle.y <= y && com_dango_$itimi_geom_RectangleUtil.getRight(rectangle) >= x && com_dango_$itimi_geom_RectangleUtil.getBottom(rectangle) >= y;
};
com_dango_$itimi_geom_RectangleUtil.hitTestPoint = function(rectangle,point) {
	return com_dango_$itimi_geom_RectangleUtil.hitTestPosition(rectangle,point.x,point.y);
};
com_dango_$itimi_geom_RectangleUtil.hitTestObject = function(rectangle1,rectangle2) {
	if(rectangle1.x > com_dango_$itimi_geom_RectangleUtil.getRight(rectangle2)) return false;
	if(com_dango_$itimi_geom_RectangleUtil.getRight(rectangle1) < rectangle2.x) return false;
	if(rectangle1.y > com_dango_$itimi_geom_RectangleUtil.getBottom(rectangle2)) return false;
	if(com_dango_$itimi_geom_RectangleUtil.getBottom(rectangle1) < rectangle2.y) return false;
	return true;
};
var com_dango_$itimi_transitions_Edging = function() { };
com_dango_$itimi_transitions_Edging.__name__ = true;
com_dango_$itimi_transitions_Edging.getSteps = function(edging,cut,distance) {
	com_dango_$itimi_transitions_Edging.checkError(edging,cut);
	if(distance == 0) throw new js__$Boot_HaxeError("need: distance != 0");
	var vec = 1;
	if(distance < 0) {
		distance *= -1;
		vec = -1;
	}
	var steps = [];
	var bpt = 0;
	var _g = 0;
	while(_g < cut) {
		var i = _g++;
		var c = (i + 1) / cut;
		var pt = distance * (c + edging / (100 * Math.PI) * Math.sin(Math.PI * c));
		steps[i] = (pt - bpt) * vec;
		bpt = pt;
	}
	return steps;
};
com_dango_$itimi_transitions_Edging.getPositions = function(edging,cut,startPosition,endPosition) {
	com_dango_$itimi_transitions_Edging.checkError(edging,cut);
	var positions = [];
	var _g = 0;
	while(_g < cut) {
		var i = _g++;
		var c = (i + 1) / cut;
		positions[i] = (endPosition - startPosition) * (c + edging / (100 * Math.PI) * Math.sin(Math.PI * c)) + startPosition;
	}
	positions.unshift(startPosition);
	return positions;
};
com_dango_$itimi_transitions_Edging.checkError = function(edging,cut) {
	if(edging < -100 || 100 < edging) throw new js__$Boot_HaxeError("need: -100 <= edging <= 100");
	if(cut < 1) throw new js__$Boot_HaxeError("need: cut >= 1");
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.prototype = {
	run: function() {
	}
	,__class__: haxe_Timer
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var showcase_Main = function() {
	var _g = this;
	this.exhibitIndexSet = [1,2,3,4,5,6,7,8,9];
	this.root = showcase_dom__$Root_Root_$Impl_$._new();
	this.mouse = new showcase_dom_Mouse(this.root);
	this.controller = new showcase_ui_Controller(this.root);
	this.initializeToLoadSetting();
	this.timer = new haxe_Timer(16);
	this.timer.run = function() {
		_g.run();
	};
};
showcase_Main.__name__ = true;
showcase_Main.main = function() {
	$(function() {
		new showcase_Main();
	});
};
showcase_Main.prototype = {
	run: function() {
		this.mainFunction();
	}
	,initializeToLoadSetting: function() {
		this.settingLoader = new showcase_json_SettingLoader();
		this.mainFunction = $bind(this,this.loadJson);
	}
	,loadJson: function() {
		if(this.settingLoader.json != null) this.initializeToPlay();
	}
	,initializeToPlay: function() {
		this.transmitter = new showcase_exhibit_Transmitter(this.root,this.settingLoader.json.item_display_total,this.exhibitIndexSet);
		this.transmitter.update();
		this.operationInterval = new showcase_OperationInterval(10);
		this.mainFunction = $bind(this,this.play);
	}
	,play: function() {
		this.transmitter.run();
		this.transmitter.update();
		this.operationInterval.run();
		if(this.operationInterval.isIdling()) this.checkOperation();
	}
	,checkOperation: function() {
		this.mouse.run();
		var mouseDownPosition = this.mouse.getDownedPosition();
		if(mouseDownPosition == null) return;
		if(com_dango_$itimi_geom_RectangleUtil.hitTestPoint(this.controller.buttonLeft.hitArea,mouseDownPosition)) this.orderOperation(showcase_exhibit_Order.SHIFT_CURSOR_TO_LEFT); else if(com_dango_$itimi_geom_RectangleUtil.hitTestPoint(this.controller.buttonRight.hitArea,mouseDownPosition)) this.orderOperation(showcase_exhibit_Order.SHIFT_CURSOR_TO_RIGHT);
	}
	,orderOperation: function(order) {
		this.transmitter.set_order(order);
		this.operationInterval.start();
	}
	,__class__: showcase_Main
};
var showcase_OperationInterval = function(frame) {
	this.frame = frame;
	this.mainFunction = $bind(this,this.idle);
};
showcase_OperationInterval.__name__ = true;
showcase_OperationInterval.prototype = {
	run: function() {
		this.mainFunction();
	}
	,start: function() {
		this.frameCount = 0;
		this.mainFunction = $bind(this,this.count);
	}
	,count: function() {
		if(++this.frameCount > this.frame) this.mainFunction = $bind(this,this.idle);
	}
	,idle: function() {
	}
	,isIdling: function() {
		return Reflect.compareMethods(this.mainFunction,$bind(this,this.idle));
	}
	,__class__: showcase_OperationInterval
};
var showcase_URI = function() { };
showcase_URI.__name__ = true;
var showcase_dom_JQueryUtil = function() { };
showcase_dom_JQueryUtil.__name__ = true;
showcase_dom_JQueryUtil.createWithId = function(elementId) {
	return showcase_dom_JQueryUtil.create("#" + elementId);
};
showcase_dom_JQueryUtil.createWithClass = function(elementClass,parentElement) {
	return showcase_dom_JQueryUtil.create("." + elementClass,parentElement);
};
showcase_dom_JQueryUtil.create = function(elementId,parentElement) {
	if(parentElement != null) return $(elementId); else return $(elementId,parentElement);
};
showcase_dom_JQueryUtil.setOpacity = function(element,opacity) {
	element.css({ opacity : opacity});
};
showcase_dom_JQueryUtil.setText = function(element,text) {
	element.text(text);
};
showcase_dom_JQueryUtil.setClass = function(element,className) {
	element.attr("class",className);
};
showcase_dom_JQueryUtil.setLeftPosition = function(element,positionX) {
	element.css({ left : positionX});
};
showcase_dom_JQueryUtil.getRectangle = function(element) {
	var position = element.position();
	return com_dango_$itimi_geom_RectangleUtil.create(position.left,position.top,element.width(),element.height());
};
var showcase_dom_Mouse = function(root) {
	var _g = this;
	this.downedPosition = null;
	this.rootElement = root;
	this.rootElementPosition = this.rootElement.position();
	this.rootElement.mousedown(function(event) {
		_g.downedEvent = event;
	});
	this.rootElement.mouseup(function(event1) {
		_g.upped = true;
	});
	this.initializeToWaitDown();
};
showcase_dom_Mouse.__name__ = true;
showcase_dom_Mouse.prototype = {
	getDownedPosition: function() {
		var n = this.downedPosition;
		this.downedPosition = null;
		return n;
	}
	,run: function() {
		this.mainFunction();
	}
	,initializeToWaitDown: function() {
		this.downedEvent = null;
		this.downedPosition = null;
		this.mainFunction = $bind(this,this.waitDown);
	}
	,waitDown: function() {
		if(this.downedEvent != null) {
			this.upped = false;
			this.mainFunction = $bind(this,this.down);
		}
	}
	,down: function() {
		this.setDownedPosition(this.downedEvent);
		if(this.upped) this.initializeToWaitDown();
	}
	,setDownedPosition: function(event) {
		this.downedPosition = { x : event.pageX - this.rootElementPosition.left, y : event.pageY - this.rootElementPosition.top};
	}
	,__class__: showcase_dom_Mouse
};
var showcase_dom__$Root_Root_$Impl_$ = {};
showcase_dom__$Root_Root_$Impl_$.__name__ = true;
showcase_dom__$Root_Root_$Impl_$._new = function() {
	return $("#root");
};
showcase_dom__$Root_Root_$Impl_$.get_showcase = function(this1) {
	return showcase_dom__$Root_ShowCase_$Impl_$._new(this1);
};
var showcase_dom__$Root_ShowCase_$Impl_$ = {};
showcase_dom__$Root_ShowCase_$Impl_$.__name__ = true;
showcase_dom__$Root_ShowCase_$Impl_$._new = function(parentElement) {
	return $(".showcase",parentElement);
};
showcase_dom__$Root_ShowCase_$Impl_$.get_button = function(this1) {
	return showcase_dom__$Root_Button_$Impl_$._new(this1);
};
showcase_dom__$Root_ShowCase_$Impl_$.get_buttonLeft = function(this1) {
	return showcase_dom__$Root_ButtonLeft_$Impl_$._new(this1);
};
showcase_dom__$Root_ShowCase_$Impl_$.get_buttonRight = function(this1) {
	return showcase_dom__$Root_ButtonRight_$Impl_$._new(this1);
};
showcase_dom__$Root_ShowCase_$Impl_$.get_buttonSet = function(this1) {
	var set = [];
	var _g = 0;
	while(_g < 2) {
		var i = _g++;
		set.push(showcase_dom__$Root_Button_$Impl_$._new(this1,i));
	}
	return set;
};
showcase_dom__$Root_ShowCase_$Impl_$.get_screen = function(this1) {
	return showcase_dom__$Root_Screen_$Impl_$._new(this1);
};
var showcase_dom__$Root_Button_$Impl_$ = {};
showcase_dom__$Root_Button_$Impl_$.__name__ = true;
showcase_dom__$Root_Button_$Impl_$._new = function(parentElement,index) {
	var this1;
	if(index == null) this1 = $(".button",parentElement); else this1 = $(".button",parentElement).eq(index);
	return this1;
};
var showcase_dom__$Root_ButtonLeft_$Impl_$ = {};
showcase_dom__$Root_ButtonLeft_$Impl_$.__name__ = true;
showcase_dom__$Root_ButtonLeft_$Impl_$._new = function(parentElement) {
	return $(".button.left",parentElement);
};
var showcase_dom__$Root_ButtonRight_$Impl_$ = {};
showcase_dom__$Root_ButtonRight_$Impl_$.__name__ = true;
showcase_dom__$Root_ButtonRight_$Impl_$._new = function(parentElement) {
	return $(".button.right",parentElement);
};
var showcase_dom__$Root_Screen_$Impl_$ = {};
showcase_dom__$Root_Screen_$Impl_$.__name__ = true;
showcase_dom__$Root_Screen_$Impl_$._new = function(parentElement) {
	return $(".screen",parentElement);
};
showcase_dom__$Root_Screen_$Impl_$.get_items = function(this1) {
	return showcase_dom__$Root_Items_$Impl_$._new(this1);
};
var showcase_dom__$Root_Items_$Impl_$ = {};
showcase_dom__$Root_Items_$Impl_$.__name__ = true;
showcase_dom__$Root_Items_$Impl_$._new = function(parentElement) {
	return $(".items",parentElement);
};
showcase_dom__$Root_Items_$Impl_$.get_itemGuide = function(this1) {
	return showcase_dom__$Root_ItemGuide_$Impl_$._new(this1);
};
showcase_dom__$Root_Items_$Impl_$.get_item = function(this1) {
	return showcase_dom__$Root_Item_$Impl_$._new(this1);
};
var showcase_dom__$Root_ItemGuide_$Impl_$ = {};
showcase_dom__$Root_ItemGuide_$Impl_$.__name__ = true;
showcase_dom__$Root_ItemGuide_$Impl_$._new = function(parentElement) {
	return $(".item.guide",parentElement);
};
showcase_dom__$Root_ItemGuide_$Impl_$.get_place = function(this1) {
	return showcase_dom__$Root_Place_$Impl_$._new(this1);
};
var showcase_dom__$Root_Item_$Impl_$ = {};
showcase_dom__$Root_Item_$Impl_$.__name__ = true;
showcase_dom__$Root_Item_$Impl_$._new = function(parentElement) {
	return $(".item",parentElement);
};
showcase_dom__$Root_Item_$Impl_$.get_place = function(this1) {
	return showcase_dom__$Root_Place_$Impl_$._new(this1);
};
var showcase_dom__$Root_Place_$Impl_$ = {};
showcase_dom__$Root_Place_$Impl_$.__name__ = true;
showcase_dom__$Root_Place_$Impl_$._new = function(parentElement) {
	return $(".place",parentElement);
};
var showcase_exhibit_Display = function(root,itemDisplayTotal) {
	var items = showcase_dom__$Root_Screen_$Impl_$.get_items(showcase_dom__$Root_ShowCase_$Impl_$.get_screen(showcase_dom__$Root_Root_$Impl_$.get_showcase(root)));
	this.itemsElement = items;
	this.defaultBeltPosition = Std["int"](this.itemsElement.position().left);
	this.itemGuideElement = showcase_dom__$Root_Items_$Impl_$.get_itemGuide(items);
	this.itemWidth = Std["int"](showcase_dom_JQueryUtil.getRectangle(this.itemGuideElement).width);
	this.itemGuideElement.remove();
};
showcase_exhibit_Display.__name__ = true;
showcase_exhibit_Display.prototype = {
	update: function(updateEvent) {
		switch(updateEvent[1]) {
		case 0:
			var itemSet = updateEvent[2];
			this.create(itemSet);
			break;
		case 1:
			var beltPosition = updateEvent[3];
			var itemSet1 = updateEvent[2];
			this.initializeBeltShifted(itemSet1,beltPosition);
			break;
		case 2:
			var beltPosition1 = updateEvent[2];
			this.addBeltStep(beltPosition1);
			break;
		}
	}
	,create: function(itemSet) {
		this.exhibitSet = [];
		var _g = 0;
		while(_g < itemSet.length) {
			var item = itemSet[_g];
			++_g;
			var itemElement = this.itemGuideElement.clone();
			showcase_dom_JQueryUtil.setClass(itemElement,"item");
			showcase_dom_JQueryUtil.setLeftPosition(itemElement,item.positionX);
			this.itemsElement.append(itemElement);
			var exhibit = new showcase_exhibit_Exhibit(itemElement,item);
			this.exhibitSet.push(exhibit);
		}
	}
	,updateItemSet: function(itemSet) {
		var _g1 = 0;
		var _g = itemSet.length;
		while(_g1 < _g) {
			var i = _g1++;
			var item = itemSet[i];
			this.exhibitSet[i].update(item);
		}
	}
	,initializeBeltShifted: function(itemSet,beltShiftFirstPosition) {
		showcase_dom_JQueryUtil.setLeftPosition(this.itemsElement,beltShiftFirstPosition);
		this.updateItemSet(itemSet);
	}
	,addBeltStep: function(beltShiftFirstPosition) {
		showcase_dom_JQueryUtil.setLeftPosition(this.itemsElement,beltShiftFirstPosition);
	}
	,__class__: showcase_exhibit_Display
};
var showcase_exhibit_Exhibit = function(element,item) {
	this.element = element;
	this.imageElement = $("img",element);
	this.update(item);
};
showcase_exhibit_Exhibit.__name__ = true;
showcase_exhibit_Exhibit.prototype = {
	update: function(item) {
		var index;
		{
			var _g = item.exhibitProperty;
			switch(_g[1]) {
			case 0:
				index = 0;
				break;
			case 1:
				var index1 = _g[2];
				index = index1;
				break;
			}
		}
		this.imageElement.attr("src","" + ("img/" + "exhibit/") + index + ".png");
	}
	,__class__: showcase_exhibit_Exhibit
};
var showcase_exhibit_Event = { __ename__ : true, __constructs__ : ["NONE","UPDATE"] };
showcase_exhibit_Event.NONE = ["NONE",0];
showcase_exhibit_Event.NONE.toString = $estr;
showcase_exhibit_Event.NONE.__enum__ = showcase_exhibit_Event;
showcase_exhibit_Event.UPDATE = function(updateEvent) { var $x = ["UPDATE",1,updateEvent]; $x.__enum__ = showcase_exhibit_Event; $x.toString = $estr; return $x; };
var showcase_exhibit_UpdateEvent = { __ename__ : true, __constructs__ : ["INITIALIZED","INITIALIZED_CURSOR_CONTROL","STEPPED_BELT"] };
showcase_exhibit_UpdateEvent.INITIALIZED = function(itemSet) { var $x = ["INITIALIZED",0,itemSet]; $x.__enum__ = showcase_exhibit_UpdateEvent; $x.toString = $estr; return $x; };
showcase_exhibit_UpdateEvent.INITIALIZED_CURSOR_CONTROL = function(itemSet,beltPosition) { var $x = ["INITIALIZED_CURSOR_CONTROL",1,itemSet,beltPosition]; $x.__enum__ = showcase_exhibit_UpdateEvent; $x.toString = $estr; return $x; };
showcase_exhibit_UpdateEvent.STEPPED_BELT = function(beltPosition) { var $x = ["STEPPED_BELT",2,beltPosition]; $x.__enum__ = showcase_exhibit_UpdateEvent; $x.toString = $estr; return $x; };
var showcase_exhibit_ExhibitProperty = { __ename__ : true, __constructs__ : ["NONE","ID"] };
showcase_exhibit_ExhibitProperty.NONE = ["NONE",0];
showcase_exhibit_ExhibitProperty.NONE.toString = $estr;
showcase_exhibit_ExhibitProperty.NONE.__enum__ = showcase_exhibit_ExhibitProperty;
showcase_exhibit_ExhibitProperty.ID = function(index) { var $x = ["ID",1,index]; $x.__enum__ = showcase_exhibit_ExhibitProperty; $x.toString = $estr; return $x; };
var showcase_exhibit_Operator = function(itemDisplayTotal,itemWidth,defaultBeltPosition,exhibitIndexSet,beltEdging,beltEdgingCut) {
	if(beltEdgingCut == null) beltEdgingCut = 10;
	if(beltEdging == null) beltEdging = 20;
	this.itemWidth = itemWidth;
	this.defaultBeltPosition = defaultBeltPosition;
	this.exhibitIndexSet = exhibitIndexSet;
	this.itemTotal = itemDisplayTotal + 2;
	this.defaultExhibitHeadItemIndex = Math.floor(this.itemTotal / 2);
	this.exhibitHeadItemIndex = this.defaultExhibitHeadItemIndex;
	this.cursorExhibitIndex = 0;
	this.itemSet = [];
	var positionX = -itemWidth;
	var copiedExhibitIndexSet = exhibitIndexSet.slice();
	var _g1 = 0;
	var _g = this.itemTotal;
	while(_g1 < _g) {
		var itemIndex = _g1++;
		var exhibitProperty = this.getExhibitProperty(itemIndex,copiedExhibitIndexSet);
		var item = new showcase_exhibit_Item(positionX,exhibitProperty);
		this.itemSet.push(item);
		positionX += itemWidth;
	}
	this.beltShiftRightPositionSet = com_dango_$itimi_transitions_Edging.getPositions(beltEdging,beltEdgingCut,-itemWidth,0);
	this.beltShiftLeftPositionSet = com_dango_$itimi_transitions_Edging.getPositions(beltEdging,beltEdgingCut,itemWidth,0);
	this.event = showcase_exhibit_Event.UPDATE(showcase_exhibit_UpdateEvent.INITIALIZED(this.itemSet));
};
showcase_exhibit_Operator.__name__ = true;
showcase_exhibit_Operator.prototype = {
	getEvent: function() {
		var n = this.event;
		this.event = showcase_exhibit_Event.NONE;
		return n;
	}
	,getExhibitProperty: function(itemIndex,copiedExhibitIndexSet) {
		if(itemIndex < this.exhibitHeadItemIndex) return showcase_exhibit_ExhibitProperty.NONE; else if(copiedExhibitIndexSet.length > 0) return showcase_exhibit_ExhibitProperty.ID(copiedExhibitIndexSet.shift()); else return showcase_exhibit_ExhibitProperty.NONE;
	}
	,updateItems: function(exhibitIndexSet) {
		this.exhibitIndexSet = exhibitIndexSet;
		this.exhibitHeadItemIndex = this.defaultExhibitHeadItemIndex;
		this.cursorExhibitIndex = 0;
		this.exchangeItemsExhibitProperty();
	}
	,exchangeItemsExhibitProperty: function(direction) {
		var directionNum;
		if(direction == null) directionNum = 0; else directionNum = js_Boot.__cast(direction , Int);
		var slicedExhibitIndex = this.cursorExhibitIndex - Math.floor(this.itemTotal / 2) + directionNum;
		if(slicedExhibitIndex < 0) slicedExhibitIndex = 0;
		var copiedExhibitIndexSet = this.exhibitIndexSet.slice(slicedExhibitIndex);
		var _g1 = 0;
		var _g = this.itemTotal;
		while(_g1 < _g) {
			var itemIndex = _g1++;
			var exhibitProperty = this.getExhibitProperty(itemIndex,copiedExhibitIndexSet);
			var item = this.itemSet[itemIndex];
			item.exhibitProperty = exhibitProperty;
		}
	}
	,isCursorShiftableToRight: function() {
		return this.cursorExhibitIndex < this.exhibitIndexSet.length - 1;
	}
	,shiftCursorToRight: function() {
		this.shiftCursor(1);
	}
	,isCursorShiftableToLeft: function() {
		return this.cursorExhibitIndex > 0;
	}
	,shiftCursorToLeft: function() {
		this.shiftCursor(-1);
	}
	,shiftCursor: function(direction) {
		var directionNum;
		directionNum = js_Boot.__cast(direction , Int);
		this.exhibitHeadItemIndex += directionNum * -1;
		this.exchangeItemsExhibitProperty(direction);
		this.cursorExhibitIndex += directionNum;
		var positionSet;
		switch(direction) {
		case 1:
			positionSet = this.beltShiftLeftPositionSet;
			break;
		case -1:
			positionSet = this.beltShiftRightPositionSet;
			break;
		}
		this.beltShiftPositionSet = positionSet.slice();
		this.beltPosition = Std["int"](this.beltShiftPositionSet.shift());
		this.event = showcase_exhibit_Event.UPDATE(showcase_exhibit_UpdateEvent.INITIALIZED_CURSOR_CONTROL(this.itemSet,this.beltPosition));
	}
	,stepBelt: function() {
		var stoped = false;
		if(this.beltShiftPositionSet.length > 0) this.beltPosition = Std["int"](this.beltShiftPositionSet.shift()); else {
			this.beltPosition = this.defaultBeltPosition;
			stoped = true;
		}
		this.event = showcase_exhibit_Event.UPDATE(showcase_exhibit_UpdateEvent.STEPPED_BELT(this.beltPosition));
		return stoped;
	}
	,__class__: showcase_exhibit_Operator
};
var showcase_exhibit_Item = function(positionX,exhibitProperty) {
	this.positionX = positionX;
	this.exhibitProperty = exhibitProperty;
};
showcase_exhibit_Item.__name__ = true;
showcase_exhibit_Item.prototype = {
	__class__: showcase_exhibit_Item
};
var showcase_exhibit_Order = { __ename__ : true, __constructs__ : ["NONE","SHIFT_CURSOR_TO_RIGHT","SHIFT_CURSOR_TO_LEFT"] };
showcase_exhibit_Order.NONE = ["NONE",0];
showcase_exhibit_Order.NONE.toString = $estr;
showcase_exhibit_Order.NONE.__enum__ = showcase_exhibit_Order;
showcase_exhibit_Order.SHIFT_CURSOR_TO_RIGHT = ["SHIFT_CURSOR_TO_RIGHT",1];
showcase_exhibit_Order.SHIFT_CURSOR_TO_RIGHT.toString = $estr;
showcase_exhibit_Order.SHIFT_CURSOR_TO_RIGHT.__enum__ = showcase_exhibit_Order;
showcase_exhibit_Order.SHIFT_CURSOR_TO_LEFT = ["SHIFT_CURSOR_TO_LEFT",2];
showcase_exhibit_Order.SHIFT_CURSOR_TO_LEFT.toString = $estr;
showcase_exhibit_Order.SHIFT_CURSOR_TO_LEFT.__enum__ = showcase_exhibit_Order;
var showcase_exhibit_Transmitter = function(root,itemDisplayTotal,exhibitIndexSet) {
	this.display = new showcase_exhibit_Display(root,itemDisplayTotal);
	this.operator = new showcase_exhibit_Operator(itemDisplayTotal,this.display.itemWidth,this.display.defaultBeltPosition,exhibitIndexSet);
	this.set_order(showcase_exhibit_Order.NONE);
	this.mainFunction = $bind(this,this.wait);
};
showcase_exhibit_Transmitter.__name__ = true;
showcase_exhibit_Transmitter.prototype = {
	set_order: function(order) {
		return this.order = order;
	}
	,run: function() {
		this.mainFunction();
	}
	,wait: function() {
		var _g = this.checkOrder();
		switch(_g[1]) {
		case 0:
			return;
		case 2:
			this.initializeToShiftCursor(($_=this.operator,$bind($_,$_.isCursorShiftableToLeft)),($_=this.operator,$bind($_,$_.shiftCursorToLeft)));
			break;
		case 1:
			this.initializeToShiftCursor(($_=this.operator,$bind($_,$_.isCursorShiftableToRight)),($_=this.operator,$bind($_,$_.shiftCursorToRight)));
			break;
		}
	}
	,checkOrder: function() {
		var n = this.order;
		this.set_order(showcase_exhibit_Order.NONE);
		return n;
	}
	,initializeToShiftCursor: function(isCursorShiftable,operation) {
		if(!isCursorShiftable()) return;
		operation();
		this.mainFunction = $bind(this,this.stepBelt);
	}
	,stepBelt: function() {
		if(this.operator.stepBelt()) this.mainFunction = $bind(this,this.wait);
	}
	,update: function() {
		{
			var _g = this.operator.getEvent();
			switch(_g[1]) {
			case 0:
				return;
			case 1:
				var updateEvent = _g[2];
				this.display.update(updateEvent);
				break;
			}
		}
	}
	,__class__: showcase_exhibit_Transmitter
};
var showcase_json_SettingLoader = function() {
	var _g = this;
	this.json = null;
	$.ajax({ url : "js/setting.json", dataType : "json", success : function(data) {
		var n = JSON.stringify(data);
		_g.json = JSON.parse(n);
	}, error : function(request,status,error) {
	}});
};
showcase_json_SettingLoader.__name__ = true;
showcase_json_SettingLoader.prototype = {
	__class__: showcase_json_SettingLoader
};
var showcase_ui_Controller = function(root) {
	this.buttonLeft = new showcase_ui_Button(showcase_dom__$Root_ShowCase_$Impl_$.get_buttonLeft(showcase_dom__$Root_Root_$Impl_$.get_showcase(root)));
	this.buttonRight = new showcase_ui_Button(showcase_dom__$Root_ShowCase_$Impl_$.get_buttonRight(showcase_dom__$Root_Root_$Impl_$.get_showcase(root)));
};
showcase_ui_Controller.__name__ = true;
showcase_ui_Controller.prototype = {
	__class__: showcase_ui_Controller
};
var showcase_ui_Button = function(element) {
	this.element = element;
	this.hitArea = showcase_dom_JQueryUtil.getRectangle(element);
};
showcase_ui_Button.__name__ = true;
showcase_ui_Button.prototype = {
	__class__: showcase_ui_Button
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
js_Boot.__toStr = {}.toString;
showcase_Main.FPS = 60;
showcase_URI.IMAGE_DIRECTORY = "img/";
showcase_URI.EXHIBIT_DIRECTORY = "img/" + "exhibit/";
showcase_exhibit_Operator.OFFSCREEN_ITEM_TOTAL = 2;
showcase_exhibit_Operator.DEFAULT_CURSOR_EXHIBIT_INDEX = 0;
showcase_Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=main.js.map