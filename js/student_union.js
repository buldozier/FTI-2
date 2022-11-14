import {EventsObject} from './events_object.js';

const events = document.querySelector('.events');
const eventPush = document.querySelectorAll('.event');
const innerOverlay = document.querySelector('.inner_overlay');
const btnToTop = document.querySelector('.btn_to_top');

const eventsObj = new EventsObject();
class CreateEvent {
  constructor(id) {
    const innerOverlay = document.querySelector('.inner_overlay');

    createElement('overlay_event', innerOverlay);

    const overlayEvent = document.querySelector('.overlay_event');

    createElement('overlay_header', overlayEvent);

    const overlayHeader = document.querySelector('.overlay_header');

    createElement('overlay_header_header', overlayHeader, eventsObj.event[id].header);

    createElement('overlay_content', overlayEvent);

    const overlayContent = document.querySelector('.overlay_content');

    createElement('overlay_text', overlayContent, eventsObj.event[id].text);

    createVideo('https://vk.com/video_ext.php?oid=-8864093&id=456239089&hash=660512d2b7f0f555&hd4');

    createElement('overlay_photos', overlayContent);

    createPhoto(eventsObj.event[id].img[0].url);
    createPhoto(eventsObj.event[id].img[1].url);

    createElement('close_btn', overlayContent);
  }
}

eventPush.forEach(el => {
  el.addEventListener('click', () => {
    const isEvent = document.querySelector('.overlay_event');
    
    if (!isEvent) {
      new CreateEvent(el.dataset.project);
    } else {
      isEvent.remove();
    }

    if (innerOverlay.classList.contains('overlay_hidden')) {
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

  if (!inEvents && !innerOverlay.classList.contains('overlay_hidden') && !inCloseBtn && !inBondaries) {
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

function createVideo(url) {
  const overlayContent = document.querySelector('.overlay_content');
  const iframe = document.createElement('iframe');

  iframe.classList.add('overlay_video');

  iframe.src = url;
  iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture;';

  overlayContent.append(iframe);
}

function toggleOverlay(isHidden) {
  innerOverlay.classList.toggle('overlay_hidden');
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
