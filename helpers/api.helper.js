export const getAllEvents = async () => {
	const response = await fetch('https://database-for-projects-f2951-default-rtdb.firebaseio.com/events.json');
	const data = await response.json();

	let events = [];
	for (let [key, value] of Object.entries(data)) {
		events.push({
			id: key,
			...value,
		});
	}

	return events;
};

export function getFeaturedEvents() {
	const events = await getAllEvents();
	return events.filter((event) => event.isFeatured);
}

export const getEventById = async (id) => {
	const events = await getAllEvents();
	return events.find((el) => el.id === id);
};
