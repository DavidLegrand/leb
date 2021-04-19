import React from "react";
import PropTypes from "prop-types";
import H1 from "components/shared/H1";

const NotFound = () => {
  return (<>
    <H1>Page introuvable</H1>
    <p className='text-center'>Erreur 404 : La page demandée n'existe pas</p>
  </>);
};

NotFound.propTypes = {
  //
};

export default NotFound;
