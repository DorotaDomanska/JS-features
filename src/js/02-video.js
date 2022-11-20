import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: '236203659',
  width: 640,
});

player.on('play', () => {
  console.log('played the video!');
});

player.getVideoTitle().then(title => {
  console.log('title:', title);
});

const savePlayerTime = ({ duration, percent, seconds }) => {
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(savePlayerTime, 1000));

const getLocalLastPlayedTime = () => {
  const defaultTime = 0;
  try {
    const locallySavedTime = localStorage.getItem('videoplayer-current-time');
    const parsedTime = JSON.parse(locallySavedTime);
    if (!locallySavedTime || parsedTime >= 571.52) return defaultTime;

    return parsedTime;
  } catch (error) {
    console.log({ error });
    return defaultTime;
  }
};

const resumePlayerOnLastPlayed = () => {
  const lastPlayedTime = getLocalLastPlayedTime();
  player.setCurrentTime(lastPlayedTime);
};

resumePlayerOnLastPlayed();
