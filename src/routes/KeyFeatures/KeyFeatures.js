import Description from "../../components/Description/Description"
import Header from "../../components/Header/Header"
import Heading from "../../components/Heading/Heading"
import './keyFeatures.scss'

const KeyFeatures = () => {
  const features = [
    {
      key: 1,
      header: "Analytic Dashboard",
      desc: "Comprehensively analyze visitor data",
      icon: "/img/buil.png"
    },
    {
      key: 2,
      header: "Analytic Dashboard",
      desc: "Comprehensively analyze visitor data",
      icon: "/img/buil.png"
    },
    {
      key: 3,
      header: "Analytic Dashboard",
      desc: "Comprehensively analyze visitor data",
      icon: "/img/buil.png"
    },
    {
      key: 4,
      header: "Analytic Dashboard",
      desc: "Comprehensively analyze visitor data",
      icon: "/img/buil.png"
    },
  ]

  return (
    <section className='key-features container'>
      <Heading text={'Our Technology'} />
      <div className='key-features__contents'>
        {
          features.map(content => (
            <div key={content.key} className='key-features__content'>
              <img src={content.icon} alt="icon" />
              <div className='key-features__content-title'>
                <Header text={content.header} />
              </div>
              <Description>
                <p>{content.desc}</p>
              </Description>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default KeyFeatures