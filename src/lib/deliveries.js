export const deliveries = (arr = []) => {
	const d = [
		{ delivery_location: "Facility", delivery_count: 0 },
		{ delivery_location: "Home", delivery_count: 0 },
	];

    for (let a of arr) {
        switch (a.deliveryLocation) {
            case "facility":
                d[0].delivery_count++
                break
            case "home":
                d[1].delivery_count++
                break;
            default:
                d[1].delivery_count++
                break;
        }
    }

    return d
};
