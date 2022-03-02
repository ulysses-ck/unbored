import { Handler } from '@netlify/functions';
import axios from 'axios';

const handler: Handler = async (event, context) => {
	const boredRandomData = await axios({
		// Endpoint that is hosted by a localtunnel, in a local machine
		url: 'https://unlucky-cheetah-5.loca.lt/api/v2/activities',
		method: 'GET',
	});

	return {
		statusCode: 200,
		body: JSON.stringify(boredRandomData.data),
	};
};

export { handler };
