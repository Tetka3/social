import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} >
      <Route index element={<HomePage />} />      
      <Route path="/dashboard" element={<Dashboard />} />      
    </Route>
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



