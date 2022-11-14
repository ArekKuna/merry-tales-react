const variantMap = {
  hero: 'min-h-[600px] mb-24'
}

const Section = ({ children, id, variant }) => {
  const variantClasses = variantMap[variant];

  return (
    <section id={id} className={variantClasses}>
      {children}
    </section>
  );
};

export default Section