// import React from 'react';
// import { useState, useEffect } from "react";

// function ContactUs() {

//     const data = { name: "", email: "", password: "" };
//     const [inputData, setInputData] = useState(data);
//     const [flag, setFlag] = useState(false);

//     useEffect(() => {
//         console.log("Registerd");
//     }, [flag]);

//     function handleData(e) {
//         setInputData({ ...inputData, [e.target.name]: e.target.value });
//         console.log(inputData);
//     }
//     function handleSumbits(event) {
//         event.preventDefault();
//         if (!inputData.name || !inputData.email || !inputData.password) {
//             alert("All Fields are Mandatory");
//         }
        
      

//         else {
//             setFlag(true);
//         }
//     }
//     return (
//         <>
//             <main class="container">
//                 {/* <div className="log-img ">
//                     <img src="./pho/bg.png" alt="image" />
//                 </div> */}
//                 <br></br>
//                 <div className='title'><h2 >BOOK YOUR APPOINTMENT</h2></div>

//                 <div className="log-frm">
//                     <pre>{(flag) ? <h6 className='ui-define'>Hello {inputData.name}<hr />You've Registered Succesfully</h6> : ""}</pre>

//                     <form className="log-div" onSubmit={handleSumbits}>

//                     {/* <div><h2 >BOOK YOUR APPOINTMENT</h2></div> */}

//                         <div>
//                             <label>Name:</label>
//                             <input type="text" placeholder="enter your Name" name="name" value={inputData.name} onChange={handleData} />
//                         </div>

//                         <div>
//                             <label>Email   :</label>
//                             <input type="text" placeholder="enter your Email" name="email" value={inputData.email} onChange={handleData} />
//                         </div>

//                         <div>
//                             <label>Passw:</label>
//                             <input type="text" placeholder="enter your Password" name="password" value={inputData.password} onChange={handleData} />
//                         </div>

//                         <div><button type="submit" className="btn btn-info bnt-lg">Submit </button></div>
//                     </form>
//                 </div>


//             </main>



//         </>
//     );
// }
// ;
// export default ContactUs;
