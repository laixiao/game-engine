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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvZGlzdC9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvbWFpbi5qcyIsImFzc2V0cy9TY3JpcHQvdGlueU1hZ2dvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyODBjM3JzWkpKS25aOVJxYkFMVnd0SycsICdtYWluJyk7XG4vLyBTY3JpcHRcXG1haW4uanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1hZ2dvdFByZWZhYjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XG4gICAgICAgIC8vIHRoaXMubm9kZS53aWR0aCA9IGNjLnZpc2libGVSZWN0LndpZHRoO1xuICAgICAgICAvLyB0aGlzLm5vZGUuaGVpZ2h0ID0gY2MudmlzaWJsZVJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIC8v6YCa6L+H5L2N572u5ZKM5a696auY5a6a5LmJ55qEIDJEIOefqeW9ouOAglxuICAgICAgICB0aGlzLnBhZGRpbmcgPSAxMDA7XG4gICAgICAgIC8vdGhpcy5SZWN0YW5nbGUgPSBuZXcgY2MucmVjdCh0aGlzLm5vZGUud2lkdGggKyB0aGlzLnBhZGRpbmcpXG5cbiAgICAgICAgdGhpcy5tYWdnb3RzID0gW107XG4gICAgICAgIHRoaXMubWFnZ290QW1vdW50ID0gNTAwMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hZ2dvdEFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNwYXduT25lTWFnZ290KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLm1vdmVTcGVlZCA9IDAuNTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBzZWxmLm1hZ2dvdHMubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgbTEgPSBzZWxmLm1hZ2dvdHNbcF07XG5cbiAgICAgICAgLy8gICAgICAgICBpZihtMS5yb3RhdGlvbiA+MzYwKSBtMS5yb3RhdGlvbiAtPSAzNjA7XG4gICAgICAgIC8vICAgICAgICAgdmFyIHJvdGEgPSBtMS5yb3RhdGlvbjtcbiAgICAgICAgLy8gICAgICAgICBpZiggcm90YSA+PSAwICAmJiByb3RhIDw9IDkwKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueCArPSB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIG1vdmV5ID0gTWF0aC5mbG9vcihNYXRoLmNvcygyKk1hdGguUEkvMzYwKnJvdGEpKjEwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoIG1vdmV5ICE9IDApbTEueSArPSB0aGlzLm1vdmVTcGVlZC9tb3ZleTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYoIDkwIDwgcm90YSAmJiByb3RhIDw9IDE4MCl7XG4gICAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnggKz0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBtb3ZleSA9IE1hdGguZmxvb3IoTWF0aC5jb3MoMipNYXRoLlBJLzM2MCpyb3RhKSoxMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKCBtb3ZleSAhPSAwKW0xLnkgLT0gdGhpcy5tb3ZlU3BlZWQvbW92ZXk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKCAxODAgPCByb3RhICYmIHJvdGEgPD0gMjcwKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coMik7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnggLT0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBtb3ZleSA9IE1hdGguZmxvb3IoTWF0aC5jb3MoMipNYXRoLlBJLzM2MCpyb3RhKSoxMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKCBtb3ZleSAhPSAwKW0xLnkgLT0gdGhpcy5tb3ZlU3BlZWQvbW92ZXk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKCAyNzAgPCByb3RhICYmIHJvdGEgPD0gMzYwKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coMyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnggLT0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBtb3ZleSA9IE1hdGguZmxvb3IoTWF0aC5jb3MoMipNYXRoLlBJLzM2MCpyb3RhKSoxMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKCBtb3ZleSAhPSAwKW0xLnkgKz0gdGhpcy5tb3ZlU3BlZWQvbW92ZXk7XG4gICAgICAgIC8vICAgICAgICAgfSBcblxuICAgICAgICAvLyAgICAgICAgIGlmKG0xLnkgPiB0aGlzLm5vZGUud2lkdGgvMil7XG4gICAgICAgIC8vICAgICAgICAgICAgIG0xLnkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBpZihtMS55IDwgLXRoaXMubm9kZS53aWR0aC8yKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgbTEueSA9IDA7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIGlmKG0xLnggPiB0aGlzLm5vZGUuaGVpZ2h0LzIpe1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgaWYobTEueCA8IC10aGlzLm5vZGUuaGVpZ2h0LzIpe1xuICAgICAgICAvLyAgICAgICAgICAgICBtMS54ID0gMDtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9ICAgICAgXG4gICAgICAgIC8vIH0sMC4wMSk7XG4gICAgfSxcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge30sXG4gICAgc3Bhd25PbmVNYWdnb3Q6IGZ1bmN0aW9uIHNwYXduT25lTWFnZ290KCkge1xuICAgICAgICB2YXIgbWFnZ290ID0gY2MuaW5zdGFudGlhdGUodGhpcy5tYWdnb3RQcmVmYWIpO1xuICAgICAgICBtYWdnb3Quc2V0UG9zaXRpb24oTWF0aC5yYW5kb20oKSAqIHRoaXMubm9kZS53aWR0aCAtIHRoaXMubm9kZS53aWR0aCAvIDIsIE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vZGUuaGVpZ2h0IC0gdGhpcy5ub2RlLmhlaWdodCAvIDIpO1xuICAgICAgICBtYWdnb3Qucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobWFnZ290KTtcbiAgICAgICAgdGhpcy5tYWdnb3RzLnB1c2gobWFnZ290KTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2ExNjVlbHYxREZLbEt6UUhoRFZZMHIyJywgJ3RpbnlNYWdnb3QnKTtcbi8vIFNjcmlwdFxcdGlueU1hZ2dvdC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgYTEgPSBjYy5zY2FsZVRvKDEuNSwgMSwgMSArIE1hdGgucmFuZG9tKCkgKiAwLjIpO1xuICAgICAgICB2YXIgYTIgPSBjYy5zY2FsZVRvKDEuNSwgMSwgMC44ICsgTWF0aC5yYW5kb20oKSAqIDAuMik7XG4gICAgICAgIHZhciByb0J5ID0gY2Mucm90YXRlQnkoMC41LCBNYXRoLnJhbmRvbSgpICogNCArIDMpO1xuXG4gICAgICAgIHZhciByZXBlYXRlU2NhbGUgPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGExLCBhMikpO1xuICAgICAgICB2YXIgcmVwZWF0Um90YXRlID0gY2MucmVwZWF0Rm9yZXZlcihyb0J5KTtcblxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHJlcGVhdGVTY2FsZSk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24ocmVwZWF0Um90YXRlKTtcblxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IDAuMTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5yb3RhdGlvbik7XG5cbiAgICAgICAgLy8gaWYodGhpcy5ub2RlLnJvdGF0aW9uID4zNjApIHRoaXMubm9kZS5yb3RhdGlvbiAtPSAzNjA7XG4gICAgICAgIC8vIGlmKCAwIDwgdGhpcy5ub2RlLnJvdGF0aW9uIDw9IDkwKXtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkO1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5tb3ZlU3BlZWQvTWF0aC5jb3MoMipNYXRoLlBJLzM2MCp0aGlzLm5vZGUucm90YXRpb24pO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmKCA5MCA8IHRoaXMubm9kZS5yb3RhdGlvbiA8PSAxODApe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLm1vdmVTcGVlZC9NYXRoLmNvcygyKk1hdGguUEkvMzYwKnRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoIDE4MCA8IHRoaXMubm9kZS5yb3RhdGlvbiA8PSAyNzApe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSAtPSB0aGlzLm1vdmVTcGVlZC9NYXRoLmNvcygyKk1hdGguUEkvMzYwKnRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYoIDI3MCA8IHRoaXMubm9kZS5yb3RhdGlvbiA8PSAzNjApe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSArPSB0aGlzLm1vdmVTcGVlZC9NYXRoLmNvcygyKk1hdGguUEkvMzYwKnRoaXMubm9kZS5yb3RhdGlvbik7XG4gICAgICAgIC8vIH1cblxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
