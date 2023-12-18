// import React , {useState , useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MessageLoading from './loadingmsg';


// export default function MenuItems() {
//     const paperStyle = {
//         padding : '50px 20px' , 
//         width : 600, 
//         margin : '20px auto'
//     }
//     const [menu , setMenu] = useState([]); 
//     const [err , setErr] = useState(false);
//     // const classes = useStyles(); 
//     useEffect(() => {
//         fetch("http://localhost:8080/menu_db/getAll" , 
//         ).then(res => res.json()) 
//         .then((result) => {
//             setMenu(result);
//         });
//     })
//   return (
//             <Container>
//             {menu.length > 0 ? (
//             <Paper elevation={3} style={paperStyle}>
//                 <h2 style={{ margin: "10px", padding: "15px" }}>List of Items</h2>
//                 {menu.map((item) => (
//                 <Paper
//                     elevation={6}
//                     style={{
//                     margin: "10px",
//                     padding: "15px",
//                     textAlign: "left",
//                     }}
//                     key={item.id}
//                 >
//                     {item.id} | NAME OF THE RECIPE: {item.name} | COST OF THE RECIPE: {item.cost}
//                 </Paper>
//                 ))}
//             </Paper>
//             ) : (
//             <div>
//                 <h2>No more items in the menu</h2>
//             </div>
//             )}
//         </Container>
    
//   );
// }



// {/* <Container > 
//         <Paper elevation={3} style={paperStyle} >
//             <h2 style={{margin : "10px" , padding : "15px" }}>List of Items </h2> 
//             {
//                 menu.map(item => (
//                     <Paper elevation={6} style={{margin : "10px" , padding : "15px" , textAlign : "left"}}
//                         key={item.id}> 
//                         {item.id} |
//                         NAME OF THE RECIPE : {item.name} |
//                         COST OF THE RECIPE : {item.cost}
//                     </Paper>
//                 ))
//             }
//         </Paper>
// </Container> */}



import React , {Component} from "react";  

class MenuItems extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            mi : [], 
            err : null, 
            isLoading : false
        }
    }
    
    componentDidMount() {
        this.setState({isLoading : true}) 
        let api_url = 'http://localhost:8080/menu_db/getAll'; 
        fetch(api_url) 
        .then(res => {
            if(res.status >= 400) {
                throw new Error("Server responds with error !");
            }
            return res.json();
        })
        .then(mi => {
            // console.log(m);
            this.setState({
                mi, isLoading : false 
            })
        }) 
        .catch(err => {
            console.error("Fetch error:", err);
            this.setState({
                err,
                isLoading: false
            });
        });
    }
    render() {
        let {mi , err , isLoading} = this.state; 
        if(err) {
            return (
                <div><h1>{err.message}</h1></div> 
            )
        }
        if(isLoading) {
            return (
                <MessageLoading/>
            )
        }
        return(
            <div>
                {
                    mi && mi.length > 0 ? 
                        <Paper elevation={3} style={{
                            padding : '50px 20px' , 
                            width : 600, 
                            margin : '20px auto'
                        }}>
                            <h2 style={{ margin: "10px", padding: "15px" }}>List of Items</h2>
                            {mi.map((item) => (
                                    <Paper
                                        elevation={6}
                                        style={{
                                        margin: "10px",
                                        padding: "15px",
                                        textAlign: "left",
                                        }}
                                        key={item.id}
                                    >
                                        {item.id} | NAME OF THE RECIPE: {item.name} | COST OF THE RECIPE: {item.cost}
                                    </Paper>
                            ))}
                        </Paper>
                    : 
                    <div> No menu found!!! </div>
                }
            </div>
        )
    }
}



export default MenuItems; 

