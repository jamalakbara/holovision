import { useState } from 'react'
import Button from '../Button/Button'
import './contactUs.scss'
const ContactUs = () => {
  const [input, setInput] = useState(
    {
      first: "",
      last: "",
      company: "",
      email: "",
      comment: ""
    }
  )

  return (
    <form className='contact-us'>
      <input type='text' name='firstName' placeholder='First Name' value={input.first} />
      <input type='text' name='lastName' placeholder='Last Name' value={input.last} />
      <input type='text' name='companyName' placeholder='Company Name' value={input.company} />
      <input type='email' name='emailAddress' placeholder='Email Address' value={input.email} />
      <textarea name='comment' placeholder='Comment' value={input.comment} />

      <Button label='Submit' />
    </form>
  )
}

export default ContactUs