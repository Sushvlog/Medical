import React, { useState } from "react";
import { addUser } from "../app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Adduser()
{
     const dispatch= useDispatch();
     const navigate= useNavigate();

     const { isSuccess } = useSelector( (state)=> state.user);
    const[inputValue, setInputValue]= useState({name:'', email:'', password:''});
    
    const handleInput= (e)=>{
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    }
   
    const handleSubmit=(e)=>{
        
        e.preventDefault();
       
        dispatch(addUser(inputValue))
        // console.log(inputValue);

        setTimeout( ()=>{
            navigate("/userlist");
        },2000);

    }
   

    return(
        <>
             <div className="container ">
             <br></br> <br></br>
                <div className='title1 '><h2 >BOOK YOUR APPOINTMENT</h2></div>
                    <br></br>
                    {
                        isSuccess!==''&& <p className="text-primary" style={{ color: 'blue', textAlign:center }}>{ isSuccess.success} </p>
                     }
                      
              <div className="log-frm">

                    <form   className="log-div" onSubmit={ handleSubmit}>
                       
                        <div >
                            <lable >Name</lable>
                        
                                <input type="text" className="form-control" name="name" placeholder="Enter Username"  required value={inputValue.name} onChange={ handleInput}/>
                            </div>
                        

                        <div >
                            <lable>Email</lable>
                        
                                <input type="text" className="form-control" name="email" placeholder="Enter Email" required   value={inputValue.email} onChange={ handleInput}/>
                            </div>
                      

                        <div >
                            <lable>Password</lable>
                        
                                <input type="text" className="form-control" name="password" placeholder="Enter Password" required value={inputValue.password} onChange={ handleInput}/>
                            </div>
                     
                        

                        <div >
                            <lable ></lable>
                            {/* <div className="col-md-1"> */}
                               <button type="submit" className="btn btn-info bnt-lg">Submit</button> 
                                 </div>
                        {/* </div> */}
                    </form>

</div>

                    </div>
                
        </>
    );
}
export default Adduser;