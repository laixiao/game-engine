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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.mArray = new Array();
        this.spriteSheet = null;
        this.mBitmapArray = new Array();
        this.colAmount = 100;
        this.extraSpace = 50;
        this.moveSpeed = 2;
        this.rotateSpeed = 2;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        this.stage.dirtyRegionPolicy = "off";
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    p.createGameScene = function () {
        //创建 URLLoader 对象
        var loader = new egret.URLLoader();
        //设置加载方式为纹理
        loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        var url = "resource/assets/cartoonCharactors.png";
        var request = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    };
    p.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的纹理对象
        var texture = loader.data;
        //创建 SpriteSheet 对象
        this.spriteSheet = new egret.SpriteSheet(texture);
        this.spriteSheet.createTexture("cartoonCharactors/1.png", 0, 0, 93, 100);
        this.spriteSheet.createTexture("cartoonCharactors/2.png", 173, 1, 68, 100);
        this.spriteSheet.createTexture("cartoonCharactors/3.png", 96, 103, 84, 100);
        this.spriteSheet.createTexture("cartoonCharactors/4.png", 1, 1, 96, 100);
        this.spriteSheet.createTexture("cartoonCharactors/5.png", 99, 1, 72, 100);
        this.initCharactors();
    };
    p.pixelRatio = function () {
        //var ctx = window.document.createElement("canvas").getContext('2d');
        //var backingStore = ctx["backingStorePixelRatio"] || ctx["webkitBackingStorePixelRatio"] || ctx["mozBackingStorePixelRatio"] || ctx["msBackingStorePixelRatio"] || ctx["oBackingStorePixelRatio"] || ctx["backingStorePixelRatio"] || 1;
        //return (window.devicePixelRatio || 1) / backingStore;
    };
    p.initCharactors = function () {
        //console.log("stageWidth:" + this.stage.stageWidth.toString() + "stageHeight:" + this.stage.stageHeight.toString());
        //var radio = this.pixelRatio();
        //var tClientWidth = document.documentElement.clientWidth * radio;
        //var tClientHeight = document.documentElement.clientHeight * radio;
        //this.stage.setContentSize(tClientWidth, tClientHeight);
        //this.stage.setContentSize (document.documentElement.clientWidth * radio,document.documentElement.clientHeight * radio);
        //this.stage.setContentSize(480, 800);
        var tBitmap = null;
        for (var i = 0; i < this.colAmount; ++i) {
            var tx = (this.stage.stageWidth + this.extraSpace * 2) / this.colAmount * i - this.extraSpace;
            var tr = 360 / this.colAmount * i;
            tBitmap = this.createCharactor("cartoonCharactors/1.png", 46, 50, tr);
            tBitmap.x = tx;
            tBitmap.y = 50;
            tBitmap = this.createCharactor("cartoonCharactors/2.png", 34, 50, tr);
            tBitmap.x = tx;
            tBitmap.y = 150;
            tBitmap = this.createCharactor("cartoonCharactors/3.png", 42, 50, tr);
            tBitmap.x = tx;
            tBitmap.y = 250;
            tBitmap = this.createCharactor("cartoonCharactors/4.png", 48, 50, tr);
            tBitmap.x = tx;
            tBitmap.y = 350;
            tBitmap = this.createCharactor("cartoonCharactors/5.png", 36, 50, tr);
            tBitmap.x = tx;
            tBitmap.y = 450;
        }
        var timer = new egret.Timer(1, -1);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        //timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
    };
    p.createCharactor = function (skin, pivotX, pivotY, rotation) {
        var tBitmap = new egret.Bitmap();
        tBitmap.texture = this.spriteSheet.getTexture(skin);
        tBitmap.anchorOffsetX = pivotX;
        tBitmap.anchorOffsetY = pivotY;
        tBitmap.rotation = rotation;
        this.addChild(tBitmap);
        this.mBitmapArray.push(tBitmap);
        return tBitmap;
    };
    p.timerFunc = function (event) {
        var tBitmap;
        for (var i = 0, len = this.mBitmapArray.length; i < len; i++) {
            tBitmap = this.mBitmapArray[i];
            this.animateCharactor(tBitmap);
        }
    };
    p.animateCharactor = function (charactor) {
        charactor.x += this.moveSpeed;
        charactor.rotation += this.rotateSpeed;
        if (charactor.x > this.stage.stageWidth + this.extraSpace) {
            charactor.x = -this.extraSpace;
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
