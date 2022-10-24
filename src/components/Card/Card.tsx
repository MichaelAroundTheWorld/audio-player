import classNames from 'classnames';
import { FC, useState, useEffect } from 'react';
import styles from './Card.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { FavouriteData, AddedTracks } from '../../data/data';
import { CardType } from '../../data/data.module';

interface CardProps {
  item: CardType;
}

export const Card: FC<CardProps> = ({ item }) => {
  const [like, setLike] = useState(false);
  const [add, setAdded] = useState(false);

  const handleFavClick = (item: CardType) => {
    item.isFavourite = true;
  };

  const handleRemoveFav = (item: CardType) => {
    // setLike(false);
    // item.isFavourite = false;
    // const corresponds = FavouriteData.find((elem) => elem.id === item.id);
    // if (corresponds) {
    //   corresponds.isFavourite = item.isFavourite;
    //   const filter = FavouriteData.filter((val) => val.isFavourite === true);
    //   FavouriteData.splice(0, FavouriteData.length);
    //   filter.map((item) => {
    //     FavouriteData.push(item);
    //   });
    //   console.log('filter', FavouriteData);
    // }
  };

  // useEffect(() => {
  //   FavouriteData.map((item) => {
  //     return console.log(item.isFavourite);
  //   });
  // }, [like]);

  const handleAddSongClick = (item: CardType) => {
    setAdded(true);
    const isAdded = AddedTracks.find((elem) => elem.id === item.id);
    if (!isAdded) {
      AddedTracks.push(item);
      item.isAdded = true;
    }
  };

  return (
    <div className={styles.card}>
      <img src={item.imgSrc} alt="song" />
      <section className={styles.songInfo}>
        <p className={styles.name}>{item.title}</p>
        <p className={styles.artist}>{item.artist}</p>
      </section>
      <div className={styles.likeButton}>
        {like && item.isFavourite ? (
          <FavoriteIcon onClick={() => handleRemoveFav(item)} />
        ) : (
          <FavoriteBorderIcon onClick={() => handleFavClick(item)} />
        )}
      </div>
      <div className={styles.addButton}>
        {item.isAdded ? (
          <CheckIcon onClick={() => setAdded(false)} />
        ) : (
          <AddIcon onClick={() => handleAddSongClick(item)} />
        )}
      </div>
    </div>
  );
};
