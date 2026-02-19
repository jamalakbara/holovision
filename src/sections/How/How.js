import Description from "../../components/Description/Description"
import Header from "../../components/Header/Header"
import Title from "../../components/Title/Title"

import './how.scss'

const How = () => {
  const contents = [
    {
      key: 1,
      header: "Connect",
      desc: "Deploy a comprehensive surveillance network covering critical areas, integrating video data to visualize security status."
    },
    {
      key: 2,
      header: "Collect",
      desc: "Transform video into IoT data by implementing AI capabilities, turning passive footage into actionable intelligence."
    },
    {
      key: 3,
      header: "Comprehend",
      desc: "Correlate video data with information networks to generate insights and value-added services according to business needs."
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
          contents.map((content, index) => (
            <div key={content.key} className="how__content" style={{ animationDelay: `${index * 0.2}s` }}>
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