import React from 'react';

import './login-section.css'

const Login = ({ loginURL }) => {
  return (
    <div className='login-wrapper'>
        <div className='logo'>
         <span>
            Happy Mandado
          </span>
        </div>

      <div className='actions'>
        <button
          className='ui button login-button'
          onClick={ () => { window.location.href = loginURL; }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
