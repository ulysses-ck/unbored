import Colors from './Colors';

// TODO Make a function that diferences between dark and light colors

const RandomizeColor = (): string => {
	// Take a random position from the array `Colors`
	const color = Colors[Math.trunc(Math.random() * 18)];
	return color;
};

export default RandomizeColor;
