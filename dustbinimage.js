class Dustbinimage {
    constructor(){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(900,415,50,100,options);
        this.image = loadImage("dustbinImg.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,120,150);
    }

}