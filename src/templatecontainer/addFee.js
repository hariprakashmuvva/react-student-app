import React, { useContext } from "react"
import { Modal, Button } from "react-bootstrap"
import axios from "axios"
import { personContext } from "../App";

function AddFee(props) {
    
    const isShow = true;
    const [addFeeRequest, setAddFeeRequest] = React.useState({ "personId": props.personId, "paidon": "", "amount": "" });
    const { setPersons } = useContext(personContext);

    const submitAndClose = () => {
        axios({
            method: 'post',
            url: 'http://192.168.17.103:5000/addfee',
            data: addFeeRequest
        }).then(function (response) {
            if(response != null)
                getPersons();
          });
        props.closePopup(false);
    }

    const getPersons = () => { 
        axios(`http://192.168.17.103:5000/students`, {
            method: 'GET'
        }).then(response => {
            setPersons(response.data);
        })
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddFeeRequest(values => ({...values, [name]: value}))
    }
    return (
        <>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={(event) => props.closePopup(false)}>
                    <Modal.Title>Add {props.personName} fee details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input className="form-control" type="text" placeholder="amount" name="amount" value={addFeeRequest.amount || ""} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                        <label htmlFor="paidon" className="form-label">Paid on Date</label>
                        <input className="form-control" type="date" placeholder="date" name="paidon" value={addFeeRequest.paidon || ""} onChange={handleChange} required/>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={submitAndClose}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddFee;