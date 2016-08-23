import Sprite = laya.display.Sprite;
import Loader = laya.net.Loader;
import Browser = laya.utils.Browser;
import Handler = laya.utils.Handler;
import Stat = laya.utils.Stat;
import WebGL = laya.webgl.WebGL;

// 程序入口
class GameMain{
    private colAmount = 100;
    private extraSpace = 50;
    private moveSpeed = 2;
    private rotateSpeed = 2;
    private characterGroup: Array<Sprite>;


    constructor()
    {
        Laya.init(Browser.width, Browser.height, WebGL);
            Laya.stage.bgColor = "#232628";
            Stat.show(100,100);
            Laya.loader.load("res/cartoonCharactors.json", Handler.create(this, this.createCharacters), null, Loader.ATLAS);
    }

    private createCharacters(): void {
        this.characterGroup = [];

        for (var i: number = 0; i < this.colAmount; ++i) {
            var tx: number = (Laya.stage.width + this.extraSpace * 2) / this.colAmount * i - this.extraSpace;
            var tr: number = 360 / this.colAmount * i;
            var startY: number = (Laya.stage.height - 500) / 2;

            this.createCharacter("cartoonCharactors/1.png", 46, 50, tr).pos(tx, 50 + startY);
            this.createCharacter("cartoonCharactors/2.png", 34, 50, tr).pos(tx, 150 + startY);
            this.createCharacter("cartoonCharactors/3.png", 42, 50, tr).pos(tx, 250 + startY);
            this.createCharacter("cartoonCharactors/4.png", 48, 50, tr).pos(tx, 350 + startY);
            this.createCharacter("cartoonCharactors/5.png", 36, 50, tr).pos(tx, 450 + startY);
        }

        Laya.timer.frameLoop(1, this, this.animate);
    }

    private createCharacter(skin: string, pivotX: number, pivotY: number, rotation: number): Sprite {
        var charactor: Sprite = new Sprite();
        charactor.loadImage(skin);
        charactor.rotation = rotation;
        charactor.pivot(pivotX, pivotY);
        Laya.stage.addChild(charactor);
        this.characterGroup.push(charactor);

        return charactor;
    }

    private animate(): void {
        for (var i: number = this.characterGroup.length - 1; i >= 0; --i) {
            this.animateCharactor(this.characterGroup[i]);
        }
    }

    private animateCharactor(charactor: Sprite): void {
        charactor.x += this.moveSpeed;
        charactor.rotation += this.rotateSpeed;

        if (charactor.x > Laya.stage.width + this.extraSpace) {
            charactor.x = -this.extraSpace;
        }
    }



}
new GameMain();




