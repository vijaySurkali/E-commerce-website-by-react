import React from 'react'
const subTitle = "Save The Day"
const title = (
  <h3 className='title'>Join on Long Free WorkShop for <b>Advance <span>Mastering</span></b> on sale </h3>
)
const Desc = "Limited Time Offer! Hurry Up"

const Register = () => {
  return (
    <section className='register-section padding-tb pb-0'>
   <div className='container'>
   <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
    <div className='col'>
   <div className='section-header'>
    <span className='subtitle'>{subTitle}</span>
    {title}
    <p>{Desc}</p>
   </div>
    </div>
    <div className='col'>
    <div className='section-wrapper'>
      <h4>Regester Now!</h4>
      <form className='register-form'>
        <input type="text" name='name' placeholder='Username' className='reg-input' />
        <input type="email" name='email' placeholder='Mail' className='reg-input' />
        <input type="number" name='number' placeholder='Phone' className='reg-input' />
        <button type='submit' className='lab-btn'>
          Regester Now
        </button>
      </form>
    </div>
    </div>
   </div>
   </div>
    </section>
  )
}

export default Register
