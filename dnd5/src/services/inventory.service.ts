import {
  createItem, Item, itemsSelectors, removeItem, updateItem,
} from '@data/redux/slices/items.slice';
import { store } from '@data/redux/store';

const create = (data: Omit<Item, 'id'>) => {
  const id = crypto.randomUUID();

  store.dispatch(
    createItem(
      {
        ...data,
        id,
      },
    ),
  );

  return id;
};

const remove = (id: string) => {
  store.dispatch(removeItem(id));
};

const update = (changes: Omit<Item, 'id'>, id: string) => {
  store.dispatch(
    updateItem({
      id,
      changes,
    }),
  );
};

const use = (id: string) => {
  const item = itemsSelectors.selectById(store.getState(), id);
  if (!item || item.qty === 0) return;

  store.dispatch(
    updateItem({
      id,
      changes: { qty: item.qty - 1 },
    }),
  );
};

const InventoryService = {
  create,
  remove,
  update,
  use,
};

export default InventoryService;
