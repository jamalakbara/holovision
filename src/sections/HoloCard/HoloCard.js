import Card from '../../components/Card/Card'

const HoloCard = () => {
  return (
    <section className="holocard container">
      <Card img={'/img/holo.png'} header={'Holovision NVR'} desc={'Accurately detect deliveries, people, animals, Continuous recording, Private storage'} />
    </section>
  )
}

export default HoloCard