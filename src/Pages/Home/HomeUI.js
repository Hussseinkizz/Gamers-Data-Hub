import Carousel from '../../visuals/Carousel';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
import TestTable from '../../lib/TestTable';

// sub smart component --> Home UI


/**
 ** 📋  component summary
 * Fade is used for smooth components revealing effects,
 * @param {*} { data }
 * @return {*}
 */ 

const HomeUI = ({ data, tableData }) => {
  let history = useHistory();


  return (
    <section className="w-screen">
      <div className="">
        <Fade top>
          <Carousel
            BarChartsData={data}
          />
        </Fade>
      </div>

      <Fade bottom>
        <TestTable pncsData={tableData}/>
      </Fade>

      <section className="grid mx-auto text-xs place-items-center md:text-sm md:w-3/4 lg:text-base lg:w-4/5">
        
        <Fade bottom>
          <h1 className="flex justify-center w-full py-2 text-sm font-bold text-center md:text-base lg:text-lg">
            Would like to view more data?
          </h1>
        </Fade>

        <Fade bottom>
          <p className="px-12 mb-8 text-center md:px-0">
            We have all sorts of data collected and organized by our system in
            one place. You're also able to filter it per your needs.
          </p>
        </Fade>

        <Fade bottom>
          <button className="action-button" onClick={() => history.push('/categories')}>Proceed</button>
        </Fade>

      </section>

    </section>
  );
};

export default HomeUI;
