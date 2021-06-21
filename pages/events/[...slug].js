import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEvent = () => {
    const router = useRouter();
    const {
        query: { slug },
    } = router;
    if (!slug) {
        return <p className="center">Loading...</p>;
    }
    console.log(slug);
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
            <p className="center">
                Invalid filter, please adjust your filter values!
            </p>
        );
    }

    const filteredEvents = getFilteredEvents({
        month: filteredMonth,
        year: filteredYear,
    });

    console.log(filteredEvents);

    return (
        <div>
            <h1>This is Filtered Event!</h1>
        </div>
    );
};

export default FilteredEvent;
