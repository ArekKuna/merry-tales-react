const variantMap = {
  default: 'flex flex-col px-2 mx-auto'
}

const Container = ({ children, variant='default' }) => {
  const variantClasses = variantMap[variant];

  return <div className={variantClasses}>{children}</div>;
};

export default Container