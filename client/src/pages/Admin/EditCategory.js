import React from 'react';
import '../../component/style.css';
import Navbar from '../../component/Navbar'

const EditCategory = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            
            <div>
            <div className="container-fluid" style={{ width: "1000px",padding : "20px 50px"}}>
            <form>
                <div className="m-5 text-white text-center">
                    <h2>Edit Category</h2>
                </div>

                <div className="m-5">
                    <input style={{backgroundColor: "rgb(131, 131, 131)",
                                           border: "2px solid white"}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="mouse"/>
                </div>
                <div className="m-5">
                    <button type="submit" className="buttonSave">save</button>
                </div>
            </form>
            </div>
            </div>
     </div>
    )
}

export default EditCategory;