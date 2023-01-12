import './button.scss'

const Button = ({label, on_click}) => {
  return (
    <button className='button' onClick={on_click}>
      {label}
    </button>
  )
}

export default Button