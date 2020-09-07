class Pig{
    constructor(x,y){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1
        }
        this.width = 50;
        this.height = 50;
        this.body= Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle =  this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("pink")
        strokeWeight(4);
        stroke("red");
        rect(0,0,this.width,this.height);
        pop();
    }


}