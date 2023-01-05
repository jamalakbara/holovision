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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
      img: "/img/car1.png",
      header: 'Energy Building Tower',
      location: "Jakarta, Indonesia",
      type: "Building",
      desc: "Medco Foundation -  3 unit Thermal Camera"
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