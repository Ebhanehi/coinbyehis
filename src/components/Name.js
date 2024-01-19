import React, {useState} from 'react'
function Name() {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
    
   
   const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Name",Name);
    console.log("Age",Age);
    console.log("Phonenumber",Phonenumber);
   };
   


    return(
        <div>
                            <h1>Contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                <label for="Name"> Your name: </label> 
               <input type="text"  placeholder="Name" required  name="Name" value={Name} onChange={(e)=>setName(e.target.value)}/>
               <br></br>
               <br></br>
               <label for="Age"> Your Age: </label>
               <input type="number" placeholder="Age" required  name="Age" value={Age} onChange={(e)=>setAge(e.target.value)}/>
               <br></br>
               <br></br>
               <label for="Phonenumber"> Your Phonenumber: </label> 
               <input type="number" placeholder="Phonenumber" required  name="Phonenumber" value={Phonenumber} onChange={(e)=>setPhonenumber (e.target.value)}/>
               <br></br>
               <br></br>
               <button type="submit">Submit</button>
</form>
        </div>
    );
};


export default Name