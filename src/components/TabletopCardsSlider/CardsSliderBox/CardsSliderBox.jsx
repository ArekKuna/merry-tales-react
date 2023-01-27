const CardsSliderBox = ({ children }) => {
  return (
    <div className='w-full mb-20 flex flex-col items-center xl:mb-0 xl:w-1/2 xl:flex-row-reverse xl:justify-around'>
      {children}
    </div>
  );
};

export default CardsSliderBox;
