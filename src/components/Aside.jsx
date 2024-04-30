import { Button, Logo } from '../components';
import { socialIcons } from '../constants/icons';
import profile from '../assets/profile.avif';
import styles from './Aside.module.scss';

const CV_PDF_LINK =
	'https://drive.google.com/file/d/15NfjJnKJkdVR-R_5_pzc-R5svjzkcJJo/view?usp=drive_link';

function Aside() {
	return (
		<aside className={styles.aside}>
			<Logo />
			<div
				className={styles.aside__profile}
				style={{ backgroundImage: `url(${profile})` }}
			>
				&nbsp;
			</div>
			<span className={styles.aside__profession}>Frontend Developer</span>
			<span className={styles.aside__location}>
				Shrirampur, Ahmednagar, India
			</span>
			<div className={styles.aside__icons}>
				{socialIcons.map(({ id, icon: Icon, linkTo }) => (
					<a
						href={linkTo}
						target="_blank"
						key={id}
						className={styles.aside__icon}
					>
						<Icon />
					</a>
				))}
			</div>
			<Button type="PRIMARY" href={CV_PDF_LINK} target="_blank">
				Download CV
			</Button>
		</aside>
	);
}

export default Aside;
