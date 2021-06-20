import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/Events/EventDetails/EventSummary';
import EventLogistics from '../../components/Events/EventDetails/EventLogistics';
import EventContent from '../../components/Events/EventDetails/EventContent';

const EventDetail = () => {
    const router = useRouter();
    const event = getEventById(router.query.eventId);

    if (!event) {
        return <p>No Event Found!</p>;
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

export default EventDetail;
