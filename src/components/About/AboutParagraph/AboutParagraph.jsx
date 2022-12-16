const variantMap = {
  def: 'mb-8 text-center',
  textEnd: 'text-end',
};

const AboutParagraph = ({ text, variant, onCLick }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
    <p className={`${def} ${variantClasses}`} onClick={onCLick}>
      {text}
    </p>
  );
};

export default AboutParagraph;
