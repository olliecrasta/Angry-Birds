class Ground extends Base {
    constructor(x,y,width,height){
        super(x,y,width,height,0);
        this.body.isStatic = "true";
        this.image = loadImage("sprites/ground.png")
    }


}