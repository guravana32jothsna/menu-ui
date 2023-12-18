import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Toasts from './toasts';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const paperStyle = {
    padding : '50px 20px' , 
    width : 600, 
    margin : '20px auto'
    }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
//   const [msg ,setMsg] = useState(null);
  const [f , setF] = useState([]);
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://localhost:9090/upload', {
        method: 'POST',
        body: formData,
        headers:{
          'Expect': '',
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('File upload successful:', data);
          // Toasts.notifySuccess("File uploaded Successfully");
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.warn('No file selected');
    }
  };
    // useEffect(() => {
    //     fetch("http://localhost:8080/files" , 
    //     ).then(res => res.json()) 
    //     .then((result) => {
    //         setF(result);
    //     });
    // })

    useEffect(() => {
      fetch("http://localhost:9090/files")
          .then(res => {
              if (!res.ok) {
                  throw new Error(`HTTP error! Status: ${res.status}`);
              }
              return res.json();
          })
          .then(result => {
              setF(result);
          })
          .catch(error => {
              console.error("Error fetching data:", error.message);
          });
  }, []);
  

  return (
    <Container> 
        <Paper elevation={3} style={paperStyle}> 
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }}   noValidate  autoComplete="off" >
                   <input type="file" onChange={handleFileChange} />
                   <Button variant="contained" color = "secondary" onClick={handleFileSubmit}>
                        Upload
                    </Button> 
            </Box> 
        </Paper> 
       {
            <Container>
            {
                    f && f.length > 0 ? 
                        <Paper elevation={3} style={{
                            padding : '50px 20px' , 
                            width : 600, 
                            margin : '20px auto'
                        }}>
                            <h2 style={{ margin: "10px", padding: "15px" }}>List of Files</h2>
                            {f.map((item) => (
                                    <Paper
                                        elevation={6}
                                        style={{
                                        margin: "10px",
                                        padding: "15px",
                                        textAlign: "left",
                                        }}
                                        
                                    >
                                        {item.id} | FILE : {item.name} | TYPE : {item.type} | <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                                                  DOWNLOAD
                                                                                </a>
                                    </Paper>
                            ))}
                        </Paper>
                    : 
                    <div> <h2>No menu found!!! </h2></div>
            }
            </Container>
       }
        
    </Container>
  );
};

export default Home;





// import React from 'react';

// const FileDownloader = ({ fileId }) => {
//   const downloadFile = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/download/${fileId}`);
//       if (!response.ok) {
//         console.error('File download failed:', response.statusText);
//         // Handle the error as needed
//       } else {
//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = `downloadedFile.${blob.type.split('/')[1]}`;
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//       }
//     } catch (error) {
//       console.error('Error fetching file:', error.message);
//       // Handle the error as needed
//     }
//   };

//   return (
//     <button onClick={downloadFile}>
//       Download File
//     </button>
//   );
// };

// export default FileDownloader;
