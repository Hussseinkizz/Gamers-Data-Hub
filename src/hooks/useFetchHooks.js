import { useDebugValue } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// fetching data with axios with ES7 - no query mutations
// use local host port 8080 for offline api testing...
const getData = async () => {
  const { data } = await axios.get(
    //'https://my-json-server.typicode.com/Hussseinkizz/Gamers-Data-Hub/data'
    'http://gamers.doctorsarch.org/api/v1/mortalities/?token=a211089fbffc6d2179a17639137476575f614746&limit=100'
  );
  return data;
};

// ⚛ hook without params
export function useGetData() {
  useDebugValue(getData ?? 'loading...');
  return useQuery('receive-data-all', getData);
}

// fetching data with axios with ES7 + mutable params
// const getData = async (query) => {
//   const { data } = await axios.get(`http://localhost:8080/${query}`);
// return data;
// };

// ⚛ hook with params
// export function useGetData1(queryString) {
//   useDebugValue(getData ?? 'loading...')
//   return useQuery(["receive-data", queryString], () => getData(queryString));
// }
