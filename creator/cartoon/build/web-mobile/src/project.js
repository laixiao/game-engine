require=function t(n,e,o){function c(r,a){if(!e[r]){if(!n[r]){var s="function"==typeof require&&require;if(!a&&s)return s(r,!0);if(i)return i(r,!0);var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}var h=e[r]={exports:{}};n[r][0].call(h.exports,function(t){var e=n[r][1][t];return c(e?e:t)},h,h.exports,t,n,e,o)}return e[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)c(o[r]);return c}({MoveRotate:[function(t,n,e){"use strict";cc._RFpush(n,"9925ajEe1FLsooXCmItJ/Ub","MoveRotate"),cc.Class({"extends":cc.Component,properties:{frames:[cc.SpriteFrame]},onLoad:function(){cc.director.setDisplayStats(!0);var t=this;this.node.width=cc.visibleRect.width,this.node.height=cc.visibleRect.height,this.cartonns=[];for(var n=this.node.width/100,e=3.6,o=2,c=2,i=0;i<5;i++)for(var r=0;r<100;r++){var a=new cc.Node;a.addComponent(cc.Sprite),a.getComponent(cc.Sprite).spriteFrame=this.frames[i],a.x=-this.node.width/2+r*n,a.y=-this.node.height/2+i*this.node.height/5+80,a.rotation=-r*e,this.node.addChild(a),this.cartonns.push(a)}this.schedule(function(){for(var n=0;n<t.cartonns.length;n++)t.cartonns[n].x+=o,t.cartonns[n].rotation+=c,t.cartonns[n].x>this.node.width/2+20&&(t.cartonns[n].x=-this.node.width/2+20)},.01)},update:function(t){}}),cc._RFpop()},{}],cartoonMove:[function(t,n,e){"use strict";cc._RFpush(n,"b33b3ihPO1JAqq+QCWTa1kS","cartoonMove"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){var t=cc.moveBy(1,cc.p(200,0)),n=cc.rotateBy(1,200),e=cc.spawn(t,n);this.node.runAction(cc.repeatForever(e))},update:function(t){this.node.x>270&&(this.node.x=-270)}}),cc._RFpop()},{}],main:[function(t,n,e){"use strict";cc._RFpush(n,"280c3rsZJJKnZ9RqbALVwtK","main"),cc.Class({"extends":cc.Component,properties:{label:{"default":null,type:cc.Label},cartoon1:{"default":null,type:cc.Prefab},cartoon2:{"default":null,type:cc.Prefab},cartoon3:{"default":null,type:cc.Prefab},cartoon4:{"default":null,type:cc.Prefab},cartoon5:{"default":null,type:cc.Prefab},text:"Hello, World!"},onLoad:function(){var t=2e3;this.schedule(function(){this.node.childrenCount<t&&this.spawnOneCartoon()},.01)},update:function(t){},spawnOneCartoon:function(){var t=cc.instantiate(this.cartoon1);t.setPosition(-280,300),this.node.addChild(t);var n=cc.instantiate(this.cartoon2);n.setPosition(-280,150),this.node.addChild(n);var e=cc.instantiate(this.cartoon3);e.setPosition(-280,0),this.node.addChild(e);var o=cc.instantiate(this.cartoon4);o.setPosition(-280,-150),this.node.addChild(o);var c=cc.instantiate(this.cartoon5);c.setPosition(-280,-300),this.node.addChild(c)}}),cc._RFpop()},{}]},{},["main","MoveRotate","cartoonMove"]);