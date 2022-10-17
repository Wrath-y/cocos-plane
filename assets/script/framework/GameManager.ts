import { _decorator, Component, Node, Prefab } from 'cc';
import { Playerplane } from '../plane/PlayerPlane';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Node)
    private playerPlane: Playerplane = null
    @property(Prefab)
    private bullet01: Prefab = null
    @property(Prefab)
    private bullet02: Prefab = null
    @property(Prefab)
    private bullet03: Prefab = null
    @property(Prefab)
    private bullet04: Prefab = null
    @property(Prefab)
    private bullet05: Prefab = null

    @property
    private shootTime: number = 0.3
    @property
    private bulletSpeed: number = 1

    private _curShootTime: number = 0
    private _isShooting: boolean = false

    start() {
        this.initShootTime()
    }

    update(deltaTime: number) {

    }

    public createBullet

    public isShooting(v: boolean) {
        this._isShooting = v
    }

    private initShootTime() {
        this._curShootTime = this.shootTime
    }
}

