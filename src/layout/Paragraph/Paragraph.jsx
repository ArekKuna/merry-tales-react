const variantMap = {
    def: ''
}

const Paragraph = ({ variant, text }) => {
    const variantClasses = variantMap[variant];

  return (
      <p className={variantClasses}>{text}</p>
  )
}

export default Paragraph