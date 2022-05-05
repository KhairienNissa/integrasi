import React, {useEffect} from 'react';
import '../../component/style.css';
import NavbarUser from '../../component/NavbarUser';
import { useNavigate, useParams } from 'react-router-dom';
import { Detail } from '../../DataDummy/DetailProduct';
import { useQuery, useMutation } from 'react-query';
import convertRupiah from 'rupiah-format';
import { API } from '../../Config/api';

const DetailPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();

    let { data: product, refetch } = useQuery('productCache', async () => {
       const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
        const response = await API.get('/product/' + id);
        return response.data.data;
      });

      useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
         const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = "SB-Mid-client-YFY4KOLjGFVPvIVW";
    
        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    
        document.body.appendChild(scriptTag);
        return () => {
          document.body.removeChild(scriptTag);
        };
      }, []);
    
  const handleBuy = useMutation(async () => {
    try {
  
      const config = {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body,
      };

      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      const body = JSON.stringify(data);

      const response = await API.post('/transaction', config);
      console.log(response);
      const token = response.payment.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profil");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profil");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
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
                            <button className="buttonBuy" onClick={() => handleBuy.mutate()}>Buy</button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
    )
}

export default DetailPage;