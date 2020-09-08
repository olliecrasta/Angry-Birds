class Bird{
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
        console.log(this.body)
        console.log("width "+this.width);
        console.log("height "+ this.height);
  
    }

    display(){
        var pos = this.body.position;
        var angle =  this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("red")
        strokeWeight(4);
        stroke("darkred");
        rect(0,0,this.width,this.height);
        pop();
    }


}