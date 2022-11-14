const NavBackground = ({isChecked}) => {
  return <div className={`navigation-background ${isChecked ? 'navigation-background-active' : '' }`}>&nbsp;</div>;
}

export default NavBackground