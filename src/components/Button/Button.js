import './button.scss'

const Button = ({label, on_click, isLoading=false}) => {
  return (
    <button className={`button ${isLoading?'button__loading':''}`} onClick={on_click} disabled={isLoading}>
      {label}
    </button>
  )
}

export default Button