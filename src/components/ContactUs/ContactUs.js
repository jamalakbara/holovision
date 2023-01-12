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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <form className='contact-us'>
      <input type='text' onChange={handleChange} name='first' placeholder='First Name' value={input.first} />
      <input type='text' onChange={handleChange} name='last' placeholder='Last Name' value={input.last} />
      <input type='text' onChange={handleChange} name='company' placeholder='Company Name' value={input.company} />
      <input type='email' onChange={handleChange} name='email' placeholder='Email Address' value={input.email} />
      <textarea onChange={handleChange} name='comment' placeholder='Comment' value={input.comment} />

      <Button label='Submit' />
    </form>
  )
}

export default ContactUs