import {
  CharacterClass, createClass, removeClass, updateClass,
} from '@data/redux/slices/classes.slice';
import { store } from '@data/redux/store';

const create = (data: Omit<CharacterClass, 'id'>) => {
  store.dispatch(
    createClass(
      {
        ...data,
        id: crypto.randomUUID(),
      },
    ),
  );
};

const remove = (id: string) => {
  store.dispatch(removeClass(id));
};

const update = (changes: Omit<CharacterClass, 'id'>, id: string) => {
  store.dispatch(
    updateClass({
      id,
      changes,
    }),
  );
};

const ClassService = {
  create,
  remove,
  update,
};

export default ClassService;
