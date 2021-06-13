const healmond = extend(UnitType, "healmond", {});
healmond.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit
}
healmond.abilities.add(new RepairFieldAbility(1000, 100, 75));

const healgantic = extend(UnitType, "healgantic", {});
healgantic.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit
}
healgantic.abilities.add(new RepairFieldAbility(100000, 50, 225));

const healnormous = extend(UnitType, "healnormous", {});
healnormous.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit
}

healnormous.abilities.add(new RepairFieldAbility(1000000, 35, 300), new ForceFieldAbility(240, 35, 2500, 180));