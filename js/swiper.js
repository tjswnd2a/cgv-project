// movie

let movie_swiper = new Swiper('.movie-chart-area .swiper', {
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

export function swiper_init(){
  movie_swiper.slideTo(0, 0, false);
}

// event

let event_swiper = new Swiper('.event-area .swiper', {
  // Optional parameters
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper--next',
    prevEl: '.swiper-prev',
  },

  // And if we need scrollbar
});

event_swiper.autoplay.stop(); 
// 자세한건 모르겠지만 autoplay설정시 한번 멈춰줘야지 
// autoplay_controller함수에서 작동함

export function autoplay_controller(auto) {

  console.log(auto);
  if( auto === true ) {
    event_swiper.autoplay.start();
  }else{
    event_swiper.autoplay.stop();
  }
}

let card_swiper = new Swiper('.cgv-info .swiper', {
  // Optional parameters
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});