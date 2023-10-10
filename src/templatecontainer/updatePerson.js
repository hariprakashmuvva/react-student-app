import React, { useContext } from "react"
import { Modal, Button } from "react-bootstrap"
import axios from "axios"
import { personContext } from "../App";
import Moment from 'moment';


function UpdatePerson(props) {
    const isShow = true;
    const [updatePersonRequest, setUpdatePersonRequest] = React.useState({ "id": props.person.Id, "Name": props.person.Name, "DateOfBirth": props.person.DateOfBirth, "DateOfJoin": props.person.DateOfJoin, "Phone": props.person.Phone, "Email": props.person.Email,"Address":props.person.Address,"EndDate":props.person.EndDate });
    const { setPersons } = useContext(personContext);
    
    const submitAndClose = () => {
        axios({
            method: 'put',
            url: 'http://192.168.17.103:5000/update/'+props.person.Id,
            data: updatePersonRequest
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
        setUpdatePersonRequest(values => ({...values, [name]: value}))
    }

    return (
        <Modal show={isShow}>
                <Modal.Header closeButton onClick={(event) => props.closePopup(false)}>
                    <Modal.Title>Update {updatePersonRequest.Name} details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="mb-3">
                    <label htmlFor="DateOfBirth" className="form-label">Date Of Birth</label>
                    <input className="form-control" type="date" placeholder="Date Of Birth" name="DateOfBirth" value={(new Date(updatePersonRequest.DateOfBirth)).toISOString().split('T')[0]} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input className="form-control" type="text" placeholder="Phone" name="Phone" value={updatePersonRequest.Phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input className="form-control" type="text" placeholder="Email" name="Email" value={updatePersonRequest.Email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Address" className="form-label">Address</label>
                    <input className="form-control" type="text" placeholder="Address" name="Address" value={updatePersonRequest.Address} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="DateOfJoin" className="form-label">Date Of Join</label>
                    <input className="form-control" type="date" placeholder="Date Of Join" name="DateOfJoin" value={(new Date(updatePersonRequest.DateOfJoin)).toISOString().split('T')[0]} onChange={handleChange} />
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={submitAndClose}>Submit</Button>
                </Modal.Footer>
        </Modal>
    )
}

export default UpdatePerson;