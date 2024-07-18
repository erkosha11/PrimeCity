import "./App.scss";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Services } from "../components/Servicespage/Services";
import { Found } from "../components/Found/Found";
import { Job } from "../components/Job/Job";
import { Footer } from "../components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Services/>
      <Found/>
      <Job/>
      <Footer/>
    </div>
  );
}

export default App;
