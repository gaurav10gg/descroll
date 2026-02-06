function detox() {
  /* ================= INSTAGRAM ================= */

  // Hide Reels tab
  document.querySelectorAll('a').forEach(link => {
    if (link.href && link.href.includes('/reels')) {
      link.style.display = 'none';
    }
  });

  // Hide Instagram reel videos
  document.querySelectorAll('video').forEach(video => {
    const post = video.closest('article');
    if (post) {
      post.style.display = 'none';
    }
  });

 /* ================= YOUTUBE ================= */

/* 1️⃣ Hide Shorts shelf on homepage */
document.querySelectorAll(
  'ytd-rich-section-renderer, ytd-reel-shelf-renderer'
).forEach(el => {
  el.style.display = 'none';
});

/* 2️⃣ Hide Shorts button (EXPANDED sidebar) */
document.querySelectorAll('tp-yt-paper-item').forEach(item => {
  const text = item.innerText?.trim();
  if (text === 'Shorts') {
    item.style.display = 'none';
  }
});

/* 3️⃣ Hide Shorts button (MINI sidebar) */
document.querySelectorAll('a[href="/shorts/"]').forEach(link => {
  link.style.display = 'none';
});

/* 4️⃣ Hide Shorts videos everywhere */
document.querySelectorAll('ytd-thumbnail a').forEach(a => {
  if (a.href && a.href.includes('/shorts')) {
    const container =
      a.closest('ytd-rich-item-renderer') ||
      a.closest('ytd-video-renderer') ||
      a.closest('ytd-grid-video-renderer');

    if (container) {
      container.style.display = 'none';
    }
  }
});
}
/* =============== INITIAL RUN =============== */
detox();

/* =============== YOUTUBE SPA NAVIGATION =============== */
window.addEventListener('yt-navigate-finish', detox);

/* =============== DOM OBSERVER (BACKUP) =============== */
const observer = new MutationObserver(detox);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
