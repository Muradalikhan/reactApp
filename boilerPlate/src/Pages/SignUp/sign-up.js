import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import MyInput from '../../Components/Input';



export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})

const navigation=useNavigate()
   
    const SignUp = () => {
        console.log('SignUp successful')
        let obj={
          name,
          email,
          password,

        }
        setUser(obj)
    }

    const goTologin=()=>{
      navigation('/login',{state:user})
    }

    return <div>
        <h1 className='p-2'>SignUp</h1>

        <MyInput value={name} placeholder='Name' onChange={e => setName(e.target.value)} />
        <MyInput value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <MyInput value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
        <Button title='Signup' className={`btn btn-primary m-2 p-2`} onClick={SignUp} />       
        <Button title='Login' className={`btn btn-primary m-2 p-2`} onClick={goTologin}  />
    </div>;
}
