import xxx from 'assets/video-games/mobile/evil-west.jpg';

const Portfolio = () => {
  return (
    <div className='w-full'>
      <h3 className='mb-10 text-center'>title</h3>
      <p>
        So far I’ve worked on several titles - Sniper Ghost Warrior 3, Sniper
        Ghost Warrior Contracts, Shadow Warrior 3, Lords of the Fallen iOS and
        Evil West. In all titles I’ve been a part of the story design team,
        being responsible for character and story creation, narrative design on
        levels and VO recording.
      </p>
      <div className='w-[90%] mx-auto'>
        <div className=''>
          <img src={xxx} alt='' className=' rounded-full' />
        </div>
        <div>
          <h4>title</h4>
          <p>studio</p>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
