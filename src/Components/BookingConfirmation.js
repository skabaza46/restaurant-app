
import { Fragment } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import classes from './BookingConfirmation.module.css';

const BookingConfirmation = (props) => {

    const {first_name, last_name, email, number_of_diners, reservation_date, reservation_time, occasion } = props.reservation;

    return (
        <Fragment>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Reservation Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <div>
                                <span className={classes.title}>Full Name: </span>
                                <span className={classes.information}>{`${first_name}, ${last_name}`}</span>
                            </div>

                            <div>
                                <span className={classes.title}>Date and Time: </span>
                                <span className={classes.information}>
                                 {`${reservation_date} @ ${reservation_time}`}
                                </span>

                            </div>

                            <div>
                                <span className={classes.title}> E-Mail: </span>
                                <span className={classes.information}>{email}</span>
                            </div>

                            <div>
                                <span className={classes.title}> Number of Diners: </span>
                                <span className={classes.information}>{number_of_diners}-Diners</span>
                            </div>
                            <div>
                                <span className={classes.title}> Occasion: </span>
                                <span className={classes.information}>{occasion}</span>
                            </div>
                        </Col>

                    </Row>

                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
                <button variant="primary" onClick={props.handleClose} className={classes.confirmationButton}>
                    Ok
                </button>
            </Modal>

        </Fragment>
    );
};

export default BookingConfirmation;