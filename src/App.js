import React from 'react';
import './App.css';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Main from './components/main';
import MenuItems from './components/MenuItems'; 
import InsertData from './components/InsertData';
import Remove from './components/Remove';
import SelectData from './components/SelectData';
import ModifyData from './components/ModifyData';
import Home from './components/Home';
import Login from './components/login';
import { AuthProvider } from './components/AuthContext';

import { useAuth } from './components/AuthContext';

const App = () => { 
  const { auth} = useAuth();
  return (
    // <AuthProvider>
       <BrowserRouter>
          <Main>
            <Routes>
            {/* <Route path="/" element = {<Main/>} />  */} 
            
                  <Route path="/login" element = {<Login/>} />  
                  {auth && <Route path="/files" element = {<Home/>} />  }
                  {auth && <Route path="/getAllData" element = {<MenuItems/>} />  }
                  {auth && <Route path="/postData" element = {<InsertData/>} />}
                  {auth && <Route path="/delete" element = {<Remove/>} />}
                  {auth && <Route path="/getById" element = {<SelectData/>} />}
                  {auth && <Route path="/updateData" element = {<ModifyData/>} /> }
                   {/* <Route path="/files" element = {<Home/>} />  
                  <Route path="/getAllData" element = {<MenuItems/>} />  
                  <Route path="/postData" element = {<InsertData/>} />
                  <Route path="/delete" element = {<Remove/>} />
                  <Route path="/getById" element = {<SelectData/>} />
                  <Route path="/updateData" element = {<ModifyData/>} />  */}
                  <Route path="*" element = {<div>Not Found </div>} />
            
             </Routes>
          </Main>
       </BrowserRouter>
    //  </AuthProvider>
  );
}

export default App;




// import React from 'react';
// import { Redirect } from 'react-router-dom';

// const withAuth = (WrappedComponent) => {
//   class AuthComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isAuthenticated: /* Your authentication logic */,
//       };
//     }

//     render() {
//       if (this.state.isAuthenticated) {
//         return <WrappedComponent {...this.props} />;
//       } else {
//         // Redirect to the login page if not authenticated
//         return <Redirect to="/login" />;
//       }
//     }
//   }

//   return AuthComponent;
// };

// export default withAuth;














// import './App.css';
// import Appbar from './components/Appbar';
// import Menu from './components/Menu'; 

// function App() {
//   return (
//     <div className="App">
//       <Appbar/> 
//       <Menu/>
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
 
// function App() {
//   const displayLoginNotification = () => {
//     toast.success("LoggedIn Successful");
//   };
 
//   return (
//     <div className='App'>
//       <ToastContainer
//         position='top-right'
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme='light'
//       />
 
//       <button onClick={displayLoginNotification}>Log me In</button>
//     </div>
//   );
// }
 
// export default App;