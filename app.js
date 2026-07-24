/* Mobile Lab Project — static interactivity (no dependencies, works via file://) */
(function () {
  'use strict';

  /* ---- mobile drawer ---- */
  var scrim = document.querySelector('.scrim');
  var burger = document.querySelector('.hamburger');
  var closeBtn = document.querySelector('.drawer .close');
  function openDrawer() { if (scrim) scrim.hidden = false; }
  function closeDrawer() { if (scrim) scrim.hidden = true; }
  if (burger) burger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim) scrim.addEventListener('click', function (e) { if (e.target === scrim) closeDrawer(); });

  /* ---- News / Press: year pager + scroll-focus fade ---- */
  var pager = document.querySelector('.pager');
  var feed = pager ? pager.closest('.feed') : null;
  var articles = feed ? feed.querySelectorAll('article[data-year]') : null;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Post nearest the middle of the screen stays fully visible; ones scrolled
  // away fade down gently (to 0.3). Skipped when the user prefers reduced motion.
  function updateFade() {
    if (!articles || reduce) return;
    var vh = window.innerHeight, mid = vh / 2;
    for (var i = 0; i < articles.length; i++) {
      var a = articles[i];
      if (a.hidden) continue;
      var r = a.getBoundingClientRect();
      var dist = (r.top <= mid && r.bottom >= mid)
        ? 0
        : Math.min(Math.abs(r.top - mid), Math.abs(r.bottom - mid));
      var f = Math.min(1, dist / (vh * 0.42));
      a.style.opacity = (1 - f * 0.82).toFixed(3);
    }
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { updateFade(); ticking = false; });
  }

  if (pager && articles && articles.length) {
    var years = Array.prototype.map.call(pager.querySelectorAll('.yr'), function (b) { return b.dataset.year; });

    function filterYear(year) {
      var first = null;
      articles.forEach(function (art) {
        var match = art.dataset.year === year;
        art.hidden = !match;
        art.classList.remove('first');
        art.style.opacity = '';
        if (match && !first) first = art;
      });
      if (first) first.classList.add('first');
      pager.querySelectorAll('.yr').forEach(function (b) {
        b.classList.toggle('active', b.dataset.year === year);
      });
      window.scrollTo(0, 0);
      updateFade();
    }
    pager.querySelectorAll('.yr').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); filterYear(b.dataset.year); });
    });
    if (years.length) filterYear(years[0]); // buttons are newest-first

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateFade();
  }
})();
