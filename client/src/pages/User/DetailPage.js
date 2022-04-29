import React from 'react';
import '../../component/style.css';
import NavbarUser from '../../component/NavbarUser';
import { useNavigate, useParams } from 'react-router-dom';
import { Detail } from '../../DataDummy/DetailProduct';

const DetailPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const index = params.id
    return (
        <div>
            <div>
                <NavbarUser/>
            </div>
            
            <div>
                <div className="container-fluid mt-4">

                    <div className="row justify-content-center">
                        <div className="col-md-4">
                        <img src={Detail[index].image} style={{width: "370px",height: "470px", borderRadius: "5px"}} />
                        </div>
                        <div className="col-md-4" style={{fontSize: "12px"}}>
                        <div className="row" style={{fontSize: "12px"}}>
                                <h4 style={{color: "#F74D4D", fontWeight: "bold"}}>{Detail[index].name}</h4>
                                <p style={{color: " #afafaf", fontSize: "11px"}}> stok: {Detail[index].stok}</p>
                        </div>
                        <div className="row mt-2 text-white">
                               
                                <p> - {Detail[index].spek1} </p>
                                <p> - {Detail[index].spek2}</p>
                                <p> - {Detail[index].spek3 }</p> 
                                <p> - {Detail[index].spek4}</p>  
                                <p> - {Detail[index].spek5}</p>
                        </div>
                        <div className="row mt-2 text-white" style={{textAlign: "justify"}}>
                                 <p> {Detail[index].desc}</p>
                        </div>
                        <div className="d-flex flex-row-reverse bd-highlight text-danger">
                                 <p> {Detail[index].price}</p>
                        </div>
                        <div className="row mt-3" >
                            <button className="buttonBuy" onClick={() => navigate('/Profil')}>Buy</button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            
        
        </div>
    )
}

export default DetailPage;