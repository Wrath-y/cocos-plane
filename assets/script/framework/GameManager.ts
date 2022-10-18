import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { Bullet } from '../bullet/Bullet';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Node)
    private playerPlane: Node = null
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
    @property(Node)
    private bulletRoot: Node = null

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
        this._curShootTime += deltaTime
        if (this._isShooting && this._curShootTime > this.shootTime) {
            this.createPlayerBullet()
            this._curShootTime = 0
        }
    }

    public createPlayerBullet() {
        let bullet = instantiate(this.bullet01) // 创建子弹实例
        bullet.setParent(this.bulletRoot) // 设置子弹实例的父节点
        let pos = this.playerPlane.position
        bullet.setPosition(pos.x, pos.y, pos.z - 7) // 设置坐标
        let bulletComp = bullet.getComponent(Bullet)
        bulletComp.bulletSpeed = this.bulletSpeed
    }

    public isShooting(v: boolean) {
        this._isShooting = v
    }

    private initShootTime() {
        this._curShootTime = this.shootTime
    }
}

