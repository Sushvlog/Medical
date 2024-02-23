// Your component or wherever you want to delete data
import { useDispatch } from 'react-redux';
import {DeleteUser} from "../app/user/userSlice"; // Replace with the correct path

function DeleteUser() {
   
    const dispatch = useDispatch();

    const handleSubmit = (index) => {
        dispatch(DeleteUser(index));
    };

    // ...
}
export default DeleteUser;