import { FC } from 'react';
import classNames from 'classnames';
import { UseFieldArrayRemove } from 'react-hook-form';
import { Button } from '@/components/common/ui/button';
import styles from './AddRemoveButtons.module.css';

type Props = {
  length: number;
  insert: () => void;
  remove: UseFieldArrayRemove;
};

export const AddRemoveButtons: FC<Props> = ({ length, insert, remove }) => {
  const style = classNames(styles.wrapper, {
    'mt-5': length
  });

  return (
    <div className={style}>
      <Button onClick={insert}>Добавить</Button>
      {!!length && <Button onClick={() => remove(length - 1)}>Удалить</Button>}
    </div>
  );
};
