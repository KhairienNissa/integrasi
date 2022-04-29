import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import AlertDelete from './alert';
// import { Table } from 'react-bootstrap';

const TableProd = ({item}) => {
    const navigate = useNavigate()
    return (
        <tr>
        <th scope="row">{item.id}</th>
        <td><img src= {item.image} width={"50px"}/></td>
        <td>{item.name}</td>
        <td>{item.desc.slice(0, 20) + '..'} </td>
        <td>{item.qty}</td>
        <td>{item.price}</td>
        <td>
            <div className="row">
            <div className="col"><button className='buttonEdit' onClick={()=> navigate('/edit-product')}>
            Edit </button></div>
             
            <div className="col">
                <AlertDelete/>
            </div>
            </div>

        </td>
        </tr>
    )
}
export default TableProd;




