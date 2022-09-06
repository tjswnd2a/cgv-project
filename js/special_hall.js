const Hall_Img = document.querySelectorAll(".special-hall .special-info .hall-image .hall");

const CinemaEl = document.querySelector(".special-hall .special-info .item-CINEMA");
const LiveEl = document.querySelector(".special-hall .special-info .item-LIVINGROOM");
const FourDxEl = document.querySelector(".special-hall .special-info .item-4DX");
const ChefEl = document.querySelector(".special-hall .special-info .item-CHEF");

let temp = CinemaEl;


function Picture_Init(){
  for(let i = 0; i < Hall_Img.length; i++ ) {
    Hall_Img[i].classList.remove("view");
  }
}

function FocusChange(movie_hall) {
  temp.classList.remove("focus");
  temp = movie_hall;
  temp.classList.add("focus");
}

CinemaEl.addEventListener("mouseover",function(){
  Picture_Init();
  FocusChange(CinemaEl);
  Hall_Img[0].classList.add("view");
})

LiveEl.addEventListener("mouseover",function(){
  Picture_Init();
  FocusChange(LiveEl);
  Hall_Img[1].classList.add("view");
})

FourDxEl.addEventListener("mouseover",function(){
  Picture_Init();
  FocusChange(FourDxEl);
  Hall_Img[2].classList.add("view");
})

ChefEl.addEventListener("mouseover",function(){
  Picture_Init();
  FocusChange(ChefEl);
  Hall_Img[3].classList.add("view");
})