import * as Yup from 'yup';
import { itemsSelectors } from '@data/redux/slices/items.slice';
import Button from '@shared/Button.styles';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@data/redux/store';
import InventoryService from '../../services/inventory.service';
import S from './Item.styles';

interface Props {
  itemId: string;
}

const ItemSchema = Yup.object().shape({
  cost: Yup.number(),
  name: Yup.string().required('Required').max(256),
  qty: Yup.number().min(1),
  weight: Yup.number(),
});

const Item: React.FC<Props> = ({ itemId }) => {
  const item = useSelector((state: RootState) => itemsSelectors.selectById(state, itemId));
  if (!item) return null;

  const {
    id, name, qty, weight, cost,
  } = item;

  const [editing, setEditing] = React.useState(false);
  const nameInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!editing) return;
    nameInputRef.current?.focus();
  }, [editing]);

  return (
    <Formik
      initialValues={{
        name,
        qty,
        weight,
        cost,
      }}
      enableReinitialize
      validationSchema={ItemSchema}
      onSubmit={(data) => {
        InventoryService.update(data, id);
        setEditing(false);
      }}
    >
      {
        ({ touched, errors }) => (
          <S.Container isEditing={editing}>
            <S.Input
              className="w-6/12"
              disabled={!editing}
              name="name"
              placeholder="Name"
              ref={nameInputRef}
              hasErrors={touched.name && errors.name}
            />
            <S.Input
              className="w-1/12 text-center"
              disabled={!editing}
              name="qty"
              placeholder="–"
              type="number"
              hasErrors={touched.qty && errors.qty}
            />
            <S.Input
              className="w-1/12 text-center"
              disabled={!editing}
              name="weight"
              placeholder="–"
              type="number"
            />
            <S.Input
              className="w-1/12 text-center"
              disabled={!editing}
              name="cost"
              placeholder="–"
              type="number"
            />
            <div className="w-3/12 text-right">
              {
            editing ? (
              <Button type="submit" appearance="ghost">Save</Button>
            )
              : (
                <>
                  <Button appearance="ghost" type="button" onClick={() => InventoryService.use(id)} disabled={qty < 1}>Use</Button>
                  <Button appearance="ghost" type="button" onClick={() => setEditing(true)}>Edit</Button>
                  <Button appearance="ghost" type="button" onClick={() => InventoryService.remove(id)}>Remove</Button>
                </>
              )
          }
            </div>
          </S.Container>
        )
      }
    </Formik>
  );
};

export default Item;
