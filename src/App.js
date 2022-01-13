import react from "react";
import ComponenteComProps from "./componentes/ComponenteComProps";
import ComponenteComFilhos from "./componentes/ComponentesComFilhos";
import Cartao from "./componentes/Layout/Card";
import PrimerioComponente from "./componentes/PrimeiroComponente";

/* Primeira forma de fazer functions
function App(){
    return(

    );
}

export default App;
*/

export default (props) => (
  <div>
    <Cartao titulo="Cartao #1">
      <PrimerioComponente />
    </Cartao>
    <Cartao titulo="Cartao #2">
      <ComponenteComFilhos>
        <ul>
          <li>Arroz</li>
        </ul>
      </ComponenteComFilhos>
    </Cartao>
  </div>
);
