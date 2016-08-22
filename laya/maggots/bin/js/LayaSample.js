var layaText = Laya.Text;
var layaImage = Laya.Image;
var Sprite = laya.display.Sprite;
var Browser = laya.utils.Browser;
var Handler = laya.utils.Handler;
var Stat = laya.utils.Stat;
var Rectangle = laya.maths.Rectangle;
var WebGL = laya.webgl.WebGL;
// 程序入口
var GameMain = (function () {
    function GameMain() {
        this.texturePath = "res/tinyMaggot.png";
        this.padding = 100;
        this.maggotAmount = 5000;
        this.tick = 0;
        this.maggots = [];
        var Stage = Laya.Stage;
        var WebGL = Laya.WebGL;
        var Image = Laya.Image;
        Laya.init(600, 400, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#000000";
        // var text1:layaText = new layaText();
        // text1.text = "hello";
        // text1.color = "#ffffff";
        // text1.pos(Laya.stage.width/2,Laya.stage.height/2);
        // Laya.stage.addChild(text1);
        //     var maggot1 = new layaImage(this.texturePath);
        //     maggot1.pos(Laya.stage.width/2,Laya.stage.height/2);
        //    // maggot1.loadImage(this.texturePath);
        //     Laya.stage.addChild(maggot1);
        Stat.show(100);
        this.wrapBounds = new Rectangle(-this.padding, -this.padding, Laya.stage.width + this.padding * 2, Laya.stage.height + this.padding * 2);
        Laya.loader.load(this.texturePath, Laya.Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        this.maggotTexture = Laya.loader.getRes(this.texturePath);
        this.initMaggots();
        Laya.timer.frameLoop(1, this, this.animate);
    };
    GameMain.prototype.initMaggots = function () {
        var maggotContainer;
        for (var i = 0; i < this.maggotAmount; i++) {
            if (i % 16000 == 0)
                maggotContainer = this.createNewContainer();
            var maggot = this.newMaggot();
            maggotContainer.addChild(maggot);
            this.maggots.push(maggot);
        }
    };
    GameMain.prototype.createNewContainer = function () {
        var container = new Sprite();
        container.size(Browser.clientWidth, Browser.clientHeight);
        // 此处cacheAsBitmap主要是为了创建新画布
        // 解除IBQuadrangle数量限制
        // 在显示虫子数量超过16383时需要打开下面一行
        // container.cacheAsBitmap = true;
        Laya.stage.addChild(container);
        return container;
    };
    GameMain.prototype.newMaggot = function () {
        var maggot = new Sprite();
        maggot.graphics.drawTexture(this.maggotTexture, 0, 0);
        maggot.pivot(16.5, 35);
        var rndScale = 0.8 + Math.random() * 0.3;
        maggot.scale(rndScale, rndScale);
        maggot.rotation = 0.1;
        maggot.x = Math.random() * Laya.stage.width;
        maggot.y = Math.random() * Laya.stage.height;
        maggot.direction = Math.random() * Math.PI;
        maggot.turningSpeed = Math.random() - 0.8;
        maggot.speed = (2 + Math.random() * 2) * 0.2;
        maggot.offset = Math.random() * 100;
        return maggot;
    };
    GameMain.prototype.animate = function () {
        var maggot;
        var wb = this.wrapBounds;
        var angleUnit = 180 / Math.PI;
        var dir, x = 0.0, y = 0.0;
        for (var i = 0; i < this.maggotAmount; i++) {
            maggot = this.maggots[i];
            maggot.scaleY = 0.90 + Math.sin(this.tick + maggot.offset) * 0.1;
            maggot.direction += maggot.turningSpeed * 0.01;
            dir = maggot.direction;
            x = maggot.x;
            y = maggot.y;
            x += Math.sin(dir) * (maggot.speed * maggot.scaleY);
            y += Math.cos(dir) * (maggot.speed * maggot.scaleY);
            //2.旋转
            maggot.rotation = (-dir + Math.PI) * angleUnit;
            if (x < wb.x)
                x += wb.width;
            else if (x > wb.x + wb.width)
                x -= wb.width;
            if (y < wb.y)
                y += wb.height;
            else if (y > wb.y + wb.height)
                y -= wb.height;
        }
        this.tick += 0.1;
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map