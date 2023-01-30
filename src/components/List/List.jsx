import ListItems from 'components/List/ListItems/ListItems';

const List = ({ listTitle, listItems }) => {
  return (
    <div className='mb-20 px-4 flex flex-col items-center md:px-0 xl:mb-0 xl:max-w-[55%] xl:justify-center'>
      <h3 className='mb-10 text-2xl text-center capitalize text-ghostWhite xl:mb-6'>
        {listTitle}
      </h3>
      <ul className='space-y-2 mb-10 xl:mb-6'>
        {listItems?.map((item) => (
          <ListItems key={item.id} item={item} />
        ))}
      </ul>
      <p className='text-xl text-center font-semibold text-ghostWhite md:max-w-3/4 lg:max-w-full'>
        If you’re interested in any of the above, feel free to&nbsp;
        <a href='mailto:merry.rpg@gmail.com?subject=Merry Tale Games Contact'>
          <strong className='underline underline-offset-4'>contact me</strong>
        </a>
      </p>
    </div>
  );
};

export default List;
