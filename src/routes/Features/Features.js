import './features.scss'
import Description from '../../components/Description/Description'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'

const Features = () => {
  const contents = [
    {
      key: 1,
      header: "AI Solution",
      descs: [
        "Face Recognition",
        "License Plate Recognition",
        "Crowd People Estimation",
        "Vehicle Traffic Estimation",
        "Costume AI Solution "
      ],
      icon: "/img/AI Solution.png"
    },
    {
      key: 2,
      header: "Application",
      descs: [
        "Face Recognition",
        "License Plate Recognition",
        "Crowd People Estimation",
        "Vehicle Traffic Estimation",
        "Costume AI Solution "
      ],
      icon: "/img/AI Solution.png"
    },
    {
      key: 3,
      header: "System & Integration",
      descs: [
        "Face Recognition",
        "License Plate Recognition",
        "Crowd People Estimation",
        "Vehicle Traffic Estimation",
        "Costume AI Solution "
      ],
      icon: "/img/AI Solution.png"
    },
    {
      key: 4,
      header: "One Stop Services",
      descs: [
        "Face Recognition",
        "License Plate Recognition",
        "Crowd People Estimation",
        "Vehicle Traffic Estimation",
        "Costume AI Solution "
      ],
      icon: "/img/AI Solution.png"
    },
  ]
  return (
    <section className='features container'>
      <Heading text={'Our Technology'} />
      <div className='features__contents'>
        {
          contents.map(content => (
            <div key={content.key} className='features__content'>
              <img src={content.icon} alt="icon" />
              <div className='features__content-title'>
                <Header text={content.header} />
              </div>
              <Description>
                <ul>
                  {
                    content.descs.map(desc => (
                      <li>{desc}</li>
                    ))
                  }
                </ul>
              </Description>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Features