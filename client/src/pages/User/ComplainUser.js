import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../component/style.css';
import NavbarUser from '../../component/NavbarUser';
import '../../component/style.css'
import Adminlogo from '../../Assets/images/5147268.jpg'
// import { Table } from 'react-bootstrap';
import Contact from '../../component/complain/Contact'
import Chat from '../../component/complain/Chat'


const Complain = () => {
//     return (
//        <div>
//            <div>
//            <NavbarUser/>
//            </div>

//          <div className=" container"  >
//             <div className='row'>
//                 <div className='col-4 d-flex' style= {{borderRight: "1px solid rgb(75, 75, 75)", height : "530px", paddingTop:"30px"}}>
//                     <img className='me-3 rounded-circle' src={Adminlogo} alt="admin" width={"55px"} height={"55px"}/>
//                     <div>
//                         <p className="mb-2 text-white" style={{fontSize : "15px"}}>Admin</p>
//                         <p className="text-secondary-2 text-white" style={{fontSize : "14 px"}}>Yes, Is there anything I can help</p>
//                     </div>
//                     <div className="ms-auto">
//                         <img src="image/caca1.jpg" alt="" className='d-flex justify-content-end' height={"800px"}/>
//                     </div>
//                 </div>



//                 <div className='col-8 d-flex flex-column justify-content-end' style={{height : "530px"}}>
//                     <div className='d-flex justify-content-end' >
//                         <p className="fw-500 p-3 text-white" style={{borderRadius: "5px", width: "max-content", backgroundColor:"#212121"}}>Hello Admin, I Need Your Help</p>
//                         <span className='mt-2' style={{width: "0", height: "0", borderTop: "18px solid transparent", borderLeft: "30px solid #212121", borderBottom: "18px solid transparent"}}></span>
//                     </div>
//                     <div className="d-flex ms-3">
//                         <img className="me-3 rounded-circle" src={Adminlogo} alt="" width={"55px"} height={"55px"}/>
//                         <div className='d-flex'>
//                             <span className='mt-2' style={{width: "0", height: "0", borderTop: "18px solid transparent", borderRight: "30px solid rgb(191, 194, 194)", borderBottom: "18px solid transparent"}}></span>
//                             <p className="fw-500 bg-card p-3" style={{borderRadius: "5px", width: "max-content", backgroundColor: "rgb(191, 194, 194)"}}>Yes, Is there anyting I can help ?</p>
//                         </div>  
//                     </div>

//                     <div className='d-flex ms-4 mt-4'>
//                         <input type="text" className="bg-input mb-4 fw-600 form-control p-3" id="formGroupExampleInput" placeholder="Send Message" style={{border: "none"}} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//        </div>
//     )
// }
const [contact, setContact] = useState(null)

const title = "Complain"
document.title = 'DumbMerch | ' + title

const dataContact = [
    {
        id: 1,
        name: 'Admin',
        chat: 'Yes, Is there anything I can help',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 2,
        name: 'Admin 2',
        chat: 'Hello World',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    }
]

return (
    <>
         <NavbarUser/>
        <Container fluid style={{height: '89.5vh'}}>
            <Row>
                <Col md={3} style={{height: '89.5vh'}} className="px-3 border-end border-dark overflow-auto">
                    <Contact dataContact={dataContact}  setContact={setContact} contact={contact} />
                </Col>
                <Col md={9} style={{maxHeight: '89.5vh'}} className="px-0">
                    <Chat contact={contact} />
                </Col>
            </Row>
        </Container>
    </>
)
}


export default Complain;

