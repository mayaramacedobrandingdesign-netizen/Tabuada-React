import "./App.css";
import { useState } from "react";
import { Calculator } from "lucide-react";

function App() {
  const [numero, setNumero] = useState(1);

  // menu com push
  const tabuada = [];
  for (let i = 1; i <= 10; i++) {
    tabuada.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  // evento
  function handleChange(e) {
    setNumero(Number(e.target.value));
  }

  // linhas com push (GRID)
  const linhas = [];
  for (let i = 1; i <= 10; i++) {
    linhas.push(
      <div key={i} className="linha">
        <span>{numero}</span>
<span>×</span>
<span>{i}</span>
<span>=</span>
<span>{numero * i}</span>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">

        <h2 className="titulo">
  <Calculator size={28} /> TABUADA </h2>

        <p>Selecione o numero da Tabuada</p>

        <select value={numero} onChange={handleChange}>
          {tabuada}
        </select>

        <div className="grid">
          {linhas}
        </div>
      </div>
    </div>
  );
}

export default App;