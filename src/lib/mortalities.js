export const sickness = (arr = {mortalities: []}) => {
	let s = [],
		p = 0,
		u = 0,
		m = 0,
		d = 0;
	for (let a of arr.mortalities) {
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
	s.push({ name: "Diarrhea", count: d });
	s.push({ name: "Unknown", count: u });

	return s;
};

export const ageGroups = (arr = {mortalities: []}) => {
	let s = [
		{ group: "0 - 5", count: 0 },
		{ group: "5 - 10", count: 0 },
		{ group: "10 - 20", count: 0 },
		{ group: "20 - 30", count: 0 },
		{ group: "30 - 40", count: 0 },
		{ group: "40 - 50", count: 0 },
		{ group: "> 50", count: 0 },
	];

	for (let a of arr.mortalities) {
		if (a.deceased_age <= 5) {
			s[0]["count"]++;
			continue;
		} else if (a.deceased_age <= 10 && a.deceased_age > 5) {
			s[1]["count"]++;
			continue;
		} else if (a.deceased_age <= 20 && a.deceased_age > 10) {
			s[2]["count"]++;
			continue;
		} else if (a.deceased_age <= 30 && a.deceased_age > 20) {
			s[3]["count"]++;
			continue;
		} else if (a.deceased_age <= 40 && a.deceased_age > 30) {
			s[4]["count"]++;
			continue;
		} else if (a.deceased_age <= 50 && a.deceased_age > 40) {
			s[5]["count"]++;
		} else {
			s[6]["count"]++;
		}
	}

	return s
};
