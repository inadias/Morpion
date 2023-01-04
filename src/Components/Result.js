


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Result({props,winner,score,lionLogo}) {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                className="modal"

                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='d-grid col-2 ms-auto' ><h3>Winner</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-grid col-3 mx-auto'>{winner}</Modal.Body>

                <Modal.Footer>
                    <Button  variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Result
//TODO conter les parties avec les scores et me nombre de partie
// TODO faire le readme
//TODO  faire reinit la partie une fois me modal fermer
