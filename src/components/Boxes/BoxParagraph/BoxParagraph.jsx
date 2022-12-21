const variantMap = {
  def: 'text-base font-bold tracking-tight capitalize sm:text-lg lg:text-xl xl:text-lg',
  about: 'capitalize sm:!text-lg xl:leading-2 xl:!text-base xl:!leading-[1.25]',
  link: 'font-bold !text-2xl underline underline-offset-4 xl:!text-lg xl:!tracking-tight',
};

const BoxParagraph = ({ text, variant }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return <p className={`${def} ${variantClasses}`}>{text}</p>;
};

export default BoxParagraph;
