import { useState } from 'react';

import VideoCompositionItem from 'components/VideoComposition/VideoCompistionItem/VideoCompositionItem';
import Article from 'components/Article/Article';
import VideoModal from 'components/VideoModal/VideoModal';

import { mediaVideos } from 'data/mediaVideos';
import { mediaArticles } from 'data/mediaArticles';

const VideoComposition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [start, setStart] = useState(null);

  const handleImageClick = (event) => {
    setIsOpen(true);
    setVideoUrl(() => event.target.attributes.activeid.value);
    setStart(() => event.target.attributes.start.value);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setVideoUrl(null);
    setStart(null);
  };

  return (
    <>
      <div className='px-4 flex flex-col items-center md:px-0 md:flex-row md:flex-wrap md:justify-evenly md:items-end xl:justify-center xl:gap-5'>
        {mediaVideos?.map((video) => (
          <VideoCompositionItem
            key={video.id}
            video={video}
            onClick={handleImageClick}
            activeid={video.embedID}
            start={video.start}
          />
        ))}
        {mediaArticles?.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
      <VideoModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        videoUrl={videoUrl}
        mediaVideos={mediaVideos}
        startTime={start}
      />
    </>
  );
};

export default VideoComposition;
