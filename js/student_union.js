const eventPush = document.querySelector('.event');
const overlayEvent = document.querySelector('.inner_overlay');
const overlayContent = document.querySelector('.overlay_event');
const closeOverlayBtn = document.querySelector('.close_overlay_btn');

document.addEventListener('click', e => {
  const inEvents = e.composedPath().includes(eventPush);
  const inBondaries = e.composedPath().includes(overlayContent);
  const inSidebarBtn = e.composedPath().includes(closeOverlayBtn);
  console.log(!overlayEvent.classList.contains('overlay_hidden'));
  console.log(!inSidebarBtn);
  console.log(!inBondaries);

  if (!inEvents && !overlayEvent.classList.contains('overlay_hidden') && !inSidebarBtn && !inBondaries) {
    toggleOverlay();
    document.body.style = '';
  }
});

eventPush.addEventListener('click', () => {
  if (overlayEvent.classList.contains('overlay_hidden')) {
    toggleOverlay();
    document.body.style.overflow = 'hidden';
  } else {
    toggleOverlay();
    document.body.style.overflow = '';
  }
});

closeOverlayBtn.addEventListener('click', () => {
  toggleOverlay();
  document.body.style.overflow = '';
});

const toggleOverlay = () => {
  overlayEvent.classList.toggle('overlay_hidden');
};
