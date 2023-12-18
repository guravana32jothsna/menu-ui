import React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Toasts from './toasts';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InsertData() {
    const paperStyle = {
        padding : '50px 20px' , 
        width : 600, 
        margin : '20px auto'
    }
    const [id , setId] = useState(0); 
    const [msg , setMsg] = useState(''); 
    const handleClick = (e) => {
        e.preventDefault(); 
        const did = id; 
        console.log(did); 
        fetch(`http://localhost:8080/menu_db/${did}`, 
            {
                method : "DELETE", 
                headers : {"Content-Type" : "application/json"}, 
            }        
        ).then(() => {
            console.log("Delete method ran successfully");
            // Toasts.notifySuccess("Deleted successfully") 
            toast.success("Deleted Successful");
            setMsg("SUCCESSFULLY DELETED DATA ");
        });
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
            <h2>Enter Id to be deleted </h2>
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }}   noValidate  autoComplete="off" >
                <TextField id="outlined-basic" label="Serial Id" variant="outlined" fullWidth
                 value={id}   onChange={(e) =>setId(e.target.value)}/>  
                   <Button variant="contained" color = "secondary" onClick={handleClick}>
                        Delete
                    </Button> 
            </Box> 
        </Paper> 
        <h2>{msg}</h2>
    </Container>
  );
}



// , width: '25ch'