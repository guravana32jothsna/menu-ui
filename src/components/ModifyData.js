import React , {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default function ModifyData() {
    const paperStyle = {
        padding : '50px 20px' , 
        width : 600, 
        margin : '20px auto'
    }
    const [id , setId] = useState(0); 
    const [name , setName] = useState(''); 
    const [msg , setMsg] = useState(''); 
    const [cost , setCost] = useState('');
    const handleClick = (e) => {
        e.preventDefault(); 
        const menu_item = {id ,name , cost}; 
        console.log(menu_item); 
        fetch("http://localhost:8080/menu_db", 
            {
                method : "PUT", 
                headers : {"Content-Type" : "application/json"}, 
                body : JSON.stringify(menu_item),
            }        
        ).then(() => {
            console.log("Post method ran successfully");
            setMsg("SUCCESSFULLY MODIFIED DATA");
        });
    } 
  return (
    <Container> 
        <Paper elevation={3} style={paperStyle}> 
            <h2>Edit Menu Item </h2>
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }}   noValidate  autoComplete="off" >
            <TextField id="outlined-basic" label="Serial No of the recipe" variant="outlined" fullWidth
                 value={id}   onChange={(e) =>setId(e.target.value)}/>
                <TextField id="outlined-basic" label="Name of the recipe" variant="outlined" fullWidth
                 value={name}   onChange={(e) =>setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Cost of the recipe" variant="outlined" fullWidth
                   value={cost} onChange={(e) =>setCost(e.target.value) }/>    
                   <Button variant="contained" color = "secondary" onClick={handleClick}>
                        Submit 
                    </Button> 
            </Box> 
        </Paper> 
        <h2>{msg}</h2>
    </Container>
  );
}



// , width: '25ch'