import React from 'react';
import '../../component/style.css';
import NavbarUser from '../../component/NavbarUser';
import { useNavigate, useParams } from 'react-router-dom';
import { Detail } from '../../DataDummy/DetailProduct';
import { useQuery, useMutation } from 'react-query';
// import convertRupiah from 'rupiah-format';
import { API } from '../../Config/api';

const DetailPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    let { data: product } = useQuery('productCache', async () => {
        const response = await API.get('/product/' + id);
        return response.data.data;
      });
    
  const handleBuy = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      const body = JSON.stringify(data);

      await API.post('/transaction', body, config);

      navigate('/profil');
    } catch (error) {
      console.log(error);
    }
  });


    return (
        <div>
            <div>
                <NavbarUser/>
            </div>
            
            <div>
                <div className="container-fluid mt-4">

                    <div className="row justify-content-center">
                        <div className="col-md-4">
                        <img src={product?.image} style={{width: "370px",height: "470px", borderRadius: "5px"}} />
                        </div>
                        <div className="col-md-4" style={{fontSize: "12px"}}>
                        <div className="row" style={{fontSize: "12px"}}>
                                <h4 style={{color: "#F74D4D", fontWeight: "bold"}}>{product?.name}</h4>
                                <p style={{color: " #afafaf", fontSize: "11px"}}> stok: {product?.qty}</p>
                        </div>
                        {/* <div className="row mt-2 text-white">
                               
                                <p> - {Detail[index].spek1} </p>
                                <p> - {Detail[index].spek2}</p>
                                <p> - {Detail[index].spek3 }</p> 
                                <p> - {Detail[index].spek4}</p>  
                                <p> - {Detail[index].spek5}</p>
                        </div> */}
                        <div className="row mt-2 text-white" style={{textAlign: "justify"}}>
                                 <p> {product?.desc}</p>
                        </div>
                        <div className="d-flex flex-row-reverse bd-highlight text-danger">
                                 <p> {product?.price}</p>
                        </div>
                        <div className="row mt-3" >
                            <button className="buttonBuy" onClick={(e) => handleBuy.mutate(e)}>Buy</button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
    )
}

export default DetailPage;