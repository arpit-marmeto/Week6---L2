document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide').mount();
  if (splide) {
      document.querySelectorAll('.shop-the-look__media-hotspots').forEach(function (hotspot) {
          hotspot.addEventListener('click', function () {
              var index = this.getAttribute('data-i');
              splide.go(parseInt(index, 10));
          });
      });
  }
});
