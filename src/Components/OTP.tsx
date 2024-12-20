import { useEffect, useState } from 'react';
import '../Styles/OTP.css'
import Logo from "./Logo"
import OtpInput from 'react-otp-input';
import {IProps, withRouter} from '../Utils/withRouter';
import { Forms } from '../Utils/Types';
function ForgotPassword({navigate}:IProps) {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(10); // Timer in seconds
  const [canResend, setCanResend] = useState(false);
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);
  const handleResend = () => {
    if (canResend) {
      console.log('Resending OTP...');
      setTimer(60);
      setCanResend(false);
    }
  };
  const isFormComplete=()=>{
    if(otp){
      return true
    }
    else{
      return false
    }
  }
  const handleSubmit=(e:Forms)=>{
    e.preventDefault()
  navigate('/reset-password')
  }
  return (

    <div className="container-fluid ">
      <Logo />
      <div className="row text-center text-white mt-5">
        <h3>ADMIN PANEL</h3>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <div>
            <h4 className="text-center mt-5">Forgot Password</h4>

            <p className="text-center text-white mt-3">We've sent an activation code to<br /> your email Sourav@gmail.com</p>

            <form>
              <div className="d-flex justify-content-center align-items-center">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => (
                    <input
                      {...props}
                      style={{
                        width: '50px', // Set desired width
                        height: '50px', // Set desired height
                        fontSize: '20px', // Set font size for better visibility
                        textAlign: 'center', // Center text
                        border: '1px solid #ccc', // Border style
                        borderRadius: '5px', // Rounded corners
                        margin: '0 5px', // Space between inputs
                      }}
                    />
                  )}
                />
              </div>

              <div className="resendotp">
                <p className="text-center text-white mt-2">
                  {canResend ? (
                    <a href="#" onClick={handleResend}>
                      Send code again
                    </a>
                  ) : (
                    <>
                      Send code again in: <span>{`0:${timer.toString().padStart(2, '0')}`}</span>
                    </>
                  )}
                </p>
              </div>

              <div className="text-center mt-3">
                <button type="submit" className={!isFormComplete()?"btn btn-secondary":"btn btn-primary"} disabled={!isFormComplete()} onClick={handleSubmit}>Submit</button>
              </div>

            </form>
          </div>


        </div>

      </div>

    </div>

  )
}
export default withRouter(ForgotPassword)