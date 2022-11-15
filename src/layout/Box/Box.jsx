const variantMap = {
  def: 'w-full border-b-8 border-black',
  logo: 'mt-[55px] bg-gray-300',
  about:
    'px-2 py-2 text-center text-black font-medium tracking-wide space-y-4 bg-indigo-200',
  videoGames: 'pt-8 space-y-8 bg-teal-100'
};

const Box = ({ children, variant }) => {
  const variantClasses = variantMap[variant];

  const { def } = variantMap;

  return (
      <div className={`${def} ${variantClasses}`}>{children}</div>
  )
}

export default Box