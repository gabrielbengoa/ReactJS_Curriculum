import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Gabriel Barros Bengoa</h1>
      <hr />
      <p>
        Rua Mazagão 230 - Patriarca - São Paulo - SP - CEP:03555-000 <br></br>
        Telefone: (11) 2798-0123 - Email: gabrielbengoa2795@gmail.com <br></br>
        25 anos - Solteiro
      </p>
      <p className="Objetivo">
        Objetivo: Estágio na Área de Tecnologia da Informação
      </p>
      <h2 className="format">Síntese de Qualificações</h2>
      <p className="list">
        {
          <ul>
            <li className="space">Noções de computação (Hardware e Excel).</li>
            <li>Rápida adaptação do local de trabalho.</li>
          </ul>
        }
      </p>
      <h2 className="format">Formação</h2>
      <p className="list">
        <strong>Curso de Técnico de Informática</strong> – <i>Cursando</i>{" "}
        (Conclusão prevista em novembro de 2020)<br></br>
        <strong>Senac São Paulo (Unidade Tatuapé)</strong>
      </p>
      <h2 className="format">Formação Complementar</h2>
      <p className="list">
        {
          <ul>
            <li className="space">
              <strong>Curso Playgame: Criação de Jogos Digitais</strong> -
              Escola SAGA – Jogos, arte digital, design<br></br> e efeitos
              visuais <strong>(24 meses) 2013 - 2015</strong>
            </li>
            <li className="space">
              <strong>
                Curso de Hardware I: Montagem e Manutenção de microcomputadores
                com <br></br> Introdução ao Linux
              </strong>{" "}
              – Compuclass <strong>(30 horas/aula) 2016</strong>
            </li>
            <li>
              <strong>Curso de Excel Básico</strong> - Compuclass{" "}
              <strong>(9 horas/aula) 2016</strong>
            </li>
          </ul>
        }
      </p>
      <h2 className="format">Experiência Profissional</h2>
      <p className="list">
        <strong>Empresa:</strong> Cinemark (Shopping Metro Tatuapé). <br></br>
        <strong>Período:</strong> 11/04/2017 até 21/02/2018<br></br>
        <strong>Cargo:</strong> PAC Usher (Atendimento e acomodação ao cliente,
        limpeza de salas do cinema e<br></br> entrada e saída de materiais como
        posters e displays de filmes).
      </p>
      <h2 className="format">Idiomas</h2>
      <p className="list">
        <i>Inglês americano</i> (Avançado)
      </p>
      <h2 className="format">Interesses Gerais</h2>
      <p className="list">Conhecimento amplo sobre videogames.</p>
      <h2 className="format">Observação</h2>
      <p className="list">
        Tenho Síndrome de Asperger (Transtorno do Espectro Autista).
      </p>
    </div>
  );
}

export default App;
