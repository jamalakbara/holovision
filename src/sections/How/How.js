import Description from "../../components/Description/Description"
import Header from "../../components/Header/Header"
import Title from "../../components/Title/Title"

import './how.scss'

const How = () => {
  const contents = [
    {
      key: 1,
      header: "Connect",
      desc: "Build CCTV surveillance system that cover critical areas and integrate video data between such area to visualize the underlying security status."
    },
    {
      key: 2,
      header: "Collect",
      desc: "Implement AI Capabilities and applications on top of security resources to promote the intelligent transformation of a video system, turning video into IoT data."
    },
    {
      key: 3,
      header: "Comprehend",
      desc: "Data generated in the intelligent video  system with data from information networks  according to practical business needs, then provide valude-added services and  applications. "
    },
  ]

  return (
    <section className="how container">
      <div className="how__heading">
        <div className="how__title">
          <Title>
            <h1 className="how__h1">
              How does <b>3C</b> Work?
            </h1>
          </Title>
        </div>
      </div>
      <div className="how__contents">
        {
          contents.map(content => (
            <div key={content.key} className="how__content">
              <div className="how__content-title">
                <div className="how__content-number">
                  {content.key}
                </div>
                <Header text={content.header} />
              </div>
              <Description>
                <p>
                  {content.desc}
                </p>
              </Description>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default How