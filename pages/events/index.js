import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/Events/EventList';

const AllEvents = () => {
    const allEvents = getAllEvents();
    return (
        <div>
            <h1>This is All Events!</h1>

            <EventList items={allEvents} />
        </div>
    );
};

export default AllEvents;
