import './why.scss'
import Heading from '../../components/Heading/Heading'
import Header from '../../components/Header/Header'
import Description from '../../components/Description/Description'
import Image from '../../components/Image with desc/Image_with_description'

const Why = () => {
  const images = [
    {
      key: 1,
      src: "/img/Picture3_auto_x2 1.jpg",
      desc: "Non-Intelligent Camera"
    },
    {
      key: 2,
      src: "/img/Picture1_auto_x2 1.jpg",
      desc: "Scattered Camera"
    },
    {
      key: 3,
      src: "/img/Picture5_auto_x2 1.png",
      desc: "Separated System"
    },
    {
      key: 4,
      src: "/img/Picture2_auto_x2 1.jpg",
      desc: "Unclear Image"
    },
    {
      key: 5,
      src: "/img/Picture6_auto_x2 1.jpg",
      desc: "Limited Center Space"
    },
    {
      key: 6,
      src: "/img/Picture4_auto_x2 1.jpg",
      desc: "Improper Installation"
    },
  ]

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
          {
            images.map(image => (
              <Image key={image.key} src={image.src} desc={image.desc} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Why