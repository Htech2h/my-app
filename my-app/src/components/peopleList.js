import React from "react";

function PeopleList(props){
    const arr = props.data;
    const listitems = arr.map((val,index) => <li key={index}>{val}</li>);

    return <ul>{listitems}</ul>

}

export default PeopleList;