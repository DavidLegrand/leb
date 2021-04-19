import React from "react";
import PropTypes from "prop-types";
import { useField } from 'formik'
import { FormCheck } from "react-bootstrap";

const Checkbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel> */}
      <FormCheck
        type='checkbox'
        name={props.id || props.name}
        id={props.id || props.name}
        label={label}
        {...field}
        {...props} />
    </>
  );
};


Checkbox.propTypes = {
  //
};

export default Checkbox;
