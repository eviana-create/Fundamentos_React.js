import Button from "./eventos/Button"

function Evento({}) {

    function meuEvento() {
        console.log(`Ativando primeiro Evento !.`)
    }

    function segundoEvento(){
        console.log(`Ativando Segundo Evento !`)
    }

    return (
        <div>
            <p>Clique Aqui para Disparar um Evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
)
}

export default Evento