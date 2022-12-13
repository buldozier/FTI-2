import Events from './events_object.js';

// Variables

const events = document.querySelector('.events');
const eventPush = document.querySelectorAll('.event');
const innerOverlayEvents = document.querySelector('.inner_overlay');

const thumbCommissions = document.querySelectorAll('.thumb');
const commissions = document.querySelectorAll('.commission');

const photoBtn = document.querySelector('.show_photo');

// Scroll buttons
const eventsBtn = document.querySelector('.events_btn');
const teamBtn = document.querySelector('.team_btn');
const galleryBtn = document.querySelector('.gallery_btn');
const docsBtn = document.querySelector('.documents_btn');

const btnToTop = document.querySelector('.btn_to_top');

const eventsObj = new Events();

// Classes
class CreateEvent {
  constructor(currentEvent) {
    const innerOverlayEvents = document.querySelector('.inner_overlay');

    createElement('overlay_event', innerOverlayEvents);

    const overlayEvent = document.querySelector('.overlay_event');

    createElement('overlay_header', overlayEvent);

    const overlayHeader = document.querySelector('.overlay_header');

    createElement('overlay_header_header', overlayHeader, currentEvent.header);

    createElement('overlay_content', overlayEvent);

    const overlayContent = document.querySelector('.overlay_content');

    createElement('overlay_text', overlayContent, currentEvent.text);

    if (!!currentEvent.video) {
      createVideo(currentEvent.video);
    }

    createElement('overlay_photos', overlayContent);

    currentEvent.img.forEach(el => {
      createPhoto(el.url);
    });

    createElement('close_btn', overlayContent);
  }
}

// Scroll

eventsBtn.addEventListener('click', () => {
  const eventsPosition = document.querySelector('.events_header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, eventsPosition);
});

teamBtn.addEventListener('click', () => {
  const teamPosition = document.querySelector('.team_header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, teamPosition);
});

galleryBtn.addEventListener('click', () => {
  const galleryPosition = document.querySelector('.gallery_header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, galleryPosition);
});

docsBtn.addEventListener('click', () => {
  const docsPosition =
    document.querySelector('.information_header').getBoundingClientRect().y + window.pageYOffset - 50;
  window.scrollTo(0, docsPosition);
});

// Events

eventPush.forEach(el => {
  el.addEventListener('click', () => {
    const isEvent = document.querySelector('.overlay_event');

    if (!isEvent) {
      eventsObj.events.forEach(element => {
        if (element.header == el.dataset.project) {
          new CreateEvent(element);
        }
      });
    } else {
      isEvent.remove();
    }

    if (innerOverlayEvents.classList.contains('overlay_hidden')) {
      toggleOverlayEvents(true);
    } else {
      toggleOverlayEvents();
    }
  });
});

document.addEventListener('click', e => {
  const overlayContent = document.querySelector('.overlay_event');
  const closeBtn = document.querySelector('.close_btn');

  const inEvents = e.composedPath().includes(events);
  const inBondaries = e.composedPath().includes(overlayContent);
  const inCloseBtn = e.composedPath().includes(closeBtn);

  if (!inEvents && !innerOverlayEvents.classList.contains('overlay_hidden') && !inCloseBtn && !inBondaries) {
    toggleOverlayEvents();
  }

  if (inBondaries && inCloseBtn) {
    toggleOverlayEvents();
  }
});

// Commissions

thumbCommissions.forEach(el => {
  el.addEventListener('click', () => {
    if (!el.parentNode.classList.contains('thumb_open')) {
      commissions.forEach(element => {
        const elContent = element.querySelector('.content');

        elContent.classList.remove('content_open');

        element.classList.remove('thumb_open');

        elContent.style.maxHeight = null;
      });
    }

    const elContent = el.parentNode.querySelector('.content');

    elContent.classList.toggle('content_open');
    el.parentNode.classList.toggle('thumb_open');

    if (elContent.style.maxHeight) {
      elContent.style.maxHeight = null;
    } else {
      elContent.style.maxHeight = elContent.scrollHeight + 'px';
    }
  });
});

// Gallery

photoBtn.addEventListener('click', () => {
  const hiddenPhotos = document.querySelectorAll('.hidden_photo');
  hiddenPhotos.forEach(el => {
    el.classList.remove('hidden_photo');
  });
  photoBtn.style.display = 'none';
});

// Functions

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

function toggleOverlayEvents(isHidden) {
  innerOverlayEvents.classList.toggle('overlay_hidden');
  if (isHidden === true) {
    document.body.style.overflow = 'hidden';
    btnToTop.classList.toggle('btn_to_top_hidden');
  } else {
    document.body.style.overflow = '';
    btnToTop.classList.toggle('btn_to_top_hidden');

    const isEvent = document.querySelector('.overlay_event');
    isEvent.remove();
  }
}
