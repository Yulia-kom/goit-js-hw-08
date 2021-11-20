
import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.getElementById("vimeo-player-x");

const player = new Player(iframe);

const onPlay = (time) => localStorage.setItem("videoplayer-current-time", time.seconds);

const currentTimeOfVideo = localStorage.getItem("videoplayer-current-time");

(currentTimeOfVideo) ? player.setCurrentTime(currentTimeOfVideo) : null;

player.on('timeupdate', throttle(onPlay, 1000));

localStorage.clear();