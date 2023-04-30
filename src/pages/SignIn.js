import React from 'react'
import './SingIn.css'

const SignIn = () => {
  return (
    <div className='SignIn'>
        <img src="./assets/Logo/sign-up.svg" alt="logo" className='sign-in-logo'/>
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
    </div>
  )
}

export default SignIn