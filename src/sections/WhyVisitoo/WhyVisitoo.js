import Heading from "../../components/Heading/Heading"
import './whyVisitoo.scss'

const WhyVisitoo = () => {
  const contents = [
    {
      key: 1,
      title: "Body Temperate Detection",
      traditional: "30 Sec",
      visitoo: "5 Sec Accuracy ± 0.3 °C "
    },
    {
      key: 2,
      title: "Validating visitor data",
      traditional: "5 Minutes",
      visitoo: "1 Minute"
    },
    {
      key: 2,
      title: "Recognize the faces of visitors and employees",
      traditional: "5 Minutes",
      visitoo: "5 Sec"
    },
    {
      key: 2,
      title: "Know the number of visitors and employees",
      traditional: "15 Minutes",
      visitoo: "5 Sec"
    },
    {
      key: 2,
      title: "Generate attendance reports for a certain period of time",
      traditional: "3-4 Days",
      visitoo: "1 Minute"
    },
  ]
  return (
    <section className='why-visitoo container'>
      <Heading text={'Why Visitoo'} />
      <div className="why-visitoo__content">
        <table className="why-visitoo__table why-visitoo__table-desc">
          <tr>
            <td width={'33%'}></td>
            <td width={'33%'}>
              <p>
                Traditional System
              </p>
            </td>
            <td width={'33%'}>
              <div className="why-visitoo__image">
                <img src="/img/visitoo.png" alt="visito-tab" />
              </div>
            </td>
          </tr>
        </table>
        <table className="why-visitoo__table">
          {
            contents.map(content => (
              <tr key={content.key}>
                <td width={'33%'}>
                  <p>
                    {content.title}
                  </p>
                </td>
                <td width={'33%'}>
                  <p>
                    {content.traditional}
                  </p>
                </td>
                <td width={'33%'}>
                  <b>
                    {content.visitoo}
                  </b>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </section>
  )
}

export default WhyVisitoo