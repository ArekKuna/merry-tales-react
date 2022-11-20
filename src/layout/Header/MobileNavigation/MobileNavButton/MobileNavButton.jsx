const iconsConfig = {
  top: {
    active: 'icon-top-active',
  },
  middle: {
    active: 'icon-middle-active',
  },
  bottom: {
    active: 'icon-bottom-active',
  },
};

const MobileNavButton = ({ isActive, onClick }) => {
  const { top, middle, bottom } = iconsConfig;

  return (
    <div
      onClick={onClick}
      className='relative h-[40px] w-[40px] cursor-pointer md:hidden'
    >
      <span className={`icon-top ${isActive ? top.active : ''}`}>&nbsp;</span>
      <span className={`icon-middle ${isActive ? middle.active : ''}`}>
        &nbsp;
      </span>
      <span className={`icon-bottom ${isActive ? bottom.active : ''}`}>
        &nbsp;
      </span>
    </div>
  );
};

export default MobileNavButton;
