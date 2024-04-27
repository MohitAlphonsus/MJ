import { FaArrowDown } from 'react-icons/fa6';
import { Button } from '../components';
import styles from './Home.module.scss';

function Home() {
	const textToRotate = 'scroll for more . scroll for more .';
	return (
		<div className={styles.home}>
			<div className={styles.textbox}>
				<span className="subheading">✋🏻 Hello there</span>
				<h1>I'm Mohit Jadhav A Frontend Web Developer.</h1>
				<Button>My Works</Button>
			</div>
			<div className={styles.circle}>
				<FaArrowDown className={styles.circle__icon} />
				<div className={styles.circle__text}>
					<p>
						{textToRotate.split('').map((char, i) => (
							<span
								className={styles.circle__char}
								key={Math.random().toString()}
								style={{ transform: `rotate(${i * 10.1}deg)` }}
							>
								{char}
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
