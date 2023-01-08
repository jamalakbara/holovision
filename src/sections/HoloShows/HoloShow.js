import './holo-show.scss'
import Header from '../../components/Header/Header'

const HoloShow = () => {
  return (
    <section className='holo-show container'>
      <div className='holo-show__image'>
        <img src='/img/holo show.png' alt='img-sholo' />
      </div>
      <div className='holo-show__text'>
        <Header text={'Pro-Intelligence · Pro-Features · Pro-Results Connects to Your Existing System'} />s
      </div>
    </section>
  )
}

export default HoloShow