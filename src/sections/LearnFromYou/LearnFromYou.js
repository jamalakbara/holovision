import './learn-from-you.scss'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'

const LearnFromYou = () => {
  return (
    <section className='learn-from-you container'>
      <div className='learn-from-you__image'>
        <img src='/img/learn-from-you.png' alt='learn'/>

      </div>
      <div className='learn-from-you__text'>
        <Header text={'Learn From You'}/>
        <Description>
          <p>
          Holovision artificial intelligence improves when you choose to share feedback.
          </p>
        </Description>
      </div>
    </section>
  )
}

export default LearnFromYou