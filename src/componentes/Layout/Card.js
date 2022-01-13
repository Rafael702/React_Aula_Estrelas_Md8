import react from "react";
import "./Card.css";

function Cartao(props) {
  return (
<div className="cartao">
    <div className="titulo">
          {props.titulo}
    </div>
        <div className="conteudo">
          {props.children}
        </div>
</div>
  );
}

export default Cartao;
