import './clients.scss'
import Heading from '../../components/Heading/Heading'

const Clients = () => {
  const images = [
    "/img/client1.png",
    "/img/client2.png",
    "/img/client3.png",
    "/img/client4.png",
    "/img/client5.png",
    "/img/client6.png",
    "/img/client7.png",
  ]

  return (
    <section className='clients container'>
      <Heading text={'Our Happy Clients'} />
      <div className='clients__clients'>
        {
          images.map((image,idx) => (
            <div key={idx} className='clients__client'>
              <img src={image} alt='client' />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Clients