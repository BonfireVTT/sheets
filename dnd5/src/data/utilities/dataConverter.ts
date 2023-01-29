/* eslint-disable import/prefer-default-export */
import { localSlices } from '@data/meta.data';
import { RootState } from '@data/redux/store';

const sliceToPlainJson = (key: string, value: Record<string, any>) => {
  // if the slice is a RTK entity: only get the entities values
  if (
    Object.prototype.hasOwnProperty.call(value, 'ids')
    && Object.prototype.hasOwnProperty.call(value, 'entities')
  ) {
    return { [key]: Object.values(value.entities) };
  }

  return { [key]: value };
};

/**
 * Prepares Redux store data to be transmitted to the remote storage
 */
export const reduxToRemote = (data: RootState) => {
  const entries = Object.entries(data);
  const result = entries
    .filter(([key]) => !localSlices.includes(key))
    .map(([key, value]) => sliceToPlainJson(key, value))
    .reduce((res, item) => {
      const key = Object.keys(item)[0];
      // eslint-disable-next-line no-param-reassign
      res[key] = item[key];
      return res;
    }, {});

  return result;
};
