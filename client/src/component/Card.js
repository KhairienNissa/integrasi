import React from 'react';
// import { Table } from 'react-bootstrap';
import convertRupiah from 'rupiah-format';
import { NavLink } from 'react-router-dom';
import { Detail } from '../DataDummy/DetailProduct';
import { Card, ListGroup,ListGroupItem, } from 'react-bootstrap';

const CardProduct = ({item}) => {
   
 
    return (
                 <div className="col-md-2" style={{marginRight:"-10px"}}> 
                    <NavLink className="nav-link text-black" to={`/detail-page/`+ item.id}
                  exact >
                    <Card style={{ width: '200px', height: '250px', backgroundColor: "black" , color: "white", boxShadow: '0 4px 4px 0 grey'}}>
                <Card.Img variant="top" src={item.image} style={{height: '150px' }}/>
                <Card.Body className='pt-0'>
                <Card.Title style={{fontSize:"20px", fontWeight:"bolder"}}>{item.name}</Card.Title>
                <Card.Text style={{fontSize:"15px"}}>
                    {convertRupiah.convert(item.price)}
               <p style={{fontSize:"12px", marginTop:"10px", color:"white"}}>stok : {item.qty}</p> 
                </Card.Text>
                </Card.Body>
                </Card></NavLink>  
                    </div>
    //  "images/mouse.png" 
    )
}
export default CardProduct;