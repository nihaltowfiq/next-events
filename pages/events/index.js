import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/Events/EventList';
import EventSearch from '../../components/Events/EventSearch';

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
