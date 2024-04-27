import { Button, Logo } from '../components';
import { socialIcons } from '../constants/icons';
import styles from './Aside.module.scss';

function Aside() {
	return (
		<div className={styles.aside}>
			<Logo />
			<div className={styles.aside__profile}>&nbsp;</div>
			<span className={styles.aside__profession}>Frontend Developer</span>
			<div className={styles.aside__icons}>
				{socialIcons.map(({ id, icon: Icon }) => (
					<span key={id} className={styles.aside__icon}>
						<Icon />
					</span>
				))}
			</div>
			<Button type="PRIMARY">Download CV</Button>
		</div>
	);
}

export default Aside;
