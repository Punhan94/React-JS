import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = ({isSubmitted,setIsSubmitted}) => {


  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          {!isSubmitted ? (
            <img  
              src="https://lh3.googleusercontent.com/proxy/R5uvAHVslWI6Popptww1iiTS7jcR0VG-DahiFjLVFdIssKHIQKa5YZV6NEKEl7ggD6oFLGPFYCDS2PjQzlMivC79kFRefhWNkoKGHQ7yhNTwMRHPziD1FNfHIDvcV_a33ICr2GY" alt="" />) :
            (<img src="https://lh3.googleusercontent.com/proxy/XlBzpQJ8kG4CFUR2RnzYFlp_-BN17mZtfu4zMejIEW6YA3epDO2nu_E8J2x8CtZuig1VLXYo-22oHxQwDR0NlJWJsLO0IsEqgzeHA8f-CAoMVlKMHAKfMU8uA7XI" />)}
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess/> 
        )}
      </div>
    </>
  );
};

export default Form;
