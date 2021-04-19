import React from "react";
import PropTypes from "prop-types";
import { useField } from 'formik'
import { FormControl, FormLabel } from "react-bootstrap";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel> */}
      <FormControl
        className="text-input"
        name={props.id || props.name}
        id={props.id || props.name}
        isInvalid={meta.touched && meta.error}
        isValid={meta.touched && !meta.error}
        placeholder={props.placeholder || props.id || props.name}
        {...field}
        {...props} />
      {meta.touched && meta.error ?
        <FormControl.Feedback as="div" type="invalid" className="error">{meta.error}</FormControl.Feedback> : null}
    </>
  );
};


Input.propTypes = {
  //
};

export default Input;
