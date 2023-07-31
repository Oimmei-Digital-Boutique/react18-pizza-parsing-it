import React, {ReactElement} from 'react';
import {useSearchParams} from 'react-router-dom';
import Qs from 'qs';
import {Pizza} from '../models/Pizza';

// La nostra pizza, serializzata per la query string.
const pizzaToWrite: Pizza = {
  id: 1,
  name: 'Margherita',
  description: 'La classica!',
};

const PizzaWriter = (): ReactElement => {
  // Metodo per modificare la query string.
  const [, setSearchParams] = useSearchParams();

  // Al click, la pizza viene salvata in query string.
  const savePizzaInQueryString = (): void => {
    setSearchParams(Qs.stringify(pizzaToWrite));
  }

  return (
    <div className={'querystring-writer'}>
      <h1>PizzaWriter</h1>
      <button onClick={savePizzaInQueryString}>
        Salva pizza in query string
      </button>
    </div>
  );
}

export default PizzaWriter;
