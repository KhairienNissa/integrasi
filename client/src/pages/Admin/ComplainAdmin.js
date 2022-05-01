import React, { useState, useContext } from 'react'
import '../../component/style.css';
import Navbar from '../../component/Navbar';

import { Container, Row, Col } from 'react-bootstrap'
import Contact from '../../component/complain/Contact'
import Chat from '../../component/complain/Chat'
import dataContact from '../../DataDummy/contact'
import { UserContext } from '../../context/userContext'

// import { Table } from 'react-bootstrap';
import caca from '../../Assets/images/caca1.JPG'

const ComplainByAdmin = () => {
  
const [context] = useContext(UserContext);
  const [contact, setContact] = useState(null);

  const title = 'Complain admin';
  document.title = 'DumbMerch | ' + title;

  return (
    <>
         <Navbar/>
      <Container fluid style={{ height: '89.5vh'}} className="px-5">
        <Row>
          <Col
            md={3}
            style={{ height: '89.5vh' }}
            className="px-3 border-end border-dark overflow-auto"
          >
            <Contact
              dataContact={dataContact}
              setContact={setContact}
              contact={contact}
            />
          </Col>
          <Col md={8} style={{ maxHeight: '89.5vh' }} className="px-0">
            <Chat contact={contact} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ComplainByAdmin;