import { FC, useEffect, useState } from 'react';
import styles from './Favourite.module.scss';
import { FavouriteData } from '../../../data/data';
import { Card } from '../../../components/Card/Card';
import { CardType } from '../../../data/data.module';
import { useDispatch, useSelector } from 'react-redux';

export const Favourite: FC = () => {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state);
  console.log(favList);

  return (
    <>
      {FavouriteData.map((item) => (
        <Card item={item} />
      ))}
    </>
  );
};
