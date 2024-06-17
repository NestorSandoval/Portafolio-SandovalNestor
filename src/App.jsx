import Footer from "./components/Footer";
import Prueba from "./components/Prueba";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Probando from "./components/Probando";
import Start from "./pages/Start";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/Prueba" element={<Prueba />}></Route>
            <Route path="/Probando" element={<Probando />}></Route>
            <Route path="/Prueba" element={<Prueba />}></Route>
            <Route path="/Prueba" element={<Prueba />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
