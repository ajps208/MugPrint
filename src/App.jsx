import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Main from "./Main";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
