import Navback from '../../components/Navback/Navback'
import HoloCard from '../../sections/HoloCard/HoloCard'
import Cameras from '../../sections/Cameras/Cameras'
import HoloShow from '../../sections/HoloShows/HoloShow'
import KeyFeaturesHolo from '../../sections/KeyFeaturesHolo/KeyFeaturesHolo'
import LearnFromYou from '../../sections/LearnFromYou/LearnFromYou'
import PowerfulAI from '../../sections/PowerfulAI/PowerfulAI'
import StreamForYou from '../../sections/StreamForYou/StreamForYou'

const Holovision = () => {
  return (
    <>
      <Navback />

      <HoloCard />

      <HoloShow />

      <KeyFeaturesHolo />

      <PowerfulAI />
      
      <LearnFromYou />

      <StreamForYou />

      <Cameras />
    </>
  )
}

export default Holovision