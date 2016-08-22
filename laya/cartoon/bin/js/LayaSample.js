var Sprite = laya.display.Sprite;
var Loader = laya.net.Loader;
var Browser = laya.utils.Browser;
var Handler = laya.utils.Handler;
var Stat = laya.utils.Stat;
var WebGL = laya.webgl.WebGL;
// 程序入口
var GameMain = (function () {
    function GameMain() {
        this.colAmount = 100;
        this.extraSpace = 50;
        this.moveSpeed = 2;
        this.rotateSpeed = 2;
        Laya.init(Browser.width, Browser.height, WebGL);
        Laya.stage.bgColor = "#232628";
        Stat.show();
        Laya.loader.load("res/cartoonCharactors.json", Handler.create(this, this.createCharacters), null, Loader.ATLAS);
    }
    GameMain.prototype.createCharacters = function () {
        this.characterGroup = [];
        for (var i = 0; i < this.colAmount; ++i) {
            var tx = (Laya.stage.width + this.extraSpace * 2) / this.colAmount * i - this.extraSpace;
            var tr = 360 / this.colAmount * i;
            var startY = (Laya.stage.height - 500) / 2;
            this.createCharacter("cartoonCharactors/1.png", 46, 50, tr).pos(tx, 50 + startY);
            this.createCharacter("cartoonCharactors/2.png", 34, 50, tr).pos(tx, 150 + startY);
            this.createCharacter("cartoonCharactors/3.png", 42, 50, tr).pos(tx, 250 + startY);
            this.createCharacter("cartoonCharactors/4.png", 48, 50, tr).pos(tx, 350 + startY);
            this.createCharacter("cartoonCharactors/5.png", 36, 50, tr).pos(tx, 450 + startY);
        }
        Laya.timer.frameLoop(1, this, this.animate);
    };
    GameMain.prototype.createCharacter = function (skin, pivotX, pivotY, rotation) {
        var charactor = new Sprite();
        charactor.loadImage(skin);
        charactor.rotation = rotation;
        charactor.pivot(pivotX, pivotY);
        Laya.stage.addChild(charactor);
        this.characterGroup.push(charactor);
        return charactor;
    };
    GameMain.prototype.animate = function () {
        for (var i = this.characterGroup.length - 1; i >= 0; --i) {
            this.animateCharactor(this.characterGroup[i]);
        }
    };
    GameMain.prototype.animateCharactor = function (charactor) {
        charactor.x += this.moveSpeed;
        charactor.rotation += this.rotateSpeed;
        if (charactor.x > Laya.stage.width + this.extraSpace) {
            charactor.x = -this.extraSpace;
        }
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map