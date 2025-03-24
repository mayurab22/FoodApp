import React from 'react'
import Resto1 from './Resto1'
import { useParams } from "react-router-dom";


function Index() {
    const { id } = useParams();
    const restaurant = restaurants.find((rest) => rest.id.toString() === id);
    if (!restaurant) {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold text-red-500">Restaurant Not Found</h1>
          </div>
        );
      }
  return (
    <Routes>
      <Route path="/Offerspage" element={<Offerspage/>}/>
      {/* <Route path="/Contact" element={<Contact/>}/> */}
    </Routes>
  )
}

export default Index