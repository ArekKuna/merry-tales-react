import CompositionImage from 'components/Composition/CompositionImage/CompositionImage';

const Composition = ({ workshops }) => {
  return (
    <div className='mb-20 px-4 flex flex-col items-center md:px-0 md:flex-row md:flex-wrap md:justify-center md:gap-6 xl:max-w-[40%] xl:mb-0 xl:justify-evenly xl:gap-4'>
      {workshops?.map((workshop) => (
        <CompositionImage key={workshop.id} workshop={workshop} />
      ))}
    </div>
  );
};

export default Composition;
