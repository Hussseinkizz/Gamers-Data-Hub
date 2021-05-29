import { useDebugValue } from "react";
import { useQuery } from "react-query";
import axios from "axios";

// fetching data with axios with ES7 - no query mutations
// use local host port 8080 for offline api testing...
const getData = async () => {
	const { data } = await axios.get(
		//'https://my-json-server.typicode.com/Hussseinkizz/Gamers-Data-Hub/data'
		"http://gamers.doctorsarch.org/api/v1/mortalities/?token=a211089fbffc6d2179a17639137476575f614746&limit=100"
	);
	return data;
};

// ⚛ hook without params
export function useGetData() {
	useDebugValue(getData ?? "loading...");
	return useQuery("receive-data-all", getData);
}

export function usePopulation() {
	return useQuery("population", () => axios.get("http://gamers.doctorsarch.org/api/v1/population/?token=a211089fbffc6d2179a17639137476575f614746"))
}

export function useBirthData() {
	return useQuery("birthdata", () => axios.get("http://gamers.doctorsarch.org/api/v1/birthdata/?token=a211089fbffc6d2179a17639137476575f614746"))
}

export function useANCData() {
	return useQuery("anc", () => axios.get("http://gamers.doctorsarch.org/api/v1/anc/?token=a211089fbffc6d2179a17639137476575f614746"))
}

export function usePNCData() {
	return useQuery("pnc", () => axios.get("http://gamers.doctorsarch.org/api/v1/pnc/?token=a211089fbffc6d2179a17639137476575f614746"))
}

export function useStockData() {
	return useQuery("stock_status", () => axios.get("http://gamers.doctorsarch.org/api/v1/stock/?token=a211089fbffc6d2179a17639137476575f614746"))
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
