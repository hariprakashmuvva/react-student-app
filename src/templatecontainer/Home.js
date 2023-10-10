import {useContext } from "react";
import { Accordion } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import DataContainer from '../datacontainer/dataContainer';
import PageHeader from './pageHeader';
import { personContext } from "../App";


function Home() {
    const { persons } = useContext(personContext);
    return (
        <>
       
            <PageHeader headerLabel="Persons"/>
        
        <div className="row">
            <Accordion>{persons.map((person) =><DataContainer key={person.Id} personData={person}/>)}</Accordion>
        </div>
        </>
    );
}

export default Home;