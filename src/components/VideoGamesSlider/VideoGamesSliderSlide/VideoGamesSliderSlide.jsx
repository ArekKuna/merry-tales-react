import LowResImage from 'components/LowResImage/LowResImage';
import BlurredUpImage from 'components/BlurredUpImage/BlurredUpImage';

const VideoGamesSliderSlide = ({ image }) => {
  return (
    <>
      <LowResImage src={image.lowQualityImage} alt={image.alt} />
      <BlurredUpImage
        srcSet={image.scrSet}
        src={image.src}
        alt={image.alt}
        sizes={image.sizes}
      />
    </>
  );
};

export default VideoGamesSliderSlide;
