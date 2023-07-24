import { 
    Button,
    Form,
    FormGroup,
    Input,
    Label, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap'
import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types'
import '../main.scss'

export const EmailModal = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Email Me</ModalHeader>
            </Modal>
        </div>
    )
};

EmailModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};