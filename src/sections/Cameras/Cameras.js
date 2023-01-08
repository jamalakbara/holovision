import './cameras.scss'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'

const Cameras = () => {
  return (
    <section className='cameras container'>
      <div className='cameras__image'>
        <img src='/img/cameras.png' alt='learn'/>

      </div>
      <div className='cameras__text'>
        <Header text={'Choose From Many Cameras.'}/>
        <Description>
          <ul>
            <li>Any IP Camera</li>
            <li>Nest, Arlo and Wyze cloud cameras</li>
            <li>Compatible with Onvif and RSTP. Onvif cameras are auto-detected.</li>
            <li>Reduce costs (up to $80 per camera) and allow continuous recording and smart detection.</li>
          </ul>
        </Description>
      </div>
    </section>
  )
}

export default Cameras