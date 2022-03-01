import { Handler } from '@netlify/functions';
import axios from 'axios';

const handler: Handler = async (event, context) => {
	const boredRandomData = await axios({
		url: 'https://boredapi.loca.lt/api/v2/activities/',
		method: 'GET',
	});

	return {
		statusCode: 200,
		body: JSON.stringify(
			// {
			// activity: {
			// 	activity: 'Buy a new house decoration',
			// 	accessibility: 'Few to no challenges',
			// 	type: 'recreational',
			// 	participants: 1,
			// 	link: '',
			// 	key: '3456114',
			// 	duration: 'minutes',
			// 	kidFriendly: true,
			// 	price: '$$',
			// },
			// }
			boredRandomData.data,
		),
	};
};

export { handler };
