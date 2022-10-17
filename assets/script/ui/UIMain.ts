import { _decorator, Component, Node, Input, input, EventTouch } from 'cc';
import { GameManager } from '../framework/GameManager';
const { ccclass, property } = _decorator;

@ccclass('UIMain')
export class UIMain extends Component {
    @property
    private planeSpeed: number = 1

    @property(Node)
    private playerPlane: Node = null
    @property(GameManager)
    private gameManager: GameManager = null

    start() {
        input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this)
        input.on(Input.EventType.TOUCH_START, this.touchStart, this)
        input.on(Input.EventType.TOUCH_END, this.touchEnd, this)
    }

    update(deltaTime: number) {

    }

    private touchMove(e: EventTouch) {
        let delta = e.getDelta()
        this.playerPlane.setPosition(this.playerPlane.position.x + 0.01 * this.planeSpeed * delta.x, this.playerPlane.position.y, this.playerPlane.position.z - 0.01 * this.planeSpeed * delta.y)
    }

    private touchStart(e: EventTouch) {
        this.gameManager.isShooting(true)
    }

    private touchEnd(e: EventTouch) {
        this.gameManager.isShooting(false)
    }
}

