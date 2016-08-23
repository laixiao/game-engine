require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"MoveRotate":[function(require,module,exports){
"use strict";
cc._RFpush(module, '9925ajEe1FLsooXCmItJ/Ub', 'MoveRotate');
// Script\MoveRotate.js

cc.Class({
    "extends": cc.Component,

    properties: {
        frames: [cc.SpriteFrame]
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
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
        cc.director.setDisplayStats(true);

        var self = this;
        this.node.width = cc.visibleRect.width;
        this.node.height = cc.visibleRect.height;
        this.cartonns = [];

        var spaceX = this.node.width / 100; //卡通人物的间隔
        var spaceRotate = 360 / 100; //卡通人物的角度距离
        var moveSpeed = 2; //卡通人物的移动速度
        var rotateSpeed = 2; //卡通人物的旋转速度

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 100; j++) {
                var c1 = new cc.Node();
                c1.addComponent(cc.Sprite);
                c1.getComponent(cc.Sprite).spriteFrame = this.frames[i];
                c1.x = -this.node.width / 2 + j * spaceX;
                c1.y = -this.node.height / 2 + i * this.node.height / 5 + 80;
                c1.rotation = -j * spaceRotate;
                this.node.addChild(c1);
                this.cartonns.push(c1);
            }
        }

        this.schedule(function () {

            for (var p = 0; p < self.cartonns.length; p++) {
                self.cartonns[p].x += moveSpeed;
                self.cartonns[p].rotation += rotateSpeed;
                if (self.cartonns[p].x > this.node.width / 2 + 20) {
                    self.cartonns[p].x = -this.node.width / 2 + 20;
                }
            }
        }, 0.01);
    },
    update: function update(dt) {}
});

cc._RFpop();
},{}],"cartoonMove":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b33b3ihPO1JAqq+QCWTa1kS', 'cartoonMove');
// Script\cartoonMove.js

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
        var moveAction = cc.moveBy(1, cc.p(200, 0));
        var rotateAction = cc.rotateBy(1, 200);
        var spawnAction = cc.spawn(moveAction, rotateAction);

        this.node.runAction(cc.repeatForever(spawnAction));
    },
    update: function update(dt) {
        if (this.node.x > 270) {
            this.node.x = -270;
            //this.node.destroy();
        }
    }
});

cc._RFpop();
},{}],"main":[function(require,module,exports){
"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'main');
// Script\main.js


cc.Class({
    'extends': cc.Component,

    properties: {
        label: {
            'default': null,
            type: cc.Label
        },
        cartoon1: {
            'default': null,
            type: cc.Prefab
        },
        cartoon2: {
            'default': null,
            type: cc.Prefab
        },
        cartoon3: {
            'default': null,
            type: cc.Prefab
        },
        cartoon4: {
            'default': null,
            type: cc.Prefab
        },
        cartoon5: {
            'default': null,
            type: cc.Prefab
        },
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        var count = 2000;
        this.schedule(function () {
            if (this.node.childrenCount < count) {
                this.spawnOneCartoon();
            }
        }, 0.01);
    },

    // called every frame
    update: function update(dt) {},
    spawnOneCartoon: function spawnOneCartoon() {
        var cartoon1 = cc.instantiate(this.cartoon1);
        cartoon1.setPosition(-280, 300);
        this.node.addChild(cartoon1);

        var cartoon2 = cc.instantiate(this.cartoon2);
        cartoon2.setPosition(-280, 150);
        this.node.addChild(cartoon2);

        var cartoon3 = cc.instantiate(this.cartoon3);
        cartoon3.setPosition(-280, 0);
        this.node.addChild(cartoon3);

        var cartoon4 = cc.instantiate(this.cartoon4);
        cartoon4.setPosition(-280, -150);
        this.node.addChild(cartoon4);

        var cartoon5 = cc.instantiate(this.cartoon5);
        cartoon5.setPosition(-280, -300);
        this.node.addChild(cartoon5);
    }

});

cc._RFpop();
},{}]},{},["main","MoveRotate","cartoonMove"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rlc2t0b3AvZGlzdC9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9TY3JpcHQvTW92ZVJvdGF0ZS5qcyIsImFzc2V0cy9TY3JpcHQvY2FydG9vbk1vdmUuanMiLCJhc3NldHMvU2NyaXB0L21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzk5MjVhakVlMUZMc29vWENtSXRKL1ViJywgJ01vdmVSb3RhdGUnKTtcbi8vIFNjcmlwdFxcTW92ZVJvdGF0ZS5qc1xuXG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZnJhbWVzOiBbY2MuU3ByaXRlRnJhbWVdXG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSBjYy52aXNpYmxlUmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IGNjLnZpc2libGVSZWN0LmhlaWdodDtcbiAgICAgICAgdGhpcy5jYXJ0b25ucyA9IFtdO1xuXG4gICAgICAgIHZhciBzcGFjZVggPSB0aGlzLm5vZGUud2lkdGggLyAxMDA7IC8v5Y2h6YCa5Lq654mp55qE6Ze06ZqUXG4gICAgICAgIHZhciBzcGFjZVJvdGF0ZSA9IDM2MCAvIDEwMDsgLy/ljaHpgJrkurrniannmoTop5Lluqbot53nprtcbiAgICAgICAgdmFyIG1vdmVTcGVlZCA9IDI7IC8v5Y2h6YCa5Lq654mp55qE56e75Yqo6YCf5bqmXG4gICAgICAgIHZhciByb3RhdGVTcGVlZCA9IDI7IC8v5Y2h6YCa5Lq654mp55qE5peL6L2s6YCf5bqmXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTAwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYzEgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgIGMxLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIGMxLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5mcmFtZXNbaV07XG4gICAgICAgICAgICAgICAgYzEueCA9IC10aGlzLm5vZGUud2lkdGggLyAyICsgaiAqIHNwYWNlWDtcbiAgICAgICAgICAgICAgICBjMS55ID0gLXRoaXMubm9kZS5oZWlnaHQgLyAyICsgaSAqIHRoaXMubm9kZS5oZWlnaHQgLyA1ICsgODA7XG4gICAgICAgICAgICAgICAgYzEucm90YXRpb24gPSAtaiAqIHNwYWNlUm90YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0b25ucy5wdXNoKGMxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHNlbGYuY2FydG9ubnMubGVuZ3RoOyBwKyspIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNhcnRvbm5zW3BdLnggKz0gbW92ZVNwZWVkO1xuICAgICAgICAgICAgICAgIHNlbGYuY2FydG9ubnNbcF0ucm90YXRpb24gKz0gcm90YXRlU3BlZWQ7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FydG9ubnNbcF0ueCA+IHRoaXMubm9kZS53aWR0aCAvIDIgKyAyMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNhcnRvbm5zW3BdLnggPSAtdGhpcy5ub2RlLndpZHRoIC8gMiArIDIwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC4wMSk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge31cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYjMzYjNpaFBPMUpBcXErUUNXVGExa1MnLCAnY2FydG9vbk1vdmUnKTtcbi8vIFNjcmlwdFxcY2FydG9vbk1vdmUuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIG1vdmVBY3Rpb24gPSBjYy5tb3ZlQnkoMSwgY2MucCgyMDAsIDApKTtcbiAgICAgICAgdmFyIHJvdGF0ZUFjdGlvbiA9IGNjLnJvdGF0ZUJ5KDEsIDIwMCk7XG4gICAgICAgIHZhciBzcGF3bkFjdGlvbiA9IGNjLnNwYXduKG1vdmVBY3Rpb24sIHJvdGF0ZUFjdGlvbik7XG5cbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKHNwYXduQWN0aW9uKSk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiAyNzApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gLTI3MDtcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnMjgwYzNyc1pKSktuWjlScWJBTFZ3dEsnLCAnbWFpbicpO1xuLy8gU2NyaXB0XFxtYWluLmpzXG5cblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgY2FydG9vbjE6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBjYXJ0b29uMjoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGNhcnRvb24zOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgY2FydG9vbjQ6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBjYXJ0b29uNToge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6ICdIZWxsbywgV29ybGQhJ1xuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gMjAwMDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPCBjb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25PbmVDYXJ0b29uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuMDEpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShkdCkge30sXG4gICAgc3Bhd25PbmVDYXJ0b29uOiBmdW5jdGlvbiBzcGF3bk9uZUNhcnRvb24oKSB7XG4gICAgICAgIHZhciBjYXJ0b29uMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FydG9vbjEpO1xuICAgICAgICBjYXJ0b29uMS5zZXRQb3NpdGlvbigtMjgwLCAzMDApO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2FydG9vbjEpO1xuXG4gICAgICAgIHZhciBjYXJ0b29uMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FydG9vbjIpO1xuICAgICAgICBjYXJ0b29uMi5zZXRQb3NpdGlvbigtMjgwLCAxNTApO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2FydG9vbjIpO1xuXG4gICAgICAgIHZhciBjYXJ0b29uMyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FydG9vbjMpO1xuICAgICAgICBjYXJ0b29uMy5zZXRQb3NpdGlvbigtMjgwLCAwKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNhcnRvb24zKTtcblxuICAgICAgICB2YXIgY2FydG9vbjQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcnRvb240KTtcbiAgICAgICAgY2FydG9vbjQuc2V0UG9zaXRpb24oLTI4MCwgLTE1MCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjYXJ0b29uNCk7XG5cbiAgICAgICAgdmFyIGNhcnRvb241ID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJ0b29uNSk7XG4gICAgICAgIGNhcnRvb241LnNldFBvc2l0aW9uKC0yODAsIC0zMDApO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2FydG9vbjUpO1xuICAgIH1cblxufSk7XG5cbmNjLl9SRnBvcCgpOyJdfQ==
