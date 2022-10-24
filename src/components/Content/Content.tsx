import { FC, PropsWithChildren } from 'react';
import styles from './Content.module.scss';

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};
