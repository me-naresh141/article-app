import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Articles";
import Footer from "./Footer";
import "../stylesheet/style.css";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;