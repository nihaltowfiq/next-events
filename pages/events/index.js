import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/Events/EventList';
import EventSearch from '../../components/Events/EventSearch';
import { getAllEvents } from '../../dummy-data';

const AllEvents = () => {
	const router = useRouter();
	const allEvents = getAllEvents();
	const findEventHandler = (month, year) => {
		router.push(`/events/${month}/${year}`);
	};

	return (
		<Fragment>
			<EventSearch onSearch={findEventHandler} />
			<EventList items={allEvents} />
		</Fragment>
	);
};

export default AllEvents;
