import react from "react";

function ComponenteComFilhos(props) {
  return (
    <div>
      {props.titulo}
      <div>
          {props.filho}
      </div>

    </div>
  );
}

export default ComponenteComFilhos;
