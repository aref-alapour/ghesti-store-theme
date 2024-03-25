$(document).ready(function () {
  const swiper_product = new Swiper('.productSlider', {
    slidesPerView: "auto",
    spaceBetween: 20,
  });
  $('.humburger-menu-icon').click(function (e) {
    $('#background-overlay').toggle();
    $('.mobile-list').addClass('active');
    $('.mobile-list-close').addClass('active');
  });
  $('.mobile-list-close').click(function (e) {
    $('#background-overlay').toggle();
    $('.mobile-list').removeClass('active');
    $('.mobile-list-close').removeClass('active');
  });
  $('#background-overlay').click(function (e) {
    $('#background-overlay').toggle();
    $('.mobile-list').removeClass('active');
    $('.mobile-list-close').removeClass('active');
  });
  $('.mobile-dropdown').after().click(function (e) {
    $(this).children('ul').fadeToggle();
    $(this).toggleClass('active');
    e.stopPropagation();
  });
  $('#progressRange').change(function (e) {
    const priceCount = this.value;
    const requestedAmount = document.querySelector('#requested-amount');
    requestedAmount.innerHTML = priceCount;
    const amountPrice = Number(priceCount + '000000');
    const monthsValue = Number($("[name=radio]:checked").val());
    const wageCountAmount = (amountPrice * 2.5) / 100;
    const wageCount = document.querySelector('#wageCount');
    wageCount.innerHTML = wageCountAmount.toLocaleString();
    const allCount = document.querySelector('#allCount');
    allCount.innerHTML = (amountPrice + wageCountAmount).toLocaleString();
    const monthsCount = document.querySelector('#monthsCount');
    monthsCount.innerHTML = (Math.ceil(amountPrice/monthsValue)).toLocaleString();
    
  });
  $('#ghestiMonths').on('click', function () {
    const priceCount = document.querySelector('#progressRange').value;
      const monthsValue = Number($("[name=radio]:checked").val());
      const amountPrice = Number(priceCount + '000000');
      const monthsCount = document.querySelector('#monthsCount');
      monthsCount.innerHTML = (Math.ceil(amountPrice/monthsValue)).toLocaleString();
    })
});
// AdvertiseBanner
var swiper = new Swiper(".advrtiseBanner", {
      slidesPerView: 1,
      spaceBetween: 30,
    loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})