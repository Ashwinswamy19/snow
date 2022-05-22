class Snow {
    constructor(x,y) {
        var options = {
            'density': 0.5,
            'restitution': 1,
            'friction': 1.0
        }
        this.body = Matter.Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display(){

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);


    }
    updateY(){
        if(this.body.position.y > 400) {
            Matter.Body.setPosition(this.body, {x: random(10,800), y: random(10,200)});
        }
    }
}
