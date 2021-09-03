import React from 'react'
import "./form.css"

const Form = () => {
    return (
        <form className="form-container">
            <h2>Contact Us</h2>
            <div className="form-group">
                <div className="form-name">
                    <input type="text" placeholder="Name" name="name" />
                </div>
                <div className="form-number">
                    <input type="text" placeholder="Number" name="mobile_number" />
                </div> 
            </div>
            <div class="form-email">
                <input type="email" placeholder="Email" name="email" />  
            </div>
            <div className="form-message">
                <textarea rows="6" placeholder="Message" name="message" />
            </div>
            <div className="form-button">
                <button type="submit">SEND</button>
            </div>
        </form>
    )
}

export default Form
