import ReactDom from 'react-dom';
import YouTube from 'react-youtube';

import SwordsIcon from 'components/Icons/SwordsIcon/SwordsIcon';

const VideoModal = ({ isOpen, onClose, videoUrl, startTime }) => {
  if (!isOpen) {
    return null;
  }
  const element = document.getElementById('root');

  return ReactDom.createPortal(
    <div
      onClick={onClose}
      className={
        isOpen
          ? 'w-full h-full fixed flex justify-center items-center opacity-100 z-40 duration-1000 bg-black/90 '
          : 'opacity-0 duration-1000'
      }
    >
      <SwordsIcon
        className='absolute top-5 right-5 h-8 w-8 cursor-pointer text-ghostWhite md:h-10 md:w-10 xl:h-12 xl:w-12 xl:top-20 xl:right-20'
        onClick={onClose}
      />
      <YouTube
        videoId={videoUrl}
        loading='lazy'
        iframeClassName='w-full h-full'
        opts={{
          playerVars: {
            autoplay: 1,
            playsinline: 0,
            start: startTime,
          },
        }}
        className='w-[95%] h-[330px] bg-cover bg-center sm:w-[90%] md:w-[80%] lg:w-[70%] lg:h-[450px] xl:w-[60%] xl:h-[500px] duration-1000'
      />
    </div>,
    element
  );
};

export default VideoModal;
