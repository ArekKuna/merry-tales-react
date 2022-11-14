const variantMap = {
  hero: 'container px-6 py-56'
}

const Container = ({ children, variant }) => {
  const variantClasses = variantMap[variant];

  return <div className={variantClasses}>{children}</div>;
};

export default Container