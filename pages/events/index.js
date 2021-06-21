import { Fragment } from 'react';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/Events/EventList';

const AllEvents = () => {
    const allEvents = getAllEvents();
    return (
        <Fragment>
            <EventList items={allEvents} />
        </Fragment>
    );
};

export default AllEvents;
