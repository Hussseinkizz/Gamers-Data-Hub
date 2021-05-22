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



// Mortality data is in this format
  //  [
  //     {
  //       serial_number: '1',
  //       deceased_age: '25',
  //       death_cause: 'Child Birth',
  //       sickness: 'Pneumonia',
  //       death_desc: 'Unknown',
  //       death_date: '2021-05-05',
  //       time_stamp: '2021-05-20 12:19:29',
  //       chwID: 'CHWID12',
  //       audit_status: 'complete',
  //       village_code: '301'
  //     },
  //     {
  //       serial_number: '2',
  //       deceased_age: '60',
  //       death_cause: 'Accident',
  //       sickness: 'Unknown',
  //       death_desc: 'Unknown',
  //       death_date: '2021-05-19',
  //       time_stamp: '2021-05-28 12:20:02',
  //       chwID: 'CHWID12',
  //       audit_status: 'complete',
  //       village_code: '301'
  //     },
  //     {
  //       deceased_age: '15',
  //       death_cause: 'Child Birth',
  //       sickness: 'Unknown',
  //       death_desc: 'Unknown',
  //       death_date: '2021-05-13',
  //       time_stamp: '2021-05-14 12:20:20',
  //       chwID: 'CHWID12',
  //       audit_status: 'complete',
  //       village_code: '301'
  //     },
  //  ]
export const getMortalities = async (villagecode = null, limit = 20) => {
	let url =
		villagecode == null
			? `http://gamers.doctorsarch.org/api/v1/mortalities/?token=a211089fbffc6d2179a17639137476575f614746&limit=${limit}`
			: `http://gamers.doctorsarch.org/api/v1/mortalities/?token=a211089fbffc6d2179a17639137476575f614746&villagecode=${villagecode}limit=${limit}`;
	const mortalities = await fetch(url);
	return mortalities;
};


