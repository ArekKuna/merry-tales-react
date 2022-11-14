const MobileNavigationListItem = ({ links, onClick }) => {
  return (
    <>
      {links.map(({ to, text, id }) => (
        <li className='text-white text-xl font-bold uppercase' key={id}>
          <a href={to} className='navigation__link' onClick={onClick}>
            {text}
          </a>
        </li>
      ))}
    </>
  );
};

export default MobileNavigationListItem;
