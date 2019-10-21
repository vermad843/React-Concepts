import React from 'react';

function ContactCard(props) {
    return (
        <div className = "contact-card">
           <img  src = {props.imageUrl}/>
           <h3>{props.name}</h3> 
           <p>phone : {props.phone}</p>
           <p>Email : {props.email}</p>
        </div>
    )
}

export default ContactCard;
