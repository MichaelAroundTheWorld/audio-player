export interface MenuButton {
  id: number;
  path: string;
  title: string;
}

export interface CardType {
  id: number;
  imgSrc: string;
  songPath: string;
  title: string;
  artist: string;
  isFavourite: boolean;
  isAdded: boolean;
}
