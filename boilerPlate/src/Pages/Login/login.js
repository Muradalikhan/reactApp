import React, { useState } from 'react';
import Button from '../../Components/Button';
import MyInput from '../../Components/Input';

export default function LogIn() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const login = () => {
        console.log('login successful')

    }
    const SignUp = () => {
        console.log('SignUp successful')
        console.log(name)
        console.log(email)
    }


    return <div>
        <h1 className='p-2'>Login</h1>

        <MyInput value={name} placeholder='Name' onChange={e => setName(e.target.value)} />
        <MyInput value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <Button title='Login' className={`btn btn-primary m-2`} onClick={login} />
        <Button title='Signup' className={`btn btn-secondary m-2`} onClick={SignUp} />
    </div>;
}
