import { FC, useState } from 'react';
import cx from 'classnames';
import styles from './MenuItem.module.scss';
import HeadsetIcon from '@mui/icons-material/Headset';
import { MenuButton } from '../../data/data.module';

interface MenuItemProps {
  text: string;
  buttonInfo: MenuButton;
  activeMenuItemId: number | undefined;
  setActiveMenuItemId: (id: number) => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  text,
  buttonInfo,
  activeMenuItemId,
  setActiveMenuItemId,
}) => {
  const cxClass = cx(styles.wrapper, { [styles.active]: activeMenuItemId === buttonInfo.id });
  return (
    <div className={cxClass}>
      <HeadsetIcon className={styles.icon} />
      <button
        onClick={() => {
          setActiveMenuItemId(buttonInfo.id);
          console.log(activeMenuItemId);
        }}
        key={buttonInfo.id}
        value={buttonInfo.id}
        className={styles.listItem}
      >
        {text}
      </button>
    </div>
  );
};
