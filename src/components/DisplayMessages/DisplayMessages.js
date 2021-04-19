import React, { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"

const DisplayMessages = ({ user, conversation }) => {


  const lastMessage = useCallback(node => {
    if (node)
      node.scrollIntoView({ smooth: true })
  }, [])
  return (


    <div className="my-2 flex-grow-1 overflow-auto flex-column align-items-end justify-content-end">
      {conversation.messages.map((m, i) => (

        <div
          ref={i === conversation.messages.length - 1 ? lastMessage : null}
          key={i}
          className={`my-1 d-flex flex-column ${m.sender.id === user.id ? 'align-self-end align-items-end' : 'align-self-start align-items-start'}`}>
          <div
            className={`rounded p-1 ${m.sender.id === user.id ? 'bg-primary text-white' : 'border'}`}>
            {m.text}
          </div>
          <div
            className={`text-muted small ${m.sender.id === user.id ? 'text-right' : ''}`}>
            {m.sender.id === user.id ? "Moi" : m.sender.login} {new Date(m.date).toLocaleString()}
          </div>
        </div>)
      )}
    </div>

  );
};

DisplayMessages.propTypes = {
  //
};

export default connect(
  (state) => ({ user: state.user })
)(DisplayMessages);
