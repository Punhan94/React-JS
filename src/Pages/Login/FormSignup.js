import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          İndi qeydiyyatdan keç və sən də yeni bir blog paylaş
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>İstifadəçi adı</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='İstifadəçi adı daxil edin'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Emailinizi daxil edin'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Şifrə</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Şifrənizi daxil edin'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Şifrə təsdiqi</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Şifrənizi təsdiq edin'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Qeydiyyatdan keç
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
