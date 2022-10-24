import { FC } from 'react';
import styles from './RapPlaylist.module.scss';
import { RapPlaylistData } from '../../../data/data';
import { Card } from '../../../components/Card/Card';

export const RapPlaylist: FC = () => {
  return (
    <>
      {RapPlaylistData.map((item) => (
        <Card item={item} />
      ))}
    </>
  );
};
