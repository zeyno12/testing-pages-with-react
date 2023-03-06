import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Error from "./components/error/Error";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import Bagcalar from "./components/pages/bagcalar/Bagcalar";




function App() {
  return (
    <section >

      <BrowserRouter>
      <Routes>
        <Route path="/" index  element={<Bagcalar/>} ></Route>
        <Route path="*" index  element={<Error/>} ></Route>
      </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
