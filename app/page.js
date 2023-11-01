
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

"use client";
import Header from '@/Components/Header';
import React, { useState } from 'react'


const page = () => {
  const [num, setNum] = useState(10)

  return (
    <div>
      <Header num={num} />
    </div>
  )
}

export default page;