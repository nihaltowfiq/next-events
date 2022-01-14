export const getAllEvents = async () => {
	const res = await fetch('https://database-for-projects-f2951-default-rtdb.firebaseio.com/events.json');
	const data = await res.json();

	let events = [];
	for (let [key, value] of Object.entries(data)) {
		events.push({
			id: key,
			...value,
		});
	}

	return events;
};

export const getFeaturedEvents = async () => {
	const events = await getAllEvents();
	return events.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
	const events = await getAllEvents();
	return events.find((el) => el.id === id);
};

export const getFilteredEvents = async (dateFilter) => {
	const { month, year } = dateFilter;
	const events = await getAllEvents();

	let filteredEvents = events.filter((event) => {
		const eventDate = new Date(event.date);
		return eventDate.getMonth() === month - 1 && eventDate.getFullYear() === year;
	});

	return filteredEvents;
};
