import { FC, useEffect, useState } from 'react';
import styles from './ChillPlaylist.module.scss';
import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import Beautiful from '../../../assets/songs/eminem-beautiful.mp3';
import { Card } from '../../../components/Card/Card';
import Image from '../../../assets/avatars/eminem-beautiful.jpg';
import { blue } from '@mui/material/colors';

export const ChillPlaylist: FC = () => {
  return (
    <div>
      {/* <Card imgSrc={Image} title="Beautiful" artist="Eminem" /> */}
      {/* <audio src={Beautiful} controls /> */}
    </div>
  );
};
