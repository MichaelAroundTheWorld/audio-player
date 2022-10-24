import { FC, PropsWithChildren } from 'react';
import styles from './Sidebar.module.scss';

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>;
};
