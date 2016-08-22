cc.Class({
    extends: cc.Component,

    properties: {
        frames:[cc.SpriteFrame]
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
    onLoad: function () {
        cc.director.setDisplayStats(true);

        var self = this;
        this.node.width = cc.visibleRect.width;
        this.node.height = cc.visibleRect.height;
        this.cartonns = [];

        var spaceX = this.node.width/100;//卡通人物的间隔
        var spaceRotate = 360/100;//卡通人物的角度距离
        var moveSpeed = 2;//卡通人物的移动速度
        var rotateSpeed = 2;//卡通人物的旋转速度

        for(let i=0; i<5; i++){
            for(let j=0;j<100;j++){
                var c1 = new cc.Node();
                c1.addComponent(cc.Sprite);
                c1.getComponent(cc.Sprite).spriteFrame = this.frames[i];
                c1.x = -this.node.width /2 + j*spaceX ;
                c1.y = -this.node.height /2 + i*this.node.height/5 + 80;
                c1.rotation = -j * spaceRotate;
                this.node.addChild(c1);
                this.cartonns.push(c1);
            }
        }
        
        this.schedule(function(){
            
          for(let p=0;p<self.cartonns.length;p++){
              self.cartonns[p].x +=moveSpeed;
              self.cartonns[p].rotation+=rotateSpeed;
              if(self.cartonns[p].x > this.node.width/2+20){
                  self.cartonns[p].x = -this.node.width/2+20;
              }
          }

        },0.01);

    },
    update: function (dt) {

    },
});
