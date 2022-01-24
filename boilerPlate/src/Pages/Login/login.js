import React, { useState } from 'react';
import Button from '../../Components/Button';
import MyInput from '../../Components/Input';

export default function LogIn() {
    const [inputVal,setInputVal]=useState('')

    const login = () => {
        console.log('login successful')
        console.log(inputVal)
    }

    return <div>
        <h1>Login</h1>

        <MyInput value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} />
        <Button title='Login' className={`btn btn-primary`} onClick={login} />
    </div>;
}
