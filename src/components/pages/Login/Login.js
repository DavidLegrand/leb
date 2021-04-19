import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { Login as ActionLogin } from 'store/actions/user'
import { useHistory, Redirect } from 'react-router-dom'

import H1 from "components/shared/H1";
import Input from "components/shared/Input";

const Login = ({ user, ActionLogin }) => {
  const history = useHistory()
  return (
    user.isAuth ?
      <Redirect to={'/'} /> :
      <>
        <H1>Login</H1>
        <Formik
          initialValues={{ login: '' }}
          onSubmit={(values, { setSubmitting }) => {
            if (user.id) ActionLogin(values)
            else history.push('/register')
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
                <Button type="submit">Se connecter</Button>
                <Button variant="secondary" onClick={() => { history.push('/register') }}>S'inscrire</Button>
              </Col>
            </Row>
          </Form>
        </Formik>
      </>
  );
};

Login.propTypes = {
  //
};

export default connect(
  (state) => ({ user: state.user }),
  { ActionLogin }
)(Login)