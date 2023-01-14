import './sosmed.scss'

const Sosmed = () => {
  const meds = [
    {
      key: 1,
      label: "instagram",
      to: "https://www.instagram.com/holovisionstore/",
      icon: "/img/ig.png"
    },
    {
      key: 2,
      label: "youtube",
      to: "https://www.youtube.com/@holovisionstore",
      icon: "/img/yt.png"
    },
    {
      key: 3,
      label: "linkedin",
      to: "https://www.linkedin.com/company/holovision",
      icon: "/img/linkedin.png"
    },
  ]

  const handleClick = (to) => {
    window.location.href = to
  }

  return (
    <div className='sosmed'>
      {
        meds.map(med => (
          <button key={med.key} className='sosmed__item' onClick={() => handleClick(med.to)}>
            <img src={med.icon} alt='icon' />
          </button>
        ))
      }
    </div>
  )
}

export default Sosmed