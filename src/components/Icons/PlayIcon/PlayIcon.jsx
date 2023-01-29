const PlayIcon = ({ className, onClick }) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      stroke-width='0'
      viewBox='0 0 20 20'
      class='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-20 w-20 opacity-70 z-20 text-gray-300 xl:hidden'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <path
        fill-rule='evenodd'
        d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
        clip-rule='evenodd'
      ></path>
    </svg>
  );
};

export default PlayIcon;
