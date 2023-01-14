import './key-features-holo.scss'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'
import Description from '../../components/Description/Description'

const KeyFeaturesHolo = () => {
  const features = [
    {
      key: 1,
      icon: "/img/feat1.png",
      header: "Smart AI Alert System",
      desc: "It is possible to receive real-time notifications on your smartphone through email and Telegram, allowing you to quickly respond to actions.",
      images: [
        "/img/email-logo-png-1114 1.png",
        "/img/telegram-logo-944 1.png",
      ],
    },
    {
      key: 2,
      icon: "/img/feat2.png",
      header: "Integrate Exsisting IP Camera",
      desc: "It is possible to connect your existing CCTV with IP cameras without having to spend a lot of money, making your assets more secure",
      images: [
        "/img/cameras.png",
        "/img/pngegg (1) 1.png",
        "/img/pngwing 2.png",
        "/img/pngwing 1.png"
      ],
    },
    {
      key: 3,
      icon: "/img/feat3.png",
      header: "Storage in your device",
      desc: "Storing the footage locally on a hard drive or other storage device provides an extra layer of security against unwanted things. The storage capacity in this system is 1 terabyte.",
      images: [
        "/img/harddisk-37346 1.png"
      ],
    },
  ]
  return (
    <section className='key-features-holo container'>
      <Heading text={'Key Features'} />
      <div className='key-features-holo__main'>
        {
          features.map(feature => (
            <div key={feature.key} className='key-features-holo__card'>
              <figure className='key-features-holo__icon'>
                <img src={feature.icon} alt={feature.icon} />
              </figure>
              <Header text={feature.header} />
              <Description>
                <p>
                  {feature.desc}
                </p>
              </Description>
              <div className='key-features-holo__images'>
                {
                  feature.images.map((image,idx) => (
                    <figure key={idx}>
                      <img src={image} alt={image} />
                    </figure>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default KeyFeaturesHolo