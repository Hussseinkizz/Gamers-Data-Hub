// import { useState } from 'react';
import { useGetData } from '../../hooks/useFetchHooks';
import { ErrorUI, FetchUI, LoaderUI } from '../../modules/StateModules';
import DataCategoriesUI from './DataCategoriesUI';

// smart component --> DataCategories

const DataCategories = () => {
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
      return <DataCategoriesUI data={data?.categories} />;

    default:
      return <FetchUI fetching={isFetching} />;
  }
};

export default DataCategories;
