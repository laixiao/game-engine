// TypeScript file
/**
 * people
 */
var people = (function (_super) {
    __extends(people, _super);
    function people() {
        _super.call(this);
        this.mTextureArray = new Array();
        this.mSpeed = 0;
        this.setMovieClip = function (_pathArray) {
            //console.log(_pathArray);
            for (var i = 0; i < _pathArray.length; i++) {
                var tTexture = RES.getRes(_pathArray[i]);
                this.mTextureArray.push(tTexture);
            }
        };
    }
    var d = __define,c=people,p=c.prototype;
    p.showAni = function (idx) {
        if (this.idx != idx) {
            this.idx = idx;
            this.texture = this.mTextureArray[idx];
        }
    };
    return people;
}(egret.Bitmap));
egret.registerClass(people,'people');
//# sourceMappingURL=people.js.map