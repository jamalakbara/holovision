import './product.scss'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'

const Product = () => {
  const products = [
    {
      key: 1,
      img: "/img/visitoo.png",
      header: "Visitoo",
      desc: "The VISITOO system is a solution for managing employees and guests through monitoring, which includes a visitor registration system, camera surveillance system, and identity verification system, in order to ensure the security of the location and prevent unauthorized access.",
      to: '/visitoo'
    },
    {
      key: 2,
      img: "/img/holo.png",
      header: "Holovision NVR",
      desc: "HOLOVISION NVR is an advanced surveillance system which uses AI technology to enable advanced features like object detection, smart analytics which can be accessed using mobile device. It can detect variety of object such as people, cars, animals and other object's movement . Additionally, it has a local storage which ensures that the surveillance footage is stored locally and can be accessed in real-time, which providing an extra layer of security for your assets.",
      to: '/holovision'
    },
  ]
  return (
    <section className='product container'>
      <Heading text='Our Product' />
      <div className='product__cards'>
        {
          products.map(product => (
            <Card key={product.key} img={product.img} header={product.header} desc={product.desc} to={product.to} />
          ))
        }
      </div>
    </section>
  )
}

export default Product