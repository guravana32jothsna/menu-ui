import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const Toasts = {
    notifySuccess,
    notifyError,
    notifyWarn
}

  function notifySuccess(message) {
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      
    });
}

  function notifyError(message) {
    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      
    });
  };

  function notifyWarn (message) {
    toast.warn(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light"
      
      // progressClassName: css({
      //   background:
      //     "repeating-radial-gradient(circle at center, red 0, blue, green 30px)"
      // })
    });
  };



// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Toasts = {
//   notifySuccess: (message) => {
//     toast.success(message, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   },
//   notifyError: (message) => {
//     toast.error(message, {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   },
// };

export default Toasts;

// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();
// function GeeksforGeeks() {
// 	const notify = () => {
// 		toast("");
// 	};
// 	return (
// 		<div className="GeeksforGeeks">
// 			<button onClick={notify}>Click Me!</button>
// 		</div>
// 	);
// }

// export default GeeksforGeeks;

