// "use client";
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// const page = () => {
//   const [users, setusers] = useState([])
//   const getUsers = async () =>{
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
//     setusers(data);
//   }

//   useEffect(() => {
//     getUsers()
//   }, [])

//   return (
//     <>

//     {/* <a href='/Contact'>Contact</a> */}

//     <button
//     onClick={getUsers}
//     className='btnData'>Get data</button>
//     <div className='dataDiv'>
//       <ul>
//       {users.map((e)=>{
//         return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
//       })}
//       </ul>

//     </div>
//     </>
//   )
// }

// export default page

// "use client";
// import Header from '@/Components/Header';
// import React, { useState } from 'react'

// const page = () => {
//   const [num, setNum] = useState(10)

//   return (
//     <div>
//       <Header num={num} />
//     </div>
//   )
// }

// export default page;

// "use client";
// import Header from '@/Components/Header';
// import { MyContext } from '@/Helper/Context';
// import React, { useContext } from 'react'

// const page = () => {
//     const user = useContext(MyContext)

//   return (
//     <div>{user}
//       <Header/>
//     </div>
//   )
// }

// export default page
// "use client";
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

// const page = () => {
//   const notify = () => {
//     toast.warn('Error!!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       });
//   }
//   return (
//     <div>
//       <button
//       onClick={notify}
//       className='btnStyle'>Click here</button>

//       <ToastContainer/>
//     </div>
//   )
// }

// export default page
// "use client";
// import axios from "axios";
// import React, { useState } from "react";

// const page = () => {
//   const [userdata, setUserdata] = useState("");
//   const [num, setNum] = useState(10);
//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");
//     const a = JSON.stringify(response.data);
//     console.log(a);
//     setUserdata(a);
//   };
//   return (
//     <div>
//       <button onClick={getData} className="btnStyle">
//         Click
//       </button>
//       <br />
//       {userdata}
//     </div>
//   );
// };

// export default page;

import React from "react";

const Deployment = () => {
  return <div>Deployment</div>;
};

export default Deployment;
