import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Client from "./components/clients/Client";
import Features from "./components/features/Features";
import Plan from "./components/Plan/Plan";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Client />
      <Features />
      <Plan />
      <Testimonials />
      <Subscribe />
      <Footer />
    

    </div>
  );
}

export default App;
