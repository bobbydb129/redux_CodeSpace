export function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function calculateHP(vitality, modifier) {
	return vitality*modifier;
}

export function calculateDamage(strength, modifier) {
	return strength*(modifier/strength);
}