import styles from './Button.module.scss';

function Button({ children, type, size, onClick, href, target = '_self' }) {
	if (href)
		return (
			<a
				href={href}
				target={target}
				className={`${styles.btn} ${
					type === 'PRIMARY' ? styles.btn__primary : styles.btn__secondary
				} ${size === 'SMALL' ? styles.btn__small : ''}`}
			>
				{children}
			</a>
		);

	if (!href)
		return (
			<button
				className={`${styles.btn} ${
					type === 'PRIMARY' ? styles.btn__primary : styles.btn__secondary
				} ${size === 'SMALL' ? styles.btn__small : ''}`}
				onClick={onClick}
			>
				{children}
			</button>
		);
}

export default Button;
