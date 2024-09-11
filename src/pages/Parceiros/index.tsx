import React, { useState, useEffect } from 'react';
import BasePage from 'components/BasePage';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import './styles.scss';

const Parceiros: React.FC = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') || '1', 10));
  const [ParceirosMicroFrontEnd, setParceirosMicroFrontEnd] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    import('ParceirosMicroFrontEnd/App')
    .then((module) => {
      setParceirosMicroFrontEnd(() => module.default);
    })
    .catch((err) => {
    });
  }, [])

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page])

  return (
    <BasePage>
        <h1>Parceiros</h1>
        {ParceirosMicroFrontEnd ? <ParceirosMicroFrontEnd page={page} setPage={setPage}/> : <p>Carregando micro front end...</p>}
    </BasePage>
  );
};

export default Parceiros;