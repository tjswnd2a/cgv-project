const {
  throttle,
  transform
} = require("lodash");

const main_itemEl = document.querySelector(".cgv-menu-bar .cgv-menu");
const menu_hiddenEl = document.querySelector(".menu-hidden");
let menu_active = false;


main_itemEl.addEventListener("mouseover", function (event) {
  menu_hiddenEl.classList.add("visible");
});
main_itemEl.addEventListener("mouseout", function (event) {
  menu_hiddenEl.classList.remove("visible");
});

menu_hiddenEl.addEventListener("mouseover", function (event) {
  menu_hiddenEl.classList.add("visible");
});

menu_hiddenEl.addEventListener("mouseout", function (event) {
  menu_hiddenEl.classList.remove("visible");
});

const fix_menu = document.querySelector(".fix-menu");
const fix_menu_item = document.querySelector(".fix-menu .menu");

const btn_badge = document.querySelector(".btn-badge");
const badge_BtnTop = document.querySelector(".btn-badge .btn-top");


window.addEventListener("scroll", throttle(function () {
  if (window.scrollY < 100) {

    gsap.to(fix_menu, 0, {
      display: 'none'
    })

    gsap.to(menu_hiddenEl, 0, {
      position: "absolute",
      top: "156px",
      transition: "0"
    })

    gsap.to(btn_badge, .5, {
      opacity: 0,

      display: "none"
    })

  } else {
    gsap.to(fix_menu, 0, {
      display: "block"
    })
    gsap.to(menu_hiddenEl, 0, {
      position: "fixed",
      top: "70px",
    })
    gsap.to(btn_badge, .5, {
      opacity: 1,
      display: "flex"
    })
  }
  
}));

fix_menu_item.addEventListener("mouseover", function (evnet) {
  window.addEventListener("scroll", throttle(function () {
    if (window.scrollY < 100) {
      fix_menu_item.addEventListener("mouseout", function (evnet) {
        if (menu_active === false) {
          menu_hiddenEl.classList.remove("visible");
        }
      })
    }else {
      menu_active = true;
    }
  }))
  menu_hiddenEl.classList.add("visible");
})

// fix_menu_item.addEventListener("mouseout", function (evnet) {
//   if (menu_active === false) {
//     menu_hiddenEl.classList.remove("visible");
//   }
// })

badge_BtnTop.addEventListener("click", function(){
  window.scrollTo({top: 0, left: 0, behavior:'smooth'}); // x좌표, y좌표
})