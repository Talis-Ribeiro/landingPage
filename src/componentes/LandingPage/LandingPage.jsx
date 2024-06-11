import React, { useState } from 'react';

export default function LandingPage(){

  const [darkmodel, setDarkModel] = useState("")

  function alterarEstilo(){
    setDarkModel(darkmodel === "navDark" ? "" : "navDark");
  }

  return(
    <div className={darkmodel}>
    <header className="limitar-sessao">
    <div className={"navBar " + darkmodel}>
    <img className='logo-barbearia logo-dark' src="./barbearia-logo.png" alt="" />
    <button onClick={alterarEstilo} className="btn-style ">
    {darkmodel === "navDark" ? (
              <>
                <img className='imagem-lua' src="./sun.png" alt="Ícone de modo claro" /> Light

              </>
            ) : (
              <>
                <img className='imagem-lua' src="./moon.png" alt="Ícone de modo escuro" /> Dark
              </>
            )}        </button>
      </div>
    </header>

    <main className={'text-geral' + darkmodel} >
    
    <div className={"banner " + (darkmodel ? "banner-dark" : "")}></div>

      
      <h1 className={"titulo "+ darkmodel}>
        Barbearia Seu Madruga
      </h1>
      <p className={"text " + darkmodel}> Na Barbearia Seu Madruga, valorizamos a individualidade. Seja você um cavalheiro clássico ou um homem moderno, nossos serviços são adaptados para atender a todas as preferências. Dos cortes de cabelo mais tradicionais às mais ousadas barbas, estamos aqui para ajudá-lo a expressar sua verdadeira essência.
Visite-nos hoje. Junte-se a nós na Barbearia Seu Madruga e experimente o serviço excepcional, a atmosfera acolhedora e a paixão pela arte do corte de cabelo. Estamos ansiosos para recebê-lo em nossa cadeira e transformar sua visita em uma experiência inesquecível. Venha descobrir por que somos mais do que apenas uma barbearia - somos uma tradição atemporal.






      </p>
    </main>
    <h3 className={"assinatura " + darkmodel}>Seu Madruga</h3>
    </div>
  )
}