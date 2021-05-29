export const anc = (data = { ANC: [] }) => {
	// let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0
	let anc_status = {};
	let total_ancs = 0;
	let all_ancs = {};

	for (let i = 1; i <= 8; i++) {
		anc_status[`anc${i}Status`] = 0;
		all_ancs[`anc${i}`] = [];
	}

	data.ANC.forEach((d) => {
		for (let k of Object.keys(anc_status)) {
			d[k] === "complete" ? anc_status[k]++ : (anc_status[k] += 0);
		}

		total_ancs++;
	});

	for (let i in Object.keys(all_ancs)) {
		++i;
		all_ancs[`anc${i}`].push(
			{
				label: `Mothers on ANC ${i}`,
				count: anc_status[`anc${i}Status`],
			},
			{
				label: `Mothers not on ANC ${i}`,
				count: total_ancs - anc_status[`anc${i}Status`],
			}
		);
	}

	return all_ancs; // You can use object destructuring here to choose which anc you want to display
};
