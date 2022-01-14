import { useRouter } from 'next/router';
import { Fragment } from 'react';
import ErrorAlert from '../../components/Events/ErrorAlert';
import EventList from '../../components/Events/EventList';
import ResultsTitle from '../../components/Events/ResultsTitle';
import Button from '../../components/UI/Button';
import { getFilteredEvents } from '../../helpers';

const FilteredEvent = ({ data, hasError }) => {
	const router = useRouter();
	const {
		query: { slug },
	} = router;

	if (hasError) {
		return (
			<Fragment>
				<ErrorAlert>
					<p className="center">Invalid filter, please adjust your filter values!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	if (data?.length > 0) {
		const filteredMonth = parseInt(slug[0]);
		const filteredYear = parseInt(slug[1]);
		// const filteredEvents = getFilteredEvents({
		// 	month: filteredMonth,
		// 	year: filteredYear,
		// });

		const date = new Date(filteredYear, filteredMonth - 1);

		return (
			<Fragment>
				<ResultsTitle date={date} />
				<EventList items={data} />
			</Fragment>
		);
	}

	return (
		<Fragment>
			<ErrorAlert>
				<p className="center">No events found for the chosen filter!</p>
			</ErrorAlert>
			<div className="center">
				<Button link="/events">Show All Events</Button>
			</div>
		</Fragment>
	);
};

export const getServerSideProps = async (ctx) => {
	const {
		params: { slug },
	} = ctx;
	const filteredMonth = parseInt(slug[0]);
	const filteredYear = parseInt(slug[1]);

	if (
		isNaN(filteredMonth) ||
		isNaN(filteredYear) ||
		filteredMonth < 1 ||
		filteredMonth > 12 ||
		filteredYear > 2030 ||
		filteredYear < 2021
	) {
		return { props: { hasError: true } };
	}

	const data = await getFilteredEvents({
		month: filteredMonth,
		year: filteredYear,
	});

	return { props: { data } };
};

export default FilteredEvent;
