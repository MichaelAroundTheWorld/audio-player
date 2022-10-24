import { FC, useState } from 'react';
import styles from './SidebarItems.module.scss';
import { MenuButtonList } from '../../data/data';
import { Link } from 'react-router-dom';
import { PlayListItems } from '../../data/data';
import { MenuItem } from '../MenuItem/MenuItem';

export const SidebarItems: FC = () => {
  const [activeMenuItemId, setActiveMenuItemId] = useState<number>(0);
  return (
    <>
      <h2 className={styles.heading}>My Music</h2>
      {MenuButtonList.map((button) => (
        <Link to={button.path}>
          <MenuItem
            activeMenuItemId={activeMenuItemId}
            setActiveMenuItemId={setActiveMenuItemId}
            buttonInfo={button}
            text={button.title}
          />
        </Link>
      ))}
      <h2 className={styles.heading}>Playlists</h2>
      {PlayListItems.map((item) => (
        <Link to={item.path}>
          <MenuItem
            activeMenuItemId={activeMenuItemId}
            setActiveMenuItemId={setActiveMenuItemId}
            buttonInfo={item}
            text={item.title}
          />
        </Link>
      ))}
    </>
  );
};
