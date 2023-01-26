import { Link } from 'react-router-dom';

const variantMap = {
  def: 'group p-6 flex-col justify-center items-center text-center font-medium border-b-2 border-black space-y-2 bg-ghostWhite sm:space-y-4 xl:p-2 xl:space-y-2 xl:hover:bg-black xl:duration-500',
  about:
    '!py-10 row-span-1 flex xl:col-span-2 xl:row-span-1 xl:order-3 xl:border-r-2',
  videoGames:
    '!p-0 row-span-2 sm:col-span-2 xl:col-span-4 xl:row-span-2 xl:order-4',
  tabletop:
    'tabletop flex !space-y-5 sm:col-span-2 xl:col-span-2 xl:row-span-3 xl:order-1 xl: xl:!space-y-4',
  workshops:
    'flex sm:border-r-2 xl:col-span-2 xl:row-span-1 xl:order-5 xl:border-l-2',
  media: 'flex xl:col-span-2 xl:row-span-1 xl:border-b-2 xl:order-6',
  achievements:
    'flex sm:border-r-2 xl:col-span-3 xl:row-span-1 xl:order-7 xl:border-l-2 xl:!border-b-0 xl:hover:border-r-ghostWhite',
};

const LinkBox = ({ to, title, description, element, variant }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
    <Link to={to} className={`${def} ${variantClasses}`}>
      {title && (
        <h2 className='text-2xl text-center whitespace-pre-line font-extrabold uppercase underline underline-offset-4 sm:text-3xl xl:text-2xl xl:leading-7 xl:group-hover:text-ghostWhite xl:duration-500'>
          {title}
        </h2>
      )}
      {description && (
        <span className='text-lg font-bold tracking-tight capitalize xl:group-hover:text-ghostWhite xl:duration-500'>
          {description}
        </span>
      )}
      {element}
    </Link>
  );
};

export default LinkBox;
