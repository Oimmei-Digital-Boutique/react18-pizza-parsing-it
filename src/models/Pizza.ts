import * as yup from 'yup';

// Interfaccia per la struttura dati pizza.
export interface Pizza {
  id: number

  name: string

  description?: string
}

// Schema Yup per la struttura dati pizza.
export const pizzaSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required(),
  description: yup.string(),
});
