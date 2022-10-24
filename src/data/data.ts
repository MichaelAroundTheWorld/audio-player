import { MenuButton, CardType } from './data.module';
import eminem from '../assets/avatars/rap/eminem-beautiful.jpg';
import macan from '../assets/avatars/rap/macan.jpg';

export const MenuButtonList: MenuButton[] = [
  {
    id: 1,
    path: '/Playlist',
    title: 'My playlist',
  },
  {
    id: 2,
    path: '/RecentlyPlayed',
    title: 'Recently played',
  },
  {
    id: 3,
    path: '/Favourite',
    title: 'Favourite songs',
  },
];

export const PlayListItems: MenuButton[] = [
  {
    id: 4,
    path: '/Playlist/Rap',
    title: 'Rap Playlist',
  },
  {
    id: 5,
    path: '/Playlist/Chill',
    title: 'Chill Playlist',
  },
  {
    id: 6,
    path: '/Playlist/Rock',
    title: 'Rock Playlist',
  },
];

export const RapPlaylistData: CardType[] = [
  {
    id: 1,
    imgSrc: eminem,
    songPath: '../assets/songs/eminem-beautiful.mp3',
    title: 'Beautiful',
    artist: 'Eminem',
    isFavourite: false,
    isAdded: false,
  },
  {
    id: 2,
    imgSrc: macan,
    songPath: '../assets/songs/eminem-beautiful.mp3',
    title: 'Останься образом',
    artist: 'MACAN',
    isFavourite: false,
    isAdded: false,
  },
];

export const FavouriteData: CardType[] = [];
export const AddedTracks: CardType[] = [];
