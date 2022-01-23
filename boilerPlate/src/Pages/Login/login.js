import React from 'react';
import Button from '../../Components/Button';

export default function LogIn() {

    const login=()=>{
        console.log('login successful')
    }

  return <div>
      <h1>Login</h1>

      <Button title='Login' className={`btn btn-primary`} onClick={login} />
  </div>;
}
