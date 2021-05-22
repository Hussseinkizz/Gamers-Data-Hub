import { useDebugValue } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// fetching data with axios with ES7 - no query mutations
// use local host port 8080 for offline api testing...
//* 💻local:  http://localhost:8080/data,
//* 🌐 online: https://my-json-server.typicode.com/Hussseinkizz/Gamers-Data-Hub/data

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

// fetching data with axios with ES7 + mutable params
// //? look into json server docs, for nested resource path?
// const getDataByParam = async (query) => {
//   const { data } = await axios.get(`http://localhost:8080/${query}`);
// return data;
// };

// ⚛ hook with params
// export function useGetDataByParam(queryString) {
//   useDebugValue(getDataByParam ?? 'loading...')
//   return useQuery(["receive-data", queryString], () => getDataByParam(queryString));
// }
