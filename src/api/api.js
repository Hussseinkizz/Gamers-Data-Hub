//* 🕸 set api maybe an axios base url or something reusable with the api
// we could set auth, parameters and timeout as need be

// Set config defaults while creating an instance

// const instance = axios.create({
//     baseURL: 'http://localhost:8080',
//     headers: {
//         'content-type':'application/json',
//         'x-rapidapi-host':'http://localhost:8080',
//         // 'x-rapidapi-key': process.env.RAPIDAPI_KEY
//     },
// });

// export const getData = (query) => {
//     instance({
//         'method':'GET',
//         'url': `/${query}`,
//         'params': {}
//     })
//   }

// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

export const getMortalities = async (villagecode = null, limit = 20) => {
	let url =
		villagecode == null
			? `http://gamers.doctorsarch.org/api/v1/mortalities/?token=a211089fbffc6d2179a17639137476575f614746&limit=${limit}`
			: `http://gamers.doctorsarch.org/api/v1/mortalities/?token=a211089fbffc6d2179a17639137476575f614746&villagecode=${villagecode}limit=${limit}`;
	const mortalities = await fetch(url);
	return mortalities;
};


