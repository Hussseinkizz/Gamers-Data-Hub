export const pnc = (data = { PNC: [] }) => {
	// let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0
	let pnc_status = {};
	let total_pncs = 0;
	let all_pncs = {};

	for (let i = 1; i <= 3; i++) {
		pnc_status[`pnc${i}Status`] = 0;
		all_pncs[`pnc${i}`] = [];
	}

	data.PNC.forEach((d) => {
		for (let k of Object.keys(pnc_status)) {
			d[k] === "complete" ? pnc_status[k]++ : (pnc_status[k] += 0);
		}

		total_pncs++;
	});

	for (let i in Object.keys(all_pncs)) {
		++i;
		all_pncs[`pnc${i}`].push(
			{
				label: `Mothers on pnc ${i}`,
				count: pnc_status[`pnc${i}Status`],
			},
			{
				label: `Mothers not on pnc ${i}`,
				count: total_pncs - pnc_status[`pnc${i}Status`],
			}
		);
	}

	return all_pncs; // You can use object destructuring here to choose which pnc you want to display
};
