import React , {useState} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';

export default function SelectData() {
    const paperStyle = {
        padding : '50px 20px' , 
        width : 600, 
        margin : '20px auto'
    }
    const [id, setId] = useState(null); 
    const [data , setData] = useState(); 
    const [r , setReq] = useState(false);
    const [msg ,setMsg] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();     
        try {
            const resp = await fetch(`http://localhost:8080/menu_db/${id}` ,
            {
                method : "GET"
            }
            );
            const jsonData = await resp.json(); 
            setReq(true);
            console.log(jsonData); 
            setData(jsonData);  
            console.log(data); 
        }
        catch(err) {
            setReq(false);
            console.log("ERROR OCCURRED"); 
            setMsg("DATA REQUESTED NOT FOUND"); 
        }
             
    }
  return (
    <Container > 
        <Paper elevation={3} style={paperStyle}> 
            <h2>Enter Id  </h2>
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }}   noValidate  autoComplete="off" >
                <TextField id="outlined-basic" label="Serial Id" variant="outlined" fullWidth
                   onChange={(e) =>setId(e.target.value)}/>  
                   <Button variant="contained" color = "secondary" onClick={handleClick}>
                        View Data
                    </Button> 
            </Box> 
        </Paper> 
        
        {
            <Container>
            { r && data ? 
                    (<Paper elevation={3} style={paperStyle} >
                    <h2 style={{margin : "10px" , padding : "15px" }}>Requested Data </h2> 
                    {
                            <Paper elevation={6} style={{margin : "10px" , padding : "15px" , textAlign : "left"}}> 
                                <h2>Data for ID {id}:</h2>
                                <p>{data.name}</p>
                                <p>{data.cost}</p>                
                            </Paper>
                        
                    }
                    </Paper> ) 
             : (
              <div>
                <h2>{msg}</h2>
              </div>
            )}
          </Container>
            // r && data &&
            // (<Paper elevation={3} style={paperStyle} >
            // <h2 style={{margin : "10px" , padding : "15px" }}>Requested Data </h2> 
            // {
            //         <Paper elevation={6} style={{margin : "10px" , padding : "15px" , textAlign : "left"}}> 
            //             <h2>Data for ID {id}:</h2>
            //             <p>{data.name}</p>
            //             <p>{data.cost}</p>                
            //         </Paper>
                
            // }
            // </Paper> )   
                
        }
    </Container>
  );
}



// , width: '25ch' 

