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
var maggot = (function () {
    function maggot(texture) {
        this.rotation = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.x = 0;
        this.y = 0;
        this.matrix = new egret.Matrix();
        this.texture = texture;
    }
    var d = __define,c=maggot,p=c.prototype;
    p.pos = function (_x, _y) {
        this.x = _x;
        this.y = _y;
    };
    p.getMatrix = function () {
        this.matrix.identity();
        this.appendTransform(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.anchorOffsetX, this.anchorOffsetY);
        return this.matrix;
    };
    p.appendTransform = function (x, y, scaleX, scaleY, rotation, regX, regY) {
        if (rotation % 360) {
            var r = rotation; // * Matrix.DEG_TO_RAD;
            var cos = egret.NumberUtils.cos(r);
            var sin = egret.NumberUtils.sin(r);
        }
        else {
            cos = 1;
            sin = 0;
        }
        this.matrix.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
        if (regX || regY) {
            this.matrix.tx -= regX * this.matrix.a + regY * this.matrix.c;
            this.matrix.ty -= regX * this.matrix.b + regY * this.matrix.d;
        }
    };
    return maggot;
}());
egret.registerClass(maggot,'maggot');
//# sourceMappingURL=maggot.js.map