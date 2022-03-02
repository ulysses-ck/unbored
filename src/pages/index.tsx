// components
import Activity from '../components/Activity';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

// data
import { useGetRandomActivityQuery } from '../features/activity/activitySlice';

// styles
import styles from '../styles/Home.module.scss';

// utils
import LightenDarkenColor from '../utils/LightenDarkenColor';
import RandomizeColor from '../utils/RandomizeColor';

export default function Home() {
	const { data, isFetching, refetch, isLoading } =
		useGetRandomActivityQuery('get-random');

	// every time the button has a click refetch new data
	// TODO show a message when the server is not responding
	const handleClick = () => {
		refetch();
	};

	const colorFixed = RandomizeColor();
	return (
		<div
			className={styles.main}
			style={{
				backgroundColor: LightenDarkenColor({
					col: colorFixed,
					amt: -15,
				}),
			}}
		>
			<h1 className={styles.title}>Give me something to do!</h1>
			{isLoading ? (
				<Spinner />
			) : isFetching ? (
				<Button message="Please wait!" />
			) : (
				<Button
					message="Get a new random activity"
					handleMethod={handleClick}
				/>
			)}
			<Activity data={data} isFetching={isFetching} color={colorFixed} />
		</div>
	);
}
