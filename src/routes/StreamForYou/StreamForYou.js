import './stream-for-you.scss'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'

const StreamForYou = () => {
  return (
    <section className='stream-for-you container'>
      <div className='stream-for-you__text'>
        <Header text={'Stream from Your Devices.'}/>
        <Description>
          <p>
          Holovision provides you with instant access from your phone, tablet, computer, or even Amazon Alexa device.
          </p>
        </Description>
      </div>
      <div className='stream-for-you__image'>
        <img src='/img/stream-for-you.png' alt='stream'/>

      </div>
    </section>
  )
}

export default StreamForYou