import styles from './Footer.module.scss';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__group}>
					<span>Location</span>
					<span>Shrirampur, Ahmednagar, India</span>
				</div>
				<div className={styles.footer__group}>
					<span>Phone</span>
					<span role="phone">+919518359623</span>
				</div>
				<div className={styles.footer__group}>
					<span>Email</span>
					<span>mohitdalphonso@gmail.com</span>
				</div>
			</div>
			<p className={styles.footer__copyright}>
				Mohit.Jadhav &copy; {currentYear}
			</p>
		</footer>
	);
}

export default Footer;
