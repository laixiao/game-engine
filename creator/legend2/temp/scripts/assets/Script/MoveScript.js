"use strict";
cc._RFpush(module, '77ac0qRHuJERqOFkH7CAM1p', 'MoveScript');
// Script\MoveScript.js

cc.Class({
    "extends": cc.Component,

    properties: {
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
        this.moveSpeed = Math.random() * 3 + 1;
    },
    update: function update(dt) {
        this.node.x += this.moveSpeed;
        if (this.node.x > 680) {
            this.node.x = -680;
        }
    }
});

cc._RFpop();