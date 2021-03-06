class particles {
    constructor(x, y) {
        var options = {
            restitution: 1.0,
            friction: 1.0,
            density:1.0
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(110,255), random(110,255), random(110,255));
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
        
    }

};