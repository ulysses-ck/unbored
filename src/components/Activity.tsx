import { Fragment } from 'react';

import styles from './Activity.module.scss';

import Spinner from './Spinner';
import { Activity } from '../types/activity';

type DataActivity = Activity | any;

const Activity = ({
	data,
	isFetching,
	color,
}: {
	data: DataActivity;
	isFetching: boolean;
	color: string;
}) => {
	return (
		<Fragment>
			{isFetching ? (
				<Spinner />
			) : data?.activity ? (
				// Card Container
				<div
					id={data.activity.key}
					className={styles.card}
					// Put the random Color that is passed from the index
					style={{ backgroundColor: color }}
				>
					{/* Title */}
					<h2>{data.activity.activity}</h2>
					<div className={styles.cardBody}>
						<p>Accesibility: {data.activity.accessibility}</p>
						<p>Type: {data.activity.type}</p>
						<p>Participants: {data.activity.participants}</p>
						<p>Duration: {data.activity.duration}</p>
						{data.activity.kidFriendly !== undefined ? (
							<p>Kid Friendly: {data.activity.kidFriendly ? 'Yes' : 'No'}</p>
						) : (
							''
						)}
						{/* If exist link, paint it, else just blank space */}
						{data.activity.link ? (
							<a href={data.activity.link} className={styles.link}>
								More info
							</a>
						) : (
							''
						)}
					</div>
				</div>
			) : (
				''
			)}
		</Fragment>
	);
};

export default Activity;
