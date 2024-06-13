import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
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



