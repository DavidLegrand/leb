import React from 'react'
import './App.css'
import { Container, Col, Row } from 'react-bootstrap'
import Router from 'components/Router'
import Header from 'components/Header'
import { SocketProvider } from 'contexts/Socket'
import { connect } from 'react-redux'

const App = ({ id }) => {

  return (<>
    <SocketProvider id={id}>
      <Header></Header>
      <Container className='align-items-center text-center justify-content-center d-flex' style={{ height: 'calc(100vh - 56px)' }}>
        <Row style={{ flex: '1' }} className='h-100'>
          <Col>
            <Router></Router>
          </Col>
        </Row>
      </Container>
    </SocketProvider>
  </>
  );
}



export default connect(
  state => ({ id: state.user.id })
)(App)