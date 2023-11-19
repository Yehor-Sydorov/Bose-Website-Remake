import "./App.css";
import MainComponent from "./components/templates/MainComponent";
import RecommendComponent from "./components/templates/RecommendComponent";
import BrowseComponent from "./components/templates/BrowseComponent";
import BenefitsComponent from "./components/templates/BenefitsComponent";
import ContactComponent from "./components/templates/ContactComponent";
import FooterComponent from "./components/templates/FooterComponent";

function App() {
  return <div className="App">
    <MainComponent/>
    <RecommendComponent/>
    <BrowseComponent/>
    <BenefitsComponent/>
    <ContactComponent/>
    <FooterComponent/>
  </div>;
}

export default App;
