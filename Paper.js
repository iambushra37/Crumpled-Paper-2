class Paper {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill(255, 0, 255);
        imageMode(CORNER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}