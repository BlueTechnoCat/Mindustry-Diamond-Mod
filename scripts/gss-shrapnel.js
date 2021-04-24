const greatShiningStar = extend(ItemTurret, "great-shining-star", {});

const shiningFrag = extend(BasicBulletType, {
    speed: 3,
    damage: 500,
    lifetime: 40,
    frontColor: Color.valueOf("44ffff"),
    backColor: Color.valueOf("ffffff"),
    width: 8,
    height: 12
});


greatShiningStar.buildType = () => extend(ItemTurret.ItemTurretBuild, {

    h: 0,

        collision(bullet) {
            this.super$collision(bullet);
            if (bullet.team != this.team && Math.random() * 100 <= 40) {
                while (this.h < 4) {
                    shiningFrag.create(this, this.team, this.x, this.y, (bullet.rotation() + 180) + ((Math.random() - 0.5) * 8) * 2);
                    this.h++;
                }
                this.h = 0;
            }
        }
    });
