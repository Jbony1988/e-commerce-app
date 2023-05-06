import React from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <h1>Welcome to the store</h1>;
      </main>
      <Footer />
    </>
  );
};

export default App;
