import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
      <Route path="/dashboard" element={<MainLayout/>} >            
        <Route path="/dashboard" element={<Dashboard />} />      
           
             
      </Route>
    </>
  )
);

function App() {  
  

  return (
    <>
     <RouterProvider router={router}/>
      
    </>
  )
}

export default App



