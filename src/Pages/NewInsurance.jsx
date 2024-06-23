import React from 'react'

const NewInsurance = () => {
  return (
    <>
      <div className="container">
        <h2>Registration page</h2>
        <form action="">
          <input type="name" name='name' placeholder='name' />
          <label htmlFor="">Full Name </label>
          <br />
          <input type="number" name='number' placeholder='name' />
          <label htmlFor="">number</label>
          <br />
          <input type="number" name='policy-number' placeholder='Enter your policy number' />
          <label htmlFor="">policy Number</label>
          <br />
          <input type="number" name='Ckyc' placeholder='Enter your Ckyc details' />
          <label htmlFor="">Ckyc</label>
      
        </form>

      </div>

    </>
  )
}

export default NewInsurance