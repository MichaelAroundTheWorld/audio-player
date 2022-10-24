import { FC } from 'react';
import styles from './Playlist.module.scss';
import { AddedTracks } from '../../../data/data';
import { Card } from '../../../components/Card/Card';

export const Playlist: FC = () => {
  return (
    <>
      {AddedTracks.map((item) => (
        <Card item={item} />
      ))}
    </>
  );
};
