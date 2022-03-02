import { Handler } from '@netlify/functions';
import axios from 'axios';

const handler: Handler = async (event, context) => {
	const boredRandomData = await axios({
		// Endpoint that is hosted by a localtunnel, in my local machine
		// Probably don't update the Database
		// TODO make every request to the json db

		// Just for some time the app get data from the original database
		// Original =>> https://github.com/drewthoennes/Bored-API
		url: 'https://www.boredapi.com/api/v2/activities',
		method: 'GET',
	});

	return {
		statusCode: 200,
		body: JSON.stringify(boredRandomData.data),
	};
};

export { handler };
