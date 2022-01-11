import { Fragment } from 'react';
import ErrorAlert from '../../components/Events/ErrorAlert';
import EventContent from '../../components/Events/EventDetails/EventContent';
import EventLogistics from '../../components/Events/EventDetails/EventLogistics';
import EventSummary from '../../components/Events/EventDetails/EventSummary';
import { getAllEvents, getEventById } from '../../helpers';

const EventDetail = ({ event }) => {
	// const router = useRouter();
	// const event = getEventById(router.query.eventId);

	if (!event) {
		return (
			<ErrorAlert>
				<p>No Event Found!</p>
			</ErrorAlert>
		);
	}
	const { title, date, location, image, description } = event;
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
};

export const getStaticProps = async (ctx) => {
	const {
		params: { eventId },
	} = ctx;
	console.log(ctx);
	const data = await getEventById(eventId);

	return {
		props: {
			event: data,
		},
	};
};

export const getStaticPaths = async () => {
	const events = await getAllEvents();
	const paths = events.map((el) => ({ params: { eventId: el.id } }));

	return {
		paths,
		fallback: false,
	};
};

export default EventDetail;
