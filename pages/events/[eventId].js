import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';

const EventDetail = () => {
    const router = useRouter();
    console.log(router);
    const event = getEventById(router.query.eventId);

    if (!event) {
        return <p>No Event Found!</p>;
    }
    return (
        <div>
            <h1>Selected Event: {event.title}</h1>
        </div>
    );
};

export default EventDetail;
