import { useLocation } from 'react-router-dom';
import FacebookIcon from 'components/Icons/FacebookIcon/FacebookIcon';
import LinkedInIcon from 'components/Icons/LinkedInIcon/LinkedInIcon';
import YouTubeIcon from 'components/Icons/YouTubeIcon/YouTubeIcon';
import GmailIcon from 'components/Icons/GmailIcon/GmailIcon';
import SocialsItem from 'components/SocialsBox/SocialsItem/SocialsItem';

const variantMap = {
  main: 'w-full h-full flex z-10 sm:grid sm:grid-cols-2 sm:grid-rows-2 xl:col-span-1 xl:row-span-1 xl:order-8',
  fixed: 'h-auto max-w-screen-2xl sm:!flex',
};

const SocialsBox = ({ variant }) => {
  const location = useLocation();
  const variantClasses = variantMap[variant];

  const { main } = variantMap;

  return (
    <div className={`${main} ${variantClasses}`}>
      <SocialsItem
        variant={location.pathname === '/' ? 'facebookHome' : 'facebook'}
        element={
          <FacebookIcon
            className={`mx-auto h-8 w-8 ${
              location.pathname === '/'
                ? 'text-ghostWhite xl:group-hover:text-black xl:duration-500'
                : 'text-black xl:group-hover:text-ghostWhite xl:duration-500'
            }`}
          />
        }
        href='https://www.facebook.com/szmeryznadkamery'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'linkedInHome' : 'linkedin'}
        element={
          <LinkedInIcon
            className={`mx-auto h-8 w-8 ${
              location.pathname === '/'
                ? 'text-ghostWhite xl:group-hover:text-black xl:duration-500'
                : 'text-black xl:group-hover:text-ghostWhite xl:duration-500'
            }`}
          />
        }
        href='https://www.linkedin.com/in/maria-borys-pi%C4%85tkowska-126308149/'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'youTubeHome' : 'youtube'}
        element={
          <YouTubeIcon
            className={`mx-auto h-8 w-8 ${
              location.pathname === '/'
                ? 'text-ghostWhite xl:group-hover:text-black xl:duration-500'
                : 'text-black xl:group-hover:text-ghostWhite xl:duration-500'
            }`}
          />
        }
        href='https://www.youtube.com/@GrajKolektyw'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'def' : 'email'}
        element={
          <GmailIcon
            className={`mx-auto h-8 w-8 ${
              location.pathname === '/'
                ? 'text-ghostWhite xl:group-hover:text-black xl:duration-500'
                : 'text-black xl:group-hover:text-ghostWhite xl:duration-500'
            }`}
          />
        }
        href='mailto:merry.rpg@gmail.com?subject=Merry Tale Games Contact'
      />
    </div>
  );
};

export default SocialsBox;
