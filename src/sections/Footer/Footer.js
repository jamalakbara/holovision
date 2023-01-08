import ContactUs from '../../components/ContactUs/ContactUs'
import Heading from '../../components/Heading/Heading'
import Sosmed from '../../components/Sosmed/Sosmed'
import './footer.scss'

const Footer = () => {
  return (
    <section className='footer container'>
      <Sosmed />
      <div className='footer__form'>
        <div className='footer__contact'>
          <Heading text='Contact Us' />
          <ContactUs />
        </div>
      </div>
    </section>
  )
}

export default Footer