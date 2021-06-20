import classes from './EventContent.module.css';

function EventContent({ children }) {
    return <div className={classes.content}>{children}</div>;
}

export default EventContent;
