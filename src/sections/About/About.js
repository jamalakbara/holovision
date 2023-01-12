import Description from '../../components/Description/Description'
import Title from '../../components/Title/Title'
import './about.scss'

const About = () => {
  return (
    <section className='about container'>
      <div className='about__main'>
        <Title>
          <h1>
            What is <b>Holovision</b>?
          </h1>
        </Title>
        <Description>
          <p>
            Holovision is end-to-end security and surveillance solution that brings all the intelligent function of a video surveillance together to keep people and property assets safe all the time.
          </p>
        </Description>
      </div>
      <div className='about__img'>
        <img src='/img/about-img.png' alt='about' />
      </div>
    </section>
  )
}

export default About