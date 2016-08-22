require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"main":[function(require,module,exports){
"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'main');
// Script\main.js

cc.Class({
    "extends": cc.Component,

    properties: {
        maggotPrefab: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        cc.director.setDisplayStats(true);
        // this.node.width = cc.visibleRect.width;
        // this.node.height = cc.visibleRect.height;

        //通过位置和宽高定义的 2D 矩形。
        this.padding = 100;
        //this.Rectangle = new cc.rect(this.node.width + this.padding)

        this.maggots = [];
        this.maggotAmount = 5000;
        for (var i = 0; i < this.maggotAmount; i++) {
            this.spawnOneMaggot();
        }

        // this.moveSpeed = 0.5;
        // this.schedule(function(){
        //     for (var p = 0; p < self.maggots.length; p++) {
        //         let m1 = self.maggots[p];

        //         if(m1.rotation >360) m1.rotation -= 360;
        //         var rota = m1.rotation;
        //         if( rota >= 0  && rota <= 90){
        //             m1.x += this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y += this.moveSpeed/movey;
        //         }
        //         if( 90 < rota && rota <= 180){
        //            console.log(2);
        //             m1.x += this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y -= this.moveSpeed/movey;
        //         }
        //         if( 180 < rota && rota <= 270){
        //             console.log(2);
        //             m1.x -= this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y -= this.moveSpeed/movey;
        //         }
        //         if( 270 < rota && rota <= 360){
        //             console.log(3);
        //             m1.x -= this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y += this.moveSpeed/movey;
        //         } 

        //         if(m1.y > this.node.width/2){
        //             m1.y = 0;
        //         }
        //         if(m1.y < -this.node.width/2){
        //             m1.y = 0;
        //         }
        //         if(m1.x > this.node.height/2){
        //             m1.x = 0;
        //         }
        //         if(m1.x < -this.node.height/2){
        //             m1.x = 0;
        //         }
        //     }      
        // },0.01);
    },
    // called every frame
    update: function update(dt) {},
    spawnOneMaggot: function spawnOneMaggot() {
        var maggot = cc.instantiate(this.maggotPrefab);
        maggot.setPosition(Math.random() * this.node.width - this.node.width / 2, Math.random() * this.node.height - this.node.height / 2);
        maggot.rotation = Math.random() * 360;
        this.node.addChild(maggot);
        this.maggots.push(maggot);
    }
});

cc._RFpop();
},{}],"tinyMaggot":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'a165elv1DFKlKzQHhDVY0r2', 'tinyMaggot');
// Script\tinyMaggot.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {
        var a1 = cc.scaleTo(2, 1, 1 + Math.random() * 0.2);
        var a2 = cc.scaleTo(2, 1, 0.8 + Math.random() * 0.2);
        var roBy = cc.rotateBy(1, Math.random() * 4 + 3);

        var repeateScale = cc.repeatForever(cc.sequence(a1, a2));
        var repeatRotate = cc.repeatForever(roBy);

        this.node.runAction(repeateScale);
        this.node.runAction(repeatRotate);

        this.moveSpeed = 0.1;
    },
    update: function update(dt) {
        // console.log(this.node.rotation);

        // if(this.node.rotation >360) this.node.rotation -= 360;
        // if( 0 < this.node.rotation <= 90){
        //     this.node.x += this.moveSpeed;
        //     this.node.y += this.moveSpeed/Math.cos(2*Math.PI/360*this.node.rotation);
        // }
        // if( 90 < this.node.rotation <= 180){
        //     this.node.x += this.moveSpeed;
        //     this.node.y -= this.moveSpeed/Math.cos(2*Math.PI/360*this.node.rotation);
        // }
        // if( 180 < this.node.rotation <= 270){
        //     this.node.x -= this.moveSpeed;
        //     this.node.y -= this.moveSpeed/Math.cos(2*Math.PI/360*this.node.rotation);
        // }
        // if( 270 < this.node.rotation <= 360){
        //     this.node.x -= this.moveSpeed;
        //     this.node.y += this.moveSpeed/Math.cos(2*Math.PI/360*this.node.rotation);
        // }

    }
});

cc._RFpop();
},{}]},{},["main","tinyMaggot"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Rpc3QvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJTY3JpcHQvbWFpbi5qcyIsIlNjcmlwdC90aW55TWFnZ290LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzI4MGMzcnNaSkpLblo5UnFiQUxWd3RLJywgJ21haW4nKTtcbi8vIFNjcmlwdFxcbWFpbi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbWFnZ290UHJlZmFiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLndpZHRoID0gY2MudmlzaWJsZVJlY3Qud2lkdGg7XG4gICAgICAgIC8vIHRoaXMubm9kZS5oZWlnaHQgPSBjYy52aXNpYmxlUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgLy/pgJrov4fkvY3nva7lkozlrr3pq5jlrprkuYnnmoQgMkQg55+p5b2i44CCXG4gICAgICAgIHRoaXMucGFkZGluZyA9IDEwMDtcbiAgICAgICAgLy90aGlzLlJlY3RhbmdsZSA9IG5ldyBjYy5yZWN0KHRoaXMubm9kZS53aWR0aCArIHRoaXMucGFkZGluZylcblxuICAgICAgICB0aGlzLm1hZ2dvdHMgPSBbXTtcbiAgICAgICAgdGhpcy5tYWdnb3RBbW91bnQgPSA1MDAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWFnZ290QW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc3Bhd25PbmVNYWdnb3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMubW92ZVNwZWVkID0gMC41O1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHNlbGYubWFnZ290cy5sZW5ndGg7IHArKykge1xuICAgICAgICAvLyAgICAgICAgIGxldCBtMSA9IHNlbGYubWFnZ290c1twXTtcblxuICAgICAgICAvLyAgICAgICAgIGlmKG0xLnJvdGF0aW9uID4zNjApIG0xLnJvdGF0aW9uIC09IDM2MDtcbiAgICAgICAgLy8gICAgICAgICB2YXIgcm90YSA9IG0xLnJvdGF0aW9uO1xuICAgICAgICAvLyAgICAgICAgIGlmKCByb3RhID49IDAgICYmIHJvdGEgPD0gOTApe1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54ICs9IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgbW92ZXkgPSBNYXRoLmZsb29yKE1hdGguY29zKDIqTWF0aC5QSS8zNjAqcm90YSkqMTApO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiggbW92ZXkgIT0gMCltMS55ICs9IHRoaXMubW92ZVNwZWVkL21vdmV5O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZiggOTAgPCByb3RhICYmIHJvdGEgPD0gMTgwKXtcbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCArPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIG1vdmV5ID0gTWF0aC5mbG9vcihNYXRoLmNvcygyKk1hdGguUEkvMzYwKnJvdGEpKjEwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoIG1vdmV5ICE9IDApbTEueSAtPSB0aGlzLm1vdmVTcGVlZC9tb3ZleTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYoIDE4MCA8IHJvdGEgJiYgcm90YSA8PSAyNzApe1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygyKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCAtPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIG1vdmV5ID0gTWF0aC5mbG9vcihNYXRoLmNvcygyKk1hdGguUEkvMzYwKnJvdGEpKjEwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoIG1vdmV5ICE9IDApbTEueSAtPSB0aGlzLm1vdmVTcGVlZC9tb3ZleTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYoIDI3MCA8IHJvdGEgJiYgcm90YSA8PSAzNjApe1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCAtPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIG1vdmV5ID0gTWF0aC5mbG9vcihNYXRoLmNvcygyKk1hdGguUEkvMzYwKnJvdGEpKjEwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoIG1vdmV5ICE9IDApbTEueSArPSB0aGlzLm1vdmVTcGVlZC9tb3ZleTtcbiAgICAgICAgLy8gICAgICAgICB9IFxuXG4gICAgICAgIC8vICAgICAgICAgaWYobTEueSA+IHRoaXMubm9kZS53aWR0aC8yKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueSA9IDA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKG0xLnkgPCAtdGhpcy5ub2RlLndpZHRoLzIpe1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS55ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYobTEueCA+IHRoaXMubm9kZS5oZWlnaHQvMil7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnggPSAwO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZihtMS54IDwgLXRoaXMubm9kZS5oZWlnaHQvMil7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnggPSAwO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0gICAgICBcbiAgICAgICAgLy8gfSwwLjAxKTtcbiAgICB9LFxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7fSxcbiAgICBzcGF3bk9uZU1hZ2dvdDogZnVuY3Rpb24gc3Bhd25PbmVNYWdnb3QoKSB7XG4gICAgICAgIHZhciBtYWdnb3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1hZ2dvdFByZWZhYik7XG4gICAgICAgIG1hZ2dvdC5zZXRQb3NpdGlvbihNYXRoLnJhbmRvbSgpICogdGhpcy5ub2RlLndpZHRoIC0gdGhpcy5ub2RlLndpZHRoIC8gMiwgTWF0aC5yYW5kb20oKSAqIHRoaXMubm9kZS5oZWlnaHQgLSB0aGlzLm5vZGUuaGVpZ2h0IC8gMik7XG4gICAgICAgIG1hZ2dvdC5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChtYWdnb3QpO1xuICAgICAgICB0aGlzLm1hZ2dvdHMucHVzaChtYWdnb3QpO1xuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYTE2NWVsdjFERktsS3pRSGhEVlkwcjInLCAndGlueU1hZ2dvdCcpO1xuLy8gU2NyaXB0XFx0aW55TWFnZ290LmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBhMSA9IGNjLnNjYWxlVG8oMiwgMSwgMSArIE1hdGgucmFuZG9tKCkgKiAwLjIpO1xuICAgICAgICB2YXIgYTIgPSBjYy5zY2FsZVRvKDIsIDEsIDAuOCArIE1hdGgucmFuZG9tKCkgKiAwLjIpO1xuICAgICAgICB2YXIgcm9CeSA9IGNjLnJvdGF0ZUJ5KDEsIE1hdGgucmFuZG9tKCkgKiA0ICsgMyk7XG5cbiAgICAgICAgdmFyIHJlcGVhdGVTY2FsZSA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoYTEsIGEyKSk7XG4gICAgICAgIHZhciByZXBlYXRSb3RhdGUgPSBjYy5yZXBlYXRGb3JldmVyKHJvQnkpO1xuXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24ocmVwZWF0ZVNjYWxlKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihyZXBlYXRSb3RhdGUpO1xuXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gMC4xO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLnJvdGF0aW9uKTtcblxuICAgICAgICAvLyBpZih0aGlzLm5vZGUucm90YXRpb24gPjM2MCkgdGhpcy5ub2RlLnJvdGF0aW9uIC09IDM2MDtcbiAgICAgICAgLy8gaWYoIDAgPCB0aGlzLm5vZGUucm90YXRpb24gPD0gOTApe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSArPSB0aGlzLm1vdmVTcGVlZC9NYXRoLmNvcygyKk1hdGguUEkvMzYwKnRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoIDkwIDwgdGhpcy5ub2RlLnJvdGF0aW9uIDw9IDE4MCl7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueCArPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS55IC09IHRoaXMubW92ZVNwZWVkL01hdGguY29zKDIqTWF0aC5QSS8zNjAqdGhpcy5ub2RlLnJvdGF0aW9uKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiggMTgwIDwgdGhpcy5ub2RlLnJvdGF0aW9uIDw9IDI3MCl7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS55IC09IHRoaXMubW92ZVNwZWVkL01hdGguY29zKDIqTWF0aC5QSS8zNjAqdGhpcy5ub2RlLnJvdGF0aW9uKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiggMjcwIDwgdGhpcy5ub2RlLnJvdGF0aW9uIDw9IDM2MCl7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueCAtPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS55ICs9IHRoaXMubW92ZVNwZWVkL01hdGguY29zKDIqTWF0aC5QSS8zNjAqdGhpcy5ub2RlLnJvdGF0aW9uKTtcbiAgICAgICAgLy8gfVxuXG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
