import Head from 'next/head';
import { Fragment } from 'react';
import EventList from '../components/Events/EventList';
import { getAllEvents } from '../helpers';

function Home({ allEvents }) {
	return (
		<Fragment>
			<Head>
				<title>NextEvents - Home</title>
				<meta name="description" content="Generated by create next app" />
			</Head>

			<EventList items={allEvents} />
		</Fragment>
	);
}

export const getStaticProps = async () => {
	const events = await getAllEvents();

	return {
		props: {
			allEvents: events,
		},
	};
};

export default Home;
