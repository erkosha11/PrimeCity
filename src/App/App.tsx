import "./App.scss";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Services } from "../components/Servicespage/Services";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Services/>
    </div>
  );
}

export default App;
