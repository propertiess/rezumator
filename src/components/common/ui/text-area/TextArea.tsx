import { FC, forwardRef,HTMLAttributes } from 'react';

import styles from './TextArea.module.css';

type Props = HTMLAttributes<unknown>;

export const TextArea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea({ children, ...rest }, ref) {
    return (
      <textarea className={styles.wrapper} ref={ref} {...rest}>
        {children}
      </textarea>
    );
  }
);
