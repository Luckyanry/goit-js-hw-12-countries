import { alert, Stack } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const stackBottomModal = new Stack({
  dir1: 'down',
  modal: false,
  firstpos1: 0,
  spacing1: 0,
  overlayClose: true,
  context: document.querySelector('.container'),
});

function notice() {
  alert({
    title: 'Too many matches found. Please enter a more specific query!',
    width: 'auto',
    height: '25',
    type: 'error',
    stack: stackBottomModal,
  });
}

// console.log('notice', notice());
