import { Fragment } from 'react';
import EventList from '../components/Events/EventList';
import MetaData from '../components/Layout/MetaData';
import { getFeaturedEvents } from '../helpers';

const Home = ({ data }) => {
	return (
		<Fragment>
			<MetaData title="Home" description="Learning and Exploring NextJS!" />

			<EventList items={data} />
		</Fragment>
	);
};

export const getStaticProps = async () => {
	const data = await getFeaturedEvents();

	return { props: { data }, revalidate: 1800 };
};

export default Home;
