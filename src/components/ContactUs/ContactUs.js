import { useState } from 'react'
import Button from '../Button/Button'
import './contactUs.scss'
import axios from 'axios'

const ContactUs = () => {
  const [input, setInput] = useState(
    {
      fullname: "",
      company: "",
      email: "",
      comment: ""
    }
  )

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true)
    
    const data = {
      from: input.email,
      subject: `Contact Us From ${input.fullname}`,
      body: input.comment,
      name: input.fullname,
      company: input.company
    };
    axios.post('https://mail.holovisionstore.com/contact-us', data)
    .then(response => {
        setLoading(false)
        console.log(response.data)
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <form className='contact-us' onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} name='fullname' placeholder='Name' value={input.fullname} />
      <input type='text' onChange={handleChange} name='company' placeholder='Company Name' value={input.company} />
      <input type='email' onChange={handleChange} name='email' placeholder='Email Address' value={input.email} />
      <textarea onChange={handleChange} name='comment' placeholder='Comment' value={input.comment} />

      <Button label='Submit' isLoading={loading} />
    </form>
  )
}

export default ContactUs