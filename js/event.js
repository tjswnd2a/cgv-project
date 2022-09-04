import * as swiper from "./swiper";

let btn_play = document.querySelector(".event-area .btn-play.focus");
let btn_stop = document.querySelector(".event-area .btn-stop");

btn_play.addEventListener("click", function(){
  btn_play.classList.remove("focus");
  btn_stop.classList.add("focus");
  swiper.autoplay_controller(true);
});

btn_stop.addEventListener("click", function(){
  btn_stop.classList.remove("focus");
  btn_play.classList.add("focus");
  swiper.autoplay_controller(false);
});
