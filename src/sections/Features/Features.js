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
        "Costume AI Solution"
      ],
      icon: "/img/AI Solution.png"
    },
    {
      key: 2,
      header: "Application",
      descs: [
        "Smart Perimeter with AI",
        "Visitor management & Access Control",
        "Crowd People Estimation",
        "Attendance and Room Management",
        "Alarm Management"
      ],
      icon: "/img/Application.png"
    },
    {
      key: 3,
      header: "System & Integration",
      descs: [
        "Infrastructure Installation",
        "Server and Networking",
        "Analytics Algorithms",
        "System Integrator",
        "Dashboard and Reporting"
      ],
      icon: "/img/System n Integration.png"
    },
    {
      key: 4,
      header: "One Stop Services",
      descs: [
        "Documentation",
        "Training",
        "Technical Support",
        "Project Management",
        "After Sales Support"
      ],
      icon: "/img/One Stop.png"
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
                    content.descs.map((desc,idx) => (
                      <li key={idx}>{desc}</li>
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