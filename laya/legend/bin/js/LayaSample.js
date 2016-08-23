var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Stage = laya.display.Stage;
var layaText = laya.display.Text;
var Stat = laya.utils.Stat;
var WebGL = laya.webgl.WebGL;
var Animation = laya.display.Animation;
var Sprite = laya.display.Sprite;
// 程序入口
var GameMain = (function () {
    function GameMain() {
        this.amount = 500;
        this.character1 = [
            "res/yd-6_01.png",
            "res/yd-6_02.png",
            "res/yd-6_03.png",
            "res/yd-6_04.png",
            "res/yd-6_05.png",
            "res/yd-6_06.png",
            "res/yd-6_07.png",
            "res/yd-6_08.png",
        ];
        this.character2 = [
            "res/yd-3_01.png",
            "res/yd-3_02.png",
            "res/yd-3_03.png",
            "res/yd-3_04.png",
            "res/yd-3_05.png",
            "res/yd-3_06.png",
            "res/yd-3_07.png",
            "res/yd-3_08.png",
        ];
        this.character3 = [
            "res/yd-2_01.png",
            "res/yd-2_02.png",
            "res/yd-2_03.png",
            "res/yd-2_04.png",
            "res/yd-2_05.png",
            "res/yd-2_06.png",
            "res/yd-2_07.png",
            "res/yd-2_08.png",
        ];
        this.character4 = [
            "res/wyd-1_01.png",
            "res/wyd-1_02.png",
            "res/wyd-1_03.png",
            "res/wyd-1_04.png",
            "res/wyd-1_05.png",
            "res/wyd-1_06.png",
            "res/wyd-1_07.png",
            "res/wyd-1_08.png",
        ];
        this.characterSkins = [this.character1, this.character2, this.character3, this.character4];
        this.characters = [];
        Laya.init(1280, 900, WebGL);
        Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
        Stat.enable();
        Stat.show(100);
        Laya.stage.loadImage("res/background.jpg", 0, 0, 1280, 900);
        this.createCharacters();
        this.text = new layaText();
        this.text.zOrder = 10000;
        this.text.fontSize = 60;
        this.text.color = "#ff0000";
        Laya.stage.addChild(this.text);
        Laya.timer.frameLoop(1, this, this.gameLoop);
    }
    GameMain.prototype.createCharacters = function () {
        var char;
        var charSkin;
        for (var i = 0; i < this.amount; i++) {
            charSkin = this.characterSkins[Math.floor(Math.random() * this.characterSkins.length)];
            char = new Character(charSkin);
            char.x = Math.random() * (Laya.stage.width + Character.WIDTH * 2);
            char.y = Math.random() * (Laya.stage.height - Character.HEIGHT);
            char.zOrder = char.y;
            char.setSpeed(Math.floor(Math.random() * 2 + 2));
            //char.setName(i.toString());
            Laya.stage.addChild(char);
            this.characters.push(char);
        }
    };
    GameMain.prototype.gameLoop = function () {
        for (var i = this.characters.length - 1; i >= 0; i--) {
            this.characters[i].update();
        }
        if (Laya.timer.currFrame % 60 === 0) {
            this.text.text = Stat.FPS.toString();
        }
    };
    return GameMain;
}());
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(images) {
        _super.call(this);
        this.speed = 5;
        this.createAnimation(images);
        //this.createBloodBar();
        //this.createNameLabel();
    }
    Character.prototype.createAnimation = function (images) {
        this.animation = new Animation();
        this.animation.loadImages(images);
        this.animation.interval = 70;
        this.animation.play(0);
        this.addChild(this.animation);
    };
    Character.prototype.createBloodBar = function () {
        this.bloodBar = new Sprite();
        this.bloodBar.loadImage("res/blood_1_r.png");
        this.bloodBar.x = 20;
        this.addChild(this.bloodBar);
    };
    Character.prototype.createNameLabel = function () {
        this.nameLabel = new layaText();
        this.nameLabel.color = "#FFFFFF";
        this.nameLabel.text = "Default";
        this.nameLabel.fontSize = 13;
        this.nameLabel.width = Character.WIDTH;
        this.nameLabel.align = "center";
        this.addChild(this.nameLabel);
    };
    Character.prototype.setSpeed = function (value) {
        this.speed = value;
    };
    Character.prototype.setName = function (value) {
        this.nameLabel.text = value;
    };
    Character.prototype.update = function () {
        this.x += this.speed;
        if (this.x >= Laya.stage.width + Character.WIDTH - 200)
            this.x = -Character.WIDTH + 100;
    };
    Character.WIDTH = 110;
    Character.HEIGHT = 110;
    return Character;
}(Sprite));
new GameMain();
//# sourceMappingURL=LayaSample.js.map