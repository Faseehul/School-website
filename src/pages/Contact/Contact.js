import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div class="container7">
         <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">India</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div>


        </header>
    
    </div>
  )
}

export default Contact
