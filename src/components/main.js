import React, { useState } from "react"; 
import { NavLink , useNavigate} from "react-router-dom"; 
import "./main.css"; 
import Footer from "./footer"; 
import { useAuth } from "./AuthContext";

const Main = ({children}) => {
    // const [auth , setAuth] = useState(false);
    const {auth , logout} = useAuth();
    const navigate = useNavigate();
    const methods = [
        {
            path : "/files", 
            name : "FILES"
        },
        {
            path : "/getAllData", 
            name : " GET MENU"
        }, 
        {
            path : "/postData", 
            name : "INSERT DATA"
        }, 
        {
            path : "/delete", 
            name : "REMOVE ITEM"
        }, 
        {
            path : "/getById" , 
            name : "GET-BY-ID"
        }, 
        {
            path : "/updateData" , 
            name : "MODIFY ITEM "
        }
    ] 
    // const handleLogin = () => {
    //     setAuth(true); 
    //     navigate('/')
    // }

    const handleLogout = () => {
        // setAuth(false); 
        logout();
        navigate('/login');
    }
    return (
        <div className="container">
            <div className="flexCenter paddings innerWidth navbar">
                <div className="left">
                    <span className="heading">FOODIE MENU</span> 
                </div>
                <div className="right">
                    {
                        auth ?
                        (
                            <ul>
                                {
                                    methods.map((i ,ind) => (
                                        <li key={ind}>
                                            <NavLink to= {i.path} className="linkto">{i.name}</NavLink>
                                        </li>
                                    ))
                                }  
                                <li>
                                    <button onClick={handleLogout} className="linkto">
                                                LOGOUT
                                    </button>
                                </li>
                            </ul>
                        ) : 
                        (
                            <ul>
                                {/* onClick={handleLogin} */}
                                <li> <NavLink to= "/login" className="linkto" >LOGIN</NavLink> </li>
                            </ul>
                        )
                    }
                </div>
            </div>
            <main>{children}</main> 
            {/* <Footer/> */}
        </div>
    );
}

export default Main; 



