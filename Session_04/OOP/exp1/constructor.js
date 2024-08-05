function Fish(color, maxSpeed, currentSpeed) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;

    this.up = () => {
        if (this.currentSpeed < this.maxSpeed) {
            ++this.currentSpeed;
        }
        console.log("the fish speed is :", this.currentSpeed);
    };

    this.down = () => {
        if (this.currentSpeed > 0) {
            --this.currentSpeed;
        }
        console.log("the fish speed is :", this.currentSpeed);
    };
}

let b = new Fish("a", 10, 2);

console.log(b);
