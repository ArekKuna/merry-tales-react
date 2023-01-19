import GamepadIcon from 'components/Icons/GamepadIcon/GamepadIcon';

const ListItems = ({ item }) => {
  return (
    <>
      <li className='flex items-center text-ghostWhite'>
        <GamepadIcon className='h-5 w-7 mr-2 -rotate-45 text-ghostWhite' />
        {item.text}
      </li>
    </>
  );
};

export default ListItems;
