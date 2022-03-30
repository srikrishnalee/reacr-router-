import { BrowserRouter, Route,Routes} from "react-router-dom"

import BlogItemDetails from "./components/BlogItemDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

import BlogList from "./components/BlogsList"


const App = () =>(
   <BrowserRouter>
     <Header />
     <Routes>
       
       <Route  path="/" element={<BlogList/>} />
       <Route  path="/about" element={<About/>} />
       <Route  path="/contact" element={<Contact/>} />
       <Route path="/blogs/:id" element = {<BlogItemDetails/>} />

     </Routes>
   </BrowserRouter>
   
)

export default App;