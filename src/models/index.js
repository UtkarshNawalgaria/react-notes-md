// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notebook, Note } = initSchema(schema);

export {
  Notebook,
  Note
};