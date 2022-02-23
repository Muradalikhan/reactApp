import { useState } from "react";
import {shirt} from './Enum'
import { IPersonProps } from "./Interfaces";




export const Person=({name,age,email}: IPersonProps)=>{
    const [country,setCountry]=useState<string>("")

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>

      <input type='text' onChange={(e)=>{setCountry(e.target.value)}} />

    <h1> {country}</h1>

    <h3>{shirt.tshirt}</h3>
    </div>
  );
}
