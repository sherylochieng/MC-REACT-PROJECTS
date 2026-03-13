//on this code, add a username field, another password field for confirming password.
// Style you form the best way you can 

// THURSDAY 13TH MARCH 2026 ASSINGMENT PROJECT

import { useState } from "react";
import "./Form.css";

function SignPrevious() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("log in data", form);
  }

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up Form</h2>

        <input
          className="form-input"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <input
          className="form-input"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <input
          className="form-input"
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
        />

        <button className="form-button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default SignPrevious;


// import { useState } from "react";
// import "./Form.css";

// function SignPrevious(){

//     const [form,setForm]=useState({
//         email:'',
//         password:'',
//         username:''
//     })

//     function handleChange(e){
//         const {name,value}=e.target

//         setForm((prev) => ({...prev,[name]:value}))
//     }

//     function handleSubmit(e){
//         e.preventDefault()

//         console.log('log in data',form)
//     }

//     return(
//         <form onSubmit={handleSubmit} >Sign up Form


//         <input 
//         name="email"
//         type="email"
//         value={form.email}
//         onChange={handleChange}
//         placeholder="enter email"
//         />

//         <input 
//         name="password"
//         type="password"
//         value={form.password}
//         onChange={handleChange}
//         placeholder="enter password"
//         />

//             <input 
//         name="username"
//         type="text"
//         value={form.username}
//         onChange={handleChange}
//         placeholder="enter user name"
//         />

//         <button type="submit">SUBMIT</button>
//         </form>
//     )
   
// }
// export default SignPrevious
