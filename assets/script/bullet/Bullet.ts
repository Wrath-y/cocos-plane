import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
const OUTOFRANGE = 50

@ccclass('Bullet')
export class Bullet extends Component {
    @property
    public bulletSpeed: number = 1

    start() {

    }

    update(deltaTime: number) {
        let pos = this.node.position
        let moveLen = pos.z - this.bulletSpeed
        this.node.setPosition(pos.x, pos.y, moveLen)

        if (moveLen > OUTOFRANGE) {
            console.log("bullet destroy")
            this.node.destroy()
        }
    }
}

