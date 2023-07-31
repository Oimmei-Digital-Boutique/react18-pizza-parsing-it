import React, {ReactElement, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Qs from 'qs';
import {Pizza} from '../models/Pizza';
import {isPizza} from '../helpers/pizzaHelper';

// La pizza che ci si aspetta di ricevere dalla query string.
const pizzaToRead: Pizza = {
  id: 1,
  name: 'Margherita',
  description: 'La classica!',
};

const PizzaReader = (): ReactElement | null => {
  const [searchParams] = useSearchParams();

  // La pizza che è stata recuperata dalla query string.
  const [pizza, setPizza] =
    useState<Pizza | null>(null);

  useEffect(() => {
    // Parsing della pizza dalla query string.
    const pizzaRaw = Qs.parse(searchParams.toString());

    // Se l'oggetto è una pizza, lo si salva nello stato.
    if (isPizza(pizzaRaw)) {
      setPizza(pizzaRaw);
    }
  }, [searchParams]);

  // I dati della pizza vengono mostrati all'utente, se presenti.
  return (
    <div className={'querystring-reader'}>
      <h1>PizzaReader</h1>
      {pizza !== null ? (
        <div className={'pizza-info'}>
          <div>
            <div className={'bold'}>ID</div>
            <div>{pizza.id}</div>
          </div>
          <div>
            <div className={'bold'}>Nome</div>
            <div>{pizza.name}</div>
          </div>
          <div>
            <div className={'bold'}>Descrizione</div>
            <div>{pizza.description}</div>
          </div>
          <div>
            {/* Se la pizza è una margherita, si mostra l'informazione, in base all'ID. */}
            <div className={'bold'}>Margherita</div>
            <div>{pizza.id === pizzaToRead.id ? 'Sì' : 'No'}</div>
          </div>
        </div>
      ) : (
        'Nessuna pizza in query string.'
      )}
    </div>
  );
};

export default PizzaReader;
