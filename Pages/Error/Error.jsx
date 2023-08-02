import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Nav from '../../components/Header/Nav'
import Sidebar from '../../components/Header/Sidebar'
function Error() {
  return (
    <div>
        <div className="dashboard_header">
        <Nav PageTitle={"Patient Management 🔥"}/>
      </div>
      <div className="dashboard_sidebar">
        <Sidebar />
      </div>
      <Container className="patient_management_container">

        <Row>
          <Col><h1>Page Not Found Error! 404</h1></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Error