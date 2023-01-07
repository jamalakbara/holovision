import './visitor-management.scss'
import Description from '../../components/Description/Description'
import Heading from '../../components/Heading/Heading'

const VisitorManagement = () => {
  return (
    <section className='visitor-management container'>
      <Heading text={'Visitor Management'} />
      <div className='visitor-management__main'>
        <div className='visitor-management__img'>
          <img src='/img/visitor.png' alt='visitor' />
        </div>
        <div className='visitor-management__desc'>
          <Description>
            <p>
            The VISITOO system helps capture data on every visitor through facial recognition technology and validated customer body temperature detection, which can be viewed through the dashboard.
            </p>
          </Description>
        </div>
      </div>
      <div className='visitor-management__flow'>
        <img src='/img/flow visitor.png' alt='flow' />
      </div>
    </section>
  )
}

export default VisitorManagement