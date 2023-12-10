import Enemy from "./enemy.js";

export default class JumpingEnemy extends Enemy {
    constructor(scene,x,y, texture) {
        super(scene,x,y,texture);
        this.scene.add.existing(this);
        scene.physics.add.existing(this);
    }
    update() {
        super.update();
        if (this.body.touching.down) {
            this.body.setVelocityY(-150);
        }
    }
}