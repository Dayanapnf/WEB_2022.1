import logo from "./logo.svg";
import "./App.css";



import Arena from "./components/Atv2/Questao1/Arena";
import World from "./components/Atv2/Questao3/World";
import Enemy from "./components/Atv2/Questao1/Enemy";
import Hero from "./components/Atv2/Questao1/Hero";

/*function App() {
  return (
    <div className="App">
      <Questao1 />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <Questao2 />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <Questao3 />
    </div>
  )
}
*/

/*function App() {
  return (
    <div className="App">
      <Questao4 />
    </div>
  )
}
*/

/*function App() {
  return (
    <div className="App">
      <Filho />
    </div>
  )
}*/

/*function App() {
  return (
    <div className="App">
      <Arena />
    </div>
  )
}*/

/*function App() {
  return (
    <div className="App">
      <World>
        <Arena/>
        <Arena/>
        <Arena/>
      </World>
     
    </div>
  )
}*/

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena="Ilha">
          <Hero name="Sport"></Hero>
          <Enemy name="club"></Enemy>
        </Arena>
        <Arena arena="Castelão">
          <Hero name="Sport"></Hero>
          <Enemy name="club"></Enemy>
        </Arena>
        <Arena arena="Coral">
          <Hero name="Sport"></Hero>
          <Enemy name="club"></Enemy>
        </Arena>
      </World>
    </div>
  );
}

export default App;
