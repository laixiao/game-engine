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
    start: function start() {
        //通过位置和宽高定义的 2D 矩形。
        this.padding = 100;
        //this.Rectangle = new cc.rect(this.node.width + this.padding)

        this.maggots = [];
        this.maggotAmount = 5000;
        for (var i = 0; i < this.maggotAmount; i++) {
            this.spawnOneMaggot();
        }
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
        var a1 = cc.scaleTo(1.5, 1, 1 + Math.random() * 0.2);
        var a2 = cc.scaleTo(1.5, 1, 0.8 + Math.random() * 0.2);
        var roBy = cc.rotateBy(0.5, Math.random() * 4 + 3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvZGlzdC9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvbWFpbi5qcyIsImFzc2V0cy9TY3JpcHQvdGlueU1hZ2dvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzI4MGMzcnNaSkpLblo5UnFiQUxWd3RLJywgJ21haW4nKTtcbi8vIFNjcmlwdFxcbWFpbi5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbWFnZ290UHJlZmFiOiB7XG4gICAgICAgICAgICBcImRlZmF1bHRcIjogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyh0cnVlKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLndpZHRoID0gY2MudmlzaWJsZVJlY3Qud2lkdGg7XG4gICAgICAgIC8vIHRoaXMubm9kZS5oZWlnaHQgPSBjYy52aXNpYmxlUmVjdC5oZWlnaHQ7XG5cbiAgICAgICAgLy8gdGhpcy5tb3ZlU3BlZWQgPSAwLjU7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgIGZvciAodmFyIHAgPSAwOyBwIDwgc2VsZi5tYWdnb3RzLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IG0xID0gc2VsZi5tYWdnb3RzW3BdO1xuXG4gICAgICAgIC8vICAgICAgICAgaWYobTEucm90YXRpb24gPjM2MCkgbTEucm90YXRpb24gLT0gMzYwO1xuICAgICAgICAvLyAgICAgICAgIHZhciByb3RhID0gbTEucm90YXRpb247XG4gICAgICAgIC8vICAgICAgICAgaWYoIHJvdGEgPj0gMCAgJiYgcm90YSA8PSA5MCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnggKz0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBtb3ZleSA9IE1hdGguZmxvb3IoTWF0aC5jb3MoMipNYXRoLlBJLzM2MCpyb3RhKSoxMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKCBtb3ZleSAhPSAwKW0xLnkgKz0gdGhpcy5tb3ZlU3BlZWQvbW92ZXk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKCA5MCA8IHJvdGEgJiYgcm90YSA8PSAxODApe1xuICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54ICs9IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgbW92ZXkgPSBNYXRoLmZsb29yKE1hdGguY29zKDIqTWF0aC5QSS8zNjAqcm90YSkqMTApO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiggbW92ZXkgIT0gMCltMS55IC09IHRoaXMubW92ZVNwZWVkL21vdmV5O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZiggMTgwIDwgcm90YSAmJiByb3RhIDw9IDI3MCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54IC09IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgbW92ZXkgPSBNYXRoLmZsb29yKE1hdGguY29zKDIqTWF0aC5QSS8zNjAqcm90YSkqMTApO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiggbW92ZXkgIT0gMCltMS55IC09IHRoaXMubW92ZVNwZWVkL21vdmV5O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZiggMjcwIDwgcm90YSAmJiByb3RhIDw9IDM2MCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDMpO1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54IC09IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgbW92ZXkgPSBNYXRoLmZsb29yKE1hdGguY29zKDIqTWF0aC5QSS8zNjAqcm90YSkqMTApO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiggbW92ZXkgIT0gMCltMS55ICs9IHRoaXMubW92ZVNwZWVkL21vdmV5O1xuICAgICAgICAvLyAgICAgICAgIH0gXG5cbiAgICAgICAgLy8gICAgICAgICBpZihtMS55ID4gdGhpcy5ub2RlLndpZHRoLzIpe1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS55ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYobTEueSA8IC10aGlzLm5vZGUud2lkdGgvMil7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZihtMS54ID4gdGhpcy5ub2RlLmhlaWdodC8yKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCA9IDA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKG0xLnggPCAtdGhpcy5ub2RlLmhlaWdodC8yKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCA9IDA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSAgICAgIFxuICAgICAgICAvLyB9LDAuMDEpO1xuICAgIH0sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICAvL+mAmui/h+S9jee9ruWSjOWuvemrmOWumuS5ieeahCAyRCDnn6nlvaLjgIJcbiAgICAgICAgdGhpcy5wYWRkaW5nID0gMTAwO1xuICAgICAgICAvL3RoaXMuUmVjdGFuZ2xlID0gbmV3IGNjLnJlY3QodGhpcy5ub2RlLndpZHRoICsgdGhpcy5wYWRkaW5nKVxuXG4gICAgICAgIHRoaXMubWFnZ290cyA9IFtdO1xuICAgICAgICB0aGlzLm1hZ2dvdEFtb3VudCA9IDUwMDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYWdnb3RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zcGF3bk9uZU1hZ2dvdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge30sXG4gICAgc3Bhd25PbmVNYWdnb3Q6IGZ1bmN0aW9uIHNwYXduT25lTWFnZ290KCkge1xuICAgICAgICB2YXIgbWFnZ290ID0gY2MuaW5zdGFudGlhdGUodGhpcy5tYWdnb3RQcmVmYWIpO1xuICAgICAgICBtYWdnb3Quc2V0UG9zaXRpb24oTWF0aC5yYW5kb20oKSAqIHRoaXMubm9kZS53aWR0aCAtIHRoaXMubm9kZS53aWR0aCAvIDIsIE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vZGUuaGVpZ2h0IC0gdGhpcy5ub2RlLmhlaWdodCAvIDIpO1xuICAgICAgICBtYWdnb3Qucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobWFnZ290KTtcbiAgICAgICAgdGhpcy5tYWdnb3RzLnB1c2gobWFnZ290KTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ExNjVlbHYxREZLbEt6UUhoRFZZMHIyJywgJ3RpbnlNYWdnb3QnKTtcbi8vIFNjcmlwdFxcdGlueU1hZ2dvdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgYTEgPSBjYy5zY2FsZVRvKDEuNSwgMSwgMSArIE1hdGgucmFuZG9tKCkgKiAwLjIpO1xuICAgICAgICB2YXIgYTIgPSBjYy5zY2FsZVRvKDEuNSwgMSwgMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuMik7XG4gICAgICAgIHZhciByb0J5ID0gY2Mucm90YXRlQnkoMC41LCBNYXRoLnJhbmRvbSgpICogNCArIDMpO1xuXG4gICAgICAgIHZhciByZXBlYXRlU2NhbGUgPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGExLCBhMikpO1xuICAgICAgICB2YXIgcmVwZWF0Um90YXRlID0gY2MucmVwZWF0Rm9yZXZlcihyb0J5KTtcblxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHJlcGVhdGVTY2FsZSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24ocmVwZWF0Um90YXRlKTtcblxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IDAuMTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5yb3RhdGlvbik7XG5cbiAgICAgICAgLy8gaWYodGhpcy5ub2RlLnJvdGF0aW9uID4zNjApIHRoaXMubm9kZS5yb3RhdGlvbiAtPSAzNjA7XG4gICAgICAgIC8vIGlmKCAwIDwgdGhpcy5ub2RlLnJvdGF0aW9uIDw9IDkwKXtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5tb3ZlU3BlZWQvTWF0aC5jb3MoMipNYXRoLlBJLzM2MCp0aGlzLm5vZGUucm90YXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmKCA5MCA8IHRoaXMubm9kZS5yb3RhdGlvbiA8PSAxODApe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLm1vdmVTcGVlZC9NYXRoLmNvcygyKk1hdGguUEkvMzYwKnRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoIDE4MCA8IHRoaXMubm9kZS5yb3RhdGlvbiA8PSAyNzApe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLm1vdmVTcGVlZC9NYXRoLmNvcygyKk1hdGguUEkvMzYwKnRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoIDI3MCA8IHRoaXMubm9kZS5yb3RhdGlvbiA8PSAzNjApe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSArPSB0aGlzLm1vdmVTcGVlZC9NYXRoLmNvcygyKk1hdGguUEkvMzYwKnRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIC8vIH1cblxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
