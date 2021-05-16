import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import ReactSwipe from 'react-swipe';
import BarChartComponent from './BarChartComponent';

//todo: make carousel keyboard navigable,😦

/**
 ** 📋 Component summary
 * Fade is just for smooth animations from react reveal
 * @param {*} { BarChartData1, BarChartData2, BarChartData3 }
 * @return {*} 
 */

const Carousel = ({ BarChartData1, BarChartData2, BarChartData3 }) => {
  const [isMoving, setIsMoving] = useState(true);
  let reactSwipeEl;

  return (
    <>
        <ReactSwipe
          className="carousel mx-auto w-full text-sm md:text-base md:w-3/4 lg:text-lg lg:w-4/5  rounded-md shadow-lg"
          swipeOptions={{
            continuous: { isMoving },
            speed: 600,
            auto: isMoving && 6000,
          }}
          ref={(el) => (reactSwipeEl = el)}
        >
          <div className="w-full bg-white grid place-items-center rounded-md p-3 md:p5 lg:p-8">
            <h1 className="text-center text-base md:text-lg lg:text-xl w-full font-bold my-2 text-gray-900">
              Chart Of Pregnant Mothers Per Month
            </h1>
            <BarChartComponent
              data={BarChartData1}
              Xdata="month"
              Ydata="rate"
              Format
            />
          </div>
          <div className="w-full bg-white grid place-items-center rounded-md p-3 md:p5 lg:p-8">
            <h1 className="text-center text-base md:text-lg lg:text-xl w-full font-bold my-2 text-gray-900">
              Chart Of Pregnant Mothers Per Age Group
            </h1>
            <BarChartComponent
              data={BarChartData2}
              Xdata="range"
              Ydata="rate"
              Format={false}
            />
          </div>
          <div className="w-full bg-white grid place-items-center rounded-md p-3 md:p5 lg:p-8">
            <h1 className="text-center text-base md:text-lg lg:text-xl w-full font-bold my-2 text-gray-900">
              Chart Of House Holds Registrations Per VHT
            </h1>
            <BarChartComponent
              data={BarChartData3}
              Xdata="month"
              Ydata="rate"
              Format
            />
          </div>
        </ReactSwipe>
        <h1 className="text-center text-base md:text-lg lg:text-xl w-full font-bold my-2 text-gray-900 flex place-items-center justify-center mt-4 space-x-6 outline-none mb-32">
          <Fade left>
            <button
              onClick={() => reactSwipeEl.prev()}
              className="plain-button"
            >
              <FaIcons.FaChevronCircleLeft />
              <span>Previous</span>
            </button>
          </Fade>
          <Fade top>
            <button
              onClick={() => setIsMoving(!isMoving)}
              className="plain-button"
            >
              {isMoving ? <span>Pause</span> : <span>Play</span>}
            </button>
          </Fade>
          <Fade right>
            <button
              onClick={() => reactSwipeEl.next()}
              className="plain-button"
            >
              <span>Next</span>
              <FaIcons.FaChevronCircleRight />
            </button>
          </Fade>
        </h1>
    </>
  );
};

export default Carousel;
