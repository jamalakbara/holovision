import './text_with_icon.scss'
import Description from '../Description/Description'

export const TextWithIcon = ({img, text}) => {
  return (
    <div className='text-with-icon'>
      <img src={img} alt='text-with-icon' />
      <Description>
        <p>
          {text}
        </p>
      </Description>
    </div>
  )
}
