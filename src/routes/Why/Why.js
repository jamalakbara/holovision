import './why.scss'
import Heading from '../../components/Heading/Heading'
import Header from '../../components/Header/Header'
import Description from '../../components/Description/Description'

const Why = () => {
  return (
    <section className='why container'>
      <Heading text={'Why Holovision?'} />
      <div className='why__main'>
        <div className='why__text'>
          <Header text={'Tired of having problems during surveillance?'} />
          <Description>
            <p>if those are your problem, then you’re in the right place!</p>
          </Description>
        </div>
        <div className='why__images'>
        </div>
      </div>
    </section>
  )
}

export default Why