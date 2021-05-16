import * as BiIcons from 'react-icons/bi';
import Fade from 'react-reveal/Fade';
import DropDown from './components/DropDown';

//? This should come from db, should also trigger renders

const DataTypes = [
  { id: 1, name: 'Data Type1' },
  { id: 2, name: 'Data Type2' },
  { id: 3, name: 'Data Type3' },
];

const DataLevels = [
  { id: 1, name: 'National' },
  { id: 2, name: 'Regional' },
  { id: 3, name: 'District' },
  { id: 4, name: 'Parish' },
  { id: 5, name: 'Sub County' },
  { id: 6 , name: 'Village' }
];

const VisualTypes = [
  { id: 2, name: 'Data Table' },
  { id: 1, name: 'Bar Graph' },
  { id: 1, name: 'Line Graph' },
  { id: 3, name: 'Pie chart' },
];

const NationalOverview = () => {
  return (
    <section className="grid w-full mx-auto  place-items-center  md:w-3/4 lg:w-4/5 md:text-lg lg:text-xl">
      {/* PAGE TITLE */}
      <Fade top>
        <h1 className="flex justify-center w-full py-2 text-lg font-bold text-center md:text-xl lg:text-2xl mb-20">
          National Data
        </h1>
      </Fade>
      {/* CONTENT HEADER */}
      <Fade top>
        <div className="flex w-full md:justify-between align-center mb-5 flex-col justify-center md:flex-row">
          <Fade left>
            <div className="flex px-4 py-2 place-items-center font-semibold text-gray-700 space-x-2 w-full justify-center lg:justify-start">
              <BiIcons.BiPin className='text-blue-300'/>
              Maternal Mortality Rate
            </div>
          </Fade>
          <Fade right cascade>
            <div className="flex space-x-4 place-items-center px-4 py-2 text-sm md:text-base w-full justify-center lg:justify-end">
              <span>
                <DropDown items={DataTypes}/>
              </span>
              <span>
                <DropDown items={DataLevels}/>
              </span>
              <span>
                <DropDown items={VisualTypes}/>
                </span>
            </div>
          </Fade>
        </div>
      </Fade>
      {/* PAGE CONTENT / VISUAL : place-holder for now */}
      <Fade top>
        <div className="w-full h-60 rounded-md bg-gray-50 shadow-md animate-pulse mb-10 grid place-items-center">
          <BiIcons.BiLoaderAlt className="text-blue-100 h-10 w-10 animate-spin lg:h-15 lg:w-15" />
        </div>
      </Fade>
      <Fade top>
        <button className="action-button">I want more specific data?</button>
      </Fade>
    </section>
  );
};

export default NationalOverview;
