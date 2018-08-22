$(function(){
	// banner、视频中心轮播
	var swiper = new Swiper('.swiper-container,.swiper-container2', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

	// 产品中心轮播

    var swiper1 = new Swiper('.swiper-container1', {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
    // 潮流资讯轮播
    var swiper2 = new Swiper('.swiper-container3', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  
});

