import react from "react";


function ComponenteComProps(props){
    react(
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.cargo}</h2>
        </div>
    )
}

export default ComponenteComProps;