import Navback from "../../components/Navback/Navback"
import VisitooCard from "../../sections/VisitooCard/VisitooCard"
import AnotherFeatures from "../../sections/AnoterFeatures/AnotherFeatures"
import VisitooApp from "../../sections/VisitooApp/VisitooApp"
import VisitorManagement from "../../sections/VisitorManagement/VisitorManagement"
import WhyVisitoo from "../../sections/WhyVisitoo/WhyVisitoo"
import KeyFeaturesVisitoo from "../../sections/KeyFeaturesVisitoo/KeyFeaturesVisitoo"

const Visitoo = () => {
  return (
    <>
      <Navback />

      <VisitooCard />

      <KeyFeaturesVisitoo />

      <WhyVisitoo />

      <VisitorManagement />

      <AnotherFeatures />

      <VisitooApp />
    </>
  )
}

export default Visitoo