import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "components/shared/Input";
import { Button, Form, InputGroup } from 'react-bootstrap'
import { ConversationMessage } from 'store/actions/conversation'
import { connect } from 'react-redux'
import { useSocket } from 'contexts/Socket'

const NewMessageForm = ({ user, ConversationMessage, conversation }) => {
  const [messageText, setMessageText] = useState('')

  const socket = useSocket()
  const handleSubmit = e => {
    e.preventDefault()
    const message = { date: new Date(), text: messageText, sender: { id: user.id, login: user.login } }
    ConversationMessage({ conversation, message })
    socket.emit('send', { conversation, message })
    setMessageText('')
  }
  return <Form onSubmit={handleSubmit}>
    <Form.Group className="m-0">
      <InputGroup>
        <Form.Control
          required
          value={messageText}
          onChange={e => setMessageText(e.target.value)}

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
