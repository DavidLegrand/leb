import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "components/shared/Input";
import { Button, Form, InputGroup } from 'react-bootstrap'
import { ConversationMessage } from 'store/actions/conversation'
import { connect } from 'react-redux'
import { useSocket } from 'contexts/Socket'

const NewMessageForm = ({ user, ConversationMessage, conversation }) => {
  const [message, setMessage] = useState('')

  const socket = useSocket()
  const handleSubmit = e => {
    e.preventDefault()
    ConversationMessage({
      conversation,
      message: { date: new Date(), text: message, sender: { id: user.id, login: user.login } },
    })
    socket.emit('send', {
      conversation,
      message: { date: new Date(), text: message, sender: { id: user.id, login: user.login } }
    })
    setMessage('')
  }
  return <Form onSubmit={handleSubmit}>
    <Form.Group className="m-0">
      <InputGroup>
        <Form.Control
          required
          value={message}
          onChange={e => setMessage(e.target.value)}

        />
        <InputGroup.Append>
          <Button type="submit">Envoyer</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  </Form>;
};

NewMessageForm.propTypes = {
  //
};

export default connect(
  (state) => ({ user: state.user }),
  { ConversationMessage }
)(NewMessageForm);
