import { 
    Button,
    FormGroup,
    Label, 
    Modal, 
    ModalHeader, 
    ModalBody, 
} from 'reactstrap'
import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types'
import '../main.scss'

export const EmailModal = ({ isOpen, toggle }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values, { setSubmitting }) => {
        
        console.log(values);
        setSubmitting(false);
        setModalOpen(false);
    }

    return (
        <div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Email Me
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            sender: '',
                            subject: '',
                            message: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <FormGroup>
                                    <Label for="sender">From:</Label>
                                    <Field
                                        type="text"
                                        name="sender"
                                        id="sender"
                                        className="form-control"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="subject">Subject:</Label>
                                    <Field
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="form-control"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">Message:</Label>
                                    <Field
                                        as="textarea"
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                    />
                                </FormGroup>
                                <Button type="submit" className="send-button" disabled={isSubmitting}>Send</Button>
                                <Button type="button" className="close-button" disabled={isSubmitting}>Send</Button>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </div>
    )
};

EmailModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};