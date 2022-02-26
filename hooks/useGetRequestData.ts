import { useEffect, useState } from 'react';

import axios from 'axios';

// This is the type model for any response
interface TActivities {
	activity: string;
	accesibility: number;
	type: string;
	participants: number;
	price: number;
	link?: string;
	key?: string;
	duration?: string;
	kidFriendly: boolean;
}

// Custom hook for retrieve data
const useGetRequestData = () => {
	// state for each activity
	const [activities, setActivities] = useState({});

	// use axios for request data and set it to the `activities`
	const getData = async () => {
		const response = await axios('/.netlify/functions/get-random');
		setActivities(response.data);
	};

	// call to this function every time that change activities
	useEffect(() => {
		getData();
		return () => {
			setActivities({});
		};
	}, [activities]);

	// return activities with the correct properties
	return activities as TActivities;
};

export default useGetRequestData;
