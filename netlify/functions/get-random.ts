import { Handler } from '@netlify/functions';
import axios from 'axios';
import https from 'https';

const handler: Handler = async (event, context) => {
	const agent = new https.Agent({ rejectUnauthorized: false });

	const boredRandomData = await axios.get(
		'https://www.boredapi.com/api/v2/activities',
		{ httpsAgent: agent },
	);

	return {
		statusCode: 200,
		body: JSON.stringify(boredRandomData.data),
	};
};

export { handler };
