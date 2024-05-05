import {signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "./userSlice";

const useRemoveUser = ()=>{
    const dispatch = useDispatch();
    
    return ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        dispatch(removeUser())
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
    }
}

export default useRemoveUser;






