class Fish {
    constructor(color, maxSpeed, currentSpeed) {
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = currentSpeed;
    }

    up() {
        if (this.currentSpeed < this.maxSpeed) {
            ++this.currentSpeed;
        }
        console.log("fish speed is :", this.currentSpeed);
    }

    down() {
        if (this.currentSpeed > 0) {
            --this.currentSpeed;
        }
        console.log("fish speed is :", this.currentSpeed);
    }
}

let f = new Fish("F", 100, 0);
console.log(f);
