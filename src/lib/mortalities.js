export const sickness = (arr) => {
	let s = [],
		p = 0,
		u = 0,
		m = 0,
		d = 0;
	for (let a of arr) {
		switch (a.sickness) {
			case "Pneumonia":
				p++;
				break;
			case "Malaria":
				m++;
				break;
			case "Diarrhea":
				d++;
				break;
			default:
				u++;
				break;
		}
	}

	s.push({ name: "Pneumonia", count: p });
	s.push({ name: "Malaria", count: m });
	s.push({ name: "Unknown", count: u });
	s.push({ name: "Diarrhea", count: d });

	return s;
};
