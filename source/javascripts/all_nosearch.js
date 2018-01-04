//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});
