import Stage = laya.display.Stage;
import layaText = laya.display.Text;
import Stat = laya.utils.Stat;
import WebGL = laya.webgl.WebGL;
import Animation = laya.display.Animation;
import Sprite = laya.display.Sprite;
// 程序入口
class GameMain{
    private amount: number = 500;
        private character1: Array<string> = [
			"res/yd-6_01.png",
			"res/yd-6_02.png",
			"res/yd-6_03.png",
			"res/yd-6_04.png",
			"res/yd-6_05.png",
			"res/yd-6_06.png",
			"res/yd-6_07.png",
			"res/yd-6_08.png",
		];
		private character2: Array<string> = [
			"res/yd-3_01.png",
			"res/yd-3_02.png",
			"res/yd-3_03.png",
			"res/yd-3_04.png",
			"res/yd-3_05.png",
			"res/yd-3_06.png",
			"res/yd-3_07.png",
			"res/yd-3_08.png",
		];
		private character3: Array<string> = [
			"res/yd-2_01.png",
			"res/yd-2_02.png",
			"res/yd-2_03.png",
			"res/yd-2_04.png",
			"res/yd-2_05.png",
			"res/yd-2_06.png",
			"res/yd-2_07.png",
			"res/yd-2_08.png",
		];
		private character4: Array<string> = [
			"res/wyd-1_01.png",
			"res/wyd-1_02.png",
			"res/wyd-1_03.png",
			"res/wyd-1_04.png",
			"res/wyd-1_05.png",
			"res/wyd-1_06.png",
			"res/wyd-1_07.png",
			"res/wyd-1_08.png",
		];

		private characterSkins: Array<Array<string>> = [this.character1, this.character2, this.character3, this.character4];
		private characters: Array<Character> = [];
		private text: layaText;

    constructor(){
        	Laya.init(1280, 900, WebGL);
			Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
			Stat.enable();
            Stat.show(100);
			Laya.stage.loadImage("res/background.jpg", 0, 0, 1280, 900);

			this.createCharacters();
			this.text = new layaText();
			this.text.zOrder = 10000;
			this.text.fontSize = 60;
			this.text.color = "#ff0000"
			Laya.stage.addChild(this.text);

			Laya.timer.frameLoop(1, this, this.gameLoop);

    }
    private createCharacters(): void {
        var char: Character;
        var charSkin: Array<string>;
        for (var i: number = 0; i < this.amount; i++) {
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
    }

    private gameLoop(): void {
        for (var i: number = this.characters.length - 1; i >= 0; i--) {
            this.characters[i].update();
        }
        if (Laya.timer.currFrame % 60 === 0) {
            this.text.text = Stat.FPS.toString();
        }
    }
}

class Character extends Sprite {
    public static WIDTH: number = 110;
    public static HEIGHT: number = 110;
    private speed: number = 5;
    private bloodBar: Sprite;
    private animation: Animation;
    private nameLabel: layaText;

    constructor(images: Array<string>) {
        super();
        this.createAnimation(images);
        //this.createBloodBar();
        //this.createNameLabel();
    }

    private createAnimation(images: Array<string>): void {
        this.animation = new Animation();
        this.animation.loadImages(images);
        this.animation.interval = 70;
        this.animation.play(0);
        this.addChild(this.animation);
    }

    private createBloodBar(): void {
        this.bloodBar = new Sprite();
        this.bloodBar.loadImage("res/blood_1_r.png");
        this.bloodBar.x = 20;
        this.addChild(this.bloodBar);
    }

    private createNameLabel(): void {
        this.nameLabel = new layaText();
        this.nameLabel.color = "#FFFFFF";
        this.nameLabel.text = "Default";
        this.nameLabel.fontSize = 13;
        this.nameLabel.width = Character.WIDTH;
        this.nameLabel.align = "center";
        this.addChild(this.nameLabel);
    }

    public setSpeed(value: number): void {
        this.speed = value;
    }

    public setName(value: string): void {
        this.nameLabel.text = value;
    }

    public update(): void {
        this.x += this.speed;
        if (this.x >= Laya.stage.width + Character.WIDTH -200)
            this.x = -Character.WIDTH+100;
    }
}



new GameMain();