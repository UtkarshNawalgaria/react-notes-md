import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Notebook {
  readonly id: string;
  readonly title?: string;
  readonly notes?: (Note | null)[];
  readonly createdAt: string;
  constructor(init: ModelInit<Notebook>);
  static copyOf(source: Notebook, mutator: (draft: MutableModel<Notebook>) => MutableModel<Notebook> | void): Notebook;
}

export declare class Note {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly createdAt: string;
  readonly notebook?: Notebook;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}