import classes from './EventItem.module.css';
import Button from '../UI/Button';
import DateIcon from '../Icons/DateIcon';
import AddressIcon from '../Icons/AddressIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';

const EventItem = ({ id, title, image, location, date }) => {
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedLocation = location.replace(', ', '\n');

    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedLocation}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
