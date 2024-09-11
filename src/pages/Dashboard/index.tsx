import React from 'react';
import BasePage from 'components/BasePage';
import './styles.scss';

const Dashboard: React.FC = () => {
  return (
    <BasePage>
      <h1>Dashboard</h1>
      <section>
        <div>
          <h2>Introdução</h2>
        </div>
        <p>Este projeto é uma aplicação moderna desenvolvida com React 18 e TypeScript.
        <br/>O objetivo principal é fornecer uma solução eficiente e escalável para o gerenciamento de dados, com uma interface de usuário responsiva e intuitiva.</p>
      </section>

      <section>
        <div>
          <h2>Objetivos</h2>
        </div>
        <ul>
          <li>Implementar micro front-ends separados por contextos.</li>
          <li>Implementar uma tabela de dados com funcionalidades de filtragem e paginação.</li>
          <li>Desenvolver uma interface de usuário responsiva que se adapta a diferentes tamanhos de tela.</li>
        </ul>
      </section>

      <section>
        <div>
          <h2>Funcionalidades</h2>
        </div>
        <ul>
          <li>Criação e edição de registros através de uma modal intuitiva.</li>
          <li>Visualização de dados em uma tabela com suporte a diferentes tipos de conteúdo.</li>
          <li>Paginação e navegação através de um sistema de paginação simplificado.</li>
          <li>Suporte a múltiplos micro front-ends, permitindo uma arquitetura modular e escalável.</li>
        </ul>
      </section>

      <section>
        <div>
          <h2>Conclusão</h2>
        </div>
        <p>Este projeto visa facilitar a gestão de dados através de uma aplicação moderna e eficiente com uma estrutura modular possibilitando integrações futuras.</p>
      </section>
    </BasePage>
  );
};

export default Dashboard;