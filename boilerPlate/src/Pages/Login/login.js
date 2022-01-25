import React, { useEffect, useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
import Button from '../../Components/Button';
import MyInput from '../../Components/Input';

export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation=useNavigate()
    const location=useLocation()
  
    useEffect(()=>{
        if(location.state!=={})
        {
            setEmail(location.state.email)
            setPassword(location.state.password)
        }
    },[])

    const login = () => {
        console.log('login successful')

    }

    const goToSignUp = () => {
       navigation('/signup')
    }


    return <div>
        <h1 className='p-2'>Login</h1>

        
        <MyInput value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
        <MyInput value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} />
        <Button title='Login' className={`btn btn-primary m-2 p-2`} onClick={login}  />
        <Button title='Signup' className={`btn btn-primary m-2 p-2`} onClick={goToSignUp} />
    </div>;
}
