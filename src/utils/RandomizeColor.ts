import Colors from './Colors';

const RandomizeColor = (): string => {
	const color = Colors[Math.trunc(Math.random() * 18)];
	return color;
};

export default RandomizeColor;
