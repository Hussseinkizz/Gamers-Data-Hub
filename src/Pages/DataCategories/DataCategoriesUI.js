import Fade from 'react-reveal/Fade';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from '../../states/clientState/StoreProvider';

const DataCategoriesUI = ({ data: categories }) => {
  let dispatch = useDispatch();
  let history = useHistory();

  return (
    <section className="grid w-full mx-auto  place-items-center  md:w-3/4 lg:w-4/5 md:text-lg lg:text-xl">
      <Fade bottom>
        <h1 className="flex justify-center w-full py-2 text-lg font-bold text-center md:text-xl lg:text-2xl mb-20">
          Please select data category
        </h1>
      </Fade>
      {/* CATEGORIES */}
      <Fade top cascade>
        <div className="grid grid-flow-row grid-cols-1 grid-rows-auto gap-4 md:grid-cols-2  lg:grid-cols-5  md:gap-6 lg:gap-8">
          {categories?.map((category, index) => (
            <button
              key={index}
              className="data-category-button"
              onClick={() =>
                dispatch({
                  payload: 'SET_SELECTED_CATEGORY',
                  selection: category?.categoryName,
                }) | history.push('/sub-categories')
              }
            >
              {category?.categoryName}
            </button>
          ))}
        </div>
      </Fade>
    </section>
  );
};

// defining default props
DataCategoriesUI.defaultProps = {
  data: [],
};

// 🔒 constraining props
DataCategoriesUI.propTypes = {
  data: propTypes.array.isRequired,
};

// exporting stuff...
export default DataCategoriesUI;
