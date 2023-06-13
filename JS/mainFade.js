window.addEventListener("load", sidenVises);
document.querySelector("main").classList.add("hide");

function sidenVises() {
  document.querySelector("main").classList.remove("hide");
  document.querySelector("main").classList.add("fadeUp");
}
