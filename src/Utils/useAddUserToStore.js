import { auth } from "./firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";

const useAddUserToStore = ()=>{
    const dispatch = useDispatch();
    return (name)=>
    {

        if(!name.current){
            console.log("name", auth.currentUser)
            const user = {
                name: auth.currentUser.displayName,
                email: auth.currentUser.email                
            }
            dispatch(addUser(user));
            return
        }
    
        updateProfile(auth.currentUser , {
            displayName: name.current.value
        }).then(() => {
            const user = {
                name: auth.currentUser.displayName,
                email: auth.currentUser.email                
            }
            dispatch(addUser(user));
        }).catch((error) => {
            console.log(error)
        });
        }        
}

export default useAddUserToStore;