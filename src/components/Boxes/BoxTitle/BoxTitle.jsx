import { Link } from 'react-router-dom';

const variantMap = {
  def: 'text-3xl text-center font-extrabold uppercase underline underline-offset-4 sm:text-4xl lg:text-5xl xl:text-2xl xl:leading-7',
};

const BoxTitle = ({ title, to, variant }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
    <Link to={to}>
      <h2 className={`${def} ${variantClasses}`}>{title}</h2>
    </Link>
  );
};

export default BoxTitle;
