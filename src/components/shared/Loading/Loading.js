import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Chargement...</span>
    </Spinner>
  );
};

Loading.propTypes = {
  //
};

export default Loading;
