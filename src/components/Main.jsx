import { Home, Projects, About, Footer } from '../components';
import styles from './Main.module.scss';

function Main() {
	return (
		<main className={styles.main}>
	
			<Home />
			<Projects />
			<About />
			<Footer />
		</main>
	);
}

export default Main;
