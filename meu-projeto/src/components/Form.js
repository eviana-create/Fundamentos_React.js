function Form() {

    function cadastrarUsuario(e) {
        console.log('Cadastrou o usuario !') 
        e.preventDefault()       
    }

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Nome Completo" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form