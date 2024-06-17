import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Prueba from "./components/Prueba";
/* import Reviews from "./components/Reviews"; */
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import Reviews from "./components/Reviews";


function App() {

  return (
    <>
    <div>
      <BrowserRouter>
          <Header/>

          <Routes>
            <Route path="/" 
            element={<Hero/>}></Route>
            
            <Route path="/Prueba" element={<Prueba/>}></Route>
          </Routes>
      </BrowserRouter>

    </div>
    </>
  )
}

export default App;
