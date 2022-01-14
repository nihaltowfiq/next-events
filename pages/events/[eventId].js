import { Fragment } from 'react';
import ErrorAlert from '../../components/Events/ErrorAlert';
import EventContent from '../../components/Events/EventDetails/EventContent';
import EventLogistics from '../../components/Events/EventDetails/EventLogistics';
import EventSummary from '../../components/Events/EventDetails/EventSummary';
import { getEventById, getFeaturedEvents } from '../../helpers';

const EventDetail = ({ data }) => {
	if (data) {
		const { title, date, location, image, description } = data;
		const logisticsProps = { date, address: location, image, imageAlt: title };

		return (
			<Fragment>
				<EventSummary title={title} />
				<EventLogistics {...logisticsProps} />
				<EventContent>
					<p>{description}</p>
				</EventContent>
			</Fragment>
		);
	}

	return (
		<ErrorAlert>
			<p>Loading...!</p>
		</ErrorAlert>
	);
};

export const getStaticProps = async (ctx) => {
	const {
		params: { eventId },
	} = ctx;
	const data = await getEventById(eventId);

	return { props: { data }, revalidate: 1800 };
};

export const getStaticPaths = async () => {
	const events = await getFeaturedEvents();
	const paths = events.map((el) => ({ params: { eventId: el.id } }));

	return { paths, fallback: 'blocking' };
};

export default EventDetail;
