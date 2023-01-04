import { useState } from 'react'
import Description from '../../components/Description/Description'
import Heading from '../../components/Heading/Heading'
import './case_study.scss'

const Case_study = () => {
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
      desc: "A comprehensive system of security cameras can help protect your building, employees, and materials, as well as help you remain competitive in a growing market.",
      icon: "/img/hospital.png",
      image: "",
      isVisible: false
    },
    {
      key: 3,
      label: "Warhouse",
      title: "Keep your warehouse safe",
      desc: "A comprehensive system of security cameras can help protect your building, employees, and materials, as well as help you remain competitive in a growing market.",
      icon: "/img/warehouse.png",
      image: "",
      isVisible: false
    },
    {
      key: 4,
      label: "Office Building",
      title: "Keep your office building safe",
      desc: "A comprehensive system of security cameras can help protect your building, employees, and materials, as well as help you remain competitive in a growing market.",
      icon: "/img/office-building.png",
      image: "",
      isVisible: false
    },
    {
      key: 5,
      label: "Gas Station",
      title: "Keep your gas station safe",
      desc: "A comprehensive system of security cameras can help protect your building, employees, and materials, as well as help you remain competitive in a growing market.",
      icon: "/img/gas-station.png",
      image: "",
      isVisible: false
    },
    {
      key: 6,
      label: "Hotel",
      title: "Keep your hotel safe",
      desc: "A comprehensive system of security cameras can help protect your building, employees, and materials, as well as help you remain competitive in a growing market.",
      icon: "/img/hotel.png",
      image: "",
      isVisible: false
    },
  ])

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
            cases.map(dt => {
              if (dt.key <= 3){
                return (
                  <button onClick={() => handleClick(dt.key)} id={dt.label} className={`case-study__button ${dt.isVisible ? 'active': ''}`}>
                    <img src={dt.icon} alt="icon" />
                    <p>{dt.label}</p>
                  </button>
                )
              }
            })
          }
        </div>
        <div className='case-study__buttons'>
          {
            cases.map(dt => {
              if (dt.key > 3){
                return (
                  <button onClick={() => handleClick(dt.key)} id={dt.label} className={`case-study__button ${dt.isVisible ? 'active': ''}`}>
                    <img src={dt.icon} alt="icon" />
                    <p>{dt.label}</p>
                  </button>
                )
              }
            })
          }
        </div>
      </div>
      <div className='case-study__main'>
          {
            cases.map(dt => {
              if (dt.isVisible){
                return (
                  <div className='case-study__content'>
                    <h1>{dt.title}</h1>
                    <Description>
                      <p>{dt.desc}</p>
                    </Description>
                    <img src={dt.image} alt='imagecase' />
                  </div>
                )
              }
            })
          }
      </div>
    </section>
  )
}

export default Case_study