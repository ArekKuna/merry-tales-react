import PortfolioParagraph from 'components/Portfolio/PortfolioParagraph/PortfolioParagraph';
import PortfolioItems from 'components/Portfolio/PortfolioItems/PortfolioItems';

const Portfolio = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center z-10'>
      <div className='flex justify-center'>
        <PortfolioParagraph />
      </div>
      <PortfolioItems />
    </div>
  );
};

export default Portfolio;
