import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Conversations from 'components/Conversations'
import Contacts from 'components/Contacts'
import ConversationModal from 'components/Conversations/ConversationModal'
import ContactModal from 'components/Contacts/ContactModal'

const Sidebar = () => {
  const [tab, setTab] = useState("conversations")
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <>
      <Tab.Container activeKey={tab} onSelect={setTab} className="d-flex flex-column">
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="conversations">Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto d-flex flex-grow-1 h-100 " >

          {tab === "conversations" ?
            <Tab.Pane eventKey="conversations" className="d-flex flex-column flex-grow-1">
              <div className="flex-grow-1"><Conversations></Conversations></div>
              <Button className='rounded-0' onClick={() => setModalOpen(true)}>Nouvelle conversation</Button>
            </Tab.Pane>
            :
            <Tab.Pane eventKey="contacts" className="d-flex flex-column flex-grow-1">
              <div className="flex-grow-1"><Contacts></Contacts></div>
              <Button className='rounded-0' onClick={() => setModalOpen(true)}>Ajouter contact</Button>
            </Tab.Pane>
          }

        </Tab.Content>


      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {tab === "conversations" ?
          <ConversationModal closeModal={closeModal} /> :
          <ContactModal closeModal={closeModal} />}
      </Modal>


    </>
  );
};

Sidebar.propTypes = {
  //
};

export default Sidebar;
