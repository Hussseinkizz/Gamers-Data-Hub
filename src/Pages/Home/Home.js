// import { useState } from 'react';
import {
  useFetchData,
  useGetData,
  usePNCData,
} from '../../hooks/useFetchHooks';
import { ErrorUI, FetchUI, LoaderUI } from '../../modules/StateModules';
import HomeUI from './HomeUI';
// import { sickness, ageGroups } from '../../lib/mortalities';
import { households, population } from '../../lib/households';
// import { birthdata } from '../../lib/birthdata';
// import { anc } from '../../lib/anc';
import { pncFormatter } from '../../lib/pncFormatter';

// smart component --> Home

const Home = () => {
  // const [queryString, setQueryString] = useState('population');

  let hookData = useFetchData('population'); // Should get this from state

  let { year_popn, district_popn } =
    hookData?.isSuccess && population(hookData?.data);

  console.log(year_popn, district_popn); // ✔ we will visulize these next in bar charts!

  let { status, data, error, isFetching } = usePNCData();
  let barsData = useGetData();

  // let { status, data, error, isFetching } = useGetData();
  // using it this way for now, but useGetDataByParam is better!

  // const onLoadHandler = () => {
  // setQueryString('maternalRates')
  // console.log(queryString)
  // }

  switch (status) {
    case 'loading':
      return <LoaderUI />;

    case 'error':
      return <ErrorUI error={error} />;

    case 'success':
      // let b = birthdata(data.data)
      // let { year_popn, parish_popn, district_popn } = population(data.data)
      // let {anc1, anc2, anc3, anc4, anc5, anc6, anc7, anc8} = anc(data.data);
      // let { pnc1, pnc2, pnc3 } = pnc(data.data);
      // return <HomeUI sData={pnc1} aData={pnc2} hData={pnc3} />;
      return (
        <HomeUI
          data={barsData?.isSuccess && barsData?.data}
          tableData={pncFormatter(data.data)}
        />
      );

    default:
      return <FetchUI fetching={isFetching} />;
  }
};

export default Home;
