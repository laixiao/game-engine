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
        this.maggotAmount = 5000;
        this.maggots = [];
        this.tick = 0;
        this.padding = 100;
        this.bitmapNodeList = [];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        this.stage.dirtyRegionPolicy = "off";
        this.$renderNode = new egret.sys.GroupNode();
        this.$renderNode.cleanBeforeRender = function () { };
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            this.$invalidateContentBounds();
        }, this);
        // var radio = this.pixelRatio();
        // var tClientWidth = document.documentElement.clientWidth * radio;
        // var tClientHeight = document.documentElement.clientHeight * radio;
        //this.stage.setContentSize(tClientWidth, tClientHeight);
    };
    // private pixelRatio() {
    //     var ctx = window.document.createElement("canvas").getContext('2d');
    //     var backingStore = ctx["backingStorePixelRatio"] || ctx["webkitBackingStorePixelRatio"] || ctx["mozBackingStorePixelRatio"] || ctx["msBackingStorePixelRatio"] || ctx["oBackingStorePixelRatio"] || ctx["backingStorePixelRatio"] || 1;
    //     return (window.devicePixelRatio || 1) / backingStore;
    // }
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
        this.wrapBounds = new egret.Rectangle(-this.padding, -this.padding, this.stage.stageWidth + this.padding * 2, this.stage.stageHeight + this.padding * 2);
        this.maggotTexture = RES.getRes("tinyMaggot");
        this.initMaggots();
        var timer = new egret.Timer(1, -1);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
    };
    p.timerFunc = function (event) {
        this.animate();
    };
    p.initMaggots = function () {
        var maggotContainer;
        for (var i = 0; i < this.maggotAmount; i++) {
            var tMaggot = this.newMaggot();
            this.maggots.push(tMaggot);
        }
    };
    p.newMaggot = function () {
        var tMaggot = new maggot(this.maggotTexture);
        tMaggot.anchorOffsetX = 16.5;
        tMaggot.anchorOffsetY = 35;
        var rndScale = 0.8 + Math.random() * 0.3;
        tMaggot.scaleX = rndScale;
        tMaggot.scaleY = rndScale;
        tMaggot.rotation = 0.1;
        tMaggot.x = Math.random() * this.stage.stageWidth;
        tMaggot.y = Math.random() * this.stage.stageHeight;
        tMaggot.direction = Math.random() * Math.PI;
        tMaggot.turningSpeed = Math.random() * 3 - 0.8;
        tMaggot.speed = (2 + Math.random() * 2) * 0.2;
        tMaggot.offset = Math.random() * 100;
        return tMaggot;
    };
    p.animate = function () {
        var tMaggot;
        var wb = this.wrapBounds;
        var angleUnit = 180 / Math.PI;
        var dir, x = 0.0, y = 0.0;
        for (var i = 0; i < this.maggotAmount; i++) {
            tMaggot = this.maggots[i];
            tMaggot.scaleY = 0.90 + Math.sin(this.tick + tMaggot.offset) * 0.1;
            tMaggot.direction += tMaggot.turningSpeed * 0.01;
            dir = tMaggot.direction;
            x = tMaggot.x;
            y = tMaggot.y;
            x += Math.sin(dir) * (tMaggot.speed * tMaggot.scaleY);
            y += Math.cos(dir) * (tMaggot.speed * tMaggot.scaleY);
            tMaggot.rotation = (-dir + Math.PI) * angleUnit;
            //tMaggot.$setFlags(egret.sys.DisplayObjectFlags.DirtyRender);
            //tMaggot.$invalidate();
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
    p.$measureContentBounds = function (bounds) {
        bounds.setTo(0, 0, 480, 800);
    };
    p.$render = function () {
        var item;
        var length = this.maggots.length;
        for (var i = 0; i < length; i++) {
            item = this.maggots[i];
            var bitmapNode;
            if (!this.bitmapNodeList[i]) {
                bitmapNode = new egret.sys.BitmapNode();
                this.bitmapNodeList[i] = bitmapNode;
                this.$renderNode.addNode(this.bitmapNodeList[i]);
                bitmapNode.drawImage(0, 0, 33, 70, 0, 0, 33, 70);
                var texture = item.texture;
                bitmapNode.imageWidth = texture._sourceWidth;
                bitmapNode.imageHeight = texture._sourceHeight;
                bitmapNode.image = texture._bitmapData;
            }
            else {
                bitmapNode = this.bitmapNodeList[i];
            }
            bitmapNode.matrix = item.getMatrix();
        }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map