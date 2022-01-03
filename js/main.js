$(document).ready(function(){
    var $grid = $('.protfolio-active').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth:1
  }
})
    // filter items on button click
$('.protfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
})