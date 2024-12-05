import { useState } from "react";
import AddPersonForm from "./addPerson";
import PeopleList from "./peopleList";

function ContactManager(props){
    const [contacts, setcontacts] = useState(props.data);

    function addPerson(name){
        setcontacts([...contacts,name]);
    }

    return (
        <div>
            <AddPersonForm handleSubmit={addPerson}/>
            <PeopleList data={contacts} />
        </div>
    );
}

export default ContactManager;