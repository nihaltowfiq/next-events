import { Fragment } from 'react';
import Head from 'next/head';
import { getAllEvents } from '../dummy-data';
import EventList from '../components/Events/EventList';

export default function Home() {
    const allEvents = getAllEvents();
    return (
        <Fragment>
            <Head>
                <title>NextEvents - Home</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <EventList items={allEvents} />
        </Fragment>
    );
}
