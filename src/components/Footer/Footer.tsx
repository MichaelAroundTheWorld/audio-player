import { FC, PropsWithChildren } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC<PropsWithChildren> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};
