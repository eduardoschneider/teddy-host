import React, { useState, useEffect } from 'react';
import BasePage from 'components/BasePage';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import './styles.scss';

const Empresas: React.FC = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1', 10));
  const [EmpresasMicroFrontEnd, setEmpresasMicroFrontEnd] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    import('empresasMicroFrontEnd/App')
      .then((module) => {
        setEmpresasMicroFrontEnd(() => module.default);
      })
      .catch((err) => {
      });

  }, []);

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page])

  return (
    <BasePage>
        <h1>Empresas</h1>
        {/* Conteúdo da página aqui */}
        {EmpresasMicroFrontEnd ? <EmpresasMicroFrontEnd page={page} setPage={setPage}/> : <p>Carregando micro front end...</p>}
    </BasePage>
  );
};

export default Empresas;