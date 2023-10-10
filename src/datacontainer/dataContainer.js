import Moment from 'moment';
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from 'react-bootstrap';
import FeeDetails from "./feeDetails";
import DisplayField from "./displayField";
import AddFee from '../templatecontainer/addFee';
import React, { useState } from 'react';
import UpdatePerson from '../templatecontainer/updatePerson';

function DataContainer(params) {
    
    const [modelshow, setModelshow] = useState(false);
    const [updatepersonmodelshow, setUpdatepersonmodelshow] = useState(false);
  
    const addFee = () => { 
        setModelshow(true);
    } 

    const updatePerson = () => {
        setUpdatepersonmodelshow(true);
    }

    const closePopup = (setValue) => {
        setModelshow(setValue);
        setUpdatepersonmodelshow(setValue);
    }

    

    return (
            <Accordion.Item eventKey={params.personData.Id}>
                <Accordion.Header>{params.personData.Name}</Accordion.Header>
                <Accordion.Body> 
                    <div className="align-middle pb-2">
                        <span className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-success btn-sm" onClick={updatePerson}><i className="bi bi-pen"></i> Edit Person</button>
                            <button type="button" className="btn btn-outline-success btn-sm" onClick={addFee}><i className="bi bi-currency-rupee"></i> Add Fee</button>
                        </span>
                    </div>
                <DisplayField LabelToDisplay="Date of Birth :" ValueToDisplay={Moment(params.personData.DateOfBirth).format('d MMM yyyy')} />
                {/* <DisplayField LabelToDisplay="Date of Birth test:" ValueToDisplay={Moment(params.personData.DateOfBirth, "YYYY-MM-DD")}/> */}
                    {/* <DisplayField LabelToDisplay="Date of Birth" ValueToDisplay={params.personData.DateOfBirth}/> */}
                    <DisplayField LabelToDisplay="Date of Join :" ValueToDisplay={Moment(params.personData.DateOfJoin).format('d MMM yyyy')}/>
                    <DisplayField LabelToDisplay="Phone # :" ValueToDisplay={params.personData.Phone} />
                    <DisplayField LabelToDisplay="Email :" ValueToDisplay={params.personData.Email}/>
                    <DisplayField LabelToDisplay="Address :" ValueToDisplay={params.personData.Address} />
                <FeeDetails PaymentHistory={params.personData.History} />
                </Accordion.Body>
            {modelshow && <AddFee closePopup={closePopup} personId={params.personData.Id} personName={params.personData.Name} />}
            {updatepersonmodelshow && <UpdatePerson closePopup={closePopup} person={params.personData}/>}
            </Accordion.Item>
      );
}

export default DataContainer;