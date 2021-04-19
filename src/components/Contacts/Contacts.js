import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { ListGroup } from "react-bootstrap";
const Contacts = ({ list }) => {
  return (
    <ListGroup variant="flush">
      {list.map((c) => <ListGroup.Item key={c.id}>
        {c.login}
      </ListGroup.Item>)}
    </ListGroup>
  )
};

Contacts.propTypes = {
  //
};

export default connect(
  (state) => ({ list: state.contacts.list })
)(Contacts);
