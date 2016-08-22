"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script\HelloWorld.js

cc.Class({
    "extends": cc.Component,

    properties: {
        pre: [cc.Prefab]
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.setDisplayStats(true);

        var totalCount = 500;
        for (var i = 0; i < totalCount; i++) {
            var p1 = cc.instantiate(this.pre[parseInt(Math.random() * 4)]);
            var x = Math.random() * 1360 - 680; //-680     680
            var y = Math.random() * 830 - 415; //-415     415
            p1.setPosition(cc.p(x, y));
            this.node.addChild(p1);
        }
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();