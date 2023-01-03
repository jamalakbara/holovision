import Button from '../../components/Button/Button'
import './home.scss'

const Home = () => {
  return (
    <section className='home container'>
      <div className='home__main'>
        <div className='home__compro'>
          <h1>Trust Your Asset Security With AI</h1>
          <Button label={'Download Compro'} />
        </div>
        {/* <div className='home__image'>
          <img src='/img/home.png' />
        </div> */}
      </div>
    </section>
  )
}

export default Home