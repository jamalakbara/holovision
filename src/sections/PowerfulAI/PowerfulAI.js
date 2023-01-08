import './powerful-ai.scss'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'

const PowerfulAI = () => {
  return (
    <section className='powerful-ai container'>
      <div className='powerful-ai__text'>
        <Header text={'Powerful AI'}/>
        <Description>
          <p>
          Most surveillance systems provide generic 'motion detected' notifications or false alerts for trees, insects or weather.
          </p>
          <p>
          Holovision provides a completely new experience with AI generated accurate alerts.
          </p>
        </Description>
      </div>
      <div className='powerful-ai__image'>
        <img src='/img/powerful AI.png' alt='powerful AI'/>

      </div>
    </section>
  )
}

export default PowerfulAI