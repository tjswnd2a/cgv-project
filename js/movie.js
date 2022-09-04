// import {swiper_init} from './swiper';
import * as swiper from './swiper';

const movie_chartEl = document.querySelector(".movie-chart-area .movie-inpormation .movie-chart");
const movie_expectedEl = document.querySelector(".movie-chart-area .movie-inpormation .movie-expected");

let chart_contentEl = document.querySelectorAll(".movie-chart-area .chart-content.visible");
let expected_contentEl = document.querySelectorAll(".movie-chart-area .expected-content");

let chart_active = true;
let expected_active = false;

const mv1_changeEl = document.querySelectorAll(".movie.chart-images");
const mv2_changeEl = document.querySelectorAll(".movie2.chart-images");

function images_change(active) {
  if (active === true) {
    for (let i = 0; i < mv1_changeEl.length; i++) {
      mv1_changeEl[i].classList.remove("expect-images");
      mv2_changeEl[i].classList.remove("expect-images");

      mv1_changeEl[i].classList.add("chart-images");
      mv2_changeEl[i].classList.add("chart-images");
    }
  } else {
    for (let i = 0; i < mv2_changeEl.length; i++) {
      mv1_changeEl[i].classList.remove("chart-images");
      mv2_changeEl[i].classList.remove("chart-images");

      mv1_changeEl[i].classList.add("expect-images");
      mv2_changeEl[i].classList.add("expect-images");
    }
  }
}


function content_change(active) {
  if (active === true) {
    for (let i = 0; i < chart_contentEl.length; i++) {
      chart_contentEl[i].classList.add("visible");
      expected_contentEl[i].classList.remove("visible");
    }
  } else {
    for (let i = 0; i < expected_contentEl.length; i++) {
      expected_contentEl[i].classList.add("visible");
      chart_contentEl[i].classList.remove("visible");
    }
  }
}

movie_chartEl.addEventListener("click", function () {
  if (chart_active === false) {
    movie_chartEl.classList.add("active");
    movie_expectedEl.classList.remove("active");

    chart_active = true;
    expected_active = false;

    content_change(chart_active);
    images_change(chart_active);

    swiper.swiper_init();
  }
});

movie_expectedEl.addEventListener("click", function () {
  if (expected_active === false) {
    movie_expectedEl.classList.add("active");
    movie_chartEl.classList.remove("active");

    expected_active = true;
    chart_active = false;

    content_change(chart_active);
    images_change(chart_active);

    swiper.swiper_init();
  }
});