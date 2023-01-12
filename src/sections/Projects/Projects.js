import './projects.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from '../../components/Header/Header';
import { TextWithIcon } from '../../components/Text With Icon/TextWithIcon';
import Heading from '../../components/Heading/Heading';

const Projects = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendDots: dots => (
      <div
        style={{
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )
  }

  const projects = [
    {
      key: 1,
      img: "/img/car1.png",
      header: 'Energy Building Tower',
      location: "Jakarta, Indonesia",
      type: "Building",
      desc: "Medco Foundation -  3 unit Thermal Camera"
    },
    {
      key: 2,
      img: "/img/car2.png",
      header: 'Masjid Al-Istiqomah',
      location: "Jakarta, Indonesia",
      type: "Public Area",
      desc: "Masjid Al-Istiqomah -  1 Unit Thermal Camera"
    },
    {
      key: 3,
      img: "/img/car3.png",
      header: 'BNPB Tower',
      location: "Jakarta, Indonesia",
      type: "Building",
      desc: "BNPB - 1 Unit Thermal Camera"
    },
    {
      key: 4,
      img: "/img/car4.png",
      header: 'BPOM Pusat Percetakan Negara',
      location: "Jakarta, Indonesia",
      type: "Building",
      desc: "BPOM Pusat  - 1 Unit Thermal Camera"
    },
    {
      key: 5,
      img: "/img/car5.png",
      header: 'Kementrian Keuangan Indonesia',
      location: "Jakarta, Indonesia",
      type: "Building",
      desc: "Gedung Frans Seda  - 1 Unit Thermal Camera"
    },
    {
      key: 6,
      img: "/img/car6.png",
      header: 'Bakrie Tower',
      location: "Jakarta, Indonesia",
      type: "Building",
      desc: "Bakrie Tower Floor  - 2 Unit Thermal Camera"
    },
    {
      key: 7,
      img: "/img/car7.png",
      header: 'Nirwan Bakrie Project',
      location: "Jakarta, Indonesia",
      type: "Building",
      desc: "Resident - 1 Unit Thermal Camera"
    },
  ]

  return (
    <section className='projects container'>
      <Heading text={'Successful Project'} />
      <div className='projects__carrousel'>
        <Slider {...settings}>
          {
            projects.map(project => (
              <div key={project.key}>
                <div className='projects__section'>
                  <div className='projects__img'>
                    <img src={project.img} alt='img' />
                  </div>
                  <div className='projects__main'>
                    <Header text={project.header} />
                    <div className='projects__location'>
                      <div className='projects__city'>
                        <TextWithIcon img='/img/loc.png' text={project.location} />
                      </div>
                      <div className='projects__type'>
                        <TextWithIcon img='/img/buil.png' text={project.type} />
                      </div>
                    </div>
                    <p className='projects__desc'>
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </section>
  )
}

export default Projects