const variantMap = {
  def: 'text-xl font-bold tracking-tight capitalize sm:text-2xl lg:text-3xl xl:text-xl',
  about: 'capitalize sm:!text-2xl xl:leading-2 xl:!text-lg xl:!leading-[1.25]',
  link: 'font-bold !text-2xl underline underline-offset-4 sm:!text-4xl lg:!text-5xl xl:!text-2xl xl:!tracking-tight',
};

const BoxParagraph = ({ text, variant }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return <p className={`${def} ${variantClasses}`}>{text}</p>;
};

export default BoxParagraph;
