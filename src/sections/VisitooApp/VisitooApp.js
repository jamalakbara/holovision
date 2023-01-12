import './visitoo-app.scss'
import Header from '../../components/Header/Header'
import Heading from '../../components/Heading/Heading'

const VisitooApp = () => {
  const apps = [
    {
      key: 1,
      header: "Attendance System",
      img: [
        "/img/attendance system 1.png",
        "/img/attendance system 2.png",
      ]
    },
    {
      key: 2,
      header: "Sistem Manajemen Pengunjung (Visitor Management System)",
      img: [
        "/img/vms1.png",
        "/img/vms2.png",
        "/img/vms3.png",
      ]
    },
  ]
  return (
    <section className='visitoo-app container'>
      <Heading text={"Visitoo's Application"} />
      <div className='visitoo-app__contents'>
        {
          apps.map(app => (
            <div className='visitoo-app__content'>
              <Header text={app.header} />
              {
                app.img.map(imej => (
                  <div className='visitoo-app__img'>
                    <img src={imej} alt='imej' />
                  </div>
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default VisitooApp