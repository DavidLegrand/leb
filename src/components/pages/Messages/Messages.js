import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar";
import H1 from "components/shared/H1";
import { Row, Col } from "react-bootstrap";
import { connect } from 'react-redux'
import DisplayMessages from "components/DisplayMessages";
import NewMessageForm from "components/NewMessageForm";
import { useSocket } from "contexts/Socket";
import { ConversationNew, ConversationMessage } from 'store/actions/conversation'

const Messages = ({ conversations, selectedConversation, ConversationNew, ConversationMessage }) => {
  const socket = useSocket()

  useEffect(() => {
    if (socket == null) return
    socket.on('receive', ({ conversation, message }) => {
      console.log(conversation, conversations)
      if (!conversations.includes(conversation))
        ConversationNew({ ...conversation, messages: [message] })
      ConversationMessage({ conversation, message })
    })
    return () => socket.off('receive')
  }, [socket, ConversationNew, ConversationMessage, conversations])

  return <>
    <Row className='h-100'>
      <Col className='col-12 col-md-3 order-2 order-md-1 h-100 d-flex flex-column'>
        <Sidebar></Sidebar>
      </Col>
      <Col className='col-12 col-md-9 order-1 order-md-2 d-flex flex-column' style={{ maxHeight: 'calc(100vh - 56px)' }}>
        <H1>Messages</H1>
        {selectedConversation ?
          <div className='d-flex flex-column flex-grow-1 justify-content-end overflow-auto'>
            <DisplayMessages conversation={selectedConversation} />
            <NewMessageForm conversation={selectedConversation} />
          </div>
          : 'Veuillez choisir une conversation'}
      </Col>
    </Row>
  </>;
};

Messages.propTypes = {
  //
};

export default connect(
  (state) => ({
    selectedConversation: state.conversations.list.find(c => c.selected),
    conversations: state.conversations.list
  }),
  { ConversationNew, ConversationMessage }
)(Messages);
