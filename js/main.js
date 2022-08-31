const main_itemEl = document.querySelector(".cgv-menu-bar .cgv-menu");
const menu_hiddenEl = document.querySelector(".menu-hidden");

main_itemEl.addEventListener("mouseover",function(event) {
  menu_hiddenEl.classList.add("visible");
});
main_itemEl?.addEventListener("mouseout",function(event) {
  menu_hiddenEl.classList.remove("visible");
});

menu_hiddenEl.addEventListener("mouseover",function(event){
  menu_hiddenEl.classList.add("visible");
});

menu_hiddenEl.addEventListener("mouseout",function(event){
  menu_hiddenEl.classList.remove("visible");
});