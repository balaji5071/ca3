// src/components/EventForm.jsx
import React from "react";


function EventForm() {
    const handleBut=()=>{
       alert("you got registered")
    }

    return (
        <>
        <div> <strong>  Register Form </strong></div>
        <div>
            
            <div>Name:- <input type="text" required placeholder="Enter your name" /></div>
            <div>Phone:- <input type="text" required  placeholder="Enter your number" /> </div>
            <div>Location:- <input type="location" required placeholder="Address" /></div>
            <div>Date:- <input type="date" /> </div>
            <button onClick={handleBut}>Submit</button>
        </div>
        </>
    );
}

export default EventForm;
