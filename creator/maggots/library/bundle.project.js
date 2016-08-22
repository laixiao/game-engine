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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Rpc3QvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvU2NyaXB0L21haW4uanMiLCJhc3NldHMvU2NyaXB0L3RpbnlNYWdnb3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMjgwYzNyc1pKSktuWjlScWJBTFZ3dEsnLCAnbWFpbicpO1xuLy8gU2NyaXB0XFxtYWluLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtYWdnb3RQcmVmYWI6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MuZGlyZWN0b3Iuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuICAgICAgICAvLyB0aGlzLm5vZGUud2lkdGggPSBjYy52aXNpYmxlUmVjdC53aWR0aDtcbiAgICAgICAgLy8gdGhpcy5ub2RlLmhlaWdodCA9IGNjLnZpc2libGVSZWN0LmhlaWdodDtcblxuICAgICAgICAvL+mAmui/h+S9jee9ruWSjOWuvemrmOWumuS5ieeahCAyRCDnn6nlvaLjgIJcbiAgICAgICAgdGhpcy5wYWRkaW5nID0gMTAwO1xuICAgICAgICAvL3RoaXMuUmVjdGFuZ2xlID0gbmV3IGNjLnJlY3QodGhpcy5ub2RlLndpZHRoICsgdGhpcy5wYWRkaW5nKVxuXG4gICAgICAgIHRoaXMubWFnZ290cyA9IFtdO1xuICAgICAgICB0aGlzLm1hZ2dvdEFtb3VudCA9IDUwMDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYWdnb3RBbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zcGF3bk9uZU1hZ2dvdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5tb3ZlU3BlZWQgPSAwLjU7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgIGZvciAodmFyIHAgPSAwOyBwIDwgc2VsZi5tYWdnb3RzLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgIC8vICAgICAgICAgbGV0IG0xID0gc2VsZi5tYWdnb3RzW3BdO1xuXG4gICAgICAgIC8vICAgICAgICAgaWYobTEucm90YXRpb24gPjM2MCkgbTEucm90YXRpb24gLT0gMzYwO1xuICAgICAgICAvLyAgICAgICAgIHZhciByb3RhID0gbTEucm90YXRpb247XG4gICAgICAgIC8vICAgICAgICAgaWYoIHJvdGEgPj0gMCAgJiYgcm90YSA8PSA5MCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnggKz0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBtb3ZleSA9IE1hdGguZmxvb3IoTWF0aC5jb3MoMipNYXRoLlBJLzM2MCpyb3RhKSoxMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKCBtb3ZleSAhPSAwKW0xLnkgKz0gdGhpcy5tb3ZlU3BlZWQvbW92ZXk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKCA5MCA8IHJvdGEgJiYgcm90YSA8PSAxODApe1xuICAgICAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54ICs9IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgbW92ZXkgPSBNYXRoLmZsb29yKE1hdGguY29zKDIqTWF0aC5QSS8zNjAqcm90YSkqMTApO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiggbW92ZXkgIT0gMCltMS55IC09IHRoaXMubW92ZVNwZWVkL21vdmV5O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZiggMTgwIDwgcm90YSAmJiByb3RhIDw9IDI3MCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54IC09IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgbW92ZXkgPSBNYXRoLmZsb29yKE1hdGguY29zKDIqTWF0aC5QSS8zNjAqcm90YSkqMTApO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiggbW92ZXkgIT0gMCltMS55IC09IHRoaXMubW92ZVNwZWVkL21vdmV5O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZiggMjcwIDwgcm90YSAmJiByb3RhIDw9IDM2MCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKDMpO1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54IC09IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgbW92ZXkgPSBNYXRoLmZsb29yKE1hdGguY29zKDIqTWF0aC5QSS8zNjAqcm90YSkqMTApO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiggbW92ZXkgIT0gMCltMS55ICs9IHRoaXMubW92ZVNwZWVkL21vdmV5O1xuICAgICAgICAvLyAgICAgICAgIH0gXG5cbiAgICAgICAgLy8gICAgICAgICBpZihtMS55ID4gdGhpcy5ub2RlLndpZHRoLzIpe1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS55ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYobTEueSA8IC10aGlzLm5vZGUud2lkdGgvMil7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZihtMS54ID4gdGhpcy5ub2RlLmhlaWdodC8yKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCA9IDA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKG0xLnggPCAtdGhpcy5ub2RlLmhlaWdodC8yKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCA9IDA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSAgICAgIFxuICAgICAgICAvLyB9LDAuMDEpO1xuICAgIH0sXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9LFxuICAgIHNwYXduT25lTWFnZ290OiBmdW5jdGlvbiBzcGF3bk9uZU1hZ2dvdCgpIHtcbiAgICAgICAgdmFyIG1hZ2dvdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWFnZ290UHJlZmFiKTtcbiAgICAgICAgbWFnZ290LnNldFBvc2l0aW9uKE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vZGUud2lkdGggLSB0aGlzLm5vZGUud2lkdGggLyAyLCBNYXRoLnJhbmRvbSgpICogdGhpcy5ub2RlLmhlaWdodCAtIHRoaXMubm9kZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgbWFnZ290LnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG1hZ2dvdCk7XG4gICAgICAgIHRoaXMubWFnZ290cy5wdXNoKG1hZ2dvdCk7XG4gICAgfVxufSk7XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdhMTY1ZWx2MURGS2xLelFIaERWWTByMicsICd0aW55TWFnZ290Jyk7XG4vLyBTY3JpcHRcXHRpbnlNYWdnb3QuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGExID0gY2Muc2NhbGVUbygyLCAxLCAxICsgTWF0aC5yYW5kb20oKSAqIDAuMik7XG4gICAgICAgIHZhciBhMiA9IGNjLnNjYWxlVG8oMiwgMSwgMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuMik7XG4gICAgICAgIHZhciByb0J5ID0gY2Mucm90YXRlQnkoMSwgTWF0aC5yYW5kb20oKSAqIDQgKyAzKTtcblxuICAgICAgICB2YXIgcmVwZWF0ZVNjYWxlID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShhMSwgYTIpKTtcbiAgICAgICAgdmFyIHJlcGVhdFJvdGF0ZSA9IGNjLnJlcGVhdEZvcmV2ZXIocm9CeSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihyZXBlYXRlU2NhbGUpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHJlcGVhdFJvdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSAwLjE7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUucm90YXRpb24pO1xuXG4gICAgICAgIC8vIGlmKHRoaXMubm9kZS5yb3RhdGlvbiA+MzYwKSB0aGlzLm5vZGUucm90YXRpb24gLT0gMzYwO1xuICAgICAgICAvLyBpZiggMCA8IHRoaXMubm9kZS5yb3RhdGlvbiA8PSA5MCl7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueCArPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS55ICs9IHRoaXMubW92ZVNwZWVkL01hdGguY29zKDIqTWF0aC5QSS8zNjAqdGhpcy5ub2RlLnJvdGF0aW9uKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiggOTAgPCB0aGlzLm5vZGUucm90YXRpb24gPD0gMTgwKXtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5tb3ZlU3BlZWQvTWF0aC5jb3MoMipNYXRoLlBJLzM2MCp0aGlzLm5vZGUucm90YXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmKCAxODAgPCB0aGlzLm5vZGUucm90YXRpb24gPD0gMjcwKXtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS54IC09IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgLT0gdGhpcy5tb3ZlU3BlZWQvTWF0aC5jb3MoMipNYXRoLlBJLzM2MCp0aGlzLm5vZGUucm90YXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmKCAyNzAgPCB0aGlzLm5vZGUucm90YXRpb24gPD0gMzYwKXtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS54IC09IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5tb3ZlU3BlZWQvTWF0aC5jb3MoMipNYXRoLlBJLzM2MCp0aGlzLm5vZGUucm90YXRpb24pO1xuICAgICAgICAvLyB9XG5cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7Il19
