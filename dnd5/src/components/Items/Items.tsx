import React from 'react';

import Item from '@components/Item';
import { RootState } from '@data/redux/store';
import { useSelector } from 'react-redux';
import { itemsSelectors } from '@data/redux/slices/items.slice';

const Items: React.FC = () => {
  const items = useSelector((state: RootState) => itemsSelectors.selectAll(state));

  return (
    <>
      { items.map((item) => <Item key={item.id} itemId={item.id} />) }
    </>
  );
};

export default Items;
