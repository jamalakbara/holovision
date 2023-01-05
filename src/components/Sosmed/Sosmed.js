import './sosmed.scss'

const Sosmed = () => {
  const meds = [
    {
      key: 1,
      label: "instagram",
      to: "https://instagram.com",
      icon: "/img/ig.png"
    },
    {
      key: 2,
      label: "facebook",
      to: "https://facebook.com",
      icon: "/img/fb.png"
    },
    {
      key: 3,
      label: "youtube",
      to: "https://youtube.com",
      icon: "/img/yt.png"
    },
    {
      key: 4,
      label: "linkedin",
      to: "https://linkedin.com",
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