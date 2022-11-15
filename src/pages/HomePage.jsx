import Box from '../layout/Box/Box';
import Logo from '../layout/Logo/Logo';
import MainImage from '../components/MainImage/MainImage';
import Paragraph from '../layout/Paragraph/Paragraph';
import VideoGamesSlider from '../components/VideoGamesSlider/VideoGamesSlider';



const HomePage = () => {
  return (
    <main className='border-8 border-black min-h-[200rem] md:grid-cols-2 md:grid-rows-2'>
      <Box variant='logo'>
        <Logo />
      </Box>
      <Box>
        <MainImage />
      </Box>
      <Box variant='about'>
        <p className='text-4xl'>Marian Paździoch</p>
        <p className=''>Writing and narrative design</p>
        <p className='font-black underline'>Read more about me!</p>
      </Box>
      <Box variant='videoGames'>
        <h2 className='text-3xl text-center font-bold space-y-8 '>Video Games</h2>
        <VideoGamesSlider />
      </Box>
    </main>
  );
}

export default HomePage