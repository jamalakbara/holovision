import './product.scss'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'

const Product = () => {
  const products = [
    {
      key: 1,
      img: "/img/visitoo.png",
      header: "Visitoo",
      desc: "Quick check-in experience, store visitor information in database, manage and analyze visitor behavior on your own dashboard",
      to: '/visitoo'
    },
    {
      key: 2,
      img: "/img/holo.png",
      header: "Holovision NVR",
      desc: "Accurately detect deliveries, people, animals, Continuous recording, Private storage",
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