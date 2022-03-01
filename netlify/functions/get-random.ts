import { Handler } from '@netlify/functions';
import axios from 'axios';

const handler: Handler = async (event, context) => {
	const boredRandomData = await axios({
		url: 'https://boredapi.loca.lt/api/v2/activities/',
		method: 'GET',
	});

	return {
		statusCode: 200,
		body: JSON.stringify(boredRandomData.data),
	};
};

export { handler };
