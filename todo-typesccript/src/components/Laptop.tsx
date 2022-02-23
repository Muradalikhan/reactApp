
import React from 'react';
import { ILaptop } from './Interfaces';


function Laptop({ brand, model, price, color }: ILaptop) {


    let user= {
        name: 'Ali',
        age: 21,
    }

    console.log(user)


    return (
        <table className='table'>
            <tr>
                <td >{brand}</td>
                <td>{model}</td>
                <td>{price}</td>
                <td>{color}</td>
            </tr>
            <tr>
                <td >{brand}</td>
                <td>{model}</td>
                <td>{price}</td>
                <td>{color}</td>
            </tr>
            <tr>
                <td >{brand}</td>
                <td>{model}</td>
                <td>{price}</td>
                <td>{color}</td>
            </tr>
            <tr>
                <td >{brand}</td>
                <td>{model}</td>
                <td>{price}</td>
                <td>{color}</td>
            </tr>
        </table>
    );
}



export default Laptop;
