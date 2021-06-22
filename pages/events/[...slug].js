import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/Events/EventList';
import ResultsTitle from '../../components/Events/ResultsTitle';
import ErrorAlert from '../../components/Events/ErrorAlert';

const FilteredEvent = () => {
    const router = useRouter();
    const {
        query: { slug },
    } = router;
    if (!slug) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center">Loading...</p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }
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
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center">
                        Invalid filter, please adjust your filter values!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
        month: filteredMonth,
        year: filteredYear,
    });

    const date = new Date(filteredYear, filteredMonth - 1);

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
};

export default FilteredEvent;
