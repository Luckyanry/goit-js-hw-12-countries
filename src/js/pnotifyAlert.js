import { alert, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const stackBottomModal = new Stack({
  dir1: 'down',
  modal: true,
  firstpos1: 0,
  spacing1: 0,
  overlayClose: true,
  context: document.querySelector('.js_country'),
});

export default function notice() {
  alert({
    title: 'Too many matches found. Please enter a more specific query!',
    width: 'auto',
    type: 'error',
    stack: stackBottomModal,
  });
}
