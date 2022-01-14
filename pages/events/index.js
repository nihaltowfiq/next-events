import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/Events/EventList';
import EventSearch from '../../components/Events/EventSearch';
import { getAllEvents } from '../../dummy-data';

const AllEvents = ({ data }) => {
	const router = useRouter();
	const findEventHandler = (month, year) => {
		router.push(`/events/${month}/${year}`);
	};

	return (
		<Fragment>
			<EventSearch onSearch={findEventHandler} />
			<EventList items={data} />
		</Fragment>
	);
};

export const getStaticProps = async () => {
	const data = getAllEvents();

	return { props: { data }, revalidate: 180 };
};

export default AllEvents;
