class Paper {
    constructor(){
        var options ={
            isStatic:false,
            restitution:1,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(200,400,26,options);
        this.image = loadImage("paperImg.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        fill(95,9,521);
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,70,70);
        
    }

}7