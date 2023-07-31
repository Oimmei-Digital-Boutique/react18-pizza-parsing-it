import React, {ReactElement, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Qs from 'qs';
import {Pizza, pizzaSchema} from '../models/Pizza';

// La pizza che ci si aspetta di ricevere dalla query string.
const pizzaToRead: Pizza = {
  id: 1,
  name: 'Margherita',
  description: 'La classica!',
};

const PizzaTypedReader = (): ReactElement | null => {
  const [searchParams] = useSearchParams();

  // La pizza che è stata recuperata dalla query string.
  const [pizza, setPizza] =
    useState<Pizza | null>(null);

  useEffect(() => {
    // Parsing della pizza dalla query string.
    const pizzaRaw = Qs.parse(searchParams.toString());

    // Si usa Yup.cast per tentare di fare il parsing dell'oggetto.
    try {
      const newPizza = pizzaSchema.cast(pizzaRaw) as Pizza;

      // L'oggetto è una pizza.
      setPizza(newPizza);
    } catch (error) {
      // L'oggetto non è una pizza.
      setPizza(null);
    }
  }, [searchParams]);

  // I dati della pizza vengono mostrati all'utente, se presenti.
  return (
    <div className={'querystring-reader'}>
      <h1>PizzaTypedReader</h1>
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

export default PizzaTypedReader;
