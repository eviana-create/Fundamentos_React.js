function Evento({numero}) {

    function meuEvento() {
        console.log(`´Opa , Fui Ativado !.${numero}`)
    }

    return (
        <div>
            <p>Clique Aqui para Disparar um Evento</p>
            <button onClick={meuEvento}>Ativar !</button>
        </div>
)
}

export default Evento