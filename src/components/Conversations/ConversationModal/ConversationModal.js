
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Modal, Row, Col, Button, FormGroup } from 'react-bootstrap'
import { ConversationNew } from 'store/actions/conversation'
import { connect } from 'react-redux'
import Checkbox from "components/shared/Checkbox";

const ConversationModal = ({ contacts, closeModal, ConversationNew }) => {
  const [participants, setParticipants] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (participants.length)
      ConversationNew({ participants, messages: [] })
    closeModal()
  }
  const handleChange = (id, login) => {
    console.log(participants)
    const remove = participants.find(p => p.id === id)
    if (remove) {
      const newParticipants = participants.filter(p => p.id === id)
      setParticipants(newParticipants)
    } else {
      setParticipants([...participants, { id, login }])
    }

  }
  return (
    <>
      <Modal.Header closeButton>Démarrer une nouvelle conversation</Modal.Header>
      <Modal.Body>
        {contacts.length ?
          (
            <Form onSubmit={handleSubmit}>
              <Row>
                {contacts.map((contact) => (
                  <Col className="col-12 my-2" key={contact.id}>
                    <Form.Group controlId={contact.id}>
                      <Form.Check
                        name={contact.login}
                        label={contact.login}
                        onChange={() => handleChange(contact.id, contact.login)}
                      />
                    </Form.Group>
                  </Col>
                ))}
                <Col className="col-12 my-2 d-flex justify-content-around">
                  <Button type="submit">Nouvelle Conversation</Button>
                </Col>
              </Row>
            </Form>) :
          <Col className="col-12 my-2">Pour commencer, ajoutez des contacts</Col>
        }
      </Modal.Body>
    </>
  );
};
ConversationModal.propTypes = {
  //
};

export default connect(
  (state) => ({ contacts: state.contacts.list }),
  { ConversationNew }

)(ConversationModal);

