import { useState } from 'react';

import VideoCompositionItem from 'components/VideoComposition/VideoCompistionItem/VideoCompositionItem';
import OtherMedia from 'components/OtherMedia/OtherMedia';
import VideoModal from 'components/VideoModal/VideoModal';

import { mediaVideos } from 'data/mediaVideos';
import { otherMedia } from 'data/otherMedia';

const VideoComposition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeVideoStartStamp, setActiveVideoStartStamp] = useState(null);

  const handleImageClick = (activeVideoId, videoStartTimeStamp) => {
    setIsOpen(true);
    setActiveVideoUrl(() => activeVideoId);
    setActiveVideoStartStamp(() => videoStartTimeStamp);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setActiveVideoUrl(null);
    setActiveVideoStartStamp(null);
  };

  return (
    <>
      <div className='px-4 flex flex-col items-center md:px-0 md:flex-row md:flex-wrap md:justify-evenly md:items-end xl:justify-center xl:gap-5'>
        {mediaVideos?.map((video) => (
          <VideoCompositionItem
            key={video.id}
            video={video}
            onClick={handleImageClick}
            activeVideoId={video.embedID}
            videoStartTimeStamp={video.start}
          />
        ))}
        {otherMedia?.map((media) => (
          <OtherMedia key={media.id} media={media} />
        ))}
      </div>
      <VideoModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        videoUrl={activeVideoUrl}
        mediaVideos={mediaVideos}
        startTime={activeVideoStartStamp}
      />
    </>
  );
};

export default VideoComposition;
