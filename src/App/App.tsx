import "./App.scss";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Services } from "../components/Servicespage/Services";
import { Found } from "../components/Found/Found";
import { Job } from "../components/Job/Job";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Services/>
      <Found/>
      <Job/>
    </div>
  );
}

export default App;
