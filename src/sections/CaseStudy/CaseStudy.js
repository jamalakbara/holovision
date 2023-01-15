import { useState } from 'react'
import Description from '../../components/Description/Description'
import Heading from '../../components/Heading/Heading'
import './case-study.scss'

const CaseStudy = () => {
  const [cases, setCases] = useState([
    {
      key: 1,
      label: "Factory",
      title: "Keep your factory safe",
      desc: "A comprehensive system of security cameras can help protect your building, employees, and materials, as well as help you remain competitive in a growing market.",
      icon: "/img/factory.png",
      image: "/img/factory-img.png",
      isVisible: true
    },
    {
      key: 2,
      label: "Hospital",
      title: "Keep your hospital safe",
      desc: "In order to provide better service and maintaining order in hospital, it is necessary to build a surveillance system. The surveillance system should allow 24-hour monitoring for key areas and provide analysis results for decision maker.",
      icon: "/img/hospital.png",
      image: "/img/hospital-case.png",
      isVisible: false
    },
    {
      key: 3,
      label: "Warhouse",
      title: "Keep your warehouse safe",
      desc: "A surveillance system can help to reduce the risk of stock missing and improve the ability of warehouse efficiency of stock management during transport and storage.",
      icon: "/img/warehouse.png",
      image: "/img/warehouse-case.png",
      isVisible: false
    },
    {
      key: 4,
      label: "Office Building",
      title: "Keep your office building safe",
      desc: "A surveillance system can help 7/24h security monitoring, reduce the risk of valuable company assets missing and with AI Camera that grants you the ability to zoom in and out without losing image quality.",
      icon: "/img/office-building.png",
      image: "/img/office-case.png",
      isVisible: false
    },
    {
      key: 5,
      label: "Gas Station",
      title: "Keep your gas station safe",
      desc: "In the daily business, a gas station operator should not only focus on service quality, but also pay attention to the statistics of customer visits, so as to achieve more efficient operation and management.",
      icon: "/img/gas-station.png",
      image: "/img/gas-station-case.png",
      isVisible: false
    },
    {
      key: 6,
      label: "Hotel",
      title: "Keep your hotel safe",
      desc: "Alarm information and handling steps are recorded on papers by handwriting, which is difficult to manage and easy to get lost.",
      icon: "/img/hotel.png",
      image: "/img/hospital-case.png",
      isVisible: false
    },
  ])

  const casesLessThanEquals3 = cases.filter(cs => cs.key <= 3)
  const casesMoreThan3 = cases.filter(cs => cs.key > 3)

  const handleClick = (key) => {    
    setCases(cases.map(dt => {
      if (dt.key === key) {
        return {...dt, isVisible: true}
      }
      return {...dt, isVisible: false}
    }))
  }
  
  return (
    <section className='case-study container'>
      <Heading text={'Case Study'} />
      <div className='case-study__btcontainer'>
        <div className='case-study__buttons'>
          {
            casesLessThanEquals3.map(dt => (
              <button key={dt.key} onClick={() => handleClick(dt.key)} id={dt.label} className={`case-study__button ${dt.isVisible ? 'active': ''}`}>
                <img src={dt.icon} alt="icon" />
                <p>{dt.label}</p>
              </button>
            ))
          }
        </div>
        <div className='case-study__buttons'>
          {
            casesMoreThan3.map(dt => (
              <button key={dt.key} onClick={() => handleClick(dt.key)} id={dt.label} className={`case-study__button ${dt.isVisible ? 'active': ''}`}>
                <img src={dt.icon} alt="icon" />
                <p>{dt.label}</p>
              </button>
            ))
          }
        </div>
      </div>
      <div className='case-study__main'>
          {
            cases.filter(dt => dt.isVisible).map(dt => (
                  <div key={dt.key} className='case-study__content'>
                    <h1>{dt.title}</h1>
                    <Description>
                      <p>{dt.desc}</p>
                    </Description>
                    <div className='case-study__imagechange'>
                      <img src={dt.image} alt='imagecase' />
                    </div>
                  </div>
                )
            )
          }
      </div>
    </section>
  )
}

export default CaseStudy