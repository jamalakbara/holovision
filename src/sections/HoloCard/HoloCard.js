import Card from '../../components/Card/Card'

const HoloCard = () => {
  return (
    <section className="holocard container">
      <Card img={'/img/holo.png'} header={'Holovision NVR'} desc={"HOLOVISION NVR is an advanced surveillance system which uses AI technology to enable advanced features like object detection, smart analytics which can be accessed using mobile device. It can detect variety of object such as people, cars, animals and other object's movement . Additionally, it has a local storage which ensures that the surveillance footage is stored locally and can be accessed in real-time, which providing an extra layer of security for your assets."} />
    </section>
  )
}

export default HoloCard