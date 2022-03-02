import Activity from '../components/Activity';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import { useGetRandomActivityQuery } from '../features/activity/activitySlice';
import styles from '../styles/Home.module.scss';

function Home(): JSX.Element {
	const { data, isFetching, isSuccess, refetch, isLoading } =
		useGetRandomActivityQuery('get-random', { pollingInterval: 5000 });

	const handleClick = () => {
		refetch();
	};
	return (
		<div className={styles.main}>
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
			<Activity data={data} isFetching={isFetching} />
		</div>
	);
}

export default Home;
