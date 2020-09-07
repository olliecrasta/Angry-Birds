class Log{
    constructor(x,y,height,angle){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1,
            'angle': radians(angle),
           // 'isStatic':true
        }
        this.width = 20;
        this.height = height;
       
        this.body= Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        console.log(this.body)
        console.log(this.body.angle);
        
  
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
        stroke("brown");
        rect(0,0,this.width,this.height);
        pop();
    }


}