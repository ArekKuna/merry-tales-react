import GlobalContainer from 'layout/GlobalContainer/GlobalContainer';
import PageTitle from 'layout/PageTitle/PageTitle';
import SectionParagraph from 'layout/SectionParagraph/SectionParagraph';
import VideoComposition from 'components/VideoComposition/VideoComposition';
import SocialsBox from 'components/SocialsBox/Socials';

const Media = () => {
  return (
    <GlobalContainer loadingVariant='mediaLoading' readyVariant='mediaReady'>
      <PageTitle text='media' />
      <div className='z-20 max-w-screen-2xl xl:flex xl:flex-col'>
        <SectionParagraph textVariant='media' />
        <div className='mb-20 xl:mb-0'>
          <VideoComposition />
        </div>
      </div>
      <SocialsBox variant='fixed' />
    </GlobalContainer>
  );
};

export default Media;
