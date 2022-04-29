import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import AlertDelete from './alert';


const Table = ({item}) => {
    const navigate = useNavigate()

    return (
                <tr>
            <th scope="row px-2">{item.id}</th>
            <td>{item.name}</td>
            <td>
                <div className="row">
                <div className="col mt-1">
                <button className='buttonEdit' onClick={() => navigate ('/edit-category')}>
                Edit </button></div>
                
                <div className="col mt-1">
                    <AlertDelete/>
                </div>
                </div> 
            </td>
            </tr>
    )
}
export default Table;




