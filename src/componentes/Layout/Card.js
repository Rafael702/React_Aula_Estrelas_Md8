import react from "react";

function Cartao(props) {
  return (
<div className="cartao">
    <div className="titulo">
          {props.titulo}
    </div>
        <div className="conteudo">
          {props.conteudo}
        </div>
</div>
  );
}

export default Cartao;
