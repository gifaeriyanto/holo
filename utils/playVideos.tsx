import { GUIDE_VIDEO, LOCALSTORAGE_KEYS, WELCOME_VIDEO } from 'utils/variables';

export const playWelcomeVideo = () => {
  localStorage.setItem(LOCALSTORAGE_KEYS.playing, WELCOME_VIDEO);
};

export const playGuideVideo = () => {
  localStorage.setItem(LOCALSTORAGE_KEYS.playing, GUIDE_VIDEO);
};

export const playVideo = (url: string) => {
  localStorage.setItem(LOCALSTORAGE_KEYS.playing, url);
};

export const getVideoPlaying = () => {
  return localStorage.getItem(LOCALSTORAGE_KEYS.playing);
};
