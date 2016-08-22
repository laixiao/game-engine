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