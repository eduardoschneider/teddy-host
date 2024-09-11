
import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import PrivateRoute from "components/PrivateRoute";
import LoginPage from "pages/Login";
import Dashboard from "pages/Dashboard";
import Parceiros from "pages/Parceiros";
import Empresas from "pages/Empresas";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route>
           <Route path="/" element={<LoginPage />} />
           <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />}></PrivateRoute>} />
           <Route path="/parceiros" element={<PrivateRoute element={<Parceiros />}></PrivateRoute>} />
           <Route path="/empresas" element={<PrivateRoute element={<Empresas />}></PrivateRoute>} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App