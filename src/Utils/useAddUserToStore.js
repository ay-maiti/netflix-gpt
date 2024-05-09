import { auth } from "./firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { user_dp_default } from "./constants";

const useAddUserToStore = ()=>{
    const dispatch = useDispatch();
    console.log("user_dp_default", user_dp_default)
    return (name)=>
    {

        if(!name.current){
            console.log("name", auth.currentUser)
            const user = {
                name: auth.currentUser.displayName,
                user_dp: auth.currentUser.photoURL,
                email: auth.currentUser.email                
            }
            dispatch(addUser(user));
            return
        }
    
        updateProfile(auth.currentUser , {
            displayName: name.current.value,
            photoURL: user_dp_default
        }).then(() => {
            const user = {
                name: auth.currentUser.displayName,
                user_dp: auth.currentUser.photoURL,
                email: auth.currentUser.email                
            }
            dispatch(addUser(user));
        }).catch((error) => {
            console.log(error)
        });
        }        
}

export default useAddUserToStore;