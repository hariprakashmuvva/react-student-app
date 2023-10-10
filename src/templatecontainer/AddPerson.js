import { useState, useContext } from "react";
import PageHeader from "./pageHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { personContext } from "../App";

function AddPerson() {
    const navigate = useNavigate();
    const { setPersons } = useContext(personContext);

    const [personDetails, setPersonDetails] = useState({});

    const handleChange = (event) => {
        const Name = event.target.name;
        const Value = event.target.value;
        setPersonDetails(values => ({...values, [Name]: Value}))
     }

    const submitPerson = (event) => { 
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://192.168.17.103:5000/add',
            data: personDetails
        }).then(function (response) {
            getPersons();
            navigate('/home', { replace: true });
          });
        
    }

    const getPersons = () => { 
        axios(`http://192.168.17.103:5000/students`, {
            method: 'GET'
        }).then(response => {
            setPersons(response.data);
        })
    }

    return (
        <>
            <PageHeader headerLabel="Add Person" />
            <form onSubmit={submitPerson}>
                <div className="p-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input className="form-control" type="text" placeholder="Name" name="Name" value={ personDetails.Name || ""} onChange={handleChange}/>
                </div>
                <div className="p-3">
                        <label htmlFor="DateOfBirth" className="form-label">Date Of Birth</label>
                        <input className="form-control" type="date" placeholder="Date of Birth" name="DateOfBirth"   value={ personDetails.DateOfBirth || ""} onChange={handleChange}/>
                </div>
                <div className="p-3">
                        <label htmlFor="DateOfJoin" className="form-label">Date Of Join</label>
                        <input className="form-control" type="date" placeholder="Date of Join" name="DateOfJoin"   value={ personDetails.DateOfJoin || ""} onChange={handleChange}/>
                </div>
                <div className="p-3">
                        <label htmlFor="Phone" className="form-label">Phone Number</label>
                        <input className="form-control" type="tel" placeholder="Phone Number" name="Phone"   value={ personDetails.Phone || ""} onChange={handleChange}/>
                </div>
                <div className="p-3">
                        <label htmlFor="Email" className="form-label">E-Mail</label>
                        <input className="form-control" type="email" placeholder="Email" name="Email"  value={ personDetails.Email || ""} onChange={handleChange}/>
                </div>
                <div className="p-3">
                        <label htmlFor="Address" className="form-label">Address</label>
                        <input className="form-control" type="text" placeholder="Address" name="Address"  value={ personDetails.Address || ""} onChange={handleChange}/>
                </div>
                <p className="p-3"><input type = "submit" value="Submit" className="btn btn-info"/></p>
            </form>
        </>
    );
}

export default AddPerson;