import Card from "../../components/Card/Card"
import Navback from "../../components/Navback/Navback"
import AnotherFeatures from "../AnoterFeatures/AnotherFeatures"
import KeyFeatures from "../KeyFeatures/KeyFeatures"
import VisitooApp from "../VisitooApp/VisitooApp"
import VisitorManagement from "../VisitorManagement/VisitorManagement"
import WhyVisitoo from "../WhyVisitoo/WhyVisitoo"

const Visitoo = () => {
  return (
    <>
      <Navback />

      <div className="visitoo container">
        <Card img={'/img/visitoo.png'} header={'Visitoo'} desc={'Quick check-in experience, store visitor information in database, manage and analyze visitor behavior on your own dashboard'} />
      </div>

      <KeyFeatures />

      <WhyVisitoo />

      <VisitorManagement />

      <AnotherFeatures />

      <VisitooApp />
    </>
  )
}

export default Visitoo