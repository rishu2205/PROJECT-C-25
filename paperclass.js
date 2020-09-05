class paperclass {
	constructor(x, y, r) {
		this.body = Bodies.circle(x, y, r);
		this.body.density = 0.8;
		this.body.restitution = 0.3;
		this.body.friction = 1;
		World.add(engine.world, this.body);
		this.radius = r;
		this.image = loadImage("paper.png");
	}
	display() {
		imageMode(RADIUS);
		image(
			this.image,
			this.body.position.x,
			this.body.position.y,
			this.radius * 2,
			this.radius * 2
		);
	}
}