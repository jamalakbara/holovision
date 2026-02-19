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
          <Header text={'More Than Just Software'} />
          <Description>
            <p>{'A Comprehensive 3C Approach: Connect, Collect, Comprehend. We provide an integrated ecosystem that solves your surveillance challenges fundamentally.'}</p>
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