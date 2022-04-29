import React, {useState} from 'react';
import '../component/style.css';
// import NavbarUser from '../component/NavbarUser';
// import Navbar from '../component/Navbar';
// import { Card, ListGroup,ListGroupItem} from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { data } from '../DataDummy/DataProduct';
import CardProduct from '../component/Card';
import { Detail } from '../DataDummy/DetailProduct';
import DataAdmin from '../component/dataAdmin'
import { useQuery } from 'react-query';
import { API } from '../Config/api';

  

const ProductShop = () => {
    const [search, setSearch] = useState('')

    const DataSearch = Detail.filter(item => item.name.toLowerCase().includes(search));
    
    let { data: products } = useQuery('productsCache', async () => {
    const response = await API.get('/products');
    return response.data.data;
  });


    return ( 
            <div>
     <DataAdmin search={search} setSearch={setSearch}/>

        <div className="container-fluid">
        
                <div className="row mt-5 ms-5 text-danger">
                    <h2 className="fw-bold">Product</h2>
                </div>
                <div className="row ms-4">
                
                {products?.map((item, index) => {
             return <CardProduct item={item} key={index}/>
         })} 
         
        </div>
     </div></div>
    )
}

export default ProductShop; 

