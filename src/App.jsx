
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import{Toaster} from "react-hot-toast";
import HOME from "./Pages/Home";
import NotFound from "./Pages/Home";
import Success from "./Pages/Home";


const App = () => {
  return ( <> <Router>
    <Routes>
      <Route path='/' element={<HOME/>}/>
      <Route path='success' element={<Success/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Toaster/>
  </Router>
  </>
  )
};

export default App
