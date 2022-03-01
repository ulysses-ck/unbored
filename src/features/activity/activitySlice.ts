import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Activity } from '../../types/activity';

// createapi with url that aim to serverless functions
// every functions should be declared in endpoints
export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/.netlify/functions/',
	}),
	endpoints: (builder) => ({
		// Simple endpoint for get a randomactivity
		getRandomActivity: builder.query<Activity, string>({
			query: (activity) => `${activity}`,
		}),
	}),
});

// Export autogenerated hook!
export const { useGetRandomActivityQuery } = apiSlice;