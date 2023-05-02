import './Alerts.css'
import { Link } from "react-router-dom";

const design_text = {
    "textDecoration": "underline",
    "cursor":"pointer"
}


const Alerts = () => {
    return(
        <div className="main">
            <div className='Alert'>
                <div className='alert-logo-cross'>
                <img src="./assets/Logo/sign-up.svg" alt="logo" className='sign-in-logo'/><span>X</span>
                </div>
                <h4 className='heading'>Sign in to unlock the <br/> best of Tripadvisor.</h4>
                <div className='sign-in-content'>
                    <div className='sign-in-google'>
                        <img src="./assets/Logo/google.png" alt="google-logo"/>
                        <p>Continue with Google</p>
                    </div>
                    <div className='sign-in-email'>
                        <span class="material-symbols-outlined">mail</span>
                        <p>Continue with emial</p>
                    </div>
                </div>
                <div className="Terms-conditions">
                    <p>By proceeding, you agree to our <span style={design_text}>Terms of Use</span> and confirm you have read our <span style={design_text}>Privacy and Cookie Statement.</span></p>
                    <p style={{"textAlign":"left"}}>This site is protected by reCAPTCHA and the Google <span style={design_text}>Privacy Policy</span> and <span style={design_text}>Terms of Service apply.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Alerts