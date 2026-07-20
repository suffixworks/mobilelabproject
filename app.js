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

  /* ---- year pager (News / Press) — filters articles within the page ---- */
  var pager = document.querySelector('.pager');
  if (pager) {
    var feed = pager.closest('.feed');
    var years = Array.prototype.map.call(pager.querySelectorAll('.yr'), function (b) { return b.dataset.year; });

    function filterYear(year) {
      var first = null;
      feed.querySelectorAll('article[data-year]').forEach(function (art) {
        var match = art.dataset.year === year;
        art.hidden = !match;
        art.classList.remove('first');
        if (match && !first) first = art;
      });
      if (first) first.classList.add('first');
      pager.querySelectorAll('.yr').forEach(function (b) {
        b.classList.toggle('active', b.dataset.year === year);
      });
    }
    pager.querySelectorAll('.yr').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); filterYear(b.dataset.year); });
    });
    if (years.length) filterYear(years[0]); // buttons are newest-first
  }
})();
