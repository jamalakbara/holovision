import Navback from '../../components/Navback/Navback'
import HoloCard from '../../sections/HoloCard/HoloCard'
import Cameras from '../../sections/Cameras/Cameras'
// import HoloShow from '../../sections/HoloShows/HoloShow'
import KeyFeaturesHolo from '../../sections/KeyFeaturesHolo/KeyFeaturesHolo'
import LearnFromYou from '../../sections/LearnFromYou/LearnFromYou'
import PowerfulAI from '../../sections/PowerfulAI/PowerfulAI'
import StreamForYou from '../../sections/StreamForYou/StreamForYou'
import Header from '../../components/Header/Header'

const Holovision = () => {
  return (
    <>
      <Navback />

      <HoloCard />

      {/* <HoloShow /> */}

      {/* ini diganti */}
      <KeyFeaturesHolo />

      <PowerfulAI />
      
      <LearnFromYou />

      <StreamForYou />

      <Cameras />

      <section className='container'>
        <Header text={'Continuous Recording Captures Everything'} />
        <div style={{display: 'flex', gap: '20px', marginTop: '115px', justifyContent: 'center'}}>
          <figure>
              <img src='/img/songkweng.png' alt='monitor' />
          </figure>
        </div>
      </section>

      <section className='container'>
        <Header text={'Accurate Detection in Low Light, Harsh Weather, and Long Distances'} />
        <div style={{display: 'flex', gap: '20px', marginTop: '115px', justifyContent: 'center'}}>
          <figure>
            <img src='/img/Untitled-1 1.png' alt='Untitled-1 1.png' />
          </figure>
          <figure>
            <img src='/img/ttweta 1.png' alt='ttweta 1.png' />
          </figure>
        </div>
      </section>
    </>
  )
}

export default Holovision