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