import { useRef } from 'react';
import Button from '../../components/Button/Button'
import './compro.scss'

const Compro = () => {
  const downloadRef = useRef();

  const handleClick = () => {
    downloadRef.current.click();
  }

  return (
    <section className='compro container'>
      <div className='compro__main'>
        <div className='compro__compro'>
          <h1>Trusted Security And Surveillance Solution</h1>
          <Button label={'Download Compro'} on_click={handleClick} />
          <a
            ref={downloadRef}
            href="/pdf/Holovision Company Profile.pdf"
            download="Holovision Company Profile"
            style={{ display: 'none' }}
          >
            Download
          </a>
        </div>
        {/* <div className='home__image'>
          <img src='/img/home.png' />
        </div> */}
      </div>
    </section>
  )
}

export default Compro