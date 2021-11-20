import EventItem from './EventItem';
import classes from './EventList.module.css';

const EventList = ({ items }) => {
	return (
		<ul className={classes.list}>
			{items?.length > 0 ? (
				items.map((event) => <EventItem key={event.id} {...event} />)
			) : (
				<p style={{ textAlign: 'center' }}>No event found!</p>
			)}
		</ul>
	);
};

export default EventList;
