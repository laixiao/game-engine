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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Rpc3QvcmVzb3VyY2VzL2FwcC5hc2FyL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvU2NyaXB0L01vdmVSb3RhdGUuanMiLCJhc3NldHMvU2NyaXB0L2NhcnRvb25Nb3ZlLmpzIiwiYXNzZXRzL1NjcmlwdC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICc5OTI1YWpFZTFGTHNvb1hDbUl0Si9VYicsICdNb3ZlUm90YXRlJyk7XG4vLyBTY3JpcHRcXE1vdmVSb3RhdGUuanNcblxuY2MuQ2xhc3Moe1xuICAgIFwiZXh0ZW5kc1wiOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGZyYW1lczogW2NjLlNwcml0ZUZyYW1lXVxuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3Iuc2V0RGlzcGxheVN0YXRzKHRydWUpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gY2MudmlzaWJsZVJlY3Qud2lkdGg7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSBjYy52aXNpYmxlUmVjdC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FydG9ubnMgPSBbXTtcblxuICAgICAgICB2YXIgc3BhY2VYID0gdGhpcy5ub2RlLndpZHRoIC8gMTAwOyAvL+WNoemAmuS6uueJqeeahOmXtOmalFxuICAgICAgICB2YXIgc3BhY2VSb3RhdGUgPSAzNjAgLyAxMDA7IC8v5Y2h6YCa5Lq654mp55qE6KeS5bqm6Led56a7XG4gICAgICAgIHZhciBtb3ZlU3BlZWQgPSAyOyAvL+WNoemAmuS6uueJqeeahOenu+WKqOmAn+W6plxuICAgICAgICB2YXIgcm90YXRlU3BlZWQgPSAyOyAvL+WNoemAmuS6uueJqeeahOaXi+i9rOmAn+W6plxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDEwMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMxID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgICAgICBjMS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBjMS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJhbWVzW2ldO1xuICAgICAgICAgICAgICAgIGMxLnggPSAtdGhpcy5ub2RlLndpZHRoIC8gMiArIGogKiBzcGFjZVg7XG4gICAgICAgICAgICAgICAgYzEueSA9IC10aGlzLm5vZGUuaGVpZ2h0IC8gMiArIGkgKiB0aGlzLm5vZGUuaGVpZ2h0IC8gNSArIDgwO1xuICAgICAgICAgICAgICAgIGMxLnJvdGF0aW9uID0gLWogKiBzcGFjZVJvdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYzEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FydG9ubnMucHVzaChjMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBzZWxmLmNhcnRvbm5zLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jYXJ0b25uc1twXS54ICs9IG1vdmVTcGVlZDtcbiAgICAgICAgICAgICAgICBzZWxmLmNhcnRvbm5zW3BdLnJvdGF0aW9uICs9IHJvdGF0ZVNwZWVkO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhcnRvbm5zW3BdLnggPiB0aGlzLm5vZGUud2lkdGggLyAyICsgMjApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYXJ0b25uc1twXS54ID0gLXRoaXMubm9kZS53aWR0aCAvIDIgKyAyMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuMDEpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2IzM2IzaWhQTzFKQXFxK1FDV1RhMWtTJywgJ2NhcnRvb25Nb3ZlJyk7XG4vLyBTY3JpcHRcXGNhcnRvb25Nb3ZlLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBtb3ZlQWN0aW9uID0gY2MubW92ZUJ5KDEsIGNjLnAoMjAwLCAwKSk7XG4gICAgICAgIHZhciByb3RhdGVBY3Rpb24gPSBjYy5yb3RhdGVCeSgxLCAyMDApO1xuICAgICAgICB2YXIgc3Bhd25BY3Rpb24gPSBjYy5zcGF3bihtb3ZlQWN0aW9uLCByb3RhdGVBY3Rpb24pO1xuXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihzcGF3bkFjdGlvbikpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS54ID4gMjcwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IC0yNzA7XG4gICAgICAgICAgICAvL3RoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzI4MGMzcnNaSkpLblo5UnFiQUxWd3RLJywgJ21haW4nKTtcbi8vIFNjcmlwdFxcbWFpbi5qc1xuXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIGNhcnRvb24xOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgY2FydG9vbjI6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBjYXJ0b29uMzoge1xuICAgICAgICAgICAgJ2RlZmF1bHQnOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIGNhcnRvb240OiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgY2FydG9vbjU6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiAnSGVsbG8sIFdvcmxkISdcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHZhciBjb3VudCA9IDIwMDA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IDwgY291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYXduT25lQ2FydG9vbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjAxKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHt9LFxuICAgIHNwYXduT25lQ2FydG9vbjogZnVuY3Rpb24gc3Bhd25PbmVDYXJ0b29uKCkge1xuICAgICAgICB2YXIgY2FydG9vbjEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcnRvb24xKTtcbiAgICAgICAgY2FydG9vbjEuc2V0UG9zaXRpb24oLTI4MCwgMzAwKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNhcnRvb24xKTtcblxuICAgICAgICB2YXIgY2FydG9vbjIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcnRvb24yKTtcbiAgICAgICAgY2FydG9vbjIuc2V0UG9zaXRpb24oLTI4MCwgMTUwKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNhcnRvb24yKTtcblxuICAgICAgICB2YXIgY2FydG9vbjMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcnRvb24zKTtcbiAgICAgICAgY2FydG9vbjMuc2V0UG9zaXRpb24oLTI4MCwgMCk7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjYXJ0b29uMyk7XG5cbiAgICAgICAgdmFyIGNhcnRvb240ID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJ0b29uNCk7XG4gICAgICAgIGNhcnRvb240LnNldFBvc2l0aW9uKC0yODAsIC0xNTApO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2FydG9vbjQpO1xuXG4gICAgICAgIHZhciBjYXJ0b29uNSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FydG9vbjUpO1xuICAgICAgICBjYXJ0b29uNS5zZXRQb3NpdGlvbigtMjgwLCAtMzAwKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNhcnRvb241KTtcbiAgICB9XG5cbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
