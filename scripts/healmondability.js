const healmond = extendContent(UnitType, "healmond", {});
healmond.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit
}
	healmond.abilities.add(new RepairFieldAbility(1000, 100, 75));
	
const healgantic = extendContent(UnitType, "healgantic", {});
healgantic.constructor = () => {
	const unit = extend(UnitEntity, {})
	return unit
}
	healgantic.abilities.add(new RepairFieldAbility(100000, 50, 225));