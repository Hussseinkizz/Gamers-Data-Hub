import { useDebugValue } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// 📋 useDebugValue is useful for debugging the value we're getting in browser and it's recommended for custom hooks, it is used with tools like react developer tools. But it's less useful if we don't need to know what we're returning from hook or not returning any!

// fetching data with axios with ES7 - no query mutations
// use local host port 8080 for offline api testing...
const getData = async () => {
  const { data } = await axios.get(
    'https://my-json-server.typicode.com/Hussseinkizz/Gamers-Data-Hub/data'
  );
  return data;
};

// ⚛ hook without params
export function useGetData() {
  useDebugValue(getData ?? 'loading...');
  return useQuery('receive-data-all', getData);
}

export function usePNCData() {
  return useQuery('pnc', () =>
    axios.get(
      'http://gamers.doctorsarch.org/api/v1/pnc/?token=a211089fbffc6d2179a17639137476575f614746'
    )
  );
}

// 📋 the queryString to the hook must match exactly the one that could have been in the url, for ex. "pnc" and the base url refers to the unchanging part of our api endpoint, the auth key is the token, due production, it  should be stored in the .env file to avoid public exposure, and the .env is stored in the root directory of the project.

// -----------------------------------------------------------------------------

let Base_url = 'http://gamers.doctorsarch.org/api/v1';
let Auth_key = 'a211089fbffc6d2179a17639137476575f614746';
// queryString will be passed in at hook call from the state

let fetchDataByParam = async (queryString) => {
  let { data } = await axios.get(
    `${Base_url}/${queryString}/?token=${Auth_key}`
  );
  return data; // console.log(data)
};

export function useFetchData(queryString) {
  console.log(`Passed Param: ${queryString}`);
  // 📋 use react developer tool chrome extension to inspect debbug value.
  useDebugValue(fetchDataByParam ?? 'loading...');
  return useQuery(['receive-data', queryString], () =>
    fetchDataByParam(queryString)
  );
}

// -----------------------------------------------------------------------------

// export function usePopulation() {
//   return useQuery('population', () => axios.get(
//       'http://gamers.doctorsarch.org/api/v1/population/?token=a211089fbffc6d2179a17639137476575f614746'
//     ))
// }

// export function useBirthData() {
// 	return useQuery("birthdata", () => axios.get("http://gamers.doctorsarch.org/api/v1/birthdata/?token=a211089fbffc6d2179a17639137476575f614746"))
// }

// export function useANCData() {
// 	return useQuery("anc", () => axios.get("http://gamers.doctorsarch.org/api/v1/anc/?token=a211089fbffc6d2179a17639137476575f614746"))
// }

// export function useStockData() {
// 	return useQuery("stock_status", () => axios.get("http://gamers.doctorsarch.org/api/v1/stock/?token=a211089fbffc6d2179a17639137476575f614746"))
// }
