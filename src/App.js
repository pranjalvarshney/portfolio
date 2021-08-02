import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/pages/Home";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
// import { Blog } from "./components/pages/Blog";
import { About } from "./components/pages/About";

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      {/* <Blog /> */}
      <Contact />
    </div>
  );
};
