//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
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
        /**
         * 创建游戏场景
         * Create a game scene
         */
        this.container0 = new egret.DisplayObjectContainer();
        this.container1 = new egret.DisplayObjectContainer();
        this.container2 = new egret.DisplayObjectContainer();
        this.container3 = new egret.DisplayObjectContainer();
        this.players = new Array();
        this.timerFunc = function (event) {
            var ani;
            for (var i = 0; i < this.players.length; i++) {
                ani = this.players[i];
                ani.x += ani.mSpeed;
                if (ani.x > this.stage.stageWidth - 100) {
                    ani.x = 0;
                }
            }
        };
        this.midx = 0; //动画的索引
        this.timerFunc2 = function (event) {
            var ani;
            for (var i = 0; i < this.players.length; i++) {
                ani = this.players[i];
                ani.showAni(this.midx);
            }
            this.midx++;
            if (this.midx > 7) {
                this.midx = 0;
            }
        };
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
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
            this.stage.removeChild(this.loadingView);
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
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        var bg = this.createBitmapByName("background_jpg");
        bg.width = 1280;
        bg.height = 900;
        this.addChild(bg);
        //1.四个人物贴图
        var playerList = new Array();
        var player1 = new Array();
        for (var i = 1; i <= 8; i++) {
            player1.push("wyd-1_0" + i + "_png");
        }
        playerList.push(player1);
        var player2 = new Array();
        for (var i = 1; i <= 8; i++) {
            player2.push("yd-2_0" + i + "_png");
        }
        playerList.push(player2);
        var player3 = new Array();
        for (var i = 1; i <= 8; i++) {
            player3.push("yd-3_0" + i + "_png");
        }
        playerList.push(player3);
        var player4 = new Array();
        for (var i = 1; i <= 8; i++) {
            player4.push("yd-6_0" + i + "_png");
        }
        playerList.push(player4);
        //2.添加到场景
        this.addChild(this.container0);
        this.addChild(this.container1);
        this.addChild(this.container2);
        this.addChild(this.container3);
        var totalCount = 500;
        for (var i_1 = 0; i_1 < totalCount; i_1++) {
            var tSprite = new people();
            tSprite.x = Math.random() * this.stage.stageWidth;
            tSprite.y = Math.random() * this.stage.stageHeight;
            tSprite.mSpeed = Math.random() * 1 + 1;
            var tIndex = Math.floor(Math.random() * 4);
            tSprite.setMovieClip(playerList[tIndex]);
            this['container' + tIndex].addChild(tSprite);
            this.players.push(tSprite);
        }
        //3.变化和位移动画
        var timer = new egret.Timer(1, -1);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
        var timer2 = new egret.Timer(80, -1);
        timer2.addEventListener(egret.TimerEvent.TIMER, this.timerFunc2, this);
        timer2.start();
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