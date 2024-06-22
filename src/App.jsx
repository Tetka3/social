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

const router = createBrowserRouter(
  createRoutesFromElements(
    <div basename="social">
      <Route index element={<HomePage />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/dashboard" element={<MainLayout/>} >            
        <Route path="/dashboard" element={<Dashboard />} />      
             
      </Route>
    </div>
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



