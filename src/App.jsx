import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />      
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



