const Button = ({ text, children, styles }) => {
  return (
    <button
      className={`bg-secondary text-[16px] text-white 
    font-poppins font-semibold py-3 px-6 flex gap-x-2 rounded-[10px] w-fit
    hover:bg-secondary-alt ease-in-out duration-500 ${styles}`}
    >
      {text}
      {children}
    </button>
  )
}

export default Button
