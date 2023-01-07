import './navback.scss'
import { Link } from 'react-router-dom'

const Navback = () => {
  return (
    <nav className="navback container">
      <Link className='navback__logo' to="/">
        <img src='/img/arr-left.png' alt='back' />
      </Link>
    </nav>
  )
}

export default Navback