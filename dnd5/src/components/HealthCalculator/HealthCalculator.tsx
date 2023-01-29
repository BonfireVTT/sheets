import { updateGeneral } from '@data/redux/slices/general.slice';
import { store } from '@data/redux/store';
import React, { useEffect } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import S from './HealthCalculator.styles';

interface Props {
  parentFocused: boolean;
}

const HealthCalculator: React.FC<Props> = ({ parentFocused }) => {
  const containerRef = React.useRef(null);
  const numberRef = React.useRef<HTMLInputElement>(null);

  const [active, setActive] = React.useState(false);
  const [displayed, setDisplayed] = React.useState(false);

  useOnClickOutside(containerRef, () => setActive(false));

  const adjustHealth = (isSubstracted = false) => {
    const value = numberRef.current?.value;
    const currentHp = parseInt(store.getState().general.hp_current, 10);

    if (value === undefined || Number.isNaN(parseInt(value, 10))) {
      return;
    }

    const modifier = isSubstracted ? +value * -1 : +value;

    store.dispatch(
      updateGeneral({ hp_current: (currentHp + modifier).toString() }),
    );

    setActive(false);
  };

  useEffect(() => {
    setDisplayed(parentFocused || active);
  }, [parentFocused, active]);

  if (!displayed) return null;

  return (
    <S.Container ref={containerRef}>
      <S.Input
        min={0}
        placeholder="0"
        onFocus={() => setActive(true)}
        ref={numberRef}
        type="number"
        aria-label="the health adjustement value"
      />
      <S.Button
        aria-label="treat the value as damage"
        isDamage
        onClick={() => adjustHealth(true)}
      >
        -
      </S.Button>
      <S.Button
        aria-label="treat the value as heal"
        onClick={() => adjustHealth()}
      >
        +
      </S.Button>
    </S.Container>
  );
};

export default HealthCalculator;
