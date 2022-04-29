import React from 'react';
import '../../component/style.css';
import Navbar from '../../component/Navbar';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            
        <div className="container-fluid" style={{width: "1000px",padding : "0px 50px"}}>
            <form>
                <div className="m-4 text-white text-center">
                    <h2>Edit Product</h2>
                </div>

                <div className="row">
                    <div className="col-1 mx-5">
                        <button className="buttonMerah"> <input type="file" id="image" name="image" hidden /> upload image</button>
                    </div>
                    <div className="col ms-5 text-white">
                       <p>mouse.jpg</p>
                    </div>


                </div>


                <div className="row mx-5 mt-3">
                    <input style={{backgroundColor: "rgb(131, 131, 131)",
                                           border: "2px solid white"}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div className="row mx-5 mt-3">
                    <input style={{backgroundColor: "rgb(131, 131, 131)",
                                           border: "2px solid white"}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div className="row mx-5 mt-3" >
                    <input style={{backgroundColor: "rgb(131, 131, 131)",
                                           border: "2px solid white", paddingTop: "40px", paddingBottom : "40px"}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div className="row mx-5 mt-3">
                    <input style={{backgroundColor: "rgb(131, 131, 131)",
                        border: "2px solid white"}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="600"/>
                </div>
                <div className="row mx-5 mt-5 mb-4">
                    <button type="submit" className="buttonSave" onClick={() => ('/ListProduct')}>Save</button>
                </div>
            </form>
            </div>
            </div>
    )
}

export default EditProduct;