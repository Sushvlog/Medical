import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUsers } from "../app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdMoreHoriz, MdDeleteForever, MdCreate } from 'react-icons/md';
function Userlist(){

    const dispatch= useDispatch();   
     const users= useSelector( (state)=> state.user); 

    useEffect( ()=>{
      dispatch(fetchUsers()); 
     },[]);


    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h3 className="mt-3 text-center">Userlist</h3>
                    
                    {
                        users.loading && <div className="spineer-border text-primary">
                            Loading...
                        </div>
                    }
                     <div className="d-grid justify-content-start">
                        <Link to="/adduser" className="btn btn-info btn-lg mb-3">+</Link>
                     </div>
                     
                    <table className="table table-bordered">
                    <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>password</th>
                    </tr>
                    </thead>                
                    <tbody>
                                {
                        users.user.map( (getUser, index)=>(
                            <tr key={index}>
                            <td>{ index+1} </td>
                            <td>{getUser.name}</td>
                            <td>{getUser.email}</td>
                            <td>{getUser.password}</td>
                           
                            {/* <td>{ <div className="d-grid justify-content-start">
                           <Link to="/adduser" className="btn btn-info btn-m mb-3"> <MdDeleteForever size={24} color="#fff" />
                           </Link></div>}</td>

                            <td>{ <div className="d-grid justify-content-start">
                           <Link to="/adduser" className="btn btn-info btn-m mb-3"> 
                           <MdCreate   size={24} color="#fff" />
                           </Link></div>}</td> */}
                            </tr>
                        ))

                                }


                                </tbody>
                    </table>
                    </div>
                </div>
               
            </div>
            
        </React.Fragment>
    );
}
export default Userlist;


