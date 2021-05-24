// import { useState } from 'react';
import { useGetData } from '../../hooks/useFetchHooks';
import { ErrorUI, FetchUI, LoaderUI } from '../../modules/StateModules';
import HomeUI from './HomeUI';
import {sickness, ageGroups} from '../../lib/mortalities'

// smart component --> Home


const Home = () => {
  // const [queryString, setQueryString] = useState('maternalRates');
  const { status, data, error, isFetching } = useGetData();
  let d = sickness(data)
  let a = ageGroups(data)
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
      return <HomeUI sData={d} aData={a} />;

    default:
      return <FetchUI fetching={isFetching} />;
  }
};

export default Home;
