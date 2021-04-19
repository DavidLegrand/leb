import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { ListGroup } from "react-bootstrap";
import { ConversationSelect } from 'store/actions/conversation'

const Conversations = ({ list, ConversationSelect }) => {
  return (
    <ListGroup variant="flush">
      {list.map((c) =>
        <ListGroup.Item
          key={c.id}
          action
          active={c.selected}
          onClick={() => ConversationSelect(c.id)}>
          {c.participants && c.participants.map(p => p.login).join(", ")}
        </ListGroup.Item>)}
    </ListGroup>
  )
};

Conversations.propTypes = {
  //
};

export default connect(
  (state) => ({ list: state.conversations.list }),
  { ConversationSelect }
)(Conversations);
