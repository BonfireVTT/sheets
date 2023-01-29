import Coin from '@components/Coin';
import Info from '@components/Info';
import Items from '@components/Items';
import { getInventoryWeight } from '@data/redux/selectors/items.selectors';
import { RootState } from '@data/redux/store';
import Button from '@shared/Button.styles';
import { ListingHeader } from '@shared/Listing.styles';
import React from 'react';
import { useSelector } from 'react-redux';
import InventoryService from '../../services/inventory.service';
import S from './Inventory.styles';

const Inventory: React.FC = () => {
  const totalWeight = useSelector((state: RootState) => getInventoryWeight(state));

  return (
    <S.Container>
      <S.Overview>
        <div className="inline-flex items-center lo-x-sm">
          <Coin iconLetter="C" color="#a66c06" qty={10} name="Copper" />
          <Coin iconLetter="S" color="#7c7b7b" qty={10} name="Silver" />
          <Coin iconLetter="E" color="#5771cf" qty={10} name="Electrum" />
          <Coin iconLetter="G" color="#c89c3d" qty={10} name="Gold" />
          <Coin iconLetter="P" color="#b5b5b5" qty={10} name="Platinum" />
        </div>
        <div>
          <Info
            icon="icons/weight.svg"
            text={`${totalWeight.toFixed(2)} lbs`}
            tooltip="Total inventory weight"
          />
          <Button
            className="ml-2"
            onClick={() => InventoryService.create({
              cost: 0,
              name: '',
              qty: 1,
              weight: 0,
            })}
          >Add an item
          </Button>
        </div>
      </S.Overview>
      <ListingHeader className="inline-flex">
        <div className="w-6/12">Name</div>
        <div className="w-1/12 text-center" arial-label="Quantity">Qty</div>
        <div className="w-1/12 text-center">Weight</div>
        <div className="w-1/12 text-center">Cost</div>
      </ListingHeader>
      <Items />
    </S.Container>
  );
};

export default Inventory;
