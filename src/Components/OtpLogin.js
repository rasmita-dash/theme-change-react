import React, { useRef, useState } from 'react';
import OtpInput from './OtpInput';

const OtpLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [validationMsg, setValidationMsg] = useState(null);
    const [showOTP, setShowOTP] = useState(false);
    function handlePhoneSubmit(e){
        e.preventDefault();
        const isValidNum = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g.test(phoneNumber);
        if(!isValidNum){
            setShowOTP(false);
            setValidationMsg("Please enter a valid 10-digit Mobile number.")
        }else{
            setValidationMsg(`Enter the OTP sent on ${phoneNumber}`);
            setShowOTP(true);
            console.log(showOTP);
        }
    }
  return (
    <div>
        <h1>OtpLogin</h1>
        {!showOTP && <form onSubmit={(e) => {handlePhoneSubmit(e)}}>
              <input type="text" value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        placeholder='Enter 10 digit Mobile Number' />
              <button type='submit'>Send OTP</button>
            
        </form>}
        <label>{validationMsg}</label>

        {showOTP && <OtpInput length= {4}></OtpInput>}
    </div>
  )
}

export default OtpLogin