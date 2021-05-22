import Fade from 'react-reveal/Fade';
import { useGetData } from '../../hooks/useFetchHooks';
import { useStore } from '../../states/clientState/StoreProvider'
import { ErrorUI, FetchUI, LoaderUI } from '../../modules/StateModules';

// Hybrid component --> SubDataCategories

const SubDataCategories = () => {
  const { status, data, error, isFetching } = useGetData();
  const { selectedCategory } = useStore()


  switch (status) {
    case 'loading':
      return <LoaderUI />;

    case 'error':
      return <ErrorUI error={error} />;

    case 'success':
      return (
        <section className="grid w-full mx-auto  place-items-center  md:w-3/4 lg:w-4/5 md:text-lg lg:text-xl">
          <Fade bottom>
            <h1 className="flex justify-center w-full py-2 text-lg font-bold text-center md:text-xl lg:text-2xl mb-20">
              Please select a data sub-category
            </h1>
          </Fade>
          {/* SUB CATEGORIES */}
          <Fade top cascade>
            <div className="grid grid-flow-row grid-cols-1 grid-rows-auto gap-4 md:grid-cols-2 lg:grid-cols-5  md:gap-6 lg:gap-8 md:w-full">
              {/* VALIDATING SELECTED CATEGORY, THEN SHOW IT'S SUB CATEGORIES */}
              {data?.categories.map(
                (category) =>
                  category?.categoryName === selectedCategory &&
                  category?.subCategories.map((subCategory, index) => (
                    <button key={index} className="data-category-button">
                      {subCategory}
                    </button>
                  ))
              )}
            </div>
          </Fade>
        </section>
      );

    default:
      return <FetchUI fetching={isFetching} />;
  }
};

export default SubDataCategories;
