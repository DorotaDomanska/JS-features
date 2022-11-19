import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('handstick', {
  id: '236203659',
  width: 640,
});

player.on('play', () => {
  console.log('played the video!');
});

player.getVideoTitle().then(title => {
  console.log('title:', title);
});

// const savePlayerTime = ({ duration, percent, seconds }) => {
//   console.log(seconds);
//   localStorage.setItem('videoplayer-current-time', seconds);
// };

// player.on('timeupdate', savePlayerTime);
