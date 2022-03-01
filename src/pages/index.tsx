import Activity from '../components/Activity';
import styles from '../styles/Home.module.css';

function Home(): JSX.Element {
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Give me something to do!</h1>
			<Activity />
		</div>
	);
}

export default Home;
