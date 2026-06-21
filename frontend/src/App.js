import { BrowserRouter, Route, Routes } from "react-router-dom";

import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App(){

return(

<BrowserRouter>


<Routes>


<Route path="/" element={<Login/>}/>


<Route path="/login" element={<Login/>}/>


<Route path="/register" element={<Register/>}/>


<Route path="/feed" element={<Feed/>}/>


</Routes>


</BrowserRouter>


);

}


export default App;