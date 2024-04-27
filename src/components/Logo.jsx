import styles from './Logo.module.scss';

function Logo() {
	return (
		<div className={styles.logo}>
			<span className={styles.logo__initial}>MJ</span>
			<span className={styles.logo__line}>&nbsp;</span>
			<span className={styles.logo__name}>Mohit Jadhav</span>
		</div>
	);
}

export default Logo;
