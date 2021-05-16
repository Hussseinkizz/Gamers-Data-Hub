import '../assets/libraries/ball-clip-rotate.css';

const SpinLoader = () => {

  return (
    <section className="w-full grid place-items-center p-20 md:p-30 lg:p-50">
      <div className="la-ball-clip-rotate la-2x text-blue-200 animate-spin">
        <div></div>
      </div>
    </section>
  );
};

export default SpinLoader;
