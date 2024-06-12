import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
           <div><h1 className='text-center text-sky-500 text-4xl font-bold ml-32 pt-10 mb-10'>HI,WELCOME {  user?.displayName? user.displayName : 'BACK'  } </h1></div>
        </div>
    );
};

export default AdminHome;