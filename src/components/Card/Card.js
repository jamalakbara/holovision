import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Description from '../Description/Description'
import Button from '../../components/Button/Button'

import './card.scss'

const Card = ({img, header, desc, to}) => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <section className='card'>
      <div className='card__img'>
        <img src={img} alt="card" />
      </div>
      <div className='card__content'>
        <Header text={header} />
        <Description>
          <p>
            {desc}
          </p>
        </Description>
        {
          to && (
            <Link to={to}>
              <Button label='Read More' on_click={handleClick} />
            </Link>
          )
        }
      </div>
    </section>
  )
}

export default Card