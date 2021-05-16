// import { useState } from 'react';
import { useGetData } from '../../hooks/useFetchHooks';
import { ErrorUI, FetchUI, LoaderUI } from '../../modules/StateModules';
import HomeUI from './HomeUI';

// smart component --> Home


const Home = () => {
  // const [queryString, setQueryString] = useState('maternalRates');
  const { status, data, error, isFetching } = useGetData();

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
      return <HomeUI data={data} />;

    default:
      return <FetchUI fetching={isFetching} />;
  }
};

export default Home;
