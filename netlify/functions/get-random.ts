import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
	// const boredRandomData = await axios('http://www.boredapi.com/api/activity/')

	return {
		statusCode: 200,
		body: JSON.stringify({
			activity: 'Teach your dog a new trick',
			accessibility: 0.15,
			type: 'relaxation',
			participants: 1,
			price: 0.05,
		}),
	};
};

export { handler };
