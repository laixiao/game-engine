//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    private mArray = new Array();
    private spriteSheet = null;
    private mBitmapArray = new Array();
    private players = new Array();
    private colAmount = 100;
    private extraSpace = 50;
    private moveSpeed = 2;
    private rotateSpeed = 2;
    private container0 = new egret.DisplayObjectContainer();
    private container1 = new egret.DisplayObjectContainer();
    private container2 = new egret.DisplayObjectContainer();
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");

        this.stage.dirtyRegionPolicy = "off";

        var radio = this.pixelRatio();
        var tClientWidth = document.documentElement.clientWidth * radio;
        var tClientHeight = document.documentElement.clientHeight * radio;
        this.stage.setContentSize(tClientWidth, tClientHeight);
    }

    private pixelRatio() {
        var ctx = window.document.createElement("canvas").getContext('2d');
        var backingStore = ctx["backingStorePixelRatio"] || ctx["webkitBackingStorePixelRatio"] || ctx["mozBackingStorePixelRatio"] || ctx["msBackingStorePixelRatio"] || ctx["oBackingStorePixelRatio"] || ctx["backingStorePixelRatio"] || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
        }
    }

    private textfield:egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene():void {
        var background = new egret.Bitmap(RES.getRes("bg"));
        background.scaleX = this.stage.stageWidth / 600;
        background.scaleY = this.stage.stageHeight / 600;
        this.addChild(background);



        this.addChild(this.container0);
        this.addChild(this.container1);
        this.addChild(this.container2);
        var playerList = new Array();
        var player1 = new Array();
        for (var i = 1; i <= 6; i++) {
            player1.push("bitmap2" + "_" + i + "_png");
        }
        playerList.push(player1);
        var player2 = new Array();
        for (var i = 1; i <= 6; i++) {
            player2.push("bitmap3" + "_" + i + "_png");
        }
        playerList.push(player2);
        var player3 = new Array();
        for (var i = 1; i <= 6; i++) {
            player3.push("bitmap4" + "_" + i + "_png");
        }
        playerList.push(player3);

        
        for (var i = 0; i < 500; i++) {
            var tSprite = new DiyMovieClip();
            tSprite.x = Math.random() * this.stage.stageWidth;
            tSprite.y = Math.random() * this.stage.stageHeight;
            tSprite.mSpeed = Math.random() + 0.2;
            var tIndex = Math.floor(Math.random() * 3);
            //tSprite.type = tIndex;
            tSprite.setMovieClip(playerList[tIndex]);
            this['container'+tIndex].addChild(tSprite)
            //this.addChild(tSprite);
            this.players.push(tSprite);
        }
        //根据Y轴排序
        //var tPlayer = null;
        //for (var i = 0; i < this.players.length - 2; i++) {
        //    for (var j = i; j < this.players.length - 1; j++) {
        //        if (this.players[j].y > this.players[j + 1].y) {
        //            tPlayer = this.players[j];
        //            this.players[j] = this.players[j + 1];
        //            this.players[j + 1] = tPlayer;
        //        }
        //    }
        //}
        //for (var z = 0; z < this.players.length; z++) {
        //    this.addChild(this.players[z]);
        //}
        var timer = new egret.Timer(1, -1);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();

        var timer2 = new egret.Timer(100, -1);
        timer2.addEventListener(egret.TimerEvent.TIMER, this.timerFunc2, this);
        timer2.start();
    }
    private timerFunc = function (event) {
        var ani;
        for (var i = 0; i < this.players.length; i++) {
            ani = this.players[i];
            ani.x += ani.mSpeed;
            ani.showAni(this.midx);
            if (ani.x > this.stage.stageWidth) {
                ani.x = -100;
            }
        }
    }
    private midx = 0;//动画的索引
    private timerFunc2 = function (event) {
        var ani;
        for (var i = 0; i < this.players.length; i++) {
            ani = this.players[i];
            ani.showAni(this.midx);
        }
        this.midx++;
        if (this.midx > 5) {
            this.midx = 0;
        }
    }
}


