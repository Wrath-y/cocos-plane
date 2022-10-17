import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MoveAirplane')
export class MoveAirplane extends Component {
    @property(Node)
    private bg01: Node = null

    @property(Node)
    private bg02: Node = null

    private _bgSpeed: number = 10
    private _bgMovingRange: number = 90

    start() {
        this.resetBGPosition()
    }

    update(deltaTime: number) {
        this.moveBG(deltaTime)
    }

    private resetBGPosition() {
        this.bg01.setPosition(0, 0, 0)
        this.bg02.setPosition(0, 0, -this._bgMovingRange)
    }

    private moveBG(deltaTime: number) {
        this.bg01.setPosition(0, 0, this.bg01.position.z + this._bgSpeed * deltaTime)
        this.bg02.setPosition(0, 0, this.bg02.position.z + this._bgSpeed * deltaTime)

        if (this.bg01.position.z > this._bgMovingRange) {
            this.bg01.setPosition(0, 0, this.bg02.position.z - this._bgMovingRange)
        }
        if (this.bg02.position.z > this._bgMovingRange) {
            this.bg02.setPosition(0, 0, this.bg01.position.z - this._bgMovingRange)
        }
    }
}

