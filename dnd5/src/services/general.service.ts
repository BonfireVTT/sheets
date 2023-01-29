import { GeneralState, updateGeneral } from '@data/redux/slices/general.slice';
import { store } from '@data/redux/store';

const update = (key: keyof GeneralState, value: any) => {
  store.dispatch(
    updateGeneral({ [key]: value }),
  );
};

const GeneralService = {
  update,
};

export default GeneralService;
