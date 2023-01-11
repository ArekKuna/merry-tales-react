// import PortfolioParagraph from 'components/Portfolio/PortfolioParagraph/PortfolioParagraph';
import PortfolioItem from 'components/Portfolio/PortfolioItem/PortfolioItem';

import { portfolioImages } from 'data/PortfolioImages';

const PortfolioItems = () => {
  return (
    <div className='max-w-screen-2xl mb-10 flex flex-col md:flex-row md:flex-wrap xl:mb-0 xl:content-evenly'>
      {portfolioImages?.map((image) => (
        <PortfolioItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default PortfolioItems;
