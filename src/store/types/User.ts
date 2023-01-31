import { CardType } from '../../data/data.module';

export interface UserState {
  items: CardType[];
}

// указание типов вместо обычных констант по типу :
// const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export enum userActionTypes {
  ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES',
  REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE',
}

interface addToFavouriteAction {
  type: userActionTypes.ADD_TO_FAVOURITES;
  payload: CardType;
}

interface removeFromFavouriteAction {
  type: userActionTypes.REMOVE_FROM_FAVOURITE;
  payload: CardType;
}

export type UserActions = addToFavouriteAction | removeFromFavouriteAction;
