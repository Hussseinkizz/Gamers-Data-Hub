import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom'

//todo: useHistroy()

const DataCategories = () => {
  let history = useHistory()
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
          <button className="data-category-button">Birth related data</button>
          <button className="data-category-button">
            Maternal related data
          </button>
          <button className="data-category-button">
            Infant mortality rate
          </button>
          <button className="data-category-button">Stock tracking</button>
          <button className="data-category-button">Disease burden</button>
          <button className="data-category-button">ANC tracking</button>
          <button className="data-category-button">Immunization</button>
          <button className="data-category-button">Epidemics</button>
          <button className="data-category-button">Drug adherance</button>
          <button className="data-category-button">
            Population growth rate
          </button>
        </div>
      </Fade>
    </section>
  );
};

export default DataCategories;
