// import PortfolioParagraph from 'components/Portfolio/PortfolioParagraph/PortfolioParagraph';
import PortfolioItem from 'components/Portfolio/PortfolioItem/PortfolioItem';

import { portfolioImages } from 'data/portfolioImages';

const PortfolioItems = () => {
  return (
    <div className='max-w-screen-2xl w-full mb-20 flex flex-col justify-evenly items-center md:flex-row md:flex-wrap xl:mb-0'>
      {portfolioImages?.map((image) => (
        <PortfolioItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default PortfolioItems;
