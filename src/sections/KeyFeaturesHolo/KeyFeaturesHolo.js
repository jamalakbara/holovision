import './key-features-holo.scss'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'

const KeyFeaturesHolo = () => {
  return (
    <section className='key-features-holo container'>
      <Heading text={'Key Features'} />
      <div className='key-features-holo__main'>
        <div className='key-features-holo__image'>
          <img src='/img/key features holo.png' alt='key-features-holo' />
        </div>
        <div className='key-features-holo__text'>
          <Header text={'Smart Alerts for Over 30 Types Objects.'} />
        </div>
      </div>
    </section>
  )
}

export default KeyFeaturesHolo