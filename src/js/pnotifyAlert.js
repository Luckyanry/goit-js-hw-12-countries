import { alert, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const stackBottomModal = new Stack({
  dir1: 'down',
  modal: false,
  overlayClose: true,
  context: document.querySelector('.container'),
  // context: document.querySelector('.js_country'), // work but give error Cannot read property 'removeChild' of null
});

export default function notice() {
  alert({
    title: 'Too many matches found. Please enter a more specific query!',
    width: 'auto',
    type: 'error',
    remove: true,
    hide: true,
    delay: 500,
    sticker: false,
    stack: stackBottomModal,
  });
}
