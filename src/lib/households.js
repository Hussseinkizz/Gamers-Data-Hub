// export const households = () => {

//     let s = [
//         {label: "< 1 Month", value: 58},
//         {label: "< 11 Months", value: 25},
//         {label: "1 to 5 years", value: 86},
//         {label: "6 to 9 years", value: 59},
//         {label: "10 to 14 years", value: 88},
//         {label: "15 to 19 years", value: 59},
//         {label: "20 to 24 years", value: 49},
//         {label: "25 to 29 years", value: 39},
//         {label: "> 50 years", value: 8},
//     ]

// 	return s;
// };

// Format of year_popn is
// Array(
//     0: {year: "2014", population: 896662}
//     1: {year: "2015", population: 997191}
//     2: {year: "2016", population: 1030661}
//     3: {year: "2017", population: 1065468}
//     4: {year: "2018", population: 1101671}
//     5: {year: "2019", population: 1139334}
//     6: {year: "2020", population: 1178534}
// )

export const population = (data = { population: [{ parish: null, popn_2020: null }] }) => {
	
    // Per village population data
	let years = {
	};

    for (let i = 2014; i <= 2020; i++) {
        years[i.toString()] = []
    }

	let parish_popn = [
		// { parish: "", population: ### }
	];

	let year_popn = [
		// { year: 2014, population: ### }
	];

	let district_popn = [
		// { district: "kotido", population: ### }
	];

    let county_popn = [
        // { county: "Pian", population: ### }
    ]

    let subcounty_popn = [
        // { subcounty: "", population: ### }
    ]

	let kot_c = 0,
		mor_c = 0,
		nak_c = 0,
		nab_c = 0,
		abi_c = 0,
		kaa_c = 0,
		amu_c = 0,
		nap_c = 0;

	data.population.forEach((d) => {
		parish_popn.push({ parish: d.parish, population: d.popn_2020 });

		for (let year of Object.keys(years)) {
			years[year].push(d[`popn_${year}`]);
		}

		switch (d.district) {
			case "Kotido":
				kot_c += parseInt(d.popn_2020);
				break;
			case "Moroto":
				mor_c += parseInt(d.popn_2020);
				break;
			case "Nakapiripirit":
				nak_c += parseInt(d.popn_2020);
				break;
			case "Nabilatuk":
				nab_c += parseInt(d.popn_2020);
				break;
			case "Abim":
				abi_c += parseInt(d.popn_2020);
				break;
			case "Kaabong":
				kaa_c += parseInt(d.popn_2020);
				break;
			case "Amudat":
				amu_c += parseInt(d.popn_2020);
				break;
			case "Napak":
				nap_c += parseInt(d.popn_2020);
				break;
		}
	});

	district_popn.push(
		{ district: "Kotido", population: kot_c },
		{ district: "Moroto", population: mor_c },
		{ district: "Nakapiripirit", population: nak_c },
		{ district: "Nabilatuk", population: nab_c },
		{ district: "Abim", population: abi_c },
		{ district: "Kaabong", population: kaa_c },
		{ district: "Amudat", population: amu_c },
		{ district: "Napak", population: nap_c }
	);

	// Total population for each year
	for (let year of Object.keys(years)) {
		years[year] = years[year].reduce(
			(sum, i) => parseInt(sum) + parseInt(i)
		);
		year_popn.push({ year: year, population: years[year] });
	}

	return { year_popn, parish_popn, district_popn }; // Data for 2020 -- More data filters will be available with time. For now let us use this!
};
