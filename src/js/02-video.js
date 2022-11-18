import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 'vimeo-player',
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});

const savePlayerTime = ({ duration, percent, seconds }) => {
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', savePlayerTime);
