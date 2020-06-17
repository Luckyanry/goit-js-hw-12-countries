import { alert, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const stackBottomModal = new Stack({
  dir1: 'down',
  modal: false,
  firstpos1: 0,
  spacing1: 0,
  overlayClose: false,
  context: document.querySelector('.container'),
});

export default function notice() {
  alert({
    title: 'Too many matches found. Please enter a more specific query!',
    width: 'auto',
    type: 'error',
    stack: stackBottomModal,
  });
}
