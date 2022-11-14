import HeaderBackground from "./HeaderBackground/HeaderBackground";
import Logo from "../../components/Logo/Logo";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

const Header = () => {
  return (
    <header className='fixed w-full p-1'>
      <HeaderBackground />
      <Logo />
      <MobileNavigation />
    </header>
  );
}

export default Header