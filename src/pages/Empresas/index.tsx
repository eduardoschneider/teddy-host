import React, { useState, useEffect } from 'react';
import BasePage from 'components/BasePage';
import './styles.scss';

const Empresas: React.FC = () => {

  const [EmpresasMicroFrontEnd, setEmpresasMicroFrontEnd] = useState<any>(null);

  useEffect(() => {
    import('empresasMicroFrontEnd/App')
      .then((module) => {
        setEmpresasMicroFrontEnd(() => module.default);
      })
      .catch((err) => {
      });

  }, []);

  return (
    <BasePage>
        <h1>Empresas</h1>
        {/* Conteúdo da página aqui */}
        {EmpresasMicroFrontEnd ? <EmpresasMicroFrontEnd /> : <p>Carregando micro front end...</p>}
    </BasePage>
  );
};

export default Empresas;