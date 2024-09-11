import React, { useState, useEffect } from 'react';
import BasePage from 'components/BasePage';
import './styles.scss';

const Parceiros: React.FC = () => {

  const [ParceirosMicroFrontEnd, setParceirosMicroFrontEnd] = useState<any>(null);

  useEffect(() => {
    import('ParceirosMicroFrontEnd/App')
    .then((module) => {
      setParceirosMicroFrontEnd(() => module.default);
    })
    .catch((err) => {
    });
  }, [])

  return (
    <BasePage>
        <h1>Parceiros</h1>
        {ParceirosMicroFrontEnd ? <ParceirosMicroFrontEnd /> : <p>Carregando micro front end...</p>}
    </BasePage>
  );
};

export default Parceiros;