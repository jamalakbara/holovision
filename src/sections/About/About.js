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
            Holovision is an end-to-end security and surveillance solution that brings all the intelligent functions of a video surveillance system together to keep people and property assets safe at all times.
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