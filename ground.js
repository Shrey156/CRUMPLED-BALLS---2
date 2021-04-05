class Ground {
    constructor(){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(680,500,1360,20,options);
        
        World.add(world,this.body);
    }

    display(){
        ground.debug = true;
        rectMode(CENTER)
        fill(32,966,496)
        rect(680,500,1360,20);
        
    }}