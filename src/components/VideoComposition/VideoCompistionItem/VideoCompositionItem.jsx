const VideoCompositionItem = ({ video, onClick, activeid, start }) => {
  const imageUrl = `http://img.youtube.com/vi/${video.embedID}/hqdefault.jpg`;

  return (
    <div className='relative group max-w-sm mb-14 md:max-w-[40%] lg:max-w-[35%] xl:mb-0 xl:max-w-[15%] xl:flex xl:flex-col'>
      <h3
        className='mb-4 font-semibold text-center text-ghostWhite xl:absolute xl:h-full xl:w-full xl:px-2 xl:flex xl:justify-center xl:items-center xl:opacity-0 xl:cursor-pointer xl:z-20 xl:hover:opacity-100 xl:group-hover:scale-150 xl:duration-300 xl:rounded-lg xl:bg-black/80'
        onClick={onClick}
        src={imageUrl}
        activeid={activeid}
        start={start}
      >
        {video.title}
      </h3>
      <img
        src={imageUrl}
        alt={video.alt}
        className='rounded-lg shadow-xl ring-2 ring-white xl:cursor-pointer xl:group-hover:scale-150 xl:group-hover:z-10 xl:duration-300'
        onClick={onClick}
        activeid={activeid}
        start={start}
        loading='lazy'
      />
    </div>
  );
};

export default VideoCompositionItem;
