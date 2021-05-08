import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Home from "./Home";
import Why from "./Why";
import About from "./About";
import Roadmap from "./Roadmap";
import Footer from "./Footer";
import Preloader from "./Preloader";

function App() {
  return (
    <div className="app">
      <Preloader />
      <Header />
      <Home />
      <Why />
      <About />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
