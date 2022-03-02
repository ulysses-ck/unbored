import { Fragment } from 'react';

import styles from './Activity.module.scss';

import Spinner from './Spinner';
import { Activity } from '../types/activity';

import Colors from '../utils/Colors';

type DataActivity = Activity | any;

const RandomNumber = (): string => {
	const color = Colors[Math.trunc(Math.random() * 13)];
	return color;
};

const Activity = ({
	data,
	isFetching,
}: {
	data: DataActivity;
	isFetching: boolean;
}) => {
	return (
		<Fragment>
			{isFetching ? (
				<Spinner />
			) : data?.activity ? (
				<div
					key={data?.activity.key}
					className={styles.card}
					style={{ backgroundColor: RandomNumber() }}
				>
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
