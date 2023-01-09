import React from 'react'
import Card from '../../components/Card/Card'

const VisitooCard = () => {
  return (
    <section className="visitoo container">
      <Card img={'/img/visitoo.png'} header={'Visitoo'} desc={'The VISITOO system is a solution for managing employees and guests through monitoring, which includes a visitor registration system, camera surveillance system, and identity verification system, in order to ensure the security of the location and prevent unauthorized access.'} />
    </section>
  )
}

export default VisitooCard