function createFish(color, maxSpeed, currentSpeed) {
    const fish = {
        color,
        maxSpeed,
        currentSpeed,

        up() {
            if (this.currentSpeed < this.maxSpeed) {
                ++this.currentSpeed;
            }
            console.log("the fish speed is :", this.currentSpeed);
        },

        down() {
            if (this.currentSpeed > 0) {
                --this.currentSpeed;
            }
            console.log("the fish speed is :", this.currentSpeed);
        },
    };
    return fish;
}

