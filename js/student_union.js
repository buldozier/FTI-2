import {EventsObject} from './events_object.js';

const events = document.querySelector('.events');
const eventPush = document.querySelectorAll('.event');
const overlayEvent = document.querySelector('.inner_overlay');
const btnToTop = document.querySelector('.btn_to_top');

const eventsObj = new EventsObject();
class CreateEvent {
  constructor(id) {
    const innerOverlay = document.querySelector('.inner_overlay');

    createElement('overlay_event', innerOverlay);

    const overlayEvent = document.querySelector('.overlay_event');

    createElement('overlay_header', overlayEvent, eventsObj.event[0].header);
    createElement('overlay_photos', overlayEvent);

    createPhoto(eventsObj.event[0].img[0].url);
    createPhoto(eventsObj.event[0].img[1].url);

    createElement('close_btn', overlayEvent);
  }
}

eventPush.forEach(el => {
  el.addEventListener('click', () => {
    const isEvent = document.querySelector('.overlay_event');

    if (!isEvent) {
      new CreateEvent(0);
    } else {
      isEvent.remove();
    }

    if (overlayEvent.classList.contains('overlay_hidden')) {
      toggleOverlay(true);
    } else {
      toggleOverlay();
    }
  });
});

document.addEventListener('click', e => {
  const closeBtn = document.querySelector('.close_btn');
  const overlayContent = document.querySelector('.overlay_event');

  const inEvents = e.composedPath().includes(events);
  const inBondaries = e.composedPath().includes(overlayContent);
  const inCloseBtn = e.composedPath().includes(closeBtn);

  console.log(!inEvents);
  console.log(!inBondaries);
  console.log(!inCloseBtn);

  if (!inEvents && !overlayEvent.classList.contains('overlay_hidden') && !inCloseBtn && !inBondaries) {
    toggleOverlay();
  }

  if (inCloseBtn) {
    toggleOverlay();
  }
});

function createElement(className, addToElement, content) {
  const div = document.createElement('div');

  div.classList.add(className);

  if (content) {
    div.innerHTML = content;
  }

  addToElement.append(div);
}

function createPhoto(url) {
  const overlayPhotos = document.querySelector('.overlay_photos');
  const img = document.createElement('img');
  img.classList.add('overlay_photo');

  img.src = url;

  overlayPhotos.append(img);
}

function toggleOverlay(isHidden) {
  overlayEvent.classList.toggle('overlay_hidden');
  if (isHidden === true) {
    document.body.style.overflow = 'hidden';
    btnToTop.classList.toggle('btn_to_top_hidden');
  } else {
    const isEvent = document.querySelector('.overlay_event');
    document.body.style.overflow = '';
    isEvent.remove();
    btnToTop.classList.toggle('btn_to_top_hidden');
  }
}
