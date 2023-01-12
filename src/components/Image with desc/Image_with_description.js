import './image_with_description.scss'

const Image_with_description = ({src, desc}) => {
  return (
    <div className='image_with_desc'>
      <img src={src} alt={src.replace(".")} />
      <p>
        {desc}
      </p>
    </div>
  )
}

export default Image_with_description