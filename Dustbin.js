class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.8,
            density: 1.0,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("red");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }

    addPic() {
        var pos = this.body.position;
        push();
        //translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 600, 600, this.width, this.height);
        pop();
    }
}