import react from "react";

function ComponenteComFilhos(props) {
  return (
      <div>
          {props.children}
      </div>
  );
}

export default ComponenteComFilhos;
