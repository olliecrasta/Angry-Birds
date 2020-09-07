class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1
        }
        this.width = width;
        this.height = height;
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        console.log(this.body)
        console.log("width "+this.width);
        console.log("height "+ this.height);
  
    }

    display(){
        var pos = this.body.position;
        var angle =  this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill(255)
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
    }


}