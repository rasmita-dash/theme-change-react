import { useEffect, useRef, useState } from "react"

const OtpInput = (props) => {
    const [otp, setOtp] = useState(new Array(props.length).fill(""));
    const inputRefs = useRef([]);
    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[]);
  return (
    <div> 
        {
            otp.map((value,i)=>{
                return <input type="text" key={i} className="otp-input" ref={inputRefs[i]}
                value={value}/>
            })
        }
    </div>
  )
}

export default OtpInput