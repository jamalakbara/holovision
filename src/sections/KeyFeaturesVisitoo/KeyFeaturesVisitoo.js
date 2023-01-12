import Description from "../../components/Description/Description"
import Header from "../../components/Header/Header"
import Heading from "../../components/Heading/Heading"
import './key-features.scss'

const KeyFeaturesVisitoo = () => {
  const features = [
    {
      key: 1,
      header: "Analytic Dashboard",
      desc: "Comprehensively analyze visitor data",
      icon: "/img/buil.png"
    },
    {
      key: 2,
      header: "Face Recognition",
      desc: "Detect someone with high accuracy",
      icon: "/img/photo.png"
    },
    {
      key: 3,
      header: "Attendance and Visitor Management",
      desc: "Restrict visitor access to certain locations",
      icon: "/img/lock.png"
    },
    {
      key: 4,
      header: "Integrated System",
      desc: "Ease of implementation into HR systems",
      icon: "/img/cloud.png"
    },
  ]

  return (
    <section className='key-features container'>
      <Heading text={'Key Features'} />
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

export default KeyFeaturesVisitoo