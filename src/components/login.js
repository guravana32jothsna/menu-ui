import React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from './AuthContext';
import { NavLink , useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const paperStyle = {
        padding : '50px 20px' , 
        width : 600, 
        margin : '20px auto'
    }
    const [email , setEmail] = useState(''); 
    const [password , setPassword] = useState('');
    const [msg , setMsg] = useState(''); 
    // const [auth ,setAuth] = useState(false);
    const {login} = useAuth();

    const handleClick = async () => {
        //  setMsg("enetr");
        if(email == '' || password == '') {
            setMsg("PLEASE ENTER VALID DATA"); 
            return;
        }
        try {
            const user_cred = {email , password};  
            const response = await fetch('http://localhost:8080/users/login',{
                method : 'POST', 
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    email : email, 
                    password : password,  
                }),
            });
            if(!response.ok) {
                throw new Error('Login Failed');
            }
            const result = await response.json(); 
            if(result.status) {
                console.log(result.status);
                // setAuth(true);  
                login();
                toast.success("Logged in  Successfully");
                navigate('/files')
                setMsg("True");
            }
            else {
                console.log(result.status);
                toast.error(result.message);
                // setAuth(false);
                // setMsg("Fakse");
            }
        }
        catch(error) {
            console.error('Error during login ', error.message);
        }
        
       
    } 
  return (
    <Container> 
        <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
        />
        <Paper elevation={3} style={paperStyle}> 
            <h2>LOGIN</h2>
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }}   noValidate  autoComplete="off" >
                <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth
                 value={email}   onChange={(e) =>setEmail(e.target.value)}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth
                   value={password} onChange={(e) =>setPassword(e.target.value) }/>    
                   <Button variant="contained" color = "secondary" onClick={handleClick}>
                        Login 
                    </Button> 
                    {/* {msg} */}
            </Box> 
        </Paper> 
        {/* <h2>{msg}</h2> */}
    </Container>
  );
}

 // const user_cred = {email , password}; 
        // console.log(user_cred); 
        // fetch("http://localhost:8080/users/login", 
        //     {
        //         method : "POST", 
        //         headers : {"Content-Type" : "application/json"}, 
        //         body : JSON.stringify(user_cred),
        //     }        
        // ).then(() => {
        //     console.log("LOGIN success!!");
        //     setAuth(true);
        //     setMsg("SUCCESSFULLY LOGGED IN");
        // });