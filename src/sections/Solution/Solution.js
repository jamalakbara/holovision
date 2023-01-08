import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import './solution.scss'

const Solution = () => {
  return (
    <section className='solution container'>
      <Heading text={'Our Solution'} />
      <div className='solution__main'>
        <div className='solution__text'>
          <Header text={'We don’t just provide you with software'} />
          <Description>
            <p>{'We also solve your problem with  3C (Connect, Collect, Comprehend)'}</p>
          </Description>
        </div>
        <div className='solution__image'>
          <img src='/img/3C.png' alt='3c' />
        </div>
      </div>
    </section>
  )
}

export default Solution