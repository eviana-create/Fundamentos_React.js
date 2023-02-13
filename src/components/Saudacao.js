function Saudacao({nome}) {
    function gerarSaudacao(algumNome){
    return `Olá ${algumNome}, Seja Bem Vindo !`
    }
    return (
    <>
    <p>{nome && gerarSaudacao(nome)}</p>
    </>
    )
}
export default Saudacao