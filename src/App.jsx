
import { ToastContainer } from "react-toastify"
import Navbar from "./Navbar"
import Popular from "./Popular"
import Story from "./Story"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(){
  return (
    <div className="header">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Story />}/>
          <Route path="/:category" element={<Story />}/>
        </Routes>
      </BrowserRouter>
      
      <ToastContainer position='top-center' autoClose={2000} hideProgressBar={true} closeOnClick/> {/* added toast container */}
    </div>
  )
}

export default App



