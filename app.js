/* Mobile Lab Project — static interactivity (no dependencies, works via file://) */
(function () {
  'use strict';
  var pages = {};
  document.querySelectorAll('.page').forEach(function (p) { pages[p.dataset.page] = p; });

  var navlinks = document.querySelectorAll('[data-nav]');
  var scrim = document.querySelector('.scrim');

  function setActiveNav(name) {
    document.querySelectorAll('.navlink, .drawerlink').forEach(function (a) {
      a.classList.toggle('active', a.dataset.nav === name);
    });
  }

  function showPage(name) {
    Object.keys(pages).forEach(function (k) { pages[k].hidden = (k !== name); });
    setActiveNav(name);
    if (name === 'Projects') resetProjects();
    window.scrollTo(0, 0);
  }

  navlinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      showPage(a.dataset.nav);
      closeDrawer();
    });
  });

  /* ---- mobile drawer ---- */
  var burger = document.querySelector('.hamburger');
  var closeBtn = document.querySelector('.drawer .close');
  function openDrawer() { if (scrim) scrim.hidden = false; }
  function closeDrawer() { if (scrim) scrim.hidden = true; }
  if (burger) burger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim) scrim.addEventListener('click', function (e) { if (e.target === scrim) closeDrawer(); });

  /* ---- year pagers (News / Press) ---- */
  document.querySelectorAll('.pager').forEach(function (pager) {
    var pageName = pager.dataset.pager;
    var page = pages[pageName];
    var years = Array.prototype.map.call(pager.querySelectorAll('.yr'), function (b) { return b.dataset.year; });

    function filterYear(year) {
      var first = null;
      page.querySelectorAll('article[data-year]').forEach(function (art) {
        var match = art.dataset.year === year;
        art.hidden = !match;
        art.classList.toggle('first', false);
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
    if (years.length) filterYear(years[0]); // newest first (buttons are desc)
  });

  /* ---- projects: 3-level navigation ---- */
  var projPage = pages['Projects'];
  function resetProjects() {
    if (!projPage) return;
    projPage.querySelector('[data-level="cats"]').hidden = false;
    projPage.querySelectorAll('.projlist, .projdetail').forEach(function (el) { el.hidden = true; });
  }
  if (projPage) {
    var catsNav = projPage.querySelector('[data-level="cats"]');
    function showList(cat) {
      catsNav.hidden = true;
      projPage.querySelectorAll('.projlist, .projdetail').forEach(function (el) { el.hidden = true; });
      var list = projPage.querySelector('.projlist[data-list="' + cat + '"]');
      if (list) list.hidden = false;
      window.scrollTo(0, 0);
    }
    function showDetail(pid) {
      catsNav.hidden = true;
      projPage.querySelectorAll('.projlist, .projdetail').forEach(function (el) { el.hidden = true; });
      var d = projPage.querySelector('.projdetail[data-detail="' + pid + '"]');
      if (d) d.hidden = false;
      window.scrollTo(0, 0);
    }
    projPage.addEventListener('click', function (e) {
      var t = e.target.closest('[data-cat],[data-proj],[data-back]');
      if (!t || !projPage.contains(t)) return;
      e.preventDefault();
      if (t.dataset.back === 'cats') { resetProjects(); }
      else if (t.dataset.back === 'list') { showList(t.dataset.cat); }
      else if (t.dataset.proj) { showDetail(t.dataset.proj); }
      else if (t.dataset.cat && t.classList.contains('plink')) { showList(t.dataset.cat); }
    });
  }

  showPage('News');
})();
