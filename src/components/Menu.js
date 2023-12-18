import React , {useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default function Menu() {
    const paperStyle = {
        padding : '50px 20px' , 
        width : 600, 
        margin : '20px auto'
    }
    const [name , setName] = useState(''); 
    const [cost , setCost] = useState('');
    const [menu , setMenu] = useState([]); 
    // const classes = useStyles(); 
    const handleClick = (e) => {
        e.preventDefault(); 
        const menu_item = {name , cost}; 
        console.log(menu_item); 
        fetch("http://localhost:8080/menu_db/insertData", 
            {
                method : "POST", 
                headers : {"Content-Type" : "application/json"}, 
                body : JSON.stringify(menu_item),
            }        
        ).then(() => {
            console.log("Post method ran successfully");
        });
    } 
    useEffect(() => {
        fetch("http://localhost:8080/menu_db/getAll" , 
        ).then(res => res.json()) 
        .then((result) => {
            setMenu(result);
        });
    })
  return (
    <Container> 
        <Paper elevation={3} style={paperStyle}> 
            <h2> List of Items  </h2>
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }} >
                <TextField id="outlined-basic" label="Name of the recipe" variant="outlined" fullWidth
                 value={name}   onChange={(e) =>setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Cost of the recipe" variant="outlined" fullWidth
                   value={cost} onChange={(e) =>setCost(e.target.value) }/>    
                   <Button variant="contained" color = "secondary" onClick={handleClick}>
                        Submit 
                    </Button> 
            </Box> 
        </Paper>
        <h2>List of Items </h2> 
        <Paper elevation={3} style={paperStyle} >
            {
                menu.map(item => (
                    <Paper elevation={6} style={{margin : "10px" , padding : "15px" , textAlign : "left"}}
                        key={item.id}> 
                        {item.id} |
                        NAME OF THE RECIPE : {item.name} |
                        COST OF THE RECIPE : {item.cost}
                    </Paper>
                ))
            }
        </Paper>
    </Container>
  );
}



// , width: '25ch'