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