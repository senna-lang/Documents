import React from 'react'

const Aside = () => {
  return (
   <aside className="w-full ">
   <div className="bg-white shadow-md rounded p-4 md-6 mt-4 w-full">
     <h3 className="font-bold text-gray-900 mb-2">About me</h3>
     <p className="text-gray-600">
       texttexttexttexttexttext
       texttexttexttexttexttext
     </p>
   </div>
   <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
     <h3 className="font-bold text-gray-900 mb-2">Category</h3>
     <ul className="text-gray-600 mt-2">
       <li>
         <a href="#">Technology</a>
       </li>
       <li>
         <a href="#">Automotive</a>
       </li>
       <li>
         <a href="#">Finance</a>
       </li>
       <li>
         <a href="#">Sports</a>
       </li>
     </ul>
   </div>
 </aside>
  )
}

export default Aside