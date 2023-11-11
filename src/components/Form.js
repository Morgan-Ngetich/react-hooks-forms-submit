import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]); //Updating the form on the DOM
  const [errors, setErrors] = useState([]);
  

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    //First name reqiured
    if (firstName.length > 0 ) {
      const formData = {firstName: firstName, lastName: lastName };//Putting together the current form data into an object using the value stored in state
      const dataArray = [...submittedData, formData] 
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
    } else {
      setErrors(["First name is required!"])
    }   
  }

  const listofSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
   
    // props.sendFormDataSomewhere(formData); //handles sending our data off to a server. Can asle o be passed down as a prop
    // setFirstName(""); //Clear the input fields once the data has been submited, since we are using controlled inputs
    // setLastName("");
  

// in an uncontrolled form, you need to access the input fields from the DOM
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = {
  //     firstName: e.target[0].value,
  //     lastName: e.target[1].value,
  //   };
  //   props.sendFormDataSomewhere(formData);
  // }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>

    {/* Display an error message. Ternary expression  */}
    {/* checks whether the "errors" array has elements or its empty.If errors are present, it executes the code below otehrwise it renders teh "null" */}
    {errors.length > 0 ?
    // Iterate through each errors in errors array and for each it creates <p>{erros}</p>
      errors.map((error, index) => (
        // key={index} assigns a unique identifier
        <p key={index} style={{ color: "red" }}> {error} </p>
      )) : 
      null
    }
    
    <h3>Submissions</h3>
    {listofSubmissions}
    </div>
    
  );
}

export default Form;
