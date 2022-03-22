import { BrowserRouter, Route,Routes} from "react-router-dom"



import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = () =>(
   <BrowserRouter>
     <Header />
     <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/about" element={<About/>} />
       <Route  path="/contact" element={<Contact/>} />
       <Route component={NotFound} />
     </Routes>
   </BrowserRouter>
   
)

export default App;