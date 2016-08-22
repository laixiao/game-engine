// TypeScript file
/**
 * people
 */
class people extends egret.Bitmap{
    public mTextureArray = new Array();
    public mSpeed:number = 0;
    constructor() {
        super();
    }
    public setMovieClip = function (_pathArray) {
        //console.log(_pathArray);
        for (var i = 0; i < _pathArray.length; i++) {
            var tTexture = RES.getRes(_pathArray[i]);
            this.mTextureArray.push(tTexture);
        }
    }
    private idx;
    public showAni(idx) {
        if(this.idx!=idx){
            this.idx = idx;
            this.texture = this.mTextureArray[idx];
        }
    }
}