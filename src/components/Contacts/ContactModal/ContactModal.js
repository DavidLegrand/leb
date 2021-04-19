import React from "react";
import PropTypes from "prop-types";
import { Modal, Row, Col, Button } from 'react-bootstrap'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from 'components/shared/Input'
import { ContactAdd } from 'store/actions/contact'
import { connect } from 'react-redux'

const ContactModal = ({ closeModal, ContactAdd }) => {

  return (
    <>
      <Modal.Header closeButton>Ajouter un Contact</Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ login: '', id: '' }}
          onSubmit={(values) => { ContactAdd(values); closeModal() }}
          validationSchema={
            Yup.object({
              login: Yup.string().required('Merci d\'entrer un login'),
              id: Yup.string().required('Merci d\'entrer un id')
            })
          }
        >
          <Form>
            <Row>
              <Col className="col-12 my-2">
                <Input name='login' type="text" placeholder="Entrez le login du contact" />
              </Col>
              <Col className="col-12 my-2">
                <Input name='id' type="text" placeholder="Entrez l'id du contact" />
              </Col>
              <Col className="col-12 my-2 d-flex justify-content-around">
                <Button type="submit">Ajouter le contact</Button>
              </Col>
            </Row>
          </Form>
        </Formik>
      </Modal.Body>
    </>
  );
};
ContactModal.propTypes = {
  //
};

export default connect(
  null,
  { ContactAdd }

)(ContactModal);
