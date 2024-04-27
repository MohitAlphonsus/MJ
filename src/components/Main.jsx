import { Home, Projects } from '../components';
import styles from './Main.module.scss';

function Main() {
	return (
		<div className={styles.main}>
			<Home />
			<Projects />
		</div>
	);
}

export default Main;
