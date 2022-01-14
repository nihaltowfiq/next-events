import Head from 'next/head';
import { Fragment } from 'react';
import EventList from '../components/Events/EventList';
import { getFeaturedEvents } from '../helpers';

const Home = ({ data }) => {
	return (
		<Fragment>
			<Head>
				<title>NextEvents - Home</title>
				<meta name="description" content="Generated by create next app" />
			</Head>

			<EventList items={data} />
		</Fragment>
	);
};

export const getStaticProps = async () => {
	const data = await getFeaturedEvents();

	return { props: { data }, revalidate: 1800 };
};

export default Home;
