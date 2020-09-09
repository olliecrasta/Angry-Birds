class Base{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1,
            'angle':radians(angle)
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        this.body= Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        console.log(this.body)
        // console.log("width "+this.width);
        // console.log("height "+ this.height);
  
    }

    display(){
        var pos = this.body.position;
        var angle =  this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        strokeWeight(4);
        image(this.image,0,0,this.width,this.height);
        pop();
    }


}