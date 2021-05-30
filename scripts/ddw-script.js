let healing = 25;
let reload = 150;
let range = 8;

const darkDiamondWall = extend(ForceProjector, "dark-diamond-wall", {

	setStats() {
		this.super$setStats();
		this.stats.add(Stat.repairTime, (int)(100 / healing * reload / 60), Stat.seconds);
		this.stats.add(Stat.range, range / 8, StatUnit.blocks);
	}
});

darkDiamondWall.buildType = () => extend(ForceProjector.ForceBuild, darkDiamondWall, {

    updateTile() {
        if (this.damaged() && this.timer.get(0, reload)) {
            this.heal(this.maxHealth / healing);
            Fx.healBlockFull.at(this.x, this.y, 2, Pal.heal);
        }
    }
});

const darkDiamondWallLarge = extend(Wall, "dark-diamond-wall-large", {});

darkDiamondWallLarge.buildType = () => extend(Wall.WallBuild, darkDiamondWallLarge, {

    updateTile() {
        if (this.damaged() && this.timer.get(0, 150)) {
            this.heal(this.maxHealth / 40);
            Fx.healBlockFull.at(this.x, this.y, 2, Pal.heal);
        }
    }
});
