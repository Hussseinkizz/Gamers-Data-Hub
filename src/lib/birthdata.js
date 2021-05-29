export const birthdata = (data = { maternal_birth_data: [] }) => {
	let birth_location = [
		// { location: "home", count: ### }
	];
	let home_count = 0,
		facility_count = 0;

	data.maternal_birth_data.forEach((d) => {
		d.deliveryLocation === "home"
			? home_count++
			: d.deliveryLocation === "facility"
			? facility_count++
			: (facility_count += 0);
	});

	birth_location.push(
		{ location: "Home", count: home_count },
		{ location: "Facility", count: facility_count }
	);

	return birth_location;
};
