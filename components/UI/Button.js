import Link from 'next/link';
import classes from './Button.module.css';

function Button({ link, onClick, children }) {
	if (link) {
		return (
			<Link href={link}>
				<a className={classes.button}>{children}</a>
			</Link>
		);
	}

	return (
		<button className={classes.button} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
