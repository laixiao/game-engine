"use strict";
cc._RFpush(module, '280c3rsZJJKnZ9RqbALVwtK', 'main');
// Script\main.js

cc.Class({
    "extends": cc.Component,

    properties: {
        maggotPrefab: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var self = this;
        cc.director.setDisplayStats(true);
        // this.node.width = cc.visibleRect.width;
        // this.node.height = cc.visibleRect.height;

        //通过位置和宽高定义的 2D 矩形。
        this.padding = 100;
        //this.Rectangle = new cc.rect(this.node.width + this.padding)

        this.maggots = [];
        this.maggotAmount = 5000;
        for (var i = 0; i < this.maggotAmount; i++) {
            this.spawnOneMaggot();
        }

        // this.moveSpeed = 0.5;
        // this.schedule(function(){
        //     for (var p = 0; p < self.maggots.length; p++) {
        //         let m1 = self.maggots[p];

        //         if(m1.rotation >360) m1.rotation -= 360;
        //         var rota = m1.rotation;
        //         if( rota >= 0  && rota <= 90){
        //             m1.x += this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y += this.moveSpeed/movey;
        //         }
        //         if( 90 < rota && rota <= 180){
        //            console.log(2);
        //             m1.x += this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y -= this.moveSpeed/movey;
        //         }
        //         if( 180 < rota && rota <= 270){
        //             console.log(2);
        //             m1.x -= this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y -= this.moveSpeed/movey;
        //         }
        //         if( 270 < rota && rota <= 360){
        //             console.log(3);
        //             m1.x -= this.moveSpeed;
        //             var movey = Math.floor(Math.cos(2*Math.PI/360*rota)*10);
        //             if( movey != 0)m1.y += this.moveSpeed/movey;
        //         } 

        //         if(m1.y > this.node.width/2){
        //             m1.y = 0;
        //         }
        //         if(m1.y < -this.node.width/2){
        //             m1.y = 0;
        //         }
        //         if(m1.x > this.node.height/2){
        //             m1.x = 0;
        //         }
        //         if(m1.x < -this.node.height/2){
        //             m1.x = 0;
        //         }
        //     }      
        // },0.01);
    },
    // called every frame
    update: function update(dt) {},
    spawnOneMaggot: function spawnOneMaggot() {
        var maggot = cc.instantiate(this.maggotPrefab);
        maggot.setPosition(Math.random() * this.node.width - this.node.width / 2, Math.random() * this.node.height - this.node.height / 2);
        maggot.rotation = Math.random() * 360;
        this.node.addChild(maggot);
        this.maggots.push(maggot);
    }
});

cc._RFpop();