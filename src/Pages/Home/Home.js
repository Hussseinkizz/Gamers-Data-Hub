// import { useState } from 'react';
import {
	useGetData,
	usePopulation,
	useBirthData,
  useANCData,
  usePNCData
} from "../../hooks/useFetchHooks";
import { ErrorUI, FetchUI, LoaderUI } from "../../modules/StateModules";
import HomeUI from "./HomeUI";
import { sickness, ageGroups } from "../../lib/mortalities";
import { households, population } from "../../lib/households";
import { birthdata } from "../../lib/birthdata";
import { anc } from '../../lib/anc'
import { pnc } from '../../lib/pnc'
// smart component --> Home

const Home = () => {
	// const [queryString, setQueryString] = useState('maternalRates');

	let { status, data, error, isFetching } = usePNCData();

	// const onLoadHandler = () => {
	// setQueryString('maternalRates')
	// console.log(queryString)
	// }

	switch (status) {
		case "loading":
			return <LoaderUI />;

		case "error":
			return <ErrorUI error={error} />;

		case "success":
      // let b = birthdata(data.data)
			// let { year_popn, parish_popn, district_popn } = population(data.data)
			// let {anc1, anc2, anc3, anc4, anc5, anc6, anc7, anc8} = anc(data.data);
      let {pnc1, pnc2, pnc3} =  pnc(data.data)
			return (
        <HomeUI
					sData={pnc1}
					aData={pnc2}
					hData={pnc3}
				/>
			);

		default:
			return <FetchUI fetching={isFetching} />;
	}
};

export default Home;
