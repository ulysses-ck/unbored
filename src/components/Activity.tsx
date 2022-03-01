import { Fragment } from 'react';
import { useGetRandomActivityQuery } from '../features/activity/activitySlice';
import styles from '../styles/Home.module.css';

const Activity = () => {
	const { data, isFetching, isSuccess, refetch, isLoading } =
		useGetRandomActivityQuery('get-random', {});

	const handleClick = () => {
		refetch();
	};
	return (
		<Fragment>
			<button type="button" onClick={handleClick} className={styles.button}>
				{isLoading
					? 'Loading'
					: isFetching
					? 'Loading new activity!'
					: 'Start Searching random activity'}
			</button>
			{data?.activity ? (
				<div key={data?.activity.key}>
					<h2>{data?.activity.activity}</h2>
					<p>Accesibility: {data?.activity.accessibility}</p>
					<p>Type: {data?.activity.type}</p>
					<p>Participants: {data?.activity.participants}</p>
					<p>Duration: {data?.activity.duration}</p>
					<p>Kid Friendly: {data?.activity.kidFriendly}</p>
					{/* If exist link, paint it, else just blank space */}
					{data.activity.link ? <a href={data.activity.link}>More info</a> : ''}
				</div>
			) : (
				''
			)}
		</Fragment>
	);
};

export default Activity;
