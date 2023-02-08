import { useState } from 'react'

function Condicional() {

    const [email, setemail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
    e.preventDefault()
   setUserEmail(email)

    function limparEmail() {
    setUserEmail('')


    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite seu e-mail" 
                onChange={(e) => setemail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar-email
                </button>
                    {userEmail && (
                        <div>
                            <p>O E-mail do Ususario é: {userEmail}</p>
                            <button onClick={limparEmail}>Limpar e-mail</button>
                        </div>
                    )}
            </form>
        </div>
    )

                    }

                }
                
export default Condicional