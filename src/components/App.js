import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
      <a href="#about">I'm another link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h1>About this Programming Life</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home /> 
      <About />
    </div>
  );
}

export default App;
