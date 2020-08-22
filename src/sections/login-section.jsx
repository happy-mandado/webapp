import React from 'react';

import './login-section.css'

const Login = ({ loginURL }) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '2em', marginTop: '-10%' }}>
        <div style={{ width: '100px' }}>
          <img src='/esice_logo.png' style={{ float: 'right' }}/>
        </div>
        <hr style={{ height: '40%', minHeight: '100px', margin: '0 2em 0 2em', borderLeft: '1px solid #a9a3a3' }} />
        <div style={{ width: '100px' }}>
          <span style={{ font: '1.4em Abel' }}>
            Dashboard
          </span>
        </div>
      </div>

      <div>
        <button
          className='ui button'
          onClick={ () => { window.location.href = loginURL; }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
