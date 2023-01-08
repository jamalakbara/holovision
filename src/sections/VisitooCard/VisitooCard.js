import React from 'react'
import Card from '../../components/Card/Card'

const VisitooCard = () => {
  return (
    <section className="visitoo container">
      <Card img={'/img/visitoo.png'} header={'Visitoo'} desc={'Quick check-in experience, store visitor information in database, manage and analyze visitor behavior on your own dashboard'} />
    </section>
  )
}

export default VisitooCard