import React from 'react';
import '../../component/style.css';
import NavbarUser from '../../component/NavbarUser';
import caca from '../../Assets/images/caca.jpg'
import frame from '../../Assets/images/Frame.png'
import mouse from '../../Assets/images/mouse.png'

const Profil = () => {
    return (
        <div>
            <div>
                <NavbarUser/>
            </div>
            
            <div>
                <div className="container-fluid">

                    

                    <div className="row justify-content-center mt-4">
                       <div className="col-md-6">
                           <h3 className="text-danger fw-bolder">My Profil</h3>
                           <div className="row mt-2">
                                <div className="col">
                                    <div className="col-md-4" >
                                     <img variant="top" src={caca} style={{width: "300px",height: "400px"}} />
                                     </div>
                                </div>      
                                <div className="col-md text-white" style={{fontSize: "14px"}}>
                                        <div className="row">
                                            <p className="text-danger">Name</p>
                                            <p>Khairien</p>
                                        </div>
                                        <div className="row">
                                            <p className="text-danger">Email</p>
                                            <p>cacakhairien@gmail.com</p>
                                        </div>
                                        <div className="row">
                                            <p className="text-danger">Phone</p>
                                            <p>089651049130</p>
                                        </div>
                                        <div className="row">
                                            <p className="text-danger">Gender</p>
                                            <p>Female</p>
                                        </div>
                                        <div className="row">
                                            <p className="text-danger">Address</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                        </div>
                                       
                                </div>      
                           </div>
                       </div>

                       <div className="col-md-4  text-danger">
                           <div className="row">
                             <h4 className="text-danger fw-bolder">My Transaction</h4> 
                           </div>
                            <div className="row mt-2">
                                <div className="kotak">
                                    <div  className="row">
                                    <div  className="col-3 mt-3">
                                    <img src={mouse} width= "70px"/>
                                    </div>
                                    <div style={{fontSize: "9px"}} className="col mt-1 text-white">
                                        <div className="row">
                                            <h5 className="text-danger">mouse</h5>
                                            <p>Saturday, 14 Juli 2021</p>
                                            <p>Price : Rp.500.000</p>

                                        </div>
                                        <div className="row">
                                        <p>Sub Total : 500.000</p>
                                        </div>
                                    

                                    </div>
                                    <div  className="col-3 mt-4 ms-5">
                                         <img src={frame} width="70"/>
                                    </div>
                                    </div>
                                 </div>
                            </div>
                       </div>

                    </div>

                   
                </div>
            </div>
            
        
        </div>
    )
}

export default Profil;