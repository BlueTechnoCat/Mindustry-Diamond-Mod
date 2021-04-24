const healAmount = 25;
const delay = 200;

const darkDiamondWall = extend(Wall, "dark-diamond-wall", {});

darkDiamondWall.buildType = () => extend(Wall.WallBuild, darkDiamondWall, {

    updateTile() {
        if (this.damaged() && this.timer.get(0, delay)) {
            this.heal(this.maxHealth / healAmount);
            Fx.healBlockFull.at(this.x, this.y, 2, Pal.heal);
        }
    }

});

const darkDiamondWallLarge = extend(Wall, "dark-diamond-wall-large", {});

darkDiamondWallLarge.buildType = () => extend(Wall.WallBuild, darkDiamondWallLarge, {

    updateTile() {
        if (this.damaged() && this.timer.get(0, delay)) {
            this.heal(this.maxHealth / healAmount);
            Fx.healBlockFull.at(this.x, this.y, 2, Pal.heal);
        }
    }

});