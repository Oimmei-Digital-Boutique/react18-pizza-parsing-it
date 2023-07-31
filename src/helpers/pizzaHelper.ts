import {Pizza} from '../models/Pizza';

// Type guard per verificare che un oggetto qualsiasi sia una pizza.
export const isPizza = (obj: any): obj is Pizza => {
  return 'id' in obj && 'name' in obj && 'description' in obj;
}
