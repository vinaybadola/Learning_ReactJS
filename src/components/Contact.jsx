import React from 'react'

const Contact = () => {
  return <div className='contact'>

  <main>
    <h1> Contact Us From Here</h1>
    <form >
        <div>
          <label>Name</label> 
          <input type="text"  required placeholder='ABC'/> 
        </div>


        <div>
          <label>Email</label> 
          <input type="email"  required placeholder='ABC@gmail.com'/> 
        </div>
         
         <div>
          <label>Mobile Number</label>
          <input type="number"  required placeholder ='+91 9876..'/>
         </div>

            
        
        <div>
          <label>Message</label> 
          <input type="text"  required placeholder='Write to us Here..'/> 
        </div>

        

   <button type='submit'>Send</button>

    </form>
  </main>
</div>
}

export default Contact