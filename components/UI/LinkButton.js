import Link from 'next/link';
import classes from './LinkButton.module.css';

function LinkButton({ link, children }) {
    return (
        <Link href={link}>
            <a className={classes.btn}>{children}</a>
        </Link>
    );
}

export default LinkButton;
