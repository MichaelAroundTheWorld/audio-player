import { FC, useEffect, useState } from 'react';
import styles from './Favourite.module.scss';
import { FavouriteData } from '../../../data/data';
import { Card } from '../../../components/Card/Card';
import { CardType } from '../../../data/data.module';

export const Favourite: FC = () => {
  const [favourite, setFavourite] = useState<CardType[]>([]);

  return (
    <>
      {FavouriteData.map((item) => (
        <Card favourite={favourite} setFavourite={setFavourite} item={item} />
      ))}
    </>
  );
};
