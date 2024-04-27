import styles from './Button.module.scss';

function Button({ children, type, size }) {
	return (
		<button
			className={`${styles.btn} ${
				type === 'PRIMARY' ? styles.btn__primary : styles.btn__secondary
			} ${size === 'SMALL' ? styles.btn__small : ''}`}
		>
			{children}
		</button>
	);
}

export default Button;
