import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { Register as ActionRegister } from "store/actions/user"

import H1 from "components/shared/H1";
import Input from "components/shared/Input";
import { Redirect, useHistory } from "react-router-dom";

const Register = ({ user, ActionRegister }) => {
  const history = useHistory()
  return (
    user.isAuth ?
      <Redirect to={'/'} /> :
      <>
        <H1>Inscription</H1>
        <Formik
          initialValues={{ login: '' }}
          onSubmit={(values, ...props) => {
            ActionRegister(values);
            history.push('/')
          }}
          validationSchema={
            Yup.object({
              login:
                Yup.string().min(4, '4 caractères minimum').required('Merci d\'entrer un login')
            })
          }
        >
          <Form>
            <Row>
              <Col className="col-12 my-2">
                <Input name='login' type="text" placeholder="Entrez votre login" />
              </Col>
              <Col className="col-12 my-2 d-flex justify-content-around">
                <Button type="submit">S'inscrire</Button>
              </Col>
            </Row>
          </Form>
        </Formik>
      </>
  );
};

Register.propTypes = {
  //
};

export default connect(
  (state) => ({ user: state.user }),
  { ActionRegister }
)(Register)