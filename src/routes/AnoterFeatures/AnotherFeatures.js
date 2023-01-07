import './another-features.scss'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'

const AnotherFeatures = () => {
  return (
    <section className='another-features container'>
      <Heading text={'Another Feature'} />
      <div className='another-features__main'>
        <div className='another-features__text'>
          <Header text={'Attendance System'} />
          <Description>
            <p>
            Helps monitor employee attendance with face recognition technology and body temperature that can be seen in real time and connected directly to the access door in your office
            </p>
          </Description>
        </div>
        <div className='another-features__image'>
          <img src='/img/rafiki.png' />
        </div>
      </div>
    </section>
  )
}

export default AnotherFeatures